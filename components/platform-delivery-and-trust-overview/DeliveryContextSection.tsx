import React from 'react';
import Image from 'next/image';

const contexts = [
  {
    title: 'Live Streaming',
    desc: 'Enforce real-time whitelist verification and sub-second key rotation while stream paths remain active.',
    policy: 'Accounting for sub-second streaming compliance',
    image: '/images/platform-delivery-trust-overview/card-image-0 (1).png',
  },
  {
    title: 'Video on Demand',
    desc: 'Manage stored and transcoded media archives with durable version trees and storage retention.',
    policy: 'Standards for post-production installation readiness',
    image: '/images/platform-delivery-trust-overview/card-image-1 (1).png',
  },
  {
    title: 'Enterprise Broadcast',
    desc: 'Define organizational policy bounds, corporate whitelists, and secure viewer directory groups.',
    policy: 'Restricted to authorized enterprise partners and licensees',
    image: '/images/platform-delivery-trust-overview/card-image-2 (1).png',
  },
  {
    title: 'Developer API',
    desc: 'Idempotent POST/PUT pathways, JWT generation routes, and precise programmatic controls.',
    policy: 'Rate-limited per-token usage and integrity verification',
    image: '/images/platform-delivery-trust-overview/card-image-3 (1).png',
  },
  {
    title: 'Live Events (Managed)',
    desc: 'Platform vs. coordinator responsibility separation during high-stakes physical venue broadcast runs.',
    policy: 'Multi-party role-based access control for live event playout',
    image: '/images/platform-delivery-trust-overview/card-image-4 (1).png',
  },
  {
    title: 'Content Analytics',
    desc: 'Track viewership, engagement, and playback quality across segments with granular, privacy-safe reporting.',
    policy: 'Aggregated reporting with optional per-user opt-out controls',
    image: '/images/platform-delivery-trust-overview/card-image-5 (1).png',
  },
];

export default function DeliveryContextSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-24 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-gray-950 leading-tight">
            Delivery Context
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk'] max-w-3xl">
            How capabilities apply across different media contexts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contexts.map((ctx, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden flex flex-col hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="relative w-full h-44 bg-slate-200 overflow-hidden">
                <Image
                  src={ctx.image}
                  alt={ctx.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-1 gap-3">
                <div className="flex flex-col gap-2">
                  <h3 className="text-gray-950 text-base font-bold font-['Space_Grotesk'] group-hover:text-teal-600 transition-colors">
                    {ctx.title}
                  </h3>
                  <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                    {ctx.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 pt-2 border-t border-slate-200">
                  <span className="text-blue-600 text-xs font-bold font-['Space_Grotesk'] tracking-wide">
                    POLICY:
                  </span>
                  <span className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] truncate">
                    {ctx.policy}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
