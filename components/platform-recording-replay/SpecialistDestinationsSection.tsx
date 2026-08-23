import React from 'react';
import Image from 'next/image';

const destinations = [
  {
    title: 'Media Operations',
    desc: 'Operating model, readiness, decision rights',
    image: '/images/platform-recording-replay/CardImage (32).png',
  },
  {
    title: 'Enterprise Broadcasting',
    desc: 'Recurring broadcast program context',
    image: '/images/platform-recording-replay/CardImage (33).png',
  },
  {
    title: 'Media Management',
    desc: 'Asset identity, metadata, rights, versions',
    image: '/images/platform-recording-replay/CardImage (34).png',
  },
  {
    title: 'Stream Monitoring',
    desc: 'Operational state, health, evidence',
    image: '/images/platform-recording-replay/CardImage (35).png',
  },
  {
    title: 'Captions & Translation',
    desc: 'Language and accessibility workflow',
    image: '/images/platform-recording-replay/CardImage (36).png',
  },
  {
    title: 'Video on Demand',
    desc: 'Broad on-demand asset-to-playback',
    image: '/images/platform-recording-replay/CardImage (37).png',
  },
  {
    title: 'Access Control',
    desc: 'Audience authorization and mechanisms',
    image: '/images/platform-recording-replay/CardImage (38).png',
  },
  {
    title: 'Secure Playback',
    desc: 'Playback and security delivery',
    image: '/images/platform-recording-replay/CardImage (39).png',
  },
  {
    title: 'Analytics',
    desc: 'Governed metric interpretation',
    image: '/images/platform-recording-replay/CardImage (40).png',
  },
];

export default function SpecialistDestinationsSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-24 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold   text-zinc-950">
            Recording and replay connects to every specialist destination
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all flex flex-col group cursor-pointer"
            >
              <div className="relative w-full h-36 bg-slate-200 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-zinc-950 text-lg font-bold   group-hover:text-teal-600 transition-colors">
                  {dest.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal   leading-relaxed">
                  {dest.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
