import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import bgPattern from '@/public/images/Organization-overview/bg (147).png';

const CARDS = [
  {
    image: '/images/zoikostream-codesample/Image (6).png',
    section: 'SAMPLE COMPATIBILITY KEY',
    tag: 'Required metadata',
    title: 'Required metadata for every sample artifact',
    description: 'A sample must include sample ID/version, purpose, current contract references, language/runtime, dependency manifest, environment/access prerequisites, expected fixture, security policy, side-effect risk, and lifecycle.'
  },
  {
    image: '/images/zoikostream-codesample/Image (7).png',
    section: 'RUN AND VALIDATION CONTEXT',
    tag: 'Evidence scope',
    title: 'Evidence scope and provenance rules',
    description: 'Evidence includes syntax/compile where applicable, contract and expected-output evidence, secret/personal-data/security/dependency checks, verified/review dates, owner/approver, and a clear statement that evidence is not production readiness.'
  },
  {
    image: '/images/zoikostream-codesample/Image (8).png',
    section: 'LIFECYCLE AND MIGRATION',
    tag: 'Lifecycle states',
    title: 'Lifecycle states and migration guidance',
    description: 'Replacement, Changelog, canonical contract, or Support only appear when a current source provides them. Withdrawn and Security hold samples disable copy and embeds together.'
  },
  {
    image: '/images/zoikostream-codesample/Image (9).png',
    section: 'GOVERNED EMBEDS AND PUBLICATION',
    tag: 'Cross-document resolution',
    title: 'Atomic publication and cross-document resolution',
    description: 'Cross-document samples resolve by sample_id/version. Contract changes, withdrawal, or security hold invalidate copy, embeds, search/AEO, and caches together.'
  },
  {
    image: '/images/zoikostream-codesample/Image (10).png',
    section: 'ACCESSIBILITY AND DELIVERY',
    tag: 'Keyboard, no-JS, and print',
    title: 'Keyboard, no-JS, print, and semantic delivery',
    description: 'Keyboard-operable tabs and copy states, warnings associated with code, semantic text rather than image-only code, 320px/400% reflow, no-JS access to code/metadata/warnings/links, and print retention of sample/version/contract/warnings.'
  },
  {
    image: '/images/zoikostream-codesample/Image (11).png',
    section: 'ANALYTICS AND AEO',
    tag: 'IDs and state only',
    title: 'Public analytics and source-safe AEO',
    description: 'IDs and state only, never raw code, searches, payloads, errors, credentials, or customer data; exact code answers only from a current public sample artifact.'
  }
];

export default function CodeSamplesGovernanceSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-24 bg-white flex flex-col items-center overflow-hidden">
      
      {/* Background Topo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image src={bgPattern} alt="Pattern" fill className="object-cover opacity-40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col gap-12">
        
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 w-full">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-[40px] font-bold font-['Space_Grotesk'] leading-tight">
              The remaining governance rules for samples, validation, lifecycle, and delivery
            </h2>
            <p className="text-slate-500 text-lg font-normal font-['Inter'] leading-relaxed">
              These sections explain how samples are validated, how lifecycle changes are handled, and how the page remains accessible and source-safe across devices and print.
            </p>
          </div>

          <div className="w-full lg:w-[320px] shrink-0 p-5 rounded-xl border border-blue-500/20 bg-blue-50 flex items-start gap-3 shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
            <p className="text-slate-600 text-sm font-['Inter'] leading-relaxed">
              These sections complete the document without duplicating the API contract or inventing technical facts.
            </p>
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {CARDS.map((card, idx) => (
            <div key={idx} className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              
              {/* Card Image */}
              <Image
                src={card.image}
                alt={`${card.section} illustration`}
                width={560}
                height={180}
                className="w-full h-44 object-cover"
              />
              
              {/* Body */}
              <div className="flex flex-col flex-1 p-6 gap-3">
                <span className="text-slate-900 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
                  {card.section}
                </span>
                
                <div className="w-fit px-2 py-1 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-md text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-wider mb-1">
                  {card.tag}
                </div>

                <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk'] leading-snug">
                  {card.title}
                </h3>
                
                <p className="text-slate-500 text-[13px] font-normal font-['Inter'] leading-relaxed flex-1 mt-1">
                  {card.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
