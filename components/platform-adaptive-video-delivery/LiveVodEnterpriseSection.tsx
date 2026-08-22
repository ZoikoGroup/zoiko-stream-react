'use client';

import SectionShell from './SectionShell';

interface ContextCard {
  tag: string;
  tagColor: string;
  title: string;
  description: string;
}

const CARDS: ContextCard[] = [
  {
    tag: 'REAL-TIME INGEST',
    tagColor: 'text-teal-400',
    title: 'Live Streaming',
    description:
      'Live source and delivery state may change during events. Authorization and playback environment precede delivery qualification. Current network conditions may affect eligible behavior.',
  },
  {
    tag: 'ARCHIVED ASSETS',
    tagColor: 'text-blue-500',
    title: 'Video on Demand',
    description:
      "Consume verified asset readiness. Player, device and network qualification is this page's primary responsibility. Requalification may be required when asset or version changes.",
  },
  {
    tag: 'COMPLIANCE & GOVERNANCE',
    tagColor: 'text-emerald-500',
    title: 'Enterprise Broadcasting',
    description:
      'Support procurement and operations review. Use current compatibility registry with known limits. Explain condition-aware behavior conceptually with evidence-gated outcomes.',
  },
  {
    tag: 'VARIABLE AUDIENCES',
    tagColor: 'text-amber-500',
    title: 'ZoikoStream Live Events',
    description:
      'Qualified delivery context and limitations for variable audience networks and devices. Route authorization to Live Events plan and Secure Playback. Avoid urgency or fear-based copy.',
  },
];

export default function LiveVodEnterpriseSection() {
  return (
    <SectionShell
      tone="dark"
      background="/images/platform-adaptive-video-delivery/live-vod-enterprise-bg.png"
      title="Live, VOD, and enterprise context"
      subtitle="How adaptive delivery applies across different streaming scenarios and enterprise environments."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {CARDS.map((card) => (
          <article
            key={card.title}
            className="flex flex-col gap-4 rounded-2xl bg-zinc-900/80 p-7 outline-1 -outline-offset-1 outline-gray-800"
          >
            <span
              className={`font-mono text-xs font-bold tracking-wide ${card.tagColor}`}
            >
              {card.tag}
            </span>

            <h3 className="text-2xl font-bold text-white">{card.title}</h3>

            <p className="text-sm leading-6 text-slate-400">{card.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
