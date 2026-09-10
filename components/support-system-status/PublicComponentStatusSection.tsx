import React from "react";
import Image from "next/image";

export default function PublicComponentStatusSection() {
  const components = [
    {
      title: "Live Streaming Engine",
      status: "OPERATIONAL",
      statusColor: "text-[#10b981]",
      statusBg: "bg-[#10b981]/10",
      image: "/images/support-system-status/imgCompImage.png"
    },
    {
      title: "Video Playback & CDN",
      status: "OPERATIONAL",
      statusColor: "text-[#10b981]",
      statusBg: "bg-[#10b981]/10",
      image: "/images/support-system-status/imgCompImage1.png"
    },
    {
      title: "API Gateway",
      status: "DEGRADED",
      statusColor: "text-[#f59e0b]",
      statusBg: "bg-[#f59e0b]/10",
      image: "/images/support-system-status/imgCompImage2.png"
    },
    {
      title: "Analytics Dashboard",
      status: "OPERATIONAL",
      statusColor: "text-[#10b981]",
      statusBg: "bg-[#10b981]/10",
      image: "/images/support-system-status/imgCompImage3.png"
    },
    {
      title: "Developer Tools & SDK",
      status: "DEGRADED",
      statusColor: "text-[#f59e0b]",
      statusBg: "bg-[#f59e0b]/10",
      image: "/images/support-system-status/imgCompImage4.png"
    },
    {
      title: "Account & Billing",
      status: "OPERATIONAL",
      statusColor: "text-[#10b981]",
      statusBg: "bg-[#10b981]/10",
      image: "/images/support-system-status/imgCompImage.png"
    }
  ];

  return (
    <div className="bg-[#0a0f1a] border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-[112px] py-[100px] relative w-full h-auto overflow-hidden">
      <div className="absolute inset-[0_0_-1px_0] z-0">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img
            alt=""
            className="absolute max-w-none object-cover size-full"
            src="/images/support-system-status/imgComponentHealthBackground.png"
          />
          <div className="absolute inset-0 bg-[#0a0f1a]/88" />
        </div>
      </div>

      <div className="flex flex-col gap-[16px] items-start relative z-10 w-full max-w-[1216px] mx-auto">
        <h2 className="font-sans font-bold leading-[48px] text-[#eef1f6] text-[38px] w-full">
          Public Component Status
        </h2>
        <p className="font-sans font-normal leading-[28.8px] text-[#aab3c4] text-[18px] w-full">
          Current health of approved public-facing services and components.
        </p>
      </div>

      <div className="flex flex-wrap gap-[24px] items-start justify-between relative z-10 w-full max-w-[1216px] mx-auto">
        {components.map((comp, index) => (
          <div key={index} className="bg-[#111827]/85 border border-[#232b3a] border-solid flex flex-col gap-[16px] items-start p-[24px] relative rounded-[12px] w-[389px]">
            <div className="h-[100px] relative rounded-[8px] w-full">
              <Image
                alt={comp.title}
                className="object-cover rounded-[8px]"
                src={comp.image}
                fill
              />
            </div>
            <div className="flex flex-col gap-[12px] items-start relative w-full">
              <div className="flex items-center justify-between relative w-full">
                <h3 className="font-sans font-bold leading-none text-[#eef1f6] text-[18px] whitespace-nowrap overflow-hidden text-ellipsis mr-2">
                  {comp.title}
                </h3>
                <div className={`${comp.statusBg} flex items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0`}>
                  <span className={`font-mono font-bold leading-none ${comp.statusColor} text-[10px] whitespace-nowrap`}>
                    {comp.status}
                  </span>
                </div>
              </div>
              <span className="font-mono leading-none text-[#707a8c] text-[11px] whitespace-nowrap">
                Last verified: Just now
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
