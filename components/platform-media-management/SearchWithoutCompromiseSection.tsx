import React from 'react';
import Image from 'next/image';

const searchCards = [
  {
    title: 'Governed Search',
    desc: 'Permission-aware query parsing only exposes metadata fields verified by active directory policies.',
    image: '/images/platform-media-managemnt/card-image-0.png',
  },
  {
    title: 'Result Identity',
    desc: 'Every search result returns the authoritative stable URN alongside current version context.',
    image: '/images/platform-media-managemnt/card-image-1.png',
  },
  {
    title: 'State Context',
    desc: 'Live visual markers show whether a matched asset is fully qualified, blocked, or pending review.',
    image: '/images/platform-media-managemnt/card-image-2.png',
  },
  {
    title: 'Relationship Clues',
    desc: 'Understand where results sit in the family tree. Spot original streams versus derived replay clips.',
    image: '/images/platform-media-managemnt/card-image-3.png',
  },
  {
    title: 'Freshness Signals',
    desc: 'Explicit indicator labels flagging indexing latency, verify date-times, and potential staleness.',
    image: '/images/platform-media-managemnt/card-image-4.png',
  },
  {
    title: 'Safe Filters',
    desc: 'Filter with security. Fields lacking immutable compliance metadata are blocked from public search.',
    image: '/images/platform-media-managemnt/card-image-5.png',
  },
];

export default function SearchWithoutCompromiseSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-24 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-media-managemnt/bg (79).png"
          alt="Search Background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 bg-gray-950/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold   text-white">
            Search without compromise
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal   max-w-3xl">
            Find exact media records across systems. Enforce local whitelists so results remain visible only to authorized users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 overflow-hidden flex flex-col hover:border-teal-400/40 transition-colors group"
            >
              <div className="relative w-full h-48 bg-slate-900 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-white text-base font-bold  ">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-xs font-normal   leading-relaxed">
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
