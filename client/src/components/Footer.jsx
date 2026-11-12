import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Clock, CheckCircle } from 'lucide-react';

export default function Footer({ theme = 'dark' }) {
  const [timeString, setTimeString] = useState('');
  const isLight = theme === 'light';

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`${
      isLight ? 'bg-white border-t border-slate-200' : 'bg-[#050505] border-t border-white/5'
    } py-10 relative z-10 text-xs transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-lime-500/10 border border-lime-500/20 flex items-center justify-center font-bold text-lime-400">
              ST
            </div>
            <div>
              <p className={isLight ? 'text-slate-800 font-semibold' : 'text-slate-300 font-semibold'}>
                Sushant Tripathi • AI Data Analyst & Data Engineer
              </p>
              <p className="text-slate-500 text-[11px] mt-0.5">
                © {new Date().getFullYear()} Sushant Tripathi. All rights reserved.
              </p>
            </div>
          </div>

          {/* Middle: Live Local Time & Opportunities Status */}
          <div className={`flex items-center gap-4 font-mono text-[11px] ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${
              isLight ? 'bg-slate-100 border border-slate-200' : 'bg-zinc-950 border border-zinc-800'
            }`}>
              <Clock className="w-3.5 h-3.5 text-lime-400" />
              <span>{timeString}</span>
            </div>

            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${
              isLight ? 'bg-lime-50 border border-lime-200 text-lime-800' : 'bg-zinc-950 border border-lime-500/30'
            }`}>
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
              <span className={isLight ? 'text-lime-900 font-medium' : 'text-lime-300'}>
                Available for Opportunities
              </span>
            </div>
          </div>

          {/* Right: Back to Top */}
          <button
            onClick={scrollToTop}
            className={`p-2.5 rounded-xl transition-all flex items-center gap-2 group ${
              isLight
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-lime-600 border border-slate-200'
                : 'bg-zinc-950 hover:bg-lime-500/20 text-zinc-300 hover:text-lime-300 border border-zinc-800 hover:border-lime-500/40'
            }`}
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </footer>
  );
}
