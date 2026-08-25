import React from 'react';

const rights = [
  'Access / Know',
  'Delete / Erase',
  'Correct',
  'Portability',
  'Restrict',
  'Object',
  'Withdraw consent',
  'Authorized agent',
];

export function PrivacyRightsSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 bg-slate-50 border-b border-zinc-200 flex flex-col justify-start items-start gap-10">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
            YOUR PRIVACY RIGHTS
          </span>
        </div>
        <h2 className="text-neutral-700 text-3xl font-bold">
          Submit or track a privacy request.
        </h2>
      </div>

      {/* Main Banner Box */}
      <div className="w-full max-w-[1216px] mx-auto p-8 lg:p-10 bg-gradient-to-r from-teal-300/10 to-blue-400/5 rounded-2xl border border-teal-300/30 flex flex-col gap-8 shadow-xs">
        <p className="max-w-[640px] text-gray-500 text-sm font-normal leading-6">
          Depending on where you live, you may have rights over your personal data. You may submit a request even if you are unsure which right or law applies.
        </p>

        {/* 8 Right Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rights.map((right, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-lg border border-zinc-200 flex items-center justify-start cursor-pointer hover:border-zinc-300 transition-colors shadow-2xs"
            >
              <span className="text-neutral-700 text-xs font-semibold">{right}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
