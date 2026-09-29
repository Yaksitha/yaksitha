import React, { useState } from 'react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Github, FolderGit2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-16 md:py-20 bg-white border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
              Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
              Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2">
              Small projects that reflect my journey in programming and problem solving.
            </p>
            <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
          </div>

          <a
            href={PORTFOLIO_DATA.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors shrink-0"
          >
            <Github className="w-4 h-4 text-slate-900" />
            <span>Browse GitHub Repositories</span>
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Recruiter & Student Note */}
        <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <FolderGit2 className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              All projects are coded in Python with clean functions and modular logic. Click <strong>View Project</strong> to test the logic directly in your browser.
            </span>
          </div>
          <span className="text-slate-400 whitespace-nowrap">Updated regularly</span>
        </div>

        {/* Interactive Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
