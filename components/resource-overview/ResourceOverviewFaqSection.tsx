import React from 'react';
import Image from 'next/image';
import { Minus } from 'lucide-react';

import bg147 from '@/public/images/Organization-overview/bg (147).png';

const FAQS = [
  {
    q: 'What can I find in ZoikoStream Resources?',
    a: 'Our resource hub houses technical architecture blueprints, operational checklists, compliance whitepapers, customer case studies, and integration guides designed to streamline deployment.',
  },
  {
    q: 'What is the difference between Guides, Developer documentation, and API reference?',
    a: 'Guides provide high-level architecture designs. Developer documentation walks through step-by-step integrations, and the API reference details the precise endpoints, request schemas, and payload specifications.',
  },
  {
    q: 'Where do I check an incident or service problem?',
    a: 'Real-time operational status, active incident history, SLA reports, and multi-region CDN delivery health are publicly auditable on our dedicated System Status page.',
  },
  {
    q: 'What is the difference between Changelog and Release notes?',
    a: 'The Changelog offers a raw running log of commits and quick system updates, whereas Release Notes provide structured overviews of major functional upgrades and migration plans.',
  },
  {
    q: 'Do I need to contact sales to access resources?',
    a: 'No. All developer manuals, API specs, core architecture guides, and public telemetry stay completely open and inspectable without registration or sales qualification.',
  },
];

export default function ResourceOverviewFaqSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-24 border-b border-gray-200 flex flex-col justify-start items-center gap-14 bg-white overflow-hidden text-center min-h-[934px]">
      {/* Background overlay snippet */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-96 -left-44 -top-14 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] left-[1067px] top-[508px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 max-w-3xl flex flex-col justify-start items-center gap-4">
        <h2 className="text-slate-950 text-4xl font-bold font-['Space_Grotesk'] leading-[60.80px]">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 text-lg font-normal font-['Space_Grotesk'] leading-7">
          Deterministic guidance for matching operational capacity to video outcomes.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col justify-start items-center text-left">
        {FAQS.map((faq, index) => (
          <div
            key={index}
            className="w-full py-6 border-b border-gray-200 flex flex-col justify-start items-start gap-3 last:border-b-0"
          >
            <div className="w-full flex justify-between items-center gap-4">
              <h3 className="text-slate-950 text-lg font-bold font-['Space_Grotesk']">
                {faq.q}
              </h3>
              <div className="size-6 rounded-md flex justify-center items-center shrink-0">
                <Minus className="w-4 h-4 text-slate-950" />
              </div>
            </div>
            <p className="text-slate-600 text-base font-normal font-['Inter'] leading-5">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
