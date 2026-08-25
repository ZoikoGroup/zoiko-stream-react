'use client';

import Link from 'next/link';
import {
  BarChart3,
  Building2,
  ChevronRight,
  Compass,
  DollarSign,
  Globe2,
  Grid,
  Headphones,
  Heart,
  Layers,
  Landmark,
  Lock,
  Radio,
  Search,
  ShieldCheck,
  Sparkles,
  Subtitles,
  Tv,
  Users,
  Video,
  Archive,
  type LucideIcon,
  Target,
} from 'lucide-react';

type MenuItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const OBJECTIVE_ITEMS: MenuItem[] = [
  { title: 'Solutions overview', description: 'Find your fastest path in', href: '/solutions-overview', icon: Grid },
  { title: 'Build video into a product', description: 'Embed streaming as a feature', href: '/build-video-into-product', icon: Video },
  { title: 'Broadcast globally', description: 'One-to-many at scale', href: '/Broadcast-globally', icon: Globe2 },
  { title: 'Secure enterprise video', description: 'Governed internal and external media', href: '/secure-enterprise-video', icon: ShieldCheck },
  { title: 'Accessible & multilingual video', description: 'Captioned, translated, inclusive', href: '/accessible-multilingual', icon: Subtitles },
  { title: 'Record, replay and preserve', description: 'Durable long-term archives', href: '/solutions', icon: Archive },
  { title: 'Run managed Live Events', description: 'Produced, one-time broadcasts', href: '/solutions', icon: Radio },
];

const ORGANIZATION_ITEMS: MenuItem[] = [
  { title: 'Organization overview', description: 'Solutions grouped by who you are', href: '/solutions-organization-overview', icon: Grid },
  { title: 'Developers & product teams', description: 'Ship video features fast', href: '/solutions-developer-product-teams', icon: Users },
  { title: 'Enterprises', description: 'Operate media at company scale', href: '/solutions-enterprise', icon: Building2 },
  { title: 'Media & communications', description: 'Editorial and distribution workflows', href: '/solutions-media-communication', icon: Tv },
  { title: 'Education', description: 'Lectures, cohorts and replay', href: '/solutions-education', icon: Compass },
  { title: 'Faith & community', description: 'Services and gatherings, streamed well', href: '/solutions', icon: Heart },
  { title: 'Public & civic institutions', description: 'Transparent, accessible proceedings', href: '/civic-events-detailed', icon: Landmark },
];

const WORKFLOW_ITEMS: MenuItem[] = [
  { title: 'Workflow finder', description: 'Answer three questions, get a path', href: '/workflow-finder', icon: Compass },
  { title: 'Live product video', description: 'Streaming embedded in your app', href: '/live-product-video', icon: Video },
  { title: 'Enterprise broadcast', description: 'Company-wide, all-hands scale', href: '/solutions-enterprise-broadcast', icon: Radio },
  { title: 'Private audience delivery', description: 'Restricted, credentialed viewing', href: '/solutions-private-audience-delivery', icon: Lock },
  { title: 'Global event streaming', description: 'One event, every time zone', href: '/solutions', icon: Globe2 },
  { title: 'Media preservation', description: 'Keep the record intact', href: '/solutions-media-preservation', icon: Archive },
  { title: 'Operational analytics', description: 'Prove reach and reliability', href: '/solutions', icon: BarChart3 },
];

const POPULAR_TAGS = ['Workflow finder', 'Enterprise broadcast', 'Accessibility', 'Global events', 'Preservation'];

