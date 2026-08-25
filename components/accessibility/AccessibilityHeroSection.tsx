import React from 'react';
import Image from 'next/image';

export function AccessibilityHeroSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 overflow-hidden border-b border-zinc-200">
      {/* Desktop Background */}
      <div className="hidden sm:block absolute inset-0 z-0">
        <Image
          src="/images/accessibility/desktop-herobg.png"
          alt="Accessibility Hero Background Desktop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/80 to-teal-900/40" />
      </div>

      {/* Mobile Background */}
      <div className="block sm:hidden absolute inset-0 z-0">
        <Image
          src="/images/accessibility/mobile-herobg.jpg"
          alt="Accessibility Hero Background Mobile"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/85 to-teal-900/50" />
      </div>

      <div className="relative z-10 max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-6">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-teal-300 rounded-full" />
          <span className="text-teal-300 text-xs font-bold uppercase tracking-wider">
            ACCESSIBILITY
          </span>
        </div>

        <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight lg:leading-[52px]">
          Accessibility support and <br /> feedback.
        </h1>

        <p className="max-w-[600px] text-gray-200 text-base font-normal leading-6">
          If you encounter a barrier using ZoikoStream, need accessibility assistance, or have a question about an accessible video experience, tell us what you need. You do not need to disclose a disability or diagnosis.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <div className="px-7 py-3.5 bg-gradient-to-r from-teal-300 to-blue-400 rounded-lg flex justify-center items-center cursor-pointer">
            <span className="text-gray-900 text-base font-semibold">
              Report an accessibility barrier
            </span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-white/30 flex justify-center items-center cursor-pointer">
            <span className="text-white text-base font-semibold">
              Request accessibility help
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-4 text-sm font-semibold text-blue-300">
          <span className="cursor-pointer hover:underline">Accessibility Statement</span>
          <span className="text-white/30 font-normal">•</span>
          <span className="cursor-pointer hover:underline">Existing customer? Get Support</span>
        </div>
      </div>
    </section>
  );
}
