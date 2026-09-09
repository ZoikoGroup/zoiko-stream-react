import React from 'react';

export default function ContactPrivacySection() {
  return (
    <section id="contact-privacy" className="relative w-full bg-[#f0f4f8] py-16 lg:py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-blue-600 text-xs">▸</span>
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 uppercase">
            APPROVED CONTACT AUTHORITY
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Contact Privacy.
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed mb-6">
          For questions this notice doesn&apos;t answer, or to follow up on a submitted request.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-sm sm:max-w-none">
          <a
            href="mailto:privacy@zoikostream.com"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#2dd4bf] to-[#3b82f6] hover:opacity-95 text-[#06181f] font-semibold text-sm shadow-sm transition-all text-center"
          >
            Contact Privacy
          </a>
          <a
            href="#submit-request"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 shadow-sm transition-all text-center"
          >
            Submit a privacy request
          </a>
        </div>
      </div>
    </section>
  );
}
