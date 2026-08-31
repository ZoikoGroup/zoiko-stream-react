import React from 'react';
import Image from 'next/image';
import { Tv, Route, Cpu, Globe, Activity, ShieldCheck, GitMerge } from 'lucide-react';

import bg18 from '@/public/images/resource-glossary/bg (18).png';
import topic0 from '@/public/images/resource-glossary/Topic Image.png';
import topic1 from '@/public/images/resource-glossary/Topic Image (1).png';
import topic2 from '@/public/images/resource-glossary/Topic Image (2).png';
import topic3 from '@/public/images/resource-glossary/Topic Image (3).png';
import topic4 from '@/public/images/resource-glossary/Topic Image (5).png';
import topic5 from '@/public/images/resource-glossary/Topic Image2x.png'

const TOPICS = [
  {
    title: 'Streaming Foundations',
    description:
      'Core concepts of video encoding, bitrates, latency thresholds, and basic playout structures.',
    icon: Tv,
    image: topic0,
  },
  {
    title: 'Protocols & Transport',
    description:
      'Network signaling routes and stream ingest standards including SRT, RTMPS, WebRTC, and WHIP.',
    icon: GitMerge,
    image: topic1,
  },
  {
    title: 'Encoding & Media',
    description:
      'Compression schemas, video codecs, keyframe intervals, and audio-video container formats.',
    icon: Cpu,
    image: topic2,
  },
  {
    title: 'Delivery & Playback',
    description:
      'Global content delivery networks, manifest generation, HLS packaging, and native player buffering.',
    icon: Globe,
    image: topic3,
  },
  {
    title: 'Live Operations',
    description:
      'SLA monitoring, hot failover setups, cloud orchestrations, and real-time streaming diagnostics.',
    icon: Activity,
    image: topic5,
  },
  {
    title: 'Security & Access',
    description:
      'Token parameters, SAML SSO gates, domain restriction, and cryptographic verification loops.',
    icon: ShieldCheck,
    image: topic4,
  },
];

export default function GlossaryTopicBrowseSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image - bg (18).png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg18}
          alt="Browse Topics Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Browse by topic.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Discover terms grouped by domain — from streaming foundations to security and APIs.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOPICS.map((topic, index) => {
          const Icon = topic.icon;
          return (
            <div
              key={index}
              className="bg-gray-800/90 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all group"
            >
              <div className="relative w-full h-36 bg-gray-900 overflow-hidden">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-full p-6 flex flex-col justify-start items-start gap-4 flex-1">
                <div className="flex items-center gap-3">
                  <div className="size-9 bg-teal-950/80 border border-teal-500/30 rounded-lg flex justify-center items-center shrink-0">
                    <Icon className="w-4 h-4 text-teal-400" />
                  </div>
                  <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
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
