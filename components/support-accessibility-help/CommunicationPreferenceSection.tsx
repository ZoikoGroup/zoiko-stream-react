"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function CommunicationPreferenceSection() {
  const [activeChannel, setActiveChannel] = useState("Email");
  const [replyNeeded, setReplyNeeded] = useState(true);

  const channels = [
    {
      id: "Email",
      title: "Email (Highly Recommended)",
      desc: "Receive a fully-formatted, screen-reader friendly written response at your email address.",
      img: "/images/support-accessibility-help/pref-email.png",
    },
    {
      id: "Chat",
      title: "Accessible text chat",
      desc: "Real-time text-based support when live accessibility specialists are active in our chat nodes.",
      img: "/images/support-accessibility-help/pref-chat.png",
    },
    {
      id: "Call",
      title: "Request callback",
      desc: "Our support engineers will call you at your preferred time slot if this callback service is approved.",
      img: "/images/support-accessibility-help/pref-call.png",
    },
  ];

  return (
    <section className="border-b border-[#232b3a] flex flex-col items-center px-6 lg:px-[112px] py-[80px] lg:py-[100px] relative w-full overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/support-accessibility-help/sec5-bg.png"
          alt=""
          className="absolute max-w-none object-cover size-full"
        />
        <div className="absolute inset-0 bg-[#0a0f1a]/90" />
      </div>

      <div className="flex flex-col gap-[48px] relative z-10 w-full max-w-[1216px]">
        <div className="flex flex-col gap-[16px] w-full">
          <h2 className="font-['Space_Grotesk',sans-serif] font-bold leading-[1.2] lg:leading-[60.8px] text-[#eef1f6] text-[32px] lg:text-[37.9px] tracking-[-0.38px]">
            How would you like us to respond?
          </h2>
          <p className="font-['Space_Grotesk',sans-serif] font-normal leading-[1.6] text-[#aab3c4] text-[16px] lg:text-[18px]">
            Choose an approved accessible communication method. Only channels we can currently support are shown.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-[40px] items-start w-full">
          {/* Preference Form Box */}
          <div className="bg-[#10151e]/80 border-[1.5px] border-[#232b3a] flex flex-col gap-[24px] p-[28px] rounded-[16px] w-full lg:w-[500px] shrink-0">
            <div className="flex items-center justify-between w-full">
              <span className="font-['Space_Grotesk',sans-serif] font-bold text-[#eef1f6] text-[20px]">
                Reply needed?
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={replyNeeded}
                onClick={() => setReplyNeeded(!replyNeeded)}
                className={`relative inline-flex h-7 w-[46px] items-center rounded-full transition-colors ${
                  replyNeeded ? "bg-[#4a8cfb]" : "bg-[#232b3a]"
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                    replyNeeded ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <label className="font-['Space_Grotesk',sans-serif] text-[#aab3c4] text-[14px]">
                  Preferred channel
                </label>
                <div className="bg-[#0a0f1a] border border-[#232b3a] px-[16px] py-[12px] rounded-[8px]">
                  <p className="font-['Space_Grotesk',sans-serif] text-[#eef1f6] text-[14px]">
                    {activeChannel === "Email"
                      ? "Email (Written response)"
                      : activeChannel === "Chat"
                      ? "Accessible text chat"
                      : "Request callback"}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="font-['Space_Grotesk',sans-serif] text-[#aab3c4] text-[14px]">
                  Format preference
                </label>
                <div className="bg-[#0a0f1a] border border-[#232b3a] px-[16px] py-[12px] rounded-[8px]">
                  <p className="font-['Space_Grotesk',sans-serif] text-[#eef1f6] text-[14px]">
                    Standard HTML text (Screen-reader friendly)
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="font-['Space_Grotesk',sans-serif] text-[#aab3c4] text-[14px]">
                  Contact detail (Email or Phone)
                </label>
                <input
                  type="text"
                  defaultValue="developer-access@organization.com"
                  className="bg-[#0a0f1a] border border-[#232b3a] text-[#eef1f6] font-['Space_Grotesk',sans-serif] text-[14px] px-[16px] py-[12px] rounded-[8px] focus:outline-none focus:border-[#4a8cfb]"
                />
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="font-['Space_Grotesk',sans-serif] text-[#aab3c4] text-[14px]">
                  Best time / timezone (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g., Weekdays 9:00 AM - 5:00 PM EST"
                  className="bg-[#0a0f1a] border border-[#232b3a] text-[#eef1f6] placeholder-[#707a8c] font-['Space_Grotesk',sans-serif] text-[14px] px-[16px] py-[12px] rounded-[8px] focus:outline-none focus:border-[#4a8cfb]"
                />
              </div>
            </div>

            <p className="font-['Space_Grotesk',sans-serif] font-normal text-[#707a8c] text-[12px]">
              Marketing consent is never bundled or pre-checked.
            </p>
          </div>

          {/* Channel Options List */}
          <div className="flex flex-1 flex-col gap-[16px] w-full">
            {channels.map((chan) => {
              const isActive = activeChannel === chan.id;
              return (
                <button
                  key={chan.id}
                  onClick={() => setActiveChannel(chan.id)}
                  className={`bg-[#162235] border-[1.5px] flex items-center gap-[20px] p-[20px] rounded-[12px] text-left transition-colors ${
                    isActive ? "border-[#4c86ff]" : "border-[#232b3a] hover:border-[#354358]"
                  }`}
                >
                  <div className="relative w-[48px] h-[48px] bg-white rounded-[8px] border border-[#232b3a] flex items-center justify-center shrink-0 overflow-hidden">
                    <Image
                      src={chan.img}
                      alt={chan.title}
                      fill
                      className="object-contain p-[6px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <span className="font-['Space_Grotesk',sans-serif] font-bold text-[#eef1f6] text-[15px]">
                      {chan.title}
                    </span>
                    <span className="font-['Inter',sans-serif] font-normal text-[#aab3c4] text-[13px] leading-relaxed">
                      {chan.desc}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
