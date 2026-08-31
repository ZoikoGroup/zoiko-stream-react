import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import featuredImg from '@/public/images/resource-blogs-and-insights/FeaturedImage.png';
import author1 from '@/public/images/resource-blogs-and-insights/Ellipse (2).png';

export default function BlogFeaturedInsightSection() {
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
      <div className="size-[520px] left-[1068px] top-[517px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Featured Insight
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          The most significant technical synthesis from our operational desk this week.
        </p>
      </div>

      {/* Large Featured Card */}
      <div className="relative z-10 w-full bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col lg:flex-row justify-start items-stretch overflow-hidden shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)] hover:shadow-xl transition-shadow">
        <div className="relative w-full lg:w-[600px] h-72 sm:h-96 bg-slate-200 shrink-0">
          <Image
            src={featuredImg}
            alt="Protocol tradeoffs in low-latency live streaming"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 p-6 sm:p-10 flex flex-col justify-between items-start gap-6">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <span className="text-blue-500 text-sm font-bold font-['Space_Grotesk'] uppercase">
              Engineering Perspective
            </span>
            <h3 className="text-slate-900 text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-10">
              Protocol tradeoffs in low-latency live streaming
            </h3>
            <p className="text-slate-600 text-base font-normal font-['Inter'] leading-relaxed sm:leading-6">
              An exhaustive technical comparison of SRT, WebRTC (WHIP/WHEP), and LL-HLS. Learn how to weigh sub-second delivery requirements against global egress cost and connection stability.
            </p>
          </div>

          <div className="w-full flex flex-wrap justify-between items-center gap-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="relative size-9 rounded-full overflow-hidden border border-gray-200">
                <Image
                  src={author1}
                  alt="Dr. Elena Rostova"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-0.5">
                <span className="text-slate-900 text-sm font-bold font-['Inter']">
                  Dr. Elena Rostova
                </span>
                <span className="text-slate-600 text-xs font-normal font-['Inter']">
                  Principal Streaming Architect
                </span>
              </div>
            </div>

            <Link
              href="#article"
              className="text-blue-500 hover:text-blue-600 text-base font-bold font-['Space_Grotesk'] transition-colors"
            >
              Read article →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
