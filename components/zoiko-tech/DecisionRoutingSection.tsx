import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const routes = [
  { text: 'Understand ZoikoStream products and capabilities', linkText: 'Explore ZoikoStream', href: '/platform-overview' },
  { text: 'Build an integration or use APIs', linkText: 'Explore Developers', href: '/sdks' },
  { text: 'Plan a live event or managed broadcast', linkText: 'Plan a Live Event', href: '/live-events' },
  { text: 'Evaluate an enterprise deployment', linkText: 'Talk to an expert', href: '/talk-to-an-expert' },
  { text: 'Review security, compliance, resilience, or trust evidence', linkText: 'Visit Trust Center', href: '/platform-media-security' },
  { text: 'Check service health or incidents', linkText: 'View System Status', href: '/faqs-and-support' },
  { text: 'Understand privacy or legal terms', linkText: 'Review Legal & Privacy', href: '/company-overview' },
  { text: 'Work at Zoiko Tech', linkText: 'View Careers', href: '/company-overview' },
  { text: 'Propose a technology or implementation partnership', linkText: 'Explore Partners', href: '/company-overview' },
  { text: 'Understand the wider organization', linkText: 'See Operating Context', href: '/company-overview' },
];

export default function DecisionRoutingSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28 border-b border-slate-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-600 text-xs font-bold     uppercase tracking-wider">
              Decision routing
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold     text-slate-900">
            Choose the right route.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {routes.map((r, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl border border-slate-200 flex justify-between items-center gap-4 hover:border-blue-400 hover:shadow-xs transition-all group"
            >
              <span className="text-slate-900 text-sm font-medium    ">
                {r.text}
              </span>
              <Link
                href={r.href}
                className="text-blue-600 text-sm font-bold     flex items-center gap-1 shrink-0 group-hover:underline"
              >
                <span>{r.linkText}</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
