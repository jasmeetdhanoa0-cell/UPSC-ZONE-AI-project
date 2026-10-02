import React, { useState } from 'react';
import { Calendar, ArrowRight, Sparkles, BookOpen, Clock, Tag, ExternalLink } from 'lucide-react';
import { ArticleModal } from './ArticleModal';

interface NewsItem {
  id: string;
  category: 'National' | 'International' | 'Economy' | 'Environment' | 'Science & Technology' | 'Polity';
  headline: string;
  summary: string;
  date: string;
  importance: 'High Yield Prelims' | 'Mains Priority' | 'Core GS Issue';
  gsPaper: 'GS Paper I' | 'GS Paper II' | 'GS Paper III' | 'GS Paper IV';
  upscRelevance: string;
  keywords: string[];
  aiPromptSnippet: string;
}

export const CurrentAffairs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItemId, setActiveItemId] = useState<string>('ca-polity');
  const [articleModalItem, setArticleModalItem] = useState<NewsItem | null>(null);

  const categories = [
    'All',
    'National',
    'International',
    'Economy',
    'Environment',
    'Science & Technology',
    'Polity',
  ];

  const newsItems: NewsItem[] = [
    {
      id: 'ca-polity',
      category: 'Polity',
      headline: 'Sub-classification within SC/ST Categories and Judicial Interpretation of Article 341',
      summary: 'A 7-judge Constitution Bench held that states have constitutional power to sub-classify reserved groups for affirmative action based on empirical data, reviewing the Chinnaiah (2004) judgement.',
      date: 'Today, Oct 02, 2026',
      importance: 'Mains Priority',
      gsPaper: 'GS Paper II',
      upscRelevance: 'Social Justice, Federal Powers under Articles 14, 15(4), 16(4) and presidential notification under Article 341.',
      keywords: ['Substantive Equality', 'Article 341', 'Chinnaiah Doctrine', 'Affirmative Action', 'State Competence'],
      aiPromptSnippet: 'Explain the constitutional validity of sub-classification under Article 16(4) and Article 341.',
    },
    {
      id: 'ca-economy',
      category: 'Economy',
      headline: 'Capital Goods Manufacturing Growth & Import Substitution Under PLI 2.0',
      summary: 'Index of Industrial Production reveals rising output in precision machine tools while domestic value addition in heavy industrial components faces R&D investment bottlenecks.',
      date: 'Today, Oct 02, 2026',
      importance: 'Core GS Issue',
      gsPaper: 'GS Paper III',
      upscRelevance: 'Mobilization of Resources, Industrial Growth, Trade Deficit, National Capital Goods Policy.',
      keywords: ['IIP Weightage', 'Capital Goods Policy', 'Make in India', 'MSME Supply Chains', 'Trade Deficit'],
      aiPromptSnippet: 'Analyze challenges facing India’s capital goods sector in achieving technological self-reliance.',
    },
    {
      id: 'ca-environment',
      category: 'Environment',
      headline: 'High-Altitude Himalayan Wetland Degradation & Carrying Capacity Frameworks',
      summary: 'Satellite monitoring across Trans-Himalayan Ramsar lakes reveals rapid tourist infrastructure pressures, prompting demands for micro-catchment eco-sensitive buffer zones.',
      date: 'Today, Oct 02, 2026',
      importance: 'High Yield Prelims',
      gsPaper: 'GS Paper III',
      upscRelevance: 'Ecology, Ramsar Convention criteria, Wetlands Rules 2017, Border Tourism EIA exemptions.',
      keywords: ['Ramsar Convention', 'Montreux Record', 'Wetlands Rules 2017', 'Article 48A', 'Carrying Capacity'],
      aiPromptSnippet: 'What are the ecological criteria for designating Ramsar sites in high-altitude cold deserts?',
    },
    {
      id: 'ca-international',
      category: 'International',
      headline: 'Strategic Transit Protocols for India–Middle East–Europe Economic Corridor (IMEC)',
      summary: 'Multimodal freight trial segments evaluate rail and deep-water container links between Western Indian ports and Arabian Gulf terminals amid shifting maritime supply routes.',
      date: 'Today, Oct 02, 2026',
      importance: 'Mains Priority',
      gsPaper: 'GS Paper II',
      upscRelevance: 'Bilateral & Regional Agreements involving India, Maritime Security, Countering BRI, PGII.',
      keywords: ['Multimodal Transit', 'PGII Framework', 'Suez Risk Mitigation', 'Article 73', 'Chabahar Comparison'],
      aiPromptSnippet: 'Evaluate the geopolitical and trade significance of IMEC for India’s West Asian strategy.',
    },
    {
      id: 'ca-science',
      category: 'Science & Technology',
      headline: 'Indigenous Small Modular Nuclear Reactors (SMRs) for Industrial Thermal Decarbonization',
      summary: 'Department of Atomic Energy explores public-private partnerships for factory-assembled 220 MWe reactors to replace retiring captive coal-fired units.',
      date: 'Today, Oct 02, 2026',
      importance: 'High Yield Prelims',
      gsPaper: 'GS Paper III',
      upscRelevance: 'Science & Tech applications, Energy Infrastructure, Atomic Energy Act 1962, Civil Nuclear Liability.',
      keywords: ['SMRs (under 300 MWe)', 'PHWR Tech', 'Passive Safety', 'Atomic Energy Act', 'Clean Base Load'],
      aiPromptSnippet: 'How do Small Modular Reactors differ from traditional gigawatt reactors in safety and cost?',
    },
  ];

  const filteredItems = selectedCategory === 'All'
    ? newsItems
    : newsItems.filter((item) => item.category === selectedCategory);

  const activeItem = newsItems.find((n) => n.id === activeItemId) || newsItems[0];

  return (
    <section id="current-affairs" className="py-20 md:py-28 bg-[#FAF9FF] text-[#1E1A29] border-b border-violet-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-violet-700 mb-2">
              Syllabus-Filtered News Intelligence
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1A29] leading-tight">
              Stay Ahead With Current Affairs
            </h2>
            <p className="text-base text-[#4B4361] mt-3 leading-relaxed">
              Stay updated with important events, explained clearly and organized for your UPSC preparation.
            </p>
          </div>

          <div className="text-left md:text-right">
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-lg border border-violet-100 shadow-xs text-xs font-medium text-violet-900">
              <Calendar className="w-3.5 h-3.5 text-violet-600" />
              <span>Today's Current Affairs · Oct 02, 2026</span>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 p-1 bg-violet-100/70 rounded-lg max-w-full overflow-x-auto pb-1 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors duration-150 ${
                selectedCategory === cat
                  ? 'bg-violet-700 text-white shadow-xs font-semibold'
                  : 'text-[#4B4361] hover:text-[#1E1A29] hover:bg-white/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2-Column Split: News Items List + AI Exam Relevance Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Column: News Items List */}
          <div className="lg:col-span-7 space-y-4">
            {filteredItems.map((item) => {
              const isSelected = item.id === activeItem.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItemId(item.id)}
                  className={`bg-white rounded-xl p-5 border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'border-violet-400 ring-2 ring-violet-400/25 shadow-md shadow-violet-500/10'
                      : 'border-violet-100 hover:border-violet-200 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 text-xs mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-violet-700">{item.category}</span>
                      <span aria-hidden="true" className="text-violet-300">·</span>
                      <span className="text-[#6B6280] font-mono text-[11px]">{item.date}</span>
                    </div>

                    {/* Importance Indicator */}
                    <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${
                      item.importance === 'High Yield Prelims'
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : item.importance === 'Mains Priority'
                        ? 'bg-purple-50 text-purple-800 border-purple-200'
                        : 'bg-violet-50 text-violet-800 border-violet-200'
                    }`}>
                      {item.importance}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#1E1A29] leading-snug hover:text-violet-900 transition-colors">
                    {item.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4B4361] mt-2 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>

                  <div className="mt-4 pt-3 border-t border-violet-50 flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-violet-800 font-medium">
                      {item.gsPaper}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setArticleModalItem(item);
                      }}
                      className="text-violet-700 hover:text-violet-900 font-semibold flex items-center gap-1 group"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: AI Exam Relevance Side Panel */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-[#150B28] text-white rounded-2xl p-6 border border-violet-900/60 shadow-xl space-y-5">
              
              {/* Panel Header */}
              <div className="flex items-center justify-between pb-4 border-b border-violet-950">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-violet-600/30 border border-violet-500/40 flex items-center justify-center text-violet-300">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">AI Exam Relevance</h3>
                    <div className="text-[10px] text-purple-300/70 font-mono">Real-Time Syllabus Linkage</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1C0E35] border border-violet-800 text-violet-300 font-bold">
                  {activeItem.gsPaper}
                </span>
              </div>

              {/* Active Headline Context */}
              <div className="bg-[#1C0E35] p-3.5 rounded-xl border border-violet-900/50 space-y-1">
                <span className="text-[10px] font-mono uppercase text-violet-300 tracking-wider">
                  Analyzing Selected Topic
                </span>
                <p className="text-xs font-semibold text-white leading-snug line-clamp-2">
                  {activeItem.headline}
                </p>
              </div>

              {/* UPSC Relevance Explanation */}
              <div className="space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-violet-400" />
                  <span>UPSC Syllabus Relevance</span>
                </div>
                <p className="text-xs text-purple-100/90 leading-relaxed bg-[#110720] p-3 rounded-lg border border-violet-950">
                  {activeItem.upscRelevance}
                </p>
              </div>

              {/* Important Keywords */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-violet-400" />
                  <span>Key Examination Keywords</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeItem.keywords.map((kw, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono bg-[#1C0E35] text-purple-200 px-2.5 py-1 rounded-md border border-violet-800/60"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button: Ask AI about this topic */}
              <div className="pt-2 border-t border-violet-950">
                <button
                  type="button"
                  onClick={() => {
                    const aiInput = document.querySelector('input[placeholder*="Ask any UPSC topic"]') as HTMLInputElement;
                    if (aiInput) {
                      aiInput.value = activeItem.aiPromptSnippet;
                      aiInput.focus();
                      document.getElementById('ai-tools')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full py-2.5 px-4 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-violet-600/30 transition-colors"
                >
                  <span>Ask AI about this topic</span>
                  <ArrowRight className="w-3.5 h-3.5 text-violet-200" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Full Modal for Read More */}
      {articleModalItem && (
        <ArticleModal
          article={{
            id: articleModalItem.id,
            category: articleModalItem.category === 'National' || articleModalItem.category === 'Polity' ? 'Polity & Governance' : (articleModalItem.category as any),
            gsPaper: articleModalItem.gsPaper,
            headline: articleModalItem.headline,
            summary: articleModalItem.summary,
            date: articleModalItem.date,
            readTime: '4 min read',
            keyArticles: articleModalItem.keywords,
            mainsRelevance: articleModalItem.upscRelevance,
            prelimsPointers: [
              `Exam significance for ${articleModalItem.gsPaper}`,
              'Standard textbook references and recent judicial/policy precedents',
              'Option elimination cues on key terminology',
            ],
            editorialAnalysis: {
              context: articleModalItem.summary,
              keyArguments: [
                'Constitutional framework and legal principles involved.',
                'Socio-economic impact and federal coordination requirements.',
                'Implementation obstacles and global benchmarks.',
              ],
              constitutionalAngles: articleModalItem.upscRelevance,
              wayForward: 'Balanced policy coordination with transparent empirical tracking.',
            },
          }}
          onClose={() => setArticleModalItem(null)}
        />
      )}
    </section>
  );
};
