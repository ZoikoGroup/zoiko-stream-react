import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import thumb9 from '@/public/images/resource-webinar-and-events/Thumbnail (9).png';
import thumb10 from '@/public/images/resource-webinar-and-events/Thumbnail (10).png';
import thumb11 from '@/public/images/resource-webinar-and-events/Thumbnail (11).png';
import thumb12 from '@/public/images/resource-webinar-and-events/Thumbnail (12).png';
import thumb13 from '@/public/images/resource-webinar-and-events/Thumbnail (13).png';
import thumb14 from '@/public/images/resource-webinar-and-events/Thumbnail (14).png';

const RESOURCES = [
  {
    tag: 'GUIDE',
    title: 'Guides & Best Practices',
    description:
      'Step-by-step production playbooks, administrative templates, and accessibility frameworks.',
    href: '/live-event-guide',
    image: thumb9,
  },
  {
    tag: 'ARCHITECTURE',
    title: 'Architecture Overview',
    description:
      'Explore highly scalable multi-stage media pipelines built on reliable cloud logic.',
    href: '/resource-architecture',
    image: thumb10,
  },
  {
    tag: 'VIDEO TUTORIAL',
    title: 'Video Tutorials',
    description:
      'Guided video walkthroughs covering basic stream setups and advanced API interactions.',
    href: '/resource-video-tutorial',
    image: thumb11,
  },
  {
    tag: 'DOCUMENTATION',
    title: 'Developer Documentation',
    description:
      'Deep-dive implementation guides, SDK codebases, and production readiness schemas.',
    href: '/developer-documentation',
    image: thumb12,
  },
  {
    tag: 'API REFERENCE',
    title: 'API Reference',
    description:
      'Comprehensive operational API specifications and payload examples for rapid integration.',
    href: '/api-reference',
    image: thumb13,
  },
  {
    tag: 'HELP CENTER',
    title: 'Help Center',
    description:
      'Browse extensive platform configuration articles and technical troubleshooting guides.',
    href: '/contact-us',
    image: thumb14,
  },
];

export default function WebinarRelatedResourcesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
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
      <div className="size-[520px] left-[1068px] top-[620px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Related resources
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Continue learning with these authoritative ZoikoStream resources.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESOURCES.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.05)] outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-40 bg-slate-200 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full p-5 flex flex-col justify-between items-start gap-3 flex-1">
              <div className="px-2.5 py-1 bg-emerald-500/10 rounded-full outline outline-1 outline-offset-[-1px] outline-emerald-500/30">
                <span className="text-teal-600 text-xs font-bold font-['Space_Grotesk'] uppercase">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk'] leading-6">
                {item.title}
              </h3>
              <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                {item.description}
              </p>

              <div className="pt-2">
                <Link
                  href={item.href}
                  className="text-teal-600 hover:text-teal-700 text-xs font-bold font-['Space_Grotesk'] transition-colors"
                >
                  Explore →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
