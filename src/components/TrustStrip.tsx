import React from 'react';
import { BrainCircuit, BookText, Compass, SearchCheck } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const metrics = [
    {
      icon: BrainCircuit,
      title: 'AI-Powered Practice',
      metric: 'Adaptive Modeling',
      description: 'Questions calibrate dynamically to your speed, retention curve, and mistake patterns.',
    },
    {
      icon: BookText,
      title: 'Current Affairs Coverage',
      metric: '8 Dailies Synthesized',
      description: 'Zero fluff: The Hindu, Indian Express, and PIB distilled into GS-I through GS-IV pointers.',
    },
    {
      icon: SearchCheck,
      title: 'PYQ-Based Learning',
      metric: '2011–2025 Granular Index',
      description: 'Every past Prelims and Mains question categorized across 48 micro-themes.',
    },
    {
      icon: Compass,
      title: 'Personalized Insights',
      metric: 'Elimination Instinct Radar',
      description: 'Detect whether 50:50 second-guessing costs you negative marks in CSE Paper-I.',
    },
  ];

  return (
    <section className="bg-[#F5F3FF] border-b border-violet-100/80 text-[#1E1A29] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Lead-in */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-violet-200/60">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-violet-700">
              Built for focused preparation
            </div>
            <p className="text-sm text-[#4B4361] mt-1 font-medium">
              Methodical, syllabus-first tools engineered specifically for the rigor of the Civil Services Examination.
            </p>
          </div>
          <div className="text-xs text-[#6B6280] font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
            <span>Calibrated for CSE 2026/2027 Syllabus</span>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="space-y-2 text-left">
                <div className="flex items-center gap-2.5 text-violet-700">
                  <div className="w-7 h-7 rounded-lg bg-violet-100 flex items-center justify-center text-violet-700">
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                  </div>
                  <span className="text-xs font-semibold tracking-wide uppercase text-violet-900">
                    {item.title}
                  </span>
                </div>
                <div className="text-lg font-bold text-[#1E1A29] font-mono tracking-tight pt-1">
                  {item.metric}
                </div>
                <p className="text-xs text-[#4B4361] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
