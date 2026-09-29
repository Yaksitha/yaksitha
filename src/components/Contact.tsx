import React, { useState } from 'react';
import { Linkedin, Github, Mail, Send, Check, Copy, ExternalLink, AlertCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Please provide your name.';
    }
    if (!email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!message.trim()) {
      newErrors.message = 'Please include a brief message.';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Honest handling: No backend mock pretending to deliver silently.
    // We provide a direct mailto launcher option and show clear, transparent status.
    setStatus('success');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoHref = `mailto:${PORTFOLIO_DATA.personal.email}?subject=Connecting with Yaksitha Parimi (via Portfolio)&body=${encodeURIComponent(
    `Hi Yaksitha,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  )}`;

  return (
    <section id="contact" className="py-16 md:py-20 bg-white border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Inquiries & Opportunities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            {PORTFOLIO_DATA.contact.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            {PORTFOLIO_DATA.contact.intro}
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Direct Channels
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Connect via LinkedIn or inspect ongoing code updates on GitHub.
                </p>
              </div>

              {/* LinkedIn Button */}
              <a
                href={PORTFOLIO_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 bg-white hover:bg-slate-100/80 rounded-lg border border-slate-200 text-slate-800 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-[#0A66C2]/10 text-[#0A66C2]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold group-hover:text-blue-600 transition-colors">
                      LinkedIn
                    </p>
                    <p className="text-xs text-slate-500 font-mono">
                      /in/parimi-yaksitha-335b06431
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
              </a>

              {/* GitHub Button */}
              <a
                href={PORTFOLIO_DATA.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 bg-white hover:bg-slate-100/80 rounded-lg border border-slate-200 text-slate-800 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-slate-900/10 text-slate-900">
                    <Github className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold group-hover:text-blue-600 transition-colors">
                      GitHub
                    </p>
                    <p className="text-xs text-slate-500 font-mono">
                      github.com/Yaksitha/Python.main
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
              </a>

              {/* Email Copy Card */}
              <div className="pt-4 border-t border-slate-200/80">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">Contact Email:</span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs font-mono text-slate-700 mt-1 break-all">
                  {PORTFOLIO_DATA.personal.email}
                </p>
              </div>
            </div>

            {/* Note on Student Availability */}
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-blue-900 space-y-1">
              <p className="font-semibold">Collaborative Spirit</p>
              <p className="text-blue-800/80 leading-relaxed">
                Open to participating in college hackathons, technical student clubs, study groups, and beginner internship discussions.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900">Send a Message</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out the form below to initiate contact directly.
                </p>
              </div>

              {status === 'success' ? (
                <div className="bg-white rounded-xl p-6 border border-emerald-200 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Message Prepared!
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{name}</strong>. The form is UI-ready for full email integration. You can send this message right now through your email app:
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Mail Client</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus('idle');
                        setName('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition-colors cursor-pointer"
                    >
                      Write Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="e.g. Alex Smith"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg focus:outline-hidden transition-all ${
                        errors.name
                          ? 'border-rose-300 focus:ring-2 focus:ring-rose-500/20'
                          : 'border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg focus:outline-hidden transition-all ${
                        errors.email
                          ? 'border-rose-300 focus:ring-2 focus:ring-rose-500/20'
                          : 'border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      placeholder="Hi Yaksitha, I came across your portfolio and would like to connect regarding..."
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg focus:outline-hidden transition-all ${
                        errors.message
                          ? 'border-rose-300 focus:ring-2 focus:ring-rose-500/20'
                          : 'border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs hover:shadow-md transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 pt-1">
                    Form input is verified client-side. No spam or unmonitored endpoints.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
