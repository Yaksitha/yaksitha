import React from 'react';
import {
  FileCode2,
  Code,
  Palette,
  Terminal,
  Layout,
  Sparkles,
  Brain,
  MessageSquareCode,
  Github,
  GitBranch,
  Laptop,
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getSkillIcon = (iconName: string) => {
    const props = { className: 'w-4 h-4 text-blue-600' };
    switch (iconName) {
      case 'FileCode2':
        return <FileCode2 {...props} />;
      case 'Code':
        return <Code {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      case 'Terminal':
        return <Terminal {...props} />;
      case 'Layout':
        return <Layout {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Brain':
        return <Brain {...props} />;
      case 'MessageSquareCode':
        return <MessageSquareCode {...props} />;
      case 'Github':
        return <Github {...props} />;
      case 'GitBranch':
        return <GitBranch {...props} />;
      case 'Laptop':
        return <Laptop {...props} />;
      default:
        return <Code {...props} />;
    }
  };

  const getLevelStyle = (level: SkillItem['level']) => {
    switch (level) {
      case 'Learning':
        return 'text-blue-700 bg-blue-50/80 border-blue-200/70';
      case 'Beginner':
        return 'text-slate-700 bg-slate-100/80 border-slate-200';
      case 'Familiar':
        return 'text-emerald-700 bg-emerald-50/80 border-emerald-200/70';
    }
  };

  return (
    <section id="skills" className="py-16 md:py-20 bg-slate-50/60 border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Capabilities & Focus
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Technical Skills
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Current competencies and active learning areas as a 1st-semester engineering student.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-slate-900">{cat.title}</h3>
                  <span className="text-xs text-slate-400 font-mono">
                    {cat.skills.length} {cat.skills.length === 1 ? 'skill' : 'skills'}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills List */}
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-50/70 border border-slate-100 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-md bg-white border border-slate-200 shadow-2xs">
                          {getSkillIcon(skill.iconName)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-800 leading-tight">
                            {skill.name}
                          </p>
                          {skill.notes && (
                            <p className="text-xs text-slate-500 mt-0.5">{skill.notes}</p>
                          )}
                        </div>
                      </div>

                      {/* Level Tag: Unboxed or subtle clean badge (no fake percentages) */}
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-md border font-medium whitespace-nowrap ${getLevelStyle(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Continuously updated</span>
                <span className="inline-flex items-center gap-1 text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Active practice
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
