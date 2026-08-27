import React from 'react';

const checklistItems = [
  'Environment / project selected (test vs. live)',
  'Authentication method configured on your server',
  'Required write permission/scope granted',
  'API version pinned in your integration',
  'Allowed origins configured, if your ingest path requires CORS',
  'Developer access state confirmed as Available',
];

export function BeforeYouCreateAnythingSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-xs font-mono font-bold uppercase tracking-wide">
              BEFORE YOU CREATE ANYTHING
            </span>
          </div>

          <h2 className="text-zinc-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Set access once. Keep server credentials off the client.
          </h2>

          <p className="text-gray-500 text-base lg:text-lg font-normal leading-7">
            Your application server holds the API credential. Browser and mobile clients receive only the upload authorization artifact explicitly designed for client use, if supported.
          </p>
        </div>

        {/* 3 Architecture Boxes Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Your Server */}
          <div className="p-6 bg-indigo-50/80 rounded-2xl border border-indigo-200 flex flex-col gap-4">
            <span className="text-zinc-900 text-xs font-bold font-mono uppercase tracking-wide">
              Your server
            </span>
            <div className="flex flex-col gap-2 text-xs text-gray-600">
              <p>• Holds the long-lived API credential</p>
              <p>• Creates the asset / upload authorization</p>
              <p>• Never ships the API key to a client</p>
            </div>
          </div>

          {/* Client */}
          <div className="p-6 bg-fuchsia-100/60 rounded-2xl border border-pink-200 flex flex-col gap-4">
            <span className="text-zinc-900 text-xs font-bold font-mono uppercase tracking-wide">
              Client (browser / mobile)
            </span>
            <div className="flex flex-col gap-2 text-xs text-gray-600">
              <p>• Receives only a scoped upload authorization</p>
              <p>• Transfers source media directly, if supported</p>
              <p>• Never sees the server API credential</p>
            </div>
          </div>

          {/* ZoikoStream */}
          <div className="p-6 bg-emerald-50/80 rounded-2xl border border-green-200 flex flex-col gap-4">
            <span className="text-zinc-900 text-xs font-bold font-mono uppercase tracking-wide">
              ZoikoStream
            </span>
            <div className="flex flex-col gap-2 text-xs text-gray-600">
              <p>• Validates the authorization</p>
              <p>• Accepts and processes the source</p>
              <p>• Returns status and playback handoff</p>
            </div>
          </div>
        </div>

        {/* Checklist Rows */}
        <div className="w-full max-w-[800px] flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200">
          {checklistItems.map((item, idx) => (
            <div key={idx} className="py-3 flex items-center gap-3">
              <div className="w-4 h-4 bg-white rounded border border-gray-400 flex items-center justify-center flex-shrink-0">
              </div>
              <span className="text-zinc-900 text-sm font-normal">{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="px-6 py-3 bg-zinc-100 rounded-lg border border-gray-800 flex items-center justify-center cursor-pointer">
            <span className="text-zinc-900 text-sm font-semibold">Open Authentication</span>
          </div>
          <div className="px-6 py-3 bg-zinc-100 rounded-lg border border-gray-800 flex items-center justify-center cursor-pointer">
            <span className="text-zinc-900 text-sm font-semibold">Developer access</span>
          </div>
        </div>
      </div>
    </section>
  );
}
