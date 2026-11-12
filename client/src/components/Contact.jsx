import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, AlertCircle, Sparkles, MapPin, Loader2, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    roleInterest: 'AI Data Analyst',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: '', showMailtoFallback: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openMailtoFallback = () => {
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry - ${formData.roleInterest}] ${formData.subject || 'New Message from ' + (formData.name || 'Visitor')}`
    )}&body=${encodeURIComponent(
      `Hi Sushant,\n\nName: ${formData.name}\nEmail: ${formData.email}\nRole Interest: ${formData.roleInterest}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '', showMailtoFallback: false });

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || personalInfo.web3formsAccessKey;

    // If access key is not yet provided, gracefully fallback to prefilled mailto
    if (!accessKey) {
      openMailtoFallback();
      setStatus({
        loading: false,
        success: true,
        error: '',
        showMailtoFallback: false
      });
      setFormData({ name: '', email: '', subject: '', roleInterest: 'AI Data Analyst', message: '' });
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio Inquiry - ${formData.roleInterest}] ${formData.subject || 'New Message from ' + formData.name}`,
          from_name: `${formData.name} (via Sushant Portfolio)`,
          role_interest: formData.roleInterest,
          message: formData.message,
          botcheck: false
        })
      });

      const data = await res.json();
      if (data.success) {
        setStatus({ loading: false, success: true, error: '', showMailtoFallback: false });
        setFormData({ name: '', email: '', subject: '', roleInterest: 'AI Data Analyst', message: '' });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: data.message || 'Web3Forms service error.',
          showMailtoFallback: true
        });
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus({
        loading: false,
        success: false,
        error: 'Unable to reach the form service. You can send your message directly via email.',
        showMailtoFallback: true
      });
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10 bg-[#060606] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/25 text-lime-400 text-xs font-mono font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT & COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch With <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400 bg-clip-text text-transparent">
              Sushant Tripathi
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            Open for full-time AI Data Analyst, Business Analyst & Data Engineering roles, client consultancies, or project collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Communication Hub (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Quick Launcher Card */}
            <div className="glass-card p-6 rounded-2xl border-l-4 border-l-lime-400 relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-lime-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">
                    Instant WhatsApp Connect
                  </h3>
                  <p className="text-xs text-slate-400">
                    Direct chat with pre-filled inquiry
                  </p>
                </div>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Need a quick response? Connect with me directly on WhatsApp for real-time discussions.
              </p>
              <a
                href={`https://wa.me/${personalInfo.whatsapp}?text=Hi%20Sushant,%20I%20would%20like%20to%20discuss%20an%20opportunity%20or%20project!`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg shadow-lime-500/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Launch WhatsApp Chat</span>
              </a>
            </div>

            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass-card p-5 rounded-2xl flex items-center gap-4 group hover:border-lime-500/40 transition-all block"
            >
              <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-lime-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  Direct Email Address
                </p>
                <p className="text-sm font-bold text-white group-hover:text-lime-300 transition-colors">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            {/* Mobile Call Card */}
            <a
              href={`tel:${personalInfo.phone}`}
              className="glass-card p-5 rounded-2xl flex items-center gap-4 group hover:border-lime-500/40 transition-all block"
            >
              <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-lime-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  Phone & Mobile
                </p>
                <p className="text-sm font-bold text-white group-hover:text-lime-300 transition-colors">
                  {personalInfo.phone}
                </p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass-card p-5 rounded-2xl flex items-center gap-4 group hover:border-lime-500/40 transition-all block"
            >
              <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-lime-400 shrink-0">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  LinkedIn Network
                </p>
                <p className="text-sm font-bold text-white group-hover:text-lime-300 transition-colors">
                  linkedin.com/in/sushant2520
                </p>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="glass-card p-5 rounded-2xl flex items-center gap-4 group hover:border-lime-500/40 transition-all block"
            >
              <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-lime-400 shrink-0">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  GitHub Code Repositories
                </p>
                <p className="text-sm font-bold text-white group-hover:text-lime-300 transition-colors">
                  github.com/Sushant2520
                </p>
              </div>
            </a>

          </div>

          {/* Right Column: Functional Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl relative">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Inquiry
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-6">
                Fill out the form below and your message will be dispatched directly to Sushant.
              </p>

              {status.success && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-3 text-xs sm:text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. Sushant will reach out to you shortly.</span>
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    <span>{status.error}</span>
                  </div>
                  {status.showMailtoFallback && (
                    <button
                      type="button"
                      onClick={openMailtoFallback}
                      className="w-full py-2 px-3 rounded-lg bg-lime-500/20 border border-lime-500/40 text-lime-200 text-xs font-mono font-bold flex items-center justify-center gap-1.5 hover:bg-lime-500/30 transition-all mt-2"
                    >
                      <span>Open Pre-filled Email in your Mail App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Hidden Honeypot for Anti-Spam */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-lime-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-lime-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Job Opportunity / Project Inquiry"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-lime-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Role Interest
                    </label>
                    <select
                      name="roleInterest"
                      value={formData.roleInterest}
                      onChange={handleChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-lime-400"
                    >
                      <option value="AI Data Analyst">AI Data Analyst Role</option>
                      <option value="Business Analyst">Business Analyst Role</option>
                      <option value="Data Engineer">Data Engineer Role</option>
                      <option value="Consultancy / Project">Consultancy / Freelance</option>
                      <option value="General Connect">General Networking</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your project, job description, or inquiry..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-lime-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full py-3.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 transition-all shadow-xl shadow-lime-500/25 disabled:opacity-50"
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Dispatching Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message To Sushant</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] font-mono text-center text-slate-400 mt-2">
                  🔒 Inquiries are delivered directly to <span className="text-lime-300">sushant.tripathi2000.st@gmail.com</span>
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
