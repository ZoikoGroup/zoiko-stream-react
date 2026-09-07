import React from 'react';
import Image from 'next/image';
import section7Bg from '@/public/images/platform-video-analytics/section-7bg.png';
import cardImg0 from '@/public/images/platform-video-analytics/CardImage.png';
import cardImg1 from '@/public/images/platform-video-analytics/CardImage (1).png';
import cardImg2 from '@/public/images/platform-video-analytics/CardImage (2).png';

const SURFACES = [
  {
    image: cardImg0,
    title: 'Viewer Analytics',
    desc: 'Approved aggregate viewer and audience measures where current source supports them.',
    disclaimer: 'No unsupported identity rules, cross-device tracking, or demographic inference.',
  },
  {
    image: cardImg1,
    title: 'Quality of Experience',
    desc: 'Approved quality-of-experience metric families where current source supports them.',
    disclaimer: 'No unsourced startup time, rebuffering, or bitrate thresholds.',
  },
  {
    image: cardImg2,
    title: 'Playback Outcomes',
    desc: 'Source-backed playback and content outcome measures.',
    disclaimer: 'No assumed completion rates or engagement scoring.',
  },
];

export default function PlatformVideoAnalyticsSurfacesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-950 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* Background Image section-7bg.png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={section7Bg}
          alt="Surfaces Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col justify-start items-start gap-14">
        {/* Header Text */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="w-full text-slate-100 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[48px]">
            Playback, viewer and quality-of-experience analytics
          </h2>
          <p className="w-full text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Only source-approved metric families are surfaced. Exact metric names, viewer identity semantics, dimensions and formulas remain registry-controlled.
          </p>
        </div>

        {/* 3 Surface Cards Grid with Top Card Image Banners */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {SURFACES.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900/90 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-xs flex flex-col justify-between items-start overflow-hidden shadow-2xl group hover:outline-teal-400/50 transition-all"
            >
              {/* Top Banner Image */}
              <div className="relative w-full h-40 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Body Content */}
              <div className="w-full p-6 flex flex-col justify-between items-start gap-6 flex-1">
                <div className="w-full flex flex-col gap-3">
                  <h3 className="text-slate-100 text-xl font-bold font-['Space_Grotesk']">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="w-full pt-4 border-t border-gray-800">
                  <p className="text-slate-500 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                    {item.disclaimer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
