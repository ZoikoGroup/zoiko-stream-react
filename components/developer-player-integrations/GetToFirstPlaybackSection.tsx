import React from 'react';
import Image from 'next/image';

const steps = [
  {
    num: '01',
    title: 'Resolve playback source',
    desc: 'Evaluate server-side entitlement before initializing playback vectors.',
    active: false,
  },
  {
    num: '02',
    title: 'Render player container',
    desc: 'Build DOM nodes with explicit container bounds and fallback surfaces.',
    active: false,
  },
  {
    num: '03',
    title: 'Initialize and attach source',
    desc: 'Inject secure token-gated source descriptors into approved platform runtimes.',
    active: true,
  },
  {
    num: '04',
    title: 'Await ready state',
    desc: 'Verify initial playlist chunks are loaded and video dimensions are resolved.',
    active: false,
  },
  {
    num: '05',
    title: 'Request playback',
    desc: 'Dispatch playback execution on explicit user intent or qualified autoplay policies.',
    active: false,
  },
  {
    num: '06',
    title: 'Verify and handle errors',
    desc: 'Monitor runtime quality bounds and fallback cleanly during network collapse.',
    active: false,
  },
];

const htmlSnippet = `<video id="live-player" controls autoplay muted>
  <source src="https://edge.zoiko.com/.../index.m3u8" type="application/x-mpegURL">
</video>

<script>
  const video = document.getElementById('live-player');
  video.addEventListener('canplay', () => {
    console.log('ZoikoStream player state: READY');
  });
</script>`;

export function GetToFirstPlaybackSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-player-integration/bg (10).png"
          alt="Get To First Playback Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Get to first playback without skipping production prerequisites.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Follow this deterministic sequence of staging playback to avoid client-side race conditions, memory leaks, and broken error boundaries.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: 6 Steps */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-xl border flex items-center gap-5 shadow-md ${
                  st.active
                    ? 'bg-gray-800 border-teal-400'
                    : 'bg-gray-800 border-gray-800'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                    st.active ? 'bg-teal-400 text-slate-950 font-bold' : 'bg-gray-800 text-white font-bold'
                  }`}
                >
                  <span className="text-xs">{st.num}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3
                    className={`text-base font-bold ${
                      st.active ? 'text-teal-400' : 'text-white'
                    }`}
                  >
                    {st.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-4">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Code Box & Production Preview */}
          <div className="lg:col-span-5 p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-2xl backdrop-blur-md">
            <div className="flex justify-between items-center">
              <span className="text-teal-400 text-xs font-bold uppercase tracking-wide">
                CONCEPTUAL CODE
              </span>
              <span className="px-2 py-0.5 bg-gray-800 rounded text-slate-400 text-[10px] font-bold">
                HTML5 NATIVE
              </span>
            </div>

            <div className="p-5 bg-gray-800 rounded-xl text-xs text-slate-400 leading-relaxed overflow-x-auto">
              <pre className="whitespace-pre-wrap">{htmlSnippet}</pre>
            </div>

            <div className="w-full h-px bg-gray-800" />

            <div className="flex flex-col gap-3">
              <h3 className="text-white text-base font-bold">Production Preview</h3>
              <div className="w-full h-40 relative rounded-lg overflow-hidden bg-slate-900">
                <Image
                  src="/images/developer-player-integration/Rectangle (10).png"
                  alt="Production Preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
