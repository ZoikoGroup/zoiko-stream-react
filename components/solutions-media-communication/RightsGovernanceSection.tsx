import React from 'react';

const policies = [
  {
    title: 'Premium Live Feed',
    status: { text: 'Active', cls: 'bg-emerald-500/10 text-emerald-500' },
    audience: 'Subscribed Pro',
    territory: 'US & Canada Only',
    period: '2026-01-01 to 2026-12-31',
    owner: 'Compliance Team A',
  },
  {
    title: 'Free Replay Archives',
    status: { text: 'Approved', cls: 'bg-blue-500/10 text-blue-500' },
    audience: 'Public Guest',
    territory: 'Global Scope',
    period: '7 Days Post-Live Embargo',
    owner: 'Content Operations',
  },
  {
    title: 'Syndication Master',
    status: { text: 'Needs Review', cls: 'bg-amber-500/10 text-amber-500' },
    audience: 'B2B Partners Only',
    territory: 'Europe Only',
    period: 'Planned Q3 Launch',
    owner: 'Legal & Distribution',
  },
];

const layers = [
  {
    step: '1. Identity',
    desc: 'SSO validation and authentic source checking',
    borderCls: 'border-teal-400/30',
    textCls: 'text-teal-500',
  },
  {
    step: '2. Entitlement',
    desc: 'Account capability verification and role matching',
    borderCls: 'border-blue-500/30',
    textCls: 'text-blue-500',
  },
  {
    step: '3. Policy',
    desc: 'Geo-blocking and embargo parameters validation',
    borderCls: 'border-pink-500/30',
    textCls: 'text-pink-500',
  },
  {
    step: '4. Playback',
    desc: 'Secure token generation & dynamic watermark key',
    borderCls: 'border-amber-500/30',
    textCls: 'text-amber-500',
  },
  {
    step: '5. Evidence',
    desc: 'Cryptographic capture of player and enforcement logs',
    borderCls: 'border-emerald-500/30',
    textCls: 'text-emerald-500',
  },
];

export function RightsGovernanceSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="w-[520px] h-[520px] absolute right-[-100px] bottom-[-100px] bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="w-96 h-96 absolute left-[-180px] top-[-90px] bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Protect content and distribution boundaries with explicit rules
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Rights rules, territory scope, embargo periods, identity layers, and evidence-backed enforcement — governed by accountable owners.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-start items-start gap-4 w-full">
            <span className="text-slate-600 text-sm font-bold font-['Space_Grotesk'] tracking-wide">
              ACTIVE RIGHTS POLICIES
            </span>
            {policies.map((pol, idx) => (
              <div
                key={idx}
                className="w-full p-5 bg-slate-50 rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-4 shadow-sm"
              >
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                    {pol.title}
                  </h3>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold font-['Inter'] uppercase ${pol.status.cls}`}>
                    {pol.status.text}
                  </span>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-500 block">Audience Class</span>
                    <span className="text-slate-900 font-semibold font-['Inter']">{pol.audience}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Territory</span>
                    <span className="text-slate-900 font-semibold font-['Inter']">{pol.territory}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Effective Period</span>
                    <span className="text-slate-900 font-semibold font-['Inter']">{pol.period}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Accountable Owner</span>
                    <span className="text-slate-900 font-semibold font-['Inter']">{pol.owner}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 w-full p-6 lg:p-8 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col justify-start items-start gap-6 shadow-sm">
            <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk'] tracking-wide">
              5 LAYERS OF MEDIA GOVERNANCE
            </span>
            <div className="w-full flex flex-col justify-start items-start gap-3">
              {layers.map((lyr, idx) => (
                <div
                  key={idx}
                  className={`w-full p-3.5 bg-white rounded-lg border ${lyr.borderCls} flex flex-col justify-start items-start gap-1`}
                >
                  <span className={`text-sm font-bold font-['Space_Grotesk'] ${lyr.textCls}`}>
                    {lyr.step}
                  </span>
                  <span className="text-slate-600 text-xs font-normal font-['Inter']">
                    {lyr.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
