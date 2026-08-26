import React from 'react';
import Image from 'next/image';

export function SignalEvidenceSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-zinc-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
            <span className="text-teal-400 text-xs font-bold font-mono uppercase tracking-wider">
              SIGNAL EVIDENCE
            </span>
          </div>

          <h2 className="text-neutral-700 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Confirm the platform is observing the media signals your workflow expects.
          </h2>
        </div>

        {/* 2 Signal Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col shadow-sm">
            <div className="w-full h-80 relative bg-slate-100 overflow-hidden">
              <Image
                src="/images/stream-monitoring/image (8).jpg"
                alt="Video audio presence"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-neutral-700 text-lg font-bold">
                Video &amp; audio presence/continuity
              </h3>
              <p className="text-gray-500 text-sm leading-6">
                Observed presence and continuity of expected tracks — no arbitrary quality bands, only source-governed signal states.
              </p>
              <div className="px-3 py-1 rounded-full border border-zinc-200 w-fit">
                <span className="text-gray-400 text-xs font-bold font-mono">
                  Definition pending source authority
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col shadow-sm">
            <div className="w-full h-80 relative bg-slate-100 overflow-hidden">
              <Image
                src="/images/stream-monitoring/image (9).jpg"
                alt="Timestamp sequence validity"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-neutral-700 text-lg font-bold">
                Timestamp &amp; sequence validity
              </h3>
              <p className="text-gray-500 text-sm leading-6">
                Whether observed timing and sequencing fall within expected characteristics for the workflow.
              </p>
              <div className="px-3 py-1 rounded-full border border-zinc-200 w-fit">
                <span className="text-gray-400 text-xs font-bold font-mono">
                  Definition pending source authority
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
