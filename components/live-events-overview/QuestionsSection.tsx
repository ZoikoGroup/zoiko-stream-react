'use client';

import React from 'react';

interface FaqCard {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export default function QuestionsSection() {
  const faqCards: FaqCard[] = [
    {
      title: 'Planning questions',
      description:
        'Need advice on structure, scale, or pricing models before you brief us?',
      linkText: 'Learn more →',
      href: '/planning-and-briefing',
    },
    {
      title: 'Technical/support questions',
      description:
        'Have constraints regarding network protocols, local decoders, or secure player setups?',
      linkText: 'Learn more →',
      href: '/faqs-and-support',
    },
    {
      title: 'Existing-event help',
      description:
        'Already planned an event and need to modify dates, access policies, or operational staff?',
      linkText: 'Learn more →',
      href: '/talk-to-an-expert',
    },
  ];

  return (
    <section className="w-full bg-zinc-950/10 dark:bg-slate-900/40 text-slate-100 dark:text-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-200"
      style={{
        // Replace this placeholder URL with your actual background image URL
        backgroundImage: ` url('/images/live-event-overview/image 1 (2).png')`,
      }}
      >
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-start items-start gap-10 lg:gap-14">
        
        {/* Section Header */}
        <h2 className="text-slate-100 dark:text-white text-3xl sm:text-4xl lg:text-4xl font-bold   leading-tight sm:leading-[1.2] max-w-3xl">
          Questions before you start?
        </h2>

        {/* FAQ Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {faqCards.map((card, index) => (
            <div
              key={index}
              className="w-full p-6 sm:p-8 bg-zinc-900 dark:bg-zinc-900/90 rounded-xl border border-gray-800 dark:border-slate-800 flex flex-col justify-between gap-6 shadow-md hover:border-gray-700 transition-colors"
            >
              <div className="flex flex-col justify-start items-start gap-3">
                <h3 className="text-slate-100 dark:text-white text-xl font-bold   leading-7">
                  {card.title}
                </h3>
                <p className="text-slate-400 dark:text-slate-300 text-sm font-normal   leading-relaxed">
                  {card.description}
                </p>
              </div>

              <a
                href={card.href}
                className="inline-flex items-center text-blue-500 dark:text-blue-400 text-base font-bold   leading-6 hover:underline transition-all"
              >
                {card.linkText}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}