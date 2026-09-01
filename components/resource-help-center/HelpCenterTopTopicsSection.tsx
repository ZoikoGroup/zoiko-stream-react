import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import bg3 from '@/public/images/resource-help-center/section-3bg.png';
import img52 from '@/public/images/resource-help-center/card-image (52).png';
import img53 from '@/public/images/resource-help-center/card-image (53).png';
import img54 from '@/public/images/resource-help-center/card-image (54).png';
import img55 from '@/public/images/resource-help-center/card-image (55).png';
import img56 from '@/public/images/resource-help-center/card-image (56).png';
import img57 from '@/public/images/resource-help-center/card-image (57).png';

const TOPICS = [
  {
    title: 'Getting Started',
    count: '12 articles',
    image: img52,
    href: '#top-articles',
  },
  {
    title: 'Stream Setup & Config',
    count: '18 articles',
    image: img53,
    href: '#top-articles',
  },
  {
    title: 'Playback & Player Issues',
    count: '15 articles',
    image: img54,
    href: '#top-articles',
  },
  {
    title: 'Account & Billing',
    count: '9 articles',
    image: img55,
    href: '#top-articles',
  },
  {
    title: 'Authentication & Access',
    count: '14 articles',
    image: img56,
    href: '#top-articles',
  },
  {
    title: 'Recording & Replay',
    count: '11 articles',
    image: img57,
    href: '#top-articles',
  },
];

export default function HelpCenterTopTopicsSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg3}
          alt="Top Topics Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Top support topics
        </h2>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {TOPICS.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all group"
          >
            <div className="relative w-full h-32 bg-gray-950 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-5 flex justify-between items-center gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <span className="text-slate-400 text-xs font-normal font-['Inter']">
                  {item.count}
                </span>
              </div>

              <Link
                href={item.href}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full flex justify-center items-center transition-colors shrink-0"
              >
                <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
