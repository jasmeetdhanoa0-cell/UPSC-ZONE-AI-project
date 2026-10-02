import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  Target, 
  Flame, 
  Clock, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  TrendingUp, 
  BarChart2,
  ArrowRight
} from 'lucide-react';
import { ProgressRing } from './ProgressRing';

export const PerformanceDashboard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const subjects = [
    { name: 'Indian Polity & Constitution', score: 84, trend: '+4%', note: 'Fundamental Rights & Writs mastered' },
    { name: 'Geography & Environment', score: 79, trend: '+6%', note: 'Climatology & Soil distribution strong' },
    { name: 'Modern Indian History', score: 72, trend: '+3%', note: 'Need review on 1920–1935 Decolonization' },
    { name: 'Indian Economy', score: 68, trend: '-2%', note: 'Monetary Policy & Inflation gaps' },
  ];

  return (
    <section ref={sectionRef} id="analytics" className="py-20 md:py-28 bg-[#150B28] text-white relative bg-grid-dark border-t border-violet-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-2">
            Diagnostic Preparation Analytics
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Know Your Progress. Improve Every Day.
          </h2>
          <p className="text-base sm:text-lg text-purple-200/80 mt-3 leading-relaxed max-w-2xl mx-auto">
            Turn your practice data into clear insights about your preparation.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="bg-[#1A0E31] border border-violet-900/60 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl space-y-8">
          
          {/* Top 4 Key Metrics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
            
            {/* Metric 1: Overall Preparation Progress (72%) with Progress Ring */}
            <div className="bg-[#120723] border border-violet-900/50 rounded-2xl p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-purple-300">
                <span className="font-semibold uppercase tracking-wider">Overall Progress</span>
                <Award className="w-4 h-4 text-violet-400" />
              </div>
              <div className="my-3 flex items-center justify-center">
                <ProgressRing
                  progress={72}
                  size={96}
                  strokeWidth={7}
                  label="Completed"
                />
              </div>
              <div className="text-[11px] text-purple-300/70 font-mono text-center">
                72% of CSE core syllabus covered
              </div>
            </div>

            {/* Metric 2: Accuracy Percentage (78%) */}
            <div className="bg-[#120723] border border-violet-900/50 rounded-2xl p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-purple-300">
                <span className="font-semibold uppercase tracking-wider">Accuracy</span>
                <Target className="w-4 h-4 text-violet-400" />
              </div>
              <div className="my-3">
                <div className="text-4xl font-extrabold font-mono text-white tabular-nums">
                  78%
                </div>
                <div className="w-full bg-[#20103A] h-2 rounded-full overflow-hidden mt-3">
                  <div
                    className="bg-violet-500 h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: isVisible ? '78%' : '0%' }}
                  />
                </div>
              </div>
              <div className="text-[11px] text-violet-300 font-mono">
                +5.4% improvement this month
              </div>
            </div>

            {/* Metric 3: Questions Attempted (1,248) */}
            <div className="bg-[#120723] border border-violet-900/50 rounded-2xl p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-purple-300">
                <span className="font-semibold uppercase tracking-wider">Questions Solved</span>
                <BarChart2 className="w-4 h-4 text-violet-400" />
              </div>
              <div className="my-3">
                <div className="text-4xl font-extrabold font-mono text-white tabular-nums">
                  1,248
                </div>
                <div className="text-xs text-purple-300/80 mt-1">
                  842 Prelims · 406 Mains
                </div>
              </div>
              <div className="text-[11px] text-purple-300/70 font-mono">
                Avg. 38 questions daily
              </div>
            </div>

            {/* Metric 4: Study Streak (12 Days) */}
            <div className="bg-[#120723] border border-violet-900/50 rounded-2xl p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-purple-300">
                <span className="font-semibold uppercase tracking-wider">Study Streak</span>
                <Flame className="w-4 h-4 text-violet-400 fill-violet-400" />
              </div>
              <div className="my-3">
                <div className="text-4xl font-extrabold font-mono text-violet-300 tabular-nums">
                  12 Days
                </div>
                <div className="text-xs text-purple-300/80 mt-1">
                  Consistency milestone active
                </div>
              </div>
              <div className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Target: 21-Day Habit</span>
              </div>
            </div>

          </div>

          {/* Subject Performance Breakdown + Weak Area / AI Recommendation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
            
            {/* Left 7 Columns: Subject Performance Cards with Progress Bars */}
            <div className="lg:col-span-7 bg-[#120723] border border-violet-900/50 rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-violet-950 pb-3">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Subject Performance Breakdown
                </h3>
                <span className="text-xs font-mono text-violet-300">Target Benchmark: 75%</span>
              </div>

              <div className="space-y-4">
                {subjects.map((sub, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-purple-100">{sub.name}</span>
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-[11px] ${sub.score >= 75 ? 'text-emerald-400' : 'text-amber-400'}`}>
                          {sub.trend}
                        </span>
                        <span className="font-mono font-bold text-white tabular-nums">
                          {sub.score}%
                        </span>
                      </div>
                    </div>

                    <div className="w-full bg-[#20103A] h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ease-out ${
                          sub.score >= 80
                            ? 'bg-violet-400'
                            : sub.score >= 70
                            ? 'bg-violet-500'
                            : 'bg-purple-600'
                        }`}
                        style={{ width: isVisible ? `${sub.score}%` : '0%' }}
                      />
                    </div>

                    <div className="text-[11px] text-purple-300/70">
                      {sub.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Weak Area Alert & AI Recommendation */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              
              {/* Weak Area Diagnostic Card */}
              <div className="bg-[#120723] border border-amber-500/30 rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Identified Priority Weak Area</span>
                </div>
                <div className="text-base font-bold text-white">
                  Indian Economy — Monetary Policy
                </div>
                <p className="text-xs text-purple-200/80 leading-relaxed">
                  Accuracy in RBI tools (Repo/Reverse Repo, SDF, MSF) dropped to 52% in recent sectional test #03.
                </p>
              </div>

              {/* AI Recommendation Action Card */}
              <div className="bg-gradient-to-br from-[#1F113B] to-[#120723] border-2 border-violet-500/70 rounded-2xl p-5 shadow-lg shadow-violet-500/15 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet-300">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span>AI Study Directive</span>
                </div>
                <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                  "Focus on monetary policy concepts and attempt 15 targeted questions today."
                </p>
                <div className="pt-2 border-t border-violet-950 flex items-center justify-between">
                  <span className="text-[11px] text-purple-300 font-mono">
                    Estimated Time: 25 mins
                  </span>
                  <a
                    href="#practice"
                    className="px-3.5 py-1.5 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    <span>Practice Drill Now</span>
                    <ArrowRight className="w-3 h-3 text-violet-200" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
