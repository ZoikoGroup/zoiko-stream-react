import React from 'react';
import Image from 'next/image';

import cardImage0 from '@/public/images/resources-architecture/card-image.png';
import cardImage1 from '@/public/images/resources-architecture/card-image (1).png';
import cardImage2 from '@/public/images/resources-architecture/card-image (2).png';
import cardImage3 from '@/public/images/resources-architecture/card-image (3).png';
import cardImage4 from '@/public/images/resources-architecture/card-image (4).png';
import cardImage5 from '@/public/images/resources-architecture/card-image (5).png';

const GOALS = [
  {
    title: 'Build a live streaming workflow',
    description:
      'Contribution to live processing, ultra-low latency packaging, and high concurrency distribution to playback.',
    image: cardImage0,
  },
  {
    title: 'Design video-on-demand delivery',
    description:
      'Ingest, asset upload pathways, transcoding automation, and structured asset delivery.',
    image: cardImage1,
  },
  {
    title: 'Plan real-time contribution',
    description:
      'Sub-second WHIP/WebRTC pipelines, multi-presenter production nodes, and redundant ingest points.',
    image: cardImage2,
  },
  {
    title: 'Secure playback and delivery',
    description:
      'Identity validation, token-gating APIs, signed URLs, and trust boundary enforcement schemes.',
    image: cardImage3,
  },
  {
    title: 'Operate and monitor media',
    description:
      'Pipeline health telemetry, incident/status dashboards, automated alerts, and quality of experience (QoE) tracking.',
    image: cardImage4,
  },
  {
    title: 'Plan an enterprise deployment',
    description:
      'Dedicated single-tenant configurations, strict geo-residency mapping, SSO enforcement, and compliance cold storage.',
    image: cardImage5,
  },
];

export default function ArchitectureGoalSection() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14">
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Start by architecture goal.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Choose the architecture pattern that matches your primary objective.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GOALS.map((goal, index) => (
          <div
            key={index}
            className="bg-gray-950 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden group hover:outline-teal-400/50 transition-all"
          >
            <div className="relative w-full h-44 bg-gray-900 overflow-hidden">
              <Image
                src={goal.image}
                alt={goal.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full p-6 flex flex-col justify-start items-start gap-3 flex-1">
              <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                {goal.title}
              </h3>
              <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
                {goal.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
