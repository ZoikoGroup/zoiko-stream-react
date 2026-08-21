'use client';

import Link from 'next/link';

export default function GlobalDistributionHero() {
  return (
    <section className="relative isolate w-full border-b border-gray-800 bg-slate-900">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/platform-global-distribution/hero-bg.png"
          alt=""
          aria-hidden="true"
          className="size-full object-cover brightness-150"
        />
        <div className="absolute inset-0 bg-slate-900/25" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-28 xl:px-28">
        <div className="flex flex-col items-start gap-8">
          <span className="rounded-[100px] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-teal-400 outline-1 -outline-offset-1 outline-teal-400">
            Global Distribution
          </span>

          <h1 className="text-3xl font-bold leading-tight text-white [text-shadow:0px_2px_10px_rgb(0_0_0/0.40)] sm:text-4xl lg:text-5xl lg:leading-[1.2]">
            Deliver media across verified regions with scope and limits made explicit
          </h1>

          <p className="text-base leading-8 text-slate-400 [text-shadow:0px_2px_10px_rgb(0_0_0/0.40)] lg:text-xl">
            ZoikoStream Global Distribution maps approved delivery capabilities,
            applicable conditions, and freshness. Geography, infrastructure,
            performance, and data residency are distinct and never inferred from one
            another.
          </p>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
            <span className="inline-flex items-center justify-center rounded-lg bg-gradient-to-b from-teal-400 to-blue-500 px-7 py-3.5 text-base font-bold text-slate-950">
              View distribution scope
            </span>

            <Link
              href="/talk-to-an-expert"
              className="inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-base font-bold text-white outline-1 -outline-offset-1 outline-slate-400 transition-colors hover:bg-white/10"
            >
              Talk to an expert
            </Link>
          </div>
        </div>

        <div className="w-full">
          <img
            src="/images/platform-global-distribution/hero-globe.png"
            alt="Illuminated globe with delivery routes connecting regions"
            className="w-full rounded-2xl object-cover shadow-[0px_18px_40px_-12px_rgba(0,0,0,0.40)]"
          />
        </div>
      </div>
    </section>
  );
}
