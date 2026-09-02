import React from 'react';
import Image from 'next/image';

import bg147 from '@/public/images/Organization-overview/bg (147).png';
import milestoneImg from '@/public/images/resource-release-notes/section2image.png';

export default function ReleaseNotesMilestoneSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-10 bg-white overflow-hidden">
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
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-3">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Major platform milestone
        </h2>
      </div>

      {/* Milestone Card */}
      <div className="relative z-10 w-full bg-slate-50/90 backdrop-blur-xs rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col lg:flex-row justify-start items-center overflow-hidden shadow-sm">
        <div className="relative w-full lg:w-[560px] h-80 sm:h-96 shrink-0 overflow-hidden bg-gray-900">
          <Image
            src={milestoneImg}
            alt="Adaptive Bitrate Engine v4.0"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex-1 p-6 sm:p-10 flex flex-col justify-center items-start gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-2.5 py-1 bg-blue-500/10 rounded-full outline outline-1 outline-offset-[-1px] outline-blue-500/30">
              <span className="text-blue-600 text-xs font-semibold font-['Inter']">
                New Capability
              </span>
            </div>
            <span className="text-slate-600 text-xs font-semibold font-['Inter']">
              Video Ingest &amp; Encoding
            </span>
            <span className="text-slate-500 text-xs font-normal font-['Inter']">
              February 24, 2026
            </span>
          </div>

          <h3 className="text-slate-900 text-2xl sm:text-3xl font-bold font-['Space_Grotesk']">
            Adaptive Bitrate Engine v4.0
          </h3>

          <p className="text-slate-600 text-base font-normal font-['Inter'] leading-relaxed">
            Our next-generation encoding stack introduces automated machine-learning-driven transcode scaling, dynamic resolution fallback, and ultra-high efficiency H.265 passthroughs, reducing global bandwidth costs by up to 34% while maintaining visual fidelity across constrained public networks.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-2.5 py-1 bg-emerald-50 rounded-md outline outline-1 outline-offset-[-1px] outline-teal-400 flex items-center gap-1.5">
              <div className="size-1.5 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-teal-600 text-xs font-semibold font-['Inter']">
                Action: Recommended
              </span>
            </div>
            <div className="px-2.5 py-1 bg-slate-200 rounded-md outline outline-1 outline-offset-[-1px] outline-slate-400 flex items-center gap-1.5">
              <div className="size-1.5 bg-slate-500 rounded-full" />
              <span className="text-slate-600 text-xs font-semibold font-['Inter']">
                Rolling Out
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
