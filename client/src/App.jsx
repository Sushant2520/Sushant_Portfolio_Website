import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CertificationsAchievements from './components/CertificationsAchievements';
import AIChatWidget from './components/AIChatWidget';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  
  // Default to Night Mode ('dark') whenever the website opens/loads
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`min-h-screen relative selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors duration-400 ${
      theme === 'dark' ? 'bg-[#0b0f19] text-slate-100' : 'bg-[#f8fafc] text-slate-900'
    }`}>
      {/* Dynamic Theme Particle Grid Background */}
      <ParticleBackground theme={theme} />

      {/* Navigation Header */}
      <Navbar
        onOpenAIChat={() => setIsAIChatOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenAIChat={() => setIsAIChatOpen(true)} theme={theme} />
        <About theme={theme} />
        <Experience theme={theme} />
        <Projects theme={theme} />
        <Skills theme={theme} />
        <CertificationsAchievements theme={theme} />
        <Contact theme={theme} />
      </main>

      {/* Footer */}
      <Footer theme={theme} />

      {/* Ask Sushant AI Assistant Modal */}
      <AIChatWidget
        isOpen={isAIChatOpen}
        onClose={() => setIsAIChatOpen(false)}
        theme={theme}
      />
    </div>
  );
}
