import React from 'react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gray-950/75 border-b border-gray-800 flex flex-col lg:flex-row justify-start items-center gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solution-private-audience-delivery/bg (1).png"
          alt="Private Audience Delivery Background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-start items-start gap-8">
        <div className="px-3 py-1.5 rounded-full border border-teal-400 inline-flex items-center">
          <span className="text-teal-400 text-xs font-bold  tracking-wide uppercase">
            PRIVATE AUDIENCE DELIVERY
          </span>
        </div>

        <h1 className="text-white text-4xl lg:text-5xl font-bold  leading-tight lg:leading-[60px]">
          Deliver video to the audience you actually intend
        </h1>

        <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
          Define the audience, verify identity where required, evaluate entitlement and policy, authorize playback, manage expiry and revocation, and carry the same access intent into replay — with current state and evidence visible to operators.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <div className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer">
            <span className="text-gray-950 text-base font-bold ">
              Explore Security &amp; Access
            </span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border-[1.5px] border-slate-400 flex justify-center items-center cursor-pointer">
            <span className="text-white text-base font-bold ">
              Talk to an Expert
            </span>
          </div>
        </div>
      </div>

      {/* Right Verification Panel Card */}
      <div className="relative z-10 w-full lg:w-[480px] p-8 bg-zinc-900 rounded-2xl border-[1.5px] border-gray-800 flex flex-col justify-start items-start gap-6 backdrop-blur-sm shadow-xl">
        <span className="text-teal-400 text-sm font-bold  tracking-wider uppercase">
          AUDIENCE REAL-TIME VERIFICATION PANEL
        </span>

        <div className="w-full flex flex-col gap-3">
          <div className="p-4 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center">
            <span className="text-white text-base font-bold ">Audience</span>
            <span className="text-teal-400 text-xs font-bold ">CONTROLLED</span>
          </div>

          <div className="p-4 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center">
            <span className="text-white text-base font-bold ">Identity</span>
            <span className="text-amber-400 text-xs font-bold ">VERIFIED / PENDING</span>
          </div>

          <div className="p-4 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center">
            <span className="text-white text-base font-bold ">Entitlement</span>
            <span className="text-teal-400 text-xs font-bold ">ALLOWED</span>
          </div>

          <div className="p-4 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center">
            <span className="text-white text-base font-bold ">Policy</span>
            <span className="text-teal-400 text-xs font-bold ">CURRENT</span>
          </div>

          <div className="p-4 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center">
            <span className="text-white text-base font-bold ">Playback</span>
            <span className="text-teal-400 text-xs font-bold ">ALLOWED</span>
          </div>

          <div className="p-4 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center">
            <span className="text-white text-base font-bold ">Replay</span>
            <span className="text-slate-400 text-xs font-bold ">INHERITS LIVE</span>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
          <span className="text-slate-400 text-xs font-medium ">
            Last Evaluated: Just Now (Real-time telemetry)
          </span>
        </div>
      </div>
    </section>
  );
}
