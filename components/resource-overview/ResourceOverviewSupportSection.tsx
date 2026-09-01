import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg5 from '@/public/images/resources-overview/section-5bg.png';
import thumb7 from '@/public/images/resources-overview/Rectangle (12).png';
import thumb8 from '@/public/images/resources-overview/Rectangle (13).png';
import thumb9 from '@/public/images/resources-overview/Rectangle (14).png';
import thumb10 from '@/public/images/resources-overview/Rectangle (15).png';
import thumb11 from '@/public/images/resources-overview/Rectangle (16).png';
import thumb0 from '@/public/images/resources-overview/Rectangle.png';

const SUPPORT_ITEMS = [
  {
    title: 'Help Center',
    description: 'Step-by-step help and troubleshooting.',
    actionText: 'Open Help Center →',
    image: thumb7,
    href: '/resource-help-center',
  },
  {
    title: 'Contact support',
    description: 'Direct support escalation when self-service is insufficient.',
    actionText: 'Contact support →',
    image: thumb8,
    href: '/contact-us',
  },
  {
    title: 'Developer documentation',
    description: 'Technical concepts, implementation guidance, examples, and production patterns.',
    actionText: 'Open developer documentation →',
    image: thumb9,
    href: '/developer-documentation',
  },
  {
    title: 'API reference',
    description: 'Exact endpoints, parameters, schemas, events, and contract reference.',
    actionText: 'Open API reference →',
    image: thumb10,
    href: '/developer-api-reference',
  },
  {
    title: 'Live Events planning guide',
    description: 'Planning and preparation guidance for professionally managed live events.',
    actionText: 'Open planning guide →',
    image: thumb11,
    href: '/live-event-guide',
  },
  {
    title: 'Service updates',
    description: 'Planned maintenance, service changes, and operational notices.',
    actionText: 'View service updates →',
    image: thumb0,
    href: '/resource-change-log',
  },
];

export default function ResourceOverviewSupportSection() {
  return (
    <section id="support" className="relative w-full px-4 sm:px-8 lg:px-28 py-24 bg-gray-950 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg5}
          alt="Support Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-4xl font-bold font-['Space_Grotesk'] leading-[48px]">
          Support
        </h2>
        <p className="text-slate-400 text-lg font-normal font-['Space_Grotesk'] leading-7">
          Get help, access references, plan events, and connect
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SUPPORT_ITEMS.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden group shadow-md"
          >
            <div className="relative w-full h-44 bg-gray-900 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-between items-start gap-4 flex-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
                  {item.description}
                </p>
              </div>

              <div className="pt-2">
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
