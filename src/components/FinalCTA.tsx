import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenOnboarding: () => void;
  onExploreAITools: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenOnboarding, onExploreAITools }) => {
  return (
    <section className="py-20 md:py-28 bg-[#130924] text-white relative overflow-hidden bg-grid-dark border-t border-violet-950">
      {/* Background restrained ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-violet-600/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Subtle kicker */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-300">
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          <span>Next-Generation UPSC Preparation</span>
          <span aria-hidden="true" className="text-purple-400/60">·</span>
          <span className="text-purple-200/80">CSE 2026/2027 Calibration</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-3xl mx-auto" style={{ textWrap: 'balance' }}>
          Your UPSC Preparation Starts Here.
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-purple-200/85 max-w-2xl mx-auto font-normal leading-relaxed">
          Practice smarter. Revise better. Understand deeper.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <button
            onClick={onOpenOnboarding}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg shadow-lg shadow-violet-600/25 transition-all duration-150 flex items-center justify-center gap-2 group whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 border border-violet-400/30"
          >
            <span>Start Preparing Free</span>
            <ArrowRight className="w-4 h-4 text-violet-200 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={onExploreAITools}
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-purple-100 hover:text-white bg-[#1F113B] hover:bg-[#28174D] rounded-lg border border-violet-800/60 transition-colors flex items-center justify-center gap-2 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            <span>Explore AI Tools</span>
          </button>
        </div>

        {/* Reassurance points */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-purple-300/80">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
            <span>Instant syllabus diagnostic test</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
            <span>Full Prelims & Mains curriculum</span>
          </div>
        </div>

      </div>
    </section>
  );
};
