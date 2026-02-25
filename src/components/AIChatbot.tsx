"use client";
import { useState, useEffect, useRef } from "react";
import { X, Send, ChevronDown } from "lucide-react";

const G = "#C9A84C";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

// Generate a unique session ID per browser session
const getSessionId = () => {
  if (typeof window === "undefined") return "ssr";
  let id = sessionStorage.getItem("elegantebee_chat_session");
  if (!id) {
    id = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem("elegantebee_chat_session", id);
  }
  return id;
};

type Message = {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

const SUGGESTIONS = [
  "What events do you specialize in?",
  "How much does event planning cost?",
  "How do I book a discovery call?",
  "Do you serve clients in Nigeria?",
  "Who is the founder of EleganteBee?",
  "What's included in a proposal?",
];

// Sleek Gold Robot SVG Avatar
function RobotAvatar({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="2" x2="20" y2="8" stroke={G} strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="2" r="1.5" fill={G} />
      <rect x="8" y="8" width="24" height="18" rx="5" fill="#1a1a1a" stroke={G} strokeWidth="1.5" />
      <rect x="12" y="13" width="6" height="5" rx="2" fill={G} opacity="0.9" />
      <rect x="22" y="13" width="6" height="5" rx="2" fill={G} opacity="0.9" />
      <rect x="13.5" y="14.5" width="2" height="2" rx="0.5" fill="#fff" opacity="0.7" />
      <rect x="23.5" y="14.5" width="2" height="2" rx="0.5" fill="#fff" opacity="0.7" />
      <rect x="14" y="21" width="12" height="2.5" rx="1.25" fill={G} opacity="0.6" />
      <rect x="17" y="26" width="6" height="3" rx="1" fill="#1a1a1a" stroke={G} strokeWidth="1" />
      <rect x="10" y="29" width="20" height="9" rx="3" fill="#1a1a1a" stroke={G} strokeWidth="1.5" />
      <circle cx="20" cy="33.5" r="2.5" fill={G} opacity="0.7" />
      <circle cx="20" cy="33.5" r="1.2" fill="#fff" opacity="0.5" />
    </svg>
  );
}

function RobotButtonIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="1" x2="20" y2="7" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="20" cy="1" r="2" fill="#000" />
      <rect x="7" y="7" width="26" height="20" rx="6" stroke="#000" strokeWidth="2" />
      <rect x="11" y="12" width="7" height="6" rx="2.5" fill="#000" />
      <rect x="22" y="12" width="7" height="6" rx="2.5" fill="#000" />
      <rect x="13" y="23" width="14" height="3" rx="1.5" fill="#000" opacity="0.6" />
      <rect x="16" y="27" width="8" height="4" rx="1.5" fill="#000" opacity="0.4" />
    </svg>
  );
}

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Welcome to EleganteBee Services ✨ I'm your AI assistant, here to help you plan extraordinary events. How may I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [unread, setUnread] = useState(0);
  const [pulse, setPulse] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sessionId = useRef<string>("");

  useEffect(() => {
    sessionId.current = getSessionId();
    const t = setTimeout(() => setPulse(true), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setPulse(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const sendMessage = async (text?: string) => {
    const userText = text || input.trim();
    if (!userText || loading) return;

    const userMsg: Message = { role: "user", content: userText, timestamp: new Date() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
    setShowSuggestions(false);

    try {
      const res = await fetch(`${API_URL}/api/chatbot/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionId.current,
          user_message: userText,
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        const assistantMsg: Message = {
          role: "assistant",
          content: data.reply,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMsg]);
        if (!open) setUnread((u) => u + 1);
      } else {
        throw new Error(data.message || "Unknown error");
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm having a brief interruption. Please reach us at elegantebybee@gmail.com or WhatsApp +1 240-604-0025.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <>
      {/* Chat Window */}
      <div
        className="fixed bottom-24 right-4 md:right-8 z-50 flex flex-col"
        style={{
          width: "min(420px, calc(100vw - 32px))",
          height: open ? "min(620px, calc(100vh - 130px))" : "0px",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          transform: open ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
          transformOrigin: "bottom right",
          transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.2)",
          background: "#0A0A0A",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 flex-shrink-0"
          style={{ background: "rgba(201,168,76,0.06)", borderBottom: `1px solid ${G}20` }}>
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #1a1a1a, #0a0a0a)", border: `1.5px solid ${G}` }}>
              <RobotAvatar size={30} />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-[#0A0A0A]"
                style={{ background: "#22c55e" }} />
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-none mb-0.5"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                EleganteBee Assistant
              </p>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }} />
                <p className="text-xs" style={{ color: `${G}80` }}>Online · Powered by AI</p>
              </div>
            </div>
          </div>
          <button onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.4)" }}>
            <ChevronDown size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
          style={{ scrollbarWidth: "thin", scrollbarColor: `${G}20 transparent` }}>

          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-2.5`}>
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ background: "linear-gradient(135deg,#1a1a1a,#0d0d0d)", border: `1px solid ${G}60` }}>
                  <RobotAvatar size={22} />
                </div>
              )}
              <div className="max-w-[78%]">
                <div className="px-4 py-3 text-sm leading-relaxed"
                  style={msg.role === "user"
                    ? { background: G, color: "#000", borderRadius: "18px 18px 4px 18px", fontWeight: 600, fontSize: "0.85rem" }
                    : { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.82)", borderRadius: "18px 18px 18px 4px", border: `1px solid rgba(255,255,255,0.07)`, fontFamily: "'Cormorant Garamond', serif", fontSize: "0.98rem", lineHeight: "1.78" }
                  }>
                  {msg.content}
                </div>
                <p className="text-xs mt-1 px-1" style={{ color: "rgba(255,255,255,0.18)" }}>
                  {formatTime(msg.timestamp)}
                </p>
              </div>
              {msg.role === "user" && (
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-xs font-bold"
                  style={{ background: `${G}20`, color: G, border: `1px solid ${G}40` }}>
                  You
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="flex justify-start gap-2.5">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#1a1a1a,#0d0d0d)", border: `1px solid ${G}60` }}>
                <RobotAvatar size={22} />
              </div>
              <div className="px-4 py-3 rounded-2xl flex items-center gap-1.5"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full animate-bounce"
                    style={{ background: G, animationDelay: `${i * 0.18}s`, animationDuration: "0.9s" }} />
                ))}
              </div>
            </div>
          )}

          {/* Suggestions */}
          {showSuggestions && messages.length === 1 && (
            <div className="space-y-2 pt-1">
              <p className="text-xs px-1 mb-3" style={{ color: "rgba(255,255,255,0.25)" }}>— Quick questions —</p>
              <div className="grid grid-cols-2 gap-2">
                {SUGGESTIONS.map((s, i) => (
                  <button key={i} onClick={() => sendMessage(s)}
                    className="text-left px-3 py-2.5 rounded-xl text-xs transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${G}18`, color: "rgba(255,255,255,0.55)", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.88rem", lineHeight: "1.4" }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="px-4 py-3 flex-shrink-0"
          style={{ borderTop: `1px solid ${G}12`, background: "rgba(0,0,0,0.4)" }}>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl transition-all duration-300"
            style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${input ? G + "50" : G + "18"}` }}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask me anything about EleganteBee..."
              className="flex-1 bg-transparent outline-none text-sm"
              style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem" }}
            />
            <button onClick={() => sendMessage()} disabled={!input.trim() || loading}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-25 hover:scale-110"
              style={{ background: input.trim() ? G : "transparent", color: input.trim() ? "#000" : G, border: input.trim() ? "none" : `1px solid ${G}30` }}>
              <Send size={14} />
            </button>
          </div>
          <p className="text-center text-xs mt-2" style={{ color: "rgba(255,255,255,0.12)", fontFamily: "'Cormorant Garamond', serif" }}>
            EleganteBee AI Assistant · elegantebybee@gmail.com
          </p>
        </div>
      </div>

      {/* Floating Robot Button */}
      <div className="fixed bottom-6 right-4 md:right-8 z-50">
        {pulse && !open && (
          <div className="absolute inset-0 rounded-full animate-ping opacity-30"
            style={{ background: G, animationDuration: "2s" }} />
        )}
        <button onClick={() => setOpen((o) => !o)}
          className="relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          style={{
            background: open ? "rgba(10,10,10,0.95)" : `linear-gradient(135deg, ${G}, #a07828)`,
            boxShadow: open ? `0 0 0 2px ${G}, 0 8px 32px rgba(0,0,0,0.5)` : `0 8px 32px rgba(201,168,76,0.45)`,
            border: open ? `2px solid ${G}` : "none",
          }}
          aria-label="Chat with EleganteBee AI">
          {open ? <X size={20} color={G} /> : <RobotButtonIcon />}
        </button>
        {unread > 0 && !open && (
          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold animate-bounce"
            style={{ background: "#ef4444", color: "white", fontSize: "10px" }}>
            {unread}
          </div>
        )}
      </div>
    </>
  );
}