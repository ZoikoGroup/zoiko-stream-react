import React from 'react';

const errorRows = [
  {
    code: '4xx',
    desc: 'Client error — fix the request before retrying. Not retryable as-is.',
  },
  {
    code: '429',
    desc: 'Rate limited — back off and retry using the documented interval.',
  },
  {
    code: '5xx',
    desc: 'Platform error — safe to retry with exponential backoff.',
  },
  {
    code: 'Timeout',
    desc: 'Unknown outcome — look up the resource by ID before retrying to avoid duplicates.',
  },
];

export function FailSafelySection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-xs font-mono font-bold uppercase tracking-wide">
              FAIL SAFELY
            </span>
          </div>

          <h2 className="text-zinc-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Recover safely from request, transfer, and processing failures.
          </h2>

          <p className="text-gray-500 text-base lg:text-lg font-normal leading-7 max-w-[760px]">
            Every error carries an HTTP status, a stable error code, a developer message, and a request ID you can hand to support.
          </p>
        </div>

        {/* Error Code Box */}
        <div className="w-full bg-neutral-900 rounded-2xl border border-gray-800 p-6 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto shadow-xl">
          <pre className="whitespace-pre-wrap">{`→ 422 Unprocessable Entity
{
  "code": "unsupported_source_format",
  "message": "The provided source could not be decoded.",
  "field": "source",
  "request_id": "req_7fQm...",
  "retryable": false
}`}</pre>
        </div>

        {/* Status Code Table */}
        <div className="w-full flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200">
          {errorRows.map((r, idx) => (
            <div key={idx} className="py-3.5 flex items-center gap-8 text-xs">
              <span className="w-16 font-mono font-bold text-teal-600">{r.code}</span>
              <span className="text-slate-600">{r.desc}</span>
            </div>
          ))}
        </div>

        <div className="px-6 py-3 bg-zinc-100 rounded-lg border border-gray-800 cursor-pointer hover:bg-zinc-200 transition-colors w-fit">
          <span className="text-zinc-900 text-sm font-semibold">Open Error handling →</span>
        </div>
      </div>
    </section>
  );
}
