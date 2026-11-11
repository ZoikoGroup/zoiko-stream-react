'use client';

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Download, Globe, MonitorPlay, Shield, X } from 'lucide-react';
import { IMG, TagGlyph, gradientBtn } from './shared';
import styles from './BlackFridayPopup.module.css';

/** Black Friday starts / Cyber Monday ends (UTC) — same dates as /black-friday. */
const BF_START = Date.parse('2026-11-27T00:00:00Z');
const CM_END = Date.parse('2026-12-01T00:00:00Z');

const STORAGE_KEY = 'zs-bf-popup-dismissed-2026';
const OPEN_DELAY_MS = 1200;
const OFFER_URL = '/black-friday';

const perks = [
  { icon: Download, label: 'No downloads' },
  { icon: MonitorPlay, label: 'HD quality' },
  { icon: Globe, label: 'Global reach' },
  { icon: Shield, label: 'Secure & reliable' },
];

const sparks = [
  { left: '8%', delay: '0s', dur: '5s', color: '#fcd34d' },
  { left: '22%', delay: '1.4s', dur: '6s', color: '#22d3ee' },
  { left: '38%', delay: '0.7s', dur: '4.6s', color: '#a78bfa' },
  { left: '55%', delay: '2.2s', dur: '5.4s', color: '#fcd34d' },
  { left: '70%', delay: '0.3s', dur: '6.2s', color: '#3b82f6' },
  { left: '86%', delay: '1.8s', dur: '4.8s', color: '#fcd34d' },
];

/** One-second clock store (server snapshot null → renders "--" until hydrated). */
function subscribeToClock(onTick: () => void) {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
}
const readClock = () => Math.floor(Date.now() / 1000) * 1000;

function countdown(now: number) {
  const live = now >= BF_START;
  const target = live ? CM_END : BF_START;
  const s = Math.max(0, Math.floor((target - now) / 1000));
  return {
    heading: live ? 'Offer ends in' : 'Black Friday starts in',
    units: [
      { label: 'Days', value: Math.floor(s / 86400) },
      { label: 'Hrs', value: Math.floor((s % 86400) / 3600) },
      { label: 'Min', value: Math.floor((s % 3600) / 60) },
      { label: 'Sec', value: s % 60 },
    ],
  };
}

function wasDismissed() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

function rememberDismissed() {
  try {
    sessionStorage.setItem(STORAGE_KEY, '1');
  } catch {
    /* storage blocked — popup may show again next page load, that's fine */
  }
}

