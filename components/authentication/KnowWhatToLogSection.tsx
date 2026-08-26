import React from 'react';
import Image from 'next/image';

const logCategories = [
  {
    title: 'Safe to Log',
    img: '/images/authentication/card-image (63).png',
    items: [
      'Authenticated principal unique identifiers',
      'Nonce and cryptographic key metadata hashes',
      'Client IP geo-mapping markers & user agents',
      'Timestamp offsets & requested pipeline scopes',
    ],
  },
  {
    title: 'Never Log',
    img: '/images/authentication/card-image (64).png',
    items: [
      'Plaintext secret keys, passwords, or salts',
      'Raw client verification code payloads',
      'JSON web tokens containing active signature keys',
      'Privileged admin portal configuration strings',
    ],
  },
  {
    title: 'Page Analytics',
    img: '/images/authentication/card-image (65).png',
    items: [
      'Automated verification success percentage ratios',
      'System wide latency trends across authorization steps',
      'Suspicious request escalation anomalies tracking',
      'Daily active principal counts metrics collection',
    ],
  },
];

export function KnowWhatToLogSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/authentication/bg (15).png"
          alt="Know What To Log Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0  " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Know what to log — and what to never capture
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Strict boundaries on what reaches analytics.
          </p>
        </div>

        {/* 3 Logging Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {logCategories.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900/90 rounded-xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-xl hover:border-gray-700 transition-colors backdrop-blur-sm"
            >
              <div className="w-full h-36 relative bg-slate-900">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>

                <div className="flex flex-col gap-2">
                  {item.items.map((it, i) => (
                    <span key={i} className="text-slate-400 text-sm font-normal leading-5">
                      • {it}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
