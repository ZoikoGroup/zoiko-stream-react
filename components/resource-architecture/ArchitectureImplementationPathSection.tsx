import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import rect1 from '@/public/images/resources-architecture/Rectangle (3).png';
import rect2 from '@/public/images/resources-architecture/Rectangle (4).png';
import rect5 from '@/public/images/resources-architecture/Rectangle (5).png';
import rect6 from '@/public/images/resources-architecture/Rectangle (6).png';
import rect7 from '@/public/images/resources-architecture/Rectangle (7).png';
import rect8 from '@/public/images/resources-architecture/Rectangle (8).png';

const PATHS = [
  {
    title: 'Understand the pattern',
    description:
      'Stay in Architecture — explore reference designs and composition patterns.',
    cta: 'View architectures →',
    href: '#patterns',
    image: rect1,
  },
  {
    title: 'Implement a task',
    description:
      'Follow task-oriented walkthroughs and tutorials in our step-by-step Guides.',
    cta: 'Browse guides →',
    href: '/live-event-guide',
    image: rect2,
  },
  {
    title: 'Verify technical behavior',
    description:
      'Check authoritative product contracts and behaviors in Developer documentation.',
    cta: 'Read docs →',
    href: '/developer-documentation',
    image: rect5,
  },
  {
    title: 'Inspect API endpoints',
    description:
      'Review comprehensive endpoint fields, parameter specifications, and schema responses.',
    cta: 'API reference →',
    href: '/api-reference',
    image: rect6,
  },
  {
    title: 'Validate availability',
    description:
      'Check current live service health, system latency metrics, and history records.',
    cta: 'System status →',
    href: '/developers-system-status',
    image: rect7,
  },
  {
    title: 'Get implementation help',
    description:
      'Contact our expert support team or request custom architecture verification.',
    cta: 'Get help →',
    href: '/contact-us',
    image: rect8,
  },
];

export default function ArchitectureImplementationPathSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
      {/* Background image & Glow overlay snippet */}
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
      <div className="size-[520px] left-[1068px] top-[620px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Choose your implementation path.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Every architecture pattern connects to authoritative next steps based on what you need.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PATHS.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-40 bg-slate-200 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full p-6 flex flex-col justify-between items-start gap-4 flex-1">
              <div className="flex flex-col justify-start items-start gap-2">
                <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
                  {item.description}
                </p>
              </div>
              <Link
                href={item.href}
                className="text-blue-600 hover:text-blue-700 text-sm font-bold font-['Space_Grotesk'] transition-colors"
              >
                {item.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
