import React from 'react';

export default function StatusPill() {
  return (
    <div className="inline-flex items-center gap-[10px] bg-[#eafaf3] rounded-full px-[16px] py-[6px] shrink-0">
      <div className="size-[6px] rounded-full bg-[#1f9d6f]" />
      <span className="font-inter font-bold text-[#1f9d6f] text-[12.5px]">Operational</span>
    </div>
  );
}
