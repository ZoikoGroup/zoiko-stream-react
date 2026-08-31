import React from 'react';
import Image from 'next/image';

const snippet1 = `{
  "webhook_version": "2026-03-20",
  "monitored_events": [
    "asset.recording.ready",
    "asset.record.failed"
  ]
}`;

const snippet2 = `{
  "event_id": "evt_7728ac91",
  "event": "asset.recording.ready",
  "duration_sec": 3605.12,
  "manifest_url": "https://cdn.zoik..."
}`;

const snippet3 = `• HMAC SHA-256 Signatures
• Exponential backoff (5 retries)
• 15-second response timeouts
• Idempotency key tracking`;

export function AutomateAssetWorkflowsSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Recording-assest/bg (13).png"
          alt="Automate Asset Workflows Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Automate asset workflows with event-driven pipelines.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Webhooks trigger instantly upon asset state transitions. Coupled with deterministic delivery contracts, your application syncs asset status without polling.
          </p>
        </div>

        {/* 3 Webhook Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Event Chooser */}
          <div className="bg-zinc-900/80 rounded-2xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-xl backdrop-blur-md">
            <div className="w-full h-36 relative bg-slate-900">
              <Image
                src="/images/Recording-assest/card-image (11).png"
                alt="Event Chooser"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col gap-4 flex-1">
              <h3 className="text-white text-lg font-bold">Event Chooser</h3>
              <p className="text-slate-400 text-sm leading-5">
                Configure event-driven pipeline subscriptions inside your developer portal settings.
              </p>
              <div className="p-4 bg-gray-950 rounded-lg border border-gray-800 text-teal-400 text-xs leading-5 font-mono overflow-x-auto">
                <pre>{snippet1}</pre>
              </div>
            </div>
          </div>

          {/* Card 2: Schema Preview */}
          <div className="bg-zinc-900/80 rounded-2xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-xl backdrop-blur-md">
            <div className="w-full h-36 relative bg-slate-900">
              <Image
                src="/images/Recording-assest/card-image (12).png"
                alt="Schema Preview"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col gap-4 flex-1">
              <h3 className="text-white text-lg font-bold">Schema Preview</h3>
              <p className="text-slate-400 text-sm leading-5">
                Source-generated schemas avoid drift by coupling delivery types to operational logic.
              </p>
              <div className="p-4 bg-gray-950 rounded-lg border border-gray-800 text-teal-400 text-xs leading-5 font-mono overflow-x-auto">
                <pre>{snippet2}</pre>
              </div>
            </div>
          </div>

          {/* Card 3: Delivery Contract */}
          <div className="bg-zinc-900/80 rounded-2xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-xl backdrop-blur-md">
            <div className="w-full h-36 relative bg-slate-900">
              <Image
                src="/images/Recording-assest/card-image (13).png"
                alt="Delivery Contract"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col gap-4 flex-1">
              <h3 className="text-white text-lg font-bold">Delivery Contract</h3>
              <p className="text-slate-400 text-sm leading-5">
                Unordered streams require idempotent handling. Standard guarantees enforce reliable state sync.
              </p>
              <div className="p-4 bg-gray-950 rounded-lg border border-gray-800 text-teal-400 text-xs leading-5 overflow-x-auto">
                <pre className="whitespace-pre-wrap">{snippet3}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
