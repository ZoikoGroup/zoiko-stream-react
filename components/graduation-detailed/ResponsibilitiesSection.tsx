'use client';

import React from 'react';

export default function ResponsibilitiesSection() {
  const rows = [
    {
      area: 'Venue & source',
      organizer: 'Confirms site and source availability.',
      partner: 'Provides physical venue and access.',
      provider: 'Handoff and testing where in scope.',
      status: 'Verified',
      statusStyle: 'bg-cyan-50 dark:bg-cyan-950/30 text-cyan-705 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800'
    },
    {
      area: 'Video / camera',
      organizer: 'Provides or contracts feed.',
      partner: 'Owns switching where present.',
      provider: 'Receives approved program feed.',
      status: 'Verified',
      statusStyle: 'bg-cyan-50 dark:bg-cyan-950/30 text-cyan-705 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800'
    },
    {
      area: 'Audio',
      organizer: 'Names owner + backup path.',
      partner: 'Provides stage/PA/mix.',
      provider: 'Test status recorded.',
      status: 'Needs test',
      statusStyle: 'bg-amber-50 dark:bg-amber-950/30 text-amber-705 dark:text-amber-450 border-amber-200 dark:border-amber-800'
    },
    {
      area: 'Graphics',
      organizer: 'Owns names, slides, branding source.',
      partner: 'Optional partner scope.',
      provider: 'Only where in service scope.',
      status: 'Assign owner',
      statusStyle: 'bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-850'
    },
    {
      area: 'Connectivity',
      organizer: 'Confirms primary + backup.',
      partner: 'Site network ownership.',
      provider: 'Dependency visibility.',
      status: 'Tested',
      statusStyle: 'bg-cyan-50 dark:bg-cyan-950/30 text-cyan-705 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800'
    },
    {
      area: 'Captions / languages',
      organizer: 'Identifies needs early.',
      partner: 'May supply provider.',
      provider: 'Provider status shown.',
      status: 'Provider pending',
      statusStyle: 'bg-amber-50 dark:bg-amber-950/30 text-amber-705 dark:text-amber-455 border-amber-200 dark:border-amber-800'
    },
    {
      area: 'Recording & replay',
      organizer: 'Authorizes intent + retention.',
      partner: '—',
      provider: 'Capability shown where in scope.',
      status: 'Decision needed',
      statusStyle: 'bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-850'
    },
    {
      area: 'Support',
      organizer: 'Assigns internal contact.',
      partner: 'On-site owner where present.',
      provider: 'Escalation path documented.',
      status: 'Assigned',
      statusStyle: 'bg-cyan-50 dark:bg-cyan-950/30 text-cyan-750 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800'
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white transition-colors duration-200 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-14 text-left">
        
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Who does what — mapped, not assumed
          </h2>
          <p className="text-gray-600 dark:text-slate-400 text-base sm:text-lg">
            Production responsibilities are explicit. Nothing implies that ZoikoStream automatically supplies cameras, crew, network, graphics, captions, or venue services. &quot;Unknown&quot; is a valid state; ambiguity is never resolved silently.
          </p>
        </div>

        {/* Responsive Table wrapper */}
        <div className="w-full overflow-x-auto rounded-2xl shadow-md">
          <table className="w-full  text-left min-w-[800px]">
            <thead>
              <tr className="bg-slate-50 dark:bg-zinc-950 ">
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider w-40">Area</th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Organizer</th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Venue / Partner</th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">ZoikoStream / Provider</th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider w-40">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-zinc-950/20 transition-colors">
                  <td className="p-4 text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">{row.area}</td>
                  <td className="p-4 text-xs sm:text-sm text-gray-600 dark:text-slate-400">{row.organizer}</td>
                  <td className="p-4 text-xs sm:text-sm text-gray-600 dark:text-slate-400">{row.partner}</td>
                  <td className="p-4 text-xs sm:text-sm text-gray-600 dark:text-slate-400">{row.provider}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full ${row.statusStyle}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
