import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import section5Bg from '@/public/images/resource-guides/5sectionbg.png';

import cardImg12 from '@/public/images/resource-guides/CardImage (12).png';
import cardImg13 from '@/public/images/resource-guides/CardImage (13).png';
import cardImg14 from '@/public/images/resource-guides/CardImage (14).png';
import cardImg15 from '@/public/images/resource-guides/CardImage (15).png';
import cardImg16 from '@/public/images/resource-guides/CardImage (16).png';
import cardImg17 from '@/public/images/resource-guides/CardImage (17).png';

const BROWSE_ALL_CARDS = [
  {
    category: 'Security',
    date: 'Feb 12, 2026',
    title: 'Secure Video Delivery Configuration',
    desc: 'Enable DRM restrictions, geographic player blocks, and signed URL playback validation for absolute corporate stream privacy.',
    readTime: 'Read time: 14 min',
    image: cardImg12,
    href: '#',
  },
  {
    category: 'Delivery',
    date: 'Feb 08, 2026',
    title: 'Multi-region Stream Distribution',
    desc: 'Learn how ZoikoStream handles global caching across edge nodes, keeping end-to-end stream latency low for international users.',
    readTime: 'Read time: 18 min',
    image: cardImg13,
    href: '#',
  },
  {
    category: 'Integrations',
    date: 'Jan 28, 2026',
    title: 'Webhook Integration Patterns',
    desc: 'Automate app responses to stream-up, stream-down, and recording ready events using standard secured developer webhooks.',
    readTime: 'Read time: 10 min',
    image: cardImg14,
    href: '#',
  },
  {
    category: 'Processing',
    date: 'Jan 15, 2026',
    title: 'Adaptive Bitrate Optimization',
    desc: 'Fine-tune multi-bitrate encoding definitions. Learn to optimize stream quality for slow mobile networks and fast desktop connections.',
    readTime: 'Read time: 15 min',
    image: cardImg15,
    href: '#',
  },
  {
    category: 'Security',
    date: 'Jan 10, 2026',
    title: 'Access Control & DRM Setup',
    desc: 'How to configure Widevine, FairPlay, and PlayReady DRM setups mapped to custom developer tokens.',
    readTime: 'Read time: 20 min',
    image: cardImg16,
    href: '#',
  },
  {
    category: 'Analytics',
    date: 'Dec 18, 2025',
    title: 'Analytics & Viewer Insights',
    desc: 'Query live stream performance metrics, viewer concurrent logs, and geographic delivery analytics via developer APIs.',
    readTime: 'Read time: 12 min',
    image: cardImg17,
    href: '#',
  },
];

export default function ResourceGuidesBrowseAllSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-gray-950/80 outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* Background */}
      {section5Bg && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <Image src={section5Bg} alt="Background" fill className="object-cover" />
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4 max-w-4xl">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[48px]">
          Browse all guides.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Dive deep into practical solutions built by operators, for operators. Match your operational needs directly.
        </p>
      </div>

      {/* 6 Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BROWSE_ALL_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:border-gray-700 transition-all group"
          >
            <div className="relative w-full h-40 bg-gray-950 overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-start items-start gap-4 flex-1">
              <div className="w-full flex justify-between items-center">
                <span className="text-teal-400 text-xs font-bold font-['Inter'] uppercase">
                  {card.category}
                </span>
                <span className="text-slate-400 text-xs font-normal font-['Inter']">
                  {card.date}
                </span>
              </div>

              <h3 className="text-white text-lg font-bold font-['Space_Grotesk'] leading-snug">
                {card.title}
              </h3>

              <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-5 line-clamp-2">
                {card.desc}
              </p>

              <div className="w-full h-0 border-b border-gray-800 my-1" />

              <div className="w-full flex justify-between items-center mt-auto">
                <span className="text-slate-400 text-xs font-normal font-['Inter']">
                  {card.readTime}
                </span>
                <Link
                  href={card.href}
                  className="text-teal-400 hover:text-teal-300 text-xs font-bold font-['Space_Grotesk'] flex items-center gap-1 transition-colors"
                >
                  Read guide <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Link */}
      <div className="relative z-10 w-full flex justify-center items-center pt-4">
        <Link
          href="#all-guides"
          className="text-teal-400 hover:text-teal-300 text-base font-bold font-['Space_Grotesk'] underline flex items-center gap-2 transition-colors"
        >
          View all guides <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
