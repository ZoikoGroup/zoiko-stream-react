import React from 'react';
import Image from 'next/image';
import bgPattern from '@/public/images/Organization-overview/bg (147).png';

const CONTROLS = [
  {
    image: '/images/zoikostream-changelog/Card image.png',
    label: 'SOURCE BOUNDARIES',
    title: 'Read every change against its canonical authority',
    description: 'The changelog explains impact and timing. API references, repositories, and service contracts remain the source of truth for implementation.',
    tag: 'API reference · source controlled'
  },
  {
    image: '/images/zoikostream-changelog/Card image (1).png',
    label: 'ACCESSIBILITY',
    title: 'Delivery remains legible across formats',
    description: 'Semantic headings, descriptive links, keyboard order, contrast, and print-safe dates keep critical maintenance information usable everywhere.',
    tag: 'WCAG review · required'
  },
  {
    image: '/images/zoikostream-changelog/Card image (2).png',
    label: 'CORRECTION POLICY',
    title: 'Corrections stay visible and attributable',
    description: 'Material edits retain the original publication date, add a correction timestamp, and state what changed so teams can reassess prior decisions.',
    tag: 'Correction history · append only'
  },
  {
    image: '/images/zoikostream-changelog/Card image (3).png',
    label: 'SECURITY AND PRIVACY',
    title: 'Sensitive detail fails closed',
    description: 'Public entries describe impact without exposing credentials, exploit paths, customer data, or operational detail that belongs in restricted channels.',
    tag: 'Security review · before publication'
  },
  {
    image: '/images/zoikostream-changelog/Card image (4).png',
    label: 'LIFECYCLE',
    title: 'Deprecation and migration move together',
    description: 'Lifecycle notices identify affected surfaces, effective dates, replacement paths, and the point when compatibility can no longer be assumed.',
    tag: 'Lifecycle register · maintained'
  },
  {
    image: '/images/zoikostream-changelog/Card image (5).png',
    label: 'PUBLICATION',
    title: 'Release evidence gates every public entry',
    description: 'Ownership, verification evidence, effective dates, affected surfaces, and correction routes are checked before an entry becomes current.',
    tag: 'Publication checklist · enforced'
  }
];

export default function ChangelogTrustworthySection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 bg-slate-50 flex flex-col items-center overflow-hidden">
      
      {/* Background Topo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bgPattern}
          alt="Pattern"
          fill
          className="object-cover opacity-40 mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col gap-12">
        
        {/* Header Area */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
            How changelog information stays trustworthy after publication
          </h2>
          <p className="text-slate-500 text-lg font-normal font-['Inter'] leading-relaxed">
            Six controls define where authority lives, how changes are corrected, and what must be verified before maintenance guidance reaches developers.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {CONTROLS.map((control, idx) => (
            <div key={idx} className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              
              {/* Card Image */}
              <Image
                src={control.image}
                alt={`${control.label} illustration`}
                width={560}
                height={180}
                className="w-full h-44 object-cover"
              />
              
              {/* Text Area */}
              <div className="flex flex-col flex-1 p-6 sm:p-8 gap-4 bg-white">
                <span className="text-slate-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
                  {control.label}
                </span>
                <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
                  {control.title}
                </h3>
                <p className="text-slate-500 text-sm font-normal font-['Inter'] leading-relaxed flex-1">
                  {control.description}
                </p>
                <div className="flex flex-col gap-2 mt-2 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 text-[10px]">●</span>
                    <span className="text-slate-500 text-[11px] font-mono lowercase tracking-wide">
                      {control.tag}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
