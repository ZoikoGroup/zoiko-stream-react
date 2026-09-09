import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import section3Bg from '@/public/images/live-events-plan-a-live-event/section-3bg.png';

export function EventFocusSection() {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-slate-950 text-white overflow-hidden border-t border-b border-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={section3Bg}
          alt="Event Focus Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight text-slate-100">
            Start with the event, not the equipment
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Lock in the operational objective first. Our structured brief intake collects baseline event context — type, date, venue, audience intent, accessibility needs, and archive requirements — before any hardware scoping begins.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Brief Intent Checklist Card */}
          <div className="lg:col-span-7 p-6 sm:p-7 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-sm space-y-5">
            <h3 className="text-slate-100 text-lg font-bold font-['Space_Grotesk']">
              Brief Intent Checklist
            </h3>

            <div className="space-y-3">
              <div className="p-3 bg-slate-950/50 rounded-lg flex flex-col sm:flex-row justify-between sm:items-center gap-1 text-xs font-['Space_Grotesk']">
                <span className="text-slate-400 font-bold">Event Type</span>
                <span className="text-slate-100 font-medium">Boutique Product Launch &amp; Keynote</span>
              </div>
              <div className="p-3 bg-slate-950/50 rounded-lg flex flex-col sm:flex-row justify-between sm:items-center gap-1 text-xs font-['Space_Grotesk']">
                <span className="text-slate-400 font-bold">Target Date</span>
                <span className="text-slate-100 font-medium">October 14, 2026 — 10:00 AM PST</span>
              </div>
              <div className="p-3 bg-slate-950/50 rounded-lg flex flex-col sm:flex-row justify-between sm:items-center gap-1 text-xs font-['Space_Grotesk']">
                <span className="text-slate-400 font-bold">Physical Venues</span>
                <span className="text-slate-100 font-medium">Main Stage San Francisco + Satellite Hub London</span>
              </div>
              <div className="p-3 bg-slate-950/50 rounded-lg flex flex-col sm:flex-row justify-between sm:items-center gap-1 text-xs font-['Space_Grotesk']">
                <span className="text-slate-400 font-bold">Audience Intent</span>
                <span className="text-slate-100 font-medium">2,500 Registered Digital VIP Attendees</span>
              </div>
              <div className="p-3 bg-slate-950/50 rounded-lg flex flex-col sm:flex-row justify-between sm:items-center gap-1 text-xs font-['Space_Grotesk']">
                <span className="text-slate-400 font-bold">Accessibility Plans</span>
                <span className="text-slate-100 font-medium">Live English CC + French Audio Translation</span>
              </div>
              <div className="p-3 bg-slate-950/50 rounded-lg flex flex-col sm:flex-row justify-between sm:items-center gap-1 text-xs font-['Space_Grotesk']">
                <span className="text-slate-400 font-bold">Archive &amp; Replay</span>
                <span className="text-slate-100 font-medium">VOD Package compiled within 4 hours of closeout</span>
              </div>
            </div>
          </div>

          {/* Right Column Text */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-slate-100 text-2xl font-bold font-['Space_Grotesk']">
              No infinite hardware scoping calls. Just structure.
            </h3>
            <p className="text-slate-400 text-base font-normal font-['Space_Grotesk'] leading-relaxed">
              By standardizing the inputs up front, we bypass hours of painful logistical review. The system analyzes your brief and generates corresponding action targets for connectivity, production operators, and compliance streams.
            </p>
            <div>
              <Link
                href="#start-plan"
                className="inline-block px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
              >
                Start event plan
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
