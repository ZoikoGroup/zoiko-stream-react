import React from "react";
import Image from "next/image";

interface SecurityCard {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const securityData: SecurityCard[] = [
  {
    id: 46,
    title: "Security & compliance evidence",
    description:
      "Gain immediate access to verified SOC 2 logs, ISO certifications, and encryption standards documentation.",
    imageSrc: "/images/media/card-image (46).png",
  },
  {
    id: 47,
    title: "Commercial/service boundary",
    description:
      "Clean, transparent contract frameworks outlining operational responsibility lines and L1 engineers window paths.",
    imageSrc: "/images/media/card-image (47).png",
  },
  {
    id: 48,
    title: "Pricing & support paths",
    description:
      "Clear tier schedules based on recurring program volume—with zero hidden fees or volume overage charges.",
    imageSrc: "/images/media/card-image (48).png",
  },
];

export default function EnterpriseSecuritySection() {
  return (
    <section className="relative w-full text-white font-sans py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/media/b7.png"
          alt="Enterprise Security Background"
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
            Enterprise security, trust, and procurement
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-normal">
            Evidence-backed assurance with exact, current, scoped trust claims.
          </p>
        </div>

        {/* 3 Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {securityData.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl border border-slate-800/80 bg-[#0d121f]/70 backdrop-blur-md overflow-hidden shadow-xl flex flex-col transition-all hover:border-slate-700"
            >
              <div className="relative w-full h-52 bg-slate-900">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
