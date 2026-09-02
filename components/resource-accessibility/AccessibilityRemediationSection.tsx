import React from 'react';
import Image from 'next/image';

import bg147 from '@/public/images/Organization-overview/bg (147).png';
import img33 from '@/public/images/resource-accessibility/card-image (33).png';
import img34 from '@/public/images/resource-accessibility/card-image (34).png';
import img35 from '@/public/images/resource-accessibility/card-image (35).png';

const REMEDIATION = [
  {
    title: 'Keyboard Focus Traps',
    badge: 'Resolved & Verified',
    badgeBg: 'bg-emerald-100 text-emerald-600',
    description:
      'Completed auditing and patched keyboard tab focus loops inside nested media setup dialog panels.',
    target: 'Verified: Jan 2026',
    image: img33,
  },
  {
    title: 'Chart Contrast Upgrade',
    badge: 'In Development',
    badgeBg: 'bg-sky-100 text-sky-700',
    description:
      'Upgrading raw contrast ratios across the core telemetry graphs to comfortably clear the 4.5:1 WCAG AA baseline threshold.',
    target: 'Target: Q1 2026',
    image: img34,
  },
  {
    title: 'Screen Reader Chat Queues',
    badge: 'Testing',
    badgeBg: 'bg-amber-100 text-amber-600',
    description:
      'Integrating ARIA live-region announcements with chat pipeline updates to ensure seamless reading flow.',
    target: 'Target: Q2 2026',
    image: img35,
  },
];

export default function AccessibilityRemediationSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
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
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Remediation progress
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Approved remediation status tracking. Dates appear only when formally verified and approved.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {REMEDIATION.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50/90 backdrop-blur-xs rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden shadow-xs hover:border-blue-500/50 transition-all group"
          >
            <div className="relative w-full h-40 bg-gray-100 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-between items-start gap-3 flex-1">
              <div className="flex flex-col gap-2">
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                    {item.title}
                  </h3>
                  <div className={`px-2 py-1 ${item.badgeBg} rounded-md shrink-0`}>
                    <span className="text-xs font-semibold font-['Inter']">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-gray-200 w-full">
                <span className="text-slate-900 text-xs font-bold font-['Space_Grotesk']">
                  {item.target}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
