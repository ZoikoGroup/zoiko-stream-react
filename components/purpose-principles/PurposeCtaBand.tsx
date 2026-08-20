'use client';

import Link from 'next/link';

export default function PurposeCtaBand() {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,_rgba(45,212,191,0.2),_transparent_55%)]" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-16 text-center sm:px-10 lg:py-24">
        <h2 className="text-2xl font-bold leading-tight text-slate-100 sm:text-4xl">
          Build video with a platform designed to earn trust.
        </h2>

        <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">
          Start building with ZoikoStream, explore Live Events, or talk with our
          team about the experience you need to deliver.
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row sm:flex-wrap">
          <Link
            href="/start-building"
            className="inline-flex w-full items-center justify-center rounded-[10px] bg-gradient-to-r from-teal-400 to-blue-500 px-8 py-4 text-base font-semibold text-slate-950 transition-opacity hover:opacity-90 sm:w-auto"
          >
            Start building
          </Link>

          <Link
            href="/talk-to-an-expert"
            className="inline-flex w-full items-center justify-center rounded-[10px] border border-white px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white hover:text-slate-950 sm:w-auto"
          >
            Talk to an expert
          </Link>
        </div>
      </div>
    </section>
  );
}
