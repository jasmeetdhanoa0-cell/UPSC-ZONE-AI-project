import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface FloatingAIOrbProps {
  size?: number;
  className?: string;
}

export const FloatingAIOrb: React.FC<FloatingAIOrbProps> = ({ size = 64, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Micro parallax offset (very subtle, damped)
      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      const targetX = Math.max(-1, Math.min(1, deltaX)) * 8;
      const targetY = Math.max(-1, Math.min(1, deltaY)) * 8;

      setOffset({ x: targetX, y: targetY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [reducedMotion]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: size,
        height: size,
        perspective: '600px',
      }}
      className={`relative select-none pointer-events-auto cursor-pointer ${className}`}
      aria-label="AI Assistant Indicator"
      role="img"
    >
      {/* 3D Transform Container tracking cursor with gentle float */}
      <div
        style={{
          transform: reducedMotion
            ? 'none'
            : `translate3d(${offset.x * 0.6}px, ${offset.y * 0.6}px, 0) rotateX(${-offset.y * 0.8}deg) rotateY(${offset.x * 0.8}deg)`,
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          transformStyle: 'preserve-3d',
        }}
        className={`w-full h-full relative flex items-center justify-center ${
          reducedMotion ? '' : 'animate-float-subtle'
        }`}
      >
        {/* Subtle Ambient Violet/Lavender Glow */}
        <div
          className={`absolute -inset-2 rounded-full bg-violet-500/25 blur-lg transition-opacity duration-300 pointer-events-none ${
            isHovered ? 'opacity-100 scale-115' : 'opacity-70'
          }`}
          style={{ transform: 'translateZ(-10px)' }}
        />

        {/* Clean, Simple Floating AI Orb Body */}
        <div
          className={`relative w-full h-full rounded-2xl bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-900 border border-violet-400/40 shadow-lg shadow-purple-950/50 flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'scale-105 border-violet-300 shadow-violet-600/30' : 'scale-100'
          }`}
          style={{ transform: 'translateZ(10px)' }}
        >
          {/* Subtle Specular Arc */}
          <div className="absolute top-1.5 left-2 w-5 h-2 bg-white/40 rounded-full blur-[0.6px] rotate-[-20deg]" />

          {/* Minimalist AI Sparkle Symbol */}
          <Sparkles className="w-5 h-5 text-white/90 drop-shadow-xs" />
        </div>
      </div>
    </div>
  );
};
