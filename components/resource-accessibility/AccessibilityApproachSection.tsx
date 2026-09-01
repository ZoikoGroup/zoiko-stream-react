import React from 'react';
import Image from 'next/image';

import img25 from '@/public/images/resource-accessibility/card-image (25).png';
import img26 from '@/public/images/resource-accessibility/card-image (26).png';
import img27 from '@/public/images/resource-accessibility/card-image (27).png';
import img28 from '@/public/images/resource-accessibility/card-image (28).png';

const APPROACHES = [
  {
    title: 'Inclusive Design',
    description:
      'We place user differences at the start of our process, designing interfaces that flex rather than demand conformity.',
    image: img25,
  },
  {
    title: 'Rigorous Evaluation',
    description:
      'Continuous automated testing paired with comprehensive expert manual reviews using assistive technologies.',
    image: img26,
  },
  {
    title: 'Iterative Progress',
    description:
      'We track limitations transparently, prioritizing remediation sprints alongside core platform features.',
    image: img27,
  },
  {
    title: 'Radical Candor',
    description:
      'We publish actual conformance states, methodology details, and concrete test environments for absolute trust.',
    image: img28,
  },
];

export default function AccessibilityApproachSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-gray-950 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          How we approach accessibility
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Accessibility is not a checklist; it is an integrated engineering and design discipline.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {APPROACHES.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all group"
          >
            <div className="relative w-full h-40 bg-gray-950 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-start items-start gap-3 flex-1">
              <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
