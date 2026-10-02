import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, CheckCircle2, ArrowRight, BookOpen, Layers } from 'lucide-react';

interface SmartStudyPlanProps {
  onOpenOnboarding: () => void;
}

export const SmartStudyPlan: React.FC<SmartStudyPlanProps> = ({ onOpenOnboarding }) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const weeklySchedule = [
    {
      day: 'Monday',
      shortDay: 'Mon',
      subjects: 'Polity + Current Affairs',
      timeSlot: '5.5 Hours',
      focusDetail: 'Preamble, Fundamental Rights & Writs + Morning Editorial Analysis (The Hindu & Indian Express).',
      status: 'Completed',
    },
    {
      day: 'Tuesday',
      shortDay: 'Tue',
      subjects: 'History + PYQs',
      timeSlot: '6.0 Hours',
      focusDetail: 'Socio-Religious Reform Movements + 40 statement questions from 2015–2024 UPSC Prelims.',
      status: 'Completed',
    },
    {
      day: 'Wednesday',
      shortDay: 'Wed',
      subjects: 'Economy + Revision',
      timeSlot: '5.5 Hours',
      focusDetail: 'Monetary Policy Framework, RBI tools, Inflation targeting + NCERT Macroeconomics revision.',
      status: 'In Progress',
    },
    {
      day: 'Thursday',
      shortDay: 'Thu',
      subjects: 'Geography + Mock Test',
      timeSlot: '6.5 Hours',
      focusDetail: 'Climatology, Jet Streams & Monsoon mechanisms + 50-Question Sectional Simulation.',
      status: 'Upcoming',
    },
    {
      day: 'Friday',
      shortDay: 'Fri',
      subjects: 'Environment + Current Affairs',
      timeSlot: '5.0 Hours',
      focusDetail: 'Ramsar Sites, Wildlife Protection Act Schedules & COP climate milestones + PIB synthesis.',
      status: 'Upcoming',
    },
    {
      day: 'Saturday',
      shortDay: 'Sat',
      subjects: 'Full Revision',
      timeSlot: '6.0 Hours',
      focusDetail: 'Consolidated flashcard drills, Mains model answer writing (2 questions) & mind-map reviews.',
      status: 'Upcoming',
    },
    {
      day: 'Sunday',
      shortDay: 'Sun',
      subjects: 'Mock Test + Analysis',
      timeSlot: '5.0 Hours',
      focusDetail: 'Full-length GS Paper I Simulation (09:30 AM) + Elimination instinct & negative marking audit.',
      status: 'Upcoming',
    },
  ];

  const activeDay = weeklySchedule[selectedDayIndex];

  return (
    <section id="study-plan" className="py-20 md:py-28 bg-[#FAF9FF] text-[#1E1A29] border-b border-violet-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-violet-700 mb-2">
            Adaptive Weekly Time-Management
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1A29] leading-tight">
            Your Preparation, Organized.
          </h2>
          <p className="text-base sm:text-lg text-[#4B4361] mt-3 leading-relaxed max-w-2xl mx-auto">
            Build a study routine that adapts to your goals, schedule and progress.
          </p>
        </div>

        {/* Weekly Calendar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Column: 7-Day Visual Planner */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Days Horizontal Tab Selector for quick switching on mobile/desktop */}
            <div className="grid grid-cols-7 gap-1.5 sm:gap-2 p-1.5 bg-violet-100/70 rounded-xl mb-4">
              {weeklySchedule.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedDayIndex(idx)}
                  className={`py-2 px-1 text-center rounded-lg transition-all text-xs font-semibold ${
                    selectedDayIndex === idx
                      ? 'bg-violet-700 text-white shadow-xs'
                      : 'text-[#4B4361] hover:text-[#1E1A29] hover:bg-white/60'
                  }`}
                >
                  <div className="font-mono text-[10px] opacity-75">{item.shortDay}</div>
                  <div className="truncate hidden sm:block text-[11px] mt-0.5">{item.subjects.split('+')[0].trim()}</div>
                </button>
              ))}
            </div>

            {/* Complete Monday-Sunday Schedule Stacked View */}
            <div className="space-y-3">
              {weeklySchedule.map((item, idx) => {
                const isSelected = idx === selectedDayIndex;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedDayIndex(idx)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-white border-violet-400 ring-2 ring-violet-400/30 shadow-md shadow-violet-500/10'
                        : 'bg-white/80 border-violet-100/80 hover:bg-white hover:border-violet-200 shadow-xs'
                    }`}
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      {/* Day Pill */}
                      <div className={`w-24 shrink-0 font-bold text-xs sm:text-sm py-1.5 px-3 rounded-lg text-center ${
                        isSelected ? 'bg-violet-700 text-white' : 'bg-violet-50 text-violet-900 border border-violet-100'
                      }`}>
                        {item.day}
                      </div>

                      {/* Subject Pair */}
                      <div>
                        <div className="text-sm font-bold text-[#1E1A29]">
                          {item.subjects}
                        </div>
                        <div className="text-xs text-[#4B4361] mt-0.5 line-clamp-1">
                          {item.focusDetail}
                        </div>
                      </div>
                    </div>

                    {/* Time Slot & Status */}
                    <div className="flex items-center gap-3 sm:self-center self-end pl-28 sm:pl-0">
                      <div className="text-xs font-mono text-[#6B6280] flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-violet-600" />
                        <span>{item.timeSlot}</span>
                      </div>
                      <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded border ${
                        item.status === 'Completed'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : item.status === 'In Progress'
                          ? 'bg-violet-50 text-violet-800 border-violet-200 font-bold'
                          : 'bg-slate-50 text-slate-600 border-slate-200'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Day Detail + AI Study Recommendation Side Panel */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Active Day Detail Card */}
            <div className="bg-white border border-violet-100 rounded-2xl p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-violet-100">
                <span className="font-bold uppercase tracking-wider text-violet-700">
                  {activeDay.day} Focus Blueprint
                </span>
                <span className="font-mono text-xs text-[#6B6280]">{activeDay.timeSlot}</span>
              </div>
              <h4 className="text-base font-bold text-[#1E1A29]">
                {activeDay.subjects}
              </h4>
              <p className="text-xs text-[#4B4361] leading-relaxed bg-[#F5F3FF] p-3 rounded-xl border border-violet-200/60">
                {activeDay.focusDetail}
              </p>
            </div>

            {/* AI Study Recommendation Panel */}
            <div className="bg-[#150B28] text-white rounded-2xl p-6 border border-violet-900/60 shadow-xl space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-violet-950">
                <div className="w-7 h-7 rounded-lg bg-violet-600/30 border border-violet-500/40 flex items-center justify-center text-violet-300">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                    AI Study Recommendation
                  </h3>
                  <div className="text-[10px] text-purple-300/70 font-mono">Dynamic Timetable Balancing</div>
                </div>
              </div>

              <div className="p-3.5 bg-[#1C0E35] rounded-xl border border-violet-800/60 text-xs sm:text-sm text-purple-100 font-medium leading-relaxed italic">
                "Based on your recent performance, spend 30 additional minutes on Economy this week."
              </div>

              <p className="text-[11px] text-purple-300/80 leading-relaxed">
                Our algorithm reschedules unfinished topics automatically so you never suffer backlog anxiety before Prelims.
              </p>

              <button
                type="button"
                onClick={onOpenOnboarding}
                className="w-full py-3 px-4 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-md shadow-violet-600/30 transition-colors"
              >
                <span>Create My Study Plan</span>
                <ArrowRight className="w-3.5 h-3.5 text-violet-200" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
