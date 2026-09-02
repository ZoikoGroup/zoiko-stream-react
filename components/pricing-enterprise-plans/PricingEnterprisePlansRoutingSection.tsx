import React from 'react';
import Link from 'next/link';

const ROUTES = [
  {
    question: 'Why did my bill change?',
    cta: 'Usage and billing →',
    href: '/resources',
  },
  {
    question: 'What usage am I being billed for?',
    cta: 'Usage and billing →',
    href: '/resources',
  },
  {
    question: 'Can I change my contracted scope?',
    cta: 'Contact your account team →',
    href: '/contact-us',
  },
  {
    question: 'I need technical help.',
    cta: 'Help Center / Support →',
    href: '/resource-help-center',
  },
  {
    question: "I'm evaluating a new, separate deployment.",
    cta: 'Continue on this page →',
    href: '#quote-request',
  },
];

export default function PricingEnterprisePlansRoutingSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-50 flex flex-col justify-start items-start gap-12 border-b border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-400 rounded-[3px]" />
          <span className="text-blue-400 text-xs font-bold font-['Inter'] uppercase tracking-wider">
            Already a ZoikoStream customer?
          </span>
        </div>
        <h2 className="text-gray-800 text-3xl font-bold font-['Sora'] leading-tight">
          Get the right route for your question.
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          Existing customers with billing or account questions should not be routed into new-business sales.
        </p>
      </div>

      {/* Table Container */}
      <div className="w-full max-w-5xl bg-slate-50 border-t border-b border-zinc-200 divide-y divide-zinc-200">
        <div className="py-3 flex justify-between items-center text-gray-400 text-xs font-bold font-['Inter'] uppercase tracking-wide">
          <span>Question</span>
          <span>Primary route</span>
        </div>

        {ROUTES.map((row, idx) => (
          <div key={idx} className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <span className="text-gray-800 text-sm font-semibold font-['Inter']">
              {row.question}
            </span>
            <Link
              href={row.href}
              className="text-blue-400 hover:text-blue-500 text-sm font-bold font-['Inter'] transition-colors"
            >
              {row.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
