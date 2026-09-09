import React from "react";
import Image from "next/image";

export default function PlanManagedLiveEventSection() {
  return (
    <section className="relative w-full bg-white text-slate-900 font-sans py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-[38px] font-bold tracking-tight text-slate-950 mb-2">
            Ready to plan your managed live event?
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal">
            State-sensitive next step — the right path for your need
          </p>
        </div>

        {/* 3 Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Plan an Event */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 backdrop-blur-md overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md">
            <div className="relative w-full h-48 bg-slate-900">
              <Image
                src="/images/event/12.png"
                alt="Plan an Event"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-950 mb-3">
                  Plan an Event
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                  Evaluate technical parameters natively. Run our interactive
                  10-point intake form to map target scope and check readiness.
                </p>
              </div>
              <button
                type="button"
                className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-b from-cyan-400 to-blue-500 hover:brightness-105 transition-all shadow-sm"
              >
                Check event readiness
              </button>
            </div>
          </div>

          {/* Card 2: Talk to an Expert */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 backdrop-blur-md overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md">
            <div className="relative w-full h-48 bg-slate-900">
              <Image
                src="/images/event/13.png"
                alt="Talk to an Expert"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-950 mb-3">
                  Talk to an Expert
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                  Review highly customized scenarios, pre-negotiate SLAs, and
                  structure SAML whitelists directly with lead engineers.
                </p>
              </div>
              <button
                type="button"
                className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 bg-white border border-slate-300 hover:bg-slate-50 transition-all shadow-sm"
              >
                Contact sales
              </button>
            </div>
          </div>

          {/* Card 3: Get Support Now */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 backdrop-blur-md overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md">
            <div className="relative w-full h-48 bg-slate-900">
              <Image
                src="/images/event/14.png"
                alt="Get Support Now"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-950 mb-3">
                  Get Support Now
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                  For active clients with scheduled broadcasts. Direct
                  high-priority line to L1 on-shift engineers monitoring current
                  ingestion points.
                </p>
              </div>
              <button
                type="button"
                className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-red-500 bg-red-50/50 border border-red-200 hover:bg-red-50 transition-all shadow-sm"
              >
                Contact Live Events support
              </button>
            </div>
          </div>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-blue-600 font-medium">
          <a href="#" className="hover:underline">
            Live Events planning guide
          </a>
          <span className="text-slate-300">|</span>
          <a href="#" className="hover:underline">
            Live Events pricing
          </a>
          <span className="text-slate-300 font-normal ml-4 hidden sm:inline">
            |
          </span>
          <a href="#" className="hover:underline ml-0 sm:ml-4">
            Stream monitoring
          </a>
          <span className="text-slate-300">|</span>
          <a href="#" className="hover:underline">
            System status
          </a>
        </div>
      </div>
    </section>
  );
}
