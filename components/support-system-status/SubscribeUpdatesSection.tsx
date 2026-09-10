import React from "react";
import Image from "next/image";

export default function SubscribeUpdatesSection() {
  const cards = [
    {
      title: "Email Notifications",
      description: "Receive detailed incident updates, maintenance schedules, and resolution summaries.",
      meta: "Scope options: All services or Selected components",
      buttonText: "Subscribe via Email",
      buttonClass: "bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] border-none text-white hover:opacity-90",
      image: "/images/support-system-status/imgCardImage.png"
    },
    {
      title: "RSS / Atom Feed",
      description: "Machine-readable operational updates for dashboards, monitoring tools, and custom integrations.",
      meta: "Feed URL: zoikostream.com/status/feed",
      buttonText: "Copy Feed URL",
      buttonClass: "border border-[#aab3c4] border-solid text-white hover:bg-[#aab3c4]/10",
      image: "/images/support-system-status/imgCardImage1.png"
    },
    {
      title: "Webhook Integration",
      description: "Push real-time status events to your endpoints for automated incident response workflows.",
      meta: "Note: Requires endpoint verification",
      buttonText: "Configure Webhook",
      buttonClass: "border border-[#aab3c4] border-solid text-white hover:bg-[#aab3c4]/10",
      image: "/images/support-system-status/imgCardImage2.png"
    }
  ];

  return (
    <div className="border-[#1f2937] border-b border-solid flex flex-col gap-[56px] items-start px-[112px] py-[100px] relative w-full h-auto overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img
          alt=""
          className="absolute max-w-none object-cover size-full"
          src="/images/support-system-status/imgSubscribeSection.png"
        />
        <div className="absolute inset-0 bg-[#0a0f1a]/77" />
      </div>

      <div className="flex flex-col gap-[16px] items-start relative z-10 w-full max-w-[1216px] mx-auto">
        <h2 className="font-sans font-bold leading-[48px] text-[38px] text-white w-full">
          Subscribe to Operational Updates
        </h2>
        <p className="font-sans font-normal leading-[28.8px] text-[#aab3c4] text-[18px] w-full">
          Receive real-time notifications about service health, incidents, and planned maintenance through your preferred channel.
        </p>
      </div>

      <div className="flex gap-[24px] items-start relative z-10 w-full max-w-[1216px] mx-auto">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-[#111827]/85 border border-[#1f2937] border-solid flex flex-1 flex-col items-start overflow-hidden relative rounded-[16px]">
            <div className="h-[140px] relative w-full shrink-0">
              <Image
                alt={card.title}
                className="object-cover"
                src={card.image}
                fill
              />
            </div>
            <div className="flex flex-col gap-[20px] items-start p-[24px] relative w-full flex-grow">
              <h3 className="font-sans font-bold leading-none text-[20px] text-white whitespace-nowrap">
                {card.title}
              </h3>
              <p className="font-sans font-normal leading-[22px] text-[#aab3c4] text-[14px] min-h-[66px] w-full line-clamp-3">
                {card.description}
              </p>
              <div className="flex-grow" />
              <p className="font-mono font-bold leading-none text-[#34d4ca] text-[11px] whitespace-nowrap w-full overflow-hidden text-ellipsis">
                {card.meta}
              </p>
              <button className={`${card.buttonClass} flex items-center justify-center px-[24px] py-[12px] relative rounded-[10px] w-full transition-all`}>
                <span className="font-sans font-bold leading-none text-[14px] whitespace-nowrap">
                  {card.buttonText}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-[12px] items-start relative z-10 w-full max-w-[1216px] mx-auto">
        <div className="relative shrink-0 size-[16px] mt-[2px]">
          <img alt="" className="block w-full h-full" src="/images/support-system-status/imgShieldCheck.svg" />
        </div>
        <p className="flex-1 font-sans font-normal leading-normal text-[#aab3c4] text-[13px]">
          Operational subscriptions are separate from marketing communications. Your subscription data is never used for sales scoring or commercial targeting.
        </p>
      </div>
    </div>
  );
}
