/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Features } from './components/Features';
import { AIToolsShowcase } from './components/AIToolsShowcase';
import { HowItWorks } from './components/HowItWorks';
import { PracticePreview } from './components/PracticePreview';
import { CurrentAffairs } from './components/CurrentAffairs';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import { SmartStudyPlan } from './components/SmartStudyPlan';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { OnboardingModal } from './components/OnboardingModal';
import { LoginModal } from './components/LoginModal';
import { FloatingAIAssistant } from './components/FloatingAIAssistant';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [activeUser, setActiveUser] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleLoginSuccess = (name: string) => {
    setActiveUser(name);
    showToast(`Welcome to your workspace, ${name}! Baseline diagnostics loaded.`);
  };

  const handleScrollToAITools = () => {
    const el = document.getElementById('ai-tools');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9FF] text-[#1E1A29] flex flex-col font-sans selection:bg-[#6D28D9] selection:text-white relative">
      
      {/* Toast Notification in Deep Purple & Violet */}
      {toastMessage && (
        <div className="fixed bottom-20 sm:bottom-6 left-6 z-50 bg-[#130924] text-white border border-violet-500/60 px-4 py-3 rounded-xl shadow-xl shadow-purple-950/40 flex items-center gap-2.5 animate-in slide-in-from-bottom-5 duration-200">
          <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
          <span className="text-xs font-medium text-purple-100">{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        onOpenOnboarding={() => setIsOnboardingOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <Hero
          onOpenOnboarding={() => setIsOnboardingOpen(true)}
          onExploreAITools={handleScrollToAITools}
        />

        {/* 2. Trust & Statistics Strip */}
        <TrustStrip />

        {/* 3. Core Features - Interactive 3D Horizontal Carousel */}
        <Features onOpenOnboarding={() => setIsOnboardingOpen(true)} />

        {/* 4. AI Tools Interactive Workspace */}
        <AIToolsShowcase onOpenOnboarding={() => setIsOnboardingOpen(true)} />

        {/* 5. How UPSC ZONE AI Works - 3 Connected Steps */}
        <HowItWorks onOpenOnboarding={() => setIsOnboardingOpen(true)} />

        {/* 6. PYQ Practice Like the Real Exam Preview */}
        <PracticePreview />

        {/* 7. Current Affairs Dashboard + AI Exam Relevance Panel */}
        <CurrentAffairs />

        {/* 8. Performance Analytics Dashboard */}
        <PerformanceDashboard />

        {/* 9. Smart Study Plan Weekly Planner */}
        <SmartStudyPlan onOpenOnboarding={() => setIsOnboardingOpen(true)} />

        {/* 10. Social Proof & Testimonials */}
        <Testimonials />

        {/* 11. Final Conversion Action */}
        <FinalCTA
          onOpenOnboarding={() => setIsOnboardingOpen(true)}
          onExploreAITools={handleScrollToAITools}
        />

      </main>

      {/* Footer */}
      <Footer
        onOpenOnboarding={() => setIsOnboardingOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      {/* Floating 3D/Micro-Animated "Ask AI" Assistant Panel */}
      <FloatingAIAssistant onOpenOnboarding={() => setIsOnboardingOpen(true)} />

      {/* Interactive Modals */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

    </div>
  );
}
