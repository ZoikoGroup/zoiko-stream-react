import Image from 'next/image';
import { ChartColumn, MessageSquareText, MonitorPlay, Palette, ShieldCheck, Tag } from 'lucide-react';
import { IMG, gutterWidth, ribbonContent } from './shared';

const features = [
  { icon: MonitorPlay, title: 'High-Quality Streaming', body: 'Deliver stunning HD streams to any device with low latency.' },
  { icon: Palette, title: 'Custom Branding', body: 'Your brand, your way. Custom domains, logos and player.' },
  { icon: MessageSquareText, title: 'Engage Your Audience', body: 'Live chat, polls, Q&A and reactions to boost engagement.' },
  { icon: Tag, title: 'Monetize Events', body: 'Sell tickets, accept donations and unlock paid access.' },
  { icon: ChartColumn, title: 'Advanced Analytics', body: 'Real-time insights to measure performance and audience reach.' },
  { icon: ShieldCheck, title: 'Secure & Reliable', body: 'Enterprise-grade security with 99.9% uptime guarantee.' },
];

export default function FeaturesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0f] py-[118px]">
      {/* Figma @1440: left ribbon x7/y6, right ribbon x1305/y126, both 128×413 — shrink with the gutter. */}
      <Image
        src={`${IMG}/sale-ribbon.webp`}
        alt=""
        width={128}
        height={413}
        style={{ width: gutterWidth(128, 16) }}
        className="pointer-events-none absolute left-[7px] top-[6px] hidden h-auto lg:block"
      />
      <Image
        src={`${IMG}/sale-ribbon.webp`}
        alt=""
        width={128}
        height={413}
        style={{ width: gutterWidth(128, 16) }}
        className="pointer-events-none absolute right-[7px] top-[126px] hidden h-auto lg:block"
      />

      <div className={ribbonContent}>
        <h2 className="text-center text-[26px] font-extrabold leading-tight tracking-tight text-slate-50 sm:text-[30px]">
          Everything you need to go live, your way.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-[18px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {features.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-2xl border border-gray-800 bg-[#11121a] px-[19px] pb-6 pt-5 transition hover:border-violet-500/40 xl:min-h-[240px]"
            >
              <span className="flex size-11 items-center justify-center rounded-xl border border-violet-500/30 bg-gradient-to-br from-violet-500/20 to-violet-500/5">
                <Icon className="size-5 text-teal-400" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-base font-bold leading-6 text-slate-50">{title}</h3>
              <p className="mt-2 text-[13px] leading-5 text-gray-400">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
