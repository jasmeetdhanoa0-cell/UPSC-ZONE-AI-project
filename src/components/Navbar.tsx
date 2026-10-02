import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenOnboarding: () => void;
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOnboarding, onOpenLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'AI Tools', href: '#ai-tools' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Practice', href: '#practice' },
    { name: 'Current Affairs', href: '#current-affairs' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Study Plan', href: '#study-plan' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#130924]/95 backdrop-blur-md border-b border-violet-900/40 shadow-md shadow-purple-950/20 py-3.5'
          : 'bg-[#130924] border-b border-violet-950/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Wordmark with integrated AI symbol */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-white tracking-tight group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center text-white font-bold shadow-xs shadow-violet-500/30 group-hover:scale-105 transition-transform duration-200 border border-violet-400/30">
              <Sparkles className="w-4 h-4 text-violet-200" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-sans">
              UPSC ZONE <span className="text-violet-400 font-semibold">AI</span>
            </span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-purple-200/90">
            {navLinks.slice(0, 6).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors duration-150 relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenLogin}
              className="px-4 py-2 text-xs font-semibold text-purple-200 hover:text-white hover:bg-violet-900/30 rounded-lg border border-violet-800/50 transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              Log In
            </button>
            <button
              onClick={onOpenOnboarding}
              className="px-4 py-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg shadow-sm hover:shadow-violet-600/30 transition-all duration-150 flex items-center gap-1.5 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 border border-violet-400/30"
            >
              <span>Start Preparing Free</span>
              <ArrowRight className="w-3.5 h-3.5 text-violet-200" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenOnboarding}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-md whitespace-nowrap"
            >
              Start Free
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-purple-200 hover:text-white rounded-lg hover:bg-violet-900/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#130924] border-b border-violet-900/50 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-purple-100 hover:text-white hover:bg-violet-900/30 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-violet-900/40 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-purple-200 border border-violet-800/60 rounded-lg hover:bg-violet-900/30"
            >
              Log In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOnboarding();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Start Preparing Free</span>
              <ArrowRight className="w-4 h-4 text-violet-200" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
