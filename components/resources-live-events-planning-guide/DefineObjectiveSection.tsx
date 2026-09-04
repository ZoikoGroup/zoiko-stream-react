'use client';

import React from 'react';

export default function DefineObjectiveSection() {
  return (
    <section className="relative w-full bg-[#070b14] text-white py-16 lg:py-24 border-b border-slate-800/80">
      {/* Background Graphic */}
      <div 
        className="absolute inset-0 pointer-events-none -z-0 opacity-40 mix-blend-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/live-events-planning-guide/bg1.png')`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-3">
            Define your event objective, audience, and timeline
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-4xl leading-relaxed">
            Clarify what the event achieves, who it&apos;s for, and when everything needs to happen. These decisions shape every downstream planning choice.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Cards */}
          <div className="lg:col-span-7 space-y-4">
            {/* Card 1 */}
            <div className="bg-[#0d1424]/90 rounded-xl border border-slate-800/90 p-5 shadow-lg">
              <h3 className="font-bold text-teal-300 text-base mb-1.5">
                Event Type
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                Choose general format (all-hands, conference, keynote, product launch, worship, memorial, or custom).
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0d1424]/90 rounded-xl border border-slate-800/90 p-5 shadow-lg">
              <h3 className="font-bold text-teal-300 text-base mb-1.5">
                Audience Intent
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                Public, private, invited, internal, hybrid, or overflow — planning intent only.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0d1424]/90 rounded-xl border border-slate-800/90 p-5 shadow-lg">
              <h3 className="font-bold text-teal-300 text-base mb-1.5">
                Expectation Scale
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                Estimate viewer presence (10-100, 100-500, 500-2,000, 2,000-10,000, 10,000-50,000, or enterprise 50,000+).
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#0d1424]/90 rounded-xl border border-slate-800/90 p-5 shadow-lg">
              <h3 className="font-bold text-teal-300 text-base mb-1.5">
                Event Objective
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                What defines success? Reassurance, recordkeeping, engagement, connection, or internal alignment.
              </p>
            </div>
          </div>

          {/* Right Column: Timeline & Run-of-Show Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 p-6 sm:p-7 shadow-2xl space-y-4">
              <h3 className="font-bold text-white text-base sm:text-lg pb-4 border-b border-slate-800">
                Timeline &amp; Run-of-Show
              </h3>

              <div className="space-y-3.5">
                {/* Row 1 */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-slate-400">Event Date &amp; Time</span>
                  <span className="font-mono text-xs font-semibold text-[#38d9a9]">
                    Set UTC/Local Timezone
                  </span>
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-slate-400">Duration Estimate</span>
                  <span className="font-mono text-xs font-semibold text-[#38d9a9]">
                    60 - 90 mins
                  </span>
                </div>

                {/* Row 3 */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-slate-400">Contributor Call Time</span>
                  <span className="font-mono text-xs font-semibold text-[#38d9a9]">
                    -30 mins before
                  </span>
                </div>

                {/* Row 4 */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-slate-400">Audience Entrance Window</span>
                  <span className="font-mono text-xs font-semibold text-[#38d9a9]">
                    -15 mins before
                  </span>
                </div>
              </div>

              {/* Sub Box */}
              <div className="bg-[#070c18] border border-slate-800/80 rounded-xl p-4 mt-4">
                <span className="font-mono text-[10px] font-bold text-cyan-400 tracking-wider uppercase mb-2 block">
                  RUN OF SHOW FRAMEWORK
                </span>
                <p className="text-xs text-slate-300 font-mono leading-relaxed">
                  1. Pre-Show Loop &rarr; 2. Keynote Intro &rarr; 3. Main Presentation &rarr; 4. Q&amp;A Session &rarr; 5. Closing Remarks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
