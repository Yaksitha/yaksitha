import React from 'react';
import { Lightbulb, Trophy, Users, PlusCircle, CheckCircle, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hackathons: React.FC = () => {
  return (
    <section id="hackathons" className="py-16 md:py-20 bg-slate-50/60 border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Collaboration & Problem Solving
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            {PORTFOLIO_DATA.hackathons.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            {PORTFOLIO_DATA.hackathons.statement}
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
        </div>

        {/* 2 Core Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          
          {/* Card 1: Hackathons */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200/60">
                <Trophy className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Hackathons</h3>
                <span className="text-xs text-blue-600 font-medium">Hands-on Prototyping & Collaboration</span>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {PORTFOLIO_DATA.hackathons.cards[0].description}
            </p>
            <div className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>Rapid idea-to-code prototype execution</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-blue-600" />
                <span>Cross-functional teamwork and peer learning</span>
              </div>
            </div>
          </div>

          {/* Card 2: Ideathons */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200/60">
                <Lightbulb className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Ideathons</h3>
                <span className="text-xs text-blue-600 font-medium">Problem Discovery & Solution Design</span>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {PORTFOLIO_DATA.hackathons.cards[1].description}
            </p>
            <div className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>Identifying unaddressed real-world problem statements</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Structuring technology-driven feasibility proposals</span>
              </div>
            </div>
          </div>

        </div>

        {/* Clean, Non-Fabricated Activity Log Placeholder */}
        <div className="bg-white rounded-xl border border-dashed border-slate-300 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Event Participation Tracker
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Active tracking area reserved for logging upcoming collegiate and inter-college hackathons and ideathons.
              </p>
            </div>
            <span className="text-xs font-medium px-2.5 py-1 rounded bg-slate-100 text-slate-600 border border-slate-200/80">
              Freshman Year Log
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {PORTFOLIO_DATA.hackathons.eventPlaceholders.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-slate-50 border border-slate-200/70 text-xs space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-800">{item.title}</span>
                  <span className="text-[11px] text-blue-600 font-medium">{item.tag}</span>
                </div>
                <p className="text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <PlusCircle className="w-3.5 h-3.5 text-slate-400" />
              <span>Ready for event log entries as new rounds conclude</span>
            </span>
            <span>Zero fabricated credentials</span>
          </div>
        </div>

      </div>
    </section>
  );
};
