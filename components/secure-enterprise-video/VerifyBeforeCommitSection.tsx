import React from 'react';
import Link from 'next/link';

const verificationTable = [
  { cat: 'Identity & Authentication', req: 'SAML 2.0 / OIDC Federation support', status: 'VERIFIED', statusStyle: 'bg-emerald-500/10 text-emerald-500', review: 'Jan 2026', link: 'Review SSO Model' },
  { cat: 'Authorization & Policy', req: 'Deterministic geo-fencing playback', status: 'SUPPORTED WITH CONDITIONS', statusStyle: 'bg-blue-500/10 text-blue-500', review: 'Feb 2026', link: 'Browse Rule Book' },
  { cat: 'Playback Security', req: 'Multi-device active telemetry heartbeats', status: 'VERIFIED', statusStyle: 'bg-emerald-500/10 text-emerald-500', review: 'Jan 2026', link: 'Inspect Telemetry' },
  { cat: 'Content Protection', req: 'Watermarking with dynamic visual tags', status: 'VERIFIED', statusStyle: 'bg-emerald-500/10 text-emerald-500', review: 'Feb 2026', link: 'View Demo Render' },
  { cat: 'Audit & Compliance', req: 'SIEM log integrations ISO 27001', status: 'ENTERPRISE-ASSISTED', statusStyle: 'bg-blue-500/10 text-blue-500', review: 'Dec 2025', link: 'Request API Docs' },
  { cat: 'Data Lifecycle', req: 'WOD automatic deletion on expiry', status: 'SUPPORTED WITH CONDITIONS', statusStyle: 'bg-blue-500/10 text-blue-500', review: 'Jan 2026', link: 'Review Retention' },
];

export default function VerifyBeforeCommitSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
      <div className="size-96 -left-44 -top-28 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            Verify before you commit
          </h2>
          <p className="text-slate-600 text-lg font-normal   leading-relaxed max-w-3xl">
            Review security, compliance, and protection outcomes mapped directly to empirical engineering benchmarks.
          </p>
        </div>

        {/* Verification Matrix Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 bg-slate-50 border-b border-gray-200 grid grid-cols-12 gap-3 text-slate-900 text-xs font-bold  ">
            <span className="col-span-3">CATEGORY</span>
            <span className="col-span-4">SECURITY REQUIREMENT</span>
            <span className="col-span-3">OUTCOME STATE</span>
            <span className="col-span-1">LAST REVIEW</span>
            <span className="col-span-1 text-right">EVIDENCE LINK</span>
          </div>

          <div className="flex flex-col divide-y divide-gray-200">
            {verificationTable.map((row, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 gap-3 items-center text-xs  ">
                <span className="col-span-3 text-slate-900 font-bold  ">{row.cat}</span>
                <span className="col-span-4 text-slate-600 font-normal">{row.req}</span>
                <div className="col-span-3 flex items-center">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold   uppercase ${row.statusStyle}`}>
                    {row.status}
                  </span>
                </div>
                <span className="col-span-1 text-slate-600 font-normal">{row.review}</span>
                <Link
                  href="/talk-to-an-expert"
                  className="col-span-1 text-right text-blue-500 font-bold   underline"
                >
                  {row.link}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-start pt-2">
          <Link
            href="/talk-to-an-expert"
            className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold   hover:opacity-90 transition-opacity"
          >
            Request security review
          </Link>
        </div>
      </div>
    </section>
  );
}
