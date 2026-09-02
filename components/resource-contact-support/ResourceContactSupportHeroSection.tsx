import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {  TriangleAlert } from 'lucide-react';
import section1Bg from '@/public/images/resource-contact-support/section-1bg.png';
import supportDeskImg from '@/public/images/resource-contact-support/Support Desk Image.png';

export default function ResourceContactSupportHeroSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-950/60 flex justify-start items-center gap-10 overflow-hidden z-10 border-b border-gray-800">
      {/* Background Image */}
      {section1Bg && (
        <div className="absolute inset-0 pointer-events-none z-0 ">
          <Image
            src={section1Bg}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column Content */}
        <div className="lg:col-span-7 flex flex-col justify-start items-start gap-8">
          {/* Sub-badge */}
          <div className="px-3 py-1.5 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-blue-500 inline-flex items-center gap-2 bg-blue-500/10">
            <div className="size-1.5 bg-blue-500 rounded-[3px]" />
            <span className="text-blue-500 text-xs font-bold font-['Space_Grotesk'] tracking-wider uppercase">
              CONTACT SUPPORT
            </span>
          </div>

          {/* Title */}
          <h1 className="w-full text-slate-100 text-4xl sm:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[74px]">
            Get help with ZoikoStream
          </h1>

          {/* Subtitle */}
          <p className="w-full text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Tell us what you need help with. We will route you to the right support path and only ask for the information needed to continue.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#support-form"
              className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] text-zinc-900 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity text-center"
            >
              Start a support request
            </Link>
            <Link
              href="/talk-to-an-expert"
              className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-100 text-slate-100 text-base font-bold font-['Space_Grotesk'] hover:bg-white/10 transition-colors text-center"
            >
              Talk to an expert
            </Link>
          </div>

          {/* Notice Subtext */}
          <div className="flex items-center gap-2 text-slate-400 text-xm font-normal font-['Space_Grotesk'] leading-6">
            <TriangleAlert className="size-3.5 text-slate-400 shrink-0" />
            <span>Do not include passwords, API secrets, private keys, or sensitive customer content.</span>
          </div>
        </div>

        {/* Right Image Card */}
        <div className="lg:col-span-5 w-full h-96 rounded-3xl shadow-2xl outline outline-2 outline-offset-[-2px] outline-gray-800 overflow-hidden relative bg-gray-900">
          <Image
            src={supportDeskImg}
            alt="Support Desk"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
