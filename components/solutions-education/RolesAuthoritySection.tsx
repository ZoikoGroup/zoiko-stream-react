import React from 'react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import Image from 'next/image';
const roles = [
  { role: 'Academic / Program Owner', resp: 'Defines curriculum intent, defines access limits and target learners.' },
  { role: 'Faculty / Presenter / Trainer', resp: 'Instructs sessions, defines specific classroom interaction levels.' },
  { role: 'Instructional Media / AV', resp: 'Manages local capture signals, video encoding, hardware configurations.' },
  { role: 'IT / Platform', resp: 'Ensures network uptime, monitors bandwidth allocations, manages APIs.' },
  { role: 'Identity / Security', resp: 'Enforces SAML SSO rules, manages secure attendee directory matching.' },
  { role: 'Accessibility / Disability Services', resp: 'Coordinates live captions, approves transcripts, monitors WCAG scores.' },
  { role: 'Privacy / Records / Legal', resp: 'Authorizes retention limits, oversees incident compliance policies.' },
  { role: 'Communications / Events', resp: 'Drives high-scale institutional broadcasts, coordinates public engagement.' },
  { role: 'Support / Operations', resp: 'Monitors active stream pipeline health and coordinates fast recovery.' },
];

const decisionStack = [
  { label: 'PURPOSE / SCOPE', val: 'Course instruction, synchronous review' },
  { label: 'AUTHORITY OWNER', val: 'AV & Disability Services Desk' },
  { label: 'AUDIENCE INTENT', val: 'Enrolled student cohort (restricted SSO)' },
  { label: 'NOTICE / CONSENT REQUIREMENT', val: 'Continuous HUD notice + Explicit opt-in' },
  { label: 'ACCESS AFTER LIVE', val: 'Self-service student portal, expires end of term' },
  { label: 'RETENTION / DISPOSITION', val: '180 days compliance archival hold' },
  { label: 'EVIDENCE STATE', val: 'Real-time auditable pipeline log active' },
];

export function RolesAuthoritySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
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
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Roles, authority and privacy ownership
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Each role carries specific authority over sessions, audiences, recordings, accessibility, and evidence.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column Table */}
          <div className="lg:col-span-7 w-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="p-5 bg-slate-100 border-b-2 border-gray-200 flex justify-between items-center text-xs font-bold font-['Space_Grotesk'] text-slate-900">
              <span className="w-56">ROLE</span>
              <span className="flex-1">CORE RESPONSIBILITY</span>
            </div>
            <div className="divide-y divide-gray-200">
              {roles.map((item, idx) => (
                <div key={idx} className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 hover:bg-slate-50 transition-colors">
                  <span className="w-56 text-slate-900 text-sm font-bold font-['Space_Grotesk'] flex-shrink-0">
                    {item.role}
                  </span>
                  <span className="flex-1 text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                    {item.resp}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Stack Card */}
          <div className="lg:col-span-5 w-full p-8 bg-white rounded-2xl border border-gray-200 flex flex-col justify-start items-start gap-6 shadow-sm">
            <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
              Recording &amp; Privacy Decision
            </h3>

            <div className="w-full flex flex-col justify-start items-start gap-4">
              {decisionStack.map((ds, idx) => (
                <div key={idx} className="w-full flex flex-col justify-start items-start gap-1.5">
                  <span className="text-slate-600 text-xs font-bold font-['Space_Grotesk'] uppercase">
                    {ds.label}
                  </span>
                  <div className="w-full p-2.5 bg-slate-50 rounded-md border border-gray-200">
                    <span className="text-slate-900 text-xs font-normal font-['Inter']">
                      {ds.val}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-7 py-3.5 rounded-lg border border-slate-900 flex justify-center items-center cursor-pointer">
              <span className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                Review ownership
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
