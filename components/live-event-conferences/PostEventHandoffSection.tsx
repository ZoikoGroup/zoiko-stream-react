import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

export function PostEventHandoffSection() {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-white text-slate-900 overflow-hidden border-b border-gray-200">
      {/* Background Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-96 -left-35 -top-22 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-3xl text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold font-['Space_Grotesk'] text-zinc-950 leading-tight lg:leading-[60.8px]">
            Review &amp; Hand Off Your Plan
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Review all configured parameters, whitelists, and translation channels below. Ready to transition? Submit your setup to compile your final technical layout.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Summary Box */}
          <div className="lg:col-span-6 p-7 bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 shadow-sm">
            <h3 className="text-zinc-950 text-lg font-bold font-['Space_Grotesk']">
              Conference Overview Context
            </h3>

            <div className="w-full flex flex-col gap-3">
              <div className="w-full p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center justify-between gap-4">
                <span className="text-slate-600 text-xs font-bold font-['Space_Grotesk']">
                  Selected Structure
                </span>
                <span className="text-zinc-950 text-xs font-normal font-['Space_Grotesk'] text-right">
                  Enterprise Multi-Session Track
                </span>
              </div>

              <div className="w-full p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center justify-between gap-4">
                <span className="text-slate-600 text-xs font-bold font-['Space_Grotesk']">
                  Target Speakers
                </span>
                <span className="text-zinc-950 text-xs font-normal font-['Space_Grotesk'] text-right">
                  42 Registered Remote Presenters
                </span>
              </div>

              <div className="w-full p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center justify-between gap-4">
                <span className="text-slate-600 text-xs font-bold font-['Space_Grotesk']">
                  Configured Accessibility
                </span>
                <span className="text-zinc-950 text-xs font-normal font-['Space_Grotesk'] text-right">
                  Live Spanish &amp; Chinese Subtitle Feeds
                </span>
              </div>

              <div className="w-full p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center justify-between gap-4">
                <span className="text-slate-600 text-xs font-bold font-['Space_Grotesk']">
                  Sovereign Retention
                </span>
                <span className="text-zinc-950 text-xs font-normal font-['Space_Grotesk'] text-right">
                  Archived master captures kept forever
                </span>
              </div>
            </div>
          </div>

          {/* Right Description */}
          <div className="lg:col-span-6 flex flex-col justify-start items-start gap-6">
            <h3 className="text-zinc-950 text-2xl font-bold font-['Space_Grotesk']">
              Transfer what works. Revalidate what changes.
            </h3>
            <p className="text-slate-600 text-lg font-normal font-['Space_Grotesk'] leading-7">
              Submitting compiling initiates automated setup reviews. The platform duplicates successful event structures instantly while preparing fresh latency speed tests for physical venue units.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/live-events-plan-a-live-event"
                className="px-6 py-3.5 bg-gradient-to-b from-teal-500 to-blue-500 rounded-[10px] text-slate-900 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
              >
                Plan a live event
              </Link>
              <Link
                href="/live-events-overview"
                className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-600 text-zinc-950 text-base font-medium font-['Space_Grotesk'] hover:bg-slate-100 transition-colors"
              >
                Edit plan parameters
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
