import React from 'react';
import { Check } from 'lucide-react';

interface CapabilityCard {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
}

const cards: CapabilityCard[] = [
  {
    eyebrow: 'AUTOMATED FLOW',
    title: 'SDK Handles Automatically',
    description: 'Primary connection lifecycle, network reconnection buffers, local camera state handling, and client speech-to-text live subtitle queues.',
    items: [
      'Stream state auto-recovery',
      'Local WebRTC peer binding',
      'Transcoding negotiation',
      'Telemetry dispatch',
    ],
  },
  {
    eyebrow: 'REST CONTROL',
    title: 'Direct API Required',
    description: 'User management permissions, billing webhook registrations, custom streaming keys generation, and backend server analytics queries.',
    items: [
      'Access control arrays',
      'Platform webhook endpoints',
      'Billing tier changes',
      'Post-stream analysis',
    ],
  },
  {
    eyebrow: 'RAW TRANSIT',
    title: 'Protocol Layer Custom',
    description: 'Incorporate direct raw WebSocket payloads for game-engine integrations, hardware RTMP encoders, and low-level Edge SIP triggers.',
    items: [
      'Custom UDP payload transit',
      'Edge signaling overrides',
      'RTMP server binding',
      'SIP dial-in bridges',
    ],
  },
];

export default function CapabilityCoverageSection() {
  return (
    <section className="relative w-full flex flex-col gap-12 items-start overflow-hidden bg-[#0a0f1a] px-6 py-16 md:px-[112px] md:py-[100px]">

      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/sdks/capability-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,15,26,0.35)]" />
      </div>

      <div className="relative z-10 flex flex-col gap-4 items-start w-full">
        <h2 className="font-bold text-[#eef1f6] text-3xl sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px]">
          What the SDK covers
        </h2>
        <p className="text-[#aab3c4] text-base sm:text-[18px] leading-[1.4] sm:leading-[28.8px]">
          Decide where the client SDK manages the local operations automatically versus when direct REST/WebSocket calls should be leveraged.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {cards.map((card) => (
          <div
            key={card.eyebrow}
            className="flex flex-col gap-4 items-start p-7 rounded-2xl border border-[#232b3a] bg-[rgba(16,21,30,0.8)]"
          >
            <p className="font-mono font-bold text-[#34d4ca] text-[11px] tracking-[0.5px] whitespace-nowrap">
              {card.eyebrow}
            </p>
            <p className="font-bold text-[#eef1f6] text-lg whitespace-nowrap">{card.title}</p>
            <p className="text-[#aab3c4] text-[13px] leading-[20px]">{card.description}</p>

            <div className="flex flex-col gap-2.5 items-start w-full pt-3">
              {card.items.map((item) => (
                <div key={item} className="flex gap-2 items-center">
                  <Check className="size-3.5 text-[#34d4ca] shrink-0" strokeWidth={2.5} />
                  <p className="text-[#eef1f6] text-[13px] whitespace-nowrap">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center w-full">
        <a
          href="/docs/api"
          className="flex items-center justify-center px-7 py-3.5 rounded-[10px] border border-[#aab3c4] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
        >
          <span className="font-medium text-[#eef1f6] text-[15px] whitespace-nowrap">
            Explore Video APIs
          </span>
        </a>
      </div>

    </section>
  );
}
