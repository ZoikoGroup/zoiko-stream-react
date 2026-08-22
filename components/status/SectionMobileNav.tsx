import React from 'react';

const TABS = [
  { label: "Overview", href: "#overview", active: true },
  { label: "Components", href: "#component-health" },
  { label: "Regions", href: "#regional-status" },
  { label: "Maintenance", href: "#scheduled-maintenance" },
  { label: "History", href: "#recent-history" },
];

export default function SectionMobileNav() {
  return (
    <div className="lg:hidden bg-[#3b3d42] w-full overflow-x-auto">
      <div className="flex min-w-max">
        {TABS.map((tab) => (
          <a
            key={tab.label}
            href={tab.href}
            className={`px-[16px] py-[16px] text-[13.5px] font-inter font-semibold no-underline whitespace-nowrap border-b-2 ${
              tab.active ? "border-[#3fc9bd] text-white" : "border-transparent text-[#c7cbd3]"
            }`}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </div>
  );
}
