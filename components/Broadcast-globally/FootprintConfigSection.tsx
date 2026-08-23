import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg106 from '@/public/images/Broadcast-globally/bg (106).png';

export default function FootprintConfigSection() {
  return (
    <section className="relative w-full bg-slate-900 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg106}
          alt="Footprint Configuration Background"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-white leading-tight">
            Define the footprint before you design the delivery path.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Config Items */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="p-4 bg-gray-800 rounded-lg border border-gray-800 flex flex-col gap-2">
              <span className="text-teal-400 text-xs font-bold  ">
                AUDIENCE TYPE
              </span>
              <div className="flex justify-between items-center">
                <span className="text-white text-base font-normal  ">
                  Global Anonymous Public (1,000,000+ expected)
                </span>
                <span className="text-teal-400 text-sm font-semibold   cursor-pointer hover:underline">
                  Edit
                </span>
              </div>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg border border-gray-800 flex flex-col gap-2">
              <span className="text-teal-400 text-xs font-bold  ">
                GEOGRAPHY / REGIONS
              </span>
              <div className="flex justify-between items-center">
                <span className="text-white text-base font-normal  ">
                  Multiregion: US East, EU West, Asia Pacific East
                </span>
                <span className="text-teal-400 text-sm font-semibold   cursor-pointer hover:underline">
                  Edit
                </span>
              </div>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg border border-gray-800 flex flex-col gap-2">
              <span className="text-teal-400 text-xs font-bold  ">
                SURFACES &amp; CHANNELS
              </span>
              <div className="flex justify-between items-center">
                <span className="text-white text-base font-normal  ">
                  Custom Embed Player + SRT Output Restream
                </span>
                <span className="text-teal-400 text-sm font-semibold   cursor-pointer hover:underline">
                  Edit
                </span>
              </div>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg border border-gray-800 flex flex-col gap-2">
              <span className="text-teal-400 text-xs font-bold  ">
                INCLUSION (CAPTIONS / LANGUAGE)
              </span>
              <div className="flex justify-between items-center">
                <span className="text-white text-base font-normal  ">
                  Live English Captions + Spanish Audio Track Translation
                </span>
                <span className="text-teal-400 text-sm font-semibold   cursor-pointer hover:underline">
                  Edit
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Decisions Summary Card */}
          <div className="lg:col-span-5">
            <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-6">
              <span className="text-teal-400 text-sm font-bold   tracking-wide uppercase">
                PROFILE DECISIONS SUMMARY
              </span>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <span className="text-slate-400 text-xs font-semibold  ">
                    ✓ STABLE DECISIONS
                  </span>
                  <p className="text-white text-sm font-normal  ">
                    • Dynamic multi-CDN delivery enabled
                  </p>
                  <p className="text-white text-sm font-normal  ">
                    • Live transcription engine set to manual override
                  </p>
                </div>

                <div className="w-full h-px border-b border-gray-800" />

                <div className="flex flex-col gap-1.5">
                  <span className="text-amber-500 text-xs font-semibold  ">
                    ⚠ NEEDS CONFIRMATION
                  </span>
                  <p className="text-white text-sm font-normal  ">
                    • Target streaming destination validation required
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/talk-to-an-expert"
                  className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold   inline-block text-center w-full hover:opacity-90 transition-opacity"
                >
                  Review delivery model
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
