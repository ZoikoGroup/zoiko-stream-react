import React from 'react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-900/60 border-b border-gray-800 flex flex-col justify-start items-start overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Media-communications-page/bg (174).png"
          alt="Hero Background Overlay"
          fill
          className="object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col lg:flex-row justify-start items-center gap-12">
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-start items-start gap-8">
          <div className="px-3.5 py-1.5 rounded-full border border-teal-400 inline-flex justify-center items-center">
            <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
              Media &amp; Communications
            </span>
          </div>

          <h1 className="text-white text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[60px]">
            Run professional media workflows with operational clarity
          </h1>

          <p className="text-stone-300 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Coordinate contribution, production, distribution, access, accessibility, monitoring, replay, analytics, and preservation through one governed media operating environment — with responsibilities and current state made explicit.
          </p>

          <div className="flex flex-col justify-start items-start gap-6">
            <div className="inline-flex justify-start items-center gap-4 flex-wrap">
              <div className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer">
                <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
                  Talk to an Expert
                </span>
              </div>
              <div className="px-7 py-3.5 rounded-lg border border-slate-400 flex justify-center items-center cursor-pointer">
                <span className="text-white text-base font-bold font-['Space_Grotesk']">
                  Explore the Platform
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Engine Card */}
        <div className="w-full lg:w-[520px] p-6 lg:p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-6 backdrop-blur-sm">
          <div className="w-full flex justify-between items-center">
            <span className="text-white text-sm font-bold font-['Space_Grotesk'] tracking-wide">
              MEDIA OPERATIONS ENGINE
            </span>
            <div className="px-2.5 py-1 bg-pink-500/10 rounded-full border border-pink-500/30 flex justify-start items-start">
              <span className="text-pink-400 text-xs font-semibold font-['Inter'] uppercase">
                Live
              </span>
            </div>
          </div>

          <div className="w-full flex flex-col justify-start items-start gap-3">
            {/* Step 1 */}
            <div className="w-full p-3 bg-gray-800/80 rounded-lg border border-gray-800 flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <div className="w-6 h-6 bg-gray-950 rounded-xl flex justify-center items-center">
                  <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">1</span>
                </div>
                <div className="flex flex-col justify-start items-start gap-0.5">
                  <span className="text-white text-sm font-bold font-['Space_Grotesk']">Contribute</span>
                  <span className="text-slate-400 text-xs font-normal font-['Inter']">Live camera feeds</span>
                </div>
              </div>
              <div className="px-2.5 py-1 bg-pink-500/10 rounded-full border border-pink-500/30">
                <span className="text-pink-400 text-xs font-semibold font-['Inter'] uppercase">Receiving</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="w-full p-3 bg-gray-800/80 rounded-lg border border-gray-800 flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <div className="w-6 h-6 bg-gray-950 rounded-xl flex justify-center items-center">
                  <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">2</span>
                </div>
                <div className="flex flex-col justify-start items-start gap-0.5">
                  <span className="text-white text-sm font-bold font-['Space_Grotesk']">Ingest</span>
                  <span className="text-slate-400 text-xs font-normal font-['Inter']">Multi-CDN secure gateway</span>
                </div>
              </div>
              <div className="px-2.5 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/30">
                <span className="text-teal-400 text-xs font-semibold font-['Inter'] uppercase">Ready</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="w-full p-3 bg-gray-800/80 rounded-lg border border-gray-800 flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <div className="w-6 h-6 bg-gray-950 rounded-xl flex justify-center items-center">
                  <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">3</span>
                </div>
                <div className="flex flex-col justify-start items-start gap-0.5">
                  <span className="text-white text-sm font-bold font-['Space_Grotesk']">Produce</span>
                  <span className="text-slate-400 text-xs font-normal font-['Inter']">Cloud transcoding &amp; switch</span>
                </div>
              </div>
              <div className="px-2.5 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/30">
                <span className="text-teal-400 text-xs font-semibold font-['Inter'] uppercase">Ready</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="w-full p-3 bg-gray-800/80 rounded-lg border border-gray-800 flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <div className="w-6 h-6 bg-gray-950 rounded-xl flex justify-center items-center">
                  <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">4</span>
                </div>
                <div className="flex flex-col justify-start items-start gap-0.5">
                  <span className="text-white text-sm font-bold font-['Space_Grotesk']">Secure</span>
                  <span className="text-slate-400 text-xs font-normal font-['Inter']">AES-256 token validation</span>
                </div>
              </div>
              <div className="px-2.5 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/30">
                <span className="text-teal-400 text-xs font-semibold font-['Inter'] uppercase">Ready</span>
              </div>
            </div>

            {/* Step 5 */}
            <div className="w-full p-3 bg-gray-800/80 rounded-lg border border-gray-800 flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <div className="w-6 h-6 bg-gray-950 rounded-xl flex justify-center items-center">
                  <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">5</span>
                </div>
                <div className="flex flex-col justify-start items-start gap-0.5">
                  <span className="text-white text-sm font-bold font-['Space_Grotesk']">Deliver</span>
                  <span className="text-slate-400 text-xs font-normal font-['Inter']">Global edge origin path</span>
                </div>
              </div>
              <div className="px-2.5 py-1 bg-red-500/10 rounded-full border border-red-500/30">
                <span className="text-red-500 text-xs font-semibold font-['Inter'] uppercase">Degraded</span>
              </div>
            </div>

            {/* Step 6 */}
            <div className="w-full p-3 bg-gray-800/80 rounded-lg border border-gray-800 flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <div className="w-6 h-6 bg-gray-950 rounded-xl flex justify-center items-center">
                  <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">6</span>
                </div>
                <div className="flex flex-col justify-start items-start gap-0.5">
                  <span className="text-white text-sm font-bold font-['Space_Grotesk']">Understand</span>
                  <span className="text-slate-400 text-xs font-normal font-['Inter']">Telemetry &amp; diagnostics</span>
                </div>
              </div>
              <div className="px-2.5 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/30">
                <span className="text-teal-400 text-xs font-semibold font-['Inter'] uppercase">Ready</span>
              </div>
            </div>

            {/* Step 7 */}
            <div className="w-full p-3 bg-gray-800/80 rounded-lg border border-gray-800 flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <div className="w-6 h-6 bg-gray-950 rounded-xl flex justify-center items-center">
                  <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">7</span>
                </div>
                <div className="flex flex-col justify-start items-start gap-0.5">
                  <span className="text-white text-sm font-bold font-['Space_Grotesk']">Preserve</span>
                  <span className="text-slate-400 text-xs font-normal font-['Inter']">Durable archive sync</span>
                </div>
              </div>
              <div className="px-2.5 py-1 bg-blue-500/10 rounded-full border border-blue-500/30">
                <span className="text-blue-400 text-xs font-semibold font-['Inter'] uppercase">Planned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
