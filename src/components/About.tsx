import React from 'react';
import { BookOpen, Hammer, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlightIcons = [
    <BookOpen className="w-5 h-5 text-blue-600" />,
    <Hammer className="w-5 h-5 text-blue-600" />,
    <Compass className="w-5 h-5 text-blue-600" />,
  ];

  return (
    <section id="about" className="py-16 md:py-20 border-t border-slate-200/60 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Background & Focus
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            {PORTFOLIO_DATA.about.heading}
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
        </div>

        {/* Narrative Prose */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
              {PORTFOLIO_DATA.about.paragraphs[0]}
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
              {PORTFOLIO_DATA.about.paragraphs[1]}
            </p>
          </div>
        </div>

        {/* Three Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.about.highlights.map((card, idx) => (
            <div
              key={card.number}
              className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-xs group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                  {card.number}
                </span>
                <div className="p-2 rounded-lg bg-white border border-slate-200/80 shadow-xs">
                  {highlightIcons[idx]}
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
