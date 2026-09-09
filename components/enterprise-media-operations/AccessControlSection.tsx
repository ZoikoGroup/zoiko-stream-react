import React from "react";
import Image from "next/image";

interface AccessCard {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const accessData: AccessCard[] = [
  {
    id: 15,
    title: "Administrative access",
    description:
      "Assign discrete editor, operator, and administrator roles to secure system configurations and prevent unauthorized changes.",
    imageSrc: "/images/media/card-image (15).png",
  },
  {
    id: 16,
    title: "Audience authorization",
    description:
      "Integrate native SAML SSO, corporate passcodes, or restricted IP parameters to shield private streams from public eyes.",
    imageSrc: "/images/media/card-image (16).png",
  },
  {
    id: 17,
    title: "Audit & evidence logs",
    description:
      "Capture structured operations histories, recording who logged on, who authorized gates, and what variables changed.",
    imageSrc: "/images/media/card-image (17).png",
  },
  {
    id: 18,
    title: "Compliance framework",
    description:
      "Ensure HIPAA, GDPR, and sovereign cloud parameters are met effortlessly through automated storage storage limits.",
    imageSrc: "/images/media/card-image (18).png",
  },
];

export default function AccessControlSection() {
  return (
    <section className="relative w-full text-white font-sans py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/media/b3.png"
          alt="Access Control Background"
          fill
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
            Define who can create, change, and view what
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-normal">
            Least-privilege access boundaries with source-controlled security
            governance.
          </p>
        </div>

        {/* 4 Cards Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessData.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl border border-slate-800/80 bg-[#0d121f]/70 backdrop-blur-md overflow-hidden shadow-xl flex flex-col transition-all hover:border-slate-700"
            >
              <div className="relative w-full h-44 bg-slate-900">
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
