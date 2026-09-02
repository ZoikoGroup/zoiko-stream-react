import React from 'react';
import Image from 'next/image';
import { Copy } from 'lucide-react';
import section9Bg from '@/public/images/resource-developer-documentation/section-9bg.png';

const EXAMPLES = [
  {
    title: 'Create a live stream',
    status: 'VERIFIED',
    statusStyle: 'bg-emerald-100 text-emerald-800',
    lang: 'JAVASCRIPT',
    code: `const stream = await zoiko.streams.create({
  title: "Live Event 2026",
  latency_mode: "low",
  reconnect_window: 60
});`,
    source: 'SDK v4.2.1',
    tested: 'Last tested: Aug 2026',
  },
  {
    title: 'Query viewer analytics',
    status: 'VERIFIED',
    statusStyle: 'bg-emerald-100 text-emerald-800',
    lang: 'PYTHON',
    code: `response = zoiko.analytics.views.list(
  filters={"stream_id": stream_id},
  timeframe=["2026-01-01", "2026-08-31"]
)`,
    source: 'SDK v3.8.0',
    tested: 'Verified dependency chain',
  },
  {
    title: 'Subscribe to webhooks',
    status: 'ILLUSTRATIVE',
    statusStyle: 'bg-blue-100 text-blue-800',
    lang: 'CURL',
    code: `curl -X POST https://api.zoikostream.com/v1/webhooks \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{"events": ["stream.connected"]}'`,
    source: 'Illustrative example',
    tested: 'verify against current API reference',
  },
];

export default function ResourceDeveloperDocumentationExamplesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* Background */}
      {section9Bg && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <Image src={section9Bg} alt="Background" fill className="object-cover" />
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-3 max-w-4xl">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          Verified examples and SDK provenance
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Every code example carries its source, verification status, language, version scope, and dependency chain.
        </p>
      </div>

      {/* 3 Code Example Cards */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        {EXAMPLES.map((ex, idx) => (
          <div
            key={idx}
            className="p-6 bg-gray-900 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-between items-start gap-5 shadow-lg"
          >
            <div className="w-full flex flex-col gap-4">
              <div className="w-full flex justify-between items-center gap-2">
                <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                  {ex.title}
                </h3>
                <span className={`px-2 py-0.5 rounded-sm text-[9px] font-bold font-['IBM_Plex_Mono'] ${ex.statusStyle}`}>
                  {ex.status}
                </span>
              </div>

              {/* Code Box */}
              <div className="w-full p-4 bg-gray-950 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-2">
                <div className="w-full flex justify-between items-center">
                  <span className="text-teal-400 text-xs font-bold font-['IBM_Plex_Mono']">
                    {ex.lang}
                  </span>
                  <Copy className="size-3.5 text-slate-400 cursor-pointer hover:text-white transition-colors" />
                </div>
                <pre className="text-slate-200 text-xs font-normal font-['IBM_Plex_Mono'] leading-relaxed overflow-x-auto">
                  {ex.code}
                </pre>
              </div>
            </div>

            <div className="w-full flex flex-col gap-1 text-xs font-['Space_Grotesk']">
              <div>
                <span className="text-slate-400 font-normal">Source: </span>
                <span className="text-teal-400 font-bold">{ex.source}</span>
              </div>
              <span className="text-slate-400 font-normal">{ex.tested}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
