import React from 'react';
import Image from 'next/image';

import bg9 from '@/public/images/resources-changelog/section-9bg.png';
import img6 from '@/public/images/resources-changelog/Card-Image (11).png';
import img7 from '@/public/images/resources-changelog/Card-Image (12).png';
import img8 from '@/public/images/resources-changelog/Card-Image (13).png';
import img9 from '@/public/images/resources-changelog/Card-Image (14).png';

const FEATURES = [
  {
    title: 'Keyboard Navigation',
    description:
      'Full keystroke sequence compliance allows complete operation without a cursor device.',
    image: img6,
  },
  {
    title: 'Screen Reader Support',
    description:
      'Rigid ARIA element hierarchies deliver exact descriptive audio rendering.',
    image: img7,
  },
  {
    title: 'Semantic Structure',
    description:
      'Deterministic HTML layouts map directly to expected assistive tech trees.',
    image: img8,
  },
  {
    title: 'Responsive Design',
    description:
      'Fluid proportional scales preserve complete usability across viewport widths.',
    image: img9,
  },
];

export default function ChangelogBuiltForDevelopersSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg9}
          alt="Built for Developers Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Built for every developer
        </h2>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all group"
          >
            <div className="relative w-full h-28 bg-gray-950 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full p-5 flex flex-col justify-start items-start gap-2 flex-1">
              <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                {item.title}
              </h3>
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
