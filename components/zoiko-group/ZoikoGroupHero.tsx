'use client';

import Link from 'next/link';

export default function ZoikoGroupHero() {
  return (
    <section className="w-full border-t border-slate-400/40 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 sm:px-10 lg:flex-row lg:gap-16 lg:px-8 lg:py-20">
        {/* Left: copy */}
        <div className="flex w-full flex-col items-start lg:w-1/2">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Company / Zoiko Group
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-neutral-700 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            The parent organization behind ZoikoStream.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-500">
            Zoiko Group provides the organizational foundation behind ZoikoStream and
            the wider Zoiko technology portfolio. This page explains that
            relationship, the role of the Group, and where to find authoritative
            corporate information.
          </p>

          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/talk-to-an-expert"
              className="inline-flex items-center justify-center rounded-[10px] bg-gradient-to-r from-teal-300 to-blue-400 px-7 py-4 text-sm font-semibold text-gray-800 transition-opacity hover:opacity-90"
            >
              Talk to an expert
            </Link>

            <span className="inline-flex items-center justify-center rounded-[10px] border border-neutral-700 px-7 py-4 text-sm font-semibold text-neutral-700">
              Visit Zoiko Group
            </span>
          </div>
        </div>

        {/* Right: image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/zoiko-group/hero-zoiko-group-building.png"
            alt="Zoiko Group and ZoikoStream signage on a corporate building"
            className="h-full w-full rounded-[10px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
