import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const AUTHORITIES = [
  {
    title: 'Data processing addendum',
    description: "How we process data on a customer's behalf.",
    linkText: 'Read DPA',
    href: '/legal',
  },
  {
    title: 'Subprocessors',
    description: 'Current list of data subprocessors.',
    linkText: 'View Subprocessors',
    href: '/legal',
  },
  {
    title: 'Trust & Security',
    description: 'Security and data-protection evidence.',
    linkText: 'Visit Trust Center',
    href: '/resources-security-trust-center',
  },
  {
    title: 'Legal overview',
    description: 'All current ZoikoStream legal documents.',
    linkText: 'Visit Legal',
    href: '/legal',
  },
];

export default function DpaSubprocessorsSecuritySection() {
  return (
    <section id="dpa-security" className="relative w-full bg-[#f0f4f8] py-16 lg:py-20 border-b border-slate-200/80">
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
          DPA, Subprocessors &amp; Security.
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed mb-8">
          This notice does not duplicate these — it routes to them.
        </p>

        {/* 4 White Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {AUTHORITIES.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <Link
                  href={item.href}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 transition-colors"
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
