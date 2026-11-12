import React, { useState } from 'react';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { experiences } from '../data/portfolioData';

// Domain Category Color Maps
const themeStyles = {
  cyan: {
    badge: 'bg-lime-500/15 text-lime-300 border-lime-500/30',
    cardActive: 'bg-zinc-950/95 border-lime-400 shadow-lg shadow-lime-500/15 ring-1 ring-lime-400/30',
    leftBar: 'bg-lime-400 shadow-[0_0_12px_#a3e635]',
    metricPill: 'bg-lime-500/10 text-lime-300 border-lime-500/25',
    categoryText: 'text-lime-400',
    iconColor: 'text-lime-400'
  },
  purple: {
    badge: 'bg-zinc-800 text-zinc-200 border-zinc-700',
    cardActive: 'bg-zinc-950/95 border-lime-400 shadow-lg shadow-lime-500/15 ring-1 ring-lime-400/30',
    leftBar: 'bg-lime-400 shadow-[0_0_12px_#a3e635]',
    metricPill: 'bg-zinc-900 text-zinc-200 border-zinc-800',
    categoryText: 'text-lime-300',
    iconColor: 'text-lime-400'
  },
  amber: {
    badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    cardActive: 'bg-zinc-950/95 border-amber-400 shadow-lg shadow-amber-500/15 ring-1 ring-amber-400/30',
    leftBar: 'bg-amber-400 shadow-[0_0_12px_#f59e0b]',
    metricPill: 'bg-amber-500/10 text-amber-300 border-amber-500/25',
    categoryText: 'text-amber-400',
    iconColor: 'text-amber-400'
  },
  emerald: {
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    cardActive: 'bg-zinc-950/95 border-emerald-400 shadow-lg shadow-emerald-500/15 ring-1 ring-emerald-400/30',
    leftBar: 'bg-emerald-400 shadow-[0_0_12px_#10b981]',
    metricPill: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25',
    categoryText: 'text-emerald-400',
    iconColor: 'text-emerald-400'
  }
};

export default function Experience() {
  const exp = experiences[0];
  const [activeProjectId, setActiveProjectId] = useState(exp.projects[0].id);

  const activeProject = exp.projects.find((p) => p.id === activeProjectId) || exp.projects[0];
  const activeTheme = themeStyles[activeProject.categoryTheme] || themeStyles.cyan;

  return (
    <section id="experience" className="py-20 relative z-10 bg-[#060606] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/25 text-lime-400 text-xs font-mono font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>EMPLOYMENT & KEY CLIENT PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            1 Year Full-Time at <br className="hidden sm:inline" />
            <a
              href={exp.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400 bg-clip-text text-transparent hover:opacity-90 underline decoration-lime-400"
            >
              Infinyty Tech
            </a>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
             Formerly <span className="text-lime-300 italic">Infinity Analytics & Consulting</span> • Oct 2025 – Present
          </p>
        </div>

        {/* Experience Header Card */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl mb-12 border-l-4 border-l-lime-400">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-md bg-lime-500/10 border border-lime-500/25 text-lime-400 font-mono text-xs font-bold">
                  Full-Time Role
                </span>
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-lime-400" />
                  {exp.period}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                {exp.role}
              </h3>
              <p className="text-lime-300 text-sm font-medium mt-1">
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold underline hover:text-lime-200 transition-colors"
                >
                  {exp.company}
                </a>{' '}
                <span className="text-slate-400 font-normal">({exp.formerName})</span>
              </p>
            </div>
            <div className="text-slate-300 text-sm max-w-md bg-zinc-950/80 p-4 rounded-xl border border-zinc-800">
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
              const theme = themeStyles[proj.categoryTheme] || themeStyles.cyan;

              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveProjectId(proj.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 border relative overflow-hidden group flex items-center justify-between ${
                    isActive
                      ? theme.cardActive
                      : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:bg-slate-900/80 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  {/* Glowing Active Indicator Bar */}
                  {isActive && (
                    <span className={`absolute left-0 top-0 bottom-0 w-1 rounded-r ${theme.leftBar}`} />
                  )}

                  <div className="pl-2">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${theme.badge}`}>
                      {proj.badge}
                    </span>
                    <h5 className="font-bold text-sm mt-2 text-white leading-snug">
                      {proj.title}
                    </h5>
                    <p className="text-xs text-slate-400 mt-1 font-mono">
                      {proj.category}
                    </p>
                  </div>

                  <ChevronRight className={`w-5 h-5 shrink-0 ml-2 transition-transform ${
                    isActive ? `${theme.iconColor} translate-x-1` : 'text-slate-600 group-hover:text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Project Deep Dive */}
          <div className="lg:col-span-8">
            <div className="glass-card p-6 sm:p-8 rounded-2xl relative border border-slate-800/80">
              
              {/* Project Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-800">
                <div>
                  <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${activeTheme.categoryText}`}>
                    {activeProject.category}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {activeProject.title}
                  </h4>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${activeTheme.badge}`}>
                  {activeProject.badge}
                </span>
              </div>

              {/* Key Business Impact Metrics Banner */}
              {activeProject.metrics && activeProject.metrics.length > 0 && (
                <div className="mb-8 p-4 rounded-xl bg-slate-900/80 border border-slate-800/90">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className={`w-4 h-4 ${activeTheme.iconColor}`} />
                    <h5 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                      Key Business Impact & Metrics:
                    </h5>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {activeProject.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-lg border text-xs font-medium leading-tight flex items-center ${activeTheme.metricPill}`}
                      >
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Highlights List */}
              <div className="space-y-4 mb-8">
                <h5 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">
                  Architecture & Key Accomplishments:
                </h5>
                {activeProject.highlights.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-lime-500/10 border border-lime-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${activeTheme.iconColor}`} />
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
                      className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono hover:border-lime-500/40 hover:text-lime-300 transition-colors"
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

