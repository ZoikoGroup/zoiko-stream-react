import Image from 'next/image';

const HIGHLIGHTS = [
  {
    title: 'Operational clarity',
    description:
      'See the state of every active stream, event, recording, policy, and delivery path.',
  },
  {
    title: 'Centralized governance',
    description:
      'Apply access rules, organizational policies, content protection, and audit requirements consistently.',
  },
  {
    title: 'Resilient delivery',
    description:
      'Use monitored contribution and delivery workflows designed to preserve continuity during critical broadcasts.',
  },
];

export default function EnterpriseOperatorsSection() {
  return (
    <section className="w-full border-t border-zinc-800 bg-zinc-900 px-6 py-16 text-slate-100 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start gap-6 lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              <span className="  text-xs uppercase tracking-wide text-teal-400">
                For enterprise operators
              </span>
            </div>

            <h2 className="  text-3xl font-bold leading-tight text-slate-100 sm:text-4xl lg:text-3xl">
              Control every critical media workflow from one operating environment.
            </h2>

            <p className="  text-base leading-relaxed text-slate-400 sm:text-lg">
              Coordinate live contribution, broadcasting, secure delivery, captions, translation, recording, replay,
              access policy, analytics, and resilient operations without stitching together disconnected platforms.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                className="rounded-[10px] bg-gradient-to-r from-teal-400 to-blue-500 px-6 py-3.5   text-base font-semibold text-slate-950 transition-opacity hover:opacity-95"
              >
                Talk to an enterprise media expert
              </button>
              <button
                type="button"
                className="rounded-[10px] border border-gray-700 px-6 py-3.5   text-base font-semibold text-slate-100 transition-colors hover:border-gray-500"
              >
                Explore enterprise capabilities
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-slate-700 bg-neutral-950 shadow-2xl">
              <Image
                src="/images/home/div.on-dark (2).png"
                alt="Enterprise media operations dashboard preview"
                width={688}
                height={430}
                className="aspect-[688/430] h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-gray-800 bg-zinc-900 p-6 shadow-sm transition-colors hover:border-gray-700"
            >
              <h3 className="  text-base font-bold text-slate-100">{item.title}</h3>
              <p className="  text-sm leading-relaxed text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
