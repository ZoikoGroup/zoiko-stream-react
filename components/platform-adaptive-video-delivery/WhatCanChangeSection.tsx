'use client';

import SectionShell from './SectionShell';

interface ConditionFamily {
  icon: string;
  iconBg: string;
  title: string;
  description: string;
}

const FAMILIES: ConditionFamily[] = [
  {
    icon: '/images/platform-adaptive-video-delivery/film.svg',
    iconBg: 'bg-sky-100',
    title: 'Media',
    description:
      'Prepared representations, tracks, metadata or source constraints may influence what can be delivered.',
  },
  {
    icon: '/images/platform-adaptive-video-delivery/monitor.svg',
    iconBg: 'bg-emerald-200/30',
    title: 'Playback Environment',
    description:
      'Player, application, browser, OS, device or decoder capability may constrain eligible delivery.',
  },
  {
    icon: '/images/platform-adaptive-video-delivery/wifi.svg',
    iconBg: 'bg-sky-100',
    title: 'Network',
    description:
      'Throughput, loss, congestion, route or other observed conditions may affect behavior.',
  },
  {
    icon: '/images/platform-adaptive-video-delivery/shield.svg',
    iconBg: 'bg-green-50',
    title: 'Policy',
    description:
      'Audience, entitlement, geography, content, plan or other approved policy may limit eligible behavior.',
  },
  {
    icon: '/images/platform-adaptive-video-delivery/activity.svg',
    iconBg: 'bg-amber-100',
    title: 'Service State',
    description:
      'Dependency, region, or component health can change what is currently usable.',
  },
  {
    icon: '/images/platform-adaptive-video-delivery/sliders.svg',
    iconBg: 'bg-violet-50',
    title: 'User Choice',
    description:
      'Viewer-selected quality, captions, audio or accessibility preferences may matter where supported.',
  },
];

export default function WhatCanChangeSection() {
  return (
    <SectionShell
      tone="light"
      background="/images/platform-adaptive-video-delivery/what-can-change-bg.png"
      title="What can change during delivery?"
      subtitle="Six families of conditions that may influence how video is delivered to viewers."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FAMILIES.map((family) => (
          <article
            key={family.title}
            className="flex flex-col gap-4 rounded-2xl bg-slate-50 p-6 outline-1 -outline-offset-1 outline-slate-200"
          >
            <span
              className={`flex size-10 items-center justify-center rounded-lg ${family.iconBg}`}
            >
              <img src={family.icon} alt="" aria-hidden="true" className="size-5" />
            </span>

            <h3 className="text-lg font-bold text-slate-900">{family.title}</h3>

            <p className="text-sm leading-5 text-slate-600">{family.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
