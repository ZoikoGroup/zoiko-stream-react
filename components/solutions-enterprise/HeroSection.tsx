import React from 'react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-900/70 border-b border-gray-800 flex flex-col justify-start items-start gap-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Enterprises/bg (165).png"
          alt="Hero Background Overlay"
          fill
          className="object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-16">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-[680px] flex flex-col justify-start items-start gap-8">
            <div className="px-3 py-1.5 rounded-full border border-teal-400 inline-flex justify-start items-start">
              <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
                ENTERPRISES
              </span>
            </div>

            <h1 className="text-white text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[60px]">
              Run critical video with clear organizational control
            </h1>

            <p className="text-stone-300 text-base lg:text-lg font-normal font-['Inter'] leading-7">
              Coordinate contribution, broadcasting, secure delivery, accessibility, recording, replay, analytics, policy and operational response through one governed media operating model.
            </p>

            <div className="inline-flex justify-start items-center gap-4 flex-wrap">
              <div className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer">
                <span className="text-white text-base font-bold font-['Space_Grotesk']">
                  Talk to an Expert
                </span>
              </div>
              <div className="px-7 py-3.5 rounded-lg border border-slate-400 flex justify-center items-center cursor-pointer">
                <span className="text-white text-base font-bold font-['Space_Grotesk']">
                  Explore Enterprise Capabilities
                </span>
              </div>
            </div>
          </div>

          {/* Right Console Card */}
          <div className="w-full lg:w-[500px] p-7 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-6 backdrop-blur-sm shadow-2xl">
            <div className="w-full flex justify-between items-center">
              <span className="text-white text-xs font-bold font-['Space_Grotesk'] tracking-wide">
                ENTERPRISE MEDIA CONSOLE
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-emerald-500 text-xs font-bold font-['Space_Grotesk']">
                  SYSTEM LIVE
                </span>
              </div>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-3">
              <div className="w-full p-3.5 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center text-xs">
                <div className="flex flex-col gap-0.5">
                  <span className="text-white font-bold font-['Space_Grotesk']">Active Live Broadcasts</span>
                  <span className="text-slate-500 font-normal font-['Inter']">Global high-concurrency</span>
                </div>
                <span className="text-teal-400 font-bold font-['Space_Grotesk']">47 streams</span>
              </div>

              <div className="w-full p-3.5 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center text-xs">
                <div className="flex flex-col gap-0.5">
                  <span className="text-white font-bold font-['Space_Grotesk']">Recording / Replay</span>
                  <span className="text-slate-500 font-normal font-['Inter']">Durable cold storage replicate</span>
                </div>
                <span className="text-blue-500 font-bold font-['Space_Grotesk']">100% Archiving</span>
              </div>

              <div className="w-full p-3.5 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center text-xs">
                <div className="flex flex-col gap-0.5">
                  <span className="text-white font-bold font-['Space_Grotesk']">Access / Policy State</span>
                  <span className="text-slate-500 font-normal font-['Inter']">Separation of duties active</span>
                </div>
                <span className="text-emerald-500 font-bold font-['Space_Grotesk']">SAML SSO Enforced</span>
              </div>

              <div className="w-full p-3.5 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center text-xs">
                <div className="flex flex-col gap-0.5">
                  <span className="text-white font-bold font-['Space_Grotesk']">Delivery Pipe Health</span>
                  <span className="text-slate-500 font-normal font-['Inter']">Operational telemetry ok</span>
                </div>
                <span className="text-teal-400 font-bold font-['Space_Grotesk']">99.998% Uptime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Compliance Bar */}
        <div className="w-full p-5 bg-slate-900 rounded-lg border border-gray-800 flex justify-start items-center gap-4 text-sm">
          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
            <div className="w-3.5 h-4 border-2 border-teal-400 rounded-xs" />
          </div>
          <div>
            <span className="text-white font-bold font-['Inter'] leading-5">Compliance Standard: </span>
            <span className="text-slate-400 font-normal font-['Inter'] leading-5">
              Current state, responsibilities and evidence should be inspectable. Unsupported mechanisms or guarantees are never implied.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
