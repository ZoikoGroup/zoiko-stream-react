import React from 'react';
import Image from 'next/image';

const depCards = [
  {
    title: 'Role & Interaction',
    desc: 'What the dependency does in the media/security workflow and what data it may process. Verified pathways only.',
    image: '/images/platform-media-security/card-image (24).png',
  },
  {
    title: 'Security Responsibility',
    desc: 'Which controls are platform-owned, shared, or dependency-owned. Demarcations must remain inspectable.',
    image: '/images/platform-media-security/card-image (25).png',
  },
  {
    title: 'Availability & Failure',
    desc: 'How dependency state affects the workflow and recovery paths. Active mitigation and graceful degradation definitions.',
    image: '/images/platform-media-security/card-image (26).png',
  },
  {
    title: 'Evidence & Assurance',
    desc: 'Approved provider assurance, SOC/ISO certifications, contract structures, and security review artifacts.',
    image: '/images/platform-media-security/card-image (27).png',
  },
  {
    title: 'Change Governance',
    desc: 'Review and rollback behavior when dependencies change. Ensuring cryptographic boundaries survive updates.',
    image: '/images/platform-media-security/card-image (28).png',
  },
  {
    title: 'Publication Rules',
    desc: 'Current and scoped evidence only. No marketing logo-as-proof arrays or blanket compliance pass-throughs.',
    image: '/images/platform-media-security/card-image (29).png',
  },
];

export default function DependenciesThirdPartyResponsibilitySection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-28 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Dependencies and third-party responsibility
          </h2>
          <p className="text-slate-600 text-lg font-normal font-['Space_Grotesk'] leading-relaxed max-w-3xl">
            Make provider responsibility visible without inventing vendor lists or passing through unsupported assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {depCards.map((card, idx) => (
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
