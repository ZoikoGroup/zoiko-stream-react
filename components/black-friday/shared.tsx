import type { ReactNode } from 'react';

export const IMG = '/images/black-friday';

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-center text-xs font-bold uppercase leading-4 tracking-[0.14em] text-violet-400">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto flex max-w-[680px] flex-col items-center gap-3 text-center">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-[26px] font-extrabold leading-tight tracking-tight text-slate-50 sm:text-[32px]">
        {title}
      </h2>
      {subtitle && <p className="text-base leading-6 text-gray-400">{subtitle}</p>}
    </div>
  );
}

/** Small amber price-tag glyph used in offer pills. */
export function TagGlyph({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M2 4a2 2 0 0 1 2-2h7.17a2 2 0 0 1 1.41.59l9.83 9.82a2 2 0 0 1 0 2.83l-7.17 7.17a2 2 0 0 1-2.83 0L2.59 12.58A2 2 0 0 1 2 11.17z" fill="#fcd34d" />
      <circle cx="7.5" cy="7.5" r="1.8" fill="#0a0a0f" />
    </svg>
  );
}

/**
 * Ribbon sections: at lg+ the content is 1124px (Figma) but always leaves ≥120px gutters,
 * and each side ribbon is sized to the gutter so it can never overlap the cards.
 */
export const ribbonContent = 'mx-auto w-full px-4 sm:px-7 lg:w-[min(1124px,calc(100%_-_240px))] lg:px-0';
export const gutterWidth = (max: number, gap = 0) =>
  `min(${max}px, calc((100% - min(1124px, 100% - 240px)) / 2 - ${gap}px))`;

export const container ='mx-auto w-full max-w-[1180px] px-4 sm:px-7';

export const gradientBtn =
  'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-[0_10px_30px_-10px_rgba(124,58,237,0.9)] transition hover:brightness-110';
