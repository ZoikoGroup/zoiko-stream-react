import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import seriesBg from '@/public/images/resources-insights/seriesbackground.png';
import series1 from '@/public/images/resources-insights/series_1.png';
import series2 from '@/public/images/resources-insights/series_2.png';
import series3 from '@/public/images/resources-insights/series_3.png';

const SERIES_DATA = [
  {
    title: 'Live Events Engineering',
    description: 'Deep dives into the technical and operational challenges of broadcast-quality live streaming.',
    articles: 8,
    image: series1,
  },
  {
    title: 'Security & Trust Explained',
    description: 'Understanding content protection, access control, and compliance in streaming infrastructure.',
    articles: 6,
    image: series2,
  },
  {
    title: 'Media Operations Playbook',
    description: 'Practical workflows, monitoring, and resilience patterns for streaming operations teams.',
    articles: 5,
    image: series3,
  }
];

export default function BlogContinueSeriesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-[#0A111F] border-b border-gray-800 flex flex-col justify-start items-start gap-12 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={seriesBg}
          alt="Series Background"
          fill
          className="object-cover opacity-20 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A111F] via-transparent to-[#0A111F]" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight">
          Insight Series
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Intentional editorial groupings for deeper exploration.
        </p>
      </div>

      {/* Series Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERIES_DATA.map((series, idx) => (
          <Link
            key={idx}
            href="#series"
            className="w-full bg-[#111928] rounded-2xl outline outline-1 outline-gray-800 flex flex-col justify-start items-stretch overflow-hidden hover:outline-teal-500/50 hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-300 group cursor-pointer"
          >
            <div className="relative w-full h-56 shrink-0 overflow-hidden bg-slate-900">
              <Image
                src={series.image}
                alt={series.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex-1 p-6 flex flex-col justify-start items-start gap-4">
              <div className="w-full flex justify-between items-center">
                <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-widest">
                  SERIES
                </span>
                <span className="text-slate-500 text-xs font-medium font-['Inter']">
                  {series.articles} articles
                </span>
              </div>
              
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <h3 className="text-white text-xl font-bold font-['Space_Grotesk'] group-hover:text-teal-300 transition-colors">
                  {series.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                  {series.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
