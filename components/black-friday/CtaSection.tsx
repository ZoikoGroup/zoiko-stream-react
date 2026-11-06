'use client';

import { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { TagGlyph } from './shared';

/** Countdown target: start of Black Friday 2026 (UTC). */
const TARGET = Date.parse('2026-11-27T00:00:00Z');

function remaining(now: number) {
  const s = Math.max(0, Math.floor((TARGET - now) / 1000));
  return [
    { label: 'Days', value: Math.floor(s / 86400) },
    { label: 'Hours', value: Math.floor((s % 86400) / 3600) },
    { label: 'Mins', value: Math.floor((s % 3600) / 60) },
    { label: 'Secs', value: s % 60 },
  ];
}

/** One-second clock store; the snapshot is stable within a second. Server snapshot is null (renders "--"). */
function subscribeToClock(onTick: () => void) {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
}
const readClock = () => Math.floor(Date.now() / 1000) * 1000;

function PercentTag({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 172 142" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="bf-tag" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#14b8a6" />
          <stop offset="1" stopColor="#3b6fd6" />
        </linearGradient>
      </defs>
      <polygon points="138,1 170,141 140,141" fill="#3b6fd6" stroke="#e5e7eb" strokeWidth="2" />
      <line x1="138" y1="1" x2="155" y2="141" stroke="#e5e7eb" strokeWidth="1.5" />
      <polygon points="12,1 138,1 150,141 1,141" fill="url(#bf-tag)" stroke="#e5e7eb" strokeWidth="2.5" />
      <text x="76" y="98" textAnchor="middle" fill="#e5e7eb" fontSize="78" fontWeight="300">
        %
      </text>
    </svg>
  );
}

export default function CtaSection() {
  const now = useSyncExternalStore(subscribeToClock, readClock, () => null);
  const units = remaining(now ?? TARGET);

  return (
    <section className="w-full bg-[#0a0a0f] px-4 py-16 sm:px-7 lg:py-11">
      <div className="relative mx-auto max-w-[1124px]">
        <PercentTag className="absolute -left-[70px] -top-1 z-10 hidden w-[170px] lg:block" />
        <PercentTag className="absolute -bottom-1 -right-[14px] z-10 hidden w-[110px] lg:block" />

        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#8a2fd1] via-[#7c3aed] to-[#9333ea] px-6 py-14 text-center sm:px-10 lg:py-16">
          <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.04em] text-amber-100 sm:text-sm">
            <TagGlyph className="size-3.5" /> Black Friday 2026 — 20% off eligible first-event platform fees*
          </p>
          <h2 className="mt-4 text-[28px] font-extrabold leading-tight tracking-tight text-white sm:text-[36px]">
            Ready to make your next event unmissable?
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-base leading-[1.6] text-violet-100">
            Lock in your Black Friday offer before the window closes and go live with confidence.
          </p>

          <div className="mt-8 flex justify-center gap-3 sm:gap-4" role="timer" aria-label="Time until Black Friday">
            {units.map((u) => (
              <div
                key={u.label}
                className="flex w-[70px] flex-col items-center rounded-xl border border-white/15 bg-[#4c1d95]/70 py-3 sm:w-[82px]"
              >
                <span className="text-[28px] font-extrabold tabular-nums leading-9 text-white sm:text-[32px]" suppressHydrationWarning>
                  {now === null ? '--' : String(u.value).padStart(2, '0')}
                </span>
                <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-violet-200">{u.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/start-building"
              className="rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-violet-900 transition hover:bg-violet-50"
            >
              Start Your Live Event
            </Link>
            <Link
              href="/talk-to-an-expert"
              className="rounded-xl border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Book a Demo
            </Link>
          </div>

          <p className="mx-auto mt-7 max-w-[560px] text-[11px] leading-[1.6] text-violet-200">
            *Offer proposed and subject to approval. Discount applies to eligible first-event platform fees only. Terms,
            conditions and eligibility apply. Black Friday: 27 Nov 2026 · Cyber Monday: 30 Nov 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
