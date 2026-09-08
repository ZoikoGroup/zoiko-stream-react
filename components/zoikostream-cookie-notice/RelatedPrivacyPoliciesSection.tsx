import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const POLICIES = [
  {
    title: 'Privacy notice',
    description: 'How we handle personal data generally.',
    linkText: 'Read Privacy notice',
    href: '/privacy',
  },
  {
    title: 'Data Processing Agreement',
    description: 'For customers requiring a DPA.',
    linkText: 'View DPA',
    href: '/legal',
  },
  {
    title: 'Subprocessors',
    description: 'Current list of data subprocessors.',
    linkText: 'View Subprocessors',
    href: '/legal',
  },
  {
    title: 'Trust Center',
    description: 'Security, privacy, and resilience evidence.',
    linkText: 'Visit Trust Center',
    href: '/resources-security-trust-center',
  },
];

export default function RelatedPrivacyPoliciesSection() {
  return (
    <section id="related-policies" className="relative w-full bg-white py-16 lg:py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 uppercase">
            SPECIALIST AUTHORITIES
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Related privacy &amp; legal policies.
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed mb-8">
          This notice does not duplicate specialist authorities — it hands off to them.
        </p>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {POLICIES.map((item) => (
            <div
              key={item.title}
              className="bg-[#0d1424] text-white rounded-2xl border border-slate-800 p-6 flex flex-col justify-between shadow-md"
            >
              <div>
                <h3 className="font-bold text-white text-base mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div>
                <Link
                  href={item.href}
                  className="text-xs font-semibold text-teal-400 hover:text-teal-300 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
