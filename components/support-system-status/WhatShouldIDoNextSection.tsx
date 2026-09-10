import React from "react";
import Image from "next/image";

export default function WhatShouldIDoNextSection() {
  const supportCards = [
    {
      title: "Help Center",
      description: "Browse troubleshooting guides, FAQs, and self-service solutions.",
      image: "/images/support-system-status/imgCardVisual.png"
    },
    {
      title: "Contact Support",
      description: "Reach our support team for account-specific assistance.",
      image: "/images/support-system-status/imgCardVisual1.png"
    },
    {
      title: "Developer Support",
      description: "Technical help for API, SDK, and integration issues.",
      image: "/images/support-system-status/imgCardVisual2.png"
    },
    {
      title: "Enterprise Support",
      description: "Dedicated support for organization-wide operational impact.",
      image: "/images/support-system-status/imgCardVisual3.png"
    },
    {
      title: "Live Events Support",
      description: "Specialist assistance for scheduled or active live events.",
      image: "/images/support-system-status/imgCardVisual4.png"
    },
    {
      title: "Report an Issue",
      description: "Submit a product defect report unrelated to current incidents.",
      image: "/images/support-system-status/imgCardVisual5.png"
    }
  ];

  return (
    <div className="bg-white border-[#e2e8f0] border-b border-solid flex flex-col gap-[56px] items-start px-[112px] py-[100px] relative w-full h-auto overflow-hidden">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full z-0"
        src="/images/support-system-status/imgOperationalHistorySection.png"
      />
      
      {/* Background blobs */}
      <div className="absolute bottom-[-90px] right-[-148px] w-[520px] h-[520px] z-0 pointer-events-none">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src="/images/support-system-status/imgBgBlob2.svg" />
        </div>
      </div>
      <div className="absolute left-[-140px] top-[-88px] w-[420px] h-[420px] z-0 pointer-events-none">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src="/images/support-system-status/imgBgBlob1.svg" />
        </div>
      </div>

      <div className="flex flex-col gap-[16px] items-start relative z-10 w-full max-w-[1216px] mx-auto">
        <h2 className="font-sans font-bold leading-[48px] text-[#0a0d13] text-[38px] w-full">
          What Should I Do Next?
        </h2>
        <p className="font-sans font-normal leading-[28.8px] text-[#4f5e74] text-[18px] w-full">
          Choose the right path based on your situation. Public status information stays here — account-specific support happens in secure channels.
        </p>
      </div>

      <div className="flex flex-wrap gap-[24px] items-start justify-between relative z-10 w-full max-w-[1216px] mx-auto">
        {supportCards.map((card, idx) => (
          <div key={idx} className="bg-[#0a0f1a] flex flex-col items-start overflow-hidden relative rounded-[16px] w-[389px] transition-transform hover:-translate-y-1">
            <div className="h-[120px] relative w-full shrink-0">
              <Image
                alt={card.title}
                className="object-cover"
                src={card.image}
                fill
              />
            </div>
            <div className="flex flex-col gap-[16px] items-start p-[24px] relative w-full flex-grow">
              <h3 className="font-sans font-bold leading-none text-[18px] text-white whitespace-nowrap">
                {card.title}
              </h3>
              <p className="font-sans font-normal leading-[22px] text-[#aab3c4] text-[14px] min-h-[66px] w-full line-clamp-3">
                {card.description}
              </p>
              
              <div className="flex-grow" />
              
              <button className="flex gap-[6px] items-center relative group mt-auto">
                <span className="font-sans font-bold leading-none text-[#34d4ca] text-[14px] whitespace-nowrap group-hover:underline">
                  Get Help
                </span>
                <div className="relative size-[14px] group-hover:translate-x-1 transition-transform">
                  <img alt="" className="block w-full h-full" src="/images/support-system-status/imgArrowRight.svg" />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
