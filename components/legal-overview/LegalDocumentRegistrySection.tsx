'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface LegalDocItem {
  code: string;
  title: string;
  category: string;
  description: string;
  version: string;
  href: string;
  isCurrentPage?: boolean;
}

const LEGAL_DOCUMENTS: LegalDocItem[] = [
  {
    code: '01',
    title: 'Legal overview',
    category: 'INDEX',
    description: 'You are here — the discovery and routing hub for all current legal documents.',
    version: 'v—',
    href: '/legal-overview',
    isCurrentPage: true,
  },
  {
    code: '02',
    title: 'Terms of service',
    category: 'TERMS',
    description: 'The general operative terms for using ZoikoStream services.',
    version: 'v1.0',
    href: '#',
  },
  {
    code: '03',
    title: 'Privacy notice',
    category: 'NOTICE',
    description: 'How ZoikoStream collects, uses, and protects personal data.',
    version: 'v1.0',
    href: '#',
  },
  {
    code: '04',
    title: 'Cookie notice',
    category: 'NOTICE',
    description: 'Cookies and similar technologies, and how to manage your choices.',
    version: 'v1.0',
    href: '#',
  },
  {
    code: '05',
    title: 'Acceptable use',
    category: 'POLICY',
    description: "Approved rules for what is and isn't permitted when using ZoikoStream.",
    version: 'v1.0',
    href: '#',
  },
  {
    code: '06',
    title: 'Data processing addendum',
    category: 'ADDENDUM',
    description: "How ZoikoStream processes data on a customer's behalf under contract.",
    version: 'v1.0',
    href: '/data-processing-addendum',
  },
  {
    code: '07',
    title: 'Service-specific terms',
    category: 'SUPPLEMENTAL TERMS',
    description: 'Supplemental terms for explicitly identified services, published only where current.',
    version: 'vVaries',
    href: '#',
  },
  {
    code: '08',
    title: 'Accessibility statement',
    category: 'STATEMENT',
    description: 'Our public accessibility statement and commitment.',
    version: 'v1.0',
    href: '#',
  },
  {
    code: '09',
    title: 'Trademark guidelines',
    category: 'GUIDELINES',
    description: 'Approved guidance before using ZoikoStream names, marks, or logos.',
    version: 'v1.0',
    href: '#',
  },
];

export default function LegalDocumentRegistrySection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');

  const filteredDocs = LEGAL_DOCUMENTS.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.code.includes(searchQuery);

    const matchesType = typeFilter === 'All' || doc.category === typeFilter;

    return matchesSearch && matchesType;
  });

  return (
    <section className="w-full bg-[#F8FAFC] px-6 sm:px-12 lg:px-20 py-12 lg:py-16 border-b border-slate-200">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-[740px]">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
            <span className="text-[#0D6EFD] text-xs font-mono uppercase tracking-wide font-medium">
              NINE CURRENT DESTINATIONS
            </span>
          </div>
          <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold font-['Space_Grotesk'] leading-snug">
            Current legal documents.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Generated from the approved Legal Document Registry — search or filter to jump straight to what you need.
          </p>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search legal documents"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3.5 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0D6EFD]/20"
            />
          </div>

          <div className="shrink-0">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-3 bg-white border border-slate-300 rounded-lg text-xs font-normal text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0D6EFD]/20"
            >
              <option value="All">All types</option>
              <option value="TERMS">Terms</option>
              <option value="NOTICE">Notice</option>
              <option value="POLICY">Policy</option>
              <option value="ADDENDUM">Addendum</option>
            </select>
          </div>
        </div>

        <div className="text-slate-500 font-mono text-xs">
          {filteredDocs.length} documents shown
        </div>

        {/* Grid of 9 Document Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => (
            <div
              key={doc.code}
              className={`p-5 rounded-2xl border flex flex-col justify-between shadow-sm transition-all ${
                doc.isCurrentPage
                  ? 'bg-[#F3F4F6] border-slate-300'
                  : 'bg-white border-slate-200 hover:shadow-md'
              }`}
            >
              <div className="flex flex-col gap-2.5">
                <span className="text-xs font-mono text-slate-400 font-normal">
                  {doc.code}
                </span>

                <h3 className="text-slate-900 text-base font-semibold font-['Space_Grotesk']">
                  {doc.title}
                </h3>

                <span className="text-[11px] font-mono uppercase tracking-tight text-slate-500">
                  {doc.category}
                </span>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {doc.description}
                </p>

                <div className="flex items-center gap-2 pt-1">
                  <span className="px-2 py-0.5 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-700 text-[10px] font-mono font-medium">
                    Current
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-mono">
                    {doc.version}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                {doc.isCurrentPage ? (
                  <span className="text-xs font-semibold font-['Inter'] text-slate-500">
                    You are here
                  </span>
                ) : (
                  <Link
                    href={doc.href}
                    className="text-xs font-semibold font-['Inter'] text-[#0D6EFD] hover:underline"
                  >
                    Open current →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
