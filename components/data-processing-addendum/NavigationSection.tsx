'use client';

import React from 'react';

const NAV_LINKS = [
  { name: 'Applicability', href: '#applicability' },
  { name: 'Package status', href: '#package-status' },
  { name: 'Parties & roles', href: '#parties-roles' },
  { name: 'Processing instructions', href: '#processing-instructions' },
  { name: 'Processing annex', href: '#processing-annex' },
  { name: 'Security measures', href: '#security-measures' },
  { name: 'Subprocessors', href: '#subprocessors' },
  { name: 'International transfers', href: '#international-transfers' },
  { name: 'Assistance', href: '#assistance' },
  { name: 'Deletion & retention', href: '#deletion-retention' },
  { name: 'Audit', href: '#audit' },
  { name: 'Request / execute', href: '#request-execute' },
  { name: 'Version history', href: '#version-history' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Related policies', href: '#related-policies' },
];

export default function NavigationSection() {
  return (
    <nav className="sticky top-0 z-30 w-full bg-[#F3F4F6] border-y border-slate-200 py-3.5 px-6 sm:px-12 lg:px-20 text-xs">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-2">
        <div className="text-slate-500 font-mono text-xs uppercase tracking-wide font-normal">
          ON THIS PAGE ▾
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-600 text-xs font-normal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#0D6EFD] transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
