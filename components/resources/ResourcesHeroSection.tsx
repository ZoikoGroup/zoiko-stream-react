'use client';

import Link from 'next/link';

export default function ResourcesHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 px-6 py-16 sm:px-12 lg:px-20 lg:py-24">
      {/* Background Hero Image & Overlay Effects */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/resources/Background.jpg" // Replace with your hero background image URL
          alt="Hero Background"
          className="h-full w-full object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Content & CTAs */}
          <div className="flex flex-col gap-8 lg:col-span-7">
            
            {/* Header Content */}
            <div className="flex flex-col gap-6">
              {/* Category Eyebrow */}
              <span className="  text-xs font-normal uppercase tracking-wider text-sky-300">
                RESOURCES
              </span>

              {/* Main Headline with Highlight Colors */}
              <h1 className="  text-4xl font-normal leading-tight text-indigo-100 sm:text-5xl lg:text-6xl">
                Practical guidance for{' '}
                <span className="text-sky-300">building</span> and{' '}
                <span className="text-purple-400">operating</span> better video.
              </h1>

              {/* Subtitle / Description */}
              <p className="max-w-2xl   text-base font-normal leading-relaxed text-neutral-300 sm:text-lg">
                ZoikoStream resources help developers, enterprise operators, and event teams evaluate, implement, secure, operate, and improve live and on-demand video workflows.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/docs"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-sky-300 px-8 py-4   text-xs font-semibold uppercase tracking-wider text-cyan-950 shadow-lg shadow-sky-300/20 transition-all hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-300"
              >
                Explore Documentation
              </Link>

              <Link
                href="/case-studies"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-slate-700 bg-gray-800/80 px-8 py-4   text-xs font-semibold uppercase tracking-wider text-indigo-100 backdrop-blur-xs transition-all hover:border-slate-600 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-slate-600"
              >
                View Case Studies
              </Link>
            </div>

          </div>

          {/* Right Column: Hero Visual Image / Graphic Card */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-2 shadow-2xl backdrop-blur-md">
              <img
                src="/images/resources/Global video.png"
                alt="Global Video Distribution Visual"
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}