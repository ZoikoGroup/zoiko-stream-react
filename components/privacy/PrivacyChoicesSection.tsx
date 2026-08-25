import React from 'react';

export function PrivacyChoicesSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 bg-white border-b border-zinc-200 flex flex-col justify-start items-start gap-10">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
            YOUR PRIVACY CHOICES
          </span>
        </div>
        <h2 className="text-neutral-700 text-3xl font-bold">
          Manage the choices available to you.
        </h2>
      </div>

      <div className="w-full max-w-[1216px] mx-auto border-t border-zinc-200 divide-y divide-zinc-200">
        {/* Row 1 */}
        <div className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-neutral-700 text-base font-bold">Cookie preferences</h3>
            <p className="text-gray-400 text-xs font-normal">
              Manage category-level cookie and tracking-technology choices.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-3.5 py-1.5 bg-slate-100 rounded-full">
              <span className="text-gray-400 text-xs font-bold">Not yet reviewed</span>
            </div>
            <div className="px-6 py-3 rounded-lg border border-neutral-700 cursor-pointer hover:bg-slate-50 transition-colors">
              <span className="text-neutral-700 text-base font-semibold">Manage</span>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-neutral-700 text-base font-bold">Marketing communications</h3>
            <p className="text-gray-400 text-xs font-normal">
              Manage subscription state per communication class.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-3.5 py-1.5 bg-emerald-50 rounded-full">
              <span className="text-green-500 text-xs font-bold">Subscribed</span>
            </div>
            <div className="px-6 py-3 rounded-lg border border-neutral-700 cursor-pointer hover:bg-slate-50 transition-colors">
              <span className="text-neutral-700 text-base font-semibold">Manage</span>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-neutral-700 text-base font-bold">Global Privacy Control</h3>
            <p className="text-gray-400 text-xs font-normal">
              Detected browser-level privacy preference signal.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 bg-slate-100 rounded-full max-w-xs sm:max-w-md">
              <span className="text-gray-400 text-xs font-bold truncate">
                No Global Privacy Control signal detected in this browser.
              </span>
            </div>
            <span className="text-blue-400 text-sm font-semibold cursor-pointer">
              Learn more →
            </span>
          </div>
        </div>

        {/* Row 4 */}
        <div className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-neutral-700 text-base font-bold">
              Sale/share or targeted advertising choice
            </h3>
            <p className="text-gray-400 text-xs font-normal">
              Exposed only where legally or product relevant.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-3.5 py-1.5 bg-slate-100 rounded-full">
              <span className="text-gray-400 text-xs font-bold">Not applicable in your region</span>
            </div>
            <div className="px-6 py-3 rounded-lg border border-neutral-700 cursor-pointer hover:bg-slate-50 transition-colors">
              <span className="text-neutral-700 text-base font-semibold">Manage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
