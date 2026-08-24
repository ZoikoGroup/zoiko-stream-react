import React from 'react';
import Image from 'next/image';

const items = [
  {
    title: 'Architecture & Docs',
    desc: 'Immediate access to current, authoritative infrastructure manuals and system configuration guides.',
    img: '/images/Media-communications-page/Rectangle  (63).png',
  },
  {
    title: 'Security & Trust',
    desc: 'Transparent, inspectable dashboard displaying current security certifications, keys, and token policies.',
    img: '/images/Media-communications-page/Rectangle  (64).png',
  },
  {
    title: 'Accessibility Compliance',
    desc: 'Continuous testing records validating WCAG compliance, caption readiness, and localization standards.',
    img: '/images/Media-communications-page/Rectangle  (65).png',
  },
  {
    title: 'System Status',
    desc: 'Real-time service health monitors showing network status, latency trends, and complete incident history.',
    img: '/images/Media-communications-page/Rectangle  (66).png',
  },
  {
    title: 'Enterprise Support',
    desc: '24/7 dedicated support routing offering instant access to senior broadcast engineers and developers.',
    img: '/images/Media-communications-page/Rectangle  (67).png',
  },
  {
    title: 'Change & Release Authority',
    desc: 'Clear logs documenting recent pipeline changes, API updates, and deprecation timeline targets.',
    img: '/images/Media-communications-page/Rectangle  (68).png',
  },
];

export function SupportEvidenceSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="w-[520px] h-[520px] absolute right-[-100px] bottom-[-100px] bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="w-96 h-96 absolute left-[-180px] top-[-90px] bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Evidence before assurance. Support that continues after publication
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Architecture documentation, security evidence, accessibility compliance, system status, enterprise support, and change currentness.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-xl border border-gray-200 flex flex-col justify-start items-start overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-32 bg-slate-200">
                <Image
                  src={it.img}
                  alt={it.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-5 flex flex-col justify-start items-start gap-2">
                <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                  {it.title}
                </h3>
                <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-5 line-clamp-3">
                  {it.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
