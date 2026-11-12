import React, { useState, useEffect } from 'react';
import { Download, Bot, Menu, X, Sparkles, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenAIChat, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education & Honors', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200 py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-lime-400 text-black font-black text-lg shadow-lg shadow-lime-500/25 flex items-center justify-center group-hover:scale-105 transition-transform">
              ST
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-lime-400 transition-colors">
                Sushant Tripathi
              </span>
              <span className="hidden sm:block text-xs font-mono text-lime-400/90">
                AI Data & Business Analyst
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-lime-400 hover:bg-white/5 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Day / Night Theme Toggle Switcher */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all duration-300 flex items-center justify-center hover:scale-110 shadow-sm ${
                theme === 'dark'
                  ? 'bg-zinc-900 border-zinc-800 text-amber-400 hover:border-amber-400/50 hover:bg-zinc-800'
                  : 'bg-amber-100/80 border-amber-300 text-amber-600 hover:bg-amber-200'
              }`}
              title={theme === 'dark' ? 'Switch to Light/Day Mode' : 'Switch to Dark/Night Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Ask AI Widget Button */}
            <button
              onClick={onOpenAIChat}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-white/5 text-lime-300 border border-lime-500/30 hover:border-lime-400 hover:bg-lime-500/10 hover:scale-105 transition-all shadow-sm"
              title="Open Sushant AI Chatbot"
            >
              <Sparkles className="w-3.5 h-3.5 text-lime-400 animate-pulse" />
              <span>Ask AI</span>
            </button>

            {/* Resume Download CTA */}
            <a
              href={personalInfo.cvPath}
              download="Sushant_Tripathi_Resume_Oct.pdf"
              className="flex items-center gap-2 px-4 py-2 text-xs font-extrabold rounded-full bg-lime-400 text-black shadow-lg shadow-lime-500/25 hover:bg-lime-300 hover:shadow-lime-500/40 hover:scale-105 active:scale-95 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Theme Switcher */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border transition-all ${
                theme === 'dark'
                  ? 'bg-zinc-900 border-zinc-800 text-amber-400'
                  : 'bg-amber-100 border-amber-300 text-amber-600'
              }`}
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenAIChat}
              className="p-2 rounded-lg bg-lime-500/10 text-lime-400 border border-lime-500/30"
            >
              <Bot className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 px-4 pt-4 pb-6 mt-3 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-lime-400 hover:bg-zinc-900 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
            <a
              href={personalInfo.cvPath}
              download="Sushant_Tripathi_Resume_Oct.pdf"
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-extrabold rounded-lg bg-lime-400 text-black hover:bg-lime-300"
            >
              <Download className="w-4 h-4" />
              Download Resume CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
