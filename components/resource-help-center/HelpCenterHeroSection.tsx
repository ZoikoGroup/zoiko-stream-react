import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowRight,  Headset } from 'lucide-react';

export default function HelpCenterHeroSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-center items-start gap-10 overflow-hidden">
      {/* Background Image */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <Image
                src="/images/resource-help-center/section-1bg (2).png"
                alt="Release Notes Hero Background"
                fill
                className="object-cover opacity-25"
                priority
              />
              <div className="absolute inset-0 " />
            </div>
      <div className="w-full max-w-4xl flex flex-col justify-start items-start gap-6">
        <div className="px-3 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-400 bg-teal-400/10 inline-flex justify-start items-start">
          <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
            HELP CENTER
          </span>
        </div>

        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[60px]">
          Find the right ZoikoStream help, faster
        </h1>

        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
          Search approved help content, browse by task, or move directly to developer guidance, API reference, live service status, Live Events planning, accessibility, trust, or human support.
        </p>
      </div>

      {/* Search Input */}
      <div className="w-full max-w-3xl px-6 py-4 bg-zinc-900/80 backdrop-blur-xs rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex items-center gap-4 shadow-xl">
        <Search className="w-5 h-5 text-slate-400 shrink-0" />
        <input
          type="text"
          placeholder="Describe what you are trying to do or what went wrong..."
          className="w-full bg-transparent text-slate-200 placeholder:text-slate-500 text-base font-normal font-['Inter'] focus:outline-none"
        />
      </div>

      {/* Quick Links */}
      <div className="flex flex-wrap items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="size-2 bg-teal-400 rounded-full animate-pulse" />
          <Link
            href="/resource-system-status"
            className="text-teal-400 hover:text-teal-300 text-base font-bold font-['Space_Grotesk'] inline-flex items-center gap-1 transition-colors"
          >
            <span>System Status</span>
            <ArrowRight className="w-4 h-4 text-teal-400" />
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Headset className="w-4 h-4 text-blue-500 shrink-0" />
          <Link
            href="#human-support"
            className="text-blue-500 hover:text-blue-400 text-base font-bold font-['Space_Grotesk'] inline-flex items-center gap-1 transition-colors"
          >
            <span>Contact Support</span>
            <ArrowRight className="w-4 h-4 text-blue-500" />
          </Link>
        </div>
      </div>

      <span className="max-w-2xl text-slate-500 text-xs font-normal font-['Inter'] leading-relaxed">
        Do not enter passwords, tokens, secret keys, or sensitive data into public search. All requests are logged in accordance with system governance policies.
      </span>
    </section>
  );
}
