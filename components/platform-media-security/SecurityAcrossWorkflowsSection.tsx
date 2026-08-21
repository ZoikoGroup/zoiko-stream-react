import React from 'react';
import Image from 'next/image';

const workflowCards = [
  {
    title: 'Live Streaming',
    desc: 'Source access protection, RTMP stream credential handling, real-time edge playback authorization, and automated recovery paths.',
    image: '/images/platform-media-security/Rectangle  (1).png',
  },
  {
    title: 'Video on Demand',
    desc: 'Asset identity validation, secure transcoding processing, custom DRM key management, and worldwide player delivery restrictions.',
    image: '/images/platform-media-security/Rectangle  (2).png',
  },
  {
    title: 'Enterprise Broadcasting',
    desc: 'Unified SSO integrations, organizational data governance compliance, private white-label portal shielding, and strict network SLAs.',
    image: '/images/platform-media-security/Rectangle  (3).png',
  },
  {
    title: 'Developer & API',
    desc: 'Encrypted API access routes, clean SDK execution limits, verified webhook delivery secrets, and developer sandbox guardrails.',
    image: '/images/platform-media-security/Rectangle  (4).png',
  },
  {
    title: 'Live Events',
    desc: 'On-site physical encoder verification, dedicated satellite link protections, and sensitive-event audience segregation rules.',
    image: '/images/platform-media-security/Rectangle  (5).png',
  },
];

export default function SecurityAcrossWorkflowsSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-media-security/bg (103).png"
          alt="Security Across Workflows Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gray-950/80" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white">
            Security across workflows and contexts
          </h2>
          <p className="text-slate-400 text-lg font-normal font-['Space_Grotesk'] leading-relaxed max-w-3xl">
            Qualified security for each media workflow — not a single generic promise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {workflowCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 overflow-hidden flex flex-col backdrop-blur-md hover:border-teal-400/40 transition-colors group"
            >
              <div className="relative w-full h-32 bg-slate-800">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex flex-col gap-2.5 flex-1">
                <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
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
