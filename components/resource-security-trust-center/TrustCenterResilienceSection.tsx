import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import bg11 from '@/public/images/resources-security-trust-center/section-11bg.png';
import img19 from '@/public/images/resources-security-trust-center/Rectangle (19).png';
import img20 from '@/public/images/resources-security-trust-center/Rectangle (20).png';

export default function TrustCenterResilienceSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg11}
          alt="Resilience Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Reliability, resilience, and operational transparency
        </h2>
      </div>

      {/* System Status Banner */}
      <div className="relative z-10 w-full p-5 bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-md">
        <div className="flex items-center gap-3">
          <div className="size-3 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-white text-lg font-bold font-['Space_Grotesk']">
            All core services currently operational.
          </span>
        </div>
        <Link
          href="/resource-system-status"
          className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] transition-colors"
        >
          <span>View System Status</span>
          <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
        </Link>
      </div>

      {/* 2 Feature Cards */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all group">
          <div className="relative w-full h-44 bg-gray-950 overflow-hidden">
            <Image
              src={img19}
              alt="Resilience Evidence"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="w-full p-6 flex flex-col gap-2">
            <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
              Resilience Evidence
            </h3>
            <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
              SLA guarantees backed by multi-region redundancies and continuous failure mode drills.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all group">
          <div className="relative w-full h-44 bg-gray-950 overflow-hidden">
            <Image
              src={img20}
              alt="Operational Transparency"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="w-full p-6 flex flex-col gap-2">
            <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
              Operational Transparency
            </h3>
            <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
              SLA guarantees backed by multi-region redundancies and continuous failure mode drills.
            </p>
          </div>
        </div>
      </div>

      <span className="relative z-10 text-slate-500 text-xm font-normal font-['Inter']">
        Trust Note: Trust Center never caches a green state. Current availability always routes to System Status.
      </span>
    </section>
  );
}
