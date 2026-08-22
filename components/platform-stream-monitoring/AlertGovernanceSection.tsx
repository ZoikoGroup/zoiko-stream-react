import React from 'react';
import TopoBackground from './TopoBackground';

const columns = [
  {
    title: 'Alert Governance',
    badge: 'GOVERNED',
    badgeColor: '#4c86ff',
    cards: [
      {
        title: '01. Condition Trigger Rules',
        description:
          'Evaluates boolean states (e.g. Sync-Match, Track Decay) against explicit operational bounds. If limits are violated over an epoch, transitions to Active.',
        footLabel: 'RULE LIMIT:',
        footValue: 'MAX 30S DRIFT',
        footColor: '#ef4444',
      },
      {
        title: '02. Acknowledge & Suppress',
        description:
          'Allows on-call engineers to register temporary suppression. Auto-escalates back to P1 if health metrics do not return to nominal states after 15m.',
        footLabel: 'MUTED BOUNDARY:',
        footValue: 'MAX 15 MINUTES',
        footColor: '#00d4aa',
      },
      {
        title: '03. Multi-Channel Escalation',
        description:
          'When alerts breach acknowledged SLAs, signals automatically cascade through Webhook and SAML-verified notification queues to secondary support teams.',
        footLabel: 'SLA ESCALATION:',
        footValue: 'P1 CASCADE INSTANT',
        footColor: '#f59e0b',
      },
    ],
  },
  {
    title: 'Incident Context',
    badge: 'BOUNDARIES',
    badgeColor: '#f59e0b',
    cards: [
      {
        title: '04. Known Impact Mapping',
        description:
          'Quantifies exact viewer and SLA degradation patterns in real-time. Immediately isolates the incident to a specific geographical edge or workflow zone.',
        footLabel: 'AFFECTED SCOPE:',
        footValue: 'REGION US-EAST-1',
        footColor: '#ef4444',
      },
      {
        title: '05. Active Investigation Logs',
        description:
          'Stores diagnostic snapshots from edge proxies. Preserves timeline integrity across failovers to prevent post-incident evidence corruption.',
        footLabel: 'SNAP HASH:',
        footValue: 'SHA-256 / 4D8E9F',
        footColor: '#4c86ff',
      },
      {
        title: '06. Incident Closure & Review',
        description:
          'Enforces formal post-incident review requirements. Resolving owner must document actions and attach verified telemetry before closing the ticket.',
        footLabel: 'MANDATE:',
        footValue: 'EVIDENCE REQUIRED',
        footColor: '#00d4aa',
      },
    ],
  },
  {
    title: 'Diagnostics Safety',
    badge: 'SAFE',
    badgeColor: '#00d4aa',
    cards: [
      {
        title: '07. Contributive Correlation',
        description:
          'Correlates platform standard out and network latency metrics to rule out ISP anomalies before blaming transcoder resource allocations.',
        footLabel: 'CLAIMS PROHIBITED:',
        footValue: 'NO UNVERIFIED BLAME',
        footColor: '#ef4444',
      },
      {
        title: '08. Dependency Alignment',
        description:
          'Queries global upstream status APIs instantly. Prevents false positive alerts when core cloud region outages block live stream transcode paths.',
        footLabel: 'MONITOR BYPASS:',
        footValue: 'ACTIVE AT EGRESS',
        footColor: '#00d4aa',
      },
      {
        title: '09. Verified Root Cause',
        description:
          'Pushes compiled diagnosis payloads directly to engineering sandboxes, letting teams reproduce the specific track failure under absolute safety.',
        footLabel: 'REPLICATION UNIT:',
        footValue: 'SANDBOX SAND-09',
        footColor: '#4c86ff',
      },
    ],
  },
];

export default function AlertGovernanceSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-20 md:px-[112px] md:py-24">
      <TopoBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="max-w-[900px] text-3xl font-bold leading-[1.2] tracking-[-0.4px] text-[#0d1117] md:text-[37.9px] md:leading-[48px]">
            Alert governance, incident boundaries, and evidence-led diagnostics
          </h2>
          <p className="text-base text-[#475569] md:text-[18px] md:leading-7">
            Separate condition, alert, acknowledgement, escalation, and root-cause limits.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-5">
              <div className="flex items-center gap-3 border-b border-[#e2e8f0] pb-4">
                <h3 className="text-xl font-bold text-[#0d1117]">{column.title}</h3>
                <span
                  className="rounded-sm px-2 py-[3px] text-[10px] font-bold tracking-[0.5px]"
                  style={{ color: column.badgeColor, backgroundColor: `${column.badgeColor}1a` }}
                >
                  {column.badge}
                </span>
              </div>

              {column.cards.map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col gap-3 rounded-xl border border-[#e2e8f0] bg-white p-5"
                >
                  <h4 className="text-sm font-bold text-[#0d1117]">{card.title}</h4>
                  <p className="text-[12px] leading-[1.5] text-[#475569]">{card.description}</p>
                  <span className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-[10px] font-bold tracking-[0.5px] text-[#64748b]">
                      {card.footLabel}
                    </span>
                    <span
                      className="text-[10px] font-bold tracking-[0.5px]"
                      style={{ color: card.footColor }}
                    >
                      {card.footValue}
                    </span>
                  </span>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
