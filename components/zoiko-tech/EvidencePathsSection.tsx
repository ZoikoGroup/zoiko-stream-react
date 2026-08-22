import React from 'react';
import Link from 'next/link';

const evidenceRows = [
  {
    q: 'Is ZoikoStream operating normally?',
    route: 'System Status →',
    href: '/faqs-and-support',
    answer: 'Current production status, active incidents, scheduled maintenance, and incident history as publicly governed.',
  },
  {
    q: 'How does ZoikoStream approach security and compliance?',
    route: 'Trust Center →',
    href: '/platform-media-security',
    answer: 'Security, compliance, resilience, privacy, subprocessors, and evidence requests.',
  },
  {
    q: 'How is data handled?',
    route: 'Privacy →',
    href: '/company-overview',
    answer: 'Applicable privacy notices, data handling, choices, and jurisdictional information.',
  },
  {
    q: 'What terms govern the service?',
    route: 'Legal →',
    href: '/company-overview',
    answer: 'Terms, agreements, payment/commercial terms, and regional legal notices as applicable.',
  },
  {
    q: 'What changed recently?',
    route: 'Company Updates →',
    href: '/company-overview',
    answer: 'Governed announcements, material platform updates, and public change context.',
  },
  {
    q: 'Where are developer requirements documented?',
    route: 'Developers →',
    href: '/sdks',
    answer: 'APIs, documentation, integration requirements, developer support, and technical guidance.',
  },
];

export default function EvidencePathsSection() {
  return (
    <section className="w-full bg-slate-50 py-20 md:py-28 border-b border-slate-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-600 text-xs font-bold     uppercase tracking-wider">
              Evidence paths
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold     text-slate-900">
            Trust, reliability &amp; evidence.
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal     leading-relaxed max-w-3xl">
            Ordinary links, server-rendered, and usable even without JavaScript.
          </p>
        </div>

        {/* Table Container */}
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-md flex flex-col gap-4">
          <div className="p-3 bg-slate-50 rounded-lg grid grid-cols-1 md:grid-cols-12 gap-4 text-xs font-bold     text-slate-400 uppercase tracking-wider">
            <span className="md:col-span-4">Question</span>
            <span className="md:col-span-3">Route</span>
            <span className="md:col-span-5">What the destination answers</span>
          </div>

          <div className="flex flex-col divide-y divide-slate-200">
            {evidenceRows.map((row, idx) => (
              <div key={idx} className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <span className="md:col-span-4 text-slate-900 text-base font-semibold    ">
                  {row.q}
                </span>
                <Link
                  href={row.href}
                  className="md:col-span-3 text-blue-600 text-sm font-semibold     hover:underline"
                >
                  {row.route}
                </Link>
                <p className="md:col-span-5 text-slate-600 text-sm font-normal     leading-relaxed">
                  {row.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
