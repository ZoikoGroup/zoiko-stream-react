'use client';

import type { ReactNode } from 'react';

interface SectionShellProps {
  id?: string;
  tone: 'dark' | 'light';
  background: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

/**
 * Shared frame for every Adaptive Video Delivery section: a full-bleed artwork
 * backdrop, the section heading pair, then the section's own content.
 */
export default function SectionShell({
  id,
  tone,
  background,
  title,
  subtitle,
  children,
}: SectionShellProps) {
  const isDark = tone === 'dark';

  return (
    <section
      id={id}
      className={`relative isolate w-full scroll-mt-24 ${
        isDark ? 'border-y border-gray-800 bg-gray-950' : 'bg-white'
      }`}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={background}
          alt=""
          aria-hidden="true"
          className={`size-full object-cover ${isDark ? 'brightness-150' : ''}`}
        />
        {isDark && <div className="absolute inset-0 bg-gray-950/25" />}
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24 xl:px-28">
        <div className="flex flex-col gap-3">
          <h2
            className={`text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {title}
          </h2>

          <p
            className={`max-w-4xl text-base leading-7 lg:text-lg ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {subtitle}
          </p>
        </div>

        <div className="mt-10 lg:mt-12">{children}</div>
      </div>
    </section>
  );
}
