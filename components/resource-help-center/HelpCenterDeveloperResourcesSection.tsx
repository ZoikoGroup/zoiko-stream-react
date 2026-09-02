import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg147 from '@/public/images/Organization-overview/bg (147).png';
import img72 from '@/public/images/resource-help-center/card-image (72).png';
import img73 from '@/public/images/resource-help-center/card-image (73).png';
import img74 from '@/public/images/resource-help-center/card-image (74).png';

const DEV_RESOURCES = [
  {
    title: 'Developer Documentation',
    description:
      'Implementation guides, SDK references, authentication flows, and configuration parameters.',
    actionText: 'Open Docs →',
    href: '/developer-documentation',
    image: img72,
  },
  {
    title: 'API Reference',
    description:
      'Interactive end points, parameter tables, expected payloads, response schemas, and failure code maps.',
    actionText: 'Open API Ref →',
    href: '/developer-documentation',
    image: img73,
  },
  {
    title: 'Technical Changelog',
    description:
      'Continuous technical change history, deprecation timelines, platform migrations, and version notices.',
    actionText: 'Open Changelog →',
    href: '/resource-change-log',
    image: img74,
  },
];

export default function HelpCenterDeveloperResourcesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
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
          Developer and API resources
        </h2>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {DEV_RESOURCES.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50/90 backdrop-blur-xs rounded-xl shadow-[0px_4px_12px_0px_rgba(11,8,16,0.02)] outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden hover:border-blue-500/50 transition-all group"
          >
            <div className="relative w-full h-36 bg-gray-100 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-between items-start gap-3 flex-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={item.href}
                  className="text-blue-600 hover:text-blue-700 text-sm font-bold font-['Space_Grotesk'] transition-colors"
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
