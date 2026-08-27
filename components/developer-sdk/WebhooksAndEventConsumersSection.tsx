import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const webhookRows = [
  {
    dim: 'Security & Signature',
    spec: 'HMAC-SHA256 signature passed in the header payload.',
    helper: 'client.webhooks.verifySignature(body, headerSig)',
    resp: 'Inject secret securely and reject unsigned requests.',
  },
  {
    dim: 'Event Schema Typings',
    spec: 'Structured JSON object containing target resource payload.',
    helper: 'Strongly typed event models representing schema.',
    resp: 'Handle serialization correctly according to target model.',
  },
  {
    dim: 'Delivery Semantics',
    spec: 'At-least-once delivery with exponential retry policy.',
    helper: '- (Relies on platform retry engine)',
    resp: 'Implement idempotency check using unique event IDs.',
  },
  {
    dim: 'Business Flow State',
    spec: 'Decoupled event emission when status moves to completed.',
    helper: '- (Decoupled system architecture)',
    resp: 'Ensure complete database isolation before status updates.',
  },
];

export function WebhooksAndEventConsumersSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight">
            Webhooks and event consumers — SDK helpers without contract drift.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Understand the clear boundary between the SDK helper utility and your application-level state machine.
          </p>
        </div>

        {/* Webhook Table */}
        <div className="w-full p-6 bg-white rounded-2xl border border-gray-200 flex flex-col overflow-hidden shadow-sm">
          <div className="p-4 bg-slate-50 border-b-2 border-gray-200 grid grid-cols-12 text-xs font-bold font-mono text-slate-900">
            <div className="col-span-3">Event Dimension</div>
            <div className="col-span-3">Webhook Contract Specification</div>
            <div className="col-span-3">SDK Verification Helper</div>
            <div className="col-span-3">Application Responsibility</div>
          </div>

          <div className="divide-y divide-gray-200">
            {webhookRows.map((row, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 text-xs items-center">
                <div className="col-span-3 font-bold font-mono text-slate-900">{row.dim}</div>
                <div className="col-span-3 text-slate-600">{row.spec}</div>
                <div className="col-span-3 font-mono text-slate-600">{row.helper}</div>
                <div className="col-span-3 text-slate-600">{row.resp}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