export default function BlackFridayPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const now = useSyncExternalStore(subscribeToClock, readClock, () => null);

  // Don't show on the offer page itself, after the sale, or once dismissed this session.
  const eligiblePage = !pathname?.startsWith(OFFER_URL);

  useEffect(() => {
    if (!eligiblePage) return;
    const id = setTimeout(() => {
      if (Date.now() < CM_END && !wasDismissed()) setOpen(true);
    }, OPEN_DELAY_MS);
    return () => clearTimeout(id);
  }, [eligiblePage]);

  const close = useCallback(() => {
    rememberDismissed();
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 240);
  }, []);

  // Esc to close, lock page scroll, focus the close button while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  if (!open || !eligiblePage) return null;

  const { heading, units } = countdown(now ?? BF_START - 1);

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center p-4 font-inter ${closing ? styles.closing : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="bf-popup-title"
      aria-describedby="bf-popup-desc"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/75 backdrop-blur-sm ${styles.backdrop}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Card */}
      <div className={`relative w-full max-w-[860px] ${styles.card}`}>
        <div className={styles.borderGlow} aria-hidden="true" />

        <div className="relative z-10 grid max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-3xl bg-[#0a0a0f] md:grid-cols-[1fr_1.15fr] md:overflow-hidden">
          {/* Close */}
          <button
            ref={closeBtnRef}
            type="button"
            onClick={close}
            aria-label="Close Black Friday offer"
            className="absolute right-3 top-3 z-20 grid size-9 place-items-center rounded-full border border-white/15 bg-black/60 text-gray-300 backdrop-blur transition hover:rotate-90 hover:border-white/40 hover:text-white"
          >
            <X className="size-4" />
          </button>

          {/* Visual side */}
          <div className="relative h-[190px] overflow-hidden md:h-auto md:min-h-[480px]">
            <Image
              src={`${IMG}/hero-concert.webp`}
              alt=""
              fill
              sizes="(min-width: 768px) 400px, 100vw"
              className="object-cover brightness-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/30 to-transparent md:bg-gradient-to-r md:from-transparent md:via-[#0a0a0f]/20 md:to-[#0a0a0f]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(124,58,237,0.35),transparent_60%)]" />

            {sparks.map((s, i) => (
              <span
                key={i}
                className={styles.spark}
                style={{ left: s.left, background: s.color, animationDelay: s.delay, animationDuration: s.dur }}
                aria-hidden="true"
              />
            ))}

            {/* Floating SAVE 20% badge */}
            <div
              className={`absolute left-5 top-5 grid size-[104px] place-items-center rounded-full border-2 border-dashed border-amber-300/70 bg-[#0c0c12]/90 text-center shadow-[0_0_40px_-6px_rgba(251,191,36,0.6)] md:left-auto md:right-8 md:top-auto md:bottom-10 md:size-[132px] ${styles.float}`}
              aria-hidden="true"
            >
              <div className="leading-none">
                <p className="text-[11px] font-bold tracking-[0.18em] text-gray-300 md:text-xs">SAVE</p>
                <p className="mt-1 text-[34px] font-extrabold tracking-tight text-amber-300 md:text-[42px]">20%</p>
                <p className="mt-1 text-[9px] font-semibold tracking-[0.12em] text-gray-400 md:text-[10px]">FIRST EVENT*</p>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="relative px-6 pb-7 pt-2 sm:px-8 md:py-9">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.14em] text-white">
              <span className={`size-2 rounded-full bg-amber-300 ${styles.pulse}`} />
              <TagGlyph className="size-3" /> BLACK FRIDAY 2026
            </span>

            <h2
              id="bf-popup-title"
              className="mt-5 text-[32px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white sm:text-[38px]"
            >
              Make every live moment{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">count.</span>
            </h2>

            <p id="bf-popup-desc" className="mt-3 text-[15px] leading-relaxed text-gray-300">
              Professional live streaming for events, creators and businesses — now with{' '}
              <strong className="font-bold text-amber-300">20% off</strong> eligible first-event platform fees.
            </p>

            {/* Countdown */}
            <div className="mt-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-violet-400">{heading}</p>
              <div className="mt-2.5 grid grid-cols-4 gap-2" aria-live="off">
                {units.map((u) => (
                  <div
                    key={u.label}
                    className="rounded-xl border border-gray-800 bg-gradient-to-b from-[#16161f] to-[#0d0d14] py-2.5 text-center"
                  >
                    <p className="text-2xl font-extrabold tabular-nums text-slate-50">
                      {now === null ? '--' : String(u.value).padStart(2, '0')}
                    </p>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">{u.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dates */}
            <div className="mt-4 flex items-center justify-between rounded-xl border border-amber-300/40 bg-gradient-to-r from-amber-300/10 to-transparent px-4 py-2.5 text-xs">
              <span className="text-gray-300">
                <span className="font-bold text-white">Black Friday</span> · 27 Nov
              </span>
              <span className="h-4 w-px bg-amber-300/40" />
              <span className="text-gray-300">
                <span className="font-bold text-white">Cyber Monday</span> · 30 Nov
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={OFFER_URL}
                onClick={close}
                className={`inline-flex h-[50px] flex-1 items-center justify-center gap-2.5 rounded-xl px-6 text-[15px] font-semibold ${gradientBtn} ${styles.shine}`}
              >
                Claim 20% Off <ArrowRight className="size-4" />
              </Link>
              <button
                type="button"
                onClick={close}
                className="h-[50px] rounded-xl border border-white/15 px-5 text-sm font-medium text-gray-400 transition hover:border-white/35 hover:text-white"
              >
                Maybe later
              </button>
            </div>

            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-[13px] text-gray-400">
              {perks.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon className="size-3.5 text-cyan-400" strokeWidth={1.75} />
                  {label}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-[10.5px] leading-4 text-gray-500">
              *Discount applies to eligible first-event platform fees only. Terms, conditions and eligibility apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
