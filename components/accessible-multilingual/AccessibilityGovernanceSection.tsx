import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg118 from '@/public/images/accessible-multilingual/bg (119).png';

const roles = [
  { name: 'Organization Owner', desc: 'Strategic oversight, system policies, security keys, and compliance mapping.' },
  { name: 'Accessibility/Content Owner', desc: 'Mandatory track creation, accessibility standards validation, and compliance metrics.' },
  { name: 'Media Operator', desc: 'Live workflow operations, ingestion streams, real-time signal and health telemetry.' },
  { name: 'Language Reviewer', desc: 'Live translation audit, transcription correction, post-live approvals, and sign-offs.' },
  { name: 'Publisher/Approver', desc: 'Public distribution governance, final WCAG audit sign-off, and release authorizations.' },
  { name: 'Auditor/Viewer', desc: 'Regulatory evidence inspection, log verification, accessibility barrier audit access.' },
  { name: 'Support Operator', desc: 'Direct citizen barrier report routing, help desk ticket handling, and instant remediation.' },
];

const matrixRows = [
  { role: 'Org Owner', config: true, edit: true, appr: true, publ: true },
  { role: 'Accessibility Owner', config: true, edit: true, appr: true, publ: true },
  { role: 'Media Operator', config: true, edit: false, appr: false, publ: false },
  { role: 'Language Reviewer', config: false, edit: true, appr: true, publ: false },
  { role: 'Publisher', config: false, edit: false, appr: true, publ: true },
  { role: 'Auditor', config: false, edit: false, appr: false, publ: false },
];

export default function AccessibilityGovernanceSection() {
  return (
    <section className="relative w-full bg-slate-900 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg118}
          alt="Accessibility Governance Background"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-slate-900/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-white leading-tight">
            Accessibility Governance
          </h2>
          <p className="text-slate-400 text-lg font-normal   leading-relaxed max-w-3xl">
            Roles, approval, exceptions, and auditability mapped to your organization structure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Governance Roles */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h3 className="text-white text-lg font-bold  ">
              Qualified Governance Roles
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roles.map((r, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-zinc-900 rounded-lg border border-gray-800 flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="size-2 bg-teal-400 rounded-full" />
                    <h4 className="text-white text-base font-bold  ">
                      {r.name}
                    </h4>
                  </div>
                  <p className="text-slate-400 text-xs font-normal   leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Permission Matrix */}
          <div className="lg:col-span-5 p-7 bg-gray-800 rounded-xl border border-gray-800 flex flex-col gap-5">
            <span className="text-teal-400 text-base font-bold   tracking-wide">
              PERMISSION MATRIX
            </span>

            <div className="flex flex-col gap-3 text-xs  ">
              <div className="flex justify-between items-center text-slate-400 font-bold   border-b border-gray-800 pb-2">
                <span>Role / Action</span>
                <div className="flex gap-4">
                  <span className="w-8 text-center">Config</span>
                  <span className="w-8 text-center">Edit</span>
                  <span className="w-8 text-center">Appr</span>
                  <span className="w-8 text-center">Publ</span>
                </div>
              </div>

              {matrixRows.map((m, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-800/60">
                  <span className="text-white font-bold">{m.role}</span>
                  <div className="flex gap-4">
                    <span className="w-8 text-center text-teal-400 font-bold">{m.config ? '✓' : '-'}</span>
                    <span className="w-8 text-center text-teal-400 font-bold">{m.edit ? '✓' : '-'}</span>
                    <span className="w-8 text-center text-teal-400 font-bold">{m.appr ? '✓' : '-'}</span>
                    <span className="w-8 text-center text-teal-400 font-bold">{m.publ ? '✓' : '-'}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between gap-4">
              <Link
                href="#"
                className="px-7 py-2.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold   hover:opacity-90 transition-opacity"
              >
                Inspect Governance Model
              </Link>
              <span className="text-slate-400 text-xs font-normal  ">
                SAML SSO Integrated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
