'use client';

import React from 'react';

interface EventCategory {
  title: string;
  description: string;
  linkText: string;
  icon: string;
}

export default function EventSelectionGrid() {
  const categories: EventCategory[] = [
    {
      title: 'Memorials',
      description:
        'A respectful path for services where reliability, privacy, and remote attendance need careful planning.',
      linkText: 'Explore →',
      icon: "/images/live-event-overview/flame.png",
    },
    {
      title: 'Worship',
      description:
        'Plan recurring or special services with production, access, captions, and support decisions visible.',
      linkText: 'Explore →',
      icon: "/images/live-event-overview/landmark.png",
    },
    {
      title: 'Weddings & celebrations',
      description:
        'Choose private or shared viewing, contribution, replay, and guest-access options for the event you are hosting.',
      linkText: 'Explore →',
      icon: "/images/live-event-overview/heart.png",
    },
    {
      title: 'Graduations',
      description:
        'Plan a high-attendance ceremony with audience, accessibility, language, recording, and resilience needs considered early.',
      linkText: 'Explore →',
      icon: "/images/live-event-overview/award.png",
    },
    {
      title: 'Corporate broadcasts',
      description:
        'Coordinate leadership, town hall, launch, or internal broadcasts with controlled audience and operational workflows.',
      linkText: 'Explore →',
      icon: "/images/live-event-overview/video.png",
    },
    {
      title: 'Not sure where to start?',
      description:
        "Explore the full Live Events overview and find the right planning path for your organization's unique requirements.",
      linkText: 'Explore →',
      icon: "/images/live-event-overview/briefcase.png",
    },
  ];

  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900 text-zinc-900 dark:text-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-start items-start gap-10 lg:gap-14">
        
        {/* Section Header */}
        <div className="w-full flex flex-col justify-start items-start gap-3 sm:gap-4 max-w-3xl">
          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl lg:text-4xl font-semibold    leading-tight">
            Choose the event you are preparing
          </h2>
          <p className="text-gray-600 dark:text-slate-400 text-base sm:text-lg font-normal   leading-relaxed">
            Each event type has its own planning path, operational considerations, and support options.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((item, index) => (
            <a
              key={index}
              href="#"
              className="w-full p-6 sm:p-8 bg-white dark:bg-zinc-900/90 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-teal-400/80 dark:border-teal-500/50 flex flex-col justify-between items-start gap-6 group"
            >
              <div className="w-full flex flex-col gap-4">
                {/* Icon Box */}
                <div className="w-10 h-10 bg-gray-950 dark:bg-slate-800 rounded-lg flex justify-center items-center shrink-0">
                 <img src={item.icon}></img>
                </div>

                {/* Card Title */}
                <h3 className="text-zinc-900 dark:text-white text-xl font-bold   leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-slate-400 text-sm font-normal   leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Link CTA */}
              <span className="text-blue-600 dark:text-blue-400 text-sm font-bold   inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                {item.linkText}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}