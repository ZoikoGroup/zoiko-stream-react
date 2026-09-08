import React from 'react';
import Link from 'next/link';

interface TaskRow {
  task: string;
  description: string;
  linkText: string;
  href: string;
}

const TASK_ROWS: TaskRow[] = [
  {
    task: 'Review service terms',
    description: 'Current Terms of service and any applicable service-specific terms.',
    linkText: 'Terms of service →',
    href: '#',
  },
  {
    task: 'Understand privacy practices',
    description: 'Current privacy disclosure and related privacy choices.',
    linkText: 'Privacy notice →',
    href: '#',
  },
  {
    task: 'Understand cookies / storage',
    description: 'Current cookie disclosure and preference control.',
    linkText: 'Cookie notice →',
    href: '#',
  },
  {
    task: 'Review acceptable-use rules',
    description: 'Approved service-use rules and restrictions.',
    linkText: 'Acceptable use →',
    href: '#',
  },
  {
    task: 'Review data-processing terms',
    description: 'Current public DPA or approved access route.',
    linkText: 'Data processing addendum →',
    href: '/data-processing-addendum',
  },
  {
    task: 'Review accessibility information',
    description: 'Public accessibility statement or accessibility help.',
    linkText: 'Accessibility statement →',
    href: '#',
  },
  {
    task: 'Use ZoikoStream trademarks',
    description: 'Approved brand and trademark usage guidance.',
    linkText: 'Trademark guidelines →',
    href: '#',
  },
  {
    task: 'Security / procurement evidence',
    description: 'Security, compliance, and data-protection evidence.',
    linkText: 'Trust & Security →',
    href: '/zoikostream-trust-center',
  },
];

export default function TaskNavigationSection() {
  return (
    <section className="w-full bg-[#FAFAFC] px-6 sm:px-12 lg:px-20 py-12 lg:py-16 border-b border-slate-200">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-[740px]">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
            <span className="text-[#0D6EFD] text-xs font-mono uppercase tracking-wide font-medium">
              TASK, NOT DOCUMENT NAME
            </span>
          </div>
          <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold font-['Space_Grotesk'] leading-snug">
            Find the legal document you need.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Start from what you&apos;re trying to do — each task routes to the destination that actually owns the answer.
          </p>
        </div>

        {/* Task Rows List */}
        <div className="flex flex-col border-t border-b border-slate-200 divide-y divide-slate-200">
          {TASK_ROWS.map((row, idx) => (
            <div
              key={idx}
              className="py-4 px-1 flex flex-col md:flex-row md:items-center justify-between gap-2 hover:bg-slate-100/50 transition-colors"
            >
              <div className="flex flex-col gap-0.5 max-w-xl">
                <span className="text-slate-900 text-sm font-semibold font-['Space_Grotesk']">
                  {row.task}
                </span>
                <span className="text-slate-600 text-xs font-normal font-['Inter']">
                  {row.description}
                </span>
              </div>
              <div className="shrink-0 pt-1 md:pt-0">
                <Link
                  href={row.href}
                  className="text-xs font-semibold font-['Inter'] text-[#0D6EFD] hover:underline"
                >
                  {row.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
