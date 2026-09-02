import React from 'react';
import Image from 'next/image';

import bg147 from '@/public/images/Organization-overview/bg (147).png';

export default function ReleaseNotesStayInformedSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-center items-center gap-10 bg-white overflow-hidden text-center">
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
      <div className="relative z-10 w-full max-w-2xl flex flex-col justify-start items-center gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Stay informed on releases
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed">
          Get automated updates containing newly approved release logs directly inside your inbox, webhook routes, or enterprise platforms.
        </p>
      </div>

      {/* Form & Options */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col justify-start items-center gap-5">
        <div className="w-full flex flex-col sm:flex-row justify-start items-center gap-3">
          <input
            type="email"
            placeholder="Enter your engineering or platform email address..."
            className="w-full sm:flex-1 p-3.5 bg-slate-50/90 backdrop-blur-xs rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-300 text-slate-900 placeholder:text-slate-500 text-sm font-normal font-['Inter'] focus:outline-blue-500"
          />
          <button className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity shrink-0">
            <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
              Subscribe
            </span>
          </button>
        </div>

        {/* Options */}
        <div className="flex flex-wrap justify-center items-center gap-6 pt-1">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="size-3 bg-teal-400 rounded-full border border-gray-300" />
            <span className="text-slate-600 text-xs font-normal font-['Inter']">
              Weekly Digest
            </span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <div className="size-3 rounded-full border border-gray-300" />
            <span className="text-slate-600 text-xs font-normal font-['Inter']">
              Real-time Webhook
            </span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <div className="size-3 rounded-full border border-gray-300" />
            <span className="text-slate-600 text-xs font-normal font-['Inter']">
              RSS Feed
            </span>
          </div>
        </div>
      </div>

      <span className="relative z-10 text-slate-500 text-xs font-normal font-['Inter']">
        Product updates only. Separate from marketing. Unsubscribe anytime.
      </span>
    </section>
  );
}
