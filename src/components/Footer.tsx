import React from 'react';
import { Sparkles, Twitter, Linkedin, Youtube } from 'lucide-react';

interface FooterProps {
  onOpenOnboarding: () => void;
  onOpenLogin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOnboarding, onOpenLogin }) => {
  return (
    <footer className="bg-[#0D0519] text-purple-300/70 text-xs border-t border-violet-950/90 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-violet-950/80 text-left">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center text-white font-bold shadow-xs border border-violet-400/30">
                <Sparkles className="w-3.5 h-3.5 fill-white text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                UPSC ZONE <span className="text-violet-400">AI</span>
              </span>
            </div>
            
            <p className="text-xs text-purple-200/80 max-w-sm leading-relaxed">
              AI-powered preparation for ambitious aspirants.
            </p>

            <div className="flex items-center gap-3 pt-2 text-purple-400">
              <a
                href="#hero"
                aria-label="Twitter Profile"
                className="w-8 h-8 rounded-lg bg-[#160B29] border border-violet-900/60 flex items-center justify-center hover:text-violet-300 hover:border-violet-700 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#hero"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded-lg bg-[#160B29] border border-violet-900/60 flex items-center justify-center hover:text-violet-300 hover:border-violet-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#hero"
                aria-label="YouTube Channel"
                className="w-8 h-8 rounded-lg bg-[#160B29] border border-violet-900/60 flex items-center justify-center hover:text-violet-300 hover:border-violet-700 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Navigation */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#hero" className="hover:text-violet-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-violet-300 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#ai-tools" className="hover:text-violet-300 transition-colors">
                  AI Tools
                </a>
              </li>
              <li>
                <a href="#current-affairs" className="hover:text-violet-300 transition-colors">
                  Current Affairs
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:text-violet-300 transition-colors">
                  Practice
                </a>
              </li>
              <li>
                <a href="#analytics" className="hover:text-violet-300 transition-colors">
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Resources
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#practice" className="hover:text-violet-300 transition-colors">
                  PYQs
                </a>
              </li>
              <li>
                <a href="#study-plan" className="hover:text-violet-300 transition-colors">
                  Study Planner
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-violet-300 transition-colors">
                  Notes
                </a>
              </li>
              <li>
                <a href="#current-affairs" className="hover:text-violet-300 transition-colors">
                  Current Affairs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Support
            </div>
            <ul className="space-y-2.5">
              <li>
                <button onClick={onOpenOnboarding} className="hover:text-violet-300 transition-colors text-left">
                  Help Center
                </button>
              </li>
              <li>
                <button onClick={onOpenLogin} className="hover:text-violet-300 transition-colors text-left">
                  Contact
                </button>
              </li>
              <li>
                <a href="#hero" className="hover:text-violet-300 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#hero" className="hover:text-violet-300 transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-purple-400/60">
          <div>
            © 2026 UPSC ZONE AI. All rights reserved.
          </div>
          <div className="max-w-xl text-left md:text-right text-[11px] leading-relaxed text-purple-400/60">
            Disclaimer: UPSC ZONE AI is an independent educational tool prototype and is not officially affiliated with or endorsed by the Union Public Service Commission (UPSC) or Government of India.
          </div>
        </div>

      </div>
    </footer>
  );
};
