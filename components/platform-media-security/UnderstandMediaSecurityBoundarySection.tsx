import React from 'react';
import Image from 'next/image';

const boundaryCards = [
  {
    title: 'Access & Identity',
    desc: 'Who may reach administrative, service, contributor, or audience functions',
    image: '/images/platform-media-security/card-image (6).png',
  },
  {
    title: 'Media & Data Protection',
    desc: 'How media is protected in transit, at rest, and in processing',
    image: '/images/platform-media-security/card-image (7).png',
  },
  {
    title: 'Playback Authorization',
    desc: 'Scoped authorization decisions for protected media consumption',
    image: '/images/platform-media-security/card-image (8).png',
  },
  {
    title: 'Delivery & Network',
    desc: 'Transport, routing, and geographic security boundaries',
    image: '/images/platform-media-security/card-image (9).png',
  },
  {
    title: 'Operations & Monitoring',
    desc: 'Privileged actions, change control, and security evidence',
    image: '/images/platform-media-security/card-image (10).png',
  },
  {
    title: 'Dependencies & Third Parties',
    desc: 'Provider responsibility, assurance, and change governance',
    image: '/images/platform-media-security/card-image (11).png',
  },
];

export default function UnderstandMediaSecurityBoundarySection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-28 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Understand the media security boundary
          </h2>
          <p className="text-slate-600 text-lg font-normal font-['Space_Grotesk'] leading-relaxed max-w-3xl">
            What is protected, where boundaries exist, and who is responsible — before asking for trust or conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boundaryCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-900 rounded-xl overflow-hidden flex flex-col hover:shadow-xl transition-shadow group"
            >
              <div className="relative w-full h-48 bg-slate-800">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-base font-normal font-['Inter'] leading-relaxed">
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
