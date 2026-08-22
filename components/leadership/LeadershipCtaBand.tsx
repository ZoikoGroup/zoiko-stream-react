'use client';

import Link from 'next/link';

export default function LeadershipCtaBand() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A0D13]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,_rgba(45,212,191,0.2),_transparent_55%)]" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-16 text-center sm:px-10 lg:py-24">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
          Work with the team building ZoikoStream.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-6 text-neutral-300">
          Talk with our team about your video or Live Events requirements, explore
          opportunities to build with us, or reach the right media contact.
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row sm:flex-wrap">
          <Link
            href="/talk-to-an-expert"
            className="inline-flex w-full items-center justify-center rounded-[10px] bg-gradient-to-r from-teal-300 to-blue-400 px-6 py-3.5 text-base font-semibold text-gray-800 transition-opacity hover:opacity-90 sm:w-auto"
          >
            Talk to an expert
          </Link>

          <span className="inline-flex w-full items-center justify-center rounded-[10px] border border-white/30 px-6 py-3.5 text-base font-semibold text-white sm:w-auto">
            Explore careers
          </span>

          <span className="text-base font-semibold leading-6 text-blue-300">
            Press &amp; media →
          </span>
        </div>
      </div>
    </section>
  );
}
