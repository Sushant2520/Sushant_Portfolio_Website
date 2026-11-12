import React, { useState, useEffect } from 'react';
import { ArrowRight, Bot, Mail, MessageSquare, Download, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenAIChat, theme = 'dark' }) {
  const roles = [
    'AI Data Analyst',
    'Business Analyst',
    'AI Integration & Automation Pipelines'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Ambient Gradient Glow Orbs */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none transition-colors duration-500 ${
        theme === 'dark' ? 'bg-lime-500/10' : 'bg-blue-400/20'
      }`} />
      <div className={`absolute top-1/3 right-10 w-[380px] h-[380px] rounded-full blur-[120px] pointer-events-none transition-colors duration-500 ${
        theme === 'dark' ? 'bg-lime-400/10' : 'bg-purple-300/25'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Availability Status Badge */}
          <div className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold mb-8 shadow-lg backdrop-blur-md transition-all ${
            theme === 'dark'
              ? 'bg-black/70 border border-lime-500/30 text-lime-300 shadow-lime-500/10'
              : 'bg-white/95 border border-indigo-200 text-indigo-900 shadow-slate-300/40'
          }`}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-500"></span>
            </span>
            <span>
              <a
                href={personalInfo.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="font-bold underline hover:text-lime-200 transition-colors"
              >
                Infinyty Tech
              </a>{' '}
              AI Data & Business Analyst • Open for Roles & Projects
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
            Empowering Business Decisions with <br />
            <span className="bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400 bg-clip-text text-transparent">
              Data Analytics & AI
            </span>
          </h1>

          {/* Role Typing Animation */}
          <div className="h-10 mb-6 flex items-center justify-center">
            <span className={`text-xl sm:text-2xl md:text-3xl font-mono font-semibold ${
              theme === 'dark' ? 'text-lime-400' : 'text-blue-700 font-bold'
            }`}>
              {displayText}
              <span className="animate-pulse text-lime-400">|</span>
            </span>
          </div>

          {/* Bio Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto font-normal leading-relaxed">
            Results-driven AI Data & Business Analyst at{' '}
            <a
              href={personalInfo.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-lime-400 font-bold text-lime-400 hover:text-lime-300 transition-colors"
            >
              Infinyty Tech
            </a>{' '}
            <span className="text-slate-300 opacity-90 font-normal">(formerly Infinity Analytics & Consulting)</span>. Proven track record of building executive Power BI dashboards with DAX metrics, reducing report delivery time from 2 days to same-day delivery, engineering automated AWS S3 ETL pipelines, and automating 80% of candidate evaluation workflows using LLMs, Google Workspace APIs, and Python.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-full bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-sm shadow-xl shadow-lime-500/25 hover:shadow-lime-500/40 hover:scale-105 transition-all flex items-center gap-2 group"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenAIChat}
              className={`px-6 py-3.5 rounded-full font-bold text-sm hover:scale-105 transition-all flex items-center gap-2 shadow-lg ${
                theme === 'dark'
                  ? 'bg-zinc-950/90 border border-lime-500/30 text-lime-300 hover:text-white hover:bg-lime-500/10 hover:border-lime-400'
                  : 'bg-white border border-indigo-300 text-indigo-700 hover:bg-indigo-50 shadow-slate-200'
              }`}
            >
              <Sparkles className="w-4 h-4 text-lime-400 animate-spin" style={{ animationDuration: '3s' }} />
              <span>Ask Sushant AI Assistant</span>
            </button>

            <a
              href={personalInfo.cvPath}
              download="Sushant_Tripathi_Resume_Oct.pdf"
              className={`px-6 py-3.5 rounded-full font-semibold text-sm hover:scale-105 transition-all flex items-center gap-2 ${
                theme === 'dark'
                  ? 'bg-zinc-900/80 border border-zinc-800 hover:border-lime-500/40 text-zinc-200 hover:text-white'
                  : 'bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 shadow-sm'
              }`}
            >
              <Download className="w-4 h-4 text-lime-400" />
              <span>Get Resume (PDF)</span>
            </a>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center justify-center gap-6 pt-4 border-t border-zinc-800/80 max-w-md mx-auto">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-lime-400 transition-colors p-2 rounded-lg hover:bg-zinc-900 flex items-center gap-1.5 text-xs font-mono"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-lime-400 transition-colors p-2 rounded-lg hover:bg-zinc-900 flex items-center gap-1.5 text-xs font-mono"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`https://wa.me/${personalInfo.whatsapp}?text=Hi%20Sushant,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!`}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-lime-400 transition-colors p-2 rounded-lg hover:bg-zinc-900 flex items-center gap-1.5 text-xs font-mono"
            >
              <MessageSquare className="w-4 h-4 text-lime-400" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="text-zinc-400 hover:text-lime-400 transition-colors p-2 rounded-lg hover:bg-zinc-900 flex items-center gap-1.5 text-xs font-mono"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
