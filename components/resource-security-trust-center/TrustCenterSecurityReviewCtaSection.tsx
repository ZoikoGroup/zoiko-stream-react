import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg147 from '@/public/images/Organization-overview/bg (147).png';

export default function TrustCenterSecurityReviewCtaSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-t border-gray-200 flex flex-col justify-center items-center gap-10 bg-white overflow-hidden text-center">
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
      <div className="relative z-10 w-full max-w-3xl flex flex-col justify-start items-center gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Need an enterprise security review?
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed">
          For procurement teams requiring detailed compliance documentation, custom security assessments, or dedicated trust review.
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center items-center gap-4">
        <Link
          href="/contact-us"
          className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
        >
          <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
            Talk to an Expert
          </span>
        </Link>
        <Link
          href="/developer-documentation"
          className="px-7 py-3.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-400 flex justify-center items-center hover:bg-slate-100 transition-colors"
        >
          <span className="text-slate-700 text-base font-bold font-['Space_Grotesk']">
            Or visit Help Center
          </span>
        </Link>
      </div>

      <span className="relative z-10 text-slate-500 text-xs font-normal font-['Inter']">
        Public trust evidence is always available first. No sales gate before inspection.
      </span>
    </section>
  );
}
