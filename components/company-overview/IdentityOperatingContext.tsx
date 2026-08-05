'use client';

import Link from 'next/link';

interface OperatingContextProps {
  sectionTag?: string;
  title?: string;
  paragraph1?: string;
  paragraph2?: string;
  ctaText?: string;
  ctaHref?: string;
  imageUrl?: string;
  hierarchySteps?: string[];
}

export default function IdentityOperatingContext({
  sectionTag = 'Identity and operating context',
  title = 'Who is behind ZoikoStream.',
  paragraph1 = 'ZoikoStream is a secure media infrastructure and streaming platform: programmable APIs and SDKs for developers, managed workflows for enterprise broadcast operators, and a professionally managed lifecycle for Live Events.',
  paragraph2 = 'ZoikoStream operates within Zoiko Tech and is powered by Zoiko Cloud, both part of Zoiko Group. ZoikoStream Live Events is an endorsed capability delivered within the ZoikoStream brand — not a separate company, product, or website.',
  ctaText = 'Read the full story on the About ZoikoStream page →',
  ctaHref = '/about',
  imageUrl = '/images/company-overview/Fibre optic network.png',
  hierarchySteps = ['Zoiko Group', 'Zoiko Tech', 'ZoikoStream', 'Zoiko Cloud'],
}: OperatingContextProps) {
  return (
    <section className="w-full bg-white px-6 py-16 text-gray-900 sm:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* Content Column (7 Cols on desktop) */}
          <div className="flex flex-col items-start gap-4 lg:col-span-7">
            
            {/* Tagline / Subheading Badge */}
            <div className="inline-flex items-center gap-2.5">
              <span className="h-0.5 w-5 bg-cyan-400" />
              <span className="  text-xs font-bold uppercase tracking-wider text-cyan-500">
                {sectionTag}
              </span>
            </div>

            {/* Section Heading */}
            <h2 className="pt-0.5   text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>

            {/* Paragraph Text Content */}
            <div className="flex flex-col gap-3 pt-0.5 text-gray-700">
              <p className="  text-base font-normal leading-relaxed">
                {paragraph1}
              </p>
              <p className="pb-2   text-base font-normal leading-relaxed">
                {paragraph2}
              </p>
            </div>

            {/* CTA Underlined Link */}
            <div className="inline-block border-b-2 border-cyan-400 pb-0.5 transition-colors hover:border-cyan-600">
              <Link
                href={ctaHref}
                className="  text-sm font-bold text-gray-900 transition-colors hover:text-cyan-600 focus:outline-none"
              >
                {ctaText}
              </Link>
            </div>
          </div>

          {/* Image & Hierarchy Card Column (5 Cols on desktop) */}
          <div className="flex justify-center lg:col-span-5">
            <div className="group relative w-full max-w-md overflow-hidden rounded-3xl bg-slate-900 shadow-[0px_14px_34px_-14px_rgba(16,24,40,0.14)]">
              {/* Image */}
              <img
                src={imageUrl}
                alt="Who is behind ZoikoStream"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Bottom Gradient Overlay with Hierarchy Chips */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950/90 via-gray-950/60 to-transparent px-6 py-6 pt-12">
                <div className="flex flex-wrap items-center gap-2">
                  {hierarchySteps.map((step, index) => (
                    <div key={step} className="inline-flex items-center gap-2">
                      <span className="  text-xs font-medium text-white/90">
                        {step}
                      </span>
                      {index < hierarchySteps.length - 1 && (
                        <span className="  text-xs font-bold text-cyan-400">
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}