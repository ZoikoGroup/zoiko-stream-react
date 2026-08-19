type StepTone = 'neutral' | 'cyan' | 'blue' | 'teal' | 'resolved';

interface PathwayStep {
  step: string;
  title: string;
  description: string;
  tone: StepTone;
}

// Label colour progresses grey -> cyan -> blue -> teal -> green, with the
// resolved step also carrying a green outline (per the Figma design).
const stepLabelStyles: Record<StepTone, string> = {
  neutral: 'text-slate-400',
  cyan: 'text-cyan-400',
  blue: 'text-blue-400',
  teal: 'text-teal-400',
  resolved: 'text-emerald-400',
};

interface SupportCard {
  title: string;
  description: string;
  image: string;
}

const steps: PathwayStep[] = [
  {
    step: 'STEP 01',
    title: 'Viewer Report',
    description: 'Issue flagged in player overlay',
    tone: 'neutral',
  },
  {
    step: 'STEP 02',
    title: 'A11y Triage',
    description: 'System maps active context',
    tone: 'cyan',
  },
  {
    step: 'STEP 03',
    title: 'Ops Escalation',
    description: 'Routed to on-duty L2 team',
    tone: 'blue',
  },
  {
    step: 'STEP 04',
    title: 'Recovery Action',
    description: 'Fallback pipeline deployed',
    tone: 'teal',
  },
  {
    step: 'STEP 05',
    title: 'Status Logged',
    description: 'Viewer confirmed resolved',
    tone: 'resolved',
  },
];

const supportCards: SupportCard[] = [
  {
    title: 'Dedicated Routing',
    description:
      'Accessibility failures instantly bypass standard marketing or sales queues. Direct priority streams reach senior engineers within seconds.',
    image: '/images/accessibility-inclusion/card-dedicated-routing.png',
  },
  {
    title: 'Event Context',
    description:
      'Ops sees active player session metrics, accessibility config parameters, and registered limitations instantly to eliminate discovery lag.',
    image: '/images/accessibility-inclusion/card-event-context.png',
  },
  {
    title: 'Recovery States',
    description:
      'Monitor status phases — Degraded, Recovering, or Resolved — clearly logged and accessible to viewers during active live transmissions.',
    image: '/images/accessibility-inclusion/card-recovery-states.png',
  },
];

export default function LiveSupportSection() {
  return (
    <section
      className="w-full bg-neutral-900 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14"
      style={{
        backgroundImage: `linear-gradient(rgba(3, 7, 18, 0.2), rgba(3, 7, 18, 0.2)), url('/images/accessibility-inclusion/live-support-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight">
          Active-event accessibility issues route to operations, not Sales.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Dedicated issue routing for live accessibility failures with event/session context and
          urgency.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl p-5 sm:p-6 bg-zinc-950/70 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-5">
        <h3 className="text-teal-400 text-xs font-bold uppercase tracking-wider">
          Accessibility Recovery Pathway
        </h3>
        <ol className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {steps.map((item) => (
            <li
              key={item.step}
              className={`p-4 bg-gray-900/60 rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col gap-1.5 ${
                item.tone === 'resolved' ? 'outline-emerald-500' : 'outline-gray-800'
              }`}
            >
              <span
                className={`text-[10px] font-bold uppercase tracking-wider ${stepLabelStyles[item.tone]}`}
              >
                {item.step}
              </span>
              <span className="text-slate-100 text-sm font-bold">{item.title}</span>
              <span className="text-slate-400 text-xs">{item.description}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {supportCards.map((card) => (
          <article
            key={card.title}
            className="bg-zinc-950/70 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 overflow-hidden flex flex-col"
          >
            <div
              className="h-40 w-full bg-gray-950 bg-cover bg-center"
              style={{ backgroundImage: `url('${card.image}')` }}
              role="presentation"
            />
            <div className="p-5 flex flex-col gap-2.5">
              <h3 className="text-slate-100 text-lg font-bold">{card.title}</h3>
              <p className="text-slate-400 text-xs leading-5">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
