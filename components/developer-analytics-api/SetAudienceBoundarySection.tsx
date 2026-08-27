import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const boundaryCards = [
  {
    badge: 'GLOBAL REACH',
    title: 'Public / Open',
    desc: 'Unrestricted global webcast designed for marketing reach, massive concurrency, and multi-CDN edge delivery paths.',
    borderCls: 'border-gray-200',
  },
  {
    badge: 'SECURE INVITATION',
    title: 'Controlled / Invite-Based',
    desc: 'Token-gated access with registration validation pipelines, attendee consent, and verified email matches.',
    borderCls: 'border-gray-200',
  },
  {
    badge: 'SSO ENFORCED',
    title: 'Private / Restricted',
    desc: 'Mandatory SAML SSO enforcement, strict region geo-fencing constraints, and administrative access logging.',
    borderCls: 'border-blue-500',
  },
];

const checklist = [
  'Mandatory SAML SSO authentication for all attendee sessions.',
  'Strict geo-fencing with IP-range allowlisting per region.',
  'Full administrative access logging with tamper-proof storage.',
  'Zero-knowledge encryption on all recorded session archives.',
];

export function SetAudienceBoundarySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white  flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-950 text-3xl lg:text-4xl font-bold leading-tight">
            Set the audience boundary before you send the invitation.
          </h2>
        </div>

        {/* 3 Boundary Level Cards */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {boundaryCards.map((b, idx) => (
            <div
              key={idx}
              className={`p-8 bg-slate-50 rounded-xl border ${b.borderCls} flex flex-col gap-5 shadow-xs`}
            >
              <div className="px-2 py-1 bg-white rounded border border-gray-200 w-fit">
                <span className="text-blue-500 text-xs font-bold   ">{b.badge}</span>
              </div>
              <h3 className="text-slate-950 text-xl font-bold   ">{b.title}</h3>
              <p className="text-slate-600 text-sm leading-5">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* 2 Column Details */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Audience Access Configuration */}
          <div className="lg:col-span-7 p-8 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col gap-6 shadow-xs">
            <h3 className="text-slate-950 text-lg font-bold   ">
              Audience Access Configuration
            </h3>
            <div className="flex flex-col gap-4    text-xs">
              <div className="flex flex-col gap-1.5">
                <span className="text-slate-600 font-bold uppercase">SSO Identity Provider</span>
                <div className="p-3.5 bg-white rounded-lg border border-gray-200 text-slate-950 font-sans text-sm">
                  Okta SAML 2.0 — Org-Wide Enforcement
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-slate-600 font-bold uppercase">Geo-Fence Boundary</span>
                <div className="p-3.5 bg-white rounded-lg border border-gray-200 text-slate-950 font-sans text-sm">
                  US-East + EU-West Only (Strict Region Lock)
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-slate-600 font-bold uppercase">Admin Access Log Retention</span>
                <div className="p-3.5 bg-white rounded-lg border border-gray-200 text-slate-950 font-sans text-sm">
                  365 Days — Immutable Audit Trail
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-slate-600 font-bold uppercase">Session Timeout Policy</span>
                <div className="p-3.5 bg-white rounded-lg border border-gray-200 text-slate-950 font-sans text-sm">
                  15 Min Idle — Hard Disconnect at 4 Hours
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Security & Compliance Checklist */}
          <div className="lg:col-span-5 p-8 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col gap-6 shadow-xs">
            <h3 className="text-slate-950 text-lg font-bold   ">
              Security &amp; Compliance Checklist
            </h3>
            <div className="flex flex-col gap-4">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded  flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-emerald-500 text-xs font-bold   ">✓</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-5">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
