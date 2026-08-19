'use client';

import React from 'react';

export default function EvidenceTrustSection() {
  const rows = [
    {
      domain: 'Attendee Privacy',
      scope: 'Zero commercial data exploitation',
      source: 'Zoiko Cloud Data Policy',
      owner: 'Risk & Compliance Committee',
      status: 'Verified',
      statusType: 'verified' // emerald
    },
    {
      domain: 'Accessibility',
      scope: 'WCAG 2.2 AA default standard player',
      source: 'Deque Axe Auditor Log v2.4',
      owner: 'Engineering QA Group',
      status: 'Verified',
      statusType: 'verified'
    },
    {
      domain: 'Platform Security',
      scope: 'SOC 2 Type II Compliance',
      source: 'A-LIGN Security Audit 2025',
      owner: 'VP Security & Infrastructure',
      status: 'Verified',
      statusType: 'verified'
    },
    {
      domain: 'Uptime SLA',
      scope: '99.9% uptime delivery guarantee',
      source: 'Multi-CDN Failover Log',
      owner: 'Operations Control',
      status: 'Verified',
      statusType: 'verified'
    },
    {
      domain: 'Support Coverage',
      scope: 'Technician ring-fenced on live hours',
      source: 'Operator SLA Schedules',
      owner: 'Event Operations Lead',
      status: 'Verified',
      statusType: 'verified'
    },
    {
      domain: 'Boundary Security',
      scope: 'No direct database injection paths',
      source: 'Penetration Test Report',
      owner: 'External SecOps Auditor',
      status: 'Verified',
      statusType: 'verified'
    },
    {
      domain: 'Jurisdiction Limit',
      scope: 'Data residency within approved borders',
      source: 'Host Ingestion Matrix',
      owner: 'VP Legal Counsel',
      status: 'Verified',
      statusType: 'verified'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-200 border-t border-slate-100 dark:border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl font-bold font-sans tracking-tight">
            Every claim carries evidence — or is not made
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            Each trust statement is a claim object with owner, source, scope, and expiry.
          </p>
        </div>

        {/* Ledger Table (No borders) */}
        <div className="p-6 sm:p-8 bg-slate-50 dark:bg-zinc-900/40 rounded-2xl flex flex-col gap-6 shadow-sm border border-slate-100 dark:border-zinc-850">
          <h3 className="text-zinc-900 dark:text-white text-base font-bold font-sans">
            Evidence-Backed Trust Ledger
          </h3>
          
          <div className="w-full overflow-x-auto">
            <div className="min-w-[800px] flex flex-col gap-2">
              
              {/* Header row */}
              <div className="flex items-center gap-4 px-4 py-3 bg-slate-200/50 dark:bg-zinc-800 rounded-xl text-gray-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                <div className="w-1/5">Claim Domain</div>
                <div className="w-1/4">Scope of Assurance</div>
                <div className="w-1/4">Evidence Source</div>
                <div className="w-1/5">Audit Owner</div>
                <div className="w-1/12 text-right">Status</div>
              </div>

              {/* Rows */}
              {rows.map((row, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-4 px-4 py-4 bg-white dark:bg-zinc-950/60 rounded-xl transition-colors hover:bg-slate-100/50 dark:hover:bg-zinc-900/50"
                >
                  <div className="w-1/5 text-zinc-900 dark:text-white text-sm font-bold font-sans">{row.domain}</div>
                  <div className="w-1/4 text-gray-505 dark:text-slate-450 text-sm font-sans">{row.scope}</div>
                  <div className="w-1/4 text-gray-500 dark:text-slate-400 text-sm font-sans">{row.source}</div>
                  <div className="w-1/5 text-gray-500 dark:text-slate-400 text-sm font-sans">{row.owner}</div>
                  <div className="w-1/12 flex justify-end">
                    <span className="px-3 py-1 text-xs font-semibold rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-400">
                      {row.status}
                    </span>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
