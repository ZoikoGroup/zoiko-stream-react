import React from 'react';
import Image from 'next/image';
import { Check, Database, ShieldCheck, User2, Users2 } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/70 border-b border-gray-800 flex flex-col justify-start items-start overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Education-Page/bg (189).png"
          alt="Hero Background Overlay"
          fill
          className="object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col lg:flex-row justify-start items-center gap-12">
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-start items-start gap-8">
          <div className="px-3 py-1.5 rounded-full border border-teal-400 inline-flex justify-start items-start">
            <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
              EDUCATION
            </span>
          </div>

          <h1 className="text-white text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[60px]">
            Make every learning and institutional broadcast easier to access, govern, and revisit.
          </h1>

          <p className="text-slate-400 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Run live and on-demand education media with explicit audience controls, accessibility requirements, operational visibility, recording/replay continuity, and evidence-backed handoffs — without turning video usage into learner surveillance.
          </p>

          <div className="inline-flex justify-start items-center gap-4 flex-wrap">
            <div className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer">
              <span className="text-gray-950 text-base font-bold font-['Space_Grotesk']">
                Talk to an expert
              </span>
            </div>
            <div className="px-7 py-3.5 rounded-lg border border-white flex justify-center items-center cursor-pointer">
              <span className="text-white text-base font-bold font-['Space_Grotesk']">
                Explore the platform
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: HUD Card */}
        <div className="w-full lg:w-[520px] p-6 lg:p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-6 backdrop-blur-sm shadow-2xl">
          <div className="w-full flex justify-between items-center">
            <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] tracking-wide">
              OPERATIONAL STATE HUD
            </span>
            <div className="px-2 py-1 bg-emerald-500/10 rounded-full flex justify-start items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-500 text-[10px] font-bold font-['Space_Grotesk']">
                LIVE TRANSMITTING
              </span>
            </div>
          </div>

          <div className="w-full flex flex-col justify-start items-start gap-3">
            <div className="w-full p-3.5 bg-gray-800/80 rounded-lg border border-gray-800 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Users2 className="w-4 h-4  text-teal-400 "/>
                <span className="text-white text-sm font-bold font-['Space_Grotesk']">Audience Intent</span>
              </div>
              <span className="text-slate-400 text-xs font-normal font-['Inter']">Verified Institution Single-SSO</span>
            </div>

            <div className="w-full p-3.5 bg-gray-800/80 rounded-lg border border-gray-800 flex justify-between items-center">
              <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4  text-teal-400 "/>

                <span className="text-white text-sm font-bold font-['Space_Grotesk']">Accessibility State</span>
              </div>
              <span className="text-emerald-500 text-xs font-normal font-['Inter']">WCAG 2.1 Compliant (ASL + Captions)</span>
            </div>

            <div className="w-full p-3.5 bg-gray-800/80 rounded-lg border border-gray-800 flex justify-between items-center">
              <div className="flex items-center gap-2">
                                <Database className="w-4 h-4  text-teal-400 "/>

                <span className="text-white text-sm font-bold font-['Space_Grotesk']">Recording &amp; Replay</span>
              </div>
              <span className="text-slate-400 text-xs font-normal font-['Inter']">Cold Archival (Compliance Lock)</span>
            </div>
          </div>

          <div className="w-full border-t border-gray-800 pt-4 flex items-center gap-2">
                            <Check className="w-4 h-4  text-teal-400 "/>

            <span className="text-slate-400 text-xs font-normal font-['Inter']">
              All telemetry compliant with FERPA &amp; GDPR standards.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
