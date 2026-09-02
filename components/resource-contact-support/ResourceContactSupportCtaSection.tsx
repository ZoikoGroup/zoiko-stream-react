import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import section9Bg from '@/public/images/resource-contact-support/section-9bg.png';

export default function ResourceContactSupportCtaSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-24 lg:py-28 bg-black flex flex-col justify-center items-center gap-10 overflow-hidden z-10">
      {/* Background Image */}
      {section9Bg && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-10 ">
          <Image src={section9Bg} alt="Background" fill className="object-cover" />
        </div>
      )}

      <div className="relative z-10 w-full max-w-3xl flex flex-col justify-start items-center text-center gap-6">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          Ready to get help?
        </h2>

        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7 max-w-2xl">
          Route to the right support path with minimum data, clear expectations, and no unnecessary friction.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="#support-form"
            className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity text-center"
          >
            Start a support request
          </Link>
          <Link
            href="/talk-to-an-expert"
            className="px-7 py-3.5 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-slate-400 text-white text-base font-bold font-['Space_Grotesk'] hover:bg-white/10 transition-colors text-center"
          >
            Talk to an expert
          </Link>
        </div>

        <span className="text-gray-400 text-sm font-normal font-['Space_Grotesk'] leading-6 pt-2">
          Help and recovery come before sales. Your data is used for operational support processing only.
        </span>
      </div>
    </section>
  );
}
