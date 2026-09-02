import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

export default function ResourceContactSupportConfirmationSection() {
  return (
    <section id="confirmation" className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-white overflow-hidden z-10">
      {/* Background Snippet */}
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
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-3 max-w-4xl">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          Your request has been received
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Track your support case and understand what happens next.
        </p>
      </div>

      {/* Confirmation Case Card */}
      <div className="relative z-10 w-full max-w-5xl p-6 sm:p-10 bg-slate-100 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-8 shadow-sm">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="size-10 bg-emerald-500/10 rounded-full flex justify-center items-center shrink-0">
              <Check className="size-5 text-emerald-500" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
                Case #ZS-2026-08-31-4729
              </h3>
              <span className="text-slate-600 text-xs font-normal font-['Space_Grotesk']">
                Submitted on August 31, 2026 at 17:50 GMT
              </span>
            </div>
          </div>

          <span className="px-3.5 py-1.5 bg-emerald-100 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-emerald-500 text-emerald-800 text-xs font-bold font-['Space_Grotesk']">
            SUBMITTED
          </span>
        </div>

        <div className="w-full h-0 border-b border-gray-200" />

        {/* Timeline */}
        <div className="w-full flex flex-col gap-6">
          <span className="text-slate-600 text-xs font-bold font-['Space_Grotesk'] tracking-wide uppercase">
            CASE RECOVERY PROCESS TIMELINE
          </span>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="size-6 bg-emerald-500 rounded-full flex justify-center items-center shrink-0">
                  <Check className="size-3.5 text-white" />
                </div>
                <div className="flex-1 h-[3px] bg-emerald-500" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                  Submitted
                </span>
                <span className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                  Request received. Stable reference ID assigned.
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="size-6 bg-white rounded-full outline outline-2 outline-offset-[-2px] outline-blue-500 flex justify-center items-center shrink-0">
                  <div className="size-2 bg-blue-500 rounded-full" />
                </div>
                <div className="flex-1 h-[3px] bg-gray-200" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                  Queued
                </span>
                <span className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                  Your case is in the support queue.
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="size-6 bg-white rounded-full outline outline-2 outline-offset-[-2px] outline-gray-200 flex justify-center items-center text-slate-600 text-xs font-bold font-['Space_Grotesk'] shrink-0">
                  3
                </div>
                <div className="flex-1 h-[3px] bg-gray-200" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-slate-600 text-base font-bold font-['Space_Grotesk']">
                  In progress
                </span>
                <span className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                  A support specialist is reviewing your case.
                </span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="size-6 bg-white rounded-full outline outline-2 outline-offset-[-2px] outline-gray-200 flex justify-center items-center text-slate-600 text-xs font-bold font-['Space_Grotesk'] shrink-0">
                  4
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-slate-600 text-base font-bold font-['Space_Grotesk']">
                  Resolved
                </span>
                <span className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                  Resolution provided. Reopen if the issue recurs.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-0 border-b border-gray-200" />

        {/* Buttons & Note */}
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#case-details"
              className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity text-center"
            >
              View case details
            </Link>
            <Link
              href="/resource-help-center"
              className="px-7 py-3.5 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 text-slate-900 text-base font-bold font-['Space_Grotesk'] hover:bg-slate-200 transition-colors text-center"
            >
              Return to Help Center
            </Link>
          </div>

          <span className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
            Note: No response time commitment is implied unless your account entitlement explicitly includes one.
          </span>
        </div>
      </div>
    </section>
  );
}
