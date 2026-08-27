import React from 'react';
import Image from 'next/image';

const recordingLifecycle = [
  { state: 'Not Configured', desc: 'Recorders are completely disabled', status: 'Inactive', active: false },
  { state: 'Requested', desc: 'Resource allocation handshake initialized', status: 'Inactive', active: false },
  { state: 'Active', desc: 'Live media chunks are writing to cold storage', status: 'Active', active: true },
  { state: 'Complete', desc: 'Durable replay manifest generated', status: 'Inactive', active: false },
];

export function LiveStreamToRecordingSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/90 border-t border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/quickstart/bg (23).png"
          alt="Live Stream To Recording Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            A Live Stream Does Not Automatically Become a Recording
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            By design, live streams are volatile edge distributions. Capturing and preserving video assets requires configuring explicit cloud recorders during stream resource allocation.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Card: Recording State Lifecycle */}
          <div className="p-8 bg-zinc-900/90 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-2">
              <h3 className="text-white text-base font-bold">RECORDING STATE LIFECYCLE</h3>
            </div>

            <div className="flex flex-col gap-3">
              {recordingLifecycle.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-lg border flex justify-between items-center transition-all ${
                    item.active
                      ? 'bg-slate-800 border-teal-400'
                      : 'bg-gray-950/50 border-gray-800'
                  }`}
                >
                  <div className="flex flex-col gap-0.5 max-w-[340px]">
                    <span className="text-white text-xs font-bold">{item.state}</span>
                    <span className="text-slate-400 text-xs font-normal">{item.desc}</span>
                  </div>
                  <div className="px-2.5 py-1 bg-amber-500/10 rounded-full flex items-center gap-1.5 border border-amber-500/20">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    <span className="text-amber-500 text-xs font-bold uppercase">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Asset Identity Provenance */}
          <div className="flex flex-col gap-8">
            <div className="p-6 bg-zinc-900/90 rounded-xl border border-gray-800 flex flex-col gap-4 shadow-xl backdrop-blur-md">
              <span className="text-teal-400 text-sm font-bold tracking-wide uppercase">
                ASSET IDENTITY PROVENANCE
              </span>

              <div className="flex flex-col gap-3">
                <div className="p-3 bg-gray-950 rounded-md flex flex-col gap-1 border border-gray-800">
                  <div className="flex items-center gap-2 text-blue-500 text-xs font-bold">
                    <span>LIVE_STREAM_ID</span>
                  </div>
                  <span className="text-white text-xs font-mono">st_84299104_u91</span>
                </div>

                <div className="p-3 bg-gray-950 rounded-md flex flex-col gap-1 border border-gray-800">
                  <div className="flex items-center gap-2 text-blue-500 text-xs font-bold">
                    <span>RECORDING_ASSET_ID</span>
                  </div>
                  <span className="text-white text-xs font-mono">as_77194012_x42</span>
                </div>

                <div className="p-3 bg-gray-950 rounded-md flex flex-col gap-1 border border-gray-800">
                  <div className="flex items-center gap-2 text-blue-500 text-xs font-bold">
                    <span>REPLAY_MANIFEST_URL</span>
                  </div>
                  <span className="text-white text-xs font-mono">/replay/as_77194012_x42/manifest.m3u8</span>
                </div>
              </div>
            </div>

            <div className="p-5 bg-slate-800/25 rounded-xl border border-gray-800 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-white text-xs font-bold">Access Inheritance Rule</span>
              </div>
              <p className="text-slate-400 text-xs font-normal leading-5">
                Durable recordings generated from protected live feeds inherit identical SAML SSO audience restrictions. Caption and translated language tracks are preserved as sibling assets within the same metadata boundaries.
              </p>
            </div>

            <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer shadow-md w-fit">
              <span className="text-gray-900 text-base font-bold">Read Recording &amp; Assets</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
