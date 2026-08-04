'use client';

import Link from 'next/link';

interface FeaturedGuideProps {
  badgeText?: string;
  publishDate?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  imageUrl?: string;
}

export default function FeaturedGuideBanner({
  badgeText = 'FEATURED GUIDE',
  publishDate = 'Published: Oct 12, 2024',
  title = 'Global Media Distribution: 100ms Latency at Scale',
  description = 'Explore the architectural decisions, edge node topologies, and routing algorithms required to distribute massive concurrent live streams globally with sub-second latency, while maintaining enterprise-grade resilience.',
  ctaText = 'READ ARCHITECTURE GUIDE',
  ctaHref = '/guides/global-media-distribution',
  imageUrl = '/images/resources/Image (3).png',
}: FeaturedGuideProps) {
  return (
    <section className="w-full bg-slate-950 px-6 py-12 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-2xl border border-slate-700/80 bg-gray-800 shadow-2xl transition-all duration-300 hover:border-slate-600">
          
          {/* Subtle Ambient Radial Gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-300/10 via-transparent to-transparent opacity-50 transition-opacity group-hover:opacity-100" />

          {/* Responsive Layout Grid */}
          <div className="relative flex flex-col lg:flex-row lg:items-stretch">
            
            {/* Left Content Side */}
            <div className="flex flex-1 flex-col justify-center bg-slate-800/80 p-8 backdrop-blur-xs sm:p-12 lg:p-16">
              
              {/* Badge & Date */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-sky-300/10 px-3 py-1   text-xs font-medium uppercase tracking-wide text-sky-300">
                  {badgeText}
                </span>
                <span className="  text-sm font-normal text-slate-400">
                  {publishDate}
                </span>
              </div>

              {/* Guide Title */}
              <h2 className="mb-4 max-w-xl   text-2xl font-bold leading-tight text-indigo-100 sm:text-3xl lg:text-4xl">
                {title}
              </h2>

              {/* Guide Description */}
              <p className="mb-8 max-w-xl   text-base font-normal leading-relaxed text-neutral-300">
                {description}
              </p>

              {/* Primary Call to Action Button */}
              <div>
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-300 px-8 py-4   text-xs font-semibold uppercase tracking-wider text-cyan-950 shadow-md shadow-sky-300/20 transition-all duration-200 hover:bg-sky-200 hover:shadow-lg hover:shadow-sky-300/30 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  <span>{ctaText}</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Image Side */}
            <div className="relative min-h-[300px] w-full flex-1 overflow-hidden lg:min-h-[480px]">
              <img
                src={imageUrl}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Gradient on Image for Edge Blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-slate-800/80 lg:to-transparent" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}