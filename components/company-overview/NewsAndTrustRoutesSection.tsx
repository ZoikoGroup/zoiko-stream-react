'use client';

import Link from 'next/link';

interface TrustRoute {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
}

const TRUST_ROUTES: TrustRoute[] = [
  {
    id: 'newsroom',
    title: 'Newsroom',
    description: 'Official company news and announcements, dated and archived.',
    ctaText: 'Visit the newsroom →',
    href: '/newsroom',
  },
  {
    id: 'trust-center',
    title: 'Trust Center',
    description: 'Inspectable evidence of how the platform is governed and protected.',
    ctaText: 'Open Trust Center →',
    href: '/trust-center',
  },
  {
    id: 'system-status',
    title: 'System status',
    description: 'Validated monitoring and real incident history, not estimated uptime.',
    ctaText: 'View status →',
    href: '/status',
  },
  {
    id: 'legal-privacy',
    title: 'Legal & privacy',
    description: 'Authoritative terms, notices, and data-handling documentation.',
    ctaText: 'Read the policies →',
    href: '/legal',
  },
];

export default function NewsAndTrustRoutesSection() {
  return (
    <section className="w-full bg-slate-950 px-6 py-16 text-white sm:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-10 flex max-w-2xl flex-col items-start gap-3.5">
          {/* Tagline / Badge */}
          <div className="inline-flex items-center gap-2.5">
            <span className="h-0.5 w-5 bg-cyan-400" />
            <span className="  text-xs font-bold uppercase tracking-wider text-cyan-400">
              News and trust routes
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="  text-3xl font-bold leading-tight text-white sm:text-4xl">
            Where to verify current information.
          </h2>

          {/* Subtitle Description */}
          <p className="  text-base font-normal leading-relaxed text-slate-400">
            Distinct, authoritative destinations for news, governance, and operational status.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ROUTES.map((route) => (
            <div
              key={route.id}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-gray-900/70 p-5 backdrop-blur-[1.5px] transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-gray-900/90"
            >
              <div className="flex flex-col gap-2">
                {/* Route Title */}
                <h3 className="  text-base font-bold text-white">
                  {route.title}
                </h3>

                {/* Route Description */}
                <p className="pb-4   text-xs font-normal leading-relaxed text-white/60">
                  {route.description}
                </p>
              </div>

              {/* Action Link */}
              <div>
                <Link
                  href={route.href}
                  className="  text-xs font-bold text-cyan-400 transition-colors hover:text-cyan-300 focus:outline-none"
                >
                  {route.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Bar */}
        <div className="mt-6 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/20 bg-gray-900/50 p-6 sm:p-7 md:flex-row md:items-center">
          <p className="max-w-xl   text-sm font-normal leading-relaxed text-white/60">
            Recent newsroom items appear here once published. In the meantime, the Trust
            Center, system status, and legal routes above stay current.
          </p>

          <Link
            href="/trust-center"
            className="inline-flex shrink-0 items-center justify-center rounded-[10px] border border-white/30 px-5 py-3   text-sm font-medium text-white transition-all hover:border-white/60 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Explore Trust Center
          </Link>
        </div>

      </div>
    </section>
  );
}