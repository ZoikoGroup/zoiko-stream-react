import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface RouteCard {
  id: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const ROUTE_CARDS: RouteCard[] = [
  {
    id: 'misuse',
    title: 'I suspect another user is misusing ZoikoStream',
    description: 'Report it below under Report suspected misuse.',
    linkText: 'Report suspected misuse',
    href: '#report-misuse',
  },
  {
    id: 'security',
    title: 'I found a security vulnerability',
    description: 'Use responsible disclosure — not the misuse report form.',
    linkText: 'Responsible disclosure',
    href: '/resources-security-trust-center',
  },
  {
    id: 'billing',
    title: 'I have a billing or account question',
    description: "This policy doesn't cover billing. Use Support instead.",
    linkText: 'Go to Support',
    href: '/support-enterprise',
  },
  {
    id: 'privacy',
    title: 'I have a question about my personal data',
    description: 'Use the Privacy Notice and data-rights route instead.',
    linkText: 'View Privacy Notice',
    href: '/privacy',
  },
];

export default function WhichRouteDoINeedSection() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
            Which route do I need?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            This policy addresses conduct on ZoikoStream. Other concerns have their own dedicated route.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ROUTE_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div>
                <Link
                  href={card.href}
                  className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>{card.linkText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
