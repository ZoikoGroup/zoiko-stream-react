import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroBg from '@/public/images/live-events-plan-a-live-event/section-1bg.png';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[829px] px-6 sm:px-12 lg:px-28 py-16 sm:py-24 bg-slate-950 flex flex-col justify-center items-start overflow-hidden border-b border-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={heroBg}
          alt="Plan a Live Event Hero Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-start items-start gap-7 text-left">
          
          {/* Badge */}
          <div className="px-3 py-1.5 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-teal-500 inline-flex items-center gap-2 bg-teal-500/10">
            <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
              PLAN A LIVE EVENT
            </span>
          </div>

          {/* Title */}
          <h1 className="w-full text-slate-100 text-4xl sm:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[64px]">
            Start with the event decisions that matter
          </h1>

          {/* Subtitle */}
          <p className="w-full text-gray-200 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Use this planning intake to share the minimum context needed for a future ZoikoStream Live Event and reach the correct planning or specialist path. Your answers describe your needs — they do not confirm capability, availability, or pricing.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#start-plan"
              className="px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
            >
              Start event plan
            </Link>
            <Link
              href="/talk-to-an-expert"
              className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 text-slate-100 text-base font-medium font-['Space_Grotesk'] hover:bg-slate-800/50 transition-colors"
            >
              Talk to an event expert
            </Link>
          </div>

          {/* Warning Disclaimer Box */}
          <div className="w-full p-4 rounded-lg bg-slate-900/60 border border-gray-800 text-gray-300 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
            Do not include passwords, API secrets, stream keys, private URLs, attendee lists, or unnecessary confidential event details.
          </div>

        </div>

        {/* Right Status Card */}
        <div className="w-full lg:w-[500px] shrink-0 p-6 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-sm flex flex-col justify-start items-start gap-5 shadow-2xl">
          <div className="w-full flex items-center justify-between border-b border-gray-800/80 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-slate-100 text-xs font-bold font-mono">
                ZOIKOSTREAM MASTER WORKFLOW
              </span>
            </div>
            <span className="text-slate-500 text-[10px] font-mono uppercase">
              STATUS: ACTIVE
            </span>
          </div>

          <div className="w-full p-4 bg-teal-500/10 border border-teal-500/20 rounded-xl flex flex-col justify-start items-start gap-3">
            <div className="w-full flex justify-between items-center text-xs font-bold font-['Space_Grotesk']">
              <span className="text-slate-100">01 / EVENT BRIEF INTAKE</span>
              <span className="text-teal-400 font-mono">COMPLETE</span>
            </div>
            
            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div className="w-[50%] h-full bg-teal-400 rounded-full" />
            </div>

            <p className="text-slate-300 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
              Target parameters locked. Transitioning to step 2: Operating Scope.
            </p>
          </div>

          <div className="w-full flex justify-between items-center text-xs font-['Space_Grotesk'] pt-1">
            <span className="text-slate-200 font-bold">9 Workflow Stages Active</span>
            <span className="text-teal-400 font-medium">Integrity Check: Valid</span>
          </div>
        </div>

      </div>
    </section>
  );
}
