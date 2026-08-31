import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg9 from '@/public/images/resource-videotutorial/bg (9).png';

export default function VideoTutorialCustomWorkflowCtaSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-36 bg-gray-950/90 flex flex-col justify-center items-center gap-10 border-b border-gray-800 overflow-hidden">
      {/* Background Image - bg (9).png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg9}
          alt="Custom Workflow CTA Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full max-w-[800px] flex flex-col justify-start items-center gap-4 text-center">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[56px]">
          Need help with a custom workflow?
        </h2>
        <p className="text-white text-base sm:text-lg font-normal font-['Inter'] leading-7">
          When your requirements need enterprise customization, dedicated support, or a guided implementation review, our solutions team can help.
        </p>
      </div>

      <div className="relative z-10 w-full flex flex-wrap justify-center items-center gap-4">
        <Link
          href="/contact-us"
          className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
        >
          <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
            Talk to an Expert
          </span>
        </Link>
        <Link
          href="#tutorials"
          className="px-7 py-3.5 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-slate-400 flex justify-center items-center hover:bg-white/5 transition-colors"
        >
          <span className="text-white text-base font-bold font-['Space_Grotesk']">
            Browse all tutorials
          </span>
        </Link>
      </div>

      <p className="relative z-10 text-white text-xs font-normal font-['Space_Grotesk'] text-center max-w-xl">
        Core tutorials remain accessible without requiring a sales conversation. Expert assistance is for custom requirements.
      </p>
    </section>
  );
}
