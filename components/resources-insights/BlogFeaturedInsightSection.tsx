import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import featuredImg from '@/public/images/resources-insights/FeaturedImage.png';
import author1 from '@/public/images/resources-insights/Ellipse (2).png';
import lightBgPattern from '@/public/images/Organization-overview/bg (147).png';

export default function BlogFeaturedInsightSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-100 flex flex-col justify-center items-center overflow-hidden bg-[#F5F7FF]">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={lightBgPattern}
          alt="Pattern"
          fill
          className="object-cover opacity-50 mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl bg-white rounded-2xl outline outline-1 outline-gray-200 flex flex-col-reverse lg:flex-row justify-between items-stretch overflow-hidden shadow-[0px_8px_30px_0px_rgba(0,0,10,0.04)]">
        
        {/* Text Content (Left) */}
        <div className="flex-1 p-8 sm:p-12 lg:pr-16 flex flex-col justify-center items-start gap-6">
          
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 bg-blue-50 rounded text-blue-600 text-xs font-bold font-['Space_Grotesk']">
              Engineering Perspective
            </div>
            <span className="text-slate-500 text-xs font-normal font-['Inter']">
              12 min read
            </span>
          </div>

          <div className="w-full flex flex-col justify-start items-start gap-4">
            <h3 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-tight">
              Why Adaptive Bitrate Alone Won't Solve Latency at Scale
            </h3>
            <p className="text-slate-500 text-base font-normal font-['Inter'] leading-relaxed">
              A deep look at the architectural tradeoffs between ABR algorithms and real-time delivery constraints when operating at 100K+ concurrent viewers.
            </p>
          </div>

          <div className="w-full flex items-center gap-3 pt-2">
            <div className="relative size-10 rounded-full overflow-hidden">
              <Image
                src={author1}
                alt="Sarah Chen"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <span className="text-slate-900 text-sm font-bold font-['Inter']">
                Sarah Chen
              </span>
              <span className="text-slate-500 text-xs font-normal font-['Inter']">
                Principal Engineer · Published Aug 15, 2026
              </span>
            </div>
          </div>

          <Link
            href="#article"
            className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-bold font-['Space_Grotesk'] transition-colors flex items-center gap-1"
          >
            Read insight <span aria-hidden="true">&rarr;</span>
          </Link>

        </div>

        {/* Image Content (Right) */}
        <div className="relative w-full lg:w-[500px] xl:w-[550px] h-72 sm:h-96 lg:h-auto shrink-0 overflow-hidden bg-slate-900 p-4 sm:p-6 lg:p-8">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src={featuredImg}
              alt="Server Room"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
