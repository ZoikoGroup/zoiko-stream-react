import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg147 from '@/public/images/Organization-overview/bg (147).png';

const EVIDENCE = [
  {
    area: 'ZoikoStream Web App',
    standard: 'WCAG 2.2 AA',
    status: 'Partially Conforms',
    statusBg: 'bg-amber-100 text-amber-600',
    method: 'Manual + Automated',
    date: 'Dec 2025',
    actionText: 'View VPAT →',
    href: '#vpat-report',
  },
  {
    area: 'Player SDK — Web',
    standard: 'WCAG 2.1 AA',
    status: 'Verified Conformance',
    statusBg: 'bg-emerald-100 text-emerald-600',
    method: 'Expert Review',
    date: 'Nov 2025',
    actionText: 'View Report →',
    href: '#vpat-report',
  },
  {
    area: 'Admin Console',
    standard: 'WCAG 2.2 AA',
    status: 'Findings Open',
    statusBg: 'bg-red-100 text-red-600',
    method: 'Manual + AT Testing',
    date: 'Oct 2025',
    actionText: 'Review Issues →',
    href: '#vpat-report',
  },
  {
    area: 'Mobile App (iOS)',
    standard: 'WCAG 2.2 AA',
    status: 'Testing In Progress',
    statusBg: 'bg-sky-100 text-sky-700',
    method: 'AT Testing',
    date: 'Jan 2026',
    actionText: 'Track Progress →',
    href: '#vpat-report',
  },
];

export default function AccessibilityEvidenceTableSection() {
  return (
    <section id="conformance-evidence" className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-white overflow-hidden">
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
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Conformance and testing evidence
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Each record states what was tested, how it was tested, when, and what the result was.
        </p>
      </div>

      {/* Evidence Table */}
      <div className="relative z-10 w-full p-6 bg-white/90 backdrop-blur-xs rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start overflow-x-auto shadow-sm">
        <div className="min-w-[700px] w-full flex flex-col">
          {/* Header Row */}
          <div className="w-full p-4 bg-slate-50 border-b-2 border-gray-200 flex justify-start items-center gap-3">
            <div className="w-56 text-slate-900 text-xs font-bold font-['Space_Grotesk']">
              Product Area
            </div>
            <div className="flex-1 text-slate-900 text-xs font-bold font-['Space_Grotesk']">
              Target Standard
            </div>
            <div className="flex-1 text-slate-900 text-xs font-bold font-['Space_Grotesk']">
              Result State
            </div>
            <div className="flex-1 text-slate-900 text-xs font-bold font-['Space_Grotesk']">
              Methodology
            </div>
            <div className="flex-1 text-slate-900 text-xs font-bold font-['Space_Grotesk']">
              Last Tested
            </div>
            <div className="w-28 text-right text-slate-900 text-xs font-bold font-['Space_Grotesk']">
              Action
            </div>
          </div>

          {/* Table Rows */}
          {EVIDENCE.map((row, idx) => (
            <div
              key={idx}
              className="w-full p-4 border-b border-gray-200 flex justify-start items-center gap-3 hover:bg-slate-50/50 transition-colors"
            >
              <div className="w-56 text-slate-900 text-sm font-bold font-['Space_Grotesk']">
                {row.area}
              </div>
              <div className="flex-1 text-slate-600 text-xs font-normal font-['Inter']">
                {row.standard}
              </div>
              <div className="flex-1">
                <div className={`px-2 py-1 ${row.statusBg} rounded-md inline-flex justify-start items-start`}>
                  <span className="text-xs font-semibold font-['Inter']">
                    {row.status}
                  </span>
                </div>
              </div>
              <div className="flex-1 text-slate-600 text-xs font-normal font-['Inter']">
                {row.method}
              </div>
              <div className="flex-1 text-slate-600 text-xs font-normal font-['Inter']">
                {row.date}
              </div>
              <div className="w-28 text-right">
                <Link
                  href={row.href}
                  className="text-blue-600 hover:text-blue-700 text-xs font-bold font-['Space_Grotesk'] underline transition-colors"
                >
                  {row.actionText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
