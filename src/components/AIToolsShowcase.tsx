import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  HelpCircle, 
  FileQuestion, 
  FileText, 
  Calendar, 
  ArrowRight, 
  User, 
  Bot, 
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { AI_TOOLS_PRESETS } from '../data/mockData';

interface AIToolsShowcaseProps {
  onOpenOnboarding: () => void;
}

export const AIToolsShowcase: React.FC<AIToolsShowcaseProps> = ({ onOpenOnboarding }) => {
  const [selectedToolIndex, setSelectedToolIndex] = useState(0);
  const [customInput, setCustomInput] = useState('');
  const [messages, setMessages] = useState<{
    id: string;
    sender: 'user' | 'ai';
    text: string;
    points?: string[];
    footerNote?: string;
  }[]>([
    {
      id: 'init-user',
      sender: 'user',
      text: AI_TOOLS_PRESETS[0].examplePrompt,
    },
    {
      id: 'init-ai',
      sender: 'ai',
      text: AI_TOOLS_PRESETS[0].sampleResponse.intro,
      points: AI_TOOLS_PRESETS[0].sampleResponse.points,
      footerNote: AI_TOOLS_PRESETS[0].sampleResponse.mainsTakeaway,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const activeTool = AI_TOOLS_PRESETS[selectedToolIndex];

  const handleSelectTool = (index: number) => {
    setSelectedToolIndex(index);
    const preset = AI_TOOLS_PRESETS[index];
    setMessages([
      {
        id: `preset-user-${index}`,
        sender: 'user',
        text: preset.examplePrompt,
      },
      {
        id: `preset-ai-${index}`,
        sender: 'ai',
        text: preset.sampleResponse.intro,
        points: preset.sampleResponse.points,
        footerNote: preset.sampleResponse.mainsTakeaway,
      },
    ]);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!customInput.trim()) return;

    const query = customInput.trim();
    setCustomInput('');

    // Append user message
    const newMsgId = Date.now().toString();
    setMessages((prev) => [
      ...prev,
      { id: `user-${newMsgId}`, sender: 'user', text: query },
    ]);

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let aiResponseText = `Regarding your query on "${query}":`;
      let points: string[] = [
        'Syllabus Mapping: Core relevance to GS Paper II (Constitutional Framework & Governance) and Prelims Sectional Review.',
        'Key Analytical Angle: Focus on structural separation of powers, judicial precedent, and administrative efficiency.',
        'Exam Tip: Frame your argument by balancing constitutional intent with ground-level administrative challenges.',
      ];
      let footerNote = 'Prelims Tip: Pay attention to statutory vs constitutional distinctions when eliminating statement choices.';

      if (query.toLowerCase().includes('1857') || query.toLowerCase().includes('history')) {
        aiResponseText = 'Analyzing historical drivers from UPSC GS-I perspective:';
        points = [
          'Doctrine of Lapse & aggressive annexations (Satara, Jhansi, Nagpur, Awadh) alienated ruling elites.',
          'Peasant and artisan distress under colonial land revenue settlements (Zamindari/Ryotwari/Mahalwari).',
          'Enfield rifle greased cartridge controversy triggered deep-seated religious grievances among sepoys.',
        ];
        footerNote = 'Mains Directive: Conclude with how 1857 marked the transition from Company Rule to Crown Rule under the GoI Act 1858.';
      } else if (query.toLowerCase().includes('prelims') || query.toLowerCase().includes('question')) {
        aiResponseText = 'Here is an adaptive multi-statement drill generated for your revision:';
        points = [
          '1. The Finance Commission makes recommendations regarding the principles governing grants-in-aid under Article 275.',
          '2. Its recommendations are purely advisory and cannot be challenged in any court.',
          'Which statement is/are correct? (Answer: Both 1 and 2 are correct).',
        ];
        footerNote = 'Elimination Rule: "Purely advisory" is often a suspect extreme word, but under Article 280/281 it is legally accurate.';
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${newMsgId}`,
          sender: 'ai',
          text: aiResponseText,
          points,
          footerNote,
        },
      ]);
    }, 600);
  };

  const getToolIcon = (id: string) => {
    switch (id) {
      case 'ask-doubts': return <HelpCircle className="w-4 h-4" />;
      case 'practice-questions': return <FileQuestion className="w-4 h-4" />;
      case 'summarize-topics': return <FileText className="w-4 h-4" />;
      case 'revision-plans': return <Calendar className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="ai-tools" className="py-20 md:py-28 bg-[#150B28] text-white relative bg-grid-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-2">
              Socratic Pedagogy Engine
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Your AI Study Companion
            </h2>
            <p className="text-base text-purple-200/80 mt-3 leading-relaxed">
              Trained specifically on the nuance of UPSC Civil Services syllabus — analytical, balanced, and free of generic filler.
            </p>
          </div>

          <button
            onClick={onOpenOnboarding}
            className="self-start md:self-auto px-5 py-2.5 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap shadow-md shadow-violet-600/30 border border-violet-400/30"
          >
            <span>Try the AI Coach</span>
            <ArrowRight className="w-3.5 h-3.5 text-violet-200" />
          </button>
        </div>

        {/* 2-Column Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Capability Selector Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-300/70 mb-2 text-left">
              Select Capability To Test
            </div>

            {AI_TOOLS_PRESETS.map((tool, idx) => {
              const isSelected = selectedToolIndex === idx;
              return (
                <div
                  key={tool.id}
                  onClick={() => handleSelectTool(idx)}
                  className={`p-4 rounded-xl border transition-all duration-150 cursor-pointer text-left ${
                    isSelected
                      ? 'bg-[#231244] border-violet-500 shadow-lg shadow-purple-950/40'
                      : 'bg-[#1A0E31]/80 border-violet-950 hover:border-violet-800 hover:bg-[#1E1038]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-1.5 rounded-md ${isSelected ? 'bg-violet-600 text-white' : 'bg-purple-950/80 text-violet-300'}`}>
                        {getToolIcon(tool.id)}
                      </div>
                      <span className="font-semibold text-sm text-white">
                        {tool.title}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-violet-300">
                      {tool.subtitle}
                    </span>
                  </div>
                  <p className="text-xs text-purple-200/80 pl-9 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              );
            })}

            {/* Quick Prompt Helper Box */}
            <div className="pt-2 text-left">
              <div className="text-xs text-purple-300/80 mb-2 flex items-center justify-between">
                <span>Or load quick prompt:</span>
                <span className="text-[11px] text-violet-400 font-mono">Live Demo</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => {
                    setCustomInput('Evaluate Article 21 and the Right to Privacy (Puttaswamy 2017).');
                  }}
                  className="px-2.5 py-1 text-[11px] font-medium text-purple-200 bg-[#1A0E31] border border-violet-900/60 rounded-md hover:border-violet-500 hover:text-white transition-colors"
                >
                  Puttaswamy Judgement
                </button>
                <button
                  onClick={() => {
                    setCustomInput('Green Hydrogen Mission: Challenges for GS-III.');
                  }}
                  className="px-2.5 py-1 text-[11px] font-medium text-purple-200 bg-[#1A0E31] border border-violet-900/60 rounded-md hover:border-violet-500 hover:text-white transition-colors"
                >
                  Green Hydrogen GS-III
                </button>
                <button
                  onClick={() => {
                    setCustomInput('Explain basic structure doctrine evolution.');
                  }}
                  className="px-2.5 py-1 text-[11px] font-medium text-purple-200 bg-[#1A0E31] border border-violet-900/60 rounded-md hover:border-violet-500 hover:text-white transition-colors"
                >
                  Basic Structure
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Chat Terminal */}
          <div className="lg:col-span-7 bg-[#1A0E31] border border-violet-900/60 rounded-xl shadow-2xl flex flex-col h-[560px] overflow-hidden">
            
            {/* Terminal Header */}
            <div className="px-5 py-3.5 bg-[#110720] border-b border-violet-950 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse" />
                <span className="font-semibold text-white">UPSC AI Pedagogical Coach</span>
                <span className="text-purple-400/70 font-mono text-[11px]">· Model: UPSC-v4.2-GS</span>
              </div>
              <button
                onClick={() => handleSelectTool(selectedToolIndex)}
                className="text-purple-300 hover:text-white flex items-center gap-1 text-[11px] font-mono transition-colors"
                title="Reset conversation"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-5 overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 text-left ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'ai' && (
                    <div className="w-7 h-7 rounded-md bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300 shrink-0 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-xl p-4 text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-violet-600 text-white font-medium ml-8 shadow-sm'
                        : 'bg-[#110720] border border-violet-950 text-purple-100 shadow-sm'
                    }`}
                  >
                    <p className={msg.sender === 'user' ? 'text-white' : 'text-purple-100'}>
                      {msg.text}
                    </p>

                    {msg.points && msg.points.length > 0 && (
                      <ul className="mt-3 space-y-2 pt-2 border-t border-violet-950">
                        {msg.points.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2 text-purple-200">
                            <span className="text-violet-400 font-mono font-bold shrink-0 mt-0.5">›</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {msg.footerNote && (
                      <div className="mt-3 pt-2 border-t border-violet-950 text-[11px] text-violet-300 font-mono flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                        <span>{msg.footerNote}</span>
                      </div>
                    )}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-md bg-purple-950 flex items-center justify-center text-purple-200 shrink-0 mt-0.5">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 items-center text-xs text-purple-300">
                  <div className="w-7 h-7 rounded-md bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300 shrink-0">
                    <Bot className="w-4 h-4 animate-spin" />
                  </div>
                  <div className="bg-[#110720] px-3 py-2 rounded-lg border border-violet-950 text-purple-200 text-xs flex items-center gap-1.5">
                    <span>Synthesizing syllabus linkages</span>
                    <span className="animate-pulse">...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Terminal Input Bar */}
            <form onSubmit={handleSendMessage} className="p-3 bg-[#110720] border-t border-violet-950 flex items-center gap-2">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Ask any UPSC topic (e.g. 'Causes of 1857 Revolt in simple terms')..."
                className="flex-1 bg-[#1A0E31] border border-violet-900/60 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-purple-400/60 focus:outline-none focus:border-violet-400 transition-colors font-sans"
              />
              <button
                type="submit"
                disabled={!customInput.trim()}
                className="px-4 py-2.5 bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:hover:bg-violet-600 text-white font-semibold rounded-lg text-xs flex items-center gap-1 transition-colors shrink-0"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
