import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg119 from '@/public/images/accessible-multilingual/bg (120).png';

const requirements = [
  { req: 'Prerecorded Captions (1.2.2)', scope: 'WCAG AA', status: 'VERIFIED ✓', statusStyle: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30', source: 'VOD Pipeline Log', reviewed: 'Jan 2026' },
  { req: 'Live Captions (1.2.4)', scope: 'WCAG AA', status: 'SUPPORTED WITH CONDITIONS', statusStyle: 'bg-amber-500/10 text-amber-500 border-amber-500/30', source: 'Live STUN Telemetry', reviewed: 'Feb 2026' },
  { req: 'Keyboard Operability (2.1.1)', scope: 'WCAG A', status: 'VERIFIED ✓', statusStyle: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30', source: 'Player Access Report', reviewed: 'Jan 2026' },
  { req: 'Text Alternatives (1.1.1)', scope: 'WCAG A', status: 'VERIFIED ✓', statusStyle: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30', source: 'CMS Audit Log', reviewed: 'Feb 2026' },
];

export default function RequirementsValidationEvidenceSection() {
  return (
    <section className="relative w-full bg-slate-900 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg119}
          alt="Requirements Validation Background"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-white leading-tight">
            Requirements Validation &amp; Evidence
          </h2>
          <p className="text-slate-400 text-lg font-normal   leading-relaxed max-w-3xl">
            Continuous deterministic checks mapped directly to real, attributable proof logs.
          </p>
        </div>

        {/* Validation Table */}
        <div className="bg-zinc-900 rounded-2xl border border-gray-800 backdrop-blur-md overflow-hidden flex flex-col">
          <div className="p-4 bg-slate-900 border-b border-gray-800 grid grid-cols-12 gap-3 text-white text-xs font-bold  ">
            <span className="col-span-3">Requirement</span>
            <span className="col-span-2">Scope</span>
            <span className="col-span-3">Capability Status</span>
            <span className="col-span-2">Evidence Source</span>
            <span className="col-span-1">Reviewed At</span>
            <span className="col-span-1 text-right">Action</span>
          </div>

          <div className="flex flex-col divide-y divide-gray-800">
            {requirements.map((r, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 gap-3 items-center text-xs  ">
                <span className="col-span-3 text-white font-bold  ">{r.req}</span>
                <span className="col-span-2 text-slate-400 font-normal">{r.scope}</span>
                <div className="col-span-3 flex items-center">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold   border ${r.statusStyle}`}>
                    {r.status}
                  </span>
                </div>
                <span className="col-span-2 text-slate-400 font-normal">{r.source}</span>
                <span className="col-span-1 text-slate-400 font-normal">{r.reviewed}</span>
                <Link
                  href="/talk-to-an-expert"
                  className="col-span-1 text-right text-blue-500 font-bold   underline"
                >
                  View Log →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* 2 Columns: Attestation & Procurement Handoff */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Attestation Box */}
          <div className="lg:col-span-7 p-7 bg-zinc-900 rounded-xl border border-gray-800 backdrop-blur-md flex flex-col gap-5">
            <h3 className="text-white text-lg font-bold  ">
              Latest Compliance Attestation
            </h3>

            <div className="flex flex-col gap-2 text-xs  ">
              <p><strong className="text-white">Claim ID:</strong> <span className="text-slate-400">ATTEST-2026-904X</span></p>
              <p><strong className="text-white">Signee:</strong> <span className="text-slate-400">VP of Trust &amp; Safety Infrastructure</span></p>
              <p><strong className="text-white">Review Standard:</strong> <span className="text-slate-400">VPAT / WCAG 2.2 AA Level Checklist</span></p>
            </div>

            <div className="w-full h-px border-b border-gray-800" />

            <div className="flex items-center gap-4">
              <Link
                href="/talk-to-an-expert"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold   hover:opacity-90 transition-opacity"
              >
                Download Signed VPAT
              </Link>
              <span className="text-slate-400 text-xs font-normal  ">
                PDF / 412 KB
              </span>
            </div>
          </div>

          {/* Procurement Box */}
          <div className="lg:col-span-5 p-7 bg-zinc-900 rounded-xl border border-teal-400 backdrop-blur-md flex flex-col gap-4">
            <span className="text-teal-400 text-base font-bold   tracking-wide">
              PROCUREMENT HANDOFF
            </span>
            <p className="text-slate-400 text-sm font-normal   leading-relaxed">
              Evaluating under a strict compliance review framework? Skip the demo request. Download the pre-packaged legal, technical, and accessibility proof package immediately.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/talk-to-an-expert"
                className="px-7 py-3.5 rounded-lg border border-slate-400 text-white text-base font-bold   hover:bg-white/10 transition-colors"
              >
                Request Security Packet
              </Link>
              <span className="text-slate-400 text-xs font-normal  ">
                Instantly authorized via email
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
