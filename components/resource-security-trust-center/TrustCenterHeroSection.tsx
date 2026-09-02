import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Info } from 'lucide-react';

import bg1 from '@/public/images/resources-security-trust-center/section-1bg.png';

export default function TrustCenterHeroSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-center items-start gap-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg1}
          alt="Security & Trust Center Hero Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col justify-start items-start gap-6">
        <div className="px-3 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-400 bg-teal-400/10 inline-flex justify-start items-start">
          <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
            SECURITY AND TRUST CENTER
          </span>
        </div>
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[60px]">
          Security and trust evidence, with scope you can understand.
        </h1>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
          Inspect approved ZoikoStream trust evidence, understand what each record covers, distinguish current from superseded material, and follow the authoritative route for security, privacy, status, accessibility, or procurement questions.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="relative z-10 flex flex-wrap items-center gap-6">
        <Link
          href="#evidence-inventory"
          className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
        >
          <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
            Explore Trust Evidence
          </span>
        </Link>
        <Link
          href="/resource-system-status"
          className="px-6 py-3.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-400 flex items-center gap-1.5 text-white hover:bg-white/5 transition-colors"
        >
          <span className="text-white text-base font-bold font-['Space_Grotesk']">
            View System Status
          </span>
          <ArrowRight className="w-4 h-4 text-white" />
        </Link>
      </div>

      {/* Subtext with Icon */}
      <div className="relative z-10 w-full flex items-center gap-3 pt-2">
        <Info className="w-4 h-4 text-slate-500 shrink-0" />
        <span className="text-slate-500 text-xm font-normal font-['Inter'] leading-relaxed">
          Evidence applies only to its stated scope, period, version, visibility, limitations, and authority. A record is not a universal guarantee.
        </span>
      </div>
    </section>
  );
}
