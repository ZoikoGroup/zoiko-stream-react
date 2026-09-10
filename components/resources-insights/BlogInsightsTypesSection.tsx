import React from 'react';
import { BookOpen, Activity, Cpu, TrendingUp, Compass, Database, Video, Users } from 'lucide-react';

const INSIGHTS_TYPES = [
  {
    number: '01',
    title: 'Explainer',
    description: 'Make complex streaming concepts easier to understand',
    icon: BookOpen,
  },
  {
    number: '02',
    title: 'Operational Practice',
    description: 'Discuss operational patterns and decision criteria',
    icon: Activity,
  },
  {
    number: '03',
    title: 'Engineering Perspective',
    description: 'Explore tradeoffs and design thinking',
    icon: Cpu,
  },
  {
    number: '04',
    title: 'Industry Analysis',
    description: 'Interpret market and technology developments',
    icon: TrendingUp,
  },
  {
    number: '05',
    title: 'Product-Adjacent Education',
    description: 'Understand problem domains around ZoikoStream',
    icon: Compass,
  },
  {
    number: '06',
    title: 'Research & Evidence',
    description: 'Interpret approved research and data',
    icon: Database,
  },
  {
    number: '07',
    title: 'Event Recap',
    description: 'Editorial lessons from approved events',
    icon: Video,
  },
  {
    number: '08',
    title: 'Opinion & Perspective',
    description: 'Expert interpretation and recommendations',
    icon: Users,
  }
];

export default function BlogInsightsTypesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-[#050B14] border-b border-gray-800 flex flex-col justify-start items-start gap-12 overflow-hidden">
      
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
          What You'll Find in Insights
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Eight editorial content types, each with clear boundaries and source governance.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {INSIGHTS_TYPES.map((type, index) => {
          const Icon = type.icon;
          return (
            <div
              key={index}
              className="p-8 bg-[#0A1224]/80 backdrop-blur-md rounded-2xl outline outline-1 outline-gray-800 hover:outline-teal-500/50 flex flex-col justify-start items-start gap-6 hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-300"
            >
              <div className="w-full flex justify-between items-center">
                <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk']">
                  {type.number}
                </span>
                <Icon className="w-5 h-5 text-teal-400" />
              </div>
              
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                  {type.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                  {type.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
