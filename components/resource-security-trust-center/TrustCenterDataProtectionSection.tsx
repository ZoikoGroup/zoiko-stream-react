import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import bg147 from '@/public/images/Organization-overview/bg (147).png';
import img9 from '@/public/images/resources-security-trust-center/Rectangle (9).png';
import img10 from '@/public/images/resources-security-trust-center/Rectangle (10).png';
import img11 from '@/public/images/resources-security-trust-center/Rectangle (11).png';
import img12 from '@/public/images/resources-security-trust-center/Rectangle (12).png';

const CARDS = [
  {
    title: 'Data Governance',
    description:
      'Understand how we handle, isolate, encrypt, and store customer content metadata globally.',
    image: img9,
  },
  {
    title: 'Privacy Framework',
    description:
      'Understand how we handle, isolate, encrypt, and store customer content metadata globally.',
    image: img10,
  },
  {
    title: 'Legal Handoffs',
    description:
      'Understand how we handle, isolate, encrypt, and store customer content metadata globally.',
    image: img11,
  },
  {
    title: 'Data Processing',
    description:
      'Understand how we handle, isolate, encrypt, and store customer content metadata globally.',
    image: img12,
  },
];

export default function TrustCenterDataProtectionSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-white overflow-hidden">
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
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Data protection and privacy
        </h2>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CARDS.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50/90 backdrop-blur-xs rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden shadow-xs hover:border-blue-500/50 transition-all group"
          >
            <div className="relative w-full h-36 bg-gray-100 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-4 flex flex-col justify-between items-start gap-3 flex-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <Link
                href="/developer-documentation"
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-bold font-['Space_Grotesk'] pt-1 transition-colors"
              >
                <span>Specialist Route</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
