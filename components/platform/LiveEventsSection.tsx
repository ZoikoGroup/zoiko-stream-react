'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const EVENT_CAPABILITIES = ['Event types', 'Audience access', 'Captions', 'Resilience', 'Recording & replay'];

export default function LiveEventsSection() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900 px-4 py-16 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
        <div className="flex w-full flex-1 flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="text-xs font-medium uppercase tracking-wide text-blue-500">
              ZOIKOSTREAM LIVE EVENTS
            </span>
          </div>

          <h2 className="text-3xl font-light leading-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
            Managed Live Events within ZoikoStream.
          </h2>

          <p className="text-base font-normal leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
            Professionally operated event workflows use the same secure media foundation - production, secure
            delivery, captions, recording, and replay, coordinated as one endorsed capability inside ZoikoStream.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 py-2">
            {EVENT_CAPABILITIES.map((capability) => (
              <span key={capability} className="text-sm font-normal text-gray-500 dark:text-gray-400">
                {capability}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              href="/plan-a-live-event"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[10px] bg-gradient-to-r from-teal-400 to-blue-500 px-6 py-3.5 text-base font-normal text-slate-950 transition-opacity hover:opacity-95"
            >
              Plan a live event
            </Link>

            <Link
              href="/contact-expert"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[10px] border border-gray-800 dark:border-gray-700 px-6 py-3.5 text-base font-normal text-zinc-900 dark:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              Talk to an expert
            </Link>
          </div>

          <div className="pt-2 text-xs text-gray-500 dark:text-gray-400">
            Full detail remains on the{' '}
            <Link href="/live-events" className="inline-flex items-center gap-1 font-semibold text-blue-500 hover:underline">
              Live Events overview
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        <div className="relative w-full flex-1 overflow-hidden rounded-2xl border border-neutral-300 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src="/images/platform/Background+Border (2).png"
              alt="Managed Live Events Preview"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}