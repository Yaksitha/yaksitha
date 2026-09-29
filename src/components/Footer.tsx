import React from 'react';
import { Linkedin, Github, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <span className="text-lg font-bold text-white tracking-tight">
              {PORTFOLIO_DATA.footer.name}
            </span>
            <p className="text-sm text-slate-400 mt-0.5">
              {PORTFOLIO_DATA.footer.role}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PORTFOLIO_DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={PORTFOLIO_DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4 text-white" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>{PORTFOLIO_DATA.footer.copyright}</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
