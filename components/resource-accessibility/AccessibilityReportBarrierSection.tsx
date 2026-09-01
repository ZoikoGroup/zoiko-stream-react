'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function AccessibilityReportBarrierSection() {
  return (
    <section id="report-barrier" className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-gray-950/75 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/resource-accessibility/section-9bg.png"
          alt="Tested Technology Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Report a barrier or request help
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          If you face an accessibility barrier, report it directly. Our team reviews every ticket.
        </p>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-10 lg:gap-16">
        {/* Left Form Box */}
        <div className="flex-1 w-full p-6 sm:p-10 bg-zinc-900/80 backdrop-blur-xs rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start gap-6 shadow-xl">
          <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
            Barrier Report Form
          </h3>

          <form className="w-full flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="w-full flex flex-col gap-2">
              <label className="text-slate-400 text-xs font-semibold font-['Inter']">
                Your Email Address *
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full p-3 bg-slate-900 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 text-slate-200 placeholder:text-slate-500 text-sm font-normal font-['Inter'] focus:outline-teal-400"
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <label className="text-slate-400 text-xs font-semibold font-['Inter']">
                Affected Area *
              </label>
              <div className="relative w-full">
                <select className="w-full p-3 bg-slate-900 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 text-white text-sm font-normal font-['Inter'] appearance-none focus:outline-teal-400">
                  <option value="web-app">Web Application</option>
                  <option value="player-sdk">Player SDK</option>
                  <option value="admin-console">Admin Console</option>
                  <option value="mobile-app">Mobile App</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
              </div>
            </div>

            <div className="w-full flex flex-col gap-2">
              <label className="text-slate-400 text-xs font-semibold font-['Inter']">
                Description of Barrier *
              </label>
              <textarea
                rows={4}
                placeholder="Please describe what you were trying to do and the barrier encountered..."
                className="w-full p-3 bg-slate-900 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 text-slate-200 placeholder:text-slate-500 text-sm font-normal font-['Inter'] focus:outline-teal-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity self-start mt-2"
            >
              <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
                Submit Report
              </span>
            </button>
          </form>

          <span className="text-slate-500 text-xs font-normal font-['Inter'] leading-relaxed pt-2 border-t border-gray-800/80 w-full">
            We do not require disability disclosure. Information is used strictly for technical testing and barrier resolution purposes.
          </span>
        </div>

        {/* Right Help Cards */}
        <div className="w-full lg:w-96 flex flex-col gap-6 shrink-0">
          <div className="w-full p-6 bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-3">
            <h4 className="text-white text-base font-bold font-['Space_Grotesk']">
              Live Platform Issues
            </h4>
            <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
              If you are currently experiencing a live streaming transmission outage or service interruption.
            </p>
            <Link
              href="/resource-system-status"
              className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 text-xs font-bold font-['Space_Grotesk'] underline pt-1 transition-colors"
            >
              <span>Go to System Status</span>
              <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
            </Link>
          </div>

          <div className="w-full p-6 bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-3">
            <h4 className="text-white text-base font-bold font-['Space_Grotesk']">
              Security Reporting
            </h4>
            <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
              To report vulnerabilities, cryptographic failures, or secure SSO logging issues.
            </p>
            <Link
              href="/resource-security-trust-center"
              className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 text-xs font-bold font-['Space_Grotesk'] underline pt-1 transition-colors"
            >
              <span>Security Center</span>
              <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
            </Link>
          </div>

          <div className="w-full p-6 bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-3">
            <h4 className="text-white text-base font-bold font-['Space_Grotesk']">
              Standard Account Help
            </h4>
            <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
              For general setup assistance, administrative dashboard setup, or pricing questions.
            </p>
            <Link
              href="/resources"
              className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 text-xs font-bold font-['Space_Grotesk'] underline pt-1 transition-colors"
            >
              <span>Visit Help Center</span>
              <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
