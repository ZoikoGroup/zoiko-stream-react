import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg11 from '@/public/images/resource-help-center/section-11bg (2).png';
import img81 from '@/public/images/resource-help-center/card-image (81).png';
import img82 from '@/public/images/resource-help-center/card-image (82).png';

const TRUST_CARDS = [
  {
    title: 'Accessibility',
    description:
      'Report an access barrier, review voluntary product accessibility templates (VPAT), access conformance audit evidence, or find dedicated captioning support guidelines.',
    actionText: 'Submit Barrier Report →',
    href: '/resource-accessibility',
    image: img81,
  },
  {
    title: 'Security & Trust Center',
    description:
      'Access real-time compliance artifacts, retrieve encryption parameters, review SOC2 / ISO reports, download data processing terms, or log discovered vulnerabilities.',
    actionText: 'Open Trust Center →',
    href: '/resource-security-trust-center',
    image: img82,
  },
];

export default function HelpCenterTrustSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg11}
          alt="Trust Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Accessibility and security trust
        </h2>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {TRUST_CARDS.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all group"
          >
            <div className="relative w-full h-44 bg-gray-950 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-between items-start gap-4 flex-1">
              <div className="flex flex-col gap-3">
                <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="w-full pt-3 border-t border-gray-800">
                <Link
                  href={item.href}
                  className="text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] transition-colors"
                >
                  {item.actionText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
