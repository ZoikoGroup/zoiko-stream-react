import React from 'react';
import Image from 'next/image';

import bg7 from '@/public/images/resources-changelog/section-7bg.png';
import searchGraphic from '@/public/images/resources-changelog/Search-Interactive-Graphic.png';

const CRITERIA = [
  {
    num: '01',
    title: 'Exact Match',
    description: 'Resolves exact matching API, SDK method signatures or protocol headers.',
  },
  {
    num: '02',
    title: 'Title Phrase',
    description: 'Indices and scans titles for relevant release keywords.',
  },
  {
    num: '03',
    title: 'Object/Version Prefix',
    description: 'Filters down through targeted semantic version codes.',
  },
  {
    num: '04',
    title: 'Summary Tokens',
    description: 'Searches body prose and developer documentation references.',
  },
];

export default function ChangelogFindWhatChangedSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg7}
          alt="Find What Changed Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Find exactly what changed
        </h2>
      </div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row justify-start items-center gap-10 lg:gap-12">
        {/* Left Criteria Card */}
        <div className="flex-1 w-full p-6 sm:p-8 bg-zinc-900/95 backdrop-blur-xs rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start gap-5 shadow-xl">
          <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk'] tracking-wide uppercase">
            DETERMINISTIC RANKING CRITERIA
          </span>

          <div className="w-full flex flex-col justify-start items-start gap-3">
            {CRITERIA.map((item, index) => (
              <div
                key={index}
                className="w-full p-3.5 bg-gray-950 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex items-center gap-4"
              >
                <span className="text-teal-400 text-lg font-bold font-['Space_Grotesk'] shrink-0">
                  {item.num}
                </span>
                <div className="flex flex-col justify-start items-start gap-0.5">
                  <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-normal font-['Inter']">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Search Visualization Box */}
        <div className="w-full lg:w-[480px] h-96 p-6 bg-zinc-900/95 backdrop-blur-xs rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start gap-4 overflow-hidden shrink-0 shadow-xl">
          <span className="text-white text-sm font-bold font-['Space_Grotesk'] tracking-wide uppercase">
            SEARCH VISUALIZATION
          </span>
          <div className="relative w-full flex-1 rounded-lg overflow-hidden border border-gray-800">
            <Image
              src={searchGraphic}
              alt="Search Visualization Graphic"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
