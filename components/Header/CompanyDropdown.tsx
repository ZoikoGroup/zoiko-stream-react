'use client';

import Link from 'next/link';
import {
  HelpCircle,
  Activity,
  ArrowRight,
  Accessibility,
  Building,
  Building2,
  ChevronRight,
  Code2,
  Briefcase,
  Handshake,
  FileText,
  Headset,
  History,
  Info,
  Layers,
  Lock,
  Mail,
  Newspaper,
  Radio,
  Scale,
  Sparkles,
  ShieldCheck,
  Tag,
  Terminal,
  Target,
  Users,
  type LucideIcon,
} from 'lucide-react';

type MenuItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const ABOUT_ITEMS: MenuItem[] = [
  { title: 'Company overview', description: 'Who operates ZoikoStream, and why', href: '/company-overview', icon: Layers },
  { title: 'About ZoikoStream', description: 'Our purpose in plain terms', href: '/about-us', icon: Info },
  { title: 'Purpose and principles', description: 'What we optimize for', href: '/purpose-principles', icon: Target },
  { title: 'Leadership', description: 'The people accountable for the platform', href: '/leadership', icon: Users },
  { title: 'Operating context', description: 'How the group fits together', href: '/operating-context', icon: Building2 },
  { title: 'Zoiko Group', description: 'The parent organization', href: '/zoiko-group', icon: Building },
  { title: 'Zoiko Tech', description: 'Where ZoikoStream is built', href: '/zoiko-tech', icon: Code2 },
];

const WORK_ITEMS: MenuItem[] = [
  { title: 'Careers', description: 'Open roles across the group', href: '/carrers', icon: Briefcase },
  { title: 'Partners', description: 'Implementation and technology allies', href: '/partners', icon: Handshake },
  { title: 'Contact', description: 'General enquiries', href: '/contact-us', icon: Mail },
  { title: 'Enterprise inquiries', description: 'Talk to sales', href: '/enterprise-inquiries', icon: Building },
  { title: 'Live Events inquiries', description: 'Plan a managed broadcast', href: '/zoikostream-enterprise-inquiries', icon: Radio },
  { title: 'Developer relations', description: 'Talk to the platform team', href: '/zoikostream-developer-relations', icon: Terminal },
  { title: 'Accessibility contact', description: 'Report or ask directly', href: '/accessibility', icon: Accessibility },
];

const INFO_ITEMS: MenuItem[] = [
  { title: 'Newsroom', description: 'Announcements and coverage', href: '/newsroom', icon: Newspaper },
  { title: 'Press and media', description: 'Assets and media contacts', href: '/press', icon: FileText },
  { title: 'Company updates', description: 'What changed, and when', href: '/zoikostream-company-updates', icon: History },
  { title: 'Trust Center', description: 'Security and compliance posture', href: '/zoikostream-trust-center', icon: ShieldCheck },
  { title: 'System status', description: 'Live platform health', href: '/zoikostream-status', icon: Activity },
  { title: 'Legal', description: 'Terms and agreements', href: '/zoikostream-legal', icon: Scale },
  { title: 'Privacy', description: 'How we handle data', href: '/privacy', icon: Lock },
];

const POPULAR_TAGS = ['Leadership', 'Careers', 'Newsroom', 'Trust Center', 'Partners'];

