import React from 'react';
import Image from 'next/image';

import bg7 from '@/public/images/resource-accessibility/section-7bg.png';

const COMBINATIONS = [
  {
    combo: 'NVDA + Chrome',
    webApp: 'Tested ✓',
    sdk: 'Tested ✓',
    console: 'Tested ✓',
    mobile: '-',
  },
  {
    combo: 'JAWS + Edge',
    webApp: 'Tested ✓',
    sdk: 'Tested ✓',
    console: 'Partial',
    mobile: '-',
  },
  {
    combo: 'VoiceOver + Safari',
    webApp: 'Tested ✓',
    sdk: 'Tested ✓',
    console: 'Tested ✓',
    mobile: 'Tested ✓',
  },
  {
    combo: 'TalkBack + Chrome Android',
    webApp: '-',
    sdk: 'Tested ✓',
    console: '-',
    mobile: 'Tested ✓',
  },
];

export default function AccessibilityTestedTechSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-gray-950 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg7}
          alt="Tested Technology Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Tested assistive technology support
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Only verified user agent combinations are published here. Absence does not imply non-compliance.
        </p>
      </div>

      {/* Table Box */}
      <div className="relative z-10 w-full p-6 bg-zinc-900/80 backdrop-blur-xs rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start overflow-x-auto shadow-md">
        <div className="min-w-[650px] w-full flex flex-col">
          {/* Header Row */}
          <div className="w-full p-3 bg-slate-900 flex justify-start items-center gap-3">
            <div className="w-56 text-white text-xs font-bold font-['Space_Grotesk']">
              Combination (AT + Browser)
            </div>
            <div className="flex-1 text-center text-white text-xs font-bold font-['Space_Grotesk']">
              Web App
            </div>
            <div className="flex-1 text-center text-white text-xs font-bold font-['Space_Grotesk']">
              Player SDK
            </div>
            <div className="flex-1 text-center text-white text-xs font-bold font-['Space_Grotesk']">
              Admin Console
            </div>
            <div className="flex-1 text-center text-white text-xs font-bold font-['Space_Grotesk']">
              Mobile Player
            </div>
          </div>

          {/* Rows */}
          {COMBINATIONS.map((row, idx) => (
            <div
              key={idx}
              className="w-full p-4 border-b border-gray-800 flex justify-start items-center gap-3 hover:bg-gray-800/40 transition-colors"
            >
              <div className="w-56 text-white text-sm font-bold font-['Inter']">
                {row.combo}
              </div>
              <div className="flex-1 text-center text-teal-400 text-base font-bold font-['Space_Grotesk']">
                {row.webApp}
              </div>
              <div className="flex-1 text-center text-teal-400 text-base font-bold font-['Space_Grotesk']">
                {row.sdk}
              </div>
              <div className={`flex-1 text-center text-base font-bold font-['Space_Grotesk'] ${row.console === 'Partial' ? 'text-amber-300' : row.console === '-' ? 'text-slate-500' : 'text-teal-400'}`}>
                {row.console}
              </div>
              <div className={`flex-1 text-center text-base font-bold font-['Space_Grotesk'] ${row.mobile === '-' ? 'text-slate-500' : 'text-teal-400'}`}>
                {row.mobile}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
