import React from 'react';
import Image from 'next/image';
import {
  
  Globe,
 
  Calendar,
  ChevronRight,
  ActivityIcon,
  Play,
  Settings,
  Cpu,
  Grid3X3,
  Shield,
} from 'lucide-react';
import bg22 from '@/public/images/resource-blogs-and-insights/bg (17).png';

const TOPICS = [
  {
    title: 'Live Streaming',
    description:
      'Real-time contribution pipelines, global ingestion, and low-latency protocol engineering.',
    icon: ActivityIcon,
  },
  {
    title: 'Video on Demand',
    description:
      'Asset transcoding, cloud storage preservation, and scalable manifest assembly.',
    icon: Play,
  },
  {
    title: 'Media Operations',
    description:
      'Telemetry monitoring, error-correction metrics, and stream orchestrations.',
    icon: Settings,
  },
  {
    title: 'Playback & Delivery',
    description:
      'Dynamic adaptive bitrate logic, edge caching strategies, and multi-CDN rules.',
    icon: Globe,
  },
  {
    title: 'Developer & APIs',
    description:
      'Native SDK integrations, custom player controls, and webhook event-handling.',
    icon: Cpu,
  },
  {
    title: 'Architecture',
    description:
      'Mesh-routed topologies, fallback routing path rules, and scalable ingest infrastructure.',
    icon: Grid3X3,
  },
  {
    title: 'Security & Trust',
    description:
      'Token-gated access enforcement, SSO compliance mappings, and cryptographically verified pipelines.',
    icon: Shield,
  },
  {
    title: 'Live Events',
    description:
      'White-glove event production, signal redundancy, and concierge monitoring practices.',
    icon: Calendar,
  },
];

export default function BlogBrowseTopicSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg22}
          alt="Browse Topic Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Browse by topic
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Filter our deep technical catalog by your specific area of operational focus.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {TOPICS.map((topic, index) => {
          const Icon = topic.icon;
          return (
            <div
              key={index}
              className="p-6 bg-gray-950 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-between items-start gap-4 hover:outline-teal-400/50 transition-all group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="size-9 bg-teal-400/10 rounded-md flex justify-center items-center">
                  <Icon className="w-5 h-5 text-teal-400" />
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 group-hover:translate-x-0.5 transition-all" />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                  {topic.title}
                </h3>
                <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-5">
                  {topic.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
