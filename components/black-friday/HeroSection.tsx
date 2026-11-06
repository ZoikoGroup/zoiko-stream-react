import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, Globe, MonitorPlay, Shield } from 'lucide-react';
import { IMG, TagGlyph, gradientBtn } from './shared';

const perks = [
  { icon: Download, label: 'No downloads' },
  { icon: MonitorPlay, label: 'HD quality' },
  { icon: Globe, label: 'Global reach' },
  { icon: Shield, label: 'Secure & reliable' },
];

/* Seal geometry, in a 400×410 box anchored to the hero's bottom-right corner
   (matches the 1440×875 Figma frame: seal centre at x=1263, y=625). */
const C = { x: 223, y: 205 };
const DIR = { x: 0.69, y: -0.724 }; // ribbon axis, pointing up-right
const PERP = { x: 0.724, y: 0.69 };
const HALF_W = 23;
const RING_R = 62;

/** Swallowtail ribbon band along the axis, from t0 to t1 (negative = down-left). */
function band(t0: number, t1: number, notch: number) {
  const at = (t: number, w: number) =>
    `${(C.x + DIR.x * t + PERP.x * w).toFixed(1)},${(C.y + DIR.y * t + PERP.y * w).toFixed(1)}`;
  const tn = t1 - Math.sign(t1) * notch;
  return [at(t0, HALF_W), at(t1, HALF_W), at(tn, 0), at(t1, -HALF_W), at(t0, -HALF_W)].join(' ');
}

/** Ring lettering: one glyph per equal angle step, starting near 10 o'clock. */
const RING_TEXT = 'BLACK FRIDAY OFFER • BLACK FRIDAY OFFER • ';
const RING_START_DEG = -62;
const ringGlyphs = [...RING_TEXT].map((ch, i) => {
  const deg = RING_START_DEG + (360 / RING_TEXT.length) * i;
  const rad = (deg * Math.PI) / 180;
  return {
    ch,
    x: +(C.x + RING_R * Math.sin(rad)).toFixed(2),
    y: +(C.y - RING_R * Math.cos(rad)).toFixed(2),
    deg: +deg.toFixed(2),
  };
});

function SaveSeal() {
  return (
    <svg viewBox="0 0 400 410" className="h-auto w-full overflow-visible" aria-hidden="true">
      <defs>
        <linearGradient id="bf-ribbon-up" gradientUnits="userSpaceOnUse" x1={C.x} y1={C.y} x2="400" y2="10">
          <stop offset="0.25" stopColor="#2dd4bf" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="bf-ribbon-down" gradientUnits="userSpaceOnUse" x1={C.x} y1={C.y} x2="40" y2="400">
          <stop offset="0.3" stopColor="#2dd4bf" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      {/* Ribbon tails — drawn first so the seal sits on top */}
      <polygon points={band(0, 268, 34)} fill="url(#bf-ribbon-up)" />
      <polygon points={band(0, -262, 36)} fill="url(#bf-ribbon-down)" />

      {/* Seal */}
      <circle cx={C.x} cy={C.y} r="73" fill="#0c0c12" />
      <g fill="#fbbf24" fontSize="8.5" fontWeight="700" textAnchor="middle">
        {ringGlyphs.map((g, i) => (
          <text key={i} x={g.x} y={g.y} transform={`rotate(${g.deg} ${g.x} ${g.y})`}>
            {g.ch}
          </text>
        ))}
      </g>
      <text x={C.x} y={C.y - 13} textAnchor="middle" fill="#fcd34d" fontSize="31" fontWeight="800" letterSpacing="-0.5">
        SAVE
      </text>
      <text x={C.x} y={C.y + 20} textAnchor="middle" fill="#fcd34d" fontSize="31" fontWeight="800" letterSpacing="-0.5">
        20%
      </text>
      <text x={C.x} y={C.y + 38} textAnchor="middle" fill="#e5e7eb" fontSize="8.5" fontWeight="600" letterSpacing="1">
        FIRST EVENT*
      </text>
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0 lg:left-[41%]">
        <Image
          src={`${IMG}/hero-concert.webp`}
          alt="Crowd watching a live concert with the band on a big screen"
          fill
          preload
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover brightness-[1.1]"
        />
        <div className="absolute inset-0 bg-[#0a0a0f]/75 lg:bg-transparent lg:bg-gradient-to-r lg:from-[#0a0a0f] lg:via-transparent lg:via-[12%] lg:to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[640px] w-full max-w-[1180px] items-center px-4 py-20 sm:px-7 lg:min-h-[875px]">
        <div className="max-w-[560px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-bold tracking-[0.14em] text-white">
            <TagGlyph /> BLACK FRIDAY 2026
          </span>

          <h1 className="mt-7 text-[44px] font-extrabold leading-[1.02] tracking-[-0.03em] text-white sm:text-[64px] lg:text-[72px]">
            Make every live moment{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">count.</span>
          </h1>

          <p className="mt-8 max-w-[420px] text-lg leading-[1.55] text-gray-300">
            Professional live streaming for events, creators and businesses.
          </p>

          <div className="mt-8 flex max-w-[398px] items-center gap-6 rounded-2xl border border-amber-300/70 bg-gradient-to-r from-amber-300/10 to-transparent px-7 py-5">
            <span className="whitespace-nowrap text-[34px] font-extrabold text-amber-300">20% OFF</span>
            <span className="h-12 w-px bg-amber-300/40" />
            <span className="text-xs font-bold uppercase leading-[1.4] tracking-[0.1em] text-white">
              Eligible first-event platform fees*
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/start-building"
              className={`inline-flex h-[50px] items-center gap-3 rounded-xl px-6 text-[15px] font-semibold ${gradientBtn}`}
            >
              Start Your Live Event <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/talk-to-an-expert"
              className="inline-flex h-[50px] items-center rounded-xl border border-white/25 bg-black/50 px-7 text-[15px] font-semibold text-white transition hover:border-white/50"
            >
              Book a Demo
            </Link>
          </div>

          <ul className="mt-11 flex flex-wrap gap-x-7 gap-y-3 text-sm text-gray-300">
            {perks.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="size-4 text-gray-400" strokeWidth={1.75} />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[45px] right-0 hidden w-[320px] lg:block xl:w-[400px]">
        <SaveSeal />
      </div>
    </section>
  );
}
