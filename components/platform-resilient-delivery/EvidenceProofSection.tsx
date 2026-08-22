'use client';

import SectionShell from './SectionShell';

interface EvidenceRecord {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const RECORDS: EvidenceRecord[] = [
  {
    image: '/images/platform-resilient-delivery/evidence-condition-record.png',
    alt: 'Data audit log rows',
    title: 'Condition record',
    description:
      'Object/scope, failure family, source, observation time, freshness, impact, uncertainty.',
  },
  {
    image: '/images/platform-resilient-delivery/evidence-decision-record.png',
    alt: 'Glowing approval checkmarks',
    title: 'Decision record',
    description:
      'Decision type, actor/authority, applicable policy, rationale category, time.',
  },
  {
    image: '/images/platform-resilient-delivery/evidence-action-record.png',
    alt: 'System logs action record dashboard',
    title: 'Action record',
    description:
      'Request ID, target, action class, actor, authorization, state, start/end.',
  },
  {
    image: '/images/platform-resilient-delivery/evidence-verification-record.png',
    alt: 'Verified shield on a circuit board',
    title: 'Verification record',
    description: 'Method, source, time, result, scope, residual limitation.',
  },
  {
    image: '/images/platform-resilient-delivery/evidence-communication-record.png',
    alt: 'Digital envelope representing notifications',
    title: 'Communication record',
    description:
      'Authority/channel, public/private scope, reference, update time.',
  },
  {
    image: '/images/platform-resilient-delivery/evidence-change-history.png',
    alt: 'Branching change history graph',
    title: 'Change history',
    description:
      'Superseded/rolled-back actions, evidence changes, review events.',
  },
];

export default function EvidenceProofSection() {
  return (
    <SectionShell
      tone="dark"
      background="/images/platform-resilient-delivery/evidence-proof-bg.png"
      title="Evidence, auditability, and recovery proof"
      subtitle="A recovery claim must be reconstructable from source state through action to verified outcome."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {RECORDS.map((record) => (
          <article
            key={record.title}
            className="flex flex-col overflow-hidden rounded-xl bg-zinc-900/80 outline-1 -outline-offset-1 outline-gray-800"
          >
            <img
              src={record.image}
              alt={record.alt}
              className="h-44 w-full object-cover"
            />

            <div className="flex flex-1 flex-col gap-3 p-6">
              <h3 className="text-lg font-bold text-white">{record.title}</h3>
              <p className="text-sm leading-5 text-slate-400">
                {record.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
