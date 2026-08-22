import React from 'react';
import Image from 'next/image';

import codeImg from '@/public/images/partners/Code editor (2).png';
import teamImg from '@/public/images/partners/Team planning.png';
import mixingImg from '@/public/images/partners/Broadcast mixing.png';
import serverImg from '@/public/images/partners/Server infrastructure.png';

const partnerTypes = [
  {
    title: 'Technology & Integration',
    desc: 'Products or platforms that integrate with or extend a ZoikoStream workflow.',
    examples: 'Examples: CMS/workflow, players, identity, analytics, captioning, monetization, commerce, content protection, developer tooling.',
    image: codeImg,
  },
  {
    title: 'Solutions & Implementation',
    desc: 'Organizations that design, integrate, migrate, build, or operate customer video experiences.',
    examples: 'Examples: Systems integration, OTT/app development, architecture, migration, implementation, managed services.',
    image: teamImg,
  },
  {
    title: 'Live Events & Production',
    desc: 'Organizations that support the planning, production, contribution, accessibility, and operational execution of live broadcasts.',
    examples: 'Examples: Production services, remote production, contribution, encoding, captioning, event operations, audience experience.',
    image: mixingImg,
  },
  {
    title: 'Strategic Infrastructure & Alliances',
    desc: 'Formally recognized ecosystem relationships around infrastructure or strategic interoperability.',
    examples: 'Examples: Cloud, delivery, edge, security, observability, distribution — only where an actual alliance exists.',
    image: serverImg,
  },
];

export default function EcosystemTaxonomySection() {
  return (
    <section className="w-full bg-slate-50 py-20 border-b border-gray-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-400 rounded-full" />
            <span className="text-blue-400 text-xs font-bold   uppercase tracking-wider">
              ECOSYSTEM TAXONOMY
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold   text-gray-800 leading-tight">
            Partner types.
          </h2>

          <p className="text-gray-500 text-base font-normal   leading-relaxed max-w-2xl">
            What each category is for — described in capabilities, not partner names.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnerTypes.map((pt, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-zinc-200 shadow-xs overflow-hidden flex flex-col hover:shadow-md transition-shadow group"
            >
              <div className="relative w-full h-56 bg-slate-100">
                <Image
                  src={pt.image}
                  alt={pt.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-gray-800 text-lg font-bold  ">
                  {pt.title}
                </h3>
                <p className="text-gray-500 text-sm font-normal   leading-relaxed">
                  {pt.desc}
                </p>
                <p className="text-gray-400 text-xs font-normal   leading-relaxed pt-1">
                  {pt.examples}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
