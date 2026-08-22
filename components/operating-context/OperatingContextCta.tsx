'use client';

import Link from 'next/link';

export default function OperatingContextCta() {
  return (
    <section className="w-full bg-gradient-to-br from-[#0b2b2b] via-[#0d1220] to-[#241030]">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center sm:px-10 lg:px-8 lg:py-24">
        <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
          Ready to go further?
        </span>

        <h2 className="mt-6 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl lg:leading-[1.3]">
          Build, evaluate, or plan with the right ZoikoStream team.
        </h2>

        <p className="mt-6 max-w-xl text-base leading-7 text-gray-300">
          Now that the operating context is clear, choose the path that matches what
          you need next.
        </p>

        <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
          <Link
            href="/talk-to-an-expert"
            className="inline-flex items-center justify-center rounded-[10px] bg-gradient-to-r from-teal-300 to-blue-400 px-8 py-4 text-sm font-semibold text-gray-800 transition-opacity hover:opacity-90"
          >
            Talk to an expert
          </Link>

          <Link
            href="/start-building"
            className="inline-flex items-center justify-center rounded-[10px] border border-white/40 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Start building
          </Link>
        </div>
      </div>
    </section>
  );
}
