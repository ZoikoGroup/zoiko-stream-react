import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import mainDashboardBoard from '@/public/images/platform-video-analytics/MainDashboardBoard.png';

export default function PlatformVideoAnalyticsDashboardSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-950 flex flex-col justify-start items-start gap-12 overflow-hidden z-10">
      <div className="relative z-10 w-full max-w-7xl flex flex-col justify-start items-start gap-12">
        {/* Header Text */}
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <h2 className="w-full text-slate-100 text-3xl sm:text-4xl font-bold font-['Space_Grotesk']">
            Analytics dashboard with definition-first design
          </h2>
          <p className="w-full text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk']">
            Synthetic proof of the analytics experience. Every chart carries scope, denominator, data-through, quality state and an accessible table alternative.
          </p>
        </div>

        {/* Dashboard Preview Card */}
        <div className="w-full p-6 sm:p-8 bg-zinc-900/90 rounded-2xl shadow-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-xs flex flex-col justify-start items-start gap-6">
          <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[540px] rounded-[10px] overflow-hidden">
            <Image
              src={mainDashboardBoard}
              alt="Analytics Dashboard Environment"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-slate-500 text-xs sm:text-sm font-normal font-['Space_Grotesk'] max-w-2xl">
              *Representative dashboard environment displaying unified stream parameters, latency thresholds and aggregate metadata.
            </p>
            <Link
              href="/request-enterprise-quote"
              className="px-6 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 text-slate-100 text-base font-medium font-['Space_Grotesk'] hover:bg-slate-800/50 transition-colors text-center shrink-0"
            >
              Request Live Stream Trial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