export default function SolutionsDropdown() {
  return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.16)] dark:border-gray-700 dark:bg-gray-900 dark:shadow-[0_22px_70px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col gap-3 border-b border-slate-100 px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-8 sm:py-5 dark:border-gray-800">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-pink-100 bg-pink-50 text-pink-600 shadow-sm sm:h-10 sm:w-10 dark:border-pink-900/40 dark:bg-pink-950/40 dark:text-pink-400">
            <Layers className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0">
            <h2 className="text-[15px] font-extrabold leading-tight text-slate-900 sm:text-[17px] dark:text-white">Solutions</h2>
            <p className="max-w-2xl text-[10px] leading-4.5 text-slate-500 sm:text-[11px] sm:leading-5 dark:text-gray-400">
              Self-select by outcome or organization, not by product taxonomy.
            </p>
          </div>
        </div>

        <Link
          href="/solutions"
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-slate-200 px-3 py-2 text-[10px] font-bold text-pink-600 transition-colors hover:bg-slate-50 sm:px-4 sm:text-[11px] dark:border-gray-700 dark:text-pink-400 dark:hover:bg-gray-800"
        >
          Overview
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="max-h-[calc(100vh-165px)] overflow-y-auto overscroll-contain scrollbar-none">
        <div className="grid grid-cols-1 divide-y divide-slate-100 md:grid-cols-4 md:divide-x md:divide-y-0 dark:divide-gray-800">
          <MenuColumn title="By objective" items={OBJECTIVE_ITEMS} accentClassName="text-pink-600 dark:text-pink-400" />
          <MenuColumn title="By organization" items={ORGANIZATION_ITEMS} accentClassName="text-pink-600 dark:text-pink-400" />
          <MenuColumn title="Featured workflows" items={WORKFLOW_ITEMS} accentClassName="text-pink-600 dark:text-pink-400" />

          <aside className="bg-slate-900 p-4 md:col-span-1 dark:bg-black">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-4 text-white shadow-lg sm:p-5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-pink-500/20 blur-3xl sm:h-36 sm:w-36"
              />

              <div className="relative z-10 space-y-4">
                <div className="flex h-24 items-center justify-center rounded-xl  p-3 sm:h-28">
                 <img className='' src="/images/header/Overlay+Border.png"></img>
                </div>

                <div className="space-y-2">
                  <div className='flex flex-row space-x-2'>
                  <p className="text-[10px] font-bold uppercase text-pink-300 sm:text-[9px] ">
                    Featured path
                  </p>
                  <p className="text-[10px] font-bold uppercase  text-white/50 sm:text-[9px]">
                    Outcome visual
                  </p>
                  </div>
                  <h3 className="max-w-[11rem] text-[12px] font-extrabold leading-snug sm:text-[14px]">
                    Video infrastructure built around your outcome.
                  </h3>
                  <p className="text-[10px] leading-relaxed text-slate-300 sm:text-[11px]">
                    One platform, three clear entry points: developer, enterprise and Live Events.
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-4 border-t border-white/10 pt-4 sm:mt-5 sm:pt-5">
                <div className="space-y-2.5">
                  <Link
                    href="/solutions"
                    className="flex items-center justify-between text-[10px] font-bold text-white transition-colors hover:text-pink-300 sm:text-[11px]"
                  >
                    <span>Explore solutions</span>
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                  <Link
                    href="/about-us"
                    className="flex items-center justify-between text-[10px] font-semibold text-slate-300 transition-colors hover:text-white sm:text-[11px]"
                  >
                    <span>Talk to an expert</span>
                    <ChevronRight className="h-3 w-3" />
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
              <Target className="h-3.5 w-3.5 text-slate-400 dark:text-gray-500" />
              <span>{tag}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-200 bg-slate-50 px-4 py-4 sm:px-8 md:flex-row md:items-center md:justify-between dark:border-gray-800 dark:bg-gray-800/60">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
              <Sparkles className="h-3.5 w-3.5 text-slate-500 dark:text-gray-400" />
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
            <Link href="/solutions" className="inline-flex items-center gap-1.5 transition-colors hover:text-pink-600 dark:hover:text-pink-400">
              <Grid className="h-3 w-3 text-pink-600 dark:text-pink-400" />
              Solutions overview
            </Link>
            <Link href="/products" className="inline-flex items-center gap-1.5 transition-colors hover:text-pink-600 dark:hover:text-pink-400">
              <DollarSign className="h-3 w-3 text-pink-600 dark:text-pink-400" />
              View pricing
            </Link>
            <Link href="/about-us" className="inline-flex items-center gap-1.5 transition-colors hover:text-pink-600 dark:hover:text-pink-400">
              <Headphones className="h-3 w-3 text-pink-600 dark:text-pink-400" />
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
              className="group flex items-start gap-2 rounded-xl p-1.5 transition-colors hover:bg-pink-50/70 sm:gap-2.5 sm:p-2 dark:hover:bg-pink-950/30"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-pink-100 bg-pink-50 text-pink-600 transition-colors group-hover:border-pink-200 group-hover:bg-white dark:border-pink-900/40 dark:bg-pink-950/40 dark:text-pink-400 dark:group-hover:border-pink-800 dark:group-hover:bg-gray-900">
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-pink-600 sm:text-[12px] dark:text-white dark:group-hover:text-pink-400">
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
