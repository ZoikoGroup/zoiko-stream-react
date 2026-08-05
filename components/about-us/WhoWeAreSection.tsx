import React from 'react';

// --- DATA DEFINITIONS ---

const PILLARS = [
  {
    id: 'product',
    title: 'Our Product',
    description:
      'A unified media infrastructure for live & on-demand streaming, real-time engagement, and media operations.',
    ctaText: 'EXPLORE PLATFORM',
    ctaHref: '#explore',
    icon:'/images/about-us/Icon (16).svg'
  },
  {
    id: 'purpose',
    title: 'Our Purpose',
    description:
      'To remove complexity and unlock the power of video for businesses and communities around the world.',
    ctaText: 'WHY WE EXIST',
    ctaHref: '#purpose',
    icon:'/images/about-us/Icon (6).svg'
  },
  {
    id: 'promise',
    title: 'Our Promise',
    description:
      'Enterprise-grade reliability, ironclad security, and human support—so you can focus on what matters.',
    ctaText: 'TRUST & SECURITY',
    ctaHref: '#security',
    icon:'/images/about-us/Icon (5).svg'
  },
  {
    id: 'parent',
    title: 'Our Parent',
    description:
      "ZoikoStream is part of Zoiko Group—an ecosystem of technology companies building what's next.",
    ctaText: 'ABOUT ZOIKO GROUP',
    ctaHref: '#zoiko-group',
    icon:'/images/about-us/Icon (4).svg'
  },
];

// --- COMPONENT ---

export default function WhoWeAreSection() {
  return (
    <section className="w-full bg-neutral-950 text-white py-16 sm:py-24 px-6 sm:px-10 lg:px-20  ">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Company Intro */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4 sticky top-12">
            <span className="text-teal-400 text-base font-normal uppercase tracking-widest  ">
              WHO WE ARE
            </span>

            <h2 className="text-white text-4xl sm:text-5xl  leading-[1.15] tracking-tight  ">
              Built by Zoiko.<br />Backed by trust.
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg font-normal leading-relaxed pt-2">
              ZoikoStream is operated within Zoiko Tech and powered by Zoiko Cloud. As part of Zoiko Group, we combine deep engineering, global infrastructure, and media expertise to deliver reliable, secure, and accessible streaming experiences.
            </p>

            <a
              href="#zoiko-group-details"
              className="inline-flex items-center gap-2 pt-4 text-teal-400 hover:text-teal-300 text-base font-normal transition-colors group"
            >
              <span>Learn more about Zoiko Group</span>
              <img className="w-4 h-4 inline-block transition-transform group-hover:translate-x-1"  src='/images/about-us/Icon (8).svg'/>
            </a>
          </div>

          {/* Right Column: 2x2 Pillar Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="p-8 bg-teal-400/10 rounded-lg border border-white/5 flex flex-col justify-between gap-6 hover:border-teal-400/30 transition-colors"
              >
                <div className="flex flex-col items-start gap-3">
                  {/* Decorative Gradient Badge */}
                  <img className="w-6 h-6 rounded-xs" src={pillar.icon} />

                  <h3 className="text-white text-xl font-bold   leading-snug pt-2">
                    {pillar.title}
                  </h3>

                  <p className="text-neutral-300 text-sm font-normal leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <a
                  href={pillar.ctaHref}
                  className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-xs font-bold uppercase tracking-wider transition-colors group"
                >
                  <span>{pillar.ctaText}</span>
                  <img className="w-2 h-2 inline-block transition-transform group-hover:translate-x-1" src='/images/about-us/Icon (7).svg' />
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}