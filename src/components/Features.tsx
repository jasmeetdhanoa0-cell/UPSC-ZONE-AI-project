import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  BrainCircuit, 
  Newspaper, 
  History, 
  BookMarked, 
  LineChart, 
  Sparkles, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight,
} from 'lucide-react';
import { FEATURES_DATA } from '../data/mockData';
import { FeatureItem } from '../types';
import { FeatureDetailModal } from './FeatureDetailModal';

interface FeaturesProps {
  onOpenOnboarding: () => void;
}

export const Features: React.FC<FeaturesProps> = ({ onOpenOnboarding }) => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Features list with title mapped to exact requirement
  const carouselFeatures: FeatureItem[] = FEATURES_DATA.map((feat, i) => {
    if (i === 5) {
      return {
        ...feat,
        title: 'AI Study Coach',
        tagline: 'Your 24/7 Strategic Mentor',
      };
    }
    return feat;
  });

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Center detect algorithm
  const updateCenterCard = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIdx = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((cardEl, idx) => {
      if (!cardEl) return;
      const cardRect = cardEl.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    setActiveIndex(closestIdx);
  }, []);

  // Listen to scroll events
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateCenterCard);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    updateCenterCard();

    return () => {
      container.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [updateCenterCard]);

  // Handle window resize to re-check center
  useEffect(() => {
    const handleResize = () => updateCenterCard();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateCenterCard]);

  // Center a card by index
  const scrollToCard = (index: number) => {
    const targetCard = cardRefs.current[index];
    const container = scrollContainerRef.current;
    if (!targetCard || !container) return;

    const containerRect = container.getBoundingClientRect();
    const cardRect = targetCard.getBoundingClientRect();

    const currentScrollLeft = container.scrollLeft;
    const targetScrollLeft = currentScrollLeft + (cardRect.left - containerRect.left) - (containerRect.width / 2 - cardRect.width / 2);

    container.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth',
    });
  };

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeIndex - 1);
    scrollToCard(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(carouselFeatures.length - 1, activeIndex + 1);
    scrollToCard(nextIdx);
  };

  // Render icon based on feature name
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-violet-700" />;
      case 'Newspaper':
        return <Newspaper className="w-5 h-5 text-violet-700" />;
      case 'History':
        return <History className="w-5 h-5 text-violet-700" />;
      case 'BookMarked':
        return <BookMarked className="w-5 h-5 text-violet-700" />;
      case 'LineChart':
        return <LineChart className="w-5 h-5 text-violet-700" />;
      default:
        return <Sparkles className="w-5 h-5 text-violet-700" />;
    }
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-[#FAF9FF] text-[#1E1A29] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-violet-700 mb-2">
              Integrated Workspace Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1A29] leading-tight">
              Everything You Need to Prepare Smarter
            </h2>
            <p className="text-base sm:text-lg text-[#4B4361] mt-3 leading-relaxed">
              Practice, revise, analyze and improve with AI-powered tools designed around your UPSC preparation.
            </p>
          </div>

          {/* Desktop Carousel Navigation Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-xs font-mono text-[#6B6280]">
              {String(activeIndex + 1).padStart(2, '0')} / {String(carouselFeatures.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                aria-label="Previous feature"
                className="w-10 h-10 rounded-full border border-violet-200 bg-white text-violet-900 disabled:opacity-35 disabled:cursor-not-allowed hover:bg-violet-50 hover:border-violet-300 flex items-center justify-center transition-colors shadow-xs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={activeIndex === carouselFeatures.length - 1}
                aria-label="Next feature"
                className="w-10 h-10 rounded-full border border-violet-200 bg-white text-violet-900 disabled:opacity-35 disabled:cursor-not-allowed hover:bg-violet-50 hover:border-violet-300 flex items-center justify-center transition-colors shadow-xs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* 3D Horizontal Feature Carousel Track */}
      <div className="relative w-full py-8">
        
        {/* Scrollable Container with horizontal snapping */}
        <div
          ref={scrollContainerRef}
          style={{ perspective: reducedMotion ? 'none' : '1200px' }}
          className="flex items-center gap-6 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar px-[8vw] sm:px-[calc(50vw-190px)] md:px-[calc(50vw-220px)] lg:px-[calc(50vw-230px)] py-6"
        >
          {carouselFeatures.map((feature, idx) => {
            const isActive = idx === activeIndex;
            const isLeft = idx < activeIndex;

            // 3D transform computation
            let transformStyle = '';
            if (!reducedMotion) {
              if (isActive) {
                transformStyle = 'scale(1.04) translateY(-8px) translateZ(24px)';
              } else if (isLeft) {
                transformStyle = 'scale(0.92) translateY(6px) rotateY(4.5deg)';
              } else {
                transformStyle = 'scale(0.92) translateY(6px) rotateY(-4.5deg)';
              }
            }

            return (
              <div
                key={feature.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                onClick={() => {
                  if (isActive) {
                    setSelectedFeature(feature);
                  } else {
                    scrollToCard(idx);
                  }
                }}
                style={{
                  transform: transformStyle || undefined,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
                }}
                className={`snap-center shrink-0 w-[84vw] sm:w-[380px] md:w-[420px] lg:w-[440px] rounded-2xl bg-white p-7 text-left cursor-pointer flex flex-col justify-between border select-none ${
                  isActive
                    ? 'border-violet-400 ring-2 ring-violet-400/30 shadow-2xl shadow-violet-600/15 opacity-100 z-20'
                    : 'border-violet-100/90 shadow-sm opacity-65 hover:opacity-85 z-10'
                }`}
              >
                <div>
                  {/* Card Top: Icon + Inspect Pill */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-violet-100 border border-violet-300 text-violet-700 scale-105 shadow-xs'
                          : 'bg-violet-50 border border-violet-100 text-violet-600'
                      }`}
                    >
                      {renderIcon(feature.iconName)}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-xs font-mono font-medium transition-colors ${
                          isActive ? 'text-violet-700 font-bold' : 'text-[#6B6280]'
                        }`}
                      >
                        {isActive ? 'Active Feature' : 'Click to Focus'}
                      </span>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform ${
                          isActive ? 'text-violet-700 translate-x-0.5 -translate-y-0.5' : 'text-[#6B6280]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Card Title & Subtitle */}
                  <h3
                    className={`text-xl font-bold tracking-tight transition-colors ${
                      isActive ? 'text-[#1E1A29]' : 'text-[#2E283E]'
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <div className="text-xs font-semibold text-violet-700 mt-1">
                    {feature.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#4B4361] mt-3 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Micro-Interaction Visual Snippet */}
                <div
                  className={`mt-6 pt-4 border-t rounded-xl p-3.5 transition-all ${
                    isActive
                      ? 'bg-[#F5F3FF] border-violet-200/80 shadow-inner'
                      : 'bg-slate-50/80 border-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1.5 font-mono">
                    <span className="text-[#6B6280]">
                      {idx === 0 && 'Adaptive Prelims Calibration'}
                      {idx === 1 && 'Daily Editorial Synthesis'}
                      {idx === 2 && '15-Year Pattern Intelligence'}
                      {idx === 3 && 'High-Yield Mind Maps'}
                      {idx === 4 && 'Real-Time Elimination Radar'}
                      {idx === 5 && 'Socratic AI Mentorship'}
                    </span>
                    <span className="text-violet-700 font-semibold font-mono">
                      {idx === 0 && '91.2% Calibrated'}
                      {idx === 1 && '06:00 AM IST'}
                      {idx === 2 && '2011–2025'}
                      {idx === 3 && '450+ Maps'}
                      {idx === 4 && '84% Accuracy'}
                      {idx === 5 && 'Live Sync'}
                    </span>
                  </div>

                  <div className="text-[11px] text-[#2E283E] leading-relaxed italic line-clamp-2">
                    {feature.demoSnippet}
                  </div>
                </div>

                {/* Inspect Action Footer */}
                <div className="mt-4 pt-3 flex items-center justify-between text-xs border-t border-violet-50">
                  <span className="text-[11px] text-[#6B6280] font-mono">
                    {feature.highlightStat}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedFeature(feature);
                    }}
                    className={`text-xs font-semibold flex items-center gap-1 transition-colors ${
                      isActive ? 'text-violet-700 hover:text-violet-900' : 'text-[#6B6280] hover:text-violet-700'
                    }`}
                  >
                    <span>Inspect Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating gradient masks for smooth edge fade on large screens */}
        <div className="hidden lg:block pointer-events-none absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#FAF9FF] to-transparent z-20" />
        <div className="hidden lg:block pointer-events-none absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#FAF9FF] to-transparent z-20" />

      </div>

      {/* Progress Indicator Dots below Carousel */}
      <div className="mt-6 flex flex-col items-center justify-center gap-3">
        <div className="flex items-center gap-2">
          {carouselFeatures.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => scrollToCard(dotIdx)}
              aria-label={`Scroll to feature ${dotIdx + 1}: ${carouselFeatures[dotIdx].title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                dotIdx === activeIndex
                  ? 'w-7 bg-violet-600 shadow-xs'
                  : 'w-2 bg-violet-200 hover:bg-violet-300'
              }`}
            />
          ))}
        </div>

        <div className="text-[11px] text-[#6B6280] font-mono flex items-center gap-2">
          <span className="hidden sm:inline">Use mouse-wheel, arrow buttons, or drag horizontally</span>
          <span className="sm:hidden">Swipe horizontally to explore features</span>
        </div>
      </div>

      {/* Feature Deep Dive Modal (Accessible on click) */}
      {selectedFeature && (
        <FeatureDetailModal
          feature={selectedFeature}
          onClose={() => setSelectedFeature(null)}
          onStartPreparing={onOpenOnboarding}
        />
      )}
    </section>
  );
};
