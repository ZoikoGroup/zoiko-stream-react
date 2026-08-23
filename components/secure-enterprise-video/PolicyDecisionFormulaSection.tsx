import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg124 from '@/public/images/secure-enterprise/bg (124).png';

const formulaItems = [
  'Audience Profile',
  'User Entitlement',
  'Media Scope',
  'Requested Action',
  'Workflow State',
  'Effective Period',
  'Policy Conditions',
];

const compilerRows = [
  { label: 'Audience Target', dot: 'bg-teal-400', value: 'SSO Group: Internal All-Hands & Board Members' },
  { label: 'Media Scope', dot: 'bg-blue-500', value: 'Z-ID: Video_Assets_Q1_Audit_Review' },
  { label: 'Action Allowed', dot: 'bg-white', value: 'Streaming/Playback only (Download disabled)' },
  { label: 'Temporal Window', dot: 'bg-white', value: 'March 20, 2026 13:00 - March 20, 2026 18:00 EST' },
  { label: 'Mandatory Conditions', dot: 'bg-teal-400', value: 'TLS 1.3 requirement + Multi-factor verified session' },
];

export default function PolicyDecisionFormulaSection() {
  return (
    <section className="relative w-full bg-slate-900/50 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden" id="access-model">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg124}
          alt="Policy Decision Background"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-white leading-tight">
            Access is a policy decision—not a private link.
          </h2>
          <p className="text-slate-400 text-lg font-normal   leading-relaxed max-w-3xl">
            Link sharing is a security vulnerability. ZoikoStream evaluates dynamic criteria at the moment of playback to formulate an explicit authorization verdict.
          </p>
        </div>

        {/* Dynamic Formula Bar */}
        <div className="p-5 bg-gray-800 rounded-xl border border-gray-800 flex flex-wrap items-center gap-3">
          <span className="text-teal-400 text-sm font-bold   mr-2">
            DYNAMIC FORMULA:
          </span>
          {formulaItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="text-white text-xs font-medium   bg-gray-900/80 px-2.5 py-1 rounded">
                {item}
              </span>
              {idx < formulaItems.length - 1 && (
                <span className="text-teal-400 text-sm font-bold  ">+</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ZOIKOPOLICY™ Compiler Box */}
        <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h3 className="text-white text-base font-bold  ">
              ZOIKOPOLICY™ RUNTIME COMPILER
            </h3>
            <span className="px-2.5 py-1 bg-teal-400/10 text-teal-400 text-xs font-bold   rounded-full">
              ACTIVE ENFORCEMENT
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {compilerRows.map((row, idx) => (
              <div
                key={idx}
                className="p-4 bg-gray-800 rounded-lg border border-gray-800 flex flex-col sm:flex-row items-start sm:items-center gap-3"
              >
                <span className="w-44 text-slate-500 text-xs font-bold   shrink-0">
                  {row.label}
                </span>
                <div className={`size-1.5 ${row.dot} rounded-full shrink-0 hidden sm:block`} />
                <p className="text-white text-sm font-normal  ">
                  {row.value}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 bg-slate-900 rounded-lg flex justify-between items-center border border-emerald-500/30">
            <div className="flex items-center gap-3">
              <div className="size-2 bg-emerald-500 rounded-full" />
              <span className="text-white text-base font-bold  ">
                Dynamic Playback Verdict Compiled
              </span>
            </div>
            <span className="text-emerald-500 text-sm font-bold  ">
              AUTHORIZED &amp; VERIFIED
            </span>
          </div>
        </div>

        <div className="flex justify-start">
          <Link
            href="/talk-to-an-expert"
            className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold   hover:opacity-90 transition-opacity"
          >
            Inspect access-control capabilities
          </Link>
        </div>
      </div>
    </section>
  );
}
