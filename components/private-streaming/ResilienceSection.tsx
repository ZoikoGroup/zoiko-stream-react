type ReadinessTone = 'verified' | 'pending' | 'review' | 'blocked' | 'degraded';

interface ReadinessState {
  title: string;
  description: string;
  badge: string;
  tone: ReadinessTone;
}

const readinessStates: ReadinessState[] = [
  {
    title: 'Verified current',
    description: 'No changes detected.',
    badge: 'Verified',
    tone: 'verified',
  },
  {
    title: 'Changed since verification',
    description: 'Re-verification required.',
    badge: 'Pending',
    tone: 'pending',
  },
  {
    title: 'Needs review',
    description: 'Incomplete brief state.',
    badge: 'Review',
    tone: 'review',
  },
  {
    title: 'Blocked',
    description: 'System error or loop.',
    badge: 'Blocked',
    tone: 'blocked',
  },
  {
    title: 'Degraded',
    description: 'Network fallback active.',
    badge: 'Degraded',
    tone: 'degraded',
  },
];

const dotStyles: Record<ReadinessTone, string> = {
  verified: 'bg-emerald-500',
  pending: 'bg-orange-300',
  review: 'bg-blue-500',
  blocked: 'bg-red-500',
  degraded: 'bg-orange-400',
};

const badgeStyles: Record<ReadinessTone, string> = {
  verified: 'bg-emerald-500/10 text-emerald-500',
  pending: 'bg-orange-300/10 text-orange-300',
  review: 'bg-blue-500/10 text-blue-400',
  blocked: 'bg-red-500/10 text-red-500',
  degraded: 'bg-orange-400/10 text-orange-400',
};

export default function ResilienceSection() {
  return (
    <section
      className="w-full bg-zinc-950 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14"
      style={{
        backgroundImage: `linear-gradient(rgba(9, 9, 11, 0.3), rgba(9, 9, 11, 0.3)), url('/images/private-streaming/resilience-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight">
          Changed since verification is not a failure. It is a fact.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Material changes trigger targeted revalidation &mdash; not panic.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl p-6 bg-zinc-900/60 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-5">
        <h3 className="text-slate-100 text-base font-bold">
          Redundancy &amp; Failover Readiness States
        </h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {readinessStates.map((state) => (
            <article
              key={state.title}
              className="p-4 bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-3"
            >
              <div className="w-full flex justify-between items-center gap-2">
                <span className={`w-2 h-2 rounded-full shrink-0 ${dotStyles[state.tone]}`} />
                <span
                  className={`px-2 py-0.5 rounded-sm text-[10px] font-bold ${badgeStyles[state.tone]}`}
                >
                  {state.badge}
                </span>
              </div>
              <h4 className="text-slate-100 text-sm font-bold">{state.title}</h4>
              <p className="text-slate-400 text-xs">{state.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl p-5 bg-emerald-500/5 rounded-xl outline outline-1 outline-offset-[-1px] outline-emerald-500/40 flex items-start sm:items-center gap-4">
        <span className="w-9 h-9 shrink-0 bg-teal-400/10 rounded-lg outline outline-1 outline-offset-[-1px] outline-teal-400/25 flex justify-center items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/private-streaming/life-buoy.svg"
            alt=""
            aria-hidden
            className="w-[18px] h-[18px]"
          />
        </span>
        <div className="flex flex-col gap-1">
          <h3 className="text-slate-100 text-base font-bold">
            Continuous NOC Monitoring &amp; Operations Support
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            Active events route directly to dedicated on-call network engineers, not sales queues or
            standard helpdesks.
          </p>
        </div>
      </div>
    </section>
  );
}
