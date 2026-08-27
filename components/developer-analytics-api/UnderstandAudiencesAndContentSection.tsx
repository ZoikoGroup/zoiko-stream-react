import React from 'react';
import Image from 'next/image';

const audienceCards = [
  {
    title: 'Content Performance',
    desc: 'Verify content engagement across play attempts, views, and aggregate watch time mapped strictly to content IDs.',
    img: '/images/developer-analytics-api/visual.png',
  },
  {
    title: 'Audience Geography & Device',
    desc: 'Segment audience reach via verified IP-mapped country codes, browser user agents, and primary hardware architectures.',
    img: '/images/developer-analytics-api/visual (1).png',
  },
  {
    title: 'Acquisition & Referral',
    desc: 'Track incoming traffic pathways, domain referrers, and promotional parameters mapped securely without user tracking cookies.',
    img: '/images/developer-analytics-api/visual (2).png',
  },
  {
    title: 'Session & Viewer Lookup',
    desc: 'Inspect singular session timelines and viewer profiles only when explicit SAML SSO administrative permissions are authorized.',
    img: '/images/developer-analytics-api/visual (3).png',
  },
];

export function UnderstandAudiencesAndContentSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-analytics-api/bg (18).png"
          alt="Understand Audiences Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Understand audiences and content without turning analytics into surveillance.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Use verified aggregate metrics to understand content reach, engagement and audience patterns. Unique-viewer semantics are shown only when explicitly authorized.
          </p>
        </div>

        {/* 4 Cards 2x2 Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {audienceCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-gray-800/90 rounded-2xl border border-gray-800 overflow-hidden flex flex-col justify-start items-start shadow-xl"
            >
              <div className="w-full h-44 relative bg-slate-900">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-white text-xl font-bold ">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-5">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
