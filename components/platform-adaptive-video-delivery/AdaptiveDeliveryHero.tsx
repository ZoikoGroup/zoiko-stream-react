'use client';

import Link from 'next/link';

export default function AdaptiveDeliveryHero() {
  return (
    <section className="relative isolate w-full border-b border-gray-800 bg-gray-950">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/platform-adaptive-video-delivery/hero-network.png"
          alt=""
          aria-hidden="true"
          className="size-full object-cover brightness-150"
        />
        <div className="absolute inset-0 bg-gray-950/25" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28 xl:px-28">
        <div className="flex max-w-4xl flex-col items-start gap-8">
          <span className="rounded-[100px] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-teal-400 outline-1 -outline-offset-1 outline-teal-400">
            Adaptive Video
          </span>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.2]">
            Deliver video that can respond to changing playback conditions
          </h1>

          <p className="text-base leading-7 text-slate-400 lg:text-lg">
            Adaptive Video Delivery explains how ZoikoStream can qualify and respond to
            changing delivery conditions across prepared media, playback environments,
            networks, policy, and service state. Exact methods, codecs, protocols,
            devices, thresholds, latency, quality outcomes, and availability appear only
            when current technical evidence supports them.
          </p>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-6">
            <span className="inline-flex items-center justify-center rounded-lg bg-gradient-to-b from-teal-400 to-blue-500 px-7 py-3.5 text-base font-bold text-gray-950">
              Explore delivery requirements
            </span>

            <Link
              href="/talk-to-an-expert"
              className="inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-base font-bold text-white outline-1 -outline-offset-1 outline-slate-400 transition-colors hover:bg-white/10"
            >
              Talk to an expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
