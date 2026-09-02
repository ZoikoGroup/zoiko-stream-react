import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import section3Bg from '@/public/images/resource-developer-documentation/section-3bg.png';

import cardImg0 from '@/public/images/resource-developer-documentation/CardImage.png';
import cardImg1 from '@/public/images/resource-developer-documentation/CardImage (1).png';
import cardImg2 from '@/public/images/resource-developer-documentation/CardImage (2).png';
import cardImg3 from '@/public/images/resource-developer-documentation/CardImage (3).png';
import cardImg4 from '@/public/images/resource-developer-documentation/CardImage (4).png';
import cardImg5 from '@/public/images/resource-developer-documentation/CardImage (5).png';
import cardImg6 from '@/public/images/resource-developer-documentation/CardImage (6).png';
import cardImg7 from '@/public/images/resource-developer-documentation/CardImage (7).png';
import cardImg8 from '@/public/images/resource-developer-documentation/CardImage (8).png';

const TASKS = [
  {
    question: 'Where do I begin?',
    title: 'Start',
    desc: 'Quickstart / developer access',
    href: '/quick-start',
    image: cardImg0,
  },
  {
    question: 'How do I get authorized?',
    title: 'Authenticate',
    desc: 'Authentication guide',
    href: '/authentication',
    image: cardImg1,
  },
  {
    question: 'Which live API/protocol is relevant?',
    title: 'Build live video',
    desc: 'Live streaming API + protocols',
    href: '/live-streaming-api',
    image: cardImg2,
  },
  {
    question: 'How do I work with VOD?',
    title: 'Build on-demand video',
    desc: 'Video-on-demand API',
    href: '/developer-video-demand-api',
    image: cardImg3,
  },
  {
    question: 'What events/webhooks exist?',
    title: 'Receive events',
    desc: 'Webhooks and events',
    href: '/webhooks',
    image: cardImg4,
  },
  {
    question: 'How is playback governed?',
    title: 'Secure playback',
    desc: 'Secure playback guide',
    href: '/developer-secure-playback',
    image: cardImg5,
  },
  {
    question: 'How does the player fit?',
    title: 'Integrate playback',
    desc: 'Player integration',
    href: '/developer-player-integration',
    image: cardImg6,
  },
  {
    question: 'How do I retrieve analytics?',
    title: 'Measure',
    desc: 'Analytics API',
    href: '/developer-analytics-api',
    image: cardImg7,
  },
  {
    question: 'How do I observe streams?',
    title: 'Operate',
    desc: 'Stream monitoring',
    href: '/developer-stream-monitoring',
    image: cardImg8,
  },
];

export default function ResourceDeveloperDocumentationTasksSection() {
  return (
    <section id="tasks" className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-black border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* Background */}
      {section3Bg && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <Image src={section3Bg} alt="Background" fill className="object-cover" />
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4 max-w-4xl">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          Start from your task
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Choose what you need to do. Each path routes you to the canonical technical documentation.
        </p>
      </div>

      {/* 9 Task Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TASKS.map((task, idx) => (
          <div
            key={idx}
            className="bg-gray-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:border-gray-700 transition-all group"
          >
            <div className="relative w-full h-32 bg-gray-950 overflow-hidden">
              <Image
                src={task.image}
                alt={task.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-start items-start gap-3 flex-1">
              <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase">
                {task.question}
              </span>

              <h3 className="text-white text-xl font-bold font-['Space_Grotesk'] leading-7">
                {task.title}
              </h3>

              <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-6">
                {task.desc}
              </p>

              <Link
                href={task.href}
                className="text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] flex items-center gap-1 mt-auto pt-2 transition-colors"
              >
                View docs <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
