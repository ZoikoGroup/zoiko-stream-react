import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { Calendar, Video, Play } from 'lucide-react';

const STATUS_CARDS = [
  {
    icon: Calendar,
    iconBg: 'bg-slate-200',
    iconColor: 'text-blue-500',
    badge: '12 Active',
    badgeBg: 'bg-blue-500 text-white',
    title: 'Upcoming Events',
    description:
      'Reserve your spot for upcoming interactive webinars, technical architecture deep-dives, and scheduled workshops.',
    highlightBorder: false,
  },
  {
    icon: Video,
    iconBg: 'bg-cyan-50',
    iconColor: 'text-teal-500',
    badge: 'LIVE',
    badgeBg: 'bg-red-500 text-white',
    title: 'Live Now',
    description:
      'Join active broadcasts in progress. Participate in real-time Q&A, interact with speaker panels, and ask questions.',
    highlightBorder: true,
  },
  {
    icon: Play,
    iconBg: 'bg-slate-200',
    iconColor: 'text-slate-900',
    badge: '48 Replays',
    badgeBg: 'bg-slate-900 text-white',
    title: 'Replays Available',
    description:
      'Access the complete on-demand archive. Catch up on missed sessions, download resource guides, and review transcripts.',
    highlightBorder: false,
  },
];

const FORMAT_FILTERS = [
  'All Formats',
  'Webinar',
  'Workshop',
  'Technical Session',
  'Live Demo',
  'Q&A',
];

export default function WebinarSessionFilterSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
      {/* Background overlay snippet */}
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
      <div className="size-[520px] left-[1068px] top-[370px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col justify-start items-center gap-4 text-center">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Find the right session for you.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Filter by event status to find upcoming sessions, live events, or available replays.
        </p>
      </div>

      {/* 3 Cards */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {STATUS_CARDS.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className={`p-6 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] ${
                card.highlightBorder ? 'outline-teal-400' : 'outline-gray-200'
              } flex flex-col justify-start items-start gap-4 hover:shadow-md transition-shadow`}
            >
              <div className="w-full flex justify-between items-center">
                <div className={`size-10 ${card.iconBg} rounded-lg flex justify-center items-center`}>
                  <Icon className={`w-5 h-5 ${card.iconColor}`} />
                </div>
                <div className={`px-2.5 py-1 ${card.badgeBg} rounded-full flex items-center gap-1.5`}>
                  {card.badge === 'LIVE' && (
                    <div className="size-1.5 bg-white rounded-full animate-pulse" />
                  )}
                  <span className="text-xs font-bold font-['Space_Grotesk']">
                    {card.badge}
                  </span>
                </div>
              </div>

              <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk'] leading-6">
                {card.title}
              </h3>
              <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Format Filter Bar */}
      <div className="relative z-10 w-full p-6 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex items-center gap-4 flex-wrap">
        <span className="text-slate-900 text-xs font-bold font-['Space_Grotesk'] tracking-wide">
          EVENT TYPE:
        </span>
        {FORMAT_FILTERS.map((format, index) => (
          <button
            key={index}
            className={`px-4 py-1.5 rounded-full text-xs font-bold font-['Space_Grotesk'] transition-colors ${
              index === 0
                ? 'bg-teal-400 text-slate-950'
                : 'bg-white text-slate-600 outline outline-1 outline-offset-[-1px] outline-gray-200 hover:bg-slate-100'
            }`}
          >
            {format}
          </button>
        ))}
      </div>
    </section>
  );
}
