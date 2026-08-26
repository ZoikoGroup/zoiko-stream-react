import React from 'react';
import Image from 'next/image';

const limits = [
  {
    cat: 'Request rate',
    def: 'Per API reference',
    behavior: '429 with documented retry interval',
  },
  {
    cat: 'Concurrent uploads',
    def: 'Per plan/account',
    behavior: 'New uploads queued or rejected per contract',
  },
  {
    cat: 'File size / duration',
    def: 'Per API reference',
    behavior: 'Rejected at creation with a stable error code',
  },
  {
    cat: 'Formats / codecs',
    def: 'Per support matrix',
    behavior: 'Unsupported source rejected during validation',
  },
];

export function KnowBeforeYouScaleSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-xs font-mono font-bold uppercase tracking-wide">
              KNOW BEFORE YOU SCALE
            </span>
          </div>

          <h2 className="text-zinc-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Know the constraints before you move production traffic.
          </h2>

          <p className="text-gray-500 text-base lg:text-lg font-normal leading-7 max-w-[760px]">
            Only approved, documented limits are shown here — never a placeholder.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Table */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col shadow-sm">
            <div className="p-4 bg-slate-50 border-b border-gray-200 grid grid-cols-12 text-xs font-bold font-mono text-zinc-900">
              <div className="col-span-4">CATEGORY</div>
              <div className="col-span-3">DEFAULT</div>
              <div className="col-span-5">BEHAVIOR AT LIMIT</div>
            </div>

            <div className="divide-y divide-slate-100">
              {limits.map((l, idx) => (
                <div key={idx} className="p-4 grid grid-cols-12 text-xs items-center">
                  <div className="col-span-4 font-bold text-zinc-900">{l.cat}</div>
                  <div className="col-span-3 text-gray-500">{l.def}</div>
                  <div className="col-span-5 text-gray-500">{l.behavior}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Card */}
          <div className="lg:col-span-4 w-full h-56 relative rounded-2xl overflow-hidden bg-slate-900 shadow-md">
            <Image
              src="/images/developer-vod-api/image (2).png"
              alt="Limits Thumbnail"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 w-full pt-2">
          <div className="flex items-center gap-3">
            <div className="px-5 py-2.5 bg-zinc-100 rounded-lg border border-gray-800 cursor-pointer">
              <span className="text-zinc-900 text-sm font-semibold">Rate limits</span>
            </div>
            <div className="px-5 py-2.5 bg-zinc-100 rounded-lg border border-gray-800 cursor-pointer">
              <span className="text-zinc-900 text-sm font-semibold">System status</span>
            </div>
          </div>

          <span className="text-gray-500 text-sm font-normal">
            Migrating a large existing catalog?{' '}
            <span className="text-blue-500 font-semibold cursor-pointer hover:underline">
              Talk to an expert →
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
