'use client';

import Link from 'next/link';

interface MetaItem {
  label: string;
  value: string;
}

const META_ITEMS: MetaItem[] = [
  {
    label: 'Master organization',
    value: 'Zoiko Group',
  },
  {
    label: 'Operating context',
    value: 'Zoiko Tech',
  },
  {
    label: 'Infrastructure',
    value: 'Zoiko Cloud',
  },
  {
    label: 'Endorsed capability',
    value: 'ZoikoStream Live Events',
  },
];

export default function CompanyHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950/80 to-slate-950" />

      {/* Main Hero Container */}
      <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-16 sm:px-12 lg:px-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Text Block (7 cols) */}
          <div className="flex flex-col items-start gap-4 lg:col-span-7">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2.5">
              <span className="h-0.5 w-5 bg-cyan-400" />
              <span className="  text-xs font-bold uppercase tracking-wider text-cyan-400">
                Company
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="max-w-xl   text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-5xl lg:leading-[1.15]">
              Meet the organization behind ZoikoStream.
            </h1>

            {/* Description Paragraph */}
            <p className="max-w-lg   text-base font-normal leading-relaxed text-white/70 sm:text-lg">
              ZoikoStream is Zoiko Group&apos;s secure media infrastructure and
              streaming platform, operated within Zoiko Tech and powered by
              Zoiko Cloud.
            </p>

            {/* Call to Action Buttons */}
            <div className="mt-2 flex flex-wrap items-center gap-3 pt-3.5">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-none bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3   text-sm font-bold text-gray-900 transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                About ZoikoStream
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-none border border-white/30 px-5 py-3   text-sm font-medium text-white transition-all hover:border-white/60 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right Hero Image (5 cols) */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-[513px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src="/images/company-overview/Rectangle 5.png"
                alt="ZoikoStream Organization Team"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="w-full border-t border-white/10 bg-gray-950/60 backdrop-blur-[3px]">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {META_ITEMS.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col gap-1 px-6 py-5 ${
                  index !== META_ITEMS.length - 1
                    ? 'border-b border-white/10 sm:border-b-0 lg:border-r'
                    : ''
                }`}
              >
                <span className="  text-xs font-medium uppercase tracking-wide text-white/40">
                  {item.label}
                </span>
                <span className="  text-sm font-bold text-white sm:text-base">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}