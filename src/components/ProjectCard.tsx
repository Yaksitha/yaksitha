import React from 'react';
import { Github, ArrowUpRight, Code2 } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectCardProps {
  project: ProjectItem;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 group">
      <div>
        {/* Top bar: Category and GitHub link */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-semibold text-blue-600 tracking-wide">
            {project.category}
          </span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-slate-400 hover:text-slate-900 transition-colors"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

        {/* Project Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technology tags: Zero-pill discipline (clean unboxed text with separators) */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 mb-6">
          <Code2 className="w-3.5 h-3.5 text-slate-400 mr-0.5" />
          {project.technologies.map((tech, index) => (
            <React.Fragment key={tech}>
              <span className="font-medium text-slate-700">{tech}</span>
              {index < project.technologies.length - 1 && (
                <span className="text-slate-300 select-none">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Card Footer: View Project Button */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelectProject(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 py-1 transition-colors cursor-pointer group/btn"
        >
          <span>View Project</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </button>

        <span className="text-[11px] text-slate-400 font-mono">
          Interactive demo available
        </span>
      </div>
    </div>
  );
};
