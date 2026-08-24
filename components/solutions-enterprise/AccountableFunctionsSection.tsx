import React from 'react';
import Image from 'next/image';
import bg167 from '@/public/images/Enterprises/bg (167).png';

const roles = [
  {
    title: 'Executive Sponsor',
    badge: 'Approve',
    badgeCls: 'bg-slate-100 border-slate-300 text-slate-600',
    desc: 'Owns business outcomes, global budget approvals, and compliance verification signoffs.',
    impact: 'Strategic platform deployment approval',
    scope: 'Read-only compliance summary view',
    img: '/images/Enterprises/Role-Image.png',
  },
  {
    title: 'Media/Communications Operator',
    badge: 'Operate',
    badgeCls: 'bg-slate-100 border-slate-300 text-slate-600',
    desc: 'Coordinates broadcast events, selects active configurations, and monitors real-time stream setups.',
    impact: 'Configuring direct ingestion routes',
    scope: 'Producer control dashboard',
    img: '/images/Enterprises/Role-Image (1).png',
  },
  {
    title: 'IT/Platform Administrator',
    badge: 'Full',
    badgeCls: 'bg-sky-100 border-sky-400 text-sky-700',
    desc: 'Manages platform-wide integration, SAML SSO parameters, and structural API boundaries.',
    impact: 'SSO configuration parameters',
    scope: 'System administration panel',
    img: '/images/Enterprises/Role-Image (2).png',
  },
  {
    title: 'Security/Identity Officer',
    badge: 'Full',
    badgeCls: 'bg-sky-100 border-sky-400 text-sky-700',
    desc: 'Establishes secure playback conditions, token signing keys, and reviews detailed administrative audit logs.',
    impact: 'Token parameters and key rotation',
    scope: 'Security logs and key configuration',
    img: '/images/Enterprises/Role-Image (3).png',
  },
  {
    title: 'Compliance/Legal Counsel',
    badge: 'Requires review',
    badgeCls: 'bg-slate-100 border-slate-300 text-slate-600',
    desc: 'Ensures regulatory compliance, regional data boundaries, and long-term recording archive rules.',
    impact: 'Regional data replication boundaries',
    scope: 'Compliance matrix reporting',
    img: '/images/Enterprises/Role-Image (4).png',
  },
  {
    title: 'Accessibility Owner',
    badge: 'Operate',
    badgeCls: 'bg-slate-100 border-slate-300 text-slate-600',
    desc: 'Coordinates multi-language closed captions, alternative audio feeds, and mandatory WCAG compliance.',
    impact: 'Automated transcript target accuracy',
    scope: 'Audio layout and subtitle controls',
    img: '/images/Enterprises/Role-Image (5).png',
  },
  {
    title: 'SRE/Operations Lead',
    badge: 'Operate',
    badgeCls: 'bg-slate-100 border-slate-300 text-slate-600',
    desc: 'Monitors pipeline latency, hot standby failover tests, and active incident response configurations.',
    impact: 'Fallback failover manual trigger',
    scope: 'Real-time telemetry status displays',
    img: '/images/Enterprises/Role-Image (6).png',
  },
  {
    title: 'Procurement/Vendor Manager',
    badge: 'View',
    badgeCls: 'bg-slate-100 border-slate-300 text-slate-600',
    desc: 'Owns custom service level agreements, billing metrics, and commercial renewal scopes.',
    impact: 'Billing metrics verification',
    scope: 'Cost reporting and license configuration',
    img: '/images/Enterprises/Role-Image.png',
  },
];

export function AccountableFunctionsSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg167}
          alt="Accountable Functions Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Enterprise media spans multiple accountable functions.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Identify stakeholders, separation of duties, and explicit review hierarchies without assuming departments must operate in total silos.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((r, idx) => (
            <div
              key={idx}
              className="p-5 bg-slate-50/90 rounded-xl border border-gray-200 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow overflow-hidden backdrop-blur-sm"
            >
              <div className="relative w-24 h-24 rounded-lg flex-shrink-0 bg-slate-200 overflow-hidden">
                <Image
                  src={r.img}
                  alt={r.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-start items-start gap-2">
                <div className="w-full flex justify-between items-center gap-1">
                  <h3 className="text-slate-900 text-sm font-bold font-['Space_Grotesk'] leading-tight">
                    {r.title}
                  </h3>
                  <span className={`px-2 py-0.5 rounded-full border text-[10px] font-semibold font-['Inter'] flex-shrink-0 ${r.badgeCls}`}>
                    {r.badge}
                  </span>
                </div>
                <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-4">
                  {r.desc}
                </p>
                <div className="text-[10px] font-['Inter'] text-slate-500 leading-4">
                  <strong className="text-slate-900">Decision Impact: </strong>{r.impact} · <strong className="text-slate-900">UI Scope: </strong>{r.scope}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
