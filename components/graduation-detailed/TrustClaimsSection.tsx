'use client';

import React from 'react';

export default function TrustClaimsSection() {
  const claims = [
    {
      title: 'Security',
      desc: 'Controls are described only at the level authorized by current trust and security evidence. No "military-grade" language.',
      linkText: 'Trust route →',
      url: '#'
    },
    {
      title: 'Privacy',
      desc: 'Data minimization, audience-access choices, and recording/replay separation are explained; sensitive fields are avoided.',
      linkText: 'Privacy notice →',
      url: '#'
    },
    {
      title: 'Accessibility',
      desc: 'The public page WCAG 2.2 AA target is stated. Event capabilities are listed only where verified — otherwise "needs review."',
      linkText: 'Accessibility statement →',
      url: '#'
    },
    {
      title: 'Reliability',
      desc: 'Readiness, monitoring, dependency visibility, and exceptions are explained. No "100% uptime" claim.',
      linkText: 'System status →',
      url: '#'
    },
    {
      title: 'Content rights',
      desc: 'Organizers remain responsible for rights and permissions for content they provide.',
      linkText: 'Rights guidance →',
      url: '#'
    },
    {
      title: 'Student & minor data',
      desc: 'Public planning avoids unnecessary student data. Sensitive detail is handled under restricted operational review.',
      linkText: 'Privacy & legal →',
      url: '#'
    },
    {
      title: 'Support',
      desc: 'Current support paths and active-event escalation are described. Hours or SLAs are stated only when authorized.',
      linkText: 'Support routes →',
      url: '#'
    },
    {
      title: 'Availability',
      desc: 'Region, service, and capability availability show verified state or "needs review" — never invented coverage.',
      linkText: 'Availability registry →',
      url: '#'
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white transition-colors duration-200 border-t border-slate-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-14 text-left">
        
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Every claim carries evidence — or is not made
          </h2>
          <p className="text-gray-600 dark:text-slate-400 text-base sm:text-lg">
            Each trust statement is a claim object with owner, source, scope, approved copy, evidence reference, and expiry. If evidence lapses, the page degrades to neutral language or hides the claim — never leaves a stale promise live.
          </p>
        </div>

        {/* Claims List */}
        <div className="bg-white dark:bg-zinc-950 rounded-2xl border border-slate-200 dark:border-gray-850 flex flex-col divide-y divide-slate-200 dark:divide-gray-850 shadow-md overflow-hidden">
          {claims.map((claim, idx) => (
            <div 
              key={idx}
              className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/50 dark:hover:bg-zinc-955/20 transition-colors"
            >
              <div className="md:w-1/4">
                <h3 className="text-zinc-900 dark:text-white text-base font-bold font-sans">
                  {claim.title}
                </h3>
              </div>
              
              <div className="flex-1 md:px-4">
                <p className="text-gray-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  {claim.desc}
                </p>
              </div>

              <div className="md:w-1/4 md:text-right shrink-0">
                <a 
                  href={claim.url}
                  className="text-violet-605 dark:text-violet-400 text-xs sm:text-sm font-medium hover:underline inline-flex items-center gap-1"
                >
                  {claim.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
