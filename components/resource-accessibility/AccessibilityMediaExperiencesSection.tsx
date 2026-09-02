import React from 'react';
import Image from 'next/image';

import bg147 from '@/public/images/Organization-overview/bg (147).png';
import img36 from '@/public/images/resource-accessibility/card-image (36).png';
import img37 from '@/public/images/resource-accessibility/card-image (37).png';
import img38 from '@/public/images/resource-accessibility/card-image (38).png';
import img39 from '@/public/images/resource-accessibility/card-image (39).png';

const FEATURES = [
  {
    title: 'Captions & Subtitles',
    description:
      'Native VTT/SRT transcription streams supporting user contrast sizing, regional language tracks, and positioning toggles.',
    image: img36,
  },
  {
    title: 'Interactive Transcripts',
    description:
      'Complete audio descriptions presented as fully searchable, screen-reader compatible transcripts alongside player timeline markers.',
    image: img37,
  },
  {
    title: 'Keyboard Controls',
    description:
      'Comprehensive keyboard bindings for play, seek, volume, and captions, complete with highly visible focus rings.',
    image: img38,
  },
  {
    title: 'Motion & Contrast',
    description:
      "Respecting 'prefers-reduced-motion' and 'prefers-color-scheme' settings automatically across all user interface panels.",
    image: img39,
  },
];

export default function AccessibilityMediaExperiencesSection() {
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
          Accessibility in media experiences
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Direct technical implementation details of accessibility controls embedded natively inside the ZoikoStream player.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((item, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-xs rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden shadow-xs hover:border-blue-500/50 transition-all group"
          >
            <div className="relative w-full h-40 bg-gray-100 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-start items-start gap-3 flex-1">
              <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
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
