import React from 'react';
import Image from 'next/image';

export function ReadyToGoFurtherCtaSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-zinc-950 border-b border-gray-800 flex flex-col justify-center items-center gap-8 overflow-hidden text-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stream-monitoring/bg.jpg"
          alt="CTA Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 max-w-[700px] flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
          <span className="text-teal-300 text-xs font-bold font-mono uppercase tracking-wider">
            READY TO GO FURTHER?
          </span>
        </div>

        <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
          Start building with evidence-first monitoring.
        </h2>

        <p className="text-neutral-300 text-sm leading-6 max-w-[560px]">
          Check a stream, open the docs, or talk to an expert about custom scale and governance needs.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <div className="px-7 py-3.5 bg-gradient-to-r from-teal-300 to-blue-400 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
            <span className="text-gray-800 text-base font-semibold">Start building</span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-white/30 flex items-center justify-center cursor-pointer hover:border-white transition-colors">
            <span className="text-white text-base font-semibold">Talk to an expert</span>
          </div>
        </div>
      </div>
    </section>
  );
}
