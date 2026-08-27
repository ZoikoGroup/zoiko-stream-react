import React from 'react';

const steps = [
  {
    num: '1. Authorize / Create',
    desc: 'Request an asset resource or upload authorization.',
    actor: 'You: authenticate',
    actorCls: 'bg-indigo-50 text-blue-500',
  },
  {
    num: '2. Transfer',
    desc: 'Move source media using the supported ingest path.',
    actor: 'You: transfer',
    actorCls: 'bg-indigo-50 text-blue-500',
  },
  {
    num: '3. Process',
    desc: 'Platform validates and encodes the source.',
    actor: 'Platform: encode',
    actorCls: 'bg-emerald-50 text-teal-600',
  },
  {
    num: '4. Ready',
    desc: 'Platform exposes an explicit readiness signal.',
    actor: 'Platform: signal',
    actorCls: 'bg-emerald-50 text-teal-600',
  },
  {
    num: '5. Deliver',
    desc: 'Hand the playback output to your application.',
    actor: 'You: play',
    actorCls: 'bg-indigo-50 text-blue-500',
  },
  {
    num: '6. Manage',
    desc: 'Update, configure, or retire the asset over time.',
    actor: 'You: manage',
    actorCls: 'bg-indigo-50 text-blue-500',
  },
];

export function FullLifecycleSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-xs font-mono font-bold uppercase tracking-wide">
              THE FULL LIFECYCLE
            </span>
          </div>

          <h2 className="text-zinc-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            From source file to playback, without hidden lifecycle steps.
          </h2>

          <p className="text-gray-500 text-base lg:text-lg font-normal leading-7 max-w-[800px]">
            A video-on-demand API workflow lets your application create or authorize an asset, transfer source media, and observe asynchronous processing until the platform signals it&apos;s ready — then hand a governed playback output to your player without exposing upload credentials.
          </p>
        </div>

        {/* 6 Flow Steps Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {steps.map((st, idx) => (
            <React.Fragment key={idx}>
              <div className="p-5 bg-white rounded-xl border border-gray-200 flex flex-col justify-between h-44 shadow-2xs">
                <div className="flex flex-col gap-2">
                  <h3 className="text-zinc-900 text-sm font-bold">{st.num}</h3>
                  <p className="text-gray-500 text-xs font-normal leading-4">{st.desc}</p>
                </div>

                <div className={`px-2.5 py-1 rounded-full w-fit ${st.actorCls}`}>
                  <span className="text-[10px] font-mono font-bold">{st.actor}</span>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
