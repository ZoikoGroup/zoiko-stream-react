import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import section3Bg from '@/public/images/resource-customer-stories/section3bg.png';

import cardImg27 from '@/public/images/resource-customer-stories/CardImage (27).png';
import cardImg28 from '@/public/images/resource-customer-stories/CardImage (28).png';
import cardImg29 from '@/public/images/resource-customer-stories/CardImage (29).png';
import cardImg30 from '@/public/images/resource-customer-stories/CardImage (30).png';
import cardImg31 from '@/public/images/resource-customer-stories/CardImage (31).png';
import cardImg32 from '@/public/images/resource-customer-stories/CardImage (32).png';

const STORIES = [
  {
    org: 'Meridian Broadcasting | Media & Entertainment',
    title: 'Scaling live concerts to 50,000 concurrent viewers',
    desc: 'How a media company unified their streaming infrastructure across 12 global regions.',
    quote: '"Zero hiccups during high-peak traffic"',
    tags: ['Live Events', 'WebRTC'],
    image: cardImg27,
    href: '#',
  },
  {
    org: 'GreenPath Education | EdTech',
    title: 'Building accessible virtual classrooms at scale',
    desc: "A university network's journey to reliable, captioned live lectures for 200,000 students.",
    quote: '"Accessible to everyone, instantly"',
    tags: ['Enterprise Video', 'Accessibility'],
    image: cardImg28,
    href: '#',
  },
  {
    org: 'Vanguard Sports Network | Sports Media',
    title: 'Zero-downtime coverage for championship season',
    desc: 'Multi-camera sports streaming with sub-second latency during peak viewership events.',
    quote: '"Sub-second delays for real-time sports"',
    tags: ['Live Events', 'Ultra-Low Latency'],
    image: cardImg29,
    href: '#',
  },
  {
    org: 'Lumina Health | Healthcare',
    title: 'Secure telemedicine video for rural clinics',
    desc: 'HIPAA-compliant video delivery connecting 340 rural clinics to specialist care.',
    quote: '"Diagnostic-quality feed over unstable bandwidth"',
    tags: ['Secure Video', 'HIPAA Compliant'],
    image: cardImg30,
    href: '#',
  },
  {
    org: 'NovaForge Studios | Gaming & Entertainment',
    title: 'Interactive live streaming for game launches',
    desc: 'Real-time viewer interaction and adaptive bitrate delivery for million-viewer gaming events.',
    quote: '"Seamless interactive stream for millions"',
    tags: ['Media Operations', 'Interactive'],
    image: cardImg31,
    href: '#',
  },
  {
    org: 'Atlas Freight Logistics | Enterprise',
    title: 'Training 15,000 warehouse workers with on-demand video',
    desc: 'Enterprise VOD platform for safety training, compliance, and operational onboarding across 85 facilities.',
    quote: '"On-demand safety training made flawless"',
    tags: ['Enterprise Video', 'VOD Delivery'],
    image: cardImg32,
    href: '#',
  },
];

export default function ResourceCustomerStoriesGridSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-zinc-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* Background */}
      {section3Bg && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <Image src={section3Bg} alt="Background" fill className="object-cover" />
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4 max-w-4xl">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          Stories from teams like yours
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Real experiences from organizations building with ZoikoStream across industries and use cases.
        </p>
      </div>

      {/* 6 Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {STORIES.map((card, idx) => (
          <div
            key={idx}
            className="bg-slate-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-between items-start overflow-hidden hover:border-gray-700 transition-all group"
          >
            <div className="w-full flex flex-col justify-start items-start">
              <div className="relative w-full h-48 bg-gray-950 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="w-full p-6 flex flex-col justify-start items-start gap-4">
                <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
                  {card.org}
                </span>

                <h3 className="text-slate-100 text-xl font-bold font-['Space_Grotesk'] leading-7">
                  {card.title}
                </h3>

                <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-6">
                  {card.desc}
                </p>

                <p className="text-teal-400 text-sm font-normal font-['Space_Grotesk'] italic">
                  {card.quote}
                </p>
              </div>
            </div>

            {/* Bottom Footer Row */}
            <div className="w-full px-6 pt-4 pb-6 flex items-center justify-between border-t border-gray-800/60 mt-auto">
              <div className="flex flex-wrap items-center gap-2">
                {card.tags.map((tag, tIdx) => (
                  <div
                    key={tIdx}
                    className="px-2 py-1 bg-slate-800 rounded-sm flex items-center justify-center"
                  >
                    <span className="text-slate-400 text-xs font-normal font-['Space_Grotesk']">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href={card.href}
                className="text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] flex items-center gap-1 shrink-0 transition-colors"
              >
                Read story <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
