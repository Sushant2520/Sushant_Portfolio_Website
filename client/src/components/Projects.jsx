import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Sparkles, CheckCircle2, Target, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

const categoryThemes = {
  'Data Analytics': {
    badge: 'bg-lime-500/15 text-lime-300 border-lime-500/30',
    pill: 'bg-zinc-900 text-lime-300 border-zinc-800',
    topBar: 'bg-lime-400 shadow-[0_0_12px_#a3e635]',
    textAccent: 'text-lime-400',
    hoverBorder: 'hover:border-lime-500/50',
    btnColor: 'text-lime-400 hover:text-lime-300'
  },
  'Business Intelligence': {
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    pill: 'bg-zinc-900 text-emerald-300 border-zinc-800',
    topBar: 'bg-emerald-400 shadow-[0_0_12px_#10b981]',
    textAccent: 'text-emerald-400',
    hoverBorder: 'hover:border-emerald-500/50',
    btnColor: 'text-emerald-400 hover:text-emerald-300'
  }
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/25 text-lime-400 text-xs font-mono font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED PROJECTS & ANALYTICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Data Engineering, BI & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400 bg-clip-text text-transparent">
              Analytics Case Studies
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            Detailed breakdown of analytics models, business intelligence dashboards, and data-driven solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold font-mono transition-all border ${
                activeCategory === cat
                  ? 'bg-lime-400 text-black border-lime-400 font-extrabold shadow-lg shadow-lime-500/25'
                  : 'bg-zinc-950/80 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const theme = categoryThemes[project.category] || categoryThemes['Data Analytics'];

            return (
              <div
                key={project.id}
                className={`glass-card rounded-2xl flex flex-col justify-between group transition-all duration-300 relative overflow-hidden border border-slate-800 hover:-translate-y-1 hover:shadow-xl ${theme.hoverBorder}`}
              >
                {/* Glowing Top Accent Bar */}
                <div className={`h-1 w-full ${theme.topBar} opacity-80 group-hover:opacity-100 transition-opacity`} />

                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Category & GitHub Icon */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md border ${theme.badge}`}>
                        {project.category}
                      </span>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors mb-2 leading-snug min-h-[56px] flex items-center">
                      {project.title}
                    </h3>
                    <p className={`text-xs font-mono mb-4 min-h-[32px] flex items-center ${theme.textAccent}`}>
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 min-h-[80px]">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mb-6 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold mb-2">
                        Key Highlights:
                      </span>
                      <div className="flex flex-col gap-1.5">
                        {project.metrics.map((m, i) => (
                          <div key={i} className={`text-[11px] font-mono px-2.5 py-1 rounded border flex items-center gap-1.5 ${theme.pill}`}>
                            <span>⚡</span>
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Tech Stack Pills & Modal Trigger */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-5 min-h-[58px] items-center">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono text-slate-300 bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-extrabold font-mono flex items-center justify-center gap-2 transition-all border bg-lime-500/10 border-lime-500/30 text-lime-300 hover:bg-lime-400 hover:text-black hover:shadow-lg hover:shadow-lime-500/25"
                    >
                      <span>View Project Details</span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Enhanced Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#0c0e0c] border border-white/10 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold p-2"
              aria-label="Close Modal"
            >
              ✕
            </button>

            {/* Modal Category Badge */}
            <div className="mb-2">
              <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md border ${categoryThemes[selectedProject.category]?.badge || 'text-lime-400'}`}>
                {selectedProject.category}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mt-1 mb-1">
              {selectedProject.title}
            </h3>
            <p className="text-xs font-mono text-lime-400 mb-5">
              {selectedProject.subtitle}
            </p>

            {/* Detailed Breakdown */}
            {selectedProject.details ? (
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-black/60 border border-zinc-800">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Target className="w-4 h-4 text-lime-400" />
                    <h5 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                      Problem Statement & Scope
                    </h5>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {selectedProject.details.overview}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-zinc-800">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Layers className="w-4 h-4 text-lime-400" />
                    <h5 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                      Methodology & Data Modeling
                    </h5>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {selectedProject.details.methodology}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-zinc-800">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <h5 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                      Key Outcomes & Analytics Delivery
                    </h5>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {selectedProject.details.keyOutcome}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {selectedProject.description}
              </p>
            )}

            {/* Tech Stack Used */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                Tech Stack Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-zinc-900 text-zinc-300 text-xs font-mono border border-zinc-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t border-zinc-800">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xs flex items-center gap-2 transition-all shadow-lg shadow-lime-500/25"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Visit GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
