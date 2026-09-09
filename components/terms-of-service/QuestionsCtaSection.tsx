import React from 'react';
import Link from 'next/link';

export function QuestionsCtaSection() {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-20 py-14 bg-[#0b1329] flex flex-col justify-start items-start overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[1440px] h-80 left-0 top-0 pointer-events-none bg-[radial-gradient(ellipse_at_15%_20%,_rgba(6,182,212,0.14),_transparent_55%)]"></div>
      
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-8 pt-1.5 flex flex-col justify-start items-start gap-2.5">
        
        {/* Badge */}
        <div className="inline-flex justify-start items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#4483f9] rounded-[3px]"></div>
          <span className="text-[#4483f9] text-xs font-normal font-mono uppercase leading-5 tracking-wide">
            QUESTIONS?
          </span>
        </div>

        {/* Title */}
        <div className="w-full max-w-[560px] pt-1.5 pb-[0.59px] flex flex-col justify-start items-start">
          <h2 className="text-[#f8fafc] text-2xl font-semibold font-sans leading-10">
            Have a question about these Terms?
          </h2>
        </div>

        {/* Subtitle */}
        <div className="w-full max-w-[520px] flex flex-col justify-start items-start">
          <p className="text-slate-300 text-sm font-normal font-sans leading-6">
            Contact Legal directly, or explore related policies above.
          </p>
        </div>

        {/* Buttons */}
        <div className="w-full pt-2.5 inline-flex justify-start items-center gap-3.5 flex-wrap">
          <Link
            href="/contact-us"
            className="min-h-12 px-6 py-3.5 bg-gradient-to-r from-cyan-400 to-[#4483f9] rounded-[10px] outline outline-1 outline-offset-[-1px] outline-transparent flex justify-start items-center hover:opacity-90 transition-opacity"
          >
            <span className="text-[#0b1329] text-base font-semibold font-sans leading-6">
              Contact Legal
            </span>
          </Link>

          <Link
            href="/legal-overview"
            className="min-h-12 px-6 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-700 flex justify-start items-center hover:bg-slate-800 transition-colors"
          >
            <span className="text-slate-200 text-base font-semibold font-sans leading-6">
              Back to Legal
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
