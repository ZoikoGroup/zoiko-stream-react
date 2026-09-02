import React from 'react';
import Image from 'next/image';

import bg147 from '@/public/images/Organization-overview/bg (147).png';

const STATES = [
  {
    title: 'Current',
    badge: 'ACTIVE',
    badgeStyle: 'bg-emerald-500/10 text-emerald-600',
    dotColor: 'bg-emerald-500',
    description: 'Active and mathematically verified under current operating cycle.',
  },
  {
    title: 'Review Required',
    badge: 'RE-EVALUATING',
    badgeStyle: 'bg-amber-500/10 text-amber-600',
    dotColor: 'bg-amber-500',
    description: 'Audit window is closing. Ongoing evaluation of latest control period.',
  },
  {
    title: 'Superseded',
    badge: 'ARCHIVED',
    badgeStyle: 'bg-blue-500/10 text-blue-600',
    dotColor: 'bg-blue-500',
    description: 'A newer version of this evidence exists. Kept for retrospective reference.',
  },
  {
    title: 'Expired',
    badge: 'INACTIVE',
    badgeStyle: 'bg-gray-500/10 text-gray-500',
    dotColor: 'bg-gray-500',
    description: 'No longer valid for active compliance logic. Superseded or abandoned.',
  },
  {
    title: 'Withdrawn',
    badge: 'WITHDRAWN',
    badgeStyle: 'bg-red-500/10 text-red-600',
    dotColor: 'bg-red-500',
    description: 'Voluntarily removed due to changes in deployment or scope definitions.',
  },
  {
    title: 'Not Established',
    badge: 'UNMAPPED',
    badgeStyle: 'bg-gray-300/20 text-gray-500',
    dotColor: 'bg-gray-300',
    description: 'Scope currently outside defined control mapping boundaries.',
  },
];

export default function TrustCenterEvidenceStatesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-white overflow-hidden">
      {/* Background overlay snippet */}
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

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-3">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Trust evidence states
        </h2>
        <p className="text-slate-500 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          We categorize all reports and compliance artifacts into strict lifecycle states. You always know if a document is active, under audit review, or replaced.
        </p>
      </div>

      {/* Lifecycle State Cards */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {STATES.map((item, index) => (
          <div
            key={index}
            className="p-5 bg-white/90 backdrop-blur-xs rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start gap-3 shadow-xs hover:border-blue-500/50 transition-all"
          >
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className={`size-2 ${item.dotColor} rounded-full`} />
                <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
              </div>
              <div className={`px-2 py-[3px] rounded-sm ${item.badgeStyle}`}>
                <span className="text-[10px] font-bold font-['Space_Grotesk']">
                  {item.badge}
                </span>
              </div>
            </div>
            <p className="text-slate-500 text-xs font-normal font-['Inter'] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Access Tiers */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        <div className="p-6 bg-white/90 backdrop-blur-xs rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start gap-3 shadow-xs">
          <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
            Public - Inspect without identity capture
          </h3>
          <p className="text-slate-500 text-sm font-normal font-['Inter'] leading-relaxed">
            No email wall or gate. High-level security overviews, SOC 2 bridge letters, and accessibility statements can be downloaded instantly.
          </p>
        </div>

        <div className="p-6 bg-white/90 backdrop-blur-xs rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start gap-3 shadow-xs">
          <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
            Controlled - Approved access workflow required
          </h3>
          <p className="text-slate-500 text-sm font-normal font-['Inter'] leading-relaxed">
            Detailed reports, penetration testing briefs, and data flow diagrams containing sensitive infrastructure specifics require a secure signature.
          </p>
        </div>
      </div>
    </section>
  );
}
