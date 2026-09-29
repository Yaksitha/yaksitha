import React from 'react';
import { GraduationCap, Calendar, BookOpen, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-20 bg-slate-50/60 border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Academic Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Education
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Undergraduate coursework and technical grounding.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
        </div>

        {/* Professional Education Card */}
        <div className="max-w-3xl bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-all">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200/70 text-blue-600">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    {PORTFOLIO_DATA.education.degree}
                  </h3>
                  <span className="text-slate-300">·</span>
                  <span className="text-sm font-semibold text-blue-600">
                    {PORTFOLIO_DATA.education.currentStage}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-700 mt-0.5">
                  {PORTFOLIO_DATA.education.degreeFull}
                </p>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  {PORTFOLIO_DATA.education.institutionPlaceholder}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium self-start">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>{PORTFOLIO_DATA.education.academicPeriod}</span>
            </div>
          </div>

          {/* Description */}
          <div className="pt-4 border-t border-slate-100">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              {PORTFOLIO_DATA.education.description}
            </p>

            {/* Core Coursework & Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/70 flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-slate-700">Problem Solving & Programming with Python</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/70 flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-slate-700">Foundational Mathematics & Discrete Logic</span>
              </div>
            </div>
          </div>

          {/* Note on Transparency */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span>Freshman Status · No unearned credentials or metrics fabricated</span>
            <span className="font-mono">Semester 1</span>
          </div>
        </div>

      </div>
    </section>
  );
};
