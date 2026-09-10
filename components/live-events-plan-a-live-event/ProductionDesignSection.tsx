import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import mainImg from '@/public/images/live-events-plan-a-live-event/section-6 image (1).png';
import card1Img from '@/public/images/live-events-plan-a-live-event/section-6 image (2).png';
import card2Img from '@/public/images/live-events-plan-a-live-event/section-6 image (3).png';

export function ProductionDesignSection() {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-white text-slate-900 overflow-hidden">
      {/* Required White Background Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-slate-950 leading-tight">
            Production &amp; Visual Design
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Define graphics overlay needs, media playback requirements, and rehearsal planning at the category level — not the implementation level.
          </p>
        </div>

        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <Image
              src={mainImg}
              alt="Run of show production"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-slate-950 text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] leading-snug">
              Run-of-Show cues meet real-time overlay control
            </h3>
            <p className="text-slate-600 text-base font-normal font-['Space_Grotesk'] leading-relaxed">
              Establish clean layout transitions, secondary lower-third graphic banners, visual watermark positions, and pre-event loops. Keep local and remote assets fully synchronized in a structured rundown.
            </p>
            <div>
              <Link
                href="#builder"
                className="inline-block px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
              >
                Launch visual builder
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom 2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-6 bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center gap-5">
            <div className="relative w-36 h-24 rounded-lg overflow-hidden shrink-0 border border-slate-200">
              <Image
                src={card1Img}
                alt="Graphics & Media Playback"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
                Graphics &amp; Media Playback
              </h4>
              <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                Plan out pre-recorded VOD inserts, logo loops, standby slate graphics, and interstitial videos ahead of time.
              </p>
            </div>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center gap-5">
            <div className="relative w-36 h-24 rounded-lg overflow-hidden shrink-0 border border-slate-200">
              <Image
                src={card2Img}
                alt="Rehearsal & Cue Planning"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
                Rehearsal &amp; Cue Planning
              </h4>
              <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                Coordinate sound checks, cue sequences, host transitions, and standby protocols for on-site presenters.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
