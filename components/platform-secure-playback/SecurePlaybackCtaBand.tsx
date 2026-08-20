'use client';

import Link from 'next/link';

export default function SecurePlaybackCtaBand() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-950">
      <img
        src="/images/platform-secure-playback/cta-band-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="pointer-events-none absolute inset-0 bg-gray-950/50" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-16 text-center sm:px-10 lg:py-24">
        <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
          Ready to secure your playback experience?
        </h2>

        <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
          Connect with our team to explore how ZoikoStream Secure Playback fits your
          organization&apos;s media protection needs.
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row sm:flex-wrap">
          <Link
            href="/talk-to-an-expert"
            className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 px-7 py-3.5 text-base font-bold text-slate-950 transition-opacity hover:opacity-90 sm:w-auto"
          >
            Talk to an expert
          </Link>

          <Link
            href="/start-building"
            className="inline-flex w-full items-center justify-center rounded-lg border border-white/70 px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-white hover:text-slate-950 sm:w-auto"
          >
            Start building
          </Link>
        </div>
      </div>
    </section>
  );
}
