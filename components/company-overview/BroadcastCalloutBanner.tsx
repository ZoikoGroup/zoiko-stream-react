'use client';

interface BannerCalloutProps {
  title?: string;
  subtitle?: string;
  bgImageUrl?: string;
}

export default function BroadcastCalloutBanner({
  title = 'Built by people who operate real broadcasts.',
  subtitle = 'Every principle on this page comes from running live, on-demand, and enterprise video at production scale.',
  bgImageUrl = '/images/company-overview/Background-company.jpg',
}: BannerCalloutProps) {
  return (
    <section className="relative w-full overflow-hidden bg-slate-100 py-16 sm:py-20 lg:py-24">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImageUrl}
          alt="Broadcast Control Room Background"
          className="h-full w-full object-cover object-center opacity-30"
        />
        {/* Gradient Overlays for Light Mode Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100/95 via-slate-100/80 to-slate-100/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-6 text-center sm:px-8">
        <div className="flex max-w-2xl flex-col items-center gap-3">
          {/* Main Title */}
          <h2 className="text-2xl font-bold leading-snug text-zinc-900 sm:text-3xl sm:leading-tight lg:text-4xl">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-sm font-normal leading-relaxed text-gray-600 sm:text-base">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}