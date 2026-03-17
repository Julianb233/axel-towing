"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  COMPANY_KNOWLEDGE,
  type ChatMessage,
  type ChatOption,
  type ConversationStep,
  type RequestType,
  type ChatbotRequest,
} from "@/lib/chatbot-knowledge";
import { submitToDispatch } from "@/lib/towbook";
import { COMPANY } from "@/lib/constants";

let msgCounter = 0;
function createMsg(
  role: "assistant" | "user",
  content: string,
  options?: ChatOption[],
): ChatMessage {
  return {
    id: `msg-${++msgCounter}`,
    role,
    content,
    timestamp: Date.now(),
    options,
  };
}

const REQUEST_TYPE_OPTIONS: ChatOption[] = [
  { label: "Request a Tow", value: "tow-request" },
  { label: "Request Stickering", value: "stickering" },
  { label: "Schedule a Patrol", value: "patrol-request" },
  { label: "Request a Report", value: "report" },
  { label: "Ask a Question", value: "question" },
];

const URGENCY_OPTIONS: ChatOption[] = [
  { label: "Yes, urgent (same-day)", value: "yes" },
  { label: "No, standard timing is fine", value: "no" },
];

const CONFIRM_OPTIONS: ChatOption[] = [
  { label: "Submit Request", value: "confirm" },
  { label: "Start Over", value: "restart" },
];

/** Steps that apply to each request type after common info is collected */
const TYPE_STEPS: Record<RequestType, ConversationStep[]> = {
  "tow-request": [
    "collect-vehicle-description",
    "collect-license-plate",
    "collect-location-on-property",
    "collect-violation",
    "collect-urgent",
    "collect-additional-notes",
    "confirm",
  ],
  stickering: [
    "collect-stickering-count",
    "collect-stickering-notes",
    "collect-urgent",
    "collect-additional-notes",
    "confirm",
  ],
  "patrol-request": [
    "collect-patrol-schedule",
    "collect-patrol-notes",
    "collect-additional-notes",
    "confirm",
  ],
  report: ["collect-additional-notes", "confirm"],
  question: [],
};

const COMMON_STEPS: ConversationStep[] = [
  "collect-name",
  "collect-phone",
  "collect-email",
  "collect-property-name",
  "collect-property-address",
];

