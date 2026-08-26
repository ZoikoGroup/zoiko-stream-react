import React from 'react';
import Image from 'next/image';

const a11yCards = [
  {
    tag: 'WCAG 2.1 A',
    title: 'Keyboard Navigation',
    desc: 'All controls operable by keyboard. Logical focus order and visible focus.',
    img: '/images/sample-application/Card-Image (7).png',
  },
  {
    tag: 'WCAG 2.1 AA',
    title: 'Form Accessibility',
    desc: 'Explicit labels, instructions, error association. No placeholder-only labels.',
    img: '/images/sample-application/Card-Image (8).png',
  },
  {
    tag: 'A11Y READY',
    title: 'Screen Reader Support',
    desc: 'Status icons have text equivalents. No color-only signals.',
    img: '/images/sample-application/Card-Image (9).png',
  },
  {
    tag: 'FLUID DESIGN',
    title: 'Responsive Design',
    desc: 'Reflow at 320px and 200% zoom without losing information.',
    img: '/images/sample-application/Card-Image (10).png',
  },
];

export function AccessibilityInclusiveExampleExperienceSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sample-application/bg (6).png"
          alt="Accessibility Experience Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Accessibility and inclusive example experience
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Every interactive sample UI must be operable by keyboard with logical focus order.
          </p>
        </div>

        {/* 4 Cards Grid (2x2) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {a11yCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-xl backdrop-blur-md min-h-[300px]"
            >
              <div className="w-full h-40 relative bg-slate-900">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col gap-4">
                <div className="px-2 py-1 bg-gray-800 rounded-sm w-fit">
                  <span className="text-teal-400 text-xs font-bold font-mono">{item.tag}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <p className="text-slate-400 text-sm font-normal leading-5">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
