import React from 'react';
import Image from 'next/image';

const endpointCards = [
  {
    title: 'REST Endpoint',
    badge: 'VERIFIED',
    badgeCls: 'bg-emerald-500/10 text-emerald-500',
    desc: 'Synchronous payload queries with parameter filtering',
    format: 'HTTPS POST Application/JSON',
    metrics: [
      'Raw concurrent views telemetry',
      'Playback failure beacon matches',
      'Geo-location IP mapping fields',
      'Instant aggregate values',
    ],
    btn: 'REST Docs →',
    img: '/images/developer-analytics-api/card-visual.png',
  },
  {
    title: 'GraphQL Gateway',
    badge: 'VERIFIED WITH CONDITIONS',
    badgeCls: 'bg-amber-500/10 text-amber-500',
    desc: 'Graph-based queries to inspect complex dimensions',
    format: 'POST GraphQL Document',
    metrics: [
      'Multi-dimension segment trees',
      'QoS historical telemetry traces',
      'Client software matrix records',
      'Interactive diagnostic outputs',
    ],
    btn: 'GraphQL Docs →',
    img: '/images/developer-analytics-api/card-visual (1).png',
  },
  {
    title: 'Webhook Ingest',
    badge: 'VERIFIED',
    badgeCls: 'bg-emerald-500/10 text-emerald-500',
    desc: 'Event-triggered telemetry streams for offline analytics pipelines',
    format: 'System-wide HTTP POST dispatch',
    metrics: [
      'Real-time stream heartbeat indicators',
      'Playback session start/end signals',
      'Error and failure alerts',
      'Archival cold-storage updates',
    ],
    btn: 'Webhook Specs →',
    img: '/images/developer-analytics-api/card-visual (2).png',
  },
];

export function QueryVerifiedTechnicalEndpointsSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-900/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-analytics-api/bg (17).png"
          alt="Query Verified Technical Endpoints Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0  " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Query verified technical endpoints
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Select the analytical path that fits your client integration style.
          </p>
        </div>

        {/* Filter Bar Box */}
        <div className="w-full p-6 bg-gray-800 rounded-xl border border-gray-800 flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-base font-normal">
              Filter query endpoints by connection client...
            </span>
            <span className="text-teal-400 text-sm font-bold  ">
              3 VERIFIED ENDPOINTS ACTIVE
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-2 bg-teal-400 rounded-full text-slate-950 text-xs font-bold  ">
              All REST &amp; GraphQL
            </span>
            <span className="px-3.5 py-2 bg-gray-800 rounded-full border border-gray-700 text-slate-400 text-xs font-bold  ">
              Source: Mobile SDK
            </span>
            <span className="px-3.5 py-2 bg-gray-800 rounded-full border border-gray-700 text-slate-400 text-xs font-bold  ">
              Uptime Target: 99.999%
            </span>
            <span className="px-3.5 py-2 bg-gray-800 rounded-full border border-gray-700 text-slate-400 text-xs font-bold  ">
              TLS Encryption Only
            </span>
          </div>
        </div>

        {/* 3 Endpoints Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {endpointCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-2xl border border-gray-800 flex flex-col justify-between overflow-hidden shadow-xl"
            >
              <div className="w-full h-36 relative bg-slate-900">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>

              <div className="p-6 flex flex-col gap-5 flex-1 justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white text-2xl font-bold  ">{card.title}</h3>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold   ${card.badgeCls}`}>
                      {card.badge}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-5">{card.desc}</p>

                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-teal-400 font-bold  ">FORMAT:</span>
                    <span className="text-white">{card.format}</span>
                  </div>

                  <div className="pt-4 border-t border-gray-800 flex flex-col gap-2.5">
                    <span className="text-slate-400 text-xs font-bold   tracking-wide">
                      KEY METRICS COVERED
                    </span>
                    {card.metrics.map((m, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-teal-400 text-xs">✓</span>
                        <span className="text-slate-400 text-xs">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-4 py-2.5 rounded-lg border border-gray-700 text-white font-bold   text-center cursor-pointer hover:border-white transition-colors">
                  {card.btn}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
