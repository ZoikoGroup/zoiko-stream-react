import React from 'react';
import Link from 'next/link';

const needsTable = [
  { need: 'Launch or migrate a video service', path: 'Systems integration; app development; CMS/workflow; migration; managed services.', link: 'Find implementation expertise →' },
  { need: 'Integrate my existing stack', path: 'Identity; CMS; player; analytics; monetization; commerce; APIs/tooling.', link: 'Find technology partners →' },
  { need: 'Produce a high-stakes live event', path: 'Live production; contribution; encoding; accessibility; event operations; redundancy.', link: 'Find Live Events partners →' },
  { need: 'Improve accessibility', path: 'Captions; transcripts; interpretation; accessible player/workflow expertise.', link: 'Find accessibility capabilities →' },
  { need: 'Monetize or commercialize video', path: 'Monetization; ad tech; commerce; subscriptions; entitlements.', link: 'Find monetization capabilities →' },
  { need: 'Operate at scale', path: 'Managed services; observability; delivery; security/content protection; operational support.', link: 'Find operational expertise →' },
];

export default function FindByNeedSection() {
  return (
    <section className="w-full bg-white py-20 border-b border-gray-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-400 rounded-full" />
            <span className="text-blue-400 text-xs font-bold   uppercase tracking-wider">
              FIND BY NEED
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold   text-gray-800 leading-tight">
            What are you trying to do?
          </h2>
        </div>

        {/* Capability Table */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 bg-slate-50 border-b border-zinc-200 grid grid-cols-12 gap-3 text-gray-400 text-xs font-bold   uppercase tracking-wider">
            <span className="col-span-4">NEED</span>
            <span className="col-span-5">CAPABILITY PATH</span>
            <span className="col-span-3 text-right font-bold">ACTION</span>
          </div>

          <div className="flex flex-col divide-y divide-zinc-200">
            {needsTable.map((row, idx) => (
              <div key={idx} className="p-5 grid grid-cols-12 gap-3 items-center text-sm  ">
                <span className="col-span-4 text-gray-800 font-semibold">{row.need}</span>
                <span className="col-span-5 text-gray-500 font-normal">{row.path}</span>
                <Link
                  href="/talk-to-an-expert"
                  className="col-span-3 text-right text-blue-400 font-bold hover:underline"
                >
                  {row.link}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
