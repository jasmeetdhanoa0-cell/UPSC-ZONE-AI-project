import React from 'react';
import { Target, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenOnboarding: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenOnboarding }) => {
  const steps = [
    {
      step: '01',
      title: 'SET YOUR GOAL',
      description: 'Choose your exam, subjects, preparation level and target date.',
      icon: Target,
      highlighted: false,
      tag: 'Step 1: Calibration',
    },
    {
      step: '02',
      title: 'PRACTICE WITH AI',
      description: 'Practice questions, ask doubts, generate notes and revise with your AI preparation tools.',
      icon: Sparkles,
      highlighted: true,
      tag: 'Step 2: AI Core Loop',
    },
    {
      step: '03',
      title: 'TRACK & IMPROVE',
      description: 'Analyze your performance, identify weak areas and continuously improve your preparation.',
      icon: TrendingUp,
      highlighted: false,
      tag: 'Step 3: Measurable Growth',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white text-[#1E1A29] border-t border-b border-violet-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-violet-700 mb-2">
            Structured 3-Step Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1A29] leading-tight">
            How UPSC ZONE AI Works
          </h2>
          <p className="text-base sm:text-lg text-[#4B4361] mt-3 leading-relaxed max-w-2xl mx-auto">
            Turn your preparation into a smarter, more focused routine in three simple steps.
          </p>
        </div>

        {/* 3 Connected Steps Grid with Connecting Line */}
        <div className="relative">
          
          {/* Desktop Connecting Line behind cards */}
          <div 
            className="hidden md:block absolute top-1/2 left-24 right-24 h-0.5 bg-gradient-to-r from-violet-200 via-violet-400 to-violet-200 -translate-y-8 z-0" 
            aria-hidden="true" 
          />

          {/* Mobile Connecting Line */}
          <div 
            className="md:hidden absolute top-16 bottom-16 left-8 w-0.5 bg-gradient-to-b from-violet-200 via-violet-400 to-violet-200 z-0" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`relative rounded-2xl p-7 text-left transition-all duration-300 flex flex-col justify-between ${
                    item.highlighted
                      ? 'bg-[#F9F7FF] border-2 border-violet-400 shadow-xl shadow-violet-500/15 md:-translate-y-2'
                      : 'bg-white border border-violet-100 shadow-sm hover:shadow-md hover:border-violet-200'
                  }`}
                >
                  <div>
                    {/* Header with Step indicator and Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-4xl font-extrabold font-mono tracking-tight ${
                        item.highlighted ? 'text-violet-700' : 'text-violet-300'
                      }`}>
                        {item.step}
                      </span>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        item.highlighted
                          ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                          : 'bg-violet-50 text-violet-700 border border-violet-100'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-violet-700 uppercase tracking-wider mb-1">
                      {item.tag}
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-[#1E1A29]">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#4B4361] mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {item.highlighted && (
                    <div className="mt-6 pt-3 border-t border-violet-200/80 flex items-center justify-between text-xs text-violet-800 font-medium">
                      <span>Powered by Socratic AI Tutor</span>
                      <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Action Strip */}
        <div className="mt-14 p-6 bg-[#F5F3FF] border border-violet-200/80 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="text-left">
            <div className="text-sm font-bold text-[#1E1A29]">
              Ready to start your 3-step routine?
            </div>
            <div className="text-xs text-[#4B4361] mt-0.5">
              Set your target date and generate your custom preparation roadmap in 3 minutes.
            </div>
          </div>
          <button
            onClick={onOpenOnboarding}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg flex items-center gap-1.5 self-start sm:self-auto shadow-sm transition-colors whitespace-nowrap"
          >
            <span>Start Free Calibration</span>
            <ArrowRight className="w-3.5 h-3.5 text-violet-200" />
          </button>
        </div>

      </div>
    </section>
  );
};
