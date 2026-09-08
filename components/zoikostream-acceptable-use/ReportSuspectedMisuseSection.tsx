'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ReportSuspectedMisuseSection() {
  const [category, setCategory] = useState('');
  const [email, setEmail] = useState('');
  const [subjectId, setSubjectId] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="report-misuse" className="relative w-full bg-white py-16 lg:py-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
            Report suspected misuse
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed">
            This form reports a concern for review — it does not determine that a violation occurred, and submitting it does not guarantee a specific outcome or timeline.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-6 sm:p-8 max-w-4xl shadow-sm">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                ✓
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Report Received</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Thank you. Your report has been recorded for review under our internal process.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Concern Category */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Concern category *
                </label>
                <div className="relative">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="w-full appearance-none bg-white border border-slate-300/90 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-teal-500 cursor-pointer shadow-sm"
                  >
                    <option value="">Select a category</option>
                    <option value="platform-integrity">Platform integrity &amp; security</option>
                    <option value="content-compliance">Content &amp; legal compliance</option>
                    <option value="fair-use">Fair use of resources</option>
                    <option value="live-events">Live Events conduct</option>
                    <option value="data-privacy">Data &amp; privacy respect</option>
                    <option value="automated-access">Automated &amp; technical access</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Email & Subject Identifier */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Your email (optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-white border border-slate-300/90 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Subject identifier (e.g. stream URL, account handle)
                  </label>
                  <input
                    type="text"
                    value={subjectId}
                    onChange={(e) => setSubjectId(e.target.value)}
                    placeholder=""
                    className="w-full bg-white border border-slate-300/90 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-teal-500 shadow-sm"
                  />
                </div>
              </div>

              {/* What happened? */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  What happened? *
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows={4}
                  placeholder="Describe what you observed"
                  className="w-full bg-white border border-slate-300/90 rounded-xl p-4 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 shadow-sm resize-y"
                />
              </div>

              {/* Disclaimer notice box */}
              <div className="bg-white border border-slate-200 rounded-xl p-3.5 text-xs text-slate-500 leading-relaxed shadow-sm">
                Do not include passwords, payment details, regulated data, private media, or more personal data than necessary. Reporter-selected urgency does not determine official enforcement severity.
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#2dd4bf] to-[#38bdf8] text-[#06181f] font-bold text-sm shadow-sm hover:opacity-95 transition-all cursor-pointer"
              >
                Submit report
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
