import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface LegalPolicy {
  title: string;
  description: string;
  metadata: string;
  href: string;
}

const POLICIES: LegalPolicy[] = [
  {
    title: 'Terms of Service',
    description: 'The core agreement governing access to and use of ZoikoStream.',
    metadata: 'Current · Version 4.0 · Last updated Jul 2026',
    href: '/acceptable-use',
  },
  {
    title: 'Privacy Notice',
    description: 'How ZoikoStream collects, uses, and protects personal data.',
    metadata: 'Current · Last updated Jul 2026',
    href: '/zoikostream-privacy-notice',
  },
  {
    title: 'Acceptable Use Policy',
    description: 'Rules for responsible use of ZoikoStream, including prohibited conduct and how to report suspected misuse.',
    metadata: 'Current · Version 3.2 · Last reviewed Aug 2026',
    href: '/zoikostream-acceptable-use',
  },
  {
    title: 'Accessibility Statement',
    description: 'Current accessibility conformance status, known limitations, and how to get accessibility help.',
    metadata: 'Current · Version 2.1 · Last reviewed Aug 2026',
    href: '/resource-accessibility',
  },
  {
    title: 'Cookie Notice',
    description: 'How cookies and similar technologies are used across ZoikoStream.',
    metadata: 'Current · Last updated Jun 2026',
    href: '/zoikostream-cookie-notice',
  },
  {
    title: 'Data Processing Addendum',
    description: 'Terms governing processing of customer data under applicable data protection law.',
    metadata: 'Current · Last updated May 2026',
    href: '/zoikostream-data-protection',
  },
  {
    title: 'Subprocessors',
    description: 'Current list of third parties engaged to help process customer data.',
    metadata: 'Current · Last updated Aug 2026',
    href: '/zoikostream-trust-center',
  },
  {
    title: 'Trademark & Brand Guidelines',
    description: 'Approved use of ZoikoStream names, logos, and brand assets.',
    metadata: 'Current · Version 1.4 · Last reviewed Aug 2026',
    href: '/company-overview',
  },
  {
    title: 'Vulnerability Disclosure Policy',
    description: 'How to report a suspected security vulnerability, and the safe-harbor terms for good-faith research.',
    metadata: 'Current · Last updated Jul 2026',
    href: '/responsible-disclosure',
  },
];

export default function LegalPoliciesSection() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24 text-left">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 uppercase">
            LEGAL
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
          ZoikoStream legal policies.
        </h1>

        {/* Subtitle / Intro */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mb-10">
          Current versions of the agreements and policies that govern use of ZoikoStream.
          Where a specific document conflicts with a general description elsewhere on this site,
          the document below is authoritative.
        </p>

        {/* Policy List */}
        <div className="border-t border-slate-200/90 divide-y divide-slate-200/80">
          {POLICIES.map((policy) => (
            <div
              key={policy.title}
              className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 group"
            >
              <div className="flex-1 min-w-0">
                <h2 className="text-base sm:text-[17px] font-bold text-slate-900 tracking-tight mb-1 group-hover:text-blue-600 transition-colors">
                  <Link href={policy.href} className="hover:underline">
                    {policy.title}
                  </Link>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-1.5 max-w-2xl">
                  {policy.description}
                </p>
                <p className="font-mono text-[11px] text-slate-400">
                  {policy.metadata}
                </p>
              </div>

              <div className="shrink-0 self-start sm:self-center">
                <Link
                  href={policy.href}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group-hover:translate-x-0.5 duration-150"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Disclaimer Notice Box */}
        <div className="mt-10 bg-[#f8fafc] border border-slate-200/80 rounded-2xl p-5 sm:p-6 max-w-2xl">
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            This page provides navigation to current policy documents. It does not itself
            create, modify, or interpret any legal obligation. If you have a question about a
            specific document, use the contact route named in that document.
          </p>
        </div>
      </div>
    </section>
  );
}
