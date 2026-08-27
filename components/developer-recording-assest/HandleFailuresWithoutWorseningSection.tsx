import React from 'react';
import Image from 'next/image';

const errors = [
  {
    title: 'Authentication Failure',
    code: '401 UNAUTHORIZED',
    desc: 'Inspect client API credentials or expired OAuth scope. Refresh token values.',
    action: 'RETRY_BLOCKED',
    actionCls: 'bg-red-500/10 text-red-500 border-red-500/30',
  },
  {
    title: 'Resource Not Found',
    code: '404 NOT_FOUND',
    desc: 'The requested asset ID has either expired, been deleted, or does not exist yet.',
    action: 'RETRY_BLOCKED',
    actionCls: 'bg-red-500/10 text-red-500 border-red-500/30',
  },
  {
    title: 'State Conflict',
    code: '409 CONFLICT',
    desc: 'Asset state does not permit the target operation (e.g., trying to purge an active stream).',
    action: 'RESOLVE_STATE',
    actionCls: 'bg-red-500/10 text-red-500 border-red-500/30',
  },
  {
    title: 'Rate Limit Exceeded',
    code: '429 TOO_MANY_REQUESTS',
    desc: 'Platform call limits reached. Back off request cycles using jittered exponential intervals.',
    action: 'BACKOFF_EXP',
    actionCls: 'bg-red-500/10 text-red-500 border-red-500/30',
  },
  {
    title: 'Gateway Timeout',
    code: '504 TIMEOUT',
    desc: 'Engine gateway timeout during ingestion checking. Pipeline heartbeat check recommended.',
    action: 'SAFE_TO_RETRY',
    actionCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
  },
  {
    title: 'Processing Failure',
    code: '500 PROCESS_ERROR',
    desc: 'Transcoding or index generation crashed. Trigger pipeline diagnostics or repair route.',
    action: 'DIAGNOSE_ROUTE',
    actionCls: 'bg-red-500/10 text-red-500 border-red-500/30',
  },
  {
    title: 'Bulk Partial Failure',
    code: '207 MULTI_STATUS',
    desc: 'Some targets resolved successfully, while others failed. Inspect nested error scopes.',
    action: 'RESOLVE_PARTIAL',
    actionCls: 'bg-red-500/10 text-red-500 border-red-500/30',
  },
  {
    title: 'Platform Incident',
    code: '503 UNAVAILABLE',
    desc: 'Underlying infrastructure outage. Fall back to secondary region path streams immediately.',
    action: 'FAILOVER_SEC',
    actionCls: 'bg-red-500/10 text-red-500 border-red-500/30',
  },
];

export function HandleFailuresWithoutWorseningSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Recording-assest/bg (14).png"
          alt="Handle Failures Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Handle failures without making them worse.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Understand failure logic profiles. Couples recovery actions with exact API error signatures to prevent duplicate destructive mutations.
          </p>
        </div>

        {/* 8 Error Profiles List */}
        <div className="w-full flex flex-col gap-3">
          {errors.map((err, idx) => (
            <div
              key={idx}
              className="p-5 bg-zinc-900/80 rounded-lg border border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-md backdrop-blur-md"
            >
              <div className="w-60 flex flex-col gap-1 shrink-0">
                <h3 className="text-white text-base font-bold">{err.title}</h3>
                <span className="text-red-500 text-xs font-mono">{err.code}</span>
              </div>

              <p className="text-slate-400 text-sm leading-5 flex-1">{err.desc}</p>

              <div className={`px-3 py-1.5 rounded-full border text-xs font-bold font-mono shrink-0 ${err.actionCls}`}>
                {err.action}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
