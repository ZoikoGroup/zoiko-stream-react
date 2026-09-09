import React from 'react';

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-r from-slate-900/90 via-violet-900/80 to-teal-400/50 px-6 sm:px-12 lg:px-20 py-12 lg:py-14 text-white">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-3.5">
        <div className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
          <span className="text-[#40C4AA] text-xs font-mono uppercase tracking-wide font-normal">
            LEGAL
          </span>
        </div>
        <div className="max-w-[660px]">
          <h1 className="text-white text-3xl sm:text-4xl font-semibold font-['Space_Grotesk'] leading-tight sm:leading-10">
            Find the current ZoikoStream legal
            <br className="hidden sm:block" />
            information you need.
          </h1>
        </div>
        <div className="max-w-[640px]">
          <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
            Use Legal overview to navigate current ZoikoStream legal documents. The navigation label identifies the destination; each document&apos;s operative title, scope, version, effective state, and legal meaning come from its own approved source.
          </p>
        </div>
      </div>
    </section>
  );
}
