import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Target, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  BookOpen, 
  Flame, 
} from 'lucide-react';
import { FloatingAIOrb } from './FloatingAIOrb';
import { ProgressRing } from './ProgressRing';
import { useTilt3D } from '../hooks/useTilt3D';

interface HeroProps {
  onOpenOnboarding: () => void;
  onExploreAITools: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOnboarding, onExploreAITools }) => {
  const [activeTab, setActiveTab] = useState<'practice' | 'affairs' | 'coach'>('practice');

  // Mouse-based 3D tilt hook for the dashboard container
  const { ref: tiltRef, style: tiltStyle } = useTilt3D<HTMLDivElement>({
    maxTilt: 4.5,
    perspective: 1100,
    scale: 1.005,
  });

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#130924] text-white overflow-hidden bg-grid-dark">
      {/* Background ambient lighting accents in soft violet and lavender */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-violet-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[420px] h-[320px] bg-purple-700/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs (Hierarchy 1, 2, 3) */}
          <div className="lg:col-span-6 space-y-7 text-left relative z-20">
            
            {/* Trust indicator - zero pill discipline: clean unboxed metadata */}
            <div className="flex items-center gap-2 text-xs font-medium text-violet-300 tracking-wide uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span>Built for serious aspirants</span>
              <span aria-hidden="true" className="text-purple-400/60">·</span>
              <span className="text-purple-200/90 font-normal">CSE 2026/2027 Calibration</span>
            </div>

            {/* 1. Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]" style={{ textWrap: 'balance' }}>
              Prepare Smarter. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-purple-300 to-violet-100">
                Think Deeper.
              </span> <br />
              Crack UPSC.
            </h1>

            {/* 2. Supporting Text */}
            <p className="text-base sm:text-lg text-purple-200/85 max-w-xl font-normal leading-relaxed">
              An AI-powered preparation companion built to help you practice, revise, analyze and improve — all in one focused workspace.
            </p>

            {/* 3. CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenOnboarding}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg shadow-lg shadow-violet-600/25 transition-all duration-150 flex items-center justify-center gap-2 group whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 border border-violet-400/30"
              >
                <span>Start Preparing Free</span>
                <ArrowRight className="w-4 h-4 text-violet-200 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreAITools}
                className="px-6 py-3.5 text-sm font-semibold text-purple-100 hover:text-white bg-[#1F113B] hover:bg-[#28174D] rounded-lg border border-violet-800/60 transition-all duration-150 flex items-center justify-center gap-2 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <span>Explore AI Tools</span>
                <ChevronRight className="w-4 h-4 text-purple-300" />
              </button>
            </div>

            {/* Secondary trust badges - unboxed clean presentation */}
            <div className="pt-4 border-t border-violet-950/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-lg font-bold font-mono text-white tabular-nums">15 Years</div>
                <div className="text-xs text-purple-300/80">PYQs Deconstructed</div>
              </div>
              <div>
                <div className="text-lg font-bold font-mono text-violet-300 tabular-nums">06:00 AM</div>
                <div className="text-xs text-purple-300/80">Daily GS Synthesis</div>
              </div>
              <div>
                <div className="text-lg font-bold font-mono text-white tabular-nums">84.2%</div>
                <div className="text-xs text-purple-300/80">Elimination Accuracy</div>
              </div>
            </div>
          </div>

          {/* Right Column: 4. Product Dashboard + 5. Subtle 3D Supporting Detail */}
          <div className="lg:col-span-6 relative">
            
            {/* Subtle, compact 3D Floating AI Orb positioned neatly near upper-right without cluttering */}
            <div className="absolute -top-3.5 right-4 sm:-top-4 sm:right-6 z-20 pointer-events-auto">
              <FloatingAIOrb size={52} />
            </div>

            {/* Dashboard Container with Interactive 3D Mouse Tilt */}
            <div
              ref={tiltRef}
              style={tiltStyle}
              className="relative mx-auto max-w-lg lg:max-w-none z-10"
            >
              
              {/* Main Dashboard Surface in Deep Purple */}
              <div className="bg-[#1B0E33] border border-violet-900/60 rounded-2xl shadow-2xl p-5 sm:p-6 backdrop-blur-md space-y-5">
                
                {/* Dashboard Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-violet-950 text-xs">
                  <div className="flex items-center gap-2 text-purple-200">
                    <div className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse" />
                    <span className="font-semibold text-white">Aspirant Workspace</span>
                    <span aria-hidden="true" className="text-purple-400/60">/</span>
                    <span className="text-purple-300">GS Prelims & Mains</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-purple-300">
                    <Clock className="w-3.5 h-3.5 text-violet-400" />
                    <span className="font-mono text-purple-200 text-xs">Session: 2h 45m</span>
                  </div>
                </div>

                {/* Score & Progress Ring Lockup */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  
                  {/* Left: Progress Ring */}
                  <div className="sm:col-span-5 bg-[#140A28]/90 border border-violet-900/40 rounded-xl p-3.5 flex items-center justify-center">
                    <ProgressRing
                      progress={88.4}
                      size={105}
                      strokeWidth={8}
                      label="Readiness"
                      sublabel="Top 4.8%"
                    />
                  </div>

                  {/* Right: Study Streak & Syllabus Milestone */}
                  <div className="sm:col-span-7 space-y-2.5">
                    {/* Study Consistency */}
                    <div className="bg-[#140A28]/90 border border-violet-900/40 rounded-xl p-3 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-purple-300/80">Study Consistency</div>
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <span className="text-xl font-bold font-mono text-violet-300 tabular-nums">34</span>
                          <span className="text-xs text-purple-200">Days Active Streak</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-violet-600/20 flex items-center justify-center text-violet-400">
                        <Flame className="w-4 h-4 fill-violet-400" />
                      </div>
                    </div>

                    {/* Syllabus Mapped */}
                    <div className="bg-[#140A28]/90 border border-violet-900/40 rounded-xl p-3 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-purple-300/80">GS Core Syllabus</div>
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <span className="text-xl font-bold font-mono text-white tabular-nums">74.5%</span>
                          <span className="text-xs text-violet-300 font-medium">Mapped</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-300">
                        <BookOpen className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                </div>

                {/* Interactive Mini-Tab Filter for the Dashboard Visual */}
                <div className="flex items-center gap-1 p-1 bg-[#140A28] border border-violet-950 rounded-lg">
                  <button
                    onClick={() => setActiveTab('practice')}
                    className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors ${
                      activeTab === 'practice'
                        ? 'bg-violet-900/60 text-white shadow-xs border border-violet-600/40'
                        : 'text-purple-300/70 hover:text-white'
                    }`}
                  >
                    Active Simulation
                  </button>
                  <button
                    onClick={() => setActiveTab('affairs')}
                    className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors ${
                      activeTab === 'affairs'
                        ? 'bg-violet-900/60 text-white shadow-xs border border-violet-600/40'
                        : 'text-purple-300/70 hover:text-white'
                    }`}
                  >
                    Daily Synthesis
                  </button>
                  <button
                    onClick={() => setActiveTab('coach')}
                    className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors ${
                      activeTab === 'coach'
                        ? 'bg-violet-900/60 text-white shadow-xs border border-violet-600/40'
                        : 'text-purple-300/70 hover:text-white'
                    }`}
                  >
                    AI Recommendation
                  </button>
                </div>

                {/* Tab Content Display */}
                {activeTab === 'practice' && (
                  <div className="bg-[#140A28]/95 border border-violet-900/40 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-violet-300 font-medium">
                        <Target className="w-3.5 h-3.5" />
                        <span>Prelims Simulator 2026 #04</span>
                      </div>
                      <span className="text-purple-300 font-mono text-[11px]">82 / 100 Answered</span>
                    </div>
                    <div className="text-xs text-purple-100 font-medium leading-relaxed">
                      "With reference to the Speaker's powers under the Tenth Schedule, consider the following statements..."
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-violet-950">
                      <div className="text-purple-300">
                        Accuracy: <span className="text-violet-200 font-semibold font-mono">91.2%</span>
                      </div>
                      <div className="text-purple-300 text-right">
                        Elimination: <span className="text-violet-300 font-semibold font-mono">Verified</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'affairs' && (
                  <div className="bg-[#140A28]/95 border border-violet-900/40 rounded-xl p-4 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-violet-300 font-medium">GS Paper II · Polity</span>
                      <span className="text-purple-400 text-[11px]">Oct 01, 2026</span>
                    </div>
                    <h4 className="text-xs font-semibold text-white leading-snug">
                      Sub-classification in SC/ST Reservation & Article 341 Interpretation
                    </h4>
                    <p className="text-[11px] text-purple-200/80 line-clamp-2">
                      Supreme Court 7-judge Constitution bench affirms state power to sub-categorize disadvantaged groups based on empirical data.
                    </p>
                  </div>
                )}

                {activeTab === 'coach' && (
                  <div className="bg-[#140A28]/95 border border-violet-900/40 rounded-xl p-4 space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs text-violet-300 font-medium">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>AI Strategic Directive</span>
                    </div>
                    <p className="text-xs text-purple-100 leading-relaxed">
                      "Your accuracy in <em>Federal Relations (Articles 256–263)</em> dropped by 6% in test #04. Revise Sarkaria Commission punch-points before attempting the sectional mock tomorrow."
                    </p>
                    <div className="text-[11px] text-violet-300 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-violet-400" />
                      <span>Scheduled for 07:30 PM Revision Drill</span>
                    </div>
                  </div>
                )}

                {/* Bottom Live Diagnostic Sparkline */}
                <div className="pt-2 border-t border-violet-950 flex items-center justify-between text-xs text-purple-300">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-violet-400" />
                    <span>Elimination Trajectory</span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[11px] text-purple-200">
                    <span className="text-violet-300 font-semibold">+14.2%</span>
                    <span>vs last mock series</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
