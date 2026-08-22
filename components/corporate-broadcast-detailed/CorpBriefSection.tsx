'use client';

import React, { useState } from 'react';

export default function CorpBriefSection() {
  const [formData, setFormData] = useState({
    orgName: 'Acme Enterprise Group',
    eventType: 'Corporate Town Hall / Webcast',
    audienceSize: '5,000+ internal employees',
    preferredDate: 'YYYY-MM-DD',
    accessModel: 'Authenticated SSO Enforced',
    additionalReqs: 'E.g. WCAG English closed-captions required'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="corporate-brief-form" className="relative w-full py-24 bg-zinc-950 text-white overflow-hidden border-t border-slate-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-25"
        style={{ backgroundImage: "url('/images/corporate-broadcast-detailed/bg (8).png')" }}
      />
      <div className="absolute inset-0 bg-zinc-955/90 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 text-left">
          <h2 className="text-white text-4xl font-bold   leading-[60.80px]">
            Start your corporate broadcast brief
          </h2>
          <p className="text-slate-400 text-lg font-normal   leading-7">
            Submit your event requirements and reserve transcoding capacity. Our team will review your brief and configure a tailored broadcast environment matched to your organization's security, accessibility, and scale needs.
          </p>
        </div>

        {/* Form Card */}
        <div className="w-full p-8 sm:p-10 bg-gray-900/90 rounded-3xl border border-slate-800 backdrop-blur-[10px] flex flex-col justify-start items-start gap-7 shadow-2xl">
          
          {isSubmitted ? (
            <div className="w-full py-12 flex flex-col items-center justify-center text-center gap-4">
              <span className="text-teal-400 text-5xl">✓</span>
              <h3 className="text-white text-2xl font-bold  ">
                Thank you! Your brief is submitted.
              </h3>
              <p className="text-slate-455 text-sm max-w-md">
                Our enterprise solutions advisors will verify SLA configurations, custom integration routes, and on-site support logistics shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-6 py-2 border border-slate-700 bg-transparent text-white rounded-lg text-sm font-semibold hover:bg-slate-850 cursor-pointer"
              >
                Submit another brief
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7 font-sans">
              
              {/* Row 1 */}
              <div className="w-full flex flex-col md:flex-row justify-start items-start gap-6">
                <div className="flex-1 w-full inline-flex flex-col justify-start items-start gap-2">
                  <label className="text-white text-sm font-bold  ">
                    Organization name
                  </label>
                  <input 
                    type="text"
                    value={formData.orgName}
                    onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                    className="w-full h-12 px-4 bg-zinc-950 rounded-lg border border-slate-800 text-slate-100 text-sm font-normal   focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                <div className="flex-1 w-full inline-flex flex-col justify-start items-start gap-2">
                  <label className="text-white text-sm font-bold  ">
                    Event type
                  </label>
                  <div className="w-full h-12 bg-zinc-950 rounded-lg border border-slate-800 inline-flex justify-between items-center px-4 relative">
                    <select 
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full h-full bg-transparent text-slate-105 text-sm font-normal   focus:outline-none cursor-pointer appearance-none pr-8"
                    >
                      <option className="bg-zinc-900">Corporate Town Hall / Webcast</option>
                      <option className="bg-zinc-900">Earnings Call & Webcasts</option>
                      <option className="bg-zinc-900">Product Launch / Keynote</option>
                      <option className="bg-zinc-900">Department Sync / Internal</option>
                    </select>
                    <span className="text-slate-400 absolute right-4 pointer-events-none">▾</span>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="w-full flex flex-col md:flex-row justify-start items-start gap-6">
                <div className="flex-1 w-full inline-flex flex-col justify-start items-start gap-2">
                  <label className="text-white text-sm font-bold  ">
                    Expected audience size
                  </label>
                  <input 
                    type="text"
                    value={formData.audienceSize}
                    onChange={(e) => setFormData({ ...formData, audienceSize: e.target.value })}
                    className="w-full h-12 px-4 bg-zinc-950 rounded-lg border border-slate-800 text-slate-100 text-sm font-normal   focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                <div className="flex-1 w-full inline-flex flex-col justify-start items-start gap-2">
                  <label className="text-white text-sm font-bold  ">
                    Preferred date
                  </label>
                  <input 
                    type="text"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full h-12 px-4 bg-zinc-950 rounded-lg border border-slate-800 text-slate-100 text-sm font-normal   focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="w-full flex flex-col md:flex-row justify-start items-start gap-6">
                <div className="flex-1 w-full inline-flex flex-col justify-start items-start gap-2">
                  <label className="text-white text-sm font-bold  ">
                    Access model
                  </label>
                  <div className="w-full h-12 bg-zinc-950 rounded-lg border border-slate-800 inline-flex justify-between items-center px-4 relative">
                    <select 
                      value={formData.accessModel}
                      onChange={(e) => setFormData({ ...formData, accessModel: e.target.value })}
                      className="w-full h-full bg-transparent text-slate-105 text-sm font-normal   focus:outline-none cursor-pointer appearance-none pr-8"
                    >
                      <option className="bg-zinc-900">Authenticated SSO Enforced</option>
                      <option className="bg-zinc-900">Invite-Only Restricted Link</option>
                      <option className="bg-zinc-900">Open Public Scale Stream</option>
                      <option className="bg-zinc-900">Mixed Hybrid Solution</option>
                    </select>
                    <span className="text-slate-400 absolute right-4 pointer-events-none">▾</span>
                  </div>
                </div>

                <div className="flex-1 w-full inline-flex flex-col justify-start items-start gap-2">
                  <label className="text-white text-sm font-bold  ">
                    Additional requirements
                  </label>
                  <textarea 
                    value={formData.additionalReqs}
                    onChange={(e) => setFormData({ ...formData, additionalReqs: e.target.value })}
                    rows={1}
                    className="w-full h-12 px-4 pt-3 bg-zinc-950 rounded-lg border border-slate-800 text-slate-100 text-sm font-normal   focus:outline-none focus:border-teal-500 transition-colors resize-none overflow-hidden"
                  />
                </div>
              </div>

              {/* Form Footer */}
              <div className="w-full pt-4 border-t border-slate-850 inline-flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <span className="text-slate-450 text-sm font-normal   leading-6">
                  Your brief will reserve transcoding allocation. No payment details required.
                </span>
                
                <div className="inline-flex justify-start items-center gap-4 shrink-0 font-sans">
                  <button 
                    type="submit"
                    className="px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold hover:opacity-90 transition-opacity cursor-pointer border-none shadow-[0px_4px_16px_rgba(51,217,199,0.20)]"
                  >
                    Submit event brief
                  </button>
                  <a 
                    href="/talk-to-an-expert"
                    className="px-7 py-3.5 rounded-[10px] border border-gray-500 bg-zinc-900/40 text-slate-100 text-sm font-medium hover:bg-zinc-900/80 transition-colors cursor-pointer text-center"
                  >
                    Talk to an event expert
                  </a>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
