'use client';

import SectionShell from './SectionShell';

interface DeliveryContext {
  image: string;
  alt: string;
  tag: string;
  title: string;
  concerns: string[];
}

const CONTEXTS: DeliveryContext[] = [
  {
    image: '/images/platform-resilient-delivery/context-live-streaming.png',
    alt: 'Video camera broadcasting illustration',
    tag: 'LIVE / RESILIENT DELIVERY',
    title: 'Live streaming continuity',
    concerns: [
      'Source loss & ingest interruption',
      'Authorization dependency',
      'Audience delivery degradation',
      'Recording continuity & split logs',
    ],
  },
  {
    image: '/images/platform-resilient-delivery/context-video-on-demand.png',
    alt: 'Replay progress bar illustration',
    tag: 'VOD / MEDIA MANAGEMENT',
    title: 'Video on demand & replay',
    concerns: [
      'Asset readiness & transcoder halts',
      'Playback authorization failure',
      'Regional storage availability',
      'Delivery failures & cache misses',
    ],
  },
  {
    image: '/images/platform-resilient-delivery/context-enterprise-broadcasting.png',
    alt: 'Broadcast tower and satellite dish illustration',
    tag: 'PRODUCT / COMMERCIAL / LEGAL',
    title: 'Enterprise broadcasting',
    concerns: [
      'Audit-trail failure modes',
      'Recovery authorization mapping',
      'Contractual SLA verification',
      'Cross-region change auditing',
    ],
  },
  {
    image: '/images/platform-resilient-delivery/context-live-events.png',
    alt: 'Megaphone announcement illustration',
    tag: 'LIVE EVENTS / OPERATIONS',
    title: 'ZoikoStream Live Events',
    concerns: [
      'Event continuity dry-runs',
      'Assured Event tier readiness',
      'Multilingual captions / secondary feeds',
      'Escalated live-operations support',
    ],
  },
];

export default function ContinuityContextsSection() {
  return (
    <SectionShell
      tone="light"
      background="/images/platform-resilient-delivery/continuity-contexts-bg.png"
      title="Continuity across delivery contexts"
      subtitle="How resilience applies across live streaming, video on demand, enterprise broadcasting, and managed live events - each with distinct failure modes, recovery constraints, and ownership boundaries."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {CONTEXTS.map((context) => (
          <article
            key={context.title}
            className="flex flex-col gap-5 rounded-xl bg-white p-6 outline-1 -outline-offset-1 outline-gray-200"
          >
            <img
              src={context.image}
              alt={context.alt}
              className="h-44 w-full rounded-lg object-cover"
            />

            <span className="w-fit rounded-sm bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-600">
              {context.tag}
            </span>

            <h3 className="text-xl font-bold text-slate-900">{context.title}</h3>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Key concerns
              </span>

              <ul className="flex flex-col gap-1.5">
                {context.concerns.map((concern) => (
                  <li key={concern} className="flex items-start gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-slate-400" />
                    <span className="text-sm leading-6 text-slate-600">
                      {concern}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
