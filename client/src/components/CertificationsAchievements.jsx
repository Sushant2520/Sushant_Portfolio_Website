import React from 'react';
import { GraduationCap, Award, BookOpen, Trophy, CheckCircle, Sparkles, FileText } from 'lucide-react';
import { education, certifications, achievements } from '../data/portfolioData';

export default function CertificationsAchievements() {
  return (
    <section id="achievements" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/25 text-lime-400 text-xs font-mono font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMICS & RECOGNITIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education, Certifications & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400 bg-clip-text text-transparent">
              Research Publications
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Education & Publications (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Education Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border-l-4 border-l-lime-400 relative">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-mono text-lime-400 font-bold uppercase tracking-wider">
                    Higher Education
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {education.institution}
                  </h3>
                  <p className="text-lime-300 font-medium text-sm mt-0.5">
                    {education.degree}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/25 text-lime-300 font-mono text-xs font-bold">
                    CGPA: {education.cgpa}
                  </span>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    {education.period}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mt-4 pt-4 border-t border-zinc-800">
                {education.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-300 text-xs">
                    <CheckCircle className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Publication Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border-l-4 border-l-emerald-400 relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    Co-Authored Research Paper
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    The Role of Large Language Models (LLMs) in Healthcare
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Examined how Large Language Models (LLMs) transform diagnostic accuracy, clinical decision support systems, and unstructured medical report analysis to improve patient outcome metrics.
              </p>

              <div className="inline-flex items-center gap-2 text-xs font-mono text-lime-300 bg-lime-950/40 px-3 py-1.5 rounded-lg border border-lime-800/40">
                <Sparkles className="w-3.5 h-3.5 text-lime-400" />
                <span>GenAI Healthcare Domain Research</span>
              </div>
            </div>

          </div>

          {/* Right Column: Certifications & DSA Achievements (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Certifications Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
                <Award className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-bold text-white">
                  Industry Certifications
                </h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between group hover:border-lime-500/30 transition-all"
                  >
                    <div>
                      <h4 className="font-bold text-sm text-white group-hover:text-lime-300 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5 font-mono">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-lime-300 border border-zinc-700">
                      {cert.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* DSA Achievement Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-7 h-7 text-amber-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">
                    250+ DSA Solved
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    GeeksforGeeks & LeetCode
                  </p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Demonstrated strong problem-solving skills across Data Structures & Algorithms, including trees, graphs, dynamic programming, and SQL query optimizations.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
