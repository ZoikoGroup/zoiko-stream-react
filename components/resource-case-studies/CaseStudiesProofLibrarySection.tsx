import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg25 from '@/public/images/resources-case-studies/bg (25).png';

import cardImg0 from '@/public/images/resources-case-studies/Card Image.png';
import cardImg1 from '@/public/images/resources-case-studies/Card Image (1).png';
import cardImg2 from '@/public/images/resources-case-studies/Card Image (2).png';
import cardImg3 from '@/public/images/resources-case-studies/Card Image (3).png';
import cardImg4 from '@/public/images/resources-case-studies/Card Image (4).png';
import cardImg5 from '@/public/images/resources-case-studies/Card Image (5).png';

const PROOF_CARDS = [
  {
    category: 'BUILD VIDEO INTO A PRODUCT',
    title: 'Embed streaming as a feature',
    description:
      'Integrate continuous interactive streaming directly into web or native apps via developer APIs.',
    image: cardImg0,
  },
  {
    category: 'BROADCAST GLOBALLY',
    title: 'One-to-many at scale',
    description:
      'Deliver ultra-low latency live media streams to millions of concurrent viewers with globally distributed edges.',
    image: cardImg1,
  },
  {
    category: 'SECURE ENTERPRISE VIDEO',
    title: 'Governed internal and external video',
    description:
      'Retain complete authority over access control, audit logging, and encryption workflows.',
    image: cardImg2,
  },
  {
    category: 'ACCESSIBLE & MULTILINGUAL VIDEO',
    title: 'Captioned, translated, inclusive delivery',
    description:
      'Fully automated real-time captions and translations mapped directly onto standard operating schemas.',
    image: cardImg3,
  },
  {
    category: 'RECORD, REPLAY AND PRESERVE',
    title: 'Durable long-term archives',
    description:
      'Automated instant video recording, verification logging, and archival cold storage replication.',
    image: cardImg4,
  },
  {
    category: 'RUN MANAGED LIVE EVENTS',
    title: 'Produced, one-time broadcasts',
    description:
      'Full professional support, signal monitoring, fallback path protection, and verified outcomes.',
    image: cardImg5,
  },
];

export default function CaseStudiesProofLibrarySection() {
  return (
    <section
      id="proof-library"
      className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-12 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg25}
          alt="Proof Library Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-3">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Explore the proof library
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-6">
          Every case study is governed, approved, and backed by verifiable technical logs.
        </p>
      </div>

      {/* Grid of 6 Cards */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROOF_CARDS.map((card, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-800 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all group"
          >
            <div className="relative w-full h-48 bg-gray-950 overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full p-6 flex flex-col justify-between items-start gap-3 flex-1">
              <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
                {card.category}
              </span>
              <h3 className="text-white text-xl font-bold font-['Space_Grotesk'] leading-7">
                {card.title}
              </h3>
              <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
                {card.description}
              </p>

              <div className="pt-2">
                <Link
                  href="#details"
                  className="text-teal-400 hover:text-teal-300 text-xs font-bold font-['Space_Grotesk'] transition-colors"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
