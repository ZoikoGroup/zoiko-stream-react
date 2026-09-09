import React from 'react';

interface CategoryCard {
  id: string;
  title: string;
  description: string;
}

const CATEGORIES: CategoryCard[] = [
  {
    id: 'platform-integrity',
    title: 'Platform integrity & security',
    description: 'Interference, unauthorized access, abuse of infrastructure',
  },
  {
    id: 'content-compliance',
    title: 'Content & legal compliance',
    description: 'Unlawful content, infringement, regulated material',
  },
  {
    id: 'fair-use',
    title: 'Fair use of resources',
    description: 'Excessive or abusive consumption of shared capacity',
  },
  {
    id: 'live-events',
    title: 'Live Events conduct',
    description: 'Behavior during live broadcasts and audience interactions',
  },
  {
    id: 'data-privacy',
    title: 'Data & privacy respect',
    description: "Handling of others' data encountered through the platform",
  },
  {
    id: 'automated-access',
    title: 'Automated & technical access',
    description: 'Bots, scraping, and non-interactive use',
  },
];

export default function RuleCategoriesSection() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
            Rule categories
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            A neutral way to browse the rules below. Category order does not indicate severity.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:border-slate-300 transition-all duration-200"
            >
              <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-1.5">
                {cat.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
