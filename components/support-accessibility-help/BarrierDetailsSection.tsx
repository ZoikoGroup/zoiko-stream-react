"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Key,
  Building,
  Mail,
  Lock,
  ShieldAlert,
  Keyboard,
  Volume2,
  Eye,
  MousePointer,
  Headphones,
  PlayCircle,
  Clock,
  ClipboardCheck,
  Download,
  Globe,
  HelpCircle,
} from "lucide-react";

export default function BarrierDetailsSection() {
  const [activeCategory, setActiveCategory] = useState("Navigation / keyboard");

  const categories = [
    { name: "Navigation / keyboard", icon: <Keyboard className="w-[18px] h-[18px]" /> },
    { name: "Screen reader / semantics", icon: <Volume2 className="w-[18px] h-[18px]" /> },
    { name: "Visual / low vision", icon: <Eye className="w-[18px] h-[18px]" /> },
    { name: "Motor / alternative input", icon: <MousePointer className="w-[18px] h-[18px]" /> },
    { name: "Audio / captions / transcript", icon: <Headphones className="w-[18px] h-[18px]" /> },
    { name: "Video / visual information", icon: <PlayCircle className="w-[18px] h-[18px]" /> },
    { name: "Motion / flashing / timing", icon: <Clock className="w-[18px] h-[18px]" /> },
    { name: "Forms / errors / auth", icon: <ClipboardCheck className="w-[18px] h-[18px]" /> },
    { name: "Documents / downloads", icon: <Download className="w-[18px] h-[18px]" /> },
    { name: "Language / comprehension", icon: <Globe className="w-[18px] h-[18px]" /> },
    { name: "Other / not sure", icon: <HelpCircle className="w-[18px] h-[18px]" /> },
  ];

  return (
    <section className="border-b border-[#232b3a] flex flex-col items-center px-6 lg:px-[112px] py-[80px] lg:py-[100px] relative w-full overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/support-accessibility-help/sec3-bg.png"
          alt=""
          className="absolute max-w-none object-cover size-full"
        />
        <div className="absolute inset-0 bg-[#0a0f1a]/90" />
      </div>

      <div className="flex flex-col gap-[48px] relative z-10 w-full max-w-[1216px]">
        <div className="flex flex-col gap-[16px] w-full">
          <h2 className="font-['Space_Grotesk',sans-serif] font-bold leading-[1.2] lg:leading-[60.8px] text-[#eef1f6] text-[32px] lg:text-[37.9px] tracking-[-0.38px]">
            Tell us what is blocking you
          </h2>
          <p className="font-['Space_Grotesk',sans-serif] font-normal leading-[1.6] text-[#aab3c4] text-[16px] lg:text-[18px]">
            Describe the functional barrier - not a diagnosis. Select a category or choose Not sure.
          </p>
        </div>

        <div className="flex flex-col gap-[48px] w-full">
          <div className="flex flex-col lg:flex-row gap-[40px] w-full items-start">
            {/* Left Panel */}
            <div className="bg-[#10151e] drop-shadow-[0px_12px_20px_rgba(0,0,0,0.17)] flex flex-1 flex-col gap-[24px] p-[32px] lg:p-[40px] rounded-[16px] w-full">
              <h3 className="font-['Space_Grotesk',sans-serif] font-bold leading-[1.2] lg:leading-[60.8px] text-white text-[28px] lg:text-[37.9px] tracking-[-0.38px]">
                Accessibility Barrier Report
              </h3>

              <div className="flex flex-col w-full">
                {[
                  {
                    title: "Password or sign-in issues",
                    desc: "Reset your password or try another method.",
                    icon: <Key className="w-[18px] h-[18px] text-white" />,
                  },
                  {
                    title: "Organization or SSO access",
                    desc: "Contact your organization administrator.",
                    icon: <Building className="w-[18px] h-[18px] text-white" />,
                  },
                  {
                    title: "Invitation or account setup",
                    desc: "Check invitation status or request a new one.",
                    icon: <Mail className="w-[18px] h-[18px] text-white" />,
                  },
                  {
                    title: "Locked or suspended account",
                    desc: "Learn about account restrictions.",
                    icon: <Lock className="w-[18px] h-[18px] text-white" />,
                  },
                  {
                    title: "Security concern",
                    desc: "Report a security issue.",
                    icon: <ShieldAlert className="w-[18px] h-[18px] text-white" />,
                  },
                ].map((item, idx) => (
                  <div key={idx} className="border-b border-white/20 flex gap-[16px] items-center py-[12px] w-full">
                    <div className="bg-[#4a8cfb] flex items-center justify-center rounded-full shrink-0 w-[36px] h-[36px]">
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <p className="font-['Space_Grotesk',sans-serif] font-bold leading-[24px] text-[#0f1b2d] text-[16px]">
                        {item.title}
                      </p>
                      <p className="font-['Space_Grotesk',sans-serif] font-normal leading-[22.75px] text-white text-[14px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center pt-4">
                <button className="font-['Space_Grotesk',sans-serif] font-normal text-[#4c86ff] text-[14px] hover:underline">
                  Submit Report
                </button>
              </div>
            </div>

            {/* Right Panel */}
            <div className="bg-[#10151e]/80 border-[1.5px] border-[#232b3a] flex flex-1 flex-col gap-[24px] p-[32px] lg:p-[40px] rounded-[16px] w-full">
              <p className="font-['Space_Grotesk',sans-serif] font-bold text-[#eef1f6] text-[18px]">
                Affected Surface Resolver
              </p>

              {[
                { label: "Product area", val: "e.g., Live Player, Navigation Bar, Sign-In..." },
                { label: "Task attempted", val: "e.g., Activating closed captions, submitting form..." },
                { label: "Page reference (URL or Name)", val: "https://zoikostream.com/..." },
                { label: "When it happened", val: "e.g., Today at 3:15 PM ET" },
              ].map((field, idx) => (
                <div key={idx} className="flex flex-col gap-[8px] w-full">
                  <p className="font-['Space_Grotesk',sans-serif] font-normal text-[#aab3c4] text-[14px]">
                    {field.label}
                  </p>
                  <div className="bg-[#0a0f1a] border border-[#232b3a] px-[16px] py-[12px] rounded-[8px] w-full">
                    <p className="font-['Space_Grotesk',sans-serif] font-normal text-[#707a8c] text-[14px] truncate">
                      {field.val}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[16px] w-full">
            <p className="font-['Space_Grotesk',sans-serif] font-bold text-[#4c86ff] text-[14px] uppercase tracking-wider">
              SELECT BARRIER CATEGORY
            </p>
            <div className="flex flex-wrap gap-[12px] w-full">
              {categories.map((cat, idx) => {
                const isActive = activeCategory === cat.name;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`border flex gap-[12px] items-center px-[16px] py-[12px] rounded-[8px] transition-colors ${
                      isActive
                        ? "bg-[#4c86ff] border-[#4c86ff] text-white"
                        : "bg-[#162235] border-[#232b3a] text-[#eef1f6] hover:bg-[#1f2d44]"
                    }`}
                  >
                    {cat.icon}
                    <span className="font-['Space_Grotesk',sans-serif] font-bold text-[13px]">
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
