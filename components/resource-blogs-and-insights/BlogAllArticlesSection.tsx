import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { ChevronDown } from 'lucide-react';

import card0 from '@/public/images/resource-blogs-and-insights/CardImage.png';
import card1 from '@/public/images/resource-blogs-and-insights/CardImage (1).png';
import card2 from '@/public/images/resource-blogs-and-insights/CardImage (2).png';
import card3 from '@/public/images/resource-blogs-and-insights/CardImage (3).png';
import card4 from '@/public/images/resource-blogs-and-insights/CardImage (4).png';
import card5 from '@/public/images/resource-blogs-and-insights/CardImage (5).png';

import author3 from '@/public/images/resource-blogs-and-insights/Ellipse (3).png';
import author4 from '@/public/images/resource-blogs-and-insights/Ellipse (4).png';
import author5 from '@/public/images/resource-blogs-and-insights/Ellipse (5).png';
import author6 from '@/public/images/resource-blogs-and-insights/Ellipse (6).png';
import author7 from '@/public/images/resource-blogs-and-insights/Ellipse (7).png';
import author8 from '@/public/images/resource-blogs-and-insights/Ellipse (8).png';

const ARTICLES = [
  {
    category: 'PROTOCOL ENGINEERING',
    date: 'Feb 24, 2026',
    title: 'How adaptive bitrate streaming works',
    description:
      'Under the hood of modern player heuristics: how buffer thresholds, network telemetry, and segment sizes dictate real-time quality changes.',
    author: 'Marcus Vance',
    avatar: author3,
    image: card0,
  },
  {
    category: 'LIVE OPERATIONS',
    date: 'Feb 18, 2026',
    title: 'Monitoring live events at scale',
    description:
      'How to configure active-active telemetry collection and set proper alert boundaries for zero-fail high-visibility corporate broadcasts.',
    author: 'Sarah Jenkins',
    avatar: author4,
    image: card1,
  },
  {
    category: 'INFRASTRUCTURE',
    date: 'Feb 11, 2026',
    title: 'CDN selection and multi-CDN strategies',
    description:
      'Real-time decision matrix logic: routing traffic dynamically based on regional ISP latency, regional cost, and active CDN load factors.',
    author: 'Dr. Elena Rostova',
    avatar: author5,
    image: card2,
  },
  {
    category: 'SECURITY',
    date: 'Jan 28, 2026',
    title: 'Secure playback implementation patterns',
    description:
      'Protecting sensitive corporate streams via DRM, token parameters, domain restrictions, and active SAML-protect handshakes.',
    author: 'Kenji Takahashi',
    avatar: author6,
    image: card3,
  },
  {
    category: 'ARCHITECTURE',
    date: 'Jan 15, 2026',
    title: 'Building resilient ingest pipelines',
    description:
      'An operational overview of configuring fallback paths, failover SRT listener matrixes, and physical link redundancy at venue source.',
    author: 'James Holloway',
    avatar: author7,
    image: card4,
  },
  {
    category: 'ANALYTICS',
    date: 'Jan 04, 2026',
    title: 'Viewer experience metrics that matter',
    description:
      'Skip the vanity counts. An explanation of how startup delay, stall ratios, and video quality continuity directly impact audience retention.',
    author: 'Maya Webb',
    avatar: author8,
    image: card5,
  },
];

export default function BlogAllArticlesSection() {
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
      <div className="size-[520px] left-[1068px] top-[912px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          All articles
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          The complete inspectable record of streaming systems implementation, metrics, and practices.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="relative z-10 w-full pb-3 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex items-center gap-3 cursor-pointer">
            <span className="text-slate-600 text-sm font-medium font-['Space_Grotesk']">
              Topic: All Topics
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-600" />
          </div>
          <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex items-center gap-3 cursor-pointer">
            <span className="text-slate-600 text-sm font-medium font-['Space_Grotesk']">
              Type: All Content
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-600" />
          </div>
          <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex items-center gap-3 cursor-pointer">
            <span className="text-slate-600 text-sm font-medium font-['Space_Grotesk']">
              Sort: Most Recent
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-600" />
          </div>
        </div>
        <span className="text-slate-600 text-sm font-medium font-['Inter']">
          Showing 1–6 of 24 articles
        </span>
      </div>

      {/* Articles Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARTICLES.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-44 bg-slate-200 overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full p-6 flex flex-col justify-between items-start gap-4 flex-1">
              <div className="w-full flex justify-between items-center">
                <span className="text-blue-500 text-xs font-bold font-['Space_Grotesk'] uppercase">
                  {article.category}
                </span>
                <span className="text-slate-600 text-xs font-normal font-['Inter']">
                  {article.date}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk'] leading-7 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5 line-clamp-2">
                  {article.description}
                </p>
              </div>

              <div className="w-full pt-3 border-t border-gray-200 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="relative size-6 rounded-full overflow-hidden border border-gray-200">
                    <Image
                      src={article.avatar}
                      alt={article.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-slate-900 text-xs font-medium font-['Inter']">
                    {article.author}
                  </span>
                </div>
                <Link
                  href="#article"
                  className="text-blue-500 hover:text-blue-600 text-xs font-bold font-['Space_Grotesk'] transition-colors"
                >
                  Read article →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
