import React from 'react';
import Image from 'next/image';
import { Mail } from 'lucide-react';

import bg147 from '@/public/images/Organization-overview/bg (147).png';

const BENEFITS = [
  {
    emoji: '📧',
    title: 'Weekly Digest',
    description: 'Curated new resources and deployment architecture guides.',
  },
  {
    emoji: '🔔',
    title: 'Release Alerts',
    description: 'Instant notifications about new SDKs and core feature updates.',
  },
  {
    emoji: '📊',
    title: 'Engineering Blog',
    description: 'Deep-dives into media protocols, WebRTC scaling, and optimizations.',
  },
];

export default function ResourceOverviewNewsletterSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-28 flex flex-col justify-center items-center gap-14 bg-white overflow-hidden text-center">
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
      <div className="size-96 -left-30 -top-24 absolute bg-teal-400/5 rounded-full blur-2xl pointer-events-none" />
      <div className="size-96 left-[1180px] top-[406px] absolute bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 max-w-3xl flex flex-col justify-start items-center gap-4">
        <h2 className="text-slate-950 text-4xl font-bold font-['Space_Grotesk'] leading-[60.80px]">
          Stay Updated
        </h2>
        <p className="text-slate-600 text-lg font-normal font-['Space_Grotesk'] leading-7">
          Get the latest ZoikoStream resources, product updates, and engineering insights delivered to your inbox.
        </p>
      </div>

      {/* Input Form */}
      <div className="relative z-10 w-full max-w-xl flex flex-col items-center gap-3">
        <div className="w-full p-1.5 bg-slate-50 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex items-center gap-3 shadow-xs">
          <div className="flex-1 pl-4 flex items-center gap-3">
            <Mail className="w-5 h-5 text-slate-600 shrink-0" />
            <input
              type="email"
              placeholder="Enter your professional email address..."
              className="w-full bg-transparent text-slate-900 text-base font-normal font-['Inter'] placeholder-gray-400 focus:outline-none"
            />
          </div>
          <button className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] shrink-0 hover:opacity-90 transition-opacity">
            Subscribe
          </button>
        </div>
        <span className="text-gray-400 text-xs font-normal font-['Inter']">
          No spam. Unsubscribe anytime.
        </span>
      </div>

      {/* 3 Feature Benefit Cards */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {BENEFITS.map((b, idx) => (
          <div
            key={idx}
            className="p-6 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex items-center gap-4 shadow-xs"
          >
            <span className="text-3xl shrink-0">{b.emoji}</span>
            <div className="flex flex-col gap-1">
              <h3 className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
                {b.title}
              </h3>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
                {b.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
