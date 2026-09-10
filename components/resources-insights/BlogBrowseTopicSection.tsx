import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import typesBg from '@/public/images/resources-insights/contenttypesbackground.png';

const TOPICS = [
  'Protocol Engineering',
  'Content Security',
  'Broadcast Operations',
  'Platform Analytics',
  'Accessibility',
  'Media Preservation',
  'Infrastructure',
  'Compliance',
];

export default function BlogBrowseTopicSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-[#050B14] border-b border-gray-800 flex flex-col justify-center items-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={typesBg}
          alt="Content Types Background"
          fill
          className="object-cover opacity-20 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row justify-between items-start gap-12">
        
        {/* Left Text */}
        <div className="flex-1 flex flex-col justify-start items-start gap-4 pt-4">
          <h2 className="text-white text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] leading-tight">
            Browse by topic
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed max-w-xl">
            Find exactly what you need by filtering across our most requested technical disciplines.
          </p>
        </div>

        {/* Right Pills Grid */}
        <div className="w-full lg:w-[60%] flex flex-wrap gap-4">
          {TOPICS.map((topic, index) => (
            <Link
              key={index}
              href={`#topic-${index}`}
              className="px-6 py-3 bg-[#0A1224]/80 backdrop-blur-sm rounded-full outline outline-1 outline-gray-700 hover:outline-teal-500 hover:bg-[#111A30] transition-all duration-300"
            >
              <span className="text-slate-200 hover:text-teal-400 text-sm font-medium font-['Space_Grotesk'] whitespace-nowrap transition-colors">
                {topic}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
