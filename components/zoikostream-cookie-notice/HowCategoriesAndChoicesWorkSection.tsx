import React from 'react';

interface CategoryWorkCard {
  title: string;
  description: string;
  badge: string;
  badgeStyle: string;
  accentBg: string;
}

const CATEGORY_CHOICE_CARDS: CategoryWorkCard[] = [
  {
    title: 'Strictly necessary',
    description:
      'Required for core site functionality like sign-in and security. Cannot be turned off.',
    badge: 'Always active',
    badgeStyle: 'bg-slate-100 text-slate-600 border-slate-200',
    accentBg: 'bg-slate-100/60',
  },
  {
    title: 'Functional',
    description:
      'Remembers preferences like language and playback settings to improve your experience.',
    badge: 'Optional',
    badgeStyle: 'bg-blue-50 text-blue-600 border-blue-200/80',
    accentBg: 'bg-teal-50/70',
  },
  {
    title: 'Analytics',
    description:
      'Helps us understand aggregate usage patterns to improve the product.',
    badge: 'Optional',
    badgeStyle: 'bg-blue-50 text-blue-600 border-blue-200/80',
    accentBg: 'bg-blue-50/70',
  },
  {
    title: 'Advertising',
    description:
      'Used to measure and improve marketing campaign effectiveness.',
    badge: 'Optional',
    badgeStyle: 'bg-blue-50 text-blue-600 border-blue-200/80',
    accentBg: 'bg-purple-50/70',
  },
];

export default function HowCategoriesAndChoicesWorkSection() {
  return (
    <section id="categories-and-choices" className="relative w-full bg-white py-16 lg:py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 uppercase">
            SOURCE-CONTROLLED TAXONOMY
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
          How categories and choices work.
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed mb-8">
          Four categories, each with a distinct choice relationship — the same categories appear identically in the inventory below and the settings panel.
        </p>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORY_CHOICE_CARDS.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between"
            >
              {/* Corner Watermark Circle Accent */}
              <div
                className={`absolute -top-6 -right-6 w-24 h-24 rounded-full ${item.accentBg} pointer-events-none`}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6 min-h-[48px]">
                  {item.description}
                </p>
              </div>

              <div className="relative z-10">
                <span
                  className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-mono font-medium border ${item.badgeStyle}`}
                >
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
