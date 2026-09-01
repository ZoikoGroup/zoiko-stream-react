import React from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';

import bg3 from '@/public/images/resources-security-trust-center/section-3bg.png';

const DOMAINS = [
  { label: 'All', active: false },
  { label: 'Security', active: true },
  { label: 'Privacy & Data', active: false },
  { label: 'Resilience', active: false },
  { label: 'Operational', active: false },
  { label: 'Accessibility', active: false },
  { label: 'Legal', active: false },
];

const TYPES = [
  'Policy',
  'Report',
  'Attestation',
  'Assessment',
  'Public Statement',
  'Mapping',
  'Legal',
];

export default function TrustCenterSearchFilterSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg3}
          alt="Search & Filter Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Search and filter trust evidence
        </h2>
      </div>

      {/* Search Bar */}
      <div className="relative z-10 w-full p-4 bg-zinc-900 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex items-center gap-3 shadow-md">
        <Search className="w-4 h-4 text-slate-400 shrink-0" />
        <input
          type="text"
          placeholder="Search evidence by title, type, framework, scope…"
          className="w-full bg-transparent text-slate-200 placeholder:text-slate-500 text-sm font-normal font-['Inter'] focus:outline-none"
        />
      </div>

      {/* Domain and Type Filter Rows */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        {/* DOMAINS Row */}
        <div className="w-full flex flex-wrap items-center gap-3">
          <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
            DOMAINS:
          </span>
          {DOMAINS.map((item, idx) => (
            <button
              key={idx}
              className={`px-3.5 py-1.5 rounded-full text-xs font-normal font-['Inter'] transition-colors ${
                item.active
                  ? 'bg-teal-400 text-gray-950 font-bold outline outline-1 outline-teal-400'
                  : 'bg-zinc-900 text-white outline outline-1 outline-gray-800 hover:bg-gray-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* TYPE Row */}
        <div className="w-full flex flex-wrap items-center gap-3">
          <span className="text-blue-500 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
            TYPE:
          </span>
          {TYPES.map((type, idx) => (
            <button
              key={idx}
              className="px-3.5 py-1.5 bg-zinc-900 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-800 text-white text-xs font-normal font-['Inter'] hover:bg-gray-800 transition-colors"
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
