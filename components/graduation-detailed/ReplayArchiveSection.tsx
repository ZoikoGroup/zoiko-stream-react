'use client';

import React from 'react';
import { 
  Radio, 
  Disc, 
  Play, 
  Download, 
  Scissors, 
  Archive, 
  Trash2 
} from 'lucide-react';

export default function ReplayArchiveSection() {
  const rows = [
    {
      title: 'Live only',
      desc: 'No post-event replay intended. Behavior at event end is stated clearly.',
      badge: 'Decide',
      badgeStyle: 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border-zinc-200 dark:border-zinc-700',
      icon: Radio
    },
    {
      title: 'Record',
      desc: 'A recording is desired. Capability, rights, owner, and retention are shown; never on by default.',
      badge: 'Configure',
      badgeStyle: 'bg-violet-100 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-850',
      icon: Disc
    },
    {
      title: 'Replay',
      desc: 'A replay window is desired. Start, end, and availability state are separate from recording.',
      badge: 'Configure',
      badgeStyle: 'bg-violet-100 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-850',
      icon: Play
    },
    {
      title: 'Download',
      desc: 'File delivery. Conditional capability; permission and secure handoff required.',
      badge: 'Review',
      badgeStyle: 'bg-amber-100 dark:bg-amber-950/30 text-amber-800 dark:text-amber-400 border-amber-200 dark:border-amber-800',
      icon: Download
    },
    {
      title: 'Clips / highlights',
      desc: 'Extracts. Separate production scope and rights; never implied to be auto-generated.',
      badge: 'Optional',
      badgeStyle: 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border-zinc-200 dark:border-zinc-700',
      icon: Scissors
    },
    {
      title: 'Archive',
      desc: 'Longer-term hosting/preservation. Separate product, retention, and ownership; no permanent-storage claim.',
      badge: 'Optional',
      badgeStyle: 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border-zinc-200 dark:border-zinc-700',
      icon: Archive
    },
    {
      title: 'Delete / expire',
      desc: 'Content should no longer be available. Explicit expiry/deletion behavior and evidence where applicable.',
      badge: 'Review',
      badgeStyle: 'bg-amber-100 dark:bg-amber-950/30 text-amber-800 dark:text-amber-400 border-amber-200 dark:border-amber-800',
      icon: Trash2
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white transition-colors duration-200 border-t border-slate-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-14 text-left">
        
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Live, record, replay, and archive are separate decisions
          </h2>
          <p className="text-gray-600 dark:text-slate-400 text-base sm:text-lg">
            A live event doesn&apos;t automatically become a recording, a replay, a download, a clip, or a long-term archive. Each is its own permission, retention state, and owner.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full">
          {rows.map((row, idx) => {
            const IconComponent = row.icon;
            return (
              <div 
                key={idx}
                className="p-4 sm:p-5 bg-slate-50 dark:bg-zinc-950 rounded-xl border border-slate-200 dark:border-gray-850 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-50 dark:bg-purple-950/30 rounded-lg flex justify-center items-center text-[#7C3AED] dark:text-purple-400 flex-shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-zinc-905 dark:text-white text-sm sm:text-base font-bold font-sans">
                      {row.title}
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mt-1">
                      {row.desc}
                    </p>
                  </div>
                </div>

                <span className={`px-3 py-1 text-xs font-bold rounded-full border self-start sm:self-center ${row.badgeStyle}`}>
                  {row.badge}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

