import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroBg from '@/public/images/live-event-conferences/section-1-bg.png';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[820px] px-6 sm:px-12 lg:px-28 py-16 sm:py-24 bg-slate-950 flex flex-col justify-center items-start overflow-hidden border-b border-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={heroBg}
          alt="Plan Conference Streaming Hero Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-start items-start gap-8 text-left">
          
          {/* Badge */}
          <div className="px-3 py-1.5 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-teal-500 inline-flex items-center gap-2 bg-teal-500/10">
            <span className="text-teal-500 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
              CONFERENCES
            </span>
          </div>

          {/* Headline */}
          <h1 className="w-full text-slate-100 text-4xl sm:text-5xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[52px]">
            Plan conference streaming around the sessions, speakers, and audiences you actually need
          </h1>

          {/* Subtitle */}
          <p className="w-full text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed max-w-2xl">
            Architect secure, reliable, and highly interactive virtual streams. Lock down multi-session agendas, remote speaker handoffs, and localized compliance parameters before the keynote begins.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/live-events-plan-a-live-event"
              className="px-6 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-[10px] text-slate-900 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
            >
              Plan a live event
            </Link>
            <Link
              href="/resource-live-events-planning-guide"
              className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 text-slate-100 text-base font-medium font-['Space_Grotesk'] hover:bg-slate-800/60 transition-colors"
            >
              Open planning guide
            </Link>
          </div>

          {/* Disclaimer Box */}
          <div className="w-full p-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 bg-slate-900/60 text-slate-500 text-xs font-normal font-['Space_Grotesk'] leading-4">
            Proactive redundancy limits streaming failure risk. Connect multiple local hardware encoders with fully secure cloud gateways instantly.
          </div>

        </div>

        {/* Right Dashboard Card */}
        <div className="w-full lg:w-[540px] p-6 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-sm flex flex-col justify-start items-start gap-5 overflow-hidden shadow-2xl">
          
          <div className="w-full inline-flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              <span className="text-slate-100 text-xs font-bold font-['IBM_Plex_Mono'] uppercase">
                ZOIKOSTREAM CORE ENGINE
              </span>
            </div>
            <span className="text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">
              STATUS: PREFLIGHT
            </span>
          </div>

          <div className="w-full p-4 bg-teal-500/5 rounded-lg flex flex-col justify-start items-start gap-3 border border-teal-500/20">
            <div className="w-full inline-flex justify-between items-start">
              <span className="text-slate-100 text-sm font-bold font-['Space_Grotesk']">
                STAGE 1 / SESSION ROSTER
              </span>
              <span className="text-teal-500 text-xs font-normal font-['Space_Grotesk']">
                READY FOR LAUNCH
              </span>
            </div>

            <div className="w-full h-1 bg-gray-800 rounded-xs inline-flex justify-start items-start overflow-hidden">
              <div className="w-4/5 h-full bg-teal-500 rounded-xs" />
            </div>

            <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-4">
              12 parallel broadcast pipelines established. Master output directories confirmed. Ready to execute global timezone routing rules.
            </p>
          </div>

          <div className="w-full grid grid-cols-3 gap-4 pt-2">
            <div className="flex flex-col gap-1">
              <span className="text-slate-500 text-xs font-normal font-['Space_Grotesk'] uppercase">
                Latency Cap
              </span>
              <span className="text-slate-100 text-base font-bold font-['Space_Grotesk']">
                SRT — &lt; 200ms
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-slate-500 text-xs font-normal font-['Space_Grotesk'] uppercase">
                Ingest Streams
              </span>
              <span className="text-slate-100 text-base font-bold font-['Space_Grotesk']">
                14 Active Feeds
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-slate-500 text-xs font-normal font-['Space_Grotesk'] uppercase">
                Gateway Status
              </span>
              <span className="text-teal-500 text-base font-bold font-['Space_Grotesk']">
                Secure Loop
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
