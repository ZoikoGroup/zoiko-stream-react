'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function A11yBriefForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    eventType: '',
    timeframe: '',
    accessModel: 'Credentialed (SAML SSO)',
    captionsNeeds: '',
    context: ''
  });

  const [reqs, setReqs] = useState({
    keyboard: true,
    screenReader: false,
    signLanguage: false,
    tactile: false,
    altText: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section 
      id="a11y-brief-form"
      className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white border-b border-gray-200 dark:border-zinc-900 transition-colors duration-250"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <h2 className="text-zinc-955 dark:text-white text-3xl sm:text-3xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Start with minimum data. Plan with maximum clarity.
          </h2>
          <p className="text-gray-650 dark:text-zinc-400 text-base sm:text-xm font-normal font-spaceGrotesk leading-relaxed">
            Submitting creates a planning inquiry, not a confirmed booking.
          </p>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-4xl mx-auto p-6 sm:p-10 bg-slate-50 dark:bg-zinc-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 dark:outline-zinc-800 flex flex-col gap-6 shadow-xl">
          
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6 font-spaceGrotesk">
            
            {/* Row 1: Name, Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-zinc-950 dark:text-white text-sm font-bold">Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 px-4 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 dark:outline-zinc-800 focus:ring-2 focus:ring-teal-400 text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-zinc-950 dark:text-white text-sm font-bold">Work email</label>
                <input 
                  type="email" 
                  required
                  placeholder="s.jenkins@enterprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-11 px-4 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 dark:outline-zinc-800 focus:ring-2 focus:ring-teal-400 text-sm"
                />
              </div>
            </div>

            {/* Row 2: Org, Event Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-zinc-950 dark:text-white text-sm font-bold">Organization</label>
                <input 
                  type="text" 
                  required
                  placeholder="Enterprise Corp"
                  value={formData.org}
                  onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                  className="w-full h-11 px-4 bg-white dark:bg-zinc-955 text-slate-900 dark:text-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 dark:outline-zinc-800 focus:ring-2 focus:ring-teal-400 text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-zinc-950 dark:text-white text-sm font-bold">Event type</label>
                <input 
                  type="text" 
                  required
                  placeholder="Global Annual Summit"
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full h-11 px-4 bg-white dark:bg-zinc-955 text-slate-900 dark:text-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 dark:outline-zinc-800 focus:ring-2 focus:ring-teal-400 text-sm"
                />
              </div>
            </div>

            {/* Row 3: Timeframe, Access Model */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-zinc-950 dark:text-white text-sm font-bold">Expected date/timeframe</label>
                <input 
                  type="text" 
                  required
                  placeholder="Q4 2026"
                  value={formData.timeframe}
                  onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                  className="w-full h-11 px-4 bg-white dark:bg-zinc-955 text-slate-900 dark:text-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 dark:outline-zinc-800 focus:ring-2 focus:ring-teal-400 text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-zinc-950 dark:text-white text-sm font-bold">Audience access model</label>
                <select
                  value={formData.accessModel}
                  onChange={(e) => setFormData({ ...formData, accessModel: e.target.value })}
                  className="w-full h-11 px-4 bg-white dark:bg-zinc-955 text-slate-900 dark:text-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 dark:outline-zinc-800 focus:ring-2 focus:ring-teal-400 text-sm appearance-none cursor-pointer"
                >
                  <option value="Credentialed (SAML SSO)">Credentialed (SAML SSO)</option>
                  <option value="Public (Unrestricted)">Public (Unrestricted)</option>
                  <option value="Ticketed / Access Code Gated">Ticketed / Access Code Gated</option>
                  <option value="Strict Private (SSO + IP block)">Strict Private (SSO + IP block)</option>
                </select>
              </div>
            </div>

            {/* Requirements checkboxes */}
            <div className="flex flex-col gap-3 w-full">
              <span className="text-zinc-955 dark:text-white text-sm font-bold">
                Accessibility Requirements (Select categories)
              </span>
              <div className="flex flex-wrap gap-4 text-xs font-normal">
                {/* Checkbox 1 */}
                <button
                  type="button"
                  onClick={() => setReqs({ ...reqs, keyboard: !reqs.keyboard })}
                  className="py-1.5 flex items-center gap-2 bg-transparent border-none cursor-pointer text-zinc-955 dark:text-slate-200"
                >
                  <div className={`size-4 rounded-sm outline outline-1 outline-offset-[-1px] flex justify-center items-center ${
                    reqs.keyboard ? 'outline-teal-400 bg-teal-400/10' : 'outline-gray-300 dark:outline-zinc-700 bg-white dark:bg-zinc-950'
                  }`}>
                    {reqs.keyboard && <Check className="size-3 text-teal-400" />}
                  </div>
                  <span>Keyboard Navigation</span>
                </button>

                {/* Checkbox 2 */}
                <button
                  type="button"
                  onClick={() => setReqs({ ...reqs, screenReader: !reqs.screenReader })}
                  className="py-1.5 flex items-center gap-2 bg-transparent border-none cursor-pointer text-zinc-955 dark:text-slate-200"
                >
                  <div className={`size-4 rounded-sm outline outline-1 outline-offset-[-1px] flex justify-center items-center ${
                    reqs.screenReader ? 'outline-teal-400 bg-teal-400/10' : 'outline-gray-300 dark:outline-zinc-700 bg-white dark:bg-zinc-950'
                  }`}>
                    {reqs.screenReader && <Check className="size-3 text-teal-400" />}
                  </div>
                  <span>Screen Reader</span>
                </button>

                {/* Checkbox 3 */}
                <button
                  type="button"
                  onClick={() => setReqs({ ...reqs, signLanguage: !reqs.signLanguage })}
                  className="py-1.5 flex items-center gap-2 bg-transparent border-none cursor-pointer text-zinc-955 dark:text-slate-200"
                >
                  <div className={`size-4 rounded-sm outline outline-1 outline-offset-[-1px] flex justify-center items-center ${
                    reqs.signLanguage ? 'outline-teal-400 bg-teal-400/10' : 'outline-gray-300 dark:outline-zinc-700 bg-white dark:bg-zinc-950'
                  }`}>
                    {reqs.signLanguage && <Check className="size-3 text-teal-400" />}
                  </div>
                  <span>Sign Language</span>
                </button>

                {/* Checkbox 4 */}
                <button
                  type="button"
                  onClick={() => setReqs({ ...reqs, tactile: !reqs.tactile })}
                  className="py-1.5 flex items-center gap-2 bg-transparent border-none cursor-pointer text-zinc-955 dark:text-slate-200"
                >
                  <div className={`size-4 rounded-sm outline outline-1 outline-offset-[-1px] flex justify-center items-center ${
                    reqs.tactile ? 'outline-teal-400 bg-teal-400/10' : 'outline-gray-300 dark:outline-zinc-700 bg-white dark:bg-zinc-950'
                  }`}>
                    {reqs.tactile && <Check className="size-3 text-teal-400" />}
                  </div>
                  <span>Tactile Display</span>
                </button>

                {/* Checkbox 5 */}
                <button
                  type="button"
                  onClick={() => setReqs({ ...reqs, altText: !reqs.altText })}
                  className="py-1.5 flex items-center gap-2 bg-transparent border-none cursor-pointer text-zinc-955 dark:text-slate-200"
                >
                  <div className={`size-4 rounded-sm outline outline-1 outline-offset-[-1px] flex justify-center items-center ${
                    reqs.altText ? 'outline-teal-400 bg-teal-400/10' : 'outline-gray-300 dark:outline-zinc-700 bg-white dark:bg-zinc-950'
                  }`}>
                    {reqs.altText && <Check className="size-3 text-teal-400" />}
                  </div>
                  <span>Alternative Text</span>
                </button>
              </div>
            </div>

            {/* Captions language Needs */}
            <div className="flex flex-col gap-2">
              <label className="text-zinc-955 dark:text-white text-sm font-bold">Captions / Language Needs (Optional)</label>
              <input 
                type="text" 
                placeholder="E.g., EN/ES live translation streams"
                value={formData.captionsNeeds}
                onChange={(e) => setFormData({ ...formData, captionsNeeds: e.target.value })}
                className="w-full h-11 px-4 bg-white dark:bg-zinc-955 text-slate-900 dark:text-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 dark:outline-zinc-800 focus:ring-2 focus:ring-teal-400 text-sm"
              />
            </div>

            {/* Context */}
            <div className="flex flex-col gap-2">
              <label className="text-zinc-955 dark:text-white text-sm font-bold">Additional Context</label>
              <textarea 
                placeholder="No medical or disability information required. Provide technical context here."
                value={formData.context}
                onChange={(e) => setFormData({ ...formData, context: e.target.value })}
                rows={4}
                className="w-full p-4 bg-white dark:bg-zinc-955 text-slate-900 dark:text-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 dark:outline-zinc-800 focus:ring-2 focus:ring-teal-400 text-sm resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 transition-opacity text-white text-base font-bold font-spaceGrotesk rounded-[10px] cursor-pointer border-none flex justify-center items-center shadow-lg"
            >
              {submitted ? 'Submitting Brief Inquiry...' : 'Start your event brief'}
            </button>
          </form>

          {/* Alert Toast feedback */}
          {submitted && (
            <div className="w-full p-4 bg-emerald-500/10 text-emerald-600 rounded-lg outline outline-1 outline-emerald-500/20 text-center font-bold text-sm">
              Brief submitted successfully! Our engineering team will reach out shortly.
            </div>
          )}

          {/* Footer label */}
          <div className="text-center justify-center text-slate-500 dark:text-zinc-450 text-xs font-normal">
            This brief requests planning review. It does not confirm service availability, pricing, or legal conformance.
          </div>
        </div>

      </div>
    </section>
  );
}
