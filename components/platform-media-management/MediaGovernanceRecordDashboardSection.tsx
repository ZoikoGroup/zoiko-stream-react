import React from 'react';
import Image from 'next/image';

export default function MediaGovernanceRecordDashboardSection() {
  return (
    <section className="relative w-full bg-slate-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-media-managemnt/bg (82).png"
          alt="Governance Dashboard Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white">
            Media Governance Record
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk']">
            The complete governed view of any media object
          </p>
        </div>

        {/* Dashboard Container */}
        <div className="p-6 md:p-8 bg-zinc-900/90 rounded-2xl border border-gray-800 shadow-2xl backdrop-blur-md flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-wrap justify-between items-center gap-4 pb-4 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                Illustrative Record View
              </h3>
              <span className="px-2 py-0.5 bg-emerald-600/20 text-teal-400 text-xs font-bold font-['Space_Grotesk'] rounded">
                STABLE RECORD ACTIVE
              </span>
            </div>
            <div className="flex items-center gap-3 text-slate-400 text-xs font-['Space_Grotesk']">
              <span>Version: v2.4 (Current)</span>
              <span>| Owner: Executive Operations</span>
            </div>
          </div>

          {/* Change Alert */}
          <div className="p-3 bg-amber-900/20 border border-amber-600/40 rounded-lg flex items-center gap-2.5">
            <div className="size-2 bg-amber-500 rounded-full shrink-0" />
            <span className="text-amber-500 text-xs font-normal font-['Space_Grotesk']">
              Changed Since Verification: Asset metadata modified by H. Smith at 2026-03-24 10:14 UTC
            </span>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-gray-800 pb-2">
            <button className="px-3.5 py-2 bg-teal-400 text-slate-950 text-xs font-bold font-['Space_Grotesk'] rounded-md">
              Overview
            </button>
            <button className="px-3.5 py-2 text-slate-400 text-xs font-bold font-['Space_Grotesk'] hover:text-white">
              Identity &amp; Relationships
            </button>
            <button className="px-3.5 py-2 text-slate-400 text-xs font-bold font-['Space_Grotesk'] hover:text-white">
              Metadata
            </button>
            <button className="px-3.5 py-2 text-slate-400 text-xs font-bold font-['Space_Grotesk'] hover:text-white">
              Rights/Provenance
            </button>
            <button className="px-3.5 py-2 text-slate-400 text-xs font-bold font-['Space_Grotesk'] hover:text-white">
              Accessibility/Language
            </button>
            <button className="px-3.5 py-2 text-slate-400 text-xs font-bold font-['Space_Grotesk'] hover:text-white">
              Access/Publication
            </button>
            <button className="px-3.5 py-2 text-slate-400 text-xs font-bold font-['Space_Grotesk'] hover:text-white">
              Lifecycle
            </button>
            <button className="px-3.5 py-2 text-slate-400 text-xs font-bold font-['Space_Grotesk'] hover:text-white">
              History/Evidence
            </button>
          </div>

          {/* 4 Metric Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-800/40 rounded-lg border border-gray-800 flex flex-col gap-2">
              <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">
                STABLE RECORD IDENTITY
              </span>
              <span className="text-white text-xs font-normal font-['Space_Grotesk'] break-all">
                urn:zoiko:record:7a92bf3d-512c-46fe-88e1-e9db71eba30b
              </span>
            </div>

            <div className="p-4 bg-slate-800/40 rounded-lg border border-gray-800 flex flex-col gap-2">
              <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">
                ACTIVE WHITELIST SECURITY
              </span>
              <span className="text-white text-xs font-normal font-['Space_Grotesk']">
                2 Security Scopes Verified (OIDC Corporate Tenant Whitelist)
              </span>
            </div>

            <div className="p-4 bg-slate-800/40 rounded-lg border border-gray-800 flex flex-col gap-2">
              <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">
                ACCESSIBILITY COVERAGE
              </span>
              <span className="text-white text-xs font-normal font-['Space_Grotesk']">
                EN-US, ES-ES (CC/Subtitles) Approved. German audio AD pending.
              </span>
            </div>

            <div className="p-4 bg-slate-800/40 rounded-lg border border-gray-800 flex flex-col gap-2">
              <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">
                LIFECYCLE ARCHIVE RULE
              </span>
              <span className="text-white text-xs font-normal font-['Space_Grotesk']">
                Retain 7 Years. Legal Hold Clearance: No conflicts active.
              </span>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-wrap justify-end items-center gap-3 pt-4 border-t border-gray-800">
            <button className="px-4 py-2.5 rounded-lg border border-slate-400 text-white text-sm font-bold font-['Space_Grotesk'] hover:bg-white/10">
              View evidence
            </button>
            <button className="px-4 py-2.5 rounded-lg border border-slate-400 text-white text-sm font-bold font-['Space_Grotesk'] hover:bg-white/10">
              Open specialist
            </button>
            <button className="px-4 py-2.5 rounded-lg border border-teal-400 text-teal-400 text-sm font-bold font-['Space_Grotesk'] hover:bg-teal-400/10">
              Request review
            </button>
            <button className="px-5 py-2.5 bg-teal-400 text-slate-950 text-sm font-bold font-['Space_Grotesk'] rounded-lg hover:opacity-90">
              Propose edit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
