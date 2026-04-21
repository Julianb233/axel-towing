import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Axle Towing & Impound";
  const subtitle =
    searchParams.get("subtitle") || "Professional Towing & Parking Management";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0c71c3 0%, #061a33 70%, #0a1628 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Accent stripe */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#e02b20",
            display: "flex",
          }}
        />

        {/* Bottom accent stripe */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#e02b20",
            display: "flex",
          }}
        />

        {/* Background decorative circle */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(14, 130, 220, 0.15)",
            display: "flex",
          }}
        />

        {/* Logo placeholder */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://axletowing.com/images/axle-towing-logo.png"
            alt="Axle Towing"
            width={180}
            height={180}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "900px",
            textAlign: "center",
            padding: "0 40px",
          }}
        >
          <h1
            style={{
              fontSize: title.length > 40 ? "42px" : "52px",
              fontWeight: 700,
              color: "#ffffff",
              margin: "0 0 16px 0",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "rgba(186, 218, 255, 0.85)",
              margin: "0 0 30px 0",
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </p>

          {/* Phone number badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(224, 43, 32, 0.9)",
              padding: "12px 28px",
              borderRadius: "8px",
            }}
          >
            <span
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "0.05em",
              }}
            >
              480-288-5526
            </span>
          </div>
        </div>

        {/* Location text */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              color: "rgba(186, 218, 255, 0.5)",
            }}
          >
            Phoenix & Apache Junction, AZ
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
