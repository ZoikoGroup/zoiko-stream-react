import React from 'react';
import Image from 'next/image';

import bg3 from '@/public/images/resources-changelog/section-3bg.png';
import img2 from '@/public/images/resources-changelog/Card-Image (83).png';
import img3 from '@/public/images/resources-changelog/Card-Image (84).png';
import img4 from '@/public/images/resources-changelog/Card-Image (85).png';
import img5 from '@/public/images/resources-changelog/Card-Image (86).png';
import img6 from '@/public/images/resources-changelog/Card-Image (87).png';
import img7 from '@/public/images/resources-changelog/Card-Image (88).png';
import img8 from '@/public/images/resources-changelog/Card-Image (89).png';
import img9 from '@/public/images/resources-changelog/Card-Image (90).png';
import img10 from '@/public/images/resources-changelog/Card-Image (91).png';

const CLASSIFICATIONS = [
  {
    title: 'Added',
    badge: 'ADDED',
    badgeStyle: 'bg-green-500/10 text-green-500 outline-green-500',
    description: 'Completely new features, APIs, endpoints, or SDK capabilities.',
    image: img2,
  },
  {
    title: 'Changed',
    badge: 'CHANGED',
    badgeStyle: 'bg-blue-500/10 text-blue-500 outline-blue-500',
    description: 'Modification of existing behaviors or non-breaking API schemas.',
    image: img3,
  },
  {
    title: 'Fixed',
    badge: 'FIXED',
    badgeStyle: 'bg-slate-500/10 text-slate-400 outline-slate-500',
    description: 'Bugs, errors, and behavioral glitches patched successfully.',
    image: img4,
  },
  {
    title: 'Performance',
    badge: 'PERFORMANCE',
    badgeStyle: 'bg-teal-400/10 text-teal-400 outline-teal-400',
    description: 'Optimization updates that reduce CPU, memory, or pipeline latency.',
    image: img5,
  },
  {
    title: 'Security',
    badge: 'SECURITY',
    badgeStyle: 'bg-blue-500/10 text-blue-500 outline-blue-500',
    description: 'Cryptographic upgrades, auth patches, and vulnerability remediations.',
    image: img6,
  },
  {
    title: 'Deprecated',
    badge: 'DEPRECATED',
    badgeStyle: 'bg-amber-400/10 text-amber-400 outline-amber-400',
    description: 'Outdated features scheduled for retirement. Alternatives available.',
    image: img7,
  },
  {
    title: 'Breaking',
    badge: 'BREAKING',
    badgeStyle: 'bg-red-400/10 text-red-400 outline-red-400',
    description: 'Backwards-incompatible changes demanding immediate codebase migrations.',
    image: img8,
  },
  {
    title: 'Retired/Sunset',
    badge: 'RETIRED/SUNSET',
    badgeStyle: 'bg-red-400/10 text-red-400 outline-red-400/80',
    description: 'Completely de-comissioned features. No longer operational.',
    image: img9,
  },
  {
    title: 'Documentation',
    badge: 'DOCUMENTATION',
    badgeStyle: 'bg-slate-500/10 text-slate-400 outline-slate-500',
    description: 'Updates to references, guides, tutorials, or developer specs.',
    image: img10,
  },
];

export default function ChangelogClassificationSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg3}
          alt="Classification Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          How changes are classified
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
          Every update added to our ledger is explicitly categorized to enable structured automated filtering and predictable impact analysis across your stack.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CLASSIFICATIONS.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all group"
          >
            <div className="relative w-full h-24 bg-gray-950 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full p-4 sm:p-5 flex flex-col justify-start items-start gap-3 flex-1">
              <div className="w-full flex justify-between items-center">
                <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <div className={`px-2 py-0.5 rounded-sm outline outline-1 outline-offset-[-1px] ${item.badgeStyle}`}>
                  <span className="text-[10px] font-bold font-['Inter']">
                    {item.badge}
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
