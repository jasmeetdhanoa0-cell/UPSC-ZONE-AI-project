import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form selections
  const [targetYear, setTargetYear] = useState('CSE 2026');
  const [aspirantStatus, setAspirantStatus] = useState('Full-Time Aspirant');
  const [dailyHours, setDailyHours] = useState('6 - 8 Hours');
  const [primaryFocus, setPrimaryFocus] = useState('Prelims GS-I & Elimination Mastery');
  const [optionalSubject, setOptionalSubject] = useState('Political Science & IR (PSIR)');

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-xl max-w-xl w-full border border-violet-100 shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="onboarding-modal-title"
      >
        {/* Header */}
        <div className="bg-[#130924] text-white p-6 relative shrink-0">
          <button
            onClick={handleReset}
            aria-label="Close dialog"
            className="absolute top-4 right-4 p-1.5 text-purple-300 hover:text-white rounded-lg hover:bg-violet-900/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Calibration Wizard · Step {step} of 4</span>
          </div>

          <h3 id="onboarding-modal-title" className="text-xl font-bold text-white">
            {step === 1 && 'Configure Your Examination Goals'}
            {step === 2 && 'Study Bandwidth & Focus Stage'}
            {step === 3 && 'Select Optional Subject'}
            {step === 4 && 'Your Personalized Preparation Blueprint'}
          </h3>

          <p className="text-xs text-purple-200/80 mt-1">
            {step < 4
              ? 'Our AI engine will calibrate your mock tests and daily revision schedule based on your profile.'
              : 'Blueprint generated based on CSE syllabus metrics and benchmark scores.'}
          </p>

          {/* Progress bar */}
          <div className="w-full bg-[#1C0E35] h-1.5 rounded-full mt-4 overflow-hidden">
            <div
              className="bg-violet-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-left flex-1">
          
          {/* Step 1: Target Year & Profile */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1A29] mb-2">
                  Target Examination Cycle
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {['CSE 2026', 'CSE 2027', 'State PCS 2026'].map((year) => (
                    <button
                      key={year}
                      type="button"
                      onClick={() => setTargetYear(year)}
                      className={`p-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                        targetYear === year
                          ? 'bg-[#F5F3FF] border-violet-500 text-violet-950 ring-1 ring-violet-500 font-bold'
                          : 'bg-white border-violet-100 text-[#4B4361] hover:border-violet-300'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1A29] mb-2">
                  Your Preparation Background
                </label>
                <div className="space-y-2">
                  {[
                    { title: 'Full-Time Aspirant', desc: 'Dedicated daily study without external commitments.' },
                    { title: 'Working Professional', desc: 'Balancing job hours with morning & evening revision.' },
                    { title: 'College Final Year', desc: 'Dual preparation along with degree examinations.' },
                  ].map((item) => (
                    <div
                      key={item.title}
                      onClick={() => setAspirantStatus(item.title)}
                      className={`p-3.5 rounded-lg border cursor-pointer transition-all flex items-start justify-between ${
                        aspirantStatus === item.title
                          ? 'bg-[#F5F3FF] border-violet-500 ring-1 ring-violet-500'
                          : 'bg-white border-violet-100 hover:border-violet-300'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-[#1E1A29]">{item.title}</div>
                        <div className="text-[11px] text-[#6B6280] mt-0.5">{item.desc}</div>
                      </div>
                      {aspirantStatus === item.title && (
                        <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Bandwidth & Primary Focus */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1A29] mb-2">
                  Daily Study Bandwidth
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {['3 - 5 Hours', '6 - 8 Hours', '8+ Hours'].map((hrs) => (
                    <button
                      key={hrs}
                      type="button"
                      onClick={() => setDailyHours(hrs)}
                      className={`p-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                        dailyHours === hrs
                          ? 'bg-[#F5F3FF] border-violet-500 text-violet-950 ring-1 ring-violet-500 font-bold'
                          : 'bg-white border-violet-100 text-[#4B4361] hover:border-violet-300'
                      }`}
                    >
                      {hrs}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1A29] mb-2">
                  Current Urgent Focus
                </label>
                <div className="space-y-2">
                  {[
                    'Prelims GS-I & Elimination Mastery',
                    'CSAT (Aptitude & Comprehension)',
                    'Mains GS-I to GS-IV Answer Writing',
                    'Optional Subject Deep Foundation',
                  ].map((focus) => (
                    <div
                      key={focus}
                      onClick={() => setPrimaryFocus(focus)}
                      className={`p-3 rounded-lg border cursor-pointer transition-all flex items-center justify-between text-xs font-semibold ${
                        primaryFocus === focus
                          ? 'bg-[#F5F3FF] border-violet-500 text-violet-950 ring-1 ring-violet-500'
                          : 'bg-white border-violet-100 text-[#4B4361] hover:border-violet-300'
                      }`}
                    >
                      <span>{focus}</span>
                      {primaryFocus === focus && (
                        <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Optional Subject */}
          {step === 3 && (
            <div className="space-y-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1A29]">
                Choose Optional Subject for Mains Integration
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  'Political Science & IR (PSIR)',
                  'Sociology',
                  'Geography',
                  'Public Administration',
                  'History',
                  'Anthropology',
                  'Economics',
                  'Philosophy / Literature',
                ].map((subj) => (
                  <button
                    key={subj}
                    type="button"
                    onClick={() => setOptionalSubject(subj)}
                    className={`p-3 text-xs font-semibold rounded-lg border text-left transition-all ${
                      optionalSubject === subj
                        ? 'bg-[#F5F3FF] border-violet-500 text-violet-950 ring-1 ring-violet-500'
                        : 'bg-white border-violet-100 text-[#4B4361] hover:border-violet-300'
                    }`}
                  >
                    {subj}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Blueprint Output */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="p-4 bg-[#F5F3FF] rounded-xl border border-violet-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-violet-900">
                  <CheckCircle2 className="w-4 h-4 text-violet-600" />
                  <span>Roadmap Calibrated for {targetYear}</span>
                </div>
                <p className="text-xs text-violet-950 leading-relaxed">
                  Your strategy has been tailored for <strong>{aspirantStatus}</strong> with <strong>{dailyHours}</strong> daily allocation.
                </p>
              </div>

              {/* Recommended Daily Cycle */}
              <div className="bg-[#FAF9FF] border border-violet-100 rounded-xl p-4 space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-[#1E1A29]">
                  Recommended Daily Schedule (AI Plan)
                </div>
                <div className="space-y-1.5 text-xs text-[#2E283E]">
                  <div className="flex items-center justify-between p-2 bg-white rounded border border-violet-100">
                    <span className="font-semibold">06:00 AM – 07:15 AM</span>
                    <span className="text-violet-700 font-medium">Daily Editorial Synthesis & Notes</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white rounded border border-violet-100">
                    <span className="font-semibold">09:00 AM – 12:30 PM</span>
                    <span className="text-[#1E1A29] font-medium">Core GS Focus: {primaryFocus}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white rounded border border-violet-100">
                    <span className="font-semibold">03:30 PM – 05:30 PM</span>
                    <span className="text-[#1E1A29] font-medium">{optionalSubject} Paper I</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white rounded border border-violet-100">
                    <span className="font-semibold">08:00 PM – 09:30 PM</span>
                    <span className="text-violet-700 font-medium">40-Question Adaptive Mock & Error Audit</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-violet-50 border border-violet-200 rounded-lg text-xs text-violet-900 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                <span>
                  First diagnostic test is unlocked. You will receive 20 baseline statement questions to establish your starting elimination accuracy.
                </span>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="bg-[#FAF9FF] px-6 py-4 border-t border-violet-100 flex items-center justify-between shrink-0">
          {step > 1 && step < 4 ? (
            <button
              onClick={() => setStep((prev) => (prev - 1) as 1 | 2 | 3)}
              className="text-xs font-semibold text-[#4B4361] hover:text-[#1E1A29] flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 3 && (
            <button
              onClick={() => setStep((prev) => (prev + 1) as 2 | 3)}
              className="px-5 py-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5 text-violet-200" />
            </button>
          )}

          {step === 3 && (
            <button
              onClick={() => setStep(4)}
              className="px-5 py-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <span>Generate My AI Blueprint</span>
              <Sparkles className="w-3.5 h-3.5 text-violet-200" />
            </button>
          )}

          {step === 4 && (
            <button
              onClick={handleReset}
              className="px-5 py-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <span>Enter Workspace Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-violet-200" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
