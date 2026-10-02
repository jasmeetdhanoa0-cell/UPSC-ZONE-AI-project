import React from 'react';
import { X, Calendar, CheckCircle2 } from 'lucide-react';
import { CurrentAffairItem } from '../types';

interface ArticleModalProps {
  article: CurrentAffairItem | null;
  onClose: () => void;
  onBookmark?: (id: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-xl max-w-2xl w-full border border-violet-100 shadow-2xl overflow-hidden relative flex flex-col max-h-[85vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="article-title"
      >
        {/* Modal Top Ribbon in Deep Purple */}
        <div className="bg-[#130924] text-white p-6 relative shrink-0 text-left">
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 p-1.5 text-purple-300 hover:text-white rounded-lg hover:bg-violet-900/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Clean unboxed metadata */}
          <div className="flex items-center gap-2 text-xs text-violet-300 font-medium mb-2">
            <span>{article.category}</span>
            <span aria-hidden="true" className="text-purple-400/60">·</span>
            <span className="text-purple-200">{article.gsPaper}</span>
            <span aria-hidden="true" className="text-purple-400/60">·</span>
            <span className="text-purple-300/80">{article.readTime}</span>
          </div>

          <h3 id="article-title" className="text-xl font-bold text-white leading-snug">
            {article.headline}
          </h3>

          <div className="flex items-center gap-2 text-[11px] text-purple-300/70 mt-2">
            <Calendar className="w-3.5 h-3.5 text-violet-400" />
            <span>Published {article.date}</span>
            <span aria-hidden="true">·</span>
            <span>UPSC ZONE AI Editorial Desk (Demo Research Brief)</span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-left">
          
          {/* Executive Summary */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#1E1A29] mb-2">
              Executive Context
            </div>
            <p className="text-xs sm:text-sm text-[#2E283E] leading-relaxed bg-[#F5F3FF] p-3.5 rounded-lg border border-violet-200/60">
              {article.summary}
            </p>
          </div>

          {/* Constitutional & Statutory Hooks */}
          {article.keyArticles && (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#1E1A29] mb-2">
                Constitutional & Legal Hooks
              </div>
              <div className="flex flex-wrap gap-2">
                {article.keyArticles.map((art, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono text-violet-900 bg-[#F5F3FF] px-2.5 py-1 rounded border border-violet-200"
                  >
                    {art}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Editorial Arguments */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#1E1A29] mb-2">
              Key Analytical Arguments (Mains Perspective)
            </div>
            <ul className="space-y-2">
              {article.editorialAnalysis.keyArguments.map((arg, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#4B4361] leading-relaxed">
                  <span className="text-violet-600 font-bold font-mono">›</span>
                  <span>{arg}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prelims Quick Pointers */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#1E1A29] mb-2">
              Prelims High-Yield Pointers
            </div>
            <div className="space-y-2 bg-[#FAF9FF] p-4 rounded-lg border border-violet-100">
              {article.prelimsPointers.map((ptr, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#2E283E]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-600 shrink-0 mt-0.5" />
                  <span>{ptr}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Way Forward */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#1E1A29] mb-2">
              Way Forward / Balanced Conclusion
            </div>
            <p className="text-xs text-[#4B4361] leading-relaxed italic border-l-2 border-violet-600 pl-3.5">
              "{article.editorialAnalysis.wayForward}"
            </p>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="bg-[#FAF9FF] px-6 py-4 border-t border-violet-100 flex items-center justify-between shrink-0">
          <div className="text-[11px] text-[#6B6280] font-mono">
            Demo educational content · UPSC syllabus aligned
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#1E1A29] bg-white border border-violet-200 hover:bg-violet-50 rounded-lg transition-colors"
          >
            Close Brief
          </button>
        </div>
      </div>
    </div>
  );
};
