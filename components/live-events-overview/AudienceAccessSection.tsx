'use client';

import React from 'react';

interface AccessCard {
  title: string;
  description: string;
  footer: string;
}

export default function AudienceAccessSection() {
  const cards: AccessCard[] = [
    {
      title: 'Open/public',
      description:
        'No restriction on who can watch the stream. Ideal for civic proceedings or public broadcasts.',
      footer: 'Scope confirmed during planning',
    },
    {
      title: 'Invite-only',
      description:
        'Access constrained to an approved list of emails or registered user accounts.',
      footer: 'Scope confirmed during planning',
    },
    {
      title: 'Credentialed',
      description:
        'Corporate Single Sign-On (SSO) integrated for secure internal audience viewing.',
      footer: 'Scope confirmed during planning',
    },
    {
      title: 'Private/closed',
      description:
        'Highly restricted secure environment for private celebrations or family memorials.',
      footer: 'Scope confirmed during planning',
    },
  ];

  return (
    <section
      className="relative w-full bg-slate-950 dark:bg-slate-900 text-slate-100 dark:text-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat transition-colors duration-200"
      style={{
        // Replace with your actual background image URL
        backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.88), rgba(2, 6, 23, 0.88)), url('/images/live-event-overview/image 1 (4).png')`,
      }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-start items-start gap-10 lg:gap-14 relative z-10">
        
        {/* Section Header */}
        <div className="w-full flex flex-col justify-start items-start gap-3 sm:gap-4 max-w-5xl">
          <h2 className="text-slate-100 dark:text-white text-3xl sm:text-4xl lg:text-4xl font-bold   leading-tight sm:leading-[1.2]">
            Decide who should be able to watch before you decide how to publish
          </h2>
          <p className="text-slate-400 dark:text-slate-300 text-base sm:text-lg font-normal   leading-relaxed">
            Audience access is a first-class planning decision, not a last-minute configuration.
          </p>
        </div>

        {/* Access Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full p-6 sm:p-7 bg-zinc-900/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-xl border border-gray-800 dark:border-slate-800 flex flex-col justify-between gap-4 shadow-xl hover:border-gray-700 transition-colors"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-slate-100 dark:text-white text-xl font-bold   leading-7">
                  {card.title}
                </h3>
                <p className="text-slate-400 dark:text-slate-300 text-sm font-normal   leading-relaxed">
                  {card.description}
                </p>
              </div>

              <span className="text-slate-500 dark:text-slate-400 text-xs font-medium   pt-2 border-t border-gray-800/50">
                {card.footer}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}