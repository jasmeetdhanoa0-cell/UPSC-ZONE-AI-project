import React from 'react';
import { Quote, BrainCircuit, Target, Compass, BookOpen } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 'aditi',
      quote: 'UPSC ZONE AI helped me turn scattered preparation into a much more organized routine. The syllabus linkage with daily news eliminated 3 hours of aimless reading every single morning.',
      author: 'Aditi Sharma',
      role: 'UPSC Aspirant · Full-Time Preparation',
      location: 'New Delhi',
      target: 'CSE 2026',
    },
    {
      id: 'rohan',
      quote: 'Balancing a demanding 9-to-6 job with UPSC prep felt impossible until I started using the adaptive weekly planner. The elimination analytics showed me why I kept losing marks on 50:50 guesses.',
      author: 'Rohan Kapoor',
      role: 'Working Professional · IRS Aspirant',
      location: 'Bengaluru',
      target: 'CSE 2026',
    },
    {
      id: 'meera',
      quote: 'The AI Mains feedback pointed out that my conclusions were too general. Having real-time suggestions citing constitutional articles and committee recommendations has elevated my GS-II answers completely.',
      author: 'Meera Sen',
      role: 'Mains Candidate · Sociology Optional',
      location: 'Pune',
      target: 'CSE 2026',
    },
  ];

  const trustIndicators = [
    { title: 'AI-Powered Preparation', desc: 'Syllabus-trained Socratic feedback', icon: BrainCircuit },
    { title: 'Smart Practice', desc: 'Multi-statement elimination drills', icon: Target },
    { title: 'Personalized Insights', desc: 'Negative marking risk diagnostics', icon: Compass },
    { title: 'Structured Revision', desc: 'Automated spaced-repetition schedules', icon: BookOpen },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FAF9FF] text-[#1E1A29] border-b border-violet-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-violet-700 mb-2">
            Aspirant Experiences & Study Workflows
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1A29] leading-tight">
            Built for Serious Aspirants
          </h2>
          <p className="text-base sm:text-lg text-[#4B4361] mt-3 leading-relaxed max-w-2xl mx-auto">
            Everything you need to make your preparation more structured, focused and measurable.
          </p>
          <div className="text-xs text-[#6B6280] mt-2 font-mono">
            Demo aspirant case profiles illustrating platform pedagogical workflows.
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-violet-100 rounded-2xl p-7 shadow-xs hover:shadow-md hover:border-violet-300 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-violet-300" />
                <p className="text-sm text-[#2E283E] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-violet-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-violet-100 border border-violet-200 flex items-center justify-center text-violet-800 font-bold text-sm">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1E1A29]">
                      {t.author}
                    </div>
                    <div className="text-xs text-[#6B6280] leading-snug">
                      <span>{t.role}</span>
                      <span aria-hidden="true" className="mx-1">·</span>
                      <span>{t.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-[11px] text-violet-700 font-mono font-medium">
                  Target Exam: {t.target}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Trust Indicators Strip */}
        <div className="pt-10 border-t border-violet-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {trustIndicators.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-4 rounded-xl bg-white border border-violet-100 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-700 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1E1A29]">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#4B4361] mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
