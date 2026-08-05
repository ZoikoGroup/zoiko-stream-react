'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ResourceCard {
  id: string;
  badge: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const CATEGORIES = [
  'All',
  'APIs',
  'Live Streaming',
  'Security',
  'Accessibility',
  'Recording',
  'Analytics',
] as const;

const ALL_RESOURCES: ResourceCard[] = [
  {
    id: '1',
    badge: 'WHITEPAPER',
    category: 'Security',
    title: 'Implementing DRM at the Edge',
    description:
      'A comprehensive guide to protecting premium video content using Multi-DRM solutions integrated directly at edge network locations.',
    imageUrl: '/images/resources/Image (4).png',
    link: '/resources/implementing-drm-at-edge',
  },
  {
    id: '2',
    badge: 'CASE STUDY',
    category: 'Live Streaming',
    title: 'Scaling to 5M Concurrent Viewers',
    description:
      "How major e-sports platforms utilize ZoikoStream's dynamic scaling to handle massive audience spikes without buffering issues.",
    imageUrl: '/images/resources/Image.png',
    link: '/resources/scaling-5m-concurrent-viewers',
  },
  {
    id: '3',
    badge: 'GUIDE',
    category: 'APIs',
    title: 'Advanced Webhook Handling',
    description:
      'Best practices for securely receiving, verifying, and processing massive volumes of asynchronous video lifecycle events.',
    imageUrl: '/images/resources/Image (1).png',
    link: '/resources/advanced-webhook-handling',
  },
  {
    id: '4',
    badge: 'ARCHITECTURE',
    category: 'Recording',
    title: 'Cloud DVR Topologies',
    description:
      'Design patterns for implementing highly available, infinite-retention Cloud DVR systems for 24/7 linear broadcasts.',
    imageUrl: '/images/resources/Image (5).png',
    link: '/resources/cloud-dvr-topologies',
  },
  {
    id: '5',
    badge: 'GUIDE',
    category: 'Accessibility',
    title: 'Real-time Transcription Workflows',
    description:
      'Integrating AI-driven speech-to-text models for sub-3-second live closed caption generation across multiple regions.',
    imageUrl: '/images/resources/Image (6).png',
    link: '/resources/real-time-transcription-workflows',
  },
  {
    id: '6',
    badge: 'WHITEPAPER',
    category: 'Analytics',
    title: 'QoE vs QoS: Actionable Metrics',
    description:
      'Understanding the correlation between network performance (QoS) and viewer engagement (QoE) to preemptively solve playback failures.',
    imageUrl: '/images/resources/Image (2).png',
    link: '/resources/qoe-vs-qos-actionable-metrics',
  },
];

export default function BrowseByTopic() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Filter resources based on active topic filter pill
  const filteredResources = ALL_RESOURCES.filter(
    (resource) =>
      selectedCategory === 'All' || resource.category === selectedCategory
  );

  const displayedResources = filteredResources.slice(0, visibleCount);

  return (
    <section className="w-full bg-slate-950 px-6 py-16 text-white sm:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col justify-start gap-10">
        
        {/* Top Bar: Title & Dynamic Category Filters */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="shrink-0   text-lg font-medium text-indigo-100 sm:text-xl">
            Browse by Topic
          </h2>

          {/* Filter Pills Navigation */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category);
                    setVisibleCount(6); // Reset pagination on category change
                  }}
                  className={`rounded-full px-4 py-2   text-sm transition-all focus:outline-none focus:ring-2 focus:ring-sky-300 ${
                    isActive
                      ? 'bg-slate-800 text-indigo-100 shadow-xs'
                      : 'bg-gray-800/60 text-neutral-400 hover:bg-gray-800 hover:text-neutral-200'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedResources.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-xl bg-slate-900 border border-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl"
            >
              {/* Card Image Cover */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content Details */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex flex-col gap-3">
                  {/* Category & Type Badge */}
                  <div className="flex items-center gap-2">
                    <span className="rounded-xs bg-slate-800 px-2 py-1   text-[10px] font-medium tracking-wide uppercase text-slate-300">
                      {item.badge}
                    </span>
                    <span className="  text-sm text-slate-400">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="  text-lg font-bold leading-snug text-indigo-100 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Summary Paragraph */}
                  <p className="line-clamp-3   text-sm font-normal leading-relaxed text-neutral-300">
                    {item.description}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="pt-6">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5   text-xs font-semibold uppercase tracking-wider text-sky-300 transition-colors hover:text-sky-200 focus:outline-none"
                  >
                    READ MORE
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Resources Trigger */}
        {visibleCount < filteredResources.length && (
          <div className="flex justify-center pt-4">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="rounded-lg border border-neutral-600 bg-transparent px-8 py-3   text-xs font-semibold uppercase tracking-wider text-indigo-100 transition-colors hover:border-neutral-400 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            >
              LOAD MORE RESOURCES
            </button>
          </div>
        )}

      </div>
    </section>
  );
}