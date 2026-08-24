import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import rect130 from '@/public/images/Organization-overview/Rectangle (126).png';
import rect131 from '@/public/images/Organization-overview/Rectangle (127).png';
import rect132 from '@/public/images/Organization-overview/Rectangle (128).png';
import rect133 from '@/public/images/Organization-overview/Rectangle (127).png';
import rect134 from '@/public/images/Organization-overview/Rectangle (126).png';
import rect135 from '@/public/images/Organization-overview/Rectangle (125).png';

const evidenceCards = [
  { title: 'Security Certifications', source: 'SOC2 Type II', scope: 'SAML Infrastructure', status: 'Active', checked: 'Q1 2026', image: rect130 },
  { title: 'Accessibility Benchmarks', source: 'VPAT / Section 508', scope: 'Reader Telemetry', status: 'Compliant', checked: 'Q4 2025', image: rect131 },
  { title: 'Resilience & Uptime', source: 'SLAs Verified', scope: 'Hot-Standby Systems', status: '99.999% Active', checked: 'Ongoing', image: rect132 },
  { title: 'Attributable Docs', source: 'Architecture Maps', scope: 'API Specs', status: 'Updated Today', checked: 'Q2 2026', image: rect133 },
  { title: 'Privacy & Data Boundaries', source: 'GDPR / HIPAA Check', scope: 'Regional Preservation', status: 'Verified Match', checked: 'Q1 2026', image: rect134 },
  { title: 'Technical Support SLAs', source: 'SLA Documentation', scope: 'Co-management Paths', status: 'Signed Draft', checked: 'Q1 2026', image: rect135 },
];

export default function EvidenceInspectionSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-24 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
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
<div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Inspect the evidence behind the path.
          </h2>
        </div>

        {/* 6 Evidence Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {evidenceCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col shadow-xs hover:shadow-md transition-shadow group"
            >
              <div className="relative w-full h-32 bg-slate-100 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk'] truncate">
                  {card.title}
                </h3>

                <div className="flex flex-col gap-1.5 text-xs font-['Inter'] text-slate-600">
                  <div>
                    <span>Source: </span>
                    <span className="font-bold text-slate-900">{card.source}</span>
                  </div>
                  <div>Scope: {card.scope}</div>
                  <div>
                    <span>Status: </span>
                    <span className="font-bold text-blue-500">{card.status}</span>
                  </div>
                  <div>Last Checked: {card.checked}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
