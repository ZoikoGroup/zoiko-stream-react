import React from 'react';
import Image from 'next/image';

const policyCards = [
  {
    title: 'Public',
    desc: 'Anyone with the playback ID can view. No token required.',
  },
  {
    title: 'Protected / signed',
    desc: 'Playback requires a short-lived signed token issued by your server.',
    link: 'Secure playback →',
  },
  {
    title: 'Player integration',
    desc: 'Embed or SDK player handoff, preserving this asset\'s task context.',
    link: 'Player integration →',
  },
];

export function HandOffToYourPlayerSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-zinc-950 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/video-api/bg (51).png"
          alt="Hand Off Background"
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
              HAND OFF TO YOUR PLAYER
            </span>
          </div>

          <h2 className="text-slate-100 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Hand a ready asset to playback without exposing upload credentials.
          </h2>

          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7 max-w-[760px]">
            Access policy options — public, protected, signed, DRM — appear only if your plan supports them. Protected flows deep-link to Secure playback.
          </p>
        </div>

        {/* 3 Policy Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {policyCards.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-between h-48 shadow-xl backdrop-blur-md"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-100 text-lg font-bold">{item.title}</h3>
                <p className="text-slate-400 text-xs font-normal leading-5">{item.desc}</p>
              </div>

              {item.link && (
                <span className="text-teal-400 text-xs font-semibold cursor-pointer hover:underline">
                  {item.link}
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="text-slate-500 text-xs font-mono">
          Viewer-facing code never receives your server API credential or upload authorization.
        </p>
      </div>
    </section>
  );
}
