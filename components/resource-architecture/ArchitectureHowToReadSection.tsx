import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import {
  CloudUpload,
  Cpu,
  Globe,
  Activity,
  BarChart2,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

const CARDS = [
  {
    tag: 'INGEST',
    tagColor: 'text-blue-600',
    title: 'Contribution / Ingest',
    description:
      'Bringing live or file-based media into the workflow with ultra-low latency ingest protocols (SRT, WHIP, RTMP).',
    icon: CloudUpload,
    iconBg: 'bg-indigo-50/80',
    iconColor: 'text-blue-500',
  },
  {
    tag: 'PROCESSING',
    tagColor: 'text-teal-600',
    title: 'Processing / Media Services',
    description:
      'Supported processing capabilities including real-time transcoding, composition, and stream packaging.',
    icon: Cpu,
    iconBg: 'bg-teal-50/80',
    iconColor: 'text-teal-500',
  },
  {
    tag: 'DELIVERY',
    tagColor: 'text-blue-600',
    title: 'Playback / Delivery',
    description:
      'Optimized multi-CDN edge delivery paths, player integration, and client-side playback telemetry hooks.',
    icon: Globe,
    iconBg: 'bg-indigo-50/80',
    iconColor: 'text-blue-500',
  },
  {
    tag: 'EVENTS',
    tagColor: 'text-teal-600',
    title: 'Events / Webhooks',
    description:
      'Event-driven integration systems, stream state changes, and automated pipeline orchestration hooks.',
    icon: Activity,
    iconBg: 'bg-teal-50/80',
    iconColor: 'text-teal-500',
  },
  {
    tag: 'MONITORING',
    tagColor: 'text-blue-600',
    title: 'Monitoring / Analytics',
    description:
      'End-to-end pipeline visibility, real-time quality of experience metrics, and error boundary alerts.',
    icon: BarChart2,
    iconBg: 'bg-indigo-50/80',
    iconColor: 'text-blue-500',
  },
  {
    tag: 'SECURITY',
    tagColor: 'text-teal-600',
    title: 'Identity / Security',
    description:
      'Token validation APIs, SAML authentication, geo-residency mapping, and access authorization limits.',
    icon: ShieldCheck,
    iconBg: 'bg-teal-50/80',
    iconColor: 'text-teal-500',
  },
];

export default function ArchitectureHowToReadSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
      {/* Background image & Glow overlay snippet */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] left-[1068px] top-[620px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          How to read a ZoikoStream architecture.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Understand the building blocks, data flows, and trust boundaries in every reference design.
        </p>
      </div>

      {/* 6 Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CARDS.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="p-6 bg-slate-50 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-full flex justify-between items-center">
                <div className={`size-9 ${card.iconBg} rounded-lg flex justify-center items-center shrink-0`}>
                  <Icon className={`w-4 h-4 ${card.iconColor}`} />
                </div>
                <span className={`text-xs font-bold font-['Space_Grotesk'] tracking-wide ${card.tagColor}`}>
                  {card.tag}
                </span>
              </div>
              <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                {card.title}
              </h3>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Diagram Flow & Trust Boundaries Key Box */}
      <div className="relative z-10 w-full p-6 sm:p-8 bg-slate-50 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start gap-6">
        <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
          Diagram Flow &amp; Trust Boundaries Key
        </h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
          <div className="flex justify-start items-center gap-3">
            <div className="flex justify-start items-center gap-2">
              <div className="w-10 h-0 border-2 border-teal-400"></div>
              <ArrowRight className="w-4 h-4 text-teal-400 shrink-0" />
            </div>
            <div className="flex flex-col justify-start items-start gap-0.5">
              <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
                Media Stream Path
              </span>
              <span className="text-slate-600 text-xs font-normal font-['Inter']">
                Direction of active video, audio, or metadata packet transmission.
              </span>
            </div>
          </div>

          <div className="flex justify-start items-center gap-3">
            <div className="px-3 py-1.5 rounded-sm outline outline-[1.50px] outline-offset-[-1.50px] outline-blue-500 bg-blue-500/10">
              <span className="text-blue-600 text-xs font-bold font-['Space_Grotesk']">
                CUSTOMER
              </span>
            </div>
            <div className="flex flex-col justify-start items-start gap-0.5">
              <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
                Customer-Controlled Zone
              </span>
              <span className="text-slate-600 text-xs font-normal font-['Inter']">
                Infrastructure and assets managed entirely within your authority.
              </span>
            </div>
          </div>

          <div className="flex justify-start items-center gap-3">
            <div className="px-3 py-1.5 rounded-sm outline outline-[1.50px] outline-offset-[-1.50px] outline-teal-400 bg-teal-400/10">
              <span className="text-teal-600 text-xs font-bold font-['Space_Grotesk']">
                ZOIKOSTREAM
              </span>
            </div>
            <div className="flex flex-col justify-start items-start gap-0.5">
              <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
                ZoikoStream-Managed Zone
              </span>
              <span className="text-slate-600 text-xs font-normal font-['Inter']">
                Fully managed platform microservices and edge delivery networks.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
