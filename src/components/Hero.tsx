import React, { useState } from 'react';
import { ArrowRight, Github, Linkedin, Terminal, Sparkles, Code2, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import developerHeroImg from '../assets/images/developer_hero_graphic_1790680182560.jpg';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'code' | 'illustration'>('illustration');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Subtle Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>{PORTFOLIO_DATA.personal.badge}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                {PORTFOLIO_DATA.personal.headline}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-blue-600">
                {PORTFOLIO_DATA.personal.subheading}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              {PORTFOLIO_DATA.personal.heroIntro}
            </p>

            {/* Two CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors cursor-pointer"
              >
                <span>Connect With Me</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center gap-4 text-xs font-medium text-slate-500">
              <span className="text-slate-400">Profiles:</span>
              <a
                href={PORTFOLIO_DATA.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span className="hover:underline">LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <span className="text-slate-300">/</span>
              <a
                href={PORTFOLIO_DATA.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-blue-600 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4 text-slate-900" />
                <span className="hover:underline">GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Developer Visual */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 text-slate-300 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2">student_journey.py</span>
                </div>

                {/* View Switcher: Illustration vs Code */}
                <div className="flex items-center gap-1 bg-slate-800 p-0.5 rounded-md text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab('illustration')}
                    className={`px-2 py-1 rounded transition-colors flex items-center gap-1 ${
                      activeTab === 'illustration'
                        ? 'bg-blue-600 text-white font-medium'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Visual</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('code')}
                    className={`px-2 py-1 rounded transition-colors flex items-center gap-1 ${
                      activeTab === 'code'
                        ? 'bg-blue-600 text-white font-medium'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Terminal className="w-3 h-3" />
                    <span>Code</span>
                  </button>
                </div>
              </div>

              {/* Window Content */}
              {activeTab === 'illustration' ? (
                <div className="p-4 sm:p-5 flex flex-col items-center justify-center bg-slate-50/50">
                  <div className="relative w-full aspect-square max-w-[320px] rounded-xl overflow-hidden border border-slate-200/80 shadow-xs bg-white">
                    <img
                      src={developerHeroImg}
                      alt="Aspiring AI Engineer Student Developer Graphic"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <p className="text-xs font-semibold text-slate-800">
                      B.Tech 1st Semester · AI & Programming Foundations
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Python · Algorithmic Logic · Generative AI Exploration
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-slate-950 font-mono text-xs text-slate-200 leading-relaxed overflow-x-auto min-h-[340px]">
                  <div className="text-slate-500 mb-2"># Student profile definition</div>
                  <div className="text-blue-400">class <span className="text-yellow-300">FresherPortfolio</span>:</div>
                  <div className="pl-4">
                    <span className="text-blue-400">def</span> <span className="text-yellow-200">__init__</span>(self):
                  </div>
                  <div className="pl-8 text-slate-300">
                    self.name = <span className="text-emerald-300">"Yaksitha Parimi"</span>
                  </div>
                  <div className="pl-8 text-slate-300">
                    self.role = <span className="text-emerald-300">"Aspiring AI Engineer"</span>
                  </div>
                  <div className="pl-8 text-slate-300">
                    self.semester = <span className="text-purple-300">1</span>
                  </div>
                  <div className="pl-8 text-slate-300">
                    self.focus = [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"GenAI"</span>, <span className="text-emerald-300">"Web"</span>]
                  </div>
                  <div className="pl-4 mt-2">
                    <span className="text-blue-400">def</span> <span className="text-yellow-200">daily_learning</span>(self):
                  </div>
                  <div className="pl-8 text-slate-300">
                    <span className="text-purple-400">return</span> <span className="text-emerald-300">"Build logic, solve problems, innovate."</span>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-slate-400 flex items-center justify-between">
                    <span className="text-[11px] text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
                      Active Python Environment
                    </span>
                    <span className="text-[11px] text-slate-500">v3.12</span>
                  </div>
                </div>
              )}

              {/* Bottom Micro Bar */}
              <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Hands-on Practice & Problem Solving</span>
                </span>
                <span className="font-mono text-[11px] text-slate-400">Python 3.x</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
