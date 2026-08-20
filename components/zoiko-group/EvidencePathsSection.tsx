'use client';

import Link from 'next/link';

interface EvidencePath {
  label: string;
  href?: string;
}

const PATHS: EvidencePath[] = [
  { label: 'Operating Context' },
  { label: 'Zoiko Tech' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Trust Center' },
  { label: 'System Status' },
  { label: 'Company Updates' },
  { label: 'Legal / Privacy' },
  { label: 'Official Zoiko Group' },
];

export default function EvidencePathsSection() {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Verify the context
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-10 text-neutral-700 sm:text-3xl">
            Evidence paths.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-4">
          {PATHS.map((path) => {
            const content = (
              <>
                <span className="text-sm font-semibold leading-6 text-neutral-700">
                  {path.label}
                </span>
                <span aria-hidden="true" className="text-sm font-bold text-neutral-700">
                  →
                </span>
              </>
            );

            return path.href ? (
              <Link
                key={path.label}
                href={path.href}
                className="flex items-center justify-between gap-4 bg-white px-5 py-5 transition-colors hover:bg-slate-50"
              >
                {content}
              </Link>
            ) : (
              <div
                key={path.label}
                className="flex items-center justify-between gap-4 bg-white px-5 py-5"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
