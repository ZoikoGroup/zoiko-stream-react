'use client';

import Link from 'next/link';

export default function SecurePlaybackHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-950">
      <img
        src="/images/platform-secure-playback/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="pointer-events-none absolute inset-0 bg-gray-950/35" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
        <span className="rounded-[100px] border border-teal-400 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-teal-400">
          Secure Playback
        </span>

        <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.25]">
          Authorize playback with explicit policy, context, and evidence
        </h1>

        <p className="max-w-4xl text-base leading-7 text-slate-400 sm:text-lg">
          Understand how every playback request is evaluated against approved media
          policy and current context before playback is allowed, limited, denied,
          expired, revoked, or unavailable.
        </p>

        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          <a
            href="#playback-policy-model"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-b from-teal-400 to-blue-500 px-7 py-3.5 text-base font-bold text-slate-950 transition-opacity hover:opacity-90"
          >
            Explore Playback Model
          </a>
          <Link
            href="/talk-to-an-expert"
            className="inline-flex items-center justify-center rounded-lg border border-slate-400 px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-white hover:text-slate-950"
          >
            Talk to an expert
          </Link>
        </div>
      </div>
    </section>
  );
}
