import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import {  Users, Video, Shield } from 'lucide-react';

export default function CaseStudiesFitWorkflowSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
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
      <div className="size-[520px] left-[1040px] top-[326px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Ready to see how ZoikoStream fits your workflow?
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Every team operates under unique constraints. Choose the evaluation model that aligns best with your architecture process.
        </p>
      </div>

      {/* 3 Action Cards */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="p-8 bg-white rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-between items-start gap-6 shadow-[0px_4px_12px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <div className="w-full flex justify-between items-center">
              <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
                Talk to an expert
              </h3>
              <div className="size-8 bg-indigo-50 rounded-md flex justify-center items-center">
                <Users className="w-4 h-4 text-blue-500" />
              </div>
            </div>
            <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
              Connect directly with a Principal Solutions Architect to evaluate custom schemas, multi-CDN scale targets, or pricing models.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="w-full py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
          >
            <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
              Book architect review
            </span>
          </Link>
        </div>

        {/* Card 2 */}
        <div className="p-8 bg-white rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-between items-start gap-6 shadow-[0px_4px_12px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <div className="w-full flex justify-between items-center">
              <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
                Plan a Live Event
              </h3>
              <div className="size-8 bg-indigo-50 rounded-md flex justify-center items-center">
                <Video className="w-4 h-4 text-blue-500" />
              </div>
            </div>
            <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
              For broadcast planners requiring white-glove event setup, dedicated signal monitoring, and absolute redundant paths.
            </p>
          </div>

          <Link
            href="/live-event-guide"
            className="w-full py-3.5 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-blue-500 flex justify-center items-center hover:bg-blue-50 transition-colors"
          >
            <span className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
              Plan a live event
            </span>
          </Link>
        </div>

        {/* Card 3 */}
        <div className="p-8 bg-white rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-between items-start gap-6 shadow-[0px_4px_12px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <div className="w-full flex justify-between items-center">
              <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
                Review Security &amp; Trust
              </h3>
              <div className="size-8 bg-indigo-50 rounded-md flex justify-center items-center">
                <Shield className="w-4 h-4 text-blue-500" />
              </div>
            </div>
            <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
              Verify our compliance mappings, download SSO setup guides, and inspect current real-time system SLA telemetry.
            </p>
          </div>

          <Link
            href="/about-us"
            className="w-full py-3.5 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-blue-500 flex justify-center items-center hover:bg-blue-50 transition-colors"
          >
            <span className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
              Open Trust Center
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
