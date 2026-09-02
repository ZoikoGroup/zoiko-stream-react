import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg5 from '@/public/images/resource-help-center/section-5bg (2).png';
import img62 from '@/public/images/resource-help-center/card-image (62).png';
import img63 from '@/public/images/resource-help-center/card-image (63).png';
import img64 from '@/public/images/resource-help-center/card-image (64).png';

const EDITORIALS = [
  {
    tag: 'STREAM SETUP',
    title: 'How to configure adaptive bitrate streaming',
    description:
      'Adaptive bitrate (ABR) dynamically adjusts video quality based on bandwidth. Learn to map GOP boundaries and HLS segment rules for uninterrupted playback.',
    image: img62,
    href: '#read-article',
  },
  {
    tag: 'PLAYER SDK',
    title: 'Troubleshooting playback failures in Custom Player SDK',
    description:
      'Isolate client-side media source extension (MSE) errors from edge routing incidents. Use systematic browser inspection profiles to find the source.',
    image: img63,
    href: '#read-article',
  },
  {
    tag: 'API & WEBHOOKS',
    title: 'Setting up webhook notifications for live events',
    description:
      'Streamline external monitoring. Configure webhook listener end points to capture automated start, stop, secure and failover transitions instantly.',
    image: img64,
    href: '#read-article',
  },
];

export default function HelpCenterEditorialSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg5}
          alt="Editorial Help Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Editorially selected help
        </h2>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {EDITORIALS.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all group"
          >
            <div className="relative w-full h-40 bg-gray-950 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-between items-start gap-4 flex-1">
              <div className="flex flex-col gap-3">
                <div className="px-2.5 py-1 bg-teal-400/10 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-400/30 inline-flex self-start">
                  <span className="text-teal-400 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="w-full pt-3 border-t border-gray-800">
                <Link
                  href={item.href}
                  className="text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] transition-colors"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
