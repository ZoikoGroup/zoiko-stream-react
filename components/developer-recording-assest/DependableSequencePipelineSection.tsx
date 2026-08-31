import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const steps = [
  {
    num: '1',
    title: 'Identify the Asset',
    desc: 'Resolve the unique `asset_id` assigned at live stream initialization.',
    badge: 'SDK ENGINE',
  },
  {
    num: '2',
    title: 'Retrieve Current State',
    desc: 'Call `GET /v1/assets/:id` to fetch modern status, metadata, and properties.',
    badge: 'GET /v1/assets/:id',
  },
  {
    num: '3',
    title: 'Check Intended Capability',
    desc: 'Validate that target actions match the asset state (e.g., must be READY to play).',
    badge: 'SDK ENGINE',
  },
  {
    num: '4',
    title: 'Perform One Mutation',
    desc: 'Trigger safe state updates using payload parameters (e.g., append tags, update metadata).',
    badge: 'PATCH /v1/assets/:id',
  },
  {
    num: '5',
    title: 'Reconcile Response',
    desc: 'Inspect engine schema response for structural errors or validation failures.',
    badge: 'SDK ENGINE',
  },
  {
    num: '6',
    title: 'Observe Completion',
    desc: 'Listen for downstream `asset.recording.ready` webhook events to confirm tasks.',
    badge: 'SDK ENGINE',
  },
  {
    num: '7',
    title: 'Handle Unknown Outcomes',
    desc: 'Implement exponential retry loops to catch transient server-side network timeouts.',
    badge: 'SDK ENGINE',
  },
  {
    num: '8',
    title: 'Operationalize',
    desc: 'Mount resolved playback URLs inside production client players.',
    badge: 'SDK ENGINE',
  },
];

export function DependableSequencePipelineSection() {
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
          <h2 className="text-slate-950 text-3xl lg:text-4xl font-bold leading-tight">
            A dependable sequence from identification to operation.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Integrate video operations into your software core. Our step-by-step developer implementation pipeline avoids common state desynchronization bugs.
          </p>
        </div>

        {/* 8 Step Pipeline List */}
        <div className="w-full flex flex-col gap-4">
          {steps.map((st, idx) => (
            <div key={idx} className="w-full flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-white border-2 border-teal-400 flex items-center justify-center shrink-0 shadow-xs">
                <span className="text-slate-900 text-base font-bold">{st.num}</span>
              </div>
              <div className="flex-1 p-5 bg-slate-50 rounded-2xl border border-gray-200 flex items-center justify-between gap-4 shadow-xs">
                <div className="flex flex-col gap-1">
                  <h3 className="text-slate-900 text-base font-bold">{st.title}</h3>
                  <p className="text-slate-600 text-sm leading-5">{st.desc}</p>
                </div>
                <div className="px-2.5 py-1 bg-teal-400/10 rounded text-teal-400 text-xs font-mono shrink-0">
                  {st.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
