import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import section3Bg from '@/public/images/resource-contact-support/section-3bg.png';

import cardVis0 from '@/public/images/resource-contact-support/Card Visual.png';
import cardVis1 from '@/public/images/resource-contact-support/Card Visual (1).png';
import cardVis2 from '@/public/images/resource-contact-support/Card Visual (2).png';
import cardVis3 from '@/public/images/resource-contact-support/Card Visual (3).png';
import cardVis4 from '@/public/images/resource-contact-support/Card Visual (4).png';

const PATHS = [
  {
    title: 'Product & account',
    desc: 'Help with playback, streaming, configuration, or account issues.',
    image: cardVis0,
  },
  {
    title: 'Developer & API',
    desc: 'SDK, API, webhook, or integration support.',
    image: cardVis1,
  },
  {
    title: 'Live Events',
    desc: 'Planning, setup, or operational event assistance.',
    image: cardVis2,
  },
  {
    title: 'Billing & admin',
    desc: 'Invoices, account administration, or plan changes.',
    image: cardVis3,
  },
  {
    title: 'Something else',
    desc: 'General questions or issues not covered above.',
    image: cardVis4,
  },
];

export default function ResourceContactSupportPathSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-900/90 border-t border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* Background Image */}
      {section3Bg && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <Image src={section3Bg} alt="Background" fill className="object-cover" />
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4 max-w-4xl">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          Choose your support path
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Select the category that best describes your issue. We will ask only what is needed to continue.
        </p>
      </div>

      {/* 5 Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {PATHS.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-gray-700 transition-all group cursor-pointer"
          >
            <div className="relative w-full h-32 bg-gray-900 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-5 flex flex-col justify-start items-start gap-3 flex-1">
              <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                {item.title}
              </h3>

              <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-5">
                {item.desc}
              </p>

              <Link
                href="#support-form"
                className="text-teal-400 hover:text-teal-300 text-xs font-bold font-['Space_Grotesk'] flex items-center gap-1 mt-auto pt-2 transition-colors"
              >
                Select category <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
