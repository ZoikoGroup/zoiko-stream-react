'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import DevelopersDropdown from './DevelopersDropdown';
import CompanyDropdown from './CompanyDropdown';
import LiveEventsDropdown from './LiveEventsDropdown';
import PlatformDropdown from './PlatformDropdown';
import ResourcesDropdown from './ResourcesDropdown';
import SolutionsDropdown from './SolutionsDropdown';

const NAV_LINKS = [
  { name: 'Platform', href: '/platform', dropdown: 'products' as const },
  { name: 'Solutions', href: '/solutions', dropdown: 'solutions' as const },
  { name: 'Live Events', href: '/live-events', dropdown: 'live-events' as const },
  { name: 'Developers', href: '/developers', dropdown: 'developers' as const },
  { name: 'Pricing', href: '#', dropdown: null, active: true },
];

type UtilityLink = {
  name: string;
  href: string;
  dropdown?: 'company' | 'resources';
};

const UTILITY_LINKS: UtilityLink[] = [
  { name: 'Company', href: '/company', dropdown: 'company' as const },
  { name: 'Resources', href: '/resources', dropdown: 'resources' as const },
];

type DropdownKey = 'products' | 'solutions' | 'live-events' | 'developers' | 'company' | 'resources';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedDropdown, setMobileExpandedDropdown] = useState<DropdownKey | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);
  const [mountedDropdown, setMountedDropdown] = useState<DropdownKey | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = (menu: DropdownKey) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }

    setMountedDropdown(menu);
    setActiveDropdown(menu);
  };

  const closeDropdown = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }

    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
      closeTimerRef.current = null;

      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }

      hideTimerRef.current = setTimeout(() => {
        setMountedDropdown(null);
        hideTimerRef.current = null;
      }, 220);
    }, 120);
  };

  const closeDropdownImmediately = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }

    setActiveDropdown(null);
    setMountedDropdown(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileExpandedDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((current) => {
      const next = !current;
      if (!next) {
        setMobileExpandedDropdown(null);
      }
      return next;
    });
  };

  const toggleMobileDropdown = (menu: DropdownKey) => {
    setMobileExpandedDropdown((current) => (current === menu ? null : menu));
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  const renderDropdown = (key: DropdownKey) => {
    switch (key) {
      case 'products':
        return <PlatformDropdown />;
      case 'solutions':
        return <SolutionsDropdown />;
      case 'live-events':
        return <LiveEventsDropdown />;
      case 'company':
        return <CompanyDropdown />;
      case 'resources':
        return <ResourcesDropdown />;
      default:
        return <DevelopersDropdown />;
    }
  };

  return (
    <header className="relative sticky top-0 z-30 w-full border-b border-slate-200 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-900/95">
      
      {/* Top Utility Bar Wrapper */}
      <div className="w-full bg-linear-359 from-stone-100 to-neutral-300 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto hidden max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1920px] justify-end gap-6 px-4 py-2 sm:flex sm:px-8 lg:px-12 2xl:px-16">
          {UTILITY_LINKS.map((link) => {
            const dropdown = link.dropdown;

            if (dropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => openDropdown(dropdown)}
                  onMouseLeave={closeDropdown}
                >
                  <Link
                    href={link.href}
                    onMouseEnter={() => openDropdown(dropdown)}
                    onFocus={() => openDropdown(dropdown)}
                    onClick={closeDropdownImmediately}
                    className="flex items-center gap-1.5 text-[13px] font-medium text-gray-500 transition-colors hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
                    aria-haspopup="menu"
                    aria-expanded={activeDropdown === dropdown}
                  >
                    {link.name}
                    <span
                      aria-hidden
                      className={`mt-[2px] inline-block h-0 w-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-gray-400 transition-transform duration-200 dark:border-t-gray-500 ${
                        activeDropdown === dropdown ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium text-gray-500 transition-colors hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex h-[72px] max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1920px] items-center justify-between px-4 sm:h-[84px] sm:px-8 lg:px-12 2xl:px-16">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/">
            {/* Light Mode Logo */}
            <Image 
              src="/images/zoikostream-logo-preview.png" 
              alt="ZoikoStream" 
              width={296} 
              height={66} 
              priority 
              className="block dark:hidden h-[60px] w-auto object-contain sm:h-[75px] lg:h-[70px]" 
            />
            {/* Dark Mode Logo */}
            <Image 
              src="/images/ZoikoStream_Logo_DarkBG_PNG.png" 
              alt="ZoikoStream" 
              width={296} 
              height={66} 
              priority 
              className="hidden dark:block h-[60px] w-auto object-contain sm:h-[75px] lg:h-[70px]" 
            />
          </Link>
        </div>

        <nav className="hidden items-center gap-7 lg:flex xl:gap-8 2xl:gap-10">
          {NAV_LINKS.map((link) => {
            if (link.dropdown) {
              return (
                <div
                  key={link.name}
                  className="relative py-2"
                  onMouseEnter={() => openDropdown(link.dropdown)}
                  onMouseLeave={closeDropdown}
                >
                  <Link
                    href={link.href}
                    onClick={closeDropdownImmediately}
                    onMouseEnter={() => openDropdown(link.dropdown)}
                    onFocus={() => openDropdown(link.dropdown)}
                    className="flex items-center gap-1.5 whitespace-nowrap text-[13px] 2xl:text-[14px] font-medium text-slate-600 transition-colors hover:text-slate-900 focus:outline-none dark:text-gray-300 dark:hover:text-white"
                    aria-haspopup="menu"
                    aria-expanded={activeDropdown === link.dropdown}
                  >
                    <span>{link.name}</span>
                    <span
                      aria-hidden
                      className={`mt-[2px] inline-block h-0 w-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-slate-400 transition-transform duration-200 dark:border-t-gray-500 ${
                        activeDropdown === link.dropdown ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>
                </div>
              );
            }

            return (
              <div key={link.name} className="relative py-2">
                <Link
                  href={link.href}
                  className="flex items-center gap-1.5 whitespace-nowrap text-[13px] 2xl:text-[14px] font-normal text-slate-500 transition-colors hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <span>{link.name}</span>
                </Link>
                {link.active && (
                  <div className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#42d8d2]" />
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex 2xl:gap-4">
          <Link
            href="https://zoikostream-git-454227754507.europe-west1.run.app"
            className="whitespace-nowrap rounded-lg border border-[#d9d6cc] px-3.5 py-2 text-[13px] 2xl:text-[14px] font-semibold text-slate-800 transition-colors hover:bg-slate-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            Sign In
          </Link>
          <button
            type="button"
            className="whitespace-nowrap rounded-xl bg-gradient-to-r from-[#28cfc5] to-[#4f80ff] px-3.5 py-2 text-[13px] 2xl:text-[14px] font-semibold text-slate-950 shadow-sm transition-opacity hover:opacity-95"
          >
            Start building
          </button>
          <button
            type="button"
            className="whitespace-nowrap rounded-xl border border-slate-900 px-3.5 py-2 text-[13px] 2xl:text-[14px] font-semibold text-slate-900 transition-colors hover:bg-slate-900 hover:text-white dark:border-gray-200 dark:text-gray-100 dark:hover:bg-white dark:hover:text-slate-900"
          >
            Talk to an expert
          </button>
        </div>

        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none dark:text-gray-300 dark:hover:text-white"
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

      {mountedDropdown && (
        <div
          className="absolute left-1/2 top-[calc(100%-43px)] z-50 hidden w-[min(1280px,calc(100vw-32px))] -translate-x-1/2 px-0 lg:block"
          onMouseEnter={() => openDropdown(mountedDropdown)}
          onMouseLeave={closeDropdown}
          onClickCapture={closeDropdownImmediately}
        >
          <div className="pt-3" onMouseLeave={closeDropdownImmediately}>
            <div
              className={`origin-top transition-[opacity,transform] duration-200 ease-out ${
                activeDropdown === mountedDropdown
                  ? 'translate-y-0 scale-100 opacity-100'
                  : '-translate-y-2 scale-[0.985] opacity-0'
              }`}
            >
              {renderDropdown(mountedDropdown)}
            </div>
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <div className="flex max-h-[calc(100vh-72px)] flex-col gap-5 overflow-y-auto border-b border-slate-200 bg-white px-4 pb-6 pt-4 sm:px-6 lg:hidden dark:border-gray-800 dark:bg-gray-900">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="border-b border-slate-100 dark:border-gray-800">
                <div className="flex items-center justify-between py-3 font-medium text-gray-700 dark:text-gray-200">
                  <Link
                    href={link.href}
                    onClick={() => !link.dropdown && closeMobileMenu()}
                    className={link.active ? 'font-semibold text-teal-600 dark:text-teal-400' : ''}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <button
                      type="button"
                      aria-label={`Toggle ${link.name} submenu`}
                      aria-expanded={mobileExpandedDropdown === link.dropdown}
                      onClick={() => toggleMobileDropdown(link.dropdown as DropdownKey)}
                      className="p-1 text-gray-500 dark:text-gray-400"
                    >
                      <span
                        aria-hidden
                        className={`inline-block h-0 w-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-slate-400 transition-transform duration-200 dark:border-t-gray-500 ${
                          mobileExpandedDropdown === link.dropdown ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>
                {link.dropdown && mobileExpandedDropdown === link.dropdown && (
                  <div className="-mx-4 mb-3 overflow-x-auto pb-3 sm:-mx-6">
                    <div className="min-w-[640px] px-4 sm:px-6">
                      {renderDropdown(link.dropdown)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex flex-col gap-2 border-t border-slate-100 pt-2 dark:border-gray-800">
            {UTILITY_LINKS.map((link) => (
              <div key={link.name} className="border-b border-slate-100 last:border-b-0 dark:border-gray-800">
                <div className="flex items-center justify-between py-2">
                  <Link
                    href={link.href}
                    onClick={() => !link.dropdown && closeMobileMenu()}
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-slate-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <button
                      type="button"
                      aria-label={`Toggle ${link.name} submenu`}
                      aria-expanded={mobileExpandedDropdown === link.dropdown}
                      onClick={() => toggleMobileDropdown(link.dropdown as DropdownKey)}
                      className="p-1 text-gray-500 dark:text-gray-400"
                    >
                      <span
                        aria-hidden
                        className={`inline-block h-0 w-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-slate-400 transition-transform duration-200 dark:border-t-gray-500 ${
                          mobileExpandedDropdown === link.dropdown ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>
                {link.dropdown && mobileExpandedDropdown === link.dropdown && (
                  <div className="-mx-4 mb-3 overflow-x-auto pb-3 sm:-mx-6">
                    <div className="min-w-[640px] px-4 sm:px-6">
                      {renderDropdown(link.dropdown)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <Link
              href="https://zoikostream-git-454227754507.europe-west1.run.app"
              className="w-full rounded-lg border border-[#d9d6cc] py-2.5 text-center text-sm font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-200"
            >
              Sign In
            </Link>
            <button
              type="button"
              className="w-full rounded-xl bg-gradient-to-r from-[#28cfc5] to-[#4f80ff] py-2.5 text-center text-sm font-semibold text-slate-950"
            >
              Start building
            </button>
            <button
              type="button"
              className="w-full rounded-xl border border-slate-900 py-2.5 text-center text-sm font-semibold text-zinc-900 dark:border-gray-200 dark:text-gray-100"
            >
              Talk to an expert
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
