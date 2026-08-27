import React from 'react';

const troubleshootingSteps = [
  {
    num: 1,
    title: 'Request / auth / access',
    desc: 'Confirm you have monitoring access before assuming a stream fault.',
    link: 'Check access →',
  },
  {
    num: 2,
    title: 'Stream lifecycle / configuration',
    desc: 'Confirm the stream is in the expected lifecycle state.',
    link: 'View lifecycle →',
  },
  {
    num: 3,
    title: 'Source / ingest / media',
    desc: 'Inspect the source-to-ingest boundary and media signals.',
    link: 'Diagnose ingest →',
  },
  {
    num: 4,
    title: 'Processing / output',
    desc: 'Confirm output readiness where those stages are supported.',
    link: 'Check output →',
  },
  {
    num: 5,
    title: 'Alert / notification delivery',
    desc: 'Confirm the alert fired and reached its destination.',
    link: 'Review alerts →',
  },
  {
    num: 6,
    title: 'Rate limits',
    desc: 'Rule out throttling on your monitoring requests.',
    link: 'Rate limits →',
  },
  {
    num: 7,
    title: 'System status',
    desc: 'Check whether a platform-wide incident overlaps this window.',
    link: 'System status →',
  },
  {
    num: 8,
    title: 'Changelog',
    desc: 'Look for a recent change that correlates — not necessarily causes.',
    link: 'Changelog →',
  },
  {
    num: 9,
    title: 'Support',
    desc: 'Escalate with a redacted, secret-free support bundle.',
    link: 'Get Support →',
  },
];

export function EvidenceFirstSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-zinc-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
            <span className="text-teal-400 text-xs font-bold font-mono uppercase tracking-wider">
              EVIDENCE-FIRST
            </span>
          </div>

          <h2 className="text-neutral-700 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Troubleshoot from the nearest evidence outward.
          </h2>
        </div>

        {/* 9 Sequential Steps List */}
        <div className="w-full flex flex-col divide-y divide-zinc-200 border-t border-b border-zinc-200">
          {troubleshootingSteps.map((st) => (
            <div key={st.num} className="py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-500 text-xs font-bold font-mono">{st.num}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-neutral-700 text-sm font-bold">{st.title}</h3>
                  <p className="text-gray-400 text-xs">{st.desc}</p>
                </div>
              </div>

              <span className="text-blue-400 text-xs font-bold cursor-pointer hover:underline whitespace-nowrap">
                {st.link}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
