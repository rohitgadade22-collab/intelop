import { useState } from "react";
import { MessageCircle, X, Send, Mic, Paperclip, Sparkles } from "lucide-react";

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const suggestions = [
    "Show me today's attendance summary",
    "Which servers need attention?",
    "Analyze ticket trends this week",
    "Predict next week's workload",
  ];

  const messages = [
    { role: "assistant", text: "Hello! I'm your AI assistant. How can I help you today?" },
    { role: "user", text: "Show me critical alerts" },
    {
      role: "assistant",
      text: "I found 3 critical alerts:\n1. Server CPU at 92%\n2. Database connection pool saturated\n3. SLA breach on Ticket #2847",
    },
  ];

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50"
        >
          <MessageCircle className="w-6 h-6 text-white" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-slate-950 flex items-center justify-center">
            <span className="text-xs font-bold">3</span>
          </div>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl flex flex-col z-50">
          <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-gradient-to-r from-blue-600/20 to-purple-600/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs text-slate-400">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-800 text-slate-100"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{msg.text}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-75" />
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-150" />
            </div>
          </div>

          <div className="p-4 border-t border-slate-800">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {suggestions.slice(0, 2).map((suggestion, idx) => (
                <button
                  key={idx}
                  className="px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-xs hover:bg-slate-800 transition-colors text-left"
                >
                  {suggestion}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                <Paperclip className="w-5 h-5 text-slate-400" />
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-slate-500"
              />
              <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                <Mic className="w-5 h-5 text-slate-400" />
              </button>
              <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
