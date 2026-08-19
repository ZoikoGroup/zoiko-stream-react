import Image from 'next/image';

const cards = [
  {
    title: 'Monitoring',
    image: '/images/platform-media-operations-overview/CapImg (6).png',
    desc: 'State observation, metric definitions, signal events, health summaries, dependency status, trend analysis.',
    footer: 'Observation reports what is known in context.',
    color: 'text-blue-500',
  },
  {
    title: 'Alerting',
    image: '/images/platform-media-operations-overview/CapImg (7).png',
    desc: 'Condition detection, severity basis, freshness rules, recipient routing, acknowledgement, suppression/snooze policy.',
    footer: 'Optimize for actionable ownership, not volume.',
    color: 'text-teal-400',
  },
  {
    title: 'Escalation',
    image: '/images/platform-media-operations-overview/CapImg (8).png',
    desc: 'Incident linkage, status communication, support routing, evidence preservation, audience-safe messaging.',
    footer: 'No invented response time.',
    color: 'text-slate-400',
  },
];

export default function ObserveAlertEscalateSection() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 bg-slate-950/75 border-b border-slate-700 flex flex-col gap-14 overflow-hidden">
      <div className="flex flex-col gap-3">
        <h2 className="text-slate-50 text-3xl sm:text-4xl font-bold leading-tight font-['Space_Grotesk']">
          Observe, alert, and escalate
        </h2>
        <p className="text-slate-400 text-lg font-normal leading-7 font-['Space_Grotesk']">
          Separate monitoring from alerting from escalation
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-slate-900 rounded-2xl border border-slate-700 flex flex-col overflow-hidden"
          >
            <div className="relative w-full h-40">
              <Image src={card.image} alt={card.title} fill className="object-cover" />
            </div>
            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 relative flex items-center justify-center">
                  <span className={`w-3.5 h-3.5 border-2 rounded-sm border-current ${card.color}`} />
                </span>
                <p className="text-slate-50 text-base font-bold font-['Space_Grotesk']">
                  {card.title}
                </p>
              </div>
              <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-5">
                {card.desc}
              </p>
              <div className="border-t border-slate-700" />
              <p className="text-slate-400 text-xs font-bold font-['Space_Grotesk']">
                {card.footer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
