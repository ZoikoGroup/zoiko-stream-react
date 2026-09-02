import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import bg3 from '@/public/images/resource-release-notes/section-3bg.png';
import img15 from '@/public/images/resource-release-notes/Card-Image (15).png';
import img16 from '@/public/images/resource-release-notes/Card-Image (16).png';
import img17 from '@/public/images/resource-release-notes/Card-Image (17).png';
import img18 from '@/public/images/resource-release-notes/Card-Image (18).png';
import img19 from '@/public/images/resource-release-notes/Card-Image (19).png';
import img20 from '@/public/images/resource-release-notes/Card-Image (20).png';

const AREAS = [
  {
    title: 'Video Ingest & Encoding',
    description:
      'Codec pipelines, SRT/RTMP ingest optimization, transcode engines, and manifest setups.',
    updates: '14 Updates',
    image: img15,
  },
  {
    title: 'Live Events & Streaming',
    description:
      'Ultra-low latency content delivery, signal failovers, global edge routing, and monitoring tools.',
    updates: '22 Updates',
    image: img16,
  },
  {
    title: 'Player & SDK',
    description:
      'Web, native iOS/Android, and Smart TV player updates, HLS playback scripts, and styling layers.',
    updates: '19 Updates',
    image: img17,
  },
  {
    title: 'API & Webhooks',
    description:
      'Event payload structure migrations, REST integrations, secure webhook signing, and API gateway logic.',
    updates: '31 Updates',
    image: img18,
  },
  {
    title: 'Security & Trust',
    description:
      'SAML SSO controls, token-based streaming authorization layers, audit logging, and encryption.',
    updates: '8 Updates',
    image: img19,
  },
  {
    title: 'Media Operations',
    description:
      'Content archiving pipelines, storage tier structures, latency telemetry dashboards.',
    updates: '15 Updates',
    image: img20,
  },
];

export default function ReleaseNotesProductAreasSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg3}
          alt="Product Areas Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Browse releases by product area
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Isolate change history within specific operational domains, SDKs, and platform protocols.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {AREAS.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900/80 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all group"
          >
            <div className="relative w-full h-36 bg-gray-950 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-between items-start gap-3 flex-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="w-full pt-3 flex justify-between items-center border-t border-gray-800/80">
                <span className="text-teal-400 text-xs font-semibold font-['Inter']">
                  {item.updates}
                </span>
                <ArrowRight className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
