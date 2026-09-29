import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Milestone, CheckCircle2 } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  return (
    <section id="journey" className="py-16 md:py-20 bg-white border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            My Learning Journey
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Structured progression from foundational computer science to practical AI experimentation.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
        </div>

        {/* Timeline Component: Responsive vertical timeline on desktop, simplified stacked cards on mobile */}
        <div className="relative">
          {/* Vertical Center Track Line on Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-8 -translate-x-1/2 w-0.5 bg-slate-200" />

          <div className="space-y-8 md:space-y-12">
            {PORTFOLIO_DATA.learningJourney.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.stage}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  {/* Left Column (Desktop) */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12 md:text-left'
                    }`}
                  >
                    <div className="bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-all">
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        <span className="text-xs font-mono font-semibold text-blue-600">
                          {item.stage}
                        </span>
                        <span className="text-slate-300">·</span>
                        <span className="text-xs text-slate-500 font-medium">Curriculum Path</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Marker (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-2 border-blue-600 items-center justify-center shadow-xs z-10">
                    <span className="text-[11px] font-bold font-mono text-blue-600">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Empty balancing spacer for alternate side on Desktop */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'order-2' : 'order-1'}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Footer Summary */}
        <div className="mt-12 p-4 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center justify-center gap-2 text-xs text-blue-800">
          <Milestone className="w-4 h-4 text-blue-600" />
          <span className="font-medium">
            Currently advancing through Stage 01 & Stage 02 while building hands-on projects.
          </span>
        </div>

      </div>
    </section>
  );
};
