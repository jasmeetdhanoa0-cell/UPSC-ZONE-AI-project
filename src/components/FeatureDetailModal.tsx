import React from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, BrainCircuit, Newspaper, History, BookMarked, LineChart } from 'lucide-react';
import { FeatureItem } from '../types';

interface FeatureDetailModalProps {
  feature: FeatureItem | null;
  onClose: () => void;
  onStartPreparing: () => void;
}

export const FeatureDetailModal: React.FC<FeatureDetailModalProps> = ({ feature, onClose, onStartPreparing }) => {
  if (!feature) return null;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-violet-300" />;
      case 'Newspaper': return <Newspaper className="w-5 h-5 text-violet-300" />;
      case 'History': return <History className="w-5 h-5 text-violet-300" />;
      case 'BookMarked': return <BookMarked className="w-5 h-5 text-violet-300" />;
      case 'LineChart': return <LineChart className="w-5 h-5 text-violet-300" />;
      default: return <Sparkles className="w-5 h-5 text-violet-300" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-xl max-w-xl w-full border border-violet-100 shadow-2xl overflow-hidden relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header in Deep Purple */}
        <div className="bg-[#130924] text-white p-6 relative text-left">
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 p-1.5 text-purple-300 hover:text-white rounded-lg hover:bg-violet-900/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg bg-violet-600/30 border border-violet-500/40 flex items-center justify-center">
              {renderIcon(feature.iconName)}
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-violet-400">
                {feature.tagline}
              </div>
              <h3 id="modal-title" className="text-xl font-bold text-white">
                {feature.title}
              </h3>
            </div>
          </div>
          
          <div className="text-xs font-mono text-purple-200 mt-2 bg-[#1A0E31] px-3 py-1.5 rounded-md inline-block border border-violet-900/60">
            {feature.highlightStat}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto text-left">
          <p className="text-sm text-[#4B4361] leading-relaxed">
            {feature.description}
          </p>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#1E1A29] mb-3">
              Core Architectural Capabilities
            </div>
            <ul className="space-y-2.5">
              {feature.detailPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-[#2E283E] leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#FAF9FF] border border-violet-100 rounded-lg p-3.5">
            <div className="text-[11px] font-semibold text-[#6B6280] uppercase tracking-wider mb-1">
              Sample System Interaction
            </div>
            <div className="text-xs font-mono text-[#1E1A29] bg-white p-2.5 rounded border border-violet-200/80 leading-relaxed">
              {feature.demoSnippet}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#FAF9FF] px-6 py-4 border-t border-violet-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#4B4361] hover:text-[#1E1A29] px-3 py-2"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onStartPreparing();
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg flex items-center gap-1.5 shadow-sm transition-colors"
          >
            <span>Try in Workspace</span>
            <ArrowRight className="w-3.5 h-3.5 text-violet-200" />
          </button>
        </div>
      </div>
    </div>
  );
};
