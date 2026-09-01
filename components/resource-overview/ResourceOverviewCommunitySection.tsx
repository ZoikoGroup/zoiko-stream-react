import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg147 from '@/public/images/Organization-overview/bg (147).png';
import rect7 from '@/public/images/resources-overview/Thumbnail.png';
import rect8 from '@/public/images/resources-overview/Thumbnail (1).png';
import rect9 from '@/public/images/resources-overview/Thumbnail (2).png';
import rect10 from '@/public/images/resources-overview/Thumbnail (3).png';
import rect11 from '@/public/images/resources-overview/Thumbnail (4).png';
import rect12 from '@/public/images/resources-overview/Thumbnail (5).png';

const COMMUNITY_ITEMS = [
  {
    title: 'Developer forums',
    description: 'Ask questions, share solutions, and discuss best practices with fellow developers.',
    actionText: 'Join the forums →',
    image: rect7,
    href: '#forums',
  },
  {
    title: 'Discord community',
    description: 'Real-time chat channels organized by topic, region, and expertise level.',
    actionText: 'Join Discord →',
    image: rect8,
    href: '#discord',
  },
  {
    title: 'Open source projects',
    description: 'Explore and contribute to ZoikoStream open-source SDKs, tools, and sample applications.',
    actionText: 'View projects →',
    image: rect9,
    href: '/sample-application',
  },
  {
    title: 'Community events',
    description: 'Local meetups, virtual hangouts, hackathons, and community-led workshops.',
    actionText: 'Browse events →',
    image: rect10,
    href: '/resource-webinar-and-events',
  },
  {
    title: 'Champion program',
    description: 'Recognition, rewards, early access, and influence for active community contributors.',
    actionText: 'Learn more →',
    image: rect11,
    href: '#champion',
  },
  {
    title: 'Stack Overflow',
    description: 'Browse tagged questions and answers from the broader developer ecosystem.',
    actionText: 'Search on Stack Overflow →',
    image: rect12,
    href: '#stackoverflow',
  },
];

export default function ResourceOverviewCommunitySection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
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
      <div className="size-96 -left-36 -top-20 absolute bg-teal-400/5 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[500px] left-[1080px] top-[676px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-950 text-4xl font-bold font-['Space_Grotesk'] leading-[48px]">
          Community
        </h2>
        <p className="text-slate-600 text-lg font-normal font-['Space_Grotesk'] leading-7">
          Connect, contribute, and grow with the ZoikoStream community
        </p>
      </div>

      {/* 6 Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COMMUNITY_ITEMS.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden group shadow-xs hover:border-blue-400 transition-all"
          >
            <div className="relative w-full h-44 bg-gray-100 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-between items-start gap-4 flex-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-950 text-xl font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
                  {item.description}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={item.href}
                  className="text-blue-500 hover:text-blue-600 text-sm font-bold font-['Space_Grotesk'] transition-colors"
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
