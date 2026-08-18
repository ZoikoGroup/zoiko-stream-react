import Link from 'next/link';

interface BriefField {
  label: string;
  value: string;
}

const briefFields: BriefField[] = [
  { label: 'Event basics', value: 'Tech Summit 2026' },
  { label: 'Private-room intent', value: 'Internal Board Briefing' },
  { label: 'Audience range', value: '50 - 200 participants' },
  { label: 'Access window', value: 'March 20, 13:00 - 15:00 UTC' },
  { label: 'Accessibility needs', value: 'Live captions + Sign relay' },
  { label: 'Resilience/support', value: 'Dual hot-backup ingest points' },
  { label: 'Recording/replay', value: 'Secure archival requested' },
  { label: 'Contact email', value: 'ops@corporation.com' },
];

export default function PlanningBriefSection() {
  return (
    <section
      className="w-full bg-zinc-950 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14"
      style={{
        backgroundImage: `linear-gradient(rgba(9, 9, 11, 0.45), rgba(9, 9, 11, 0.45)), url('/images/private-streaming/planning-brief-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight">
          Your private room starts with a planning brief.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Minimum-data inquiry. No guest lists. No credentials. No instant booking.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl flex flex-col lg:flex-row items-start gap-6">
        <div className="flex-1 w-full p-6 sm:p-8 bg-zinc-900/70 backdrop-blur-sm rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-5">
          <h3 className="text-slate-100 text-base font-bold">Interactive Planning Brief</h3>

          <div className="w-full flex flex-col gap-4">
            {briefFields.map((field) => (
              <div key={field.label} className="w-full flex flex-col gap-2">
                <span className="text-slate-500 text-xs">{field.label}</span>
                <div className="w-full px-4 py-3.5 bg-zinc-950/80 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800">
                  <span className="text-slate-300 text-sm">{field.value}</span>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/plan-a-live-event"
            className="w-full px-6 py-3.5 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 text-slate-950 text-sm font-bold text-center hover:opacity-90 transition-opacity"
          >
            Start your event brief
          </Link>

          <p className="text-slate-500 text-xs">
            Submitting creates a planning inquiry, not a confirmed booking.
          </p>
        </div>

        <aside className="w-full lg:w-96 shrink-0 p-6 bg-zinc-900/70 backdrop-blur-sm rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-4">
          <span className="w-9 h-9 bg-teal-400/10 rounded-lg outline outline-1 outline-offset-[-1px] outline-teal-400/25 flex justify-center items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/private-streaming/file-text.svg"
              alt=""
              aria-hidden
              className="w-[18px] h-[18px]"
            />
          </span>
          <h3 className="text-slate-100 text-base font-bold">Why a planning brief first?</h3>
          <p className="text-slate-400 text-sm leading-6">
            Because high-consequence enterprise streaming cannot rely on self-serve checkout and
            generic algorithms.
          </p>
          <p className="text-slate-400 text-sm leading-6">
            Our engineering team reviews your compliance, target audience network profiles, and
            failover redundancy architecture prior to scheduling your event to guarantee flawless
            delivery.
          </p>
        </aside>
      </div>
    </section>
  );
}
