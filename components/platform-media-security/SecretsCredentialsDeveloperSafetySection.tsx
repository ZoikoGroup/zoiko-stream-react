import React from 'react';
import Image from 'next/image';

const secretCards = [
  {
    title: 'Code Examples',
    desc: 'Placeholders, non-sensitive fixtures, explicit secret-safe patterns. No real keys or tokens.',
    image: '/images/platform-media-security/card-image (18).png',
  },
  {
    title: 'URLs & Screenshots',
    desc: 'Redacted or generated safe examples. No credentials or private domains.',
    image: '/images/platform-media-security/card-image (19).png',
  },
  {
    title: 'Logs & Analytics',
    desc: 'No secret values in general analytics. Approved redaction and suppression.',
    image: '/images/platform-media-security/card-image (20).png',
  },
  {
    title: 'Documentation',
    desc: 'Storage and handling responsibility only to supported level. No invented key hierarchy.',
    image: '/images/platform-media-security/card-image (21).png',
  },
  {
    title: 'Support Forms',
    desc: 'Warn against submitting secrets. Approved secure diagnostic route.',
    image: '/images/platform-media-security/card-image (22).png',
  },
  {
    title: 'Developer Integration',
    desc: 'Route to maintained auth docs. Secret-safe patterns only.',
    image: '/images/platform-media-security/card-image (23).png',
  },
];

export default function SecretsCredentialsDeveloperSafetySection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-media-security/bg (100).png"
          alt="Secrets Safety Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gray-950/90" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white">
            Secrets, credentials, and developer safety
          </h2>
          <p className="text-slate-400 text-lg font-normal font-['Space_Grotesk'] leading-relaxed max-w-3xl">
            Secret handling is both a product-security and content-governance requirement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secretCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 overflow-hidden flex flex-col backdrop-blur-md hover:border-teal-400/40 transition-colors group"
            >
              <div className="relative w-full h-40 bg-slate-800">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-white text-lg font-bold font-['Space_Grotesk'] group-hover:text-teal-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-base font-normal font-['Inter'] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
