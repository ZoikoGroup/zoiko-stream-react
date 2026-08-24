import React from 'react';
import Image from 'next/image';

import bg160 from '@/public/images/Developers-product-teams/bg (160).png';

const states = [
  { name: 'Requested', desc: 'Intent committed to ledger' },
  { name: 'Accepted', desc: 'Request schema validated' },
  { name: 'Pending', desc: 'Asynchronous processing loop active' },
  { name: 'Complete', desc: 'Execution finished successfully' },
  { name: 'Partial', desc: 'Some stream fragments failed' },
  { name: 'Failed', desc: 'Recoverable processing fault occurred' },
  { name: 'Unknown', desc: 'Lost transport heartbeat acknowledgement' },
  { name: 'Duplicate', desc: 'Request ignored via idempotency check' },
  { name: 'Delayed', desc: 'Queue backpressure latency offset' },
  { name: 'Recovered', desc: 'Self-healing state mechanism executed' },
  { name: 'Superseded', desc: 'Deprecated by newer client payload' },
];

export default function ProductionIntegrationStatesSection() {
  return (
    <section className="relative w-full bg-slate-950/75 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg160}
          alt="Production Integration States Background"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-3xl font-bold font-['Space_Grotesk'] text-white leading-tight">
            Production integrations have more states than success and error
          </h2>
          <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-relaxed max-w-6xl">
            Design application behavior for asynchronous work, delayed events, duplicates, partial completion, unknown outcomes, retries and recovery.
          </p>
        </div>

        {/* State Dictionary Box */}
        <div className="p-7 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-6">
          <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk'] tracking-wide uppercase">
            STATE DICTIONARY &amp; FLOW MATRIX
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {states.map((st, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-gray-800 rounded-lg border border-teal-400/30 flex flex-col gap-1"
              >
                <div className="flex items-center gap-2">
                  <div className="size-1.5 bg-teal-400 rounded-full" />
                  <span className="text-white text-sm font-bold font-['Space_Grotesk']">
                    {st.name}
                  </span>
                </div>
                <span className="text-slate-400 text-xs font-normal font-['Inter']">
                  {st.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-zinc-900/80 rounded-xl border border-gray-800 backdrop-blur-md flex flex-col gap-5">
            <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
              Idempotency safety lock
            </h3>
            <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
              Every write command requires an <span className="text-teal-400 font-semibold">Idempotency-Key</span>. Duplicate execution requests trigger safe 200 responses returning the cached original payload outcome instead of processing redundant media tasks.
            </p>
          </div>

          <div className="p-8 bg-zinc-900/80 rounded-xl border border-gray-800 backdrop-blur-md flex flex-col gap-5">
            <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
              Deterministic events lifecycle
            </h3>
            <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
              Separate event occurrence from delivery tracking. The platform distinguishes <span className="text-teal-400 font-semibold">Occurrence</span> vs <span className="text-teal-400 font-semibold">Subscription Matches</span> vs <span className="text-teal-400 font-semibold">Payload Delivery Attempt Logs</span> with custom retry backoffs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
