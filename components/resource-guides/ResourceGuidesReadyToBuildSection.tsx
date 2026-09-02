import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import cardImg6 from '@/public/images/resource-guides/card-image (6).png';
import cardImg7 from '@/public/images/resource-guides/card-image (7).png';
import cardImg8 from '@/public/images/resource-guides/card-image (8).png';

export default function ResourceGuidesReadyToBuildSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden z-10">
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
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[48px]">
          Ready to build?
        </h2>
      </div>

      {/* 3 Action Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 p-8 flex flex-col justify-between items-start gap-6 hover:shadow-xl transition-shadow group">
          <div className="relative w-full h-36 rounded-lg bg-gray-900 overflow-hidden">
            <Image
              src={cardImg6}
              alt="Start building"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="w-full flex flex-col justify-start items-start gap-4">
            <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
              Start building
            </h3>
            <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
              Jump into implementation immediately with our interactive quick-start tutorials and live API sandboxes.
            </p>
          </div>

          <div className="w-full pt-4">
            <Link
              href="/start-building"
              className="w-full px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
            >
              Start building now
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 p-8 flex flex-col justify-between items-start gap-6 hover:shadow-xl transition-shadow group">
          <div className="relative w-full h-36 rounded-lg bg-gray-900 overflow-hidden">
            <Image
              src={cardImg7}
              alt="Plan a live event"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="w-full flex flex-col justify-start items-start gap-4">
            <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
              Plan a live event
            </h3>
            <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
              Prepare your next live streaming event with our dedicated planners, backup encoders, and stream engineers.
            </p>
          </div>

          <div className="w-full pt-4">
            <Link
              href="/plan-a-live-event"
              className="w-full px-7 py-3.5 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-blue-500 flex justify-center items-center text-blue-500 text-base font-bold font-['Space_Grotesk'] hover:bg-blue-50 transition-colors"
            >
              Plan your event
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 p-8 flex flex-col justify-between items-start gap-6 hover:shadow-xl transition-shadow group">
          <div className="relative w-full h-36 rounded-lg bg-gray-900 overflow-hidden">
            <Image
              src={cardImg8}
              alt="Talk to an expert"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="w-full flex flex-col justify-start items-start gap-4">
            <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
              Talk to an expert
            </h3>
            <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
              Get personalized guidance for scale architecture, custom workflow models, or enterprise SLAs.
            </p>
          </div>

          <div className="w-full pt-4">
            <Link
              href="/talk-to-an-expert"
              className="w-full px-7 py-3.5 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-blue-500 flex justify-center items-center text-blue-500 text-base font-bold font-['Space_Grotesk'] hover:bg-blue-50 transition-colors"
            >
              Schedule a call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
