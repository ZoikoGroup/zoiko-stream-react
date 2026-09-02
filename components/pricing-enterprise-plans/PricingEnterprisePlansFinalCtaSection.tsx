import React from 'react';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function PricingEnterprisePlansFinalCtaSection() {
  return (
    <section id="quote-request" className="relative w-full px-4 sm:px-8 border-white  lg:px-28 py-20 lg:py-28 bg-zinc-950 flex flex-col justify-center items-start gap-12 overflow-hidden z-10">
      {/* Radial Teal Overlay */}
      <div className="absolute inset-0 bg-radial-[at_15%_20%] from-teal-400/20 to-teal-400/0 to 55% pointer-events-none z-0" />

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column Form / Details */}
        <div className="lg:col-span-6 flex flex-col justify-start items-start gap-6">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-400 rounded-[3px]" />
            <span className="text-sky-300 text-xs font-bold font-['Inter'] uppercase tracking-wider">
              Ready for a scoping conversation?
            </span>
          </div>

          <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Sora'] leading-tight">
            Request an enterprise quote.
          </h2>

          <p className="text-neutral-300 text-base font-normal font-['Inter'] leading-relaxed max-w-xl">
            We&apos;ll ask about your deployment scale, Live Events needs, integration complexity, and security requirements — then route you to the right commercial specialist.
          </p>

          <div className="pt-2">
            <Link
              href="/request-enterprise-quote"
              className="px-7 py-3.5 bg-gradient-to-r from-teal-300 to-blue-400 rounded-[10px] text-gray-800 text-base font-semibold font-['Inter'] hover:opacity-90 transition-opacity inline-block text-center"
            >
              Request enterprise quote
            </Link>
          </div>
        </div>

        {/* Right Transparency Card */}
        <div className="lg:col-span-6 w-full bg-slate-700 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-700 p-6 sm:p-8 flex flex-col gap-6 shadow-xl">
          <h3 className="text-white text-base font-bold font-['Sora']">
            What&apos;s shared with our commercial team
          </h3>

          <ul className="flex flex-col divide-y divide-zinc-700 text-neutral-300 text-xs font-normal font-['Inter']">
            <li className="py-3">Your selected scoping reason</li>
            <li className="py-3">Any pricing dimensions you&apos;ve reviewed on this page (removable before sending)</li>
            <li className="py-3">Your name, work email, and company (minimum necessary)</li>
            <li className="py-3">Operational consent to be contacted — separate from optional marketing consent, never pre-checked</li>
          </ul>

          <div className="p-4 bg-orange-700/20 rounded-lg flex items-start gap-3">
            <p className="text-stone-300 text-xs font-normal font-['Inter'] leading-relaxed">
              Don&apos;t include credentials, private media, security details, or confidential business information in your request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
