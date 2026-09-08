import React from 'react';
import Link from 'next/link';

export default function SecurityMeasuresSection() {
  return (
    <section id="security-measures" className="w-full bg-[#F8FAFC] border-b border-slate-200 py-12 lg:py-16 px-6 sm:px-12 lg:px-20 scroll-mt-20">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-[740px]">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
            <span className="text-[#0D6EFD] text-xs font-mono uppercase tracking-wide font-medium">
              CONTRACTUAL ANNEX + RELATED EVIDENCE
            </span>
          </div>
          <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold font-['Space_Grotesk'] leading-snug">
            Security measures (TOMs).
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            The contractual Technical and Organizational Measures annex is the primary authority. Related, public-safe evidence is available separately — restricted detail is never published here by default.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2">
            <h3 className="text-slate-900 text-sm font-bold font-['Inter']">
              Access control
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Role-based access and authentication controls over systems processing personal data.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2">
            <h3 className="text-slate-900 text-sm font-bold font-['Inter']">
              Encryption
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Encryption approaches for data in transit and at rest, as defined in the TOM annex.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2">
            <h3 className="text-slate-900 text-sm font-bold font-['Inter']">
              Operational resilience
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Monitoring, backup, and incident-response practices supporting service continuity.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2">
            <h3 className="text-slate-900 text-sm font-bold font-['Inter']">
              Personnel &amp; governance
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Confidentiality obligations, training, and internal governance over data handling.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3.5">
          <Link
            href="/zoikostream-trust-center"
            className="px-6 py-3.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm font-semibold hover:bg-slate-50 transition-colors"
          >
            Visit Trust Center
          </Link>
          <Link
            href="/platform-media-security"
            className="px-6 py-3.5 rounded-lg border border-slate-300 bg-slate-100 text-slate-900 text-sm font-semibold hover:bg-slate-200 transition-colors"
          >
            Security overview
          </Link>
        </div>

      </div>
    </section>
  );
}