export default function PropertyManagerChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [step, setStep] = useState<ConversationStep>("welcome");
  const [inputValue, setInputValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [request, setRequest] = useState<Partial<ChatbotRequest>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, step]);

  /** Add assistant message */
  const addAssistant = useCallback(
    (content: string, options?: ChatOption[]) => {
      setMessages((prev) => [...prev, createMsg("assistant", content, options)]);
    },
    [],
  );

  /** Initialize chat on first open */
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addAssistant(
        `Hi! I'm the Axle Towing property manager assistant. I can help you submit tow requests, schedule stickering, arrange patrols, or answer questions about our services.\n\nWhat can I help you with today?`,
        REQUEST_TYPE_OPTIONS,
      );
      setStep("select-type");
    }
  }, [isOpen, messages.length, addAssistant]);

  /** Get the next step in the flow */
  function getNextStep(currentStep: ConversationStep): ConversationStep | null {
    const reqType = request.type;
    if (!reqType) return null;

    const commonIdx = COMMON_STEPS.indexOf(currentStep);
    if (commonIdx >= 0 && commonIdx < COMMON_STEPS.length - 1) {
      return COMMON_STEPS[commonIdx + 1];
    }
    if (commonIdx === COMMON_STEPS.length - 1) {
      const typeSteps = TYPE_STEPS[reqType];
      return typeSteps.length > 0 ? typeSteps[0] : "confirm";
    }

    const typeSteps = TYPE_STEPS[reqType];
    const typeIdx = typeSteps.indexOf(currentStep);
    if (typeIdx >= 0 && typeIdx < typeSteps.length - 1) {
      return typeSteps[typeIdx + 1];
    }

    return null;
  }

  /** Ask the question for a given step */
  function askForStep(nextStep: ConversationStep) {
    setStep(nextStep);
    const prompts: Record<string, { text: string; options?: ChatOption[] }> = {
      "collect-name": { text: "What's your name?" },
      "collect-phone": { text: "What's the best phone number to reach you?" },
      "collect-email": { text: "And your email address?" },
      "collect-property-name": {
        text: "What's the name of your property? (e.g., Sunset Apartments, Desert Ridge Plaza)",
      },
      "collect-property-address": { text: "What's the property address?" },
      "collect-vehicle-description": {
        text: "Describe the vehicle that needs to be towed (make, model, color).",
      },
      "collect-license-plate": {
        text: "What's the license plate number? (Type 'skip' if not visible)",
      },
      "collect-location-on-property": {
        text: "Where on the property is the vehicle? (e.g., Lot B, Space 42, near Building 3)",
      },
      "collect-violation": {
        text: "What's the violation? (e.g., no permit, fire lane, expired registration, blocking access)",
      },
      "collect-urgent": {
        text: "Is this urgent? Urgent requests get same-day priority response.",
        options: URGENCY_OPTIONS,
      },
      "collect-stickering-count": {
        text: "How many vehicles need to be stickered?",
      },
      "collect-stickering-notes": {
        text: "Any specific details about which vehicles or areas? (Type 'skip' if none)",
      },
      "collect-patrol-schedule": {
        text: "When would you like patrols scheduled? (e.g., weekday evenings, weekends, specific days)",
      },
      "collect-patrol-notes": {
        text: "Any specific areas or concerns for the patrol? (Type 'skip' if none)",
      },
      "collect-additional-notes": {
        text: "Anything else we should know? (Type 'skip' if nothing to add)",
      },
      confirm: { text: buildSummary(), options: CONFIRM_OPTIONS },
    };

    const prompt = prompts[nextStep];
    if (prompt) {
      setTimeout(() => addAssistant(prompt.text, prompt.options), 400);
    }
  }

  /** Build a summary of collected info */
  function buildSummary(): string {
    const typeLabelMap: Record<string, string> = {
      "tow-request": "Tow Request",
      stickering: "Stickering Request",
      "patrol-request": "Patrol Request",
      report: "Report Request",
      question: "General Inquiry",
    };
    const typeLabel = (request.type && typeLabelMap[request.type]) || "Request";

    let summary = `Here's a summary of your ${typeLabel}:\n\n`;
    summary += `Contact: ${request.contactName}\n`;
    summary += `Phone: ${request.contactPhone}\n`;
    summary += `Email: ${request.contactEmail}\n`;
    summary += `Property: ${request.propertyName}\n`;
    summary += `Address: ${request.propertyAddress}\n`;

    if (request.type === "tow-request") {
      summary += `\nVehicle: ${request.vehicleDescription || "N/A"}\n`;
      summary += `Plate: ${request.licensePlate || "Not visible"}\n`;
      summary += `Location: ${request.locationOnProperty || "N/A"}\n`;
      summary += `Violation: ${request.violation || "N/A"}\n`;
      summary += `Urgent: ${request.urgent ? "Yes" : "No"}\n`;
    } else if (request.type === "stickering") {
      summary += `\nVehicles: ${request.numberOfVehicles || "N/A"}\n`;
      if (request.stickeringNotes) summary += `Notes: ${request.stickeringNotes}\n`;
      summary += `Urgent: ${request.urgent ? "Yes" : "No"}\n`;
    } else if (request.type === "patrol-request") {
      summary += `\nSchedule: ${request.patrolSchedule || "N/A"}\n`;
      if (request.patrolNotes) summary += `Notes: ${request.patrolNotes}\n`;
    }

    if (request.additionalNotes) {
      summary += `\nAdditional: ${request.additionalNotes}\n`;
    }

    summary += "\nDoes this look correct?";
    return summary;
  }

  /** Handle FAQ questions */
  function handleFAQ(question: string) {
    const q = question.toLowerCase();
    const faq = COMPANY_KNOWLEDGE.faq;

    // Simple keyword matching
    for (const item of faq) {
      const keywords = item.q.toLowerCase().split(" ");
      const matchCount = keywords.filter((kw) => kw.length > 3 && q.includes(kw)).length;
      if (matchCount >= 2) {
        addAssistant(item.a);
        setTimeout(() => {
          addAssistant(
            "Is there anything else I can help with?",
            [
              ...REQUEST_TYPE_OPTIONS.filter((o) => o.value !== "question"),
              { label: "Ask another question", value: "question" },
            ],
          );
          setStep("select-type");
        }, 600);
        return;
      }
    }

    // Fallback
    addAssistant(
      `I'm not sure about that specific question. Here are some things I can help with:\n\n` +
      `- Tow requests and vehicle removal\n` +
      `- Parking stickering and enforcement\n` +
      `- Patrol scheduling\n` +
      `- Monthly reports\n\n` +
      `For specific questions, you can call our team at ${COMPANY.phone} or email ${COMPANY_KNOWLEDGE.email}.`,
    );
    setTimeout(() => {
      addAssistant("Would you like to submit a request instead?", REQUEST_TYPE_OPTIONS);
      setStep("select-type");
    }, 600);
  }

  /** Process user input based on current step */
  function processInput(value: string) {
    setMessages((prev) => [...prev, createMsg("user", value)]);
    const trimmed = value.trim();
    const isSkip = trimmed.toLowerCase() === "skip";

    switch (step) {
      case "select-type": {
        const type = trimmed as RequestType;
        setRequest((prev) => ({ ...prev, type }));
        if (type === "question") {
          setStep("faq");
          setTimeout(
            () => addAssistant("Sure! What would you like to know about our services?"),
            400,
          );
          return;
        }
        const typeLabels: Record<string, string> = {
          "tow-request": "a tow request",
          stickering: "a stickering request",
          "patrol-request": "a patrol request",
          report: "a report request",
        };
        setTimeout(() => {
          addAssistant(
            `Got it, I'll help you submit ${typeLabels[type] || "a request"}. I need a few details first.`,
          );
          setTimeout(() => askForStep("collect-name"), 400);
        }, 400);
        return;
      }

      case "faq":
        handleFAQ(trimmed);
        return;

      case "collect-name":
        setRequest((prev) => ({ ...prev, contactName: trimmed }));
        break;

      case "collect-phone":
        setRequest((prev) => ({ ...prev, contactPhone: trimmed }));
        break;

      case "collect-email":
        setRequest((prev) => ({ ...prev, contactEmail: trimmed }));
        break;

      case "collect-property-name":
        setRequest((prev) => ({ ...prev, propertyName: trimmed }));
        break;

      case "collect-property-address":
        setRequest((prev) => ({ ...prev, propertyAddress: trimmed }));
        break;

      case "collect-vehicle-description":
        setRequest((prev) => ({ ...prev, vehicleDescription: trimmed }));
        break;

      case "collect-license-plate":
        setRequest((prev) => ({
          ...prev,
          licensePlate: isSkip ? undefined : trimmed,
        }));
        break;

      case "collect-location-on-property":
        setRequest((prev) => ({ ...prev, locationOnProperty: trimmed }));
        break;

      case "collect-violation":
        setRequest((prev) => ({ ...prev, violation: trimmed }));
        break;

      case "collect-urgent":
        setRequest((prev) => ({
          ...prev,
          urgent: trimmed.toLowerCase().startsWith("yes"),
        }));
        break;

      case "collect-stickering-count":
        setRequest((prev) => ({
          ...prev,
          numberOfVehicles: parseInt(trimmed) || undefined,
        }));
        break;

      case "collect-stickering-notes":
        setRequest((prev) => ({
          ...prev,
          stickeringNotes: isSkip ? undefined : trimmed,
        }));
        break;

      case "collect-patrol-schedule":
        setRequest((prev) => ({ ...prev, patrolSchedule: trimmed }));
        break;

      case "collect-patrol-notes":
        setRequest((prev) => ({
          ...prev,
          patrolNotes: isSkip ? undefined : trimmed,
        }));
        break;

      case "collect-additional-notes":
        setRequest((prev) => ({
          ...prev,
          additionalNotes: isSkip ? undefined : trimmed,
        }));
        break;

      case "confirm":
        if (trimmed === "restart") {
          resetChat();
          return;
        }
        if (trimmed === "confirm") {
          handleSubmit();
          return;
        }
        break;

      default:
        break;
    }

    // Move to next step
    const nextStep = getNextStep(step);
    if (nextStep) {
      askForStep(nextStep);
    }
  }

  /** Submit the completed request */
  async function handleSubmit() {
    setIsSubmitting(true);
    setStep("submitted");

    addAssistant("Submitting your request to dispatch...");

    try {
      const result = await submitToDispatch(request as ChatbotRequest);
      if (result.success) {
        setTimeout(() => {
          addAssistant(
            `Your request has been submitted!\n\n` +
            `Reference: ${result.referenceId}\n\n` +
            `Our dispatch team will review and respond ${request.urgent ? "with priority today" : "within 2 hours during business hours"}.\n\n` +
            `For emergencies, call dispatch directly at ${COMPANY.phone}.`,
          );
          setTimeout(() => {
            addAssistant("Would you like to submit another request?", [
              { label: "Submit another request", value: "new" },
              { label: "No, I'm done", value: "done" },
            ]);
            setStep("select-type");
          }, 600);
        }, 800);
      } else {
        setTimeout(() => {
          addAssistant(
            `There was an issue submitting your request. Please call dispatch directly at ${COMPANY.phone} and reference the details you provided.\n\nWe apologize for the inconvenience.`,
          );
        }, 800);
      }
    } catch {
      setTimeout(() => {
        addAssistant(
          `There was a connection issue. Please call dispatch at ${COMPANY.phone} to submit your request directly.`,
        );
      }, 800);
    } finally {
      setIsSubmitting(false);
    }
  }

  /** Reset chat to initial state */
  function resetChat() {
    setMessages([]);
    setRequest({});
    setStep("welcome");
    msgCounter = 0;
    setTimeout(() => {
      addAssistant(
        `Hi! I'm the Axle Towing property manager assistant. What can I help you with?`,
        REQUEST_TYPE_OPTIONS,
      );
      setStep("select-type");
    }, 300);
  }

  /** Handle option click */
  function handleOptionClick(value: string) {
    if (value === "new") {
      resetChat();
      return;
    }
    if (value === "done") {
      setMessages((prev) => [...prev, createMsg("user", "I'm done, thanks!")]);
      addAssistant(
        `Thank you for using the Axle Towing portal! If you need anything in the future, we're here 24/7 at ${COMPANY.phone}.`,
      );
      return;
    }
    processInput(value);
  }

  /** Handle form submission */
  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!inputValue.trim() || isSubmitting) return;
    processInput(inputValue.trim());
    setInputValue("");
  }

  /** Check if current step expects free text input */
  const showInput = ![
    "welcome",
    "submitted",
  ].includes(step) && !isSubmitting;

  return (
    <div className="fixed bottom-[88px] left-6 z-50 md:bottom-6 md:left-6">
      {/* Chat Window */}
      <div
        className={`absolute bottom-16 left-0 w-[360px] max-w-[calc(100vw-3rem)] transition-all duration-300 origin-bottom-left ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-90 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="rounded-2xl shadow-2xl overflow-hidden border border-gray-200 bg-white flex flex-col" style={{ maxHeight: "min(600px, calc(100vh - 180px))" }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 p-4 text-white flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-sm font-heading">Property Manager Assistant</h3>
              <p className="text-white/80 text-xs">Axle Towing &amp; Impound</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shrink-0"
              aria-label="Close chatbot"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50" style={{ minHeight: "200px" }}>
            {messages.map((msg) => (
              <div key={msg.id}>
                <div
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white rounded-br-md"
                        : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-md"
                    }`}
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {msg.content}
                  </div>
                </div>
                {/* Quick reply options */}
                {msg.options && msg.role === "assistant" && msg === messages[messages.length - 1] && (
                  <div className="flex flex-wrap gap-2 mt-2 ml-1">
                    {msg.options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleOptionClick(opt.value)}
                        className="text-xs bg-white border border-blue-200 text-blue-700 rounded-full px-3 py-1.5 hover:bg-blue-50 hover:border-blue-300 transition-colors font-medium shadow-sm"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isSubmitting && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-gray-100">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          {showInput && (
            <form
              onSubmit={handleFormSubmit}
              className="p-3 border-t border-gray-200 bg-white shrink-0"
            >
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your response..."
                  className="flex-1 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors shrink-0"
                  aria-label="Send message"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className={`group relative w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen ? "bg-gray-700 hover:bg-gray-800" : "bg-blue-900 hover:bg-blue-800"
        }`}
        aria-label={isOpen ? "Close property manager chatbot" : "Open property manager chatbot"}
        style={{ boxShadow: isOpen ? undefined : "0 4px 20px rgba(30, 58, 138, 0.3)" }}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
          </svg>
        )}
        {/* Tooltip */}
        {!isOpen && (
          <span className="absolute left-full ml-3 bg-gray-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Property Manager Chat
          </span>
        )}
        {/* Notification dot */}
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
        )}
      </button>
    </div>
  );
}
