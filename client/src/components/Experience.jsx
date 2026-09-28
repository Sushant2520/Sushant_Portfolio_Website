import React, { useState } from 'react';
import { Briefcase, Building2, Calendar, CheckCircle2, ChevronRight, Layers, Server, Cloud, Cpu, ArrowUpRight } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const exp = experiences[0];
  const [activeProjectId, setActiveProjectId] = useState(exp.projects[0].id);

  const activeProject = exp.projects.find((p) => p.id === activeProjectId) || exp.projects[0];

  return (
    <section id="experience" className="py-20 relative z-10 bg-slate-950/40 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>EMPLOYMENT & KEY CLIENT PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            1 Year Full-Time at <br className="hidden sm:inline" />
            <a
              href={exp.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent hover:opacity-90 underline decoration-cyan-400"
            >
              Infinyty Tech
            </a>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
             Formerly <span className="text-cyan-300 italic">Infinity Analytics & Consulting</span> • Oct 2025 – Present
          </p>
        </div>

        {/* Experience Header Card */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl mb-12 border-l-4 border-l-cyan-500">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-bold">
                  Full-Time Role
                </span>
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {exp.period}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                {exp.role}
              </h3>
              <p className="text-cyan-300 text-sm font-medium mt-1">
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold underline hover:text-cyan-200 transition-colors"
                >
                  {exp.company}
                </a>{' '}
                <span className="text-slate-400 font-normal">({exp.formerName})</span>
              </p>
            </div>
            <div className="text-slate-300 text-sm max-w-md bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <p className="text-xs text-slate-400 mb-1 font-mono uppercase tracking-wider">Core Responsibilities</p>
              {exp.description}
            </div>
          </div>
        </div>

        {/* Interactive Client Projects Tabs & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Project Tab Buttons */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">
              Select Client Project:
            </h4>
            {exp.projects.map((proj) => {
              const isActive = proj.id === activeProjectId;
              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveProjectId(proj.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 border flex items-center justify-between group ${
                    isActive
                      ? 'bg-gradient-to-r from-slate-900 to-indigo-950/60 border-cyan-500/50 shadow-lg shadow-cyan-500/10 text-white'
                      : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:bg-slate-900/80 hover:text-slate-200'
                  }`}
                >
                  <div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      isActive ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {proj.badge}
                    </span>
                    <h5 className="font-bold text-sm mt-2 line-clamp-1">
                      {proj.title}
                    </h5>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {proj.category}
                    </p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Project Deep Dive */}
          <div className="lg:col-span-8">
            <div className="glass-card p-6 sm:p-8 rounded-2xl relative">
              
              {/* Project Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                    {activeProject.category}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {activeProject.title}
                  </h4>
                </div>
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono font-medium">
                  {activeProject.badge}
                </span>
              </div>

              {/* Technical Highlights List */}
              <div className="space-y-4 mb-8">
                <h5 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">
                  Architecture & Key Accomplishments:
                </h5>
                {activeProject.highlights.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div>
                <h5 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Tech Stack & Infrastructure:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/80 text-cyan-300 text-xs font-mono hover:border-cyan-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
