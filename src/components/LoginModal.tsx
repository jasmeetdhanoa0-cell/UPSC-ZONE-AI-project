import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (name: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleDemoLogin = (name: string) => {
    setIsSubmitted(true);
    setTimeout(() => {
      onLoginSuccess(name);
      setIsSubmitted(false);
      onClose();
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
    setTimeout(() => {
      onLoginSuccess(email.split('@')[0] || 'Aspirant');
      setIsSubmitted(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-xl max-w-md w-full border border-violet-100 shadow-2xl overflow-hidden relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-modal-title"
      >
        {/* Header */}
        <div className="bg-[#130924] text-white p-6 relative text-left">
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 p-1.5 text-purple-300 hover:text-white rounded-lg hover:bg-violet-900/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Aspirant Portal</span>
          </div>

          <h3 id="login-modal-title" className="text-xl font-bold text-white">
            Access Your Workspace
          </h3>
          <p className="text-xs text-purple-200/80 mt-1">
            Review test diagnostics, active flashcards, and personalized daily schedules.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-left">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="text-base font-bold text-[#1E1A29]">
                Workspace Initialized
              </div>
              <p className="text-xs text-[#6B6280]">
                Loading your diagnostic profile and daily schedule...
              </p>
            </div>
          ) : (
            <>
              {/* Quick Demo Profiles */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1A29] mb-2">
                  1-Click Demo Profiles (For UI/UX Review)
                </label>
                <div className="space-y-2">
                  {[
                    { name: 'Aditi R.', role: 'Prelims 2025 Cleared · 104.5 Marks' },
                    { name: 'Rohan K.', role: 'Working Professional · IRS Aspirant' },
                    { name: 'Meera S.', role: 'Mains Candidate · Sociology Optional' },
                  ].map((profile) => (
                    <button
                      key={profile.name}
                      type="button"
                      onClick={() => handleDemoLogin(profile.name)}
                      className="w-full p-3 rounded-lg border border-violet-100 hover:border-violet-400 hover:bg-[#F5F3FF]/70 text-left transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-violet-100 flex items-center justify-center text-xs font-bold text-violet-800 group-hover:bg-violet-200">
                          {profile.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#1E1A29]">
                            {profile.name}
                          </div>
                          <div className="text-[11px] text-[#6B6280]">
                            {profile.role}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-violet-400 group-hover:text-violet-700 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 my-2 text-xs text-purple-300">
                <div className="flex-1 h-px bg-violet-100" />
                <span>or email sign in</span>
                <div className="flex-1 h-px bg-violet-100" />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="aspirant-email" className="block text-xs font-semibold text-[#1E1A29] mb-1">
                    Aspirant Email Address
                  </label>
                  <input
                    id="aspirant-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="aspirant@upsczone.ai"
                    className="w-full px-3 py-2 text-xs border border-violet-200 rounded-lg focus:outline-none focus:border-violet-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!email}
                  className="w-full py-2.5 bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Sign In to Workspace</span>
                  <ArrowRight className="w-3.5 h-3.5 text-violet-200" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
