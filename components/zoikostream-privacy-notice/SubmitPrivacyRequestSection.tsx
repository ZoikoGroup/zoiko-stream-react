'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function SubmitPrivacyRequestSection() {
  const [requestType, setRequestType] = useState('');
  const [email, setEmail] = useState('');
  const [context, setContext] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="submit-request" className="relative w-full bg-[#f0f4f8] py-16 lg:py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 uppercase">
            MINIMUM DATA, PROTECTED
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Submit a privacy request.
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed mb-8">
          We collect only what&apos;s needed to locate your record and verify your request — no more.
        </p>

        {/* Form Container Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 max-w-5xl shadow-sm">
          {/* Step Pills Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-6 text-xs font-mono">
            <span className="bg-blue-50 border border-blue-400 text-blue-700 font-semibold px-3 py-1 rounded-full">
              1. Choose request
            </span>
            <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full">
              2. Confirm context
            </span>
            <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full">
              3. Minimum details
            </span>
            <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full">
              4. Submit
            </span>
          </div>

          {submitted ? (
            <div className="py-12 text-center">
              <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                ✓
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Request Submitted</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Thank you. We have received your privacy request and will verify your identity to process it in compliance with applicable law.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Field 1: What would you like to do? */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  What would you like to do?
                </label>
                <div className="relative">
                  <select
                    value={requestType}
                    onChange={(e) => setRequestType(e.target.value)}
                    required
                    className="w-full appearance-none bg-slate-100/70 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-teal-500 cursor-pointer shadow-sm"
                  >
                    <option value="">Select a request type</option>
                    <option value="access">Request a copy of my data (Access)</option>
                    <option value="deletion">Request deletion of my data (Deletion)</option>
                    <option value="correction">Correct inaccurate personal data (Correction)</option>
                    <option value="portability">Data portability export</option>
                    <option value="restriction">Object to or restrict data processing</option>
                    <option value="consent">Withdraw consent</option>
                    <option value="other">Other privacy question</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Field 2: Email associated with your account */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Email associated with your account
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder=""
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-teal-500 shadow-sm"
                />
              </div>

              {/* Field 3: Context (optional) */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Context (optional)
                </label>
                <input
                  type="text"
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  placeholder="e.g., website account, a specific support ticket"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 shadow-sm"
                />
              </div>

              {/* Field 4: Anything else we should know? (optional) */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Anything else we should know? (optional)
                </label>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows={3}
                  placeholder="Do not include passwords, payment details, or sensitive personal data here."
                  className="w-full bg-white border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 shadow-sm resize-y"
                />
              </div>

              {/* Disclaimer */}
              <p className="font-mono text-[11px] text-slate-400 leading-relaxed pt-1">
                We collect only what&apos;s needed to locate your record and verify your identity — never more. Sensitive evidence, if needed, is collected through a separate secure follow-up.
              </p>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2dd4bf] to-[#3b82f6] hover:opacity-95 text-[#06181f] font-bold text-sm shadow-sm transition-all cursor-pointer"
                >
                  Submit request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
