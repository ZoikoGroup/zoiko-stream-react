import React from 'react';

const imgSectionBg = "/images/workflow-finder/alternatives-section-bg.png";
const imgBgBlob1 = "/images/workflow-finder/alternatives-bg-blob-1.svg";
const imgBgBlob2 = "/images/workflow-finder/alternatives-bg-blob-2.svg";

const ALTERNATIVES = [
  {
    image: "/images/workflow-finder/alternatives-card-interactive-api.png",
    badge: "BEST MATCH",
    title: "Interactive Feature API",
    primary: true,
    details: [
      { label: "Best when: ", value: "Developer-led custom user experience inside apps." },
      { label: "Audience/access fit: ", value: "Embed model inside native applications." },
      { label: "Typical operating model: ", value: "SaaS API integration, self-service." },
      { label: "What to validate next: ", value: "Webhook telemetry & latency limits." },
    ],
    note: "Direct control over players, but demands internal engineering resources to build UI.",
  },
  {
    image: "/images/workflow-finder/alternatives-card-webcast-cdn.png",
    badge: null,
    title: "Global Webcast CDN",
    primary: false,
    details: [
      { label: "Best when: ", value: "High scale global streaming without custom features." },
      { label: "Audience/access fit: ", value: "Millions of concurrent public viewers." },
      { label: "Typical operating model: ", value: "SLA-backed CDN multi-redundancy." },
      { label: "What to validate next: ", value: "Bandwidth pricing and region mapping." },
    ],
    note: "Optimized for pure delivery, but relies on standardized player designs.",
  },
  {
    image: "/images/workflow-finder/alternatives-card-corporate-portal.png",
    badge: null,
    title: "Secure Corporate Portal",
    primary: false,
    details: [
      { label: "Best when: ", value: "Highly secure internal communications & meetings." },
      { label: "Audience/access fit: ", value: "Employees behind SAML single sign-on." },
      { label: "Typical operating model: ", value: "SSO enforcement, IT admin managed portal." },
      { label: "What to validate next: ", value: "IdP integration guidelines and SLAs." },
    ],
    note: "Turn-key security with built-in SSO, but limits customization options.",
  },
];

export default function SectionAlternatives() {
  return (
    <div className="border-b border-[#e1e6eb] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionBg} />
      <div className="absolute left-[-180px] size-[420px] top-[-54px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[2px] right-[-148px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <h2 className="font-sans font-bold text-[#0f1b2d] text-[28px] lg:text-[38px] leading-[1.26] m-0 w-full">
          Compare the closest starting paths
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] w-full">
          {ALTERNATIVES.map((card) => (
            <div
              key={card.title}
              className={`bg-[#f8fafc] rounded-[16px] overflow-hidden flex flex-col items-start ${
                card.primary ? "border-2 border-[#4ecdc4] border-solid" : "border border-[#e1e6eb] border-solid"
              }`}
            >
              <div className="h-[180px] w-full">
                <img alt={card.title} className="w-full h-full object-cover" src={card.image} />
              </div>
              <div className="flex flex-col gap-[20px] items-start p-[24px] lg:p-[28px] w-full">
                <div className="flex flex-col gap-[4px] items-start w-full">
                  {card.badge && (
                    <div className="bg-[#4ecdc4] rounded-full px-[10px] py-[4px]">
                      <p className="font-sans font-bold text-[#0a0d14] text-[10px] m-0 whitespace-nowrap">{card.badge}</p>
                    </div>
                  )}
                  <p className="font-sans font-bold text-[#0f1b2d] text-[22px] m-0 w-full">{card.title}</p>
                </div>

                <div className="flex flex-col gap-[12px] items-start w-full">
                  {card.details.map((detail) => (
                    <p key={detail.label} className="font-inter font-normal text-[#4f5e74] text-[13px] leading-[1.5] m-0 w-full">
                      <span className="font-inter font-bold text-[#0f1b2d]">{detail.label}</span>
                      {detail.value}
                    </p>
                  ))}
                </div>

                <div className="h-px w-full bg-[#e1e6eb]" />

                <p className={`font-inter font-normal italic text-[13px] leading-[1.5] m-0 w-full ${card.primary ? "text-[#4ecdc4]" : "text-[#4f5e74]"}`}>
                  {card.note}
                </p>

                <button
                  className={`w-full py-[12px] rounded-[8px] border-none cursor-pointer transition-opacity hover:opacity-90 ${
                    card.primary ? "bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb]" : "bg-white border border-[#e1e6eb] border-solid"
                  }`}
                >
                  <span className={`font-sans font-bold text-[14px] whitespace-nowrap ${card.primary ? "text-[#232b3a]" : "text-[#0f1b2d]"}`}>
                    Explore this path
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
