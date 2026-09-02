import React from 'react';
import Image from 'next/image';

import bg147 from '@/public/images/Organization-overview/bg (147).png';
import img1 from '@/public/images/resource-release-notes/Class-Image (1).png';
import img2 from '@/public/images/resource-release-notes/Class-Image (2).png';
import img3 from '@/public/images/resource-release-notes/Class-Image (3).png';
import img4 from '@/public/images/resource-release-notes/Class-Image (4).png';
import img5 from '@/public/images/resource-release-notes/Class-Image (5).png';
import img6 from '@/public/images/resource-release-notes/Class-Image (6).png';
import img7 from '@/public/images/resource-release-notes/Class-Image (7).png';
import img0 from '@/public/images/resource-release-notes/Class-Image.png';

const CLASSES = [
  {
    title: 'Major Feature',
    badge: 'New Capability',
    badgeStyle: 'bg-blue-500/10 text-blue-600',
    description: 'Introduction of completely new API structures, codecs, or portal features.',
    image: img0,
  },
  {
    title: 'Enhancement',
    badge: 'Improvement',
    badgeStyle: 'bg-teal-400/10 text-teal-600',
    description: 'Upgrades to speed, resilience, or existing functionality without breaking backward compatibility.',
    image: img1,
  },
  {
    title: 'Structural Shifts',
    badge: 'Behavior Change',
    badgeStyle: 'bg-amber-500/10 text-amber-600',
    description: 'Modifications to default player logic, SDK fallbacks, or state routing.',
    image: img2,
  },
  {
    title: 'Bug Fixes',
    badge: 'Fix Summary',
    badgeStyle: 'bg-emerald-500/10 text-emerald-600',
    description: 'Resolution of system defects, edge case audio offsets, or browser-specific script loops.',
    image: img3,
  },
  {
    title: 'Performance',
    badge: 'Reliability',
    badgeStyle: 'bg-violet-500/10 text-violet-600',
    description: 'Resource overhead reductions, network latency decreases, and compute limit upgrades.',
    image: img4,
  },
  {
    title: 'Transitions',
    badge: 'Deprecation',
    badgeStyle: 'bg-red-500/10 text-red-600',
    description: 'Advance warnings and shutdown roadmaps for older protocol handlers and APIs.',
    image: img5,
  },
  {
    title: 'Trust & Auditing',
    badge: 'Security Note',
    badgeStyle: 'bg-emerald-500/10 text-emerald-600',
    description: 'Compliance validation records, authorization schema upgrades, and policy headers.',
    image: img6,
  },
  {
    title: 'Rollout States',
    badge: 'Availability',
    badgeStyle: 'bg-slate-500/10 text-slate-600',
    description: 'Schedules, geographic region deployment, and cloud migration timelines.',
    image: img7,
  },
];

export default function ReleaseNotesClassificationSection() {
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
          How releases are classified
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          We categorize releases deterministically so your team can quickly triage integration impacts.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CLASSES.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50/90 backdrop-blur-xs rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden shadow-xs hover:border-blue-500/50 transition-all group"
          >
            <div className="relative w-full h-28 bg-gray-100 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-4 flex flex-col justify-start items-start gap-3 flex-1">
              <div className={`px-2 py-0.5 rounded-sm ${item.badgeStyle}`}>
                <span className="text-xs font-semibold font-['Inter']">
                  {item.badge}
                </span>
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
