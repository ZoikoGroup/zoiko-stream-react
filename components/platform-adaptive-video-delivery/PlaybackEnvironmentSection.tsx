'use client';

import SectionShell from './SectionShell';

interface EnvironmentCard {
  tag: string;
  title: string;
  description: string;
}

const CARDS: EnvironmentCard[] = [
  {
    tag: 'INTEGRATION',
    title: 'Player/application',
    description: 'Canonical supported integration; version where material.',
  },
  {
    tag: 'COMPATIBILITY',
    title: 'Browser / OS',
    description: 'Exact tested versions/ranges only when maintained.',
  },
  {
    tag: 'HARDWARE',
    title: 'Device class',
    description: 'Verified class and constraints, not aspirational logo wall.',
  },
  {
    tag: 'CAPABILITY',
    title: 'Media capability',
    description: 'Public codec/container/track capability only when registry-backed.',
  },
  {
    tag: 'CONTEXT',
    title: 'Feature context',
    description: 'Fullscreen, captions, audio selection, embeds only when verified.',
  },
  {
    tag: 'METADATA',
    title: 'Test date / owner',
    description:
      'Value representing visible freshness metadata for material compatibility.',
  },
];

export default function PlaybackEnvironmentSection() {
  return (
    <SectionShell
      tone="dark"
      background="/images/platform-adaptive-video-delivery/playback-environment-bg.png"
      title="Player, application, and playback environment"
      subtitle="Qualify the viewer environment without publishing a stale or decorative logo matrix."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card) => (
          <article
            key={card.title}
            className="flex flex-col items-start gap-4 rounded-2xl bg-zinc-900/90 p-7 outline-1 -outline-offset-1 outline-gray-800"
          >
            <span className="rounded-sm bg-teal-950 px-2.5 py-1 font-mono text-[10px] font-bold text-teal-400 outline-1 -outline-offset-1 outline-teal-400">
              {card.tag}
            </span>

            <h3 className="text-lg font-bold text-white">{card.title}</h3>

            <p className="text-sm leading-5 text-slate-400">{card.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
