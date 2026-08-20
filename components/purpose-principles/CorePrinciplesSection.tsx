'use client';

import { Activity, Eye, FileText, Layers, ShieldCheck, User } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Principle {
  eyebrow: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  blobColor: string;
}

const PRINCIPLES: Principle[] = [
  {
    eyebrow: '01 · RELIABILITY',
    title: 'Reliability is part of the experience.',
    description:
      'Playback, APIs, workflows, and live operations must earn trust under real conditions — not only in a demo.',
    Icon: Activity,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-teal-600',
    blobColor: 'bg-teal-600',
  },
  {
    eyebrow: '02 · SIMPLICITY',
    title: 'Complexity belongs in the platform.',
    description:
      'Absorb infrastructure complexity where we can; expose clear control where customer judgment genuinely matters.',
    Icon: Layers,
    iconBg: 'bg-indigo-50',
    iconColor: 'text-blue-500',
    blobColor: 'bg-blue-500',
  },
  {
    eyebrow: '03 · CLARITY',
    title: 'Clarity earns trust.',
    description:
      'Pricing, documentation, system states, limits, and service communications should be understandable before a customer is forced to discover them the hard way.',
    Icon: FileText,
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-500',
    blobColor: 'bg-violet-500',
  },
  {
    eyebrow: '04 · EXPERIENCE',
    title: 'Operators and audiences both matter.',
    description:
      'A strong video experience must work for the team running it and for the people watching it — across devices, networks, and moments that matter.',
    Icon: User,
    iconBg: 'bg-fuchsia-100',
    iconColor: 'text-fuchsia-500',
    blobColor: 'bg-fuchsia-500',
  },
  {
    eyebrow: '05 · TRUST',
    title: 'Trust must be observable.',
    description:
      'Security, privacy, service health, incident communication, and operational controls should be governed, inspectable, and evidence-led.',
    Icon: ShieldCheck,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-teal-600',
    blobColor: 'bg-teal-600',
  },
  {
    eyebrow: '06 · ACCESSIBILITY',
    title: 'Accessibility is quality.',
    description:
      'Accessibility is a product quality requirement, not a finishing step. Interfaces, content, documentation, and live experiences should be perceivable, operable, understandable, and robust.',
    Icon: Eye,
    iconBg: 'bg-indigo-50',
    iconColor: 'text-blue-500',
    blobColor: 'bg-blue-500',
  },
];

export default function CorePrinciplesSection() {
  return (
    <section className="w-full bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-500" />
            <span className="font-mono text-xs uppercase leading-5 tracking-wide text-blue-500">
              Core principles
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-9 text-zinc-900 sm:text-3xl">
            What we optimize for.
          </h2>

          <p className="max-w-2xl text-base leading-6 text-gray-500">
            Six principles — enough to express a coherent operating system without
            becoming a long, forgettable values list.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map(({ Icon, ...principle }) => (
            <article
              key={principle.eyebrow}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-7"
            >
              {/* Decorative corner blob */}
              <span
                className={`pointer-events-none absolute -top-10 right-[-18px] size-28 rounded-[60px] opacity-10 ${principle.blobColor}`}
              />

              <span
                className={`relative inline-flex size-11 items-center justify-center rounded-xl ${principle.iconBg}`}
              >
                <Icon className={`size-5 ${principle.iconColor}`} strokeWidth={1.33} />
              </span>

              <span className="relative mt-6 font-mono text-xs leading-4 tracking-wide text-gray-500">
                {principle.eyebrow}
              </span>

              <h3 className="relative mt-3 text-lg font-bold leading-8 text-zinc-900">
                {principle.title}
              </h3>

              <p className="relative mt-3 text-sm leading-6 text-gray-500">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
