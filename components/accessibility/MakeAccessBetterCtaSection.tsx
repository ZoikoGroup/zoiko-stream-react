import React from 'react';
import Image from 'next/image';

export function MakeAccessBetterCtaSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/accessibility/bg (2).jpg"
          alt="CTA Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 max-w-[1216px] mx-auto flex flex-col justify-start items-center gap-8 text-center">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-blue-300 text-xs font-bold uppercase tracking-wider">
            HELP US MAKE ACCESS BETTER
          </span>
        </div>

        <h2 className="max-w-[700px] text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[50px]">
          Report a barrier, request help, or use the specialist route that best matches what you need.
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
          <div className="px-7 py-3.5 bg-gradient-to-r from-teal-300 to-blue-400 rounded-lg flex justify-center items-center cursor-pointer">
            <span className="text-gray-900 text-base font-semibold">
              Report an accessibility barrier
            </span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-white/30 flex justify-center items-center cursor-pointer">
            <span className="text-white text-base font-semibold">
              Request a Demo
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 pt-4 text-sm font-semibold text-blue-300">
          <span className="cursor-pointer hover:underline">Support</span>
          <span className="cursor-pointer hover:underline">Live Events</span>
          <span className="cursor-pointer hover:underline">Trust Center</span>
          <span className="cursor-pointer hover:underline">Careers</span>
          <span className="cursor-pointer hover:underline">Accessibility Statement</span>
        </div>
      </div>
    </section>
  );
}
