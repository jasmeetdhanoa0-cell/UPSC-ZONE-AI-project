import React, { useState } from 'react';
import { CheckCircle2, XCircle, Sparkles, BookOpen, RotateCcw, ArrowRight, HelpCircle, Layers } from 'lucide-react';

interface QuestionData {
  id: string;
  year: string;
  subject: string;
  difficulty: 'UPSC Standard' | 'Advanced' | 'Foundational';
  title: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: {
    verdict: string;
    keyPoints: string[];
    constitutionReference: string;
    relatedTopic: string;
  };
}

export const PracticePreview: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedSubject, setSelectedSubject] = useState('Polity');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // Realistic UPSC Question Data
  const sampleQuestion: QuestionData = {
    id: 'pyq-polity-1',
    year: '2024',
    subject: 'Polity',
    difficulty: 'UPSC Standard',
    title: 'UPSC PRELIMS — POLITY',
    question: 'Which of the following statements regarding the Indian Constitution is correct?',
    options: [
      {
        id: 'A',
        text: 'A) The Fundamental Duties were incorporated into the Constitution of India by the 44th Constitutional Amendment Act.',
      },
      {
        id: 'B',
        text: 'B) The Directive Principles of State Policy are directly enforceable by courts under Article 37.',
      },
      {
        id: 'C',
        text: 'C) The Constitution grants the Supreme Court original and exclusive jurisdiction over interstate river water disputes.',
      },
      {
        id: 'D',
        text: 'D) The Preamble is an integral part of the Constitution and can be amended under Article 368 without altering the basic structure.',
      },
    ],
    correctOptionId: 'D',
    explanation: {
      verdict: 'Option (D) is correct. In the landmark Kesavananda Bharati case (1973), the Supreme Court ruled that the Preamble is an integral part of the Constitution and can be amended under Article 368, provided the basic structure remains intact (as was done in the 42nd Amendment 1976).',
      keyPoints: [
        'Option A is incorrect: Fundamental Duties were added by the 42nd Amendment Act (1976) on the recommendation of the Swaran Singh Committee, not the 44th.',
        'Option B is incorrect: Article 37 explicitly states that DPSPs "shall not be enforceable by any court", though they are fundamental in the governance of the country.',
        'Option C is incorrect: Article 262 permits Parliament to exclude the jurisdiction of the Supreme Court and other courts in interstate river disputes, creating specialized tribunals.',
      ],
      constitutionReference: 'Article 368, Article 37, Article 262 & Kesavananda Bharati (1973)',
      relatedTopic: 'Preamble, Basic Structure Doctrine, and Constitutional Amendment Powers',
    },
  };

  const handleCheckAnswer = () => {
    if (!selectedOption) return;
    setHasSubmitted(true);
    setShowExplanation(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setHasSubmitted(false);
    setShowExplanation(false);
  };

  const isCorrect = selectedOption === sampleQuestion.correctOptionId;

  return (
    <section id="practice" className="py-20 md:py-28 bg-[#130924] text-white relative bg-grid-dark border-t border-violet-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-2">
            Exam-Calibrated Simulation Environment
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Practice Like the Real Exam
          </h2>
          <p className="text-base sm:text-lg text-purple-200/80 mt-3 leading-relaxed max-w-2xl mx-auto">
            Master previous-year questions and understand the patterns behind UPSC papers.
          </p>
        </div>

        {/* Interactive Question Interface Frame */}
        <div className="max-w-4xl mx-auto bg-[#1A0E31] border border-violet-900/60 rounded-3xl p-6 sm:p-9 shadow-2xl space-y-6 text-left">
          
          {/* Controls Bar: Previous Year, Subject, Difficulty, Explanation Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-violet-950 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              {/* Year Selector */}
              <div className="flex items-center gap-1 bg-[#120723] px-3 py-1.5 rounded-lg border border-violet-900/60">
                <span className="text-purple-400/80 font-mono">Year:</span>
                <select
                  value={selectedYear}
                  onChange={(e) => {
                    setSelectedYear(e.target.value);
                    handleReset();
                  }}
                  className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="2024" className="bg-[#1A0E31]">2024 Prelims</option>
                  <option value="2023" className="bg-[#1A0E31]">2023 Prelims</option>
                  <option value="2022" className="bg-[#1A0E31]">2022 Prelims</option>
                </select>
              </div>

              {/* Subject Selector */}
              <div className="flex items-center gap-1 bg-[#120723] px-3 py-1.5 rounded-lg border border-violet-900/60">
                <span className="text-purple-400/80 font-mono">Subject:</span>
                <select
                  value={selectedSubject}
                  onChange={(e) => {
                    setSelectedSubject(e.target.value);
                    handleReset();
                  }}
                  className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="Polity" className="bg-[#1A0E31]">Polity</option>
                  <option value="Economy" className="bg-[#1A0E31]">Economy</option>
                  <option value="History" className="bg-[#1A0E31]">History</option>
                </select>
              </div>

              {/* Difficulty */}
              <span className="px-2.5 py-1.5 bg-[#120723] text-purple-200 rounded-lg border border-violet-900/60 font-mono text-[11px]">
                {sampleQuestion.difficulty}
              </span>
            </div>

            {/* Reset / Clear */}
            {hasSubmitted && (
              <button
                onClick={handleReset}
                className="text-xs font-mono text-purple-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retry Question</span>
              </button>
            )}
          </div>

          {/* Question Title & Prompt */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-violet-300 font-mono">
                {sampleQuestion.title}
              </span>
            </div>

            <p className="text-base sm:text-lg font-semibold text-white leading-relaxed">
              {sampleQuestion.question}
            </p>
          </div>

          {/* 4 Answer Options */}
          <div className="space-y-3">
            {sampleQuestion.options.map((option) => {
              const isSelected = selectedOption === option.id;
              const isThisCorrect = option.id === sampleQuestion.correctOptionId;

              let optionStyle = 'bg-[#120723] border-violet-900/50 text-purple-100 hover:border-violet-700/80 hover:bg-[#180A2D]';

              if (hasSubmitted) {
                if (isThisCorrect) {
                  optionStyle = 'bg-emerald-950/40 border-emerald-500 text-white ring-1 ring-emerald-500';
                } else if (isSelected && !isThisCorrect) {
                  optionStyle = 'bg-red-950/40 border-red-500 text-white ring-1 ring-red-500';
                } else {
                  optionStyle = 'bg-[#120723]/60 border-violet-950 text-purple-400/60';
                }
              } else if (isSelected) {
                optionStyle = 'bg-violet-900/40 border-violet-400 text-white ring-1 ring-violet-400';
              }

              return (
                <div
                  key={option.id}
                  onClick={() => !hasSubmitted && setSelectedOption(option.id)}
                  className={`p-4 rounded-xl border transition-all duration-150 cursor-pointer flex items-center justify-between text-xs sm:text-sm leading-relaxed ${optionStyle}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-violet-400 bg-violet-600' : 'border-violet-800'
                    }`}>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <span>{option.text}</span>
                  </div>

                  {/* Submission icon status */}
                  {hasSubmitted && isThisCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                  )}
                  {hasSubmitted && isSelected && !isThisCorrect && (
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 ml-2" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Row: Check Answer Button */}
          {!hasSubmitted ? (
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-purple-300/70">
                Select an option to evaluate elimination reasoning.
              </span>
              <button
                onClick={handleCheckAnswer}
                disabled={!selectedOption}
                className="px-6 py-2.5 bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:hover:bg-violet-600 text-white font-semibold rounded-xl text-xs flex items-center gap-1.5 shadow-md shadow-violet-600/30 transition-colors"
              >
                <span>Check Answer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            /* Result Banner */
            <div className={`p-4 rounded-xl border flex items-center justify-between ${
              isCorrect
                ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300'
                : 'bg-red-950/40 border-red-500/60 text-red-300'
            }`}>
              <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm">
                {isCorrect ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                <span>
                  {isCorrect ? 'Correct! +2.00 Marks' : 'Incorrect. -0.66 Negative Marks'}
                </span>
              </div>
              <button
                onClick={() => setShowExplanation(!showExplanation)}
                className="text-xs font-mono underline hover:text-white"
              >
                {showExplanation ? 'Hide Explanation' : 'View Explanation'}
              </button>
            </div>
          )}

          {/* AI Explanation & Analysis Dropdown */}
          {hasSubmitted && showExplanation && (
            <div className="mt-4 pt-4 border-t border-violet-950 space-y-4 animate-in fade-in duration-200">
              
              {/* Verdict Header */}
              <div className="bg-[#120723] p-4 rounded-xl border border-violet-900/60 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-violet-300 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span>AI Elimination & Judicial Reasoning</span>
                </div>
                <p className="text-xs sm:text-sm text-purple-100 leading-relaxed font-medium">
                  {sampleQuestion.explanation.verdict}
                </p>
              </div>

              {/* Distractor option breakdown */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  Detailed Option-Wise Dissection
                </div>
                <ul className="space-y-1.5">
                  {sampleQuestion.explanation.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-purple-200/90 leading-relaxed">
                      <span className="text-violet-400 font-bold font-mono">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Topic & Constitutional Articles */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-violet-950 text-purple-300">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-violet-400" />
                  <span className="font-semibold">Constitutional Reference:</span>
                  <span className="font-mono text-purple-200">{sampleQuestion.explanation.constitutionReference}</span>
                </div>
                <div className="text-[11px] font-mono text-violet-300 bg-[#120723] px-2.5 py-1 rounded border border-violet-900">
                  Topic: {sampleQuestion.explanation.relatedTopic}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
