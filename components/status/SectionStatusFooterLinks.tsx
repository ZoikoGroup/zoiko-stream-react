import React from 'react';

const LINKS = ["Status API / Feed", "Trust Center", "Privacy", "Accessibility", "Legal", "Support"];

export default function SectionStatusFooterLinks() {
  return (
    <div className="lg:hidden bg-[#3b3d42] w-full px-6 py-[32px]">
      <div className="flex flex-wrap gap-x-[32px] gap-y-[12px] mb-[16px]">
        {LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="font-inter font-normal text-[#a6acb8] text-[13px] no-underline hover:text-white transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
      <p className="font-inter font-normal text-[#8b92a0] text-[12px] leading-[1.55] m-0">
        © 2026 Zoiko Group · Public status covers production Live mode only.
      </p>
    </div>
  );
}
