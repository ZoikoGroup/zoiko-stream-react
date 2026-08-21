import React from 'react';
import Image from 'next/image';

const securityCards = [
  {
    title: 'Synthetic Examples Only',
    desc: 'No customer media, people, or private data are ever exposed in public proof configurations.',
    image: '/images/platform-media-managemnt/Card-0-Image.png',
  },
  {
    title: 'Least Privilege Access',
    desc: 'Scoped record, field, and action visibility aligned precisely with corporate identities.',
    image: '/images/platform-media-managemnt/Card-1-Image.png',
  },
  {
    title: 'Secret Protection',
    desc: 'Stream keys, credentials, and tokens are rigorously excluded from all public surfaces.',
    image: '/images/platform-media-managemnt/Card-2-Image.png',
  },
  {
    title: 'Restricted Metadata',
    desc: 'Field-level visibility configurations and automated, safe redaction controls.',
    image: '/images/platform-media-managemnt/Card-3-Image.png',
  },
  {
    title: 'Privacy-Safe Analytics',
    desc: 'No content logging, media IDs, or search queries are stored globally or captured in logs.',
    image: '/images/platform-media-managemnt/Card-4-Image.png',
  },
  {
    title: 'Residency & Geography',
    desc: 'Guaranteed regional placement executing only under current data-location authority.',
    image: '/images/platform-media-managemnt/Card-5-Image.png',
  },
];

export default function SecurityPrivacySection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-28 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Security, privacy, and procurement evidence
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk']">
            Enterprise-grade governance boundaries you can verify
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:shadow-lg transition-all group"
            >
              <div className="relative w-full h-48 bg-slate-200 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col gap-2.5">
                <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
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
