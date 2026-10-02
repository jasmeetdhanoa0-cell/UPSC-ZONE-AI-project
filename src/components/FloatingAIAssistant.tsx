import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, User, Minimize2, CheckCircle2, ChevronRight } from 'lucide-react';

interface FloatingAIAssistantProps {
  onOpenOnboarding: () => void;
}

export const FloatingAIAssistant: React.FC<FloatingAIAssistantProps> = ({ onOpenOnboarding }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<{
    id: string;
    sender: 'user' | 'ai';
    text: string;
    points?: string[];
    prelimsTip?: string;
  }[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Namaste! I am your 24/7 UPSC Study Assistant. Ask any conceptual doubt, request Prelims question drills, or check Mains answer structures.',
      points: [
        'Syllabus-mapped analytical clarifications',
        'Direct linkages to standard references (Laxmikanth, NCERTs)',
        'Option elimination guidance for CSAT & GS-I',
      ],
      prelimsTip: 'Try asking: "Explain Basic Structure doctrine evolution" or "Draft a 150-word answer on Fiscal Federalism".',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (userText: string) => {
    if (!userText.trim()) return;

    const newId = Date.now().toString();
    setMessages((prev) => [
      ...prev,
      { id: `user-${newId}`, sender: 'user', text: userText },
    ]);
    setQuery('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const lower = userText.toLowerCase();

      let answer = `Here is the UPSC General Studies analytical perspective:`;
      let points = [
        'Constitutional / Conceptual Foundation: Rooted in democratic governance, rule of law, and institutional checks and balances.',
        'Core Dilemma: Balancing executive dispatch with parliamentary oversight and federal autonomy.',
        'High-Yield Recommendation: Cite landmark SC rulings or relevant Commission reports (Sarkaria / Punchhi / 2nd ARC) to elevate answer scoring.',
      ];
      let prelimsTip = 'Prelims Alert: Distinguish between statutory vs constitutional provisions when eliminating distractors.';

      if (lower.includes('basic structure') || lower.includes('kesavananda')) {
        answer = 'Basic Structure Doctrine Evolution (GS-II & Prelims):';
        points = [
          'Shankari Prasad (1951) & Sajjan Singh (1965): Parliament has unrestricted amending power under Article 368 including Fundamental Rights.',
          'Golaknath (1967): SC reversed stance, ruling Fundamental Rights are transcendental and immune to amendment.',
          '24th Amendment (1971): Parliament asserted power to amend any part of the Constitution.',
          'Kesavananda Bharati (1973): 13-judge bench established Parliament can amend without altering the "Basic Structure" (Judicial Review, Federalism, Secularism, Rule of Law).',
        ];
        prelimsTip = 'Minerva Mills (1980) cemented that Judicial Review and limited amending power are themselves basic features.';
      } else if (lower.includes('article 32') || lower.includes('226') || lower.includes('writ')) {
        answer = 'Constitutional Comparison: Article 32 vs Article 226:';
        points = [
          'Article 32 is itself a Fundamental Right under Part III and Supreme Court cannot refuse relief.',
          'Article 226 is a constitutional power of High Courts under Part VI and is discretionary.',
          'Scope: Article 32 only enforces Fundamental Rights, whereas Article 226 enforces Fundamental Rights AND "any other purpose" (wider jurisdiction).',
          'Territorial: Article 32 extends across the entire territory of India; Article 226 is limited to the State jurisdiction.',
        ];
        prelimsTip = 'Remember: Supreme Court is designated as the "protector and guarantor of Fundamental Rights" under Article 32.';
      } else if (lower.includes('hydrogen') || lower.includes('economy') || lower.includes('gs-iii')) {
        answer = 'National Green Hydrogen Mission (GS-III Economy & Ecology):';
        points = [
          'Target: Produce 5 MMT of Green Hydrogen per annum by 2030, adding 125 GW renewable capacity.',
          'SIGHT Programme: Strategic Interventions for Green Hydrogen Transition provides incentives for electrolyser manufacturing.',
          'Key Challenges: High cost of water demineralization, safety in high-pressure transport pipelines, and international certification standards.',
        ];
        prelimsTip = 'Way Forward: Blend green hydrogen in steel and fertilizer plants first where captive hydrogen is already consumed.';
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${newId}`,
          sender: 'ai',
          text: answer,
          points,
          prelimsTip,
        },
      ]);
    }, 700);
  };

  const samplePrompts = [
    'Basic Structure Doctrine evolution',
    'Article 32 vs Article 226 writs',
    'Green Hydrogen Mission challenges',
  ];

  return (
    <>
      {/* Floating Trigger Button in Deep Purple + Soft Violet */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 px-4 py-3 bg-[#130924] hover:bg-[#1C0E35] text-white rounded-full border border-violet-500/80 shadow-xl shadow-purple-950/40 hover:shadow-violet-600/30 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            aria-label="Open AI Study Assistant"
          >
            {/* Pulsing indicator orb */}
            <div className="relative w-3.5 h-3.5 flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-400" />
            </div>

            <Sparkles className="w-4 h-4 text-violet-300" />
            <span className="text-xs font-semibold tracking-tight pr-1">Ask AI Coach</span>
          </button>
        </div>
      )}

      {/* Expanded Floating AI Assistant Drawer */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-[420px] h-[550px] bg-[#130924] text-white border border-violet-800/70 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200"
          role="dialog"
          aria-labelledby="assistant-title"
        >
          {/* Panel Header */}
          <div className="px-4 py-3.5 bg-[#0D0519] border-b border-violet-950 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-violet-600/20 border border-violet-500/40 flex items-center justify-center text-violet-300">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left">
                <h4 id="assistant-title" className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>UPSC AI Companion</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                </h4>
                <div className="text-[10px] text-purple-300/70 font-mono">
                  Syllabus-Tuned Pedagogy
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-purple-300 hover:text-white rounded-md hover:bg-violet-900/30 transition-colors"
                aria-label="Minimize Assistant"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-purple-300 hover:text-white rounded-md hover:bg-violet-900/30 transition-colors"
                aria-label="Close Assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Prompts Bar */}
          <div className="px-3 py-2 bg-[#1A0E31]/80 border-b border-violet-950 flex items-center gap-1.5 overflow-x-auto text-[11px]">
            <span className="text-purple-400/80 shrink-0 font-medium">Quick:</span>
            {samplePrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p)}
                className="px-2 py-0.5 bg-[#100720] hover:bg-violet-600/30 hover:text-white text-purple-200 rounded border border-violet-900/60 whitespace-nowrap transition-colors"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-left text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'ai' && (
                  <div className="w-6 h-6 rounded-md bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300 shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-xl p-3 leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-violet-600 text-white font-medium ml-6 shadow-xs'
                      : 'bg-[#1C0E35] border border-violet-900/60 text-purple-100'
                  }`}
                >
                  <p>{m.text}</p>

                  {m.points && (
                    <ul className="mt-2.5 space-y-1.5 pt-2 border-t border-violet-900/50">
                      {m.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-purple-200">
                          <span className="text-violet-400 font-bold font-mono shrink-0">›</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {m.prelimsTip && (
                    <div className="mt-2.5 pt-1.5 border-t border-violet-900/40 text-[11px] text-violet-300 font-mono flex items-start gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                      <span>{m.prelimsTip}</span>
                    </div>
                  )}
                </div>

                {m.sender === 'user' && (
                  <div className="w-6 h-6 rounded-md bg-purple-950 flex items-center justify-center text-purple-200 shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-xs text-purple-300">
                <div className="w-6 h-6 rounded-md bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300 shrink-0">
                  <Bot className="w-3.5 h-3.5 animate-spin" />
                </div>
                <div className="bg-[#1C0E35] px-3 py-1.5 rounded-lg border border-violet-900/60 text-[11px] text-purple-200">
                  Consulting General Studies syllabus database...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-[#0D0519] border-t border-violet-950">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(query);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask doubt, PYQ pattern, or Mains query..."
                className="flex-1 bg-[#1A0E31] border border-violet-900/70 rounded-lg px-3 py-2 text-xs text-white placeholder-purple-400/60 focus:outline-none focus:border-violet-400 transition-colors"
              />
              <button
                type="submit"
                disabled={!query.trim()}
                className="p-2 bg-violet-600 hover:bg-violet-500 disabled:opacity-40 text-white font-semibold rounded-lg transition-colors"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="flex items-center justify-between text-[10px] text-purple-400/70 mt-2 px-1">
              <span>UPSC CSE 2026/2027 Calibrated</span>
              <button
                type="button"
                onClick={onOpenOnboarding}
                className="text-violet-300 hover:underline flex items-center gap-0.5"
              >
                <span>Full Blueprint</span>
                <ChevronRight className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
