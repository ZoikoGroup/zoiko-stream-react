import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ctaCards = [
  {
    title: 'Explore Security Evidence',
    desc: 'Access our Trust Center for SOC 2 reports, current compliance artifacts, and detailed whitepapers.',
    buttonText: 'Access Trust Center',
    href: '/company-overview',
    primary: true,
  },
  {
    title: 'Security Documentation',
    desc: 'Implementation guides, SDK safety patterns, key custody architectures, and configuration templates.',
    buttonText: 'Read Security Docs',
    href: '/sdks',
    primary: false,
  },
  {
    title: 'System Status',
    desc: 'Monitor real-time service health, track rolling SLA metrics, and explore historic incident post-mortems.',
    buttonText: 'Check Service Health',
    href: '/faqs-and-support',
    primary: false,
  },
  {
    title: 'Talk to an Expert',
    desc: 'Schedule a technical consultation regarding custom integrations, SLAs, or localized hosting.',
    buttonText: 'Request Consultation',
    href: '/talk-to-an-expert',
    primary: false,
  },
];

export default function FinalCtaSection() {
  return (
    <section className="w-full  py-28 text-white border-b border-gray-800"
    style={{
        // Replace '/path-to-your-bg-image.jpg' with your actual image path
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('/images/platform-media-security/bg (103).png')`,
      }}
    
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12 text-center">
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] text-white leading-tight">
            Continue to the right destination
          </h2>
          <p className="text-slate-400 text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Reach the next step based on your current role, project lifecycle, and security needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
          {ctaCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6  rounded-xl border border-gray-800 flex flex-col justify-between gap-6 backdrop-blur-md hover:border-teal-400/40 transition-colors"
            >
              <div className="flex flex-col gap-2.5">
                <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-xs font-normal   leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <Link
                href={card.href}
                className={`w-full py-3 rounded-lg text-center text-sm font-bold font-['Space_Grotesk'] transition-all ${
                  card.primary
                    ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-slate-950 hover:opacity-90'
                    : 'border border-slate-400 text-white hover:bg-white/10'
                }`}
              >
                {card.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
