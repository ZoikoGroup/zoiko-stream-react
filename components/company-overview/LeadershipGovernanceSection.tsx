'use client';

import Link from 'next/link';

interface GovernanceLink {
  label: string;
  href: string;
}

const GOVERNANCE_LINKS: GovernanceLink[] = [
  { label: 'Trust Center', href: '/trust-center' },
  { label: 'Legal & privacy', href: '/legal' },
  { label: 'Accessibility statement', href: '/accessibility' },
];

export default function LeadershipGovernanceSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-zinc-950 px-6 py-16 text-gray-900 dark:text-slate-100 sm:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-10 flex max-w-2xl flex-col items-start gap-3.5">
          {/* Tagline / Subheading Badge */}
          <div className="inline-flex items-center gap-2.5">
            <span className="h-0.5 w-5 bg-cyan-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-500 dark:text-cyan-400">
              Leadership and governance
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl font-bold leading-tight text-gray-900 dark:text-slate-100 sm:text-4xl">
            Who is accountable.
          </h2>

          {/* Subtitle Description */}
          <p className="text-base font-normal leading-relaxed text-slate-500 dark:text-slate-400">
            ZoikoStream publishes leadership information only once individual roles and
            biographies are verified and approved.
          </p>
        </div>

        {/* Feature Card Layout */}
        <div className="overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-transparent dark:border-gray-800 shadow-[0px_14px_34px_-14px_rgba(16,24,40,0.14)] dark:shadow-none">
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
            
            {/* Left Image Column (5 Cols) */}
            <div className="relative min-h-[300px] w-full lg:col-span-5 lg:min-h-[420px]">
              <img
                src="/images/company-overview/Team collaborating.png"
                alt="ZoikoStream Leadership Team"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right Content Column (7 Cols) */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-7 lg:p-12">
              
              {/* Card Title */}
              <h3 className="mb-3.5 text-xl font-bold text-gray-900 dark:text-slate-100 sm:text-2xl">
                Leadership directory
              </h3>

              {/* Card Description */}
              <p className="mb-6 text-base font-normal leading-relaxed text-slate-500 dark:text-slate-400">
                Current leadership names, titles, and biographies are maintained on the
                authoritative leadership directory. This page links to that directory
                rather than duplicating it, so information here is never out of date.
              </p>

              {/* Related Governance Links List */}
              <div className="mb-8 flex flex-col border-t border-slate-200 dark:border-gray-800">
                {GOVERNANCE_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group flex items-center justify-between border-b border-slate-200 dark:border-gray-800 py-3.5 transition-colors hover:bg-slate-50/50 dark:hover:bg-zinc-800/50"
                  >
                    <span className="text-sm font-medium text-gray-900 dark:text-slate-100 transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400">
                      {link.label}
                    </span>
                    <span className="text-sm font-bold text-violet-500 dark:text-violet-400 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ))}
              </div>

              {/* Primary Action Button */}
              <div>
                <Link
                  href="/leadership"
                  className="inline-flex items-center justify-center rounded-[10px] border border-slate-200 dark:border-gray-700 px-5 py-3 text-sm font-medium text-gray-900 dark:text-slate-100 transition-all hover:border-slate-400 hover:bg-slate-100 dark:hover:border-gray-500 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  View the leadership directory
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}