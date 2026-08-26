import React from 'react';
import Image from 'next/image';

const subLinks = [
  'SDKs',
  'Sample applications',
  'Error handling',
  'Rate limits',
  'Changelog',
  'System status',
];

export function NextStepCtaSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-zinc-950 border-b border-gray-800 flex flex-col justify-start items-start gap-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/video-api/bg (49).png"
          alt="Next Step Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-900/90 to-zinc-950/95" />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-10">
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-xs font-mono font-bold uppercase tracking-wide">
              NEXT STEP
            </span>
          </div>

          <h2 className="text-slate-100 text-3xl lg:text-5xl font-bold leading-tight lg:leading-[52px]">
            Ready to add on-demand video to your product?
          </h2>

          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7 max-w-[640px]">
            Build against a source-governed API contract with explicit upload, processing, playback, and operational handoffs.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
            <span className="text-slate-950 text-base font-semibold">Start building</span>
          </div>
          <div className="px-7 py-3.5 bg-zinc-100 rounded-lg border border-gray-800 flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
            <span className="text-zinc-900 text-base font-semibold">Read API reference</span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-gray-800 flex items-center justify-center cursor-pointer hover:border-gray-600 transition-colors">
            <span className="text-zinc-900 text-base font-semibold">Talk to an expert</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 pt-4 text-slate-400 text-sm font-normal">
          {subLinks.map((link, idx) => (
            <span key={idx} className="cursor-pointer hover:text-white transition-colors">
              {link}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
