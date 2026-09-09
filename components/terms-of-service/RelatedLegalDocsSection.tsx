import React from 'react';
import Link from 'next/link';

export function RelatedLegalDocsSection() {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-16 bg-[#f1f5f9]">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col justify-start items-start gap-6">
        
        {/* Section Header */}
        <div className="w-full max-w-[740px] pt-1.5 flex flex-col justify-start items-start gap-3.5">
          <div className="inline-flex justify-start items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#4483f9] rounded-[3px]"></div>
            <span className="text-[#4483f9] text-xs font-normal font-mono uppercase leading-5 tracking-wide">
              SPECIALIST AUTHORITIES
            </span>
          </div>
          <div className="w-full flex flex-col justify-start items-start">
            <h2 className="text-[#0f172a] text-2xl font-semibold font-sans leading-8">
              Related.
            </h2>
          </div>
        </div>

        {/* 4 Cards */}
        <div className="w-full inline-flex flex-col md:flex-row justify-center items-stretch gap-3.5">
          
          <Link
            href="/zoikostream-privacy-notice"
            className="flex-1 px-4 pt-10 pb-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-1.5 hover:border-[#4483f9] transition-colors group"
          >
            <div className="w-full pb-[0.59px] flex flex-col justify-start items-start">
              <h3 className="text-[#0f172a] text-sm font-bold font-sans leading-5 group-hover:text-[#4483f9] transition-colors">
                Privacy notice
              </h3>
            </div>
            <div className="w-full pb-2.5 flex flex-col justify-start items-start">
              <p className="text-slate-600 text-xs font-normal font-sans leading-5">
                How we handle personal data.
              </p>
            </div>
            <span className="text-[#4483f9] text-xs font-semibold font-sans leading-5">
              Read Privacy notice &rarr;
            </span>
          </Link>

          <Link
            href="/acceptable-use"
            className="flex-1 px-4 pt-10 pb-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-1.5 hover:border-[#4483f9] transition-colors group"
          >
            <div className="w-full pb-[0.59px] flex flex-col justify-start items-start">
              <h3 className="text-[#0f172a] text-sm font-bold font-sans leading-5 group-hover:text-[#4483f9] transition-colors">
                Acceptable use
              </h3>
            </div>
            <div className="w-full flex flex-col justify-start items-start">
              <p className="text-slate-600 text-xs font-normal font-sans leading-5">
                Rules for what is and isn&apos;t permitted.
              </p>
            </div>
            <div className="pt-3 inline-flex justify-center items-center">
              <span className="text-[#4483f9] text-xs font-semibold font-sans">
                Read Acceptable use &rarr;
              </span>
            </div>
          </Link>

          <Link
            href="/data-processing-addendum"
            className="flex-1 px-4 pt-10 pb-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-1.5 hover:border-[#4483f9] transition-colors group"
          >
            <div className="w-full pb-[0.59px] flex flex-col justify-start items-start">
              <h3 className="text-[#0f172a] text-sm font-bold font-sans leading-5 group-hover:text-[#4483f9] transition-colors">
                Data processing addendum
              </h3>
            </div>
            <div className="w-full pb-2.5 flex flex-col justify-start items-start">
              <p className="text-slate-600 text-xs font-normal font-sans leading-5">
                For customers requiring a DPA.
              </p>
            </div>
            <span className="text-[#4483f9] text-xs font-semibold font-sans leading-5">
              Read DPA &rarr;
            </span>
          </Link>

          <Link
            href="/legal-overview"
            className="flex-1 px-4 pt-10 pb-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-1.5 hover:border-[#4483f9] transition-colors group"
          >
            <div className="w-full pb-[0.59px] flex flex-col justify-start items-start">
              <h3 className="text-[#0f172a] text-sm font-bold font-sans leading-5 group-hover:text-[#4483f9] transition-colors">
                Legal overview
              </h3>
            </div>
            <div className="w-full pb-2.5 flex flex-col justify-start items-start">
              <p className="text-slate-600 text-xs font-normal font-sans leading-5">
                All current ZoikoStream legal documents.
              </p>
            </div>
            <span className="text-[#4483f9] text-xs font-semibold font-sans leading-5">
              Visit Legal &rarr;
            </span>
          </Link>

        </div>

        {/* Contact Legal Button */}
        <div className="w-full pt-6 inline-flex justify-start items-start flex-wrap">
          <Link
            href="/contact-us"
            className="min-h-12 px-6 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-300 text-[#0f172a] text-base font-semibold font-sans leading-6 hover:bg-slate-200 transition-colors inline-flex justify-center items-center"
          >
            Contact Legal
          </Link>
        </div>

      </div>
    </section>
  );
}
