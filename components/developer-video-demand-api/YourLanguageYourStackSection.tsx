import React from 'react';
import Image from 'next/image';

const langSamples = [
  {
    title: 'Direct upload',
    desc: 'Browser/mobile client transfer with scoped authorization.',
    date: 'v1 · tested Aug 2026',
  },
  {
    title: 'Server upload',
    desc: 'Backend-to-ZoikoStream transfer pattern.',
    date: 'v1 · tested Aug 2026',
  },
  {
    title: 'Status handling',
    desc: 'Webhook receiver with fallback polling.',
    date: 'v1 · tested Aug 2026',
  },
  {
    title: 'Player handoff',
    desc: 'Ready-asset to embedded player.',
    date: 'v1 · tested Aug 2026',
  },
];

export function YourLanguageYourStackSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-zinc-950 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/video-api/CtaBackground.png"
          alt="Language Stack Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-900/90 to-zinc-950/95" />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
            <span className="text-teal-400 text-xs font-mono font-bold uppercase tracking-wide">
              YOUR LANGUAGE, YOUR STACK
            </span>
          </div>

          <h2 className="text-slate-100 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Use the same lifecycle in the language your application already uses.
          </h2>

          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7 max-w-[760px]">
            Every sample below is traceable to a maintained source and tested against the current API version.
          </p>
        </div>

        {/* 2 Column Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left 4 Sample Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {langSamples.map((s, idx) => (
              <div
                key={idx}
                className="p-4 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-between h-52 backdrop-blur-md"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-100 text-xs font-bold font-mono">{s.title}</h3>
                  <p className="text-slate-400 text-xs font-normal leading-4">{s.desc}</p>
                </div>

                <span className="text-slate-500 text-[10px] font-mono">{s.date}</span>
              </div>
            ))}
          </div>

          {/* Right Image Card */}
          <div className="lg:col-span-4 w-full h-56 relative rounded-2xl overflow-hidden bg-slate-900 shadow-xl">
            <Image
              src="/images/developer-vod-api/image (3).png"
              alt="Stack Code Visual"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
