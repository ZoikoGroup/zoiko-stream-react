'use client';

import SectionShell from './SectionShell';

interface DocTopic {
  number: string;
  title: string;
  description: string;
}

const TOPICS: DocTopic[] = [
  {
    number: '01',
    title: 'Understand playback authorization',
    description:
      'Learn how incoming viewer tokens map directly to verified corporate access policies before the player initializes.',
  },
  {
    number: '02',
    title: 'Integrate player',
    description:
      'Examine configuration contracts for native players and browser-based MSE playback environments.',
  },
  {
    number: '03',
    title: 'Know supported environments',
    description:
      'Query the active, tested compatibility matrices across major operating systems, device classes, and CDNs.',
  },
  {
    number: '04',
    title: 'Understand media/protocol constraints',
    description:
      'Review available segment wrapping protocols, fallback codecs, and multi-track audio options.',
  },
  {
    number: '05',
    title: 'Observe playback state/errors',
    description:
      'Capture privacy-safe telemetry events and map streaming errors to visible, actionable recovery routes.',
  },
  {
    number: '06',
    title: 'Use APIs/SDKs',
    description:
      'Examine stable client library methods, webhook payloads, and live playlist endpoints.',
  },
  {
    number: '07',
    title: 'Access workspace/sandbox',
    description:
      'Configure test environments, verify cryptographic signatures, and simulate degraded networks safely.',
  },
  {
    number: '08',
    title: 'Check compatibility',
    description:
      'Ensures high performance across desktop Safari/Chrome, native iOS, Android, and smart TV environments.',
  },
];

export default function DocumentationSupportSection() {
  return (
    <SectionShell
      tone="dark"
      background="/images/platform-adaptive-video-delivery/documentation-bg.png"
      title="Documentation and developer support"
      subtitle="Give builders a credible route without guessed implementation documentation."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {TOPICS.map((topic) => (
          <article
            key={topic.number}
            className="flex flex-col gap-3 rounded-2xl bg-zinc-900/80 p-6 outline-1 -outline-offset-1 outline-gray-800"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-sky-400 font-mono text-[10px] font-bold text-gray-950">
                {topic.number}
              </span>
              <h3 className="text-lg font-bold text-white">{topic.title}</h3>
            </div>

            <p className="text-sm leading-5 text-slate-400">{topic.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
