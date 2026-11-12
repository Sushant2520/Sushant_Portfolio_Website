import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles, User, RefreshCw } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function AIChatWidget({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: `Hi! 👋 I'm **Sushant's AI Assistant**. Ask me anything about his work experience at Infinity Tech, projects (LETZRYD, TONA, People Verse), tech skills, or contact info!`
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "Summarize Sushant's experience at Infinity Tech",
    "Tell me about the LETZRYD project & Rapido webhooks",
    "What is Sushant's Power BI & AWS S3 experience in TONA?",
    "How did People Verse automate candidate assessments by 80%?",
    "What is Sushant's contact info?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (queryText) => {
    const query = queryText || inputQuery;
    if (!query.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInputQuery('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });

      const data = await response.json();
      if (data.success && data.answer) {
        setMessages([...newMessages, { sender: 'ai', text: data.answer }]);
      } else {
        setMessages([
          ...newMessages,
          { sender: 'ai', text: "Sushant is an AI Data Analyst & Business Analyst at Infinity Tech with 1 year experience, skilled in PostgreSQL, FastAPI, Power BI, AWS S3, and LLMs. You can reach him at sushant.tripathi2000.st@gmail.com!" }
        ]);
      }
    } catch (err) {
      setMessages([
        ...newMessages,
        { sender: 'ai', text: "Sushant has 1 year experience as an AI Data Analyst & Business Analyst at Infinity Tech Global Solutions, specialized in PostgreSQL, FastAPI, Power BI, and GenAI assessment pipelines!" }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-[#0e120e] border border-white/10 rounded-2xl w-full max-w-xl h-[580px] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="p-4 bg-[#070907] border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-lime-400 flex items-center justify-center text-black font-bold shadow-lg shadow-lime-500/20">
              <Sparkles className="w-5 h-5 text-black" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                Ask Sushant AI Assistant
              </h3>
              <p className="text-[11px] font-mono text-lime-400">
                Trained on Sushant Tripathi's Resume & Portfolio
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="p-3 bg-[#070907]/60 border-b border-zinc-800 flex gap-2 overflow-x-auto no-scrollbar">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="text-[11px] font-mono whitespace-nowrap px-3 py-1 rounded-full bg-zinc-900 text-lime-300 hover:bg-lime-500/20 hover:text-white border border-zinc-800 transition-all shrink-0"
            >
              ⚡ {prompt}
            </button>
          ))}
        </div>

        {/* Message Container */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-[80%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-lime-400 text-black font-semibold rounded-tr-none'
                    : 'bg-zinc-900/90 text-zinc-200 border border-zinc-800 rounded-tl-none font-sans'
                }`}
              >
                {msg.text.split('\n').map((line, i) => (
                  <p key={i} className={i > 0 ? 'mt-1.5' : ''}>
                    {line}
                  </p>
                ))}
              </div>
              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-lime-500/20 border border-lime-500/30 flex items-center justify-center text-lime-400 shrink-0">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs font-mono text-lime-400 p-2">
              <RefreshCw className="w-4 h-4 animate-spin text-lime-400" />
              <span>Sushant AI is thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 bg-[#070907] border-t border-zinc-800 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder="Ask about projects, tech stack, experience..."
            className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-lime-400 placeholder-zinc-500"
          />
          <button
            type="submit"
            disabled={loading || !inputQuery.trim()}
            className="p-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-bold disabled:opacity-50 hover:scale-105 transition-all shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
}
