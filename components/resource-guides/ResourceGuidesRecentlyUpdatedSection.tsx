import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import thumb12 from '@/public/images/resource-guides/Thumbnail (12).png';
import thumb13 from '@/public/images/resource-guides/Thumbnail (13).png';
import thumb14 from '@/public/images/resource-guides/Thumbnail (14).png';
import thumb15 from '@/public/images/resource-guides/Thumbnail (15).png';

const RECENTLY_UPDATED = [
  {
    type: 'UPDATED',
    badgeStyle: 'bg-teal-400/10 outline-teal-400/30 text-teal-400',
    date: 'Updated Feb 18, 2026',
    title: 'Webhook Security & Signature Verification',
    desc: 'Best practices for validating incoming ZoikoStream webhook calls. Protect endpoints using secure payload signatures.',
    image: thumb12,
    href: '#',
  },
  {
    type: 'NEW',
    badgeStyle: 'bg-blue-500/10 outline-blue-500/30 text-blue-500',
    date: 'New Feb 10, 2026',
    title: 'Adaptive Bitrate Encoding Profiles',
    desc: 'Our recommendations for defining adaptive transcode bitrates, keyframe spacing, and optimized profile settings.',
    image: thumb13,
    href: '#',
  },
  {
    type: 'UPDATED',
    badgeStyle: 'bg-teal-400/10 outline-teal-400/30 text-teal-400',
    date: 'Updated Feb 01, 2026',
    title: 'HLS Low-Latency Playback Configuration',
    desc: 'Fine-tune HLS target duration parameters and manifest controls. Reach sub-3 second stream latencies on standard players.',
    image: thumb14,
    href: '#',
  },
  {
    type: 'NEW',
    badgeStyle: 'bg-blue-500/10 outline-blue-500/30 text-blue-500',
    date: 'New Jan 24, 2026',
    title: 'Corporate SSO & Auth Enforcement',
    desc: 'How to restrict viewing access to corporate internal networks using SAML single sign-on integrations.',
    image: thumb15,
    href: '#',
  },
];

export default function ResourceGuidesRecentlyUpdatedSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden z-10">
      {/* Background Snippet */}
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
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4 max-w-4xl">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[48px]">
          Recently updated.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Stay current with the latest developer documentation, video operations, and security practices.
        </p>
      </div>

      {/* 4 Horizontal Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        {RECENTLY_UPDATED.map((item, idx) => (
          <div
            key={idx}
            className="p-5 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col sm:flex-row items-center gap-5 overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div className="relative size-28 rounded-lg bg-gray-900 overflow-hidden shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex-1 flex flex-col justify-start items-start gap-2">
              <div className="flex items-center gap-2">
                <div className={`px-2 py-0.5 rounded-sm outline outline-1 outline-offset-[-1px] ${item.badgeStyle} flex items-center justify-center`}>
                  <span className="text-[10px] font-bold font-['Inter']">
                    {item.type}
                  </span>
                </div>
                <span className="text-slate-600 text-xs font-normal font-['Inter']">
                  {item.date}
                </span>
              </div>

              <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk'] leading-snug">
                {item.title}
              </h3>

              <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-4 line-clamp-2">
                {item.desc}
              </p>

              <Link
                href={item.href}
                className="text-teal-400 hover:text-teal-300 text-xs font-bold font-['Space_Grotesk'] flex items-center gap-1 transition-colors pt-1"
              >
                Read updated guide <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
