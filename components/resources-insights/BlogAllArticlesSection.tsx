import React from 'react';
import Image from 'next/image';
import lightBgPattern from '@/public/images/Organization-overview/bg (147).png';

import thumb1 from '@/public/images/resources-insights/thumbnail_1.png';
import thumb2 from '@/public/images/resources-insights/thumbnail_2.png';
import thumb3 from '@/public/images/resources-insights/thumbnail_3.png';
import thumb4 from '@/public/images/resources-insights/thumbnail_4.png';
import thumb5 from '@/public/images/resources-insights/thumbnail_5.png';
import thumb6 from '@/public/images/resources-insights/thumbnail_6.png';

const ARTICLES = [
  {
    title: 'Understanding CMAF: Why Chunked Streaming Changes Everything',
    description: 'A comprehensive technical look at how CMAF ultra-low latency reduces streaming delays to sub-second levels.',
    category: 'Explainer',
    image: thumb1,
  },
  {
    title: 'Building Resilient Monitoring for Live at Scale',
    description: 'How we constructed a global observability pipeline that ingests 5M+ metrics per second during peak live events.',
    category: 'Operational Practice',
    image: thumb2,
  },
  {
    title: 'The State of Low-Latency Streaming in 2026',
    description: 'An analysis of how WebRTC and LL-HLS adoption curves have shifted over the last two years.',
    category: 'Industry Analysis',
    image: thumb3,
  },
  {
    title: 'Optimizing Global CDN Routing Topologies',
    description: 'Deep dive into traffic shaping algorithms and real-time DNS routing for massive multi-CDN architectures.',
    category: 'Engineering Perspective',
    image: thumb4,
  },
  {
    title: 'Automated Failover Triggers: A Post-Mortem',
    description: 'What we learned from a regional outage and how we rebuilt our automated redundancy switching.',
    category: 'Research & Evidence',
    image: thumb5,
  },
  {
    title: 'DRM License Acquisition at 100K Requests/Sec',
    description: 'Scaling highly concurrent key servers and caching strategies for flash-crowd live sports events.',
    category: 'Operational Practice',
    image: thumb6,
  }
];

const CATEGORIES = [
  'All', 'Explainers', 'Engineering', 'Operations', 'Industry', 'Research', 'Events'
];

export default function BlogAllArticlesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-100 flex flex-col justify-start items-start gap-10 bg-[#F5F7FF] overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={lightBgPattern}
          alt="Pattern"
          fill
          className="object-cover opacity-50 mix-blend-multiply"
        />
      </div>

      {/* Header */}
      <div className="relative z-10 w-full flex flex-row justify-between items-end gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
          Latest Insights
        </h2>
        <span className="text-slate-500 text-sm font-normal font-['Inter'] pb-1">
          Showing 24 insights
        </span>
      </div>

      {/* Filter Pills */}
      <div className="relative z-10 w-full flex flex-wrap items-center gap-3">
        {CATEGORIES.map((cat, idx) => (
          <button
            key={idx}
            className={`px-5 py-2 rounded-full text-sm font-medium font-['Space_Grotesk'] transition-colors ${
              idx === 0 
                ? 'bg-gray-900 text-white hover:bg-gray-800' 
                : 'bg-white text-slate-700 outline outline-1 outline-gray-200 hover:outline-blue-200 hover:bg-blue-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARTICLES.map((article, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-2xl overflow-hidden outline outline-1 outline-gray-200 flex flex-col justify-start items-start group cursor-pointer shadow-[0px_4px_20px_0px_rgba(0,0,10,0.03)] hover:shadow-[0px_10px_30px_0px_rgba(0,0,10,0.08)] transition-all duration-300"
          >
            <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-900">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-4 p-6 sm:p-8">
              <div className="px-3 py-1 bg-blue-50 rounded text-blue-600 text-xs font-bold font-['Space_Grotesk']">
                {article.category}
              </div>

              <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk'] leading-tight group-hover:text-blue-600 transition-colors">
                {article.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
