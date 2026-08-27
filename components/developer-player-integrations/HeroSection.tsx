import React from 'react';
import Image from 'next/image';

const pills = [
  'No secrets in browser',
  'Browser behavior varies',
  'Secure playback server-side',
  'Registry-verified compatibility',
];

const codeSnippet = `const player = await ZoikoStream.createPlayer({
  id: "zoiko-viewport-01",
  token: "tkn_sec_01ae38...",
  autoplay: true
});`;

export function HeroSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/30 border-b border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-player-integration/bg (9).png"
          alt="Player Integration Hero Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 flex-1 max-w-[680px] flex flex-col justify-start items-start gap-8">
        <div className="px-3 py-1.5 rounded-full border border-teal-400 w-fit">
          <span className="text-teal-400 text-xs font-bold uppercase tracking-wide">
            PLAYER INTEGRATION
          </span>
        </div>

        <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight lg:leading-[60px]">
          Embed playback with a production-ready path.
        </h1>

        <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
          Move from a playback-ready live stream or video asset to an accessible, observable player integration with explicit browser, security, lifecycle, and recovery behavior.
        </p>

        <div className="flex flex-wrap items-center gap-2">
          {pills.map((pill, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 bg-gray-800 rounded-full border border-gray-800 text-slate-400 text-xs"
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
            <span className="text-gray-950 text-base font-bold">Start building</span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-slate-400 flex items-center justify-center cursor-pointer hover:border-white transition-colors">
            <span className="text-white text-base font-bold">See first playback</span>
          </div>
        </div>
      </div>

      {/* Right Box: INTEGRATION GATEWAY */}
      <div className="relative z-10 w-full lg:w-[520px] p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-6 shadow-2xl backdrop-blur-md">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-teal-400" />
            <span className="text-white text-xs font-bold uppercase">
              INTEGRATION GATEWAY
            </span>
          </div>
          <span className="px-2 py-0.5 bg-emerald-500/10 rounded text-emerald-500 text-[10px] font-bold uppercase">
            READY
          </span>
        </div>

        <div className="w-full p-5 bg-gray-800 rounded-xl border border-gray-800 flex flex-col gap-3">
          <span className="text-teal-400 text-sm font-bold">ENTITLEMENT COMPLETED</span>
          <pre className="text-slate-400 text-xs leading-relaxed whitespace-pre-wrap">
            {codeSnippet}
          </pre>
        </div>

        <div className="w-full flex gap-3">
          <div className="flex-1 p-3 bg-gray-800 rounded-lg flex flex-col gap-1">
            <span className="text-slate-400 text-xs uppercase">BROWSER TARGET</span>
            <span className="text-white text-base font-bold">Chrome 122+ / Safari 17</span>
          </div>
          <div className="flex-1 p-3 bg-gray-800 rounded-lg flex flex-col gap-1">
            <span className="text-slate-400 text-xs uppercase">LIFECYCLE STATUS</span>
            <span className="text-teal-400 text-base font-bold">Active-Idle</span>
          </div>
        </div>
      </div>
    </section>
  );
}
