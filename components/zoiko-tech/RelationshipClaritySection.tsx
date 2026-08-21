import React from 'react';
import Link from 'next/link';

const entities = [
  {
    name: 'Zoiko Group',
    type: 'Parent organization',
    relationship: 'Parent organizational context behind Zoiko Tech and ZoikoStream.',
    role: 'Corporate context',
    highlighted: false,
  },
  {
    name: 'Zoiko Tech',
    type: 'Technology company',
    relationship: 'Builds, operates, secures, and evolves ZoikoStream.',
    role: 'This page',
    highlighted: true,
  },
  {
    name: 'ZoikoStream',
    type: 'Streaming platform',
    relationship: 'The product/platform customers and developers use.',
    role: 'Platform overview',
    highlighted: false,
  },
  {
    name: 'Zoiko Cloud',
    type: 'Shared technology / infrastructure',
    relationship: 'Provides shared technology and infrastructure that supports ZoikoStream.',
    role: 'Technical context; not presented as a legal parent',
    highlighted: false,
  },
  {
    name: 'Live Events',
    type: 'ZoikoStream capability',
    relationship: 'Specialized capability for live event production and delivery within ZoikoStream.',
    role: 'Live Events overview',
    highlighted: false,
  },
];

export default function RelationshipClaritySection() {
  return (
    <section className="w-full bg-white py-20 md:py-28 border-b border-slate-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-600 text-xs font-bold     uppercase tracking-wider">
              Relationship clarity
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold     text-slate-900">
            How the pieces fit.
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal     leading-relaxed max-w-3xl">
            Five distinct entities. Corporate and technology relationships are labeled separately rather than collapsed into a single hierarchy.
          </p>
        </div>

        {/* Entity Table */}
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-md flex flex-col gap-4">
          <div className="p-3 bg-slate-50 rounded-lg grid grid-cols-1 md:grid-cols-12 gap-4 text-xs font-bold     text-slate-400 uppercase tracking-wider">
            <span className="md:col-span-2">Name</span>
            <span className="md:col-span-3">Type</span>
            <span className="md:col-span-4">Relationship to ZoikoStream</span>
            <span className="md:col-span-3">Public-page role</span>
          </div>

          <div className="flex flex-col divide-y divide-slate-200">
            {entities.map((row, idx) => (
              <div
                key={idx}
                className={`p-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center rounded-xl transition-colors ${
                  row.highlighted ? 'bg-slate-50 border border-slate-200' : ''
                }`}
              >
                <span className="md:col-span-2 text-slate-900 text-base font-bold    ">
                  {row.name}
                </span>
                <span className="md:col-span-3 text-indigo-600 text-sm font-semibold    ">
                  {row.type}
                </span>
                <p className="md:col-span-4 text-slate-600 text-sm font-normal     leading-relaxed">
                  {row.relationship}
                </p>
                <span className="md:col-span-3 text-slate-400 text-sm font-normal    ">
                  {row.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note Box */}
        <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-slate-600 text-sm font-normal     leading-relaxed">
            Zoiko Tech&apos;s role in building and operating ZoikoStream does not by itself identify the legal entity that contracts for every customer or service. Applicable agreements are authoritative.
          </p>
          <Link
            href="/company-overview"
            className="text-blue-600 text-base font-semibold     whitespace-nowrap shrink-0 hover:underline"
          >
            See Operating Context →
          </Link>
        </div>
      </div>
    </section>
  );
}
