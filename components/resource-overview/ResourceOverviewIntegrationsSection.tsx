import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Cloud, Globe, Activity, MessageSquare, CreditCard, Code } from 'lucide-react';

import rect13 from '@/public/images/resources-overview/Thumbnail (11).png';
import rect14 from '@/public/images/resources-overview/Thumbnail (6).png';
import rect15 from '@/public/images/resources-overview/Thumbnail (7).png';
import rect16 from '@/public/images/resources-overview/Thumbnail (8).png';
import rect17 from '@/public/images/resources-overview/Thumbnail (9).png';
import thumb11 from '@/public/images/resources-overview/Thumbnail (10).png';

const INTEGRATIONS = [
  {
    title: 'AWS Media Services',
    icon: Cloud,
    description: 'Native integration with AWS MediaLive, MediaPackage, and CloudFront for enterprise-grade delivery.',
    actionText: 'View integration →',
    image: rect13,
    href: '/developer-media-protocol',
  },
  {
    title: 'Cloudflare Stream',
    icon: Globe,
    description: 'Edge delivery optimization with Cloudflare\'s global network for low-latency streaming.',
    actionText: 'View integration →',
    image: rect14,
    href: '/developer-media-protocol',
  },
  {
    title: 'Datadog Monitoring',
    icon: Activity,
    description: 'Real-time observability dashboards with custom metrics, alerts, and log correlation.',
    actionText: 'View integration →',
    showDiscard: true,
    image: rect15,
    href: '/developer-analytics-api',
  },
  {
    title: 'Slack Notifications',
    icon: MessageSquare,
    description: 'Automated alerts for stream health, viewer milestones, and incident escalation.',
    actionText: 'View integration →',
    image: rect16,
    href: '/webhooks',
  },
  {
    title: 'Stripe Billing',
    icon: CreditCard,
    description: 'Usage-based billing integration for pay-per-view, subscriptions, and metered streaming.',
    actionText: 'View integration →',
    image: rect17,
    href: '/authentication',
  },
  {
    title: 'Webhooks & API',
    icon: Code,
    description: 'Custom event-driven workflows with configurable webhooks and REST API endpoints.',
    actionText: 'View integration →',
    image: thumb11,
    href: '/webhooks',
  },
];

export default function ResourceOverviewIntegrationsSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-28 bg-gray-950 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="size-[500px] left-[1090px] top-[786px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-36 -top-24 absolute bg-teal-400/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-4xl font-bold font-['Space_Grotesk'] leading-[48px]">
          Partners &amp; Integrations
        </h2>
        <p className="text-slate-400 text-lg font-normal font-['Space_Grotesk'] leading-7">
          Extend ZoikoStream with technology partners and pre-built integrations
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INTEGRATIONS.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden group shadow-md"
            >
              <div className="relative w-full h-40 bg-gray-950/40 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="w-full p-6 flex flex-col justify-between items-start gap-4 flex-1">
                <div className="flex flex-col gap-3 w-full">
                  <div className="w-full inline-flex justify-start items-center gap-3">
                    <div className="p-2 bg-gray-950/50 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex justify-center items-center shrink-0">
                      <IconComponent className="w-4 h-4 text-teal-400" />
                    </div>
                    <h3 className="text-white text-xl font-bold font-['Space_Grotesk'] line-clamp-1">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5 min-h-[40px]">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 w-full flex items-center gap-4">
                  <Link
                    href={item.href}
                    className="text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] transition-colors"
                  >
                    {item.actionText}
                  </Link>

                  {item.showDiscard && (
                    <span className="text-red-500 text-sm font-bold font-['Space_Grotesk'] cursor-pointer hover:underline">
                      Discard
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
