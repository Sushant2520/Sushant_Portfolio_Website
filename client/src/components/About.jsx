import React from 'react';
import { Database, BarChart3, Cpu, ShieldCheck, Zap, Award, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      title: "Business Intelligence & BI Pipelines",
      icon: BarChart3,
      color: "text-lime-400",
      bgColor: "bg-lime-500/10",
      borderColor: "border-lime-500/25",
      desc: "AWS S3 ETL workflows, Power BI dashboard design, DAX formula calculations, interactive KPI monitoring, reducing report latency from 2 days to same-day delivery."
    },
    {
      title: "Data Engineering & Architecture",
      icon: Database,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/25",
      desc: "Multi-tier relational PostgreSQL schema design, FastAPI REST API integrations, Rapido webhooks, UPSERT workflows, and GCP Cloud Run deployments."
    },
    {
      title: "Data & Business Automation Pipelines",
      icon: Cpu,
      color: "text-lime-300",
      bgColor: "bg-lime-500/10",
      borderColor: "border-lime-500/25",
      desc: "Automated candidate assessment pipelines using LLMs for structured MCQ and subjective evaluation generation, Google Workspace API integrations, and SMTP automation."
    }
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/25 text-lime-400 text-xs font-mono font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & CORE IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI Data & Business Analyst Driven by <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400 bg-clip-text text-transparent">
              Measurable Business Impact
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            With 1 year of full-time experience at{' '}
            <a
              href={personalInfo.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-lime-400 font-bold text-lime-400 hover:text-lime-300 transition-colors"
            >
              Infinyty Tech
            </a>{' '}
            (formerly Infinity Analytics & Consulting), I bridge the gap between raw multi-tier data structures, automated ETL pipelines, interactive Power BI dashboards, and AI automation.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl text-center flex flex-col justify-between group hover:border-lime-500/40 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-lime-400 transition-colors">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-semibold text-slate-300">
                {stat.label}
              </div>
              <div className="mt-3 inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-900 text-lime-400 border border-zinc-800">
                {stat.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* 3 Core Expertise Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${pillar.bgColor} ${pillar.borderColor} border flex items-center justify-center mb-6`}>
                  <Icon className={`w-6 h-6 ${pillar.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
