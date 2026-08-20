'use client';

import { ChevronRight, Shield } from 'lucide-react';

interface Item {
  title: string;
  description: string;
}

const CONTRACT: Item[] = [
  {
    title: 'Initialization',
    description:
      'Player start requires approved resource identifiers and validated playback state payloads.',
  },
  {
    title: 'Authorization Handoff',
    description:
      'Establishes a clean, secure boundary between the browser player context and backend gateways.',
  },
  {
    title: 'Error States',
    description:
      'Standardized browser display maps explicitly to Denied, Expired, Unavailable, and Unknown.',
  },
  {
    title: 'Captions & Accessibility',
    description:
      'W3C-compliant accessible playback controls handle secure subtitle and multi-language track delivery.',
  },
  {
    title: 'Device & Browser Matrix',
    description:
      'Ensures high performance across desktop Safari/Chrome, native iOS, Android, and smart TV environments.',
  },
  {
    title: 'Privacy-Safe Analytics',
    description:
      'Emits telemetry logs for QoS monitoring without transmitting personally identifiable viewer metrics.',
  },
];

const EMBED: Item[] = [
  {
    title: 'Embed Model',
    description:
      'Encapsulates players inside sandboxed iframe wrappers to isolate scripts from the host website.',
  },
  {
    title: 'Origin/Domain Policy',
    description:
      'Binds decryption authorities strictly to whitelisted domain groups to mitigate hotlinking attempts.',
  },
  {
    title: 'Cross-Site Behavior',
    description:
      'Maintains clean compatibility with evolving browser Cookie policies and SameSite strict attributes.',
  },
  {
    title: 'Application Identity',
    description:
      'Hosts can verify corporate origin context before invoking specialized video capabilities.',
  },
  {
    title: 'Programmatic State Error',
    description:
      'Graceful event emitters allow external client applications to handle authorization failures programmatically.',
  },
  {
    title: 'Leak Protection',
    description:
      'Secures embed URLs and metadata handshakes to prevent open redirect vulnerabilities and token harvesting.',
  },
];

const COLUMNS = [
  { heading: 'Player Integration Contract', items: CONTRACT, useShield: false },
  { heading: 'Embed & Origin Context', items: EMBED, useShield: true },
];

export default function PlayerIntegrationSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <img
        src="/images/platform-secure-playback/player-integration-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Player Integration &amp; Embed Context
          </h2>
          <p className="max-w-4xl text-base leading-6 text-slate-600">
            Secure Playback owns the authorization boundary; Player Integration owns
            maintained implementation.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {COLUMNS.map((column) => (
            <div
              key={column.heading}
              className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
            >
              <h3 className="text-xl font-bold leading-7 text-slate-900">
                {column.heading}
              </h3>

              <ul className="flex flex-col gap-4">
                {column.items.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    {column.useShield ? (
                      <Shield
                        className="mt-0.5 size-5 shrink-0 text-blue-500"
                        strokeWidth={2}
                      />
                    ) : (
                      <ChevronRight
                        className="mt-0.5 size-5 shrink-0 text-teal-400"
                        strokeWidth={2}
                      />
                    )}

                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900">
                        {item.title}
                      </span>
                      <span className="mt-1 text-sm leading-6 text-slate-600">
                        {item.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
