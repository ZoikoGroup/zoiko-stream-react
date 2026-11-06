import Image from 'next/image';
import { MonitorUp, Radio, TrendingUp } from 'lucide-react';
import { IMG, SectionHeading, container } from './shared';

const steps = [
  {
    icon: MonitorUp,
    title: 'Create your event',
    body: 'Set up your event page, branding, access rules and ticketing in minutes — all from one dashboard.',
  },
  {
    icon: Radio,
    title: 'Go live',
    body: 'Stream straight from your browser or any professional encoder. No downloads, no complicated setup.',
  },
  {
    icon: TrendingUp,
    title: 'Grow & monetize',
    body: 'Engage your audience in real time, sell access or donations, and track every result as it happens.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0f] py-20">
      <Image
        src={`${IMG}/sale-corner-steps.webp`}
        alt=""
        width={291}
        height={239}
        className="pointer-events-none absolute -top-4 right-0 hidden w-[200px] xl:block"
      />

      <div className={container}>
        <SectionHeading
          eyebrow="How it works"
          title="Go live in three simple steps."
          subtitle="From first setup to a packed virtual room — no production crew required."
        />

        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, body }, i) => {
            const n = String(i + 1).padStart(2, '0');
            return (
              <li
                key={title}
                className="relative overflow-hidden rounded-2xl border border-gray-800 bg-[#1a1a26] px-6 py-7"
              >
                <span aria-hidden="true" className="absolute right-5 top-3 text-6xl font-extrabold leading-[62px] text-white/5">
                  {n}
                </span>
                <span className="flex size-12 items-center justify-center rounded-xl border border-violet-500/30 bg-gradient-to-br from-violet-500/25 to-violet-500/10">
                  <Icon className="size-6 text-teal-400" strokeWidth={1.75} />
                </span>
                <p className="mt-4 text-xs font-bold tracking-[0.14em] text-violet-500">STEP {n}</p>
                <h3 className="mt-2 text-lg font-bold text-slate-50">{title}</h3>
                <p className="mt-2 text-sm leading-[1.6] text-gray-400">{body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
