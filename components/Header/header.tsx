'use client';

import Image from 'next/image';
import { useState } from 'react';

const NAV_LINKS = [
  { name: 'Platform', hasDropdown: true },
  { name: 'Solutions', hasDropdown: true },
  { name: 'Live Events', hasDropdown: true },
  { name: 'Developers', hasDropdown: true },
  { name: 'Pricing', hasDropdown: false, active: true },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-100 bg-white">
      <div className="mx-auto flex h-[84px] max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:px-12">
        <div className="flex flex-shrink-0 items-center">
          <Image
            src="/images/Rectangle 3.png"
            alt="ZoikoStream"
            width={179}
            height={40}
            priority
            className="h-[58px] w-auto object-contain sm:h-[66px]"
          />
        </div>

        <nav className="hidden items-center gap-7 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="group relative cursor-pointer py-2">
              <div className="flex items-center gap-1.5 whitespace-nowrap text-[13px] font-normal text-slate-500 transition-colors hover:text-slate-900">
                <span>{link.name}</span>
                {link.hasDropdown && <span className="text-[7px] leading-none text-slate-400">▼</span>}
              </div>
              {link.active && <div className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#42d8d2]" />}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            className="whitespace-nowrap rounded-lg border border-[#d9d6cc] px-3 py-2 text-[13px] font-semibold text-slate-800 transition-colors hover:bg-slate-50"
          >
            Sign In
          </button>
          <button
            type="button"
            className="whitespace-nowrap rounded-xl bg-gradient-to-r from-[#28cfc5] to-[#4f80ff] px-3 py-2 text-[13px] font-semibold text-slate-950 shadow-sm transition-opacity hover:opacity-95"
          >
            Start building
          </button>
          <button
            type="button"
            className="whitespace-nowrap rounded-xl border border-slate-900 px-3 py-2 text-[13px] font-semibold text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
          >
            Talk to an expert
          </button>
        </div>

        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="flex flex-col gap-5 border-b border-slate-200 bg-white px-6 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <div
                key={link.name}
                className="flex items-center justify-between border-b border-slate-100 py-2 font-medium text-gray-700"
              >
                <span className={link.active ? 'font-semibold text-teal-600' : ''}>{link.name}</span>
                {link.hasDropdown && <span className="text-xs text-gray-400">▼</span>}
              </div>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-2">
            <button
              type="button"
              className="w-full rounded-lg border border-[#d9d6cc] py-2.5 text-center text-sm font-semibold text-gray-800"
            >
              Sign In
            </button>
            <button
              type="button"
              className="w-full rounded-xl bg-gradient-to-r from-[#28cfc5] to-[#4f80ff] py-2.5 text-center text-sm font-semibold text-slate-950"
            >
              Start building
            </button>
            <button
              type="button"
              className="w-full rounded-xl border border-slate-900 py-2.5 text-center text-sm font-semibold text-zinc-900"
            >
              Talk to an expert
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
