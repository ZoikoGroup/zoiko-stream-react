import React from 'react';
import Image from 'next/image';

const domainModels = [
  {
    title: 'Actor / Principal',
    desc: 'The authenticated person, programmatically scoped service token, workstation, or partner entity asserting authority parameters.',
    image: '/images/platform-access-control/card-image-0 (2).png',
  },
  {
    title: 'Resource',
    desc: 'The protected stream route, recorded play archive, metadata directory, operational pipeline, or tenant workspace configuration.',
    image: '/images/platform-access-control/card-image-1 (2).png',
  },
  {
    title: 'Action',
    desc: 'The precise programmatic execution target (e.g. stream:inject, asset:purge, policy:re-sign) proposed by the principal actor.',
    image: '/images/platform-access-control/card-image-2 (2).png',
  },
  {
    title: 'Policy',
    desc: 'The strict, auditable set of security parameters used to evaluate the validity of any requested action within organizational boundaries.',
    image: '/images/platform-access-control/card-image-3 (2).png',
  },
  {
    title: 'Entitlement',
    desc: 'An active, verified operational authority granted to a principal actor for a specific scope, complete with expiration parameters.',
    image: '/images/platform-access-control/card-image-4 (2).png',
  },
  {
    title: 'Decision',
    desc: 'The final, real-time response: allow, limit, deny, expired, revoked, or unknown - cryptographically logged for forensic accountability.',
    image: '/images/platform-access-control/card-image-5 (2).png',
  },
];

export default function CoreAccessControlDomainModelSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-24 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Core Access-Control Domain Model
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk'] max-w-3xl">
            A stable vocabulary for identity, authority, and decisions - implementation-neutral by design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domainModels.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk'] group-hover:text-teal-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
