import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg23 from '@/public/images/resource-blogs-and-insights/bg (22).png';
import seriesImg from '@/public/images/resource-blogs-and-insights/SeriesImage.png';
import { Lock } from 'lucide-react';

export default function BlogContinueSeriesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg23}
          alt="Series Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Continue a series
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Deep-dive courses with sequential technical segments mapping out end-to-end media operations.
        </p>
      </div>

      {/* Series Banner Card */}
      <div className="relative z-10 w-full bg-gray-950 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col lg:flex-row justify-start items-stretch overflow-hidden">
        <div className="relative w-full lg:w-[480px] h-72 sm:h-96 bg-gray-900 shrink-0">
          <Image
            src={seriesImg}
            alt="Live Events Operations Masterclass"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 p-6 sm:p-10 flex flex-col justify-between items-start gap-6">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <div className="px-2.5 py-1 bg-blue-500/20 rounded-full outline outline-1 outline-offset-[-1px] outline-blue-500">
              <span className="text-blue-500 text-xs font-bold font-['Space_Grotesk']">
                3 PART GUIDE
              </span>
            </div>

            <h3 className="text-white text-2xl sm:text-3xl font-bold font-['Space_Grotesk']">
              Live Events Operations Masterclass
            </h3>
            <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
              An operational standard operating procedure for setup, coordination, redundant path configurations, and direct concierge live oversight.
            </p>
          </div>

          {/* Steps List */}
          <div className="w-full flex flex-col justify-start items-start gap-3">
            <div className="w-full flex items-center gap-4">
              <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk']">
                01
              </span>
              <span className="flex-1 text-white text-sm font-bold font-['Space_Grotesk']">
                Configuring dual active-active ingest boundaries
              </span>
              <div className="px-2 py-0.5 bg-teal-400/10 rounded-sm">
                <span className="text-teal-400 text-[10px] font-bold font-['Space_Grotesk']">
                  NEXT STEP
                </span>
              </div>
            </div>

            <div className="w-full flex items-center gap-4">
              <span className="text-slate-400 text-sm font-bold font-['Space_Grotesk']">
                02
              </span>
              <span className="flex-1 text-slate-400 text-sm font-normal font-['Space_Grotesk']">
                Latency thresholds and automatic failover metrics
              </span>
              <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </div>

            <div className="w-full flex items-center gap-4">
              <span className="text-slate-400 text-sm font-bold font-['Space_Grotesk']">
                03
              </span>
              <span className="flex-1 text-slate-400 text-sm font-normal font-['Space_Grotesk']">
                Post-event verification and archival cold storage replication
              </span>
              <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </div>
          </div>

          <Link
            href="#masterclass"
            className="px-6 py-3 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
          >
            <span className="text-gray-950 text-sm font-bold font-['Space_Grotesk']">
              View series →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
