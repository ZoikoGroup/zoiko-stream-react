import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FinalCtaSection() {
  return (
    <section className="relative w-full bg-slate-950 text-white py-20 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-recording-replay/bg (67).png"
          alt="Final CTA Background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-3 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white">
            Ready to explore governed recording and replay?
          </h2>
          <p className="text-slate-300 text-base md:text-lg font-normal font-['Space_Grotesk']">
            Find the right path for your recording and replay needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-zinc-900/90 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                Talk to an expert
              </h3>
              <p className="text-slate-300 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                Enterprise evaluation, governance, and procurement
              </p>
            </div>
            <Link
              href="/talk-to-an-expert"
              className="w-full py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-center text-sm font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
            >
              Talk to an expert
            </Link>
          </div>

          <div className="p-8 bg-zinc-900/90 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                Start building
              </h3>
              <p className="text-slate-300 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                Developer implementation and API access
              </p>
            </div>
            <Link
              href="/start-building"
              className="w-full py-3.5 border border-slate-400 rounded-lg text-white text-center text-sm font-bold font-['Space_Grotesk'] hover:bg-white/10 transition-colors"
            >
              Start building
            </Link>
          </div>

          <div className="p-8 bg-zinc-900/90 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                Plan a live event
              </h3>
              <p className="text-slate-300 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                Event-specific recording and replay planning
              </p>
            </div>
            <Link
              href="/plan-a-live-event"
              className="w-full py-3.5 border border-slate-400 rounded-lg text-white text-center text-sm font-bold font-['Space_Grotesk'] hover:bg-white/10 transition-colors"
            >
              Plan a live event
            </Link>
          </div>
        </div>

        <p className="text-center text-slate-400 text-xs font-normal font-['Space_Grotesk'] mt-12">
          Conversion comes from clarity and credible boundaries
        </p>
      </div>
    </section>
  );
}