export default function CompanyDropdown() {
  return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.16)] dark:border-gray-700 dark:bg-gray-900 dark:shadow-[0_22px_70px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col gap-3 border-b border-slate-100 px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-8 sm:py-5 dark:border-gray-800">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-100 text-slate-700 shadow-sm sm:h-10 sm:w-10 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
            <Building2 className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0">
            <h2 className="text-[15px] font-extrabold leading-tight text-slate-900 sm:text-[17px] dark:text-white">Company</h2>
            <p className="max-w-2xl text-[10px] leading-4.5 text-slate-500 sm:text-[11px] sm:leading-5 dark:text-gray-400">
              The organization, purpose and people behind ZoikoStream.
            </p>
          </div>
        </div>

        <Link
          href="/company"
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-slate-200 px-3 py-2 text-[10px] font-bold text-slate-700 transition-colors hover:bg-slate-50 sm:px-4 sm:text-[11px] dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          Overview
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="max-h-[calc(100vh-165px)] overflow-y-auto overscroll-contain scrollbar-none">
        <div className="grid grid-cols-1 divide-y divide-slate-100 md:grid-cols-4 md:divide-x md:divide-y-0 dark:divide-gray-800">
          <MenuColumn title="About" items={ABOUT_ITEMS} accentClassName="text-slate-700 dark:text-gray-300" />
          <MenuColumn title="Work with us" items={WORK_ITEMS} accentClassName="text-slate-700 dark:text-gray-300" />
          <MenuColumn title="Information" items={INFO_ITEMS} accentClassName="text-slate-700 dark:text-gray-300" />

          <aside className="bg-slate-900 p-4 md:col-span-1 dark:bg-black">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 p-4 text-white shadow-lg sm:p-5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/20 blur-3xl sm:h-36 sm:w-36"
              />

              <div className="relative z-10 space-y-4">
                <div className="flex h-24 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 sm:h-28">
                  <div className="flex h-full w-full items-center justify-center rounded-lg  px-3 text-center text-[10px] uppercase tracking-[0.2em] text-white/40 sm:text-[11px]">
                    <img src="/images/header/SVG (1).png"></img>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className='flex flex-row'>
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-slate-400 sm:text-[10px]">
                    Featured brand map
                  </p>
                  <p className="text-[10px] font-bold uppercase  text-white/50 sm:text-[9px]">
                    Static architecture visual
                  </p></div>
                  <h3 className="max-w-[11rem] text-[12px] font-extrabold leading-snug sm:text-[14px]">
                    Meet the organization behind ZoikoStream.
                  </h3>
                  <p className="text-[10px] leading-relaxed text-slate-300 sm:text-[11px]">
                    Zoiko Group, Zoiko Tech and ZoikoStream, powered by Zoiko Cloud, with Live Events as an endorsed capability.
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-4 border-t border-white/10 pt-4 sm:mt-5 sm:pt-5">
                <div className="space-y-2.5">
                  <Link
                    href="/company"
                    className="flex items-center justify-between text-[10px] font-bold text-white transition-colors hover:text-cyan-300 sm:text-[11px]"
                  >
                    <span>About ZoikoStream</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                  <Link
                    href="/company"
                    className="flex items-center justify-between text-[10px] font-semibold text-slate-300 transition-colors hover:text-white sm:text-[11px]"
                  >
                    <span>Contact us</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="w-full min-h-[64px] border-t border-slate-100 bg-white px-4 py-4 flex flex-wrap items-center gap-3 sm:px-9 dark:border-gray-800 dark:bg-gray-900">
          <span className="mr-2 text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500">
            Popular
          </span>

          {POPULAR_TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              className="flex h-8 cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 text-xs font-semibold text-slate-900 transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700"
            >
              <Sparkles className="h-3.5 w-3.5 text-slate-400 dark:text-gray-500" />
              <span>{tag}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-200 bg-slate-50 px-4 py-4 sm:px-8 md:flex-row md:items-center md:justify-between dark:border-gray-800 dark:bg-gray-800/60">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
              <HelpCircle className="h-3.5 w-3.5 text-slate-500 dark:text-gray-400" />
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-slate-900 sm:text-[13px] dark:text-white">
                Not sure where to start?
              </h4>
              <p className="text-[10px] text-slate-600 sm:text-[11px] dark:text-gray-400">
                We&apos;ll help you find the right route through ZoikoStream.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold text-slate-900 sm:gap-6 sm:text-[11px] dark:text-white">
            <Link href="/company" className="inline-flex items-center gap-1.5 transition-colors hover:text-slate-700 dark:hover:text-gray-300">
              <Building2 className="h-3 w-3 text-slate-700 dark:text-gray-300" />
              Company overview
            </Link>
            <Link href="/products" className="inline-flex items-center gap-1.5 transition-colors hover:text-slate-700 dark:hover:text-gray-300">
              <Tag className="h-3 w-3 text-slate-700 dark:text-gray-300" />
              View pricing
            </Link>
            <Link href="/about-us" className="inline-flex items-center gap-1.5 transition-colors hover:text-slate-700 dark:hover:text-gray-300">
              <Headset className="h-3 w-3 text-slate-700 dark:text-gray-300" />
              Talk to an expert
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuColumn({
  title,
  items,
  accentClassName,
}: {
  title: string;
  items: MenuItem[];
  accentClassName: string;
}) {
  return (
    <section className="space-y-2.5 p-4 sm:p-5">
      <span className={`block px-2 text-[9px] font-bold uppercase tracking-[0.22em] sm:text-[10px] ${accentClassName}`}>
        {title}
      </span>
      <div className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-start gap-2 rounded-xl p-1.5 transition-colors hover:bg-slate-50 sm:gap-2.5 sm:p-2 dark:hover:bg-gray-800"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-slate-100 text-slate-700 transition-colors group-hover:border-slate-200 group-hover:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:group-hover:border-gray-600 dark:group-hover:bg-gray-900">
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-slate-700 sm:text-[12px] dark:text-white dark:group-hover:text-gray-300">
                  {item.title}
                </p>
                <p className="mt-0.5 truncate text-[9px] font-medium leading-4 text-slate-500 sm:text-[10px] dark:text-gray-400">
                  {item.description}
                </p>
              </div>
              <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 dark:text-gray-500" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
