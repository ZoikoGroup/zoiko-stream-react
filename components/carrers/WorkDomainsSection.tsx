import React from 'react';
import Image from 'next/image';

const domains = [
  {
    title: 'Engineering & Infrastructure',
    desc: 'Build and operate the systems that power video, platform reliability, developer interfaces, data, and internal tooling.',
    image: '/images/carrers/bg (144).png',
  },
  {
    title: 'Product & Design',
    desc: 'Turn customer and viewer needs into clear, dependable platform experiences.',
    image: '/images/carrers/bg (143).png',
  },
  {
    title: 'Live Events & Operations',
    desc: 'Plan and support real-time event experiences, operational readiness, and execution.',
    image: '/images/carrers/bg (142).png',
  },
  {
    title: 'Customer & Solutions',
    desc: 'Help customers design, launch, troubleshoot, and get value from ZoikoStream.',
    image: '/images/carrers/bg (141).png',
  },
  {
    title: 'Commercial & Partnerships',
    desc: 'Grow the platform through enterprise relationships, go-to-market execution, and ecosystem partnerships.',
    image: '/images/carrers/bg (140).png',
  },
  {
    title: 'Security, Trust & Corporate',
    desc: 'Protect the business and platform across security, privacy, compliance, finance, legal, people, and operations where roles exist.',
    image: '/images/carrers/bg (145).png',
  },
];

export default function WorkDomainsSection() {
  return (
    <section className="w-full bg-slate-100 py-20 border-b border-gray-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
              WORK DOMAINS
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold   text-zinc-900 leading-tight">
            Explore team pathways.
          </h2>

          <p className="text-gray-500 text-base font-normal    leading-relaxed max-w-2xl">
            Candidate-facing work domains — not the org chart. Select one to filter current roles.
          </p>
        </div>

        {/* 6 Cards Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((dom, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden flex flex-col hover:shadow-md transition-shadow group"
            >
              {/* Card Image */}
              <div className="relative w-full h-38 bg-slate-100 overflow-hidden">
                <Image
                  src={dom.image}
                  alt={dom.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-zinc-900 text-lg font-bold  ">
                  {dom.title}
                </h3>
                <p className="text-gray-500 text-sm font-normal    leading-relaxed">
                  {dom.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
