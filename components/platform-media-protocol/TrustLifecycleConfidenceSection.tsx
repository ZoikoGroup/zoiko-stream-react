import React from 'react';
import Image from 'next/image';

const confidenceCards = [
  {
    title: 'Technical ownership',
    desc: 'Accountable owner, reviewed date, docs authority, lifecycle state',
    image: '/images/platform-media-protocol/card-image.png',
  },
  {
    title: 'Security boundary',
    desc: 'Auth, secret, transport, network controls linked to approved documentation',
    image: '/images/platform-media-protocol/card-image (1).png',
  },
  {
    title: 'Operations',
    desc: 'Monitoring, status, support responsibilities and evidence routes',
    image: '/images/platform-media-protocol/card-image (2).png',
  },
  {
    title: 'Change governance',
    desc: 'Changelog, deprecation, migration, emergency withdrawal, rollback',
    image: '/images/platform-media-protocol/card-image (3).png',
  },
  {
    title: 'Privacy',
    desc: 'Analytics minimized, diagnostic and customer data excluded',
    image: '/images/platform-media-protocol/card-image (4).png',
  },
  {
    title: 'Accessibility',
    desc: 'WCAG 2.2 AA implementation across page, tables, filters, states',
    image: '/images/platform-media-protocol/card-image (5).png',
  },
];

export default function TrustLifecycleConfidenceSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-media-protocol/bg (91).png"
          alt="Trust & Confidence Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gray-950/80" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white">
            Trust, lifecycle, and production confidence
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk'] max-w-3xl">
            Calm, technical, evidence-led proof for enterprise evaluation and procurement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {confidenceCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-gray-900/90 rounded-xl border border-gray-800 overflow-hidden flex flex-col hover:border-teal-400/40 transition-all group backdrop-blur-md"
            >
              <div className="relative w-full h-40 bg-slate-800 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-white text-lg font-bold font-['Space_Grotesk'] group-hover:text-teal-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
