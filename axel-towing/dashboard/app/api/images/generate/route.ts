import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent";

export async function POST(req: NextRequest) {
  if (!GEMINI_API_KEY) {
    return NextResponse.json(
      { error: "GEMINI_API_KEY is not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const {
      prompt,
      aspectRatio = "16:9",
      style,
    } = body as {
      prompt: string;
      aspectRatio?: "16:9" | "3:2" | "1:1";
      style?: string;
    };

    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      return NextResponse.json(
        { error: "A prompt is required" },
        { status: 400 }
      );
    }

    // Build enhanced prompt for towing-specific imagery
    let enhancedPrompt = "Professional commercial photography. ";
    if (style) {
      enhancedPrompt += `${style}. `;
    }
    enhancedPrompt += prompt.trim();

    const geminiRes = await fetch(`${GEMINI_URL}`, {
      method: "POST",
      headers: {
        "x-goog-api-key": GEMINI_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: enhancedPrompt }],
          },
        ],
        generationConfig: {
          responseModalities: ["TEXT", "IMAGE"],
          imageConfig: {
            aspectRatio,
            imageSize: "1K",
          },
        },
      }),
    });

    if (!geminiRes.ok) {
      const errorText = await geminiRes.text();
      console.error("Gemini API error:", geminiRes.status, errorText);
      return NextResponse.json(
        {
          error: `Gemini API error: ${geminiRes.status}`,
          details: errorText,
        },
        { status: geminiRes.status }
      );
    }

    const data = await geminiRes.json();

    // Extract image from response parts
    const parts = data?.candidates?.[0]?.content?.parts;
    if (!parts || !Array.isArray(parts)) {
      return NextResponse.json(
        { error: "No content returned from Gemini" },
        { status: 502 }
      );
    }

    let imageData: { dataUrl: string; mimeType: string } | null = null;
    let responseText = "";

    for (const part of parts) {
      if (part.inlineData) {
        const { data: b64, mimeType } = part.inlineData;
        imageData = {
          dataUrl: `data:${mimeType};base64,${b64}`,
          mimeType,
        };
      }
      if (part.text) {
        responseText += part.text;
      }
    }

    if (!imageData) {
      return NextResponse.json(
        {
          error: "No image was generated. The model returned text only.",
          text: responseText,
        },
        { status: 422 }
      );
    }

    return NextResponse.json({
      image: imageData,
      prompt: enhancedPrompt,
      aspectRatio,
      text: responseText || undefined,
    });
  } catch (err) {
    console.error("Image generation error:", err);
    return NextResponse.json(
      { error: "Internal server error during image generation" },
      { status: 500 }
    );
  }
}
