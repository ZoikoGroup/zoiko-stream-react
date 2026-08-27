import React from 'react';

const surfaces = [
  { surface: 'SDK', purpose: 'Idiomatic language wrapper', role: 'Server / client', link: 'SDKs →' },
  { surface: 'Live streaming API', purpose: 'Create and manage live streams', role: 'Server', link: 'Live streaming API →' },
  { surface: 'Video-on-demand API', purpose: 'Upload, encode, deliver assets', role: 'Server', link: 'VOD API →' },
  { surface: 'Media protocols', purpose: 'Ingest/transport-level contribution', role: 'Media plane', link: 'Media protocols →' },
  { surface: 'Webhooks / events', purpose: 'React to asynchronous state changes', role: 'Server', link: 'Webhooks and events →' },
  { surface: 'Player', purpose: 'Render ready media to a viewer', role: 'Client', link: 'Player integration →' },
];

export function PickIntegrationSurfaceSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-16 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-12 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-10">
        {/* Header Block */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-blue-600 text-xs font-mono font-semibold uppercase tracking-wider">
              PICK THE RIGHT INTEGRATION SURFACE
            </span>
          </div>
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight">
            Choose the surface that matches the job.
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-[850px]">
            High-level SDKs, programmable APIs, media protocols, and player surfaces each play a different role — this table routes to the exact specialist reference.
          </p>
        </div>

        {/* Integration Surface Table */}
        <div className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-zinc-900 text-slate-100 p-4 text-xs font-mono font-semibold uppercase border-b border-gray-800">
            <div className="col-span-3">Surface</div>
            <div className="col-span-4">Purpose</div>
            <div className="col-span-2">Role</div>
            <div className="col-span-3">Reference</div>
          </div>

          {/* Table Body Rows */}
          <div className="divide-y divide-gray-200">
            {surfaces.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 text-xs items-center gap-2 hover:bg-slate-50 transition-colors"
              >
                <div className="col-span-3 text-blue-600 font-mono font-bold">{item.surface}</div>
                <div className="col-span-4 text-gray-600 leading-5">{item.purpose}</div>
                <div className="col-span-2 text-gray-500 font-mono">{item.role}</div>
                <div className="col-span-3 text-slate-700 font-bold hover:text-blue-600 cursor-pointer">
                  {item.link}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
