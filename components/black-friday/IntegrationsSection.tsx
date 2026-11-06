import { CalendarDays, ChartColumn, Code, CreditCard, Share2, SlidersHorizontal } from 'lucide-react';
import { SectionHeading, container } from './shared';

const integrations = [
  { icon: SlidersHorizontal, title: 'Encoders & studios', body: 'Works with OBS-compatible and RTMP/SRT encoders out of the box.' },
  { icon: CreditCard, title: 'Payments & ticketing', body: 'Connect your payment processor to sell tickets and accept donations.' },
  { icon: CalendarDays, title: 'Calendar & CRM', body: 'Sync events and attendee data with your scheduling and CRM tools.' },
  { icon: Code, title: 'Webhooks & API', body: 'Build custom automations with a developer-friendly API and webhooks.' },
  { icon: Share2, title: 'Social restream', body: 'Push your broadcast to multiple social destinations at once.' },
  { icon: ChartColumn, title: 'Analytics export', body: 'Send engagement and conversion data to your reporting stack.' },
];

export default function IntegrationsSection() {
  return (
    <section className="w-full bg-[#0a0a0f] py-20">
      <div className={container}>
        <SectionHeading
          eyebrow="Integrations"
          title="Connects with the tools you already use."
          subtitle="Plug ZoikoStream into your existing workflow and go live without rebuilding a thing."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map(({ icon: Icon, title, body }) => (
            <article key={title} className="flex gap-4 rounded-2xl border border-gray-800 bg-[#11121a] p-5 transition hover:border-gray-700">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-[#171824]">
                <Icon className="size-[18px] text-sky-400" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="text-base font-bold text-white">{title}</h3>
                <p className="mt-1.5 text-sm leading-[1.55] text-gray-400">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
