import React from 'react';

export function HowToReportBarSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-16 bg-white border-b border-zinc-200 flex justify-start items-center">
      <div className="w-full max-w-[1216px] mx-auto">
        <div className="max-w-[860px] pl-6 border-l-2 border-teal-400 flex flex-col gap-4">
          <h2 className="text-neutral-700 text-2xl lg:text-3xl font-bold leading-snug">
            How do I report an accessibility barrier or request help from ZoikoStream?
          </h2>
          <p className="text-gray-500 text-base font-normal leading-6">
            Use the form on this page to report a barrier you encountered or to request accessibility help. Choose the option closest to your need, describe what happened or what you need in your own words, and submit with or without contact information. Assistive-technology details are optional, and no disability or diagnosis disclosure is required. Existing customers with a time-sensitive production issue should use Support instead.
          </p>
        </div>
      </div>
    </section>
  );
}
