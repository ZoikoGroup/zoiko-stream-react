import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { ArrowRight, ExternalLink } from 'lucide-react';

import featuredImg from '@/public/images/resources-case-studies/Featured Image.png';

export default function CaseStudiesFeaturedStorySection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-white overflow-hidden">
      {/* Background overlay snippet */}
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
      <div className="size-[520px] left-[1068px] top-[562px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Featured proof story
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Our strongest eligible evidence — approved, governed, and ready to inspect.
        </p>
      </div>

      {/* Large Featured Card */}
      <div className="relative z-10 w-full rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 overflow-hidden flex flex-col lg:flex-row shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)] hover:shadow-xl transition-shadow">
        <div className="relative w-full lg:w-[600px] h-80 sm:h-[552px] bg-slate-200 shrink-0">
          <Image
            src={featuredImg}
            alt="Scaling 50M concurrent viewers"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 p-6 sm:p-10 bg-slate-50 flex flex-col justify-between items-start gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <div className="px-2.5 py-1 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-300 bg-white">
              <span className="text-slate-900 text-xs font-bold font-['Space_Grotesk']">
                Global Sports Broadcaster
              </span>
            </div>
            <div className="px-2.5 py-1 bg-gray-200 rounded-full">
              <span className="text-slate-600 text-xs font-normal font-['Inter']">
                Live Events
              </span>
            </div>
            <div className="px-2.5 py-1 bg-gray-200 rounded-full">
              <span className="text-slate-600 text-xs font-normal font-['Inter']">
                Media &amp; Entertainment
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-slate-900 text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-9">
              Scaling 50M concurrent viewers with zero-downtime failover during championship finals
            </h3>
            <p className="text-slate-600 text-base font-normal font-['Inter'] leading-relaxed sm:leading-6">
              During the largest digital sporting broadcast of the year, ZoikoStream&apos;s multi-redundant ingestion engine and automated hot-standby path seamlessly rerouted traffic within 100ms when a primary fiber connection failed, keeping tens of millions of fans in the game without a single buffer.
            </p>
          </div>

          {/* Key Metric Box */}
          <div className="w-full p-5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex items-center gap-4">
            <div className="size-3 bg-emerald-500 rounded-full shrink-0" />
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-900 text-xl sm:text-2xl font-bold font-['Space_Grotesk']">
                99.99% Uptime During Peak
              </span>
              <span className="text-slate-600 text-xs font-normal font-['Inter']">
                Measured over the full 4.5-hour championship broadcast window across 14 global regions.
              </span>
            </div>
          </div>

          <Link
            href="#case-study"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
          >
            <span className="text-blue-500 text-base font-bold font-['Space_Grotesk']">
              Read full featured case study
            </span>
            <ArrowRight className="w-4 h-4 text-blue-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
