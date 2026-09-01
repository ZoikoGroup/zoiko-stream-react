import React from 'react';
import Image from 'next/image';

import bg147 from '@/public/images/Organization-overview/bg (147).png';
import img21 from '@/public/images/resource-accessibility/card-image (21).png';
import img22 from '@/public/images/resource-accessibility/card-image (22).png';
import img23 from '@/public/images/resource-accessibility/card-image (23).png';
import img24 from '@/public/images/resource-accessibility/card-image (24).png';

const STATS = [
  {
    stat: '8',
    statStyle: 'text-blue-600 text-3xl font-bold',
    title: 'Conformance Records',
    description: 'Published reviews covering web apps, SDKs, and native mobile player platforms.',
    image: img21,
  },
  {
    stat: '4',
    statStyle: 'text-rose-500 text-3xl font-bold',
    title: 'Known Limitations',
    description: 'Identified challenges with active workarounds and transparent remediation status.',
    image: img22,
  },
  {
    stat: 'Jan 2026',
    statStyle: 'text-emerald-600 text-2xl font-bold',
    title: 'Last Updated',
    description: 'Regular schedule updates aligning with the WCAG 2.2 AA testing roadmap cycles.',
    image: img23,
  },
  {
    stat: '24h',
    statStyle: 'text-teal-600 text-2xl font-bold',
    title: 'Support SLA',
    description: 'Direct channels to report barriers, request specialized formats, or find general help.',
    image: img24,
  },
];

export default function AccessibilityGlanceSection() {
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
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-3">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Accessibility at a glance
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          A quick summary of our ongoing conformance testing, limitations status, and dedicated support.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50/90 backdrop-blur-xs rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden shadow-xs hover:border-blue-500/50 transition-all group"
          >
            <div className="relative w-full h-36 bg-gray-100 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-start items-start gap-2 flex-1">
              <div className={`font-['Space_Grotesk'] ${item.statStyle}`}>
                {item.stat}
              </div>
              <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                {item.title}
              </h3>
              <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
