'use client';

import Link from 'next/link';

export default function OperatingContextHero() {
  return (
    <section className="w-full border-t border-slate-400/40 bg-gradient-to-b from-gray-50 to-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 sm:px-10 lg:flex-row lg:gap-16 lg:px-8 lg:py-20">
        {/* Left: copy */}
        <div className="flex w-full flex-col items-start lg:w-1/2">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Company / Operating Context
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-neutral-700 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            How ZoikoStream fits together.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-500">
            ZoikoStream sits within a wider technology and operating context. This
            page explains how Zoiko Group, Zoiko Tech, Zoiko Cloud, ZoikoStream, and
            Live Events relate &mdash; without mixing legal entities, product brands,
            and infrastructure roles.
          </p>

          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="#operating-model"
              className="inline-flex items-center justify-center rounded-[10px] bg-gradient-to-r from-teal-300 to-blue-400 px-7 py-4 text-sm font-semibold text-gray-800 transition-opacity hover:opacity-90"
            >
              View the operating model
            </Link>

            <Link
              href="/zoiko-group"
              className="inline-flex items-center justify-center rounded-[10px] border border-neutral-700 px-7 py-4 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-700 hover:text-white"
            >
              Explore Zoiko Group
            </Link>
          </div>

          <div className="mt-8 flex w-full max-w-xl items-start gap-3 rounded-[10px] border border-zinc-200 bg-white px-4 py-5">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-[3px] bg-teal-400" />
            <p className="text-sm leading-5 text-gray-400">
              Explanatory overview. The legal provider for a specific service is
              stated in the applicable terms, order form, or agreement.
            </p>
          </div>
        </div>

        {/* Right: image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/operating-context/hero-zoikostream-building.png"
            alt="ZoikoStream signage on a modern glass office building"
            className="h-full w-full rounded-3xl object-cover shadow-[0px_30px_60px_-30px_rgba(30,35,50,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}
