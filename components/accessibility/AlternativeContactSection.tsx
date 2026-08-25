import React from 'react';

export function AlternativeContactSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 bg-slate-50 border-b border-zinc-200 flex flex-col justify-start items-start gap-10">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
            IS THIS FORM ITSELF A BARRIER?
          </span>
        </div>
        <h2 className="text-neutral-700 text-3xl font-bold">
          Use an alternative contact method.
        </h2>
      </div>

      {/* Main Banner */}
      <div className="w-full max-w-[1216px] mx-auto p-8 lg:p-10 bg-gradient-to-r from-teal-300/10 to-blue-400/5 rounded-2xl border border-teal-300/30 flex flex-col gap-6 shadow-xs">
        <h3 className="text-neutral-700 text-lg font-bold">
          If this form is not accessible to you
        </h3>

        <p className="text-gray-500 text-sm font-normal leading-6">
          Use our verified alternative accessibility contact method:{' '}
          <span className="font-bold text-gray-700">accessibility@zoikostream.com</span>. We will never tell you that the form is the only way to reach us.
        </p>

        <div className="px-6 py-3 rounded-lg border border-neutral-700 cursor-pointer hover:bg-white transition-colors w-fit">
          <span className="text-neutral-700 text-base font-semibold">
            Email accessibility@zoikostream.com
          </span>
        </div>
      </div>
    </section>
  );
}
