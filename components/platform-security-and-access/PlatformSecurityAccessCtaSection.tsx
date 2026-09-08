import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import section14Bg from '@/public/images/Zoiko Stream footer - Platform - Security-and-Access-Platform-Page/section-14bg.png';

export default function PlatformSecurityAccessCtaSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-950 border-t border-gray-800 flex flex-col justify-start items-center gap-12 overflow-hidden z-10">
      {/* Background Image section-14bg.png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={section14Bg}
          alt="CTA Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-slate-950/40" />
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col justify-start items-center gap-8 text-center">
        <h2 className="w-full text-slate-100 text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[52px]">
          Ready to secure your platform?
        </h2>
        <p className="w-full max-w-2xl text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
          Explore the full ZoikoStream security and access documentation or connect with our team.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/request-enterprise-quote"
            className="px-8 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity text-center"
          >
            Get Started
          </Link>
          <Link
            href="/request-enterprise-quote"
            className="px-8 py-3.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-400 text-white text-base font-bold font-['Space_Grotesk'] hover:bg-slate-800/50 transition-colors text-center"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
