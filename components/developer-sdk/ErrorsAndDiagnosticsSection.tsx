import React from 'react';
import Image from 'next/image';

const errCodeSnippet = `try {
  const stream = await client.liveStreams.start("stream_102");
} catch (error) {
  if (error instanceof ZoikoStreamError) {
    console.error(\`API Failure [\${error.status}]: \${error.message}\`);
    console.error(\`Diagnostic ID: \${error.requestId}\`);
    console.error(\`Suggested Action: \${error.suggestedAction}\`);
  }
}`;

export function ErrorsAndDiagnosticsSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-sdk/bg (5).png"
          alt="Errors and Diagnostics Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/90 to-gray-950/95" />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Errors and diagnostics — preserve API truth through SDK abstractions.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            SDK exceptions map directly to clear REST status responses while maintaining local diagnostic stacks for rapid debugging.
          </p>
        </div>

        {/* 2 Column Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Code Snippet Box */}
          <div className="lg:col-span-7 bg-zinc-900 rounded-xl border border-gray-800 flex flex-col overflow-hidden shadow-2xl">
            <div className="px-4 py-3 bg-slate-900 border-b border-gray-800">
              <span className="text-white text-xs font-mono font-bold">error-handling-example.js</span>
            </div>
            <div className="p-6 bg-gray-950 font-mono text-xs text-white leading-relaxed overflow-x-auto">
              <pre className="whitespace-pre-wrap">{errCodeSnippet}</pre>
            </div>
          </div>

          {/* Right Guidance Card */}
          <div className="lg:col-span-5 p-8 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col gap-6 shadow-xl backdrop-blur-md">
            <h3 className="text-white text-lg font-bold font-mono">Recovery Guidance &amp; SLAs</h3>
            <div className="flex flex-col divide-y divide-gray-800">
              <div className="py-3 flex flex-col gap-1">
                <span className="text-teal-400 text-sm font-bold font-mono">VALIDATION_ERROR (400)</span>
                <p className="text-slate-400 text-xs leading-4">
                  Reject request locally prior to serialization. Correct schema parameters using client-side typings.
                </p>
              </div>

              <div className="py-3 flex flex-col gap-1">
                <span className="text-blue-500 text-sm font-bold font-mono">RATE_LIMIT_EXCEEDED (429)</span>
                <p className="text-slate-400 text-xs leading-4">
                  SDK handles automatic backoff according to Retry-After headers using active jitter algorithms.
                </p>
              </div>

              <div className="py-3 flex flex-col gap-1">
                <span className="text-white text-sm font-bold font-mono">SERVER_ERROR (5xx)</span>
                <p className="text-slate-400 text-xs leading-4">
                  Fallback paths route automatically to failover regions. Unresolved states trigger diagnostic tickets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
