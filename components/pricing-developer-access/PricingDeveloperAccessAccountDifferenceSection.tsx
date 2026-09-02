import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function PricingDeveloperAccessAccountDifferenceSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-slate-100 flex flex-col justify-start items-start gap-12 border-b border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            PUBLIC VS. ACCOUNT-SPECIFIC
          </span>
        </div>
        <h2 className="text-zinc-900 text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] leading-tight max-w-3xl">
          This page is public information — your account may differ.
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          Negotiated terms, credits, or contract-specific rates always override the public estimate shown above.
        </p>
      </div>

      {/* 2 Comparison Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: Public Page */}
        <div className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 p-7 flex flex-col justify-between gap-6 shadow-xs">
          <div className="flex flex-col gap-5">
            <h3 className="text-zinc-900 text-base font-bold font-['Space_Grotesk']">
              This page (public)
            </h3>

            <ul className="flex flex-col gap-3 text-sm text-gray-500 font-['Inter']">
              <li className="flex items-center gap-2.5">
                <span>Illustrative usage dimensions and estimate</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span>Current access state for new developers</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span>No account-specific data</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span>No identity capture required to view</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2: Your Account */}
        <div className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 p-7 flex flex-col justify-between gap-6 shadow-xs">
          <div className="flex flex-col gap-5">
            <h3 className="text-zinc-900 text-base font-bold font-['Space_Grotesk']">
              Your account (if applicable)
            </h3>

            <ul className="flex flex-col gap-3 text-sm text-gray-500 font-['Inter']">
              <li className="flex items-center gap-2.5">
                <span>Actual usage and current invoice</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span>Any negotiated or contract-specific rate</span>
              </li>
              <li className="flex items-center gap-2.5">

                <span>Payment method and billing history</span>
              </li>
            </ul>
          </div>

          <div className="pt-2">
            <Link
              href="/signin"
              className="w-full sm:w-auto px-6 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-800 text-zinc-900 text-base font-semibold font-['Inter'] hover:bg-slate-100 transition-colors inline-block text-center"
            >
              Sign in for account & billing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
