'use client';

import Link from 'next/link';
import {
  Activity,
  BarChart3,
  Building2,
  ChevronRight,
  Code2,
  Disc,
  DollarSign,
  Film,
  FolderKanban,
  Globe2,
  Grid,
  Headphones,
  KeyRound,
  Languages,
  Lock,
  Radio,
  RefreshCw,
  Search,
  ShieldCheck,
  Terminal,
  Tv,
  type LucideIcon,
  Zap,
} from 'lucide-react';

type MenuItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const BUILD_ITEMS: MenuItem[] = [
  { title: 'Platform overview', description: 'How the lifecycle fits together', href: '/platform-overview', icon: Grid },
  { title: 'Video APIs', description: 'Programmable ingest, playback, control', href: '/video-apis', icon: Code2 },
  { title: 'SDKs', description: 'Native libraries for every surface', href: '/sdks', icon: Terminal },
  { title: 'Media protocols', description: 'RTMPS, SRT, WHIP and more', href: '/platform-media-protocol', icon: Radio },
  { title: 'Live streaming', description: 'Broadcast to any audience size', href: '/live-streaming', icon: Tv },
  { title: 'Real-time contribution', description: 'Get signal in from anywhere', href: '/real-time-contribution', icon: RefreshCw },
  { title: 'Video on demand', description: 'Store, package and serve replays', href: '/platform-video-on-demand', icon: Film },
];

const OPERATE_ITEMS: MenuItem[] = [
  {
    title: 'Media operations overview',
    description: 'Run streams like infrastructure',
    href: '/platform-media-operation-overview',
    icon: Grid,
  },
  {
    title: 'Enterprise broadcasting',
    description: 'Multi-destination, managed output',
    href: '/products',
    icon: Building2,
  },
  { title: 'Media management', description: 'Organize assets at scale', href: '/platform-media-management', icon: FolderKanban },
  { title: 'Stream monitoring', description: 'Live health and diagnostics', href: '/platform-stream-monitoring', icon: Activity },
  { title: 'Recording and replay', description: 'Automatic, durable capture', href: '/platform-recording-replay', icon: Disc },
  { title: 'Captions and translation', description: 'Reach audiences in-language', href: '/platform-captions-and-translation', icon: Languages },
  { title: 'Analytics', description: 'Viewer, quality and delivery data', href: '/platform-analytics', icon: BarChart3 },
];

const SECURE_ITEMS: MenuItem[] = [
  {
    title: 'Delivery and trust overview',
    description: 'What keeps every stream safe',
    href: '/products',
    icon: Grid,
  },
  { title: 'Access control', description: 'Identity-aware entitlements', href: '/platform-access-control', icon: KeyRound },
  { title: 'Secure playback', description: 'Signed, tokenized delivery', href: '/platform-secure-playback', icon: ShieldCheck },
  { title: 'Adaptive video delivery', description: 'Quality that fits the network', href: '/platform-adaptive-video-delivery', icon: Zap },
  { title: 'Global distribution', description: 'Edge presence worldwide', href: '/platform-global-distribution', icon: Globe2 },
  { title: 'Resilient delivery', description: 'Built to survive failure', href: '/platform-resilient-delivery', icon: RefreshCw },
  { title: 'Media security', description: 'Encryption end to end', href: '/platform-media-security', icon: Lock },
];

const POPULAR_TAGS = ['Video APIs', 'Adaptive delivery', 'Media protocols', 'Analytics', 'Security'];

export default function PlatformDropdown() {
  return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.16)] dark:border-gray-700 dark:bg-gray-900 dark:shadow-[0_22px_70px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col gap-3 border-b border-slate-100 px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-8 sm:py-5 dark:border-gray-800">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-indigo-600 shadow-sm sm:h-10 sm:w-10 dark:border-indigo-900/40 dark:bg-indigo-950/40 dark:text-indigo-400">
            <Grid className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0">
            <h2 className="text-[15px] font-extrabold leading-tight text-slate-900 sm:text-[17px] dark:text-white">Platform</h2>
            <p className="max-w-2xl text-[10px] leading-4.5 text-slate-500 sm:text-[11px] sm:leading-5 dark:text-gray-400">
              The complete secure media lifecycle, from first signal to lasting replay.
            </p>
          </div>
        </div>

        <Link
          href="/products"
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-slate-200 px-3 py-2 text-[10px] font-bold text-indigo-600 transition-colors hover:bg-slate-50 sm:px-4 sm:text-[11px] dark:border-gray-700 dark:text-indigo-400 dark:hover:bg-gray-800"
        >
          Overview
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="max-h-[calc(100vh-165px)] overflow-y-auto overscroll-contain scrollbar-none">
        <div className="grid grid-cols-1 divide-y divide-slate-100 md:grid-cols-4 md:divide-x md:divide-y-0 dark:divide-gray-800">
          <MenuColumn title="Build" items={BUILD_ITEMS} />
          <MenuColumn title="Operate" items={OPERATE_ITEMS} />
          <MenuColumn title="Secure & Deliver" items={SECURE_ITEMS} />

          <aside className="bg-slate-900 p-4 md:col-span-1 dark:bg-black">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-4 text-white shadow-lg sm:p-5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/20 blur-3xl sm:h-36 sm:w-36"
              />

              <div className="relative z-10 space-y-4">
                <div className="flex h-24 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 sm:h-28">
                    <img src="/images/header/SVG (4).svg"/>
                </div>

                <div className="space-y-2">
                  <div className='flex flex-row gap-4'>
                  <p className="text-[9px] font-bold uppercase text-blue-300 sm:text-[8px]">
                    Featured life cycle
                  </p>
                 
                  <p className="text-[9px] font-bold uppercase  text-white/50 sm:text-[8px]">
                    Interactive diagram
                  </p></div>
                  <h3 className="max-w-[11rem] text-[12px] font-extrabold leading-snug sm:text-[14px]">
                    From first signal to lasting replay.
                  </h3>
                  <p className="text-[10px] leading-relaxed text-slate-300 sm:text-[11px]">
                    Seven stages, one platform: contribute, ingest, produce, secure, deliver, understand, preserve.
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-4 border-t border-white/10 pt-4 sm:mt-5 sm:pt-5">
                <div className="space-y-2.5">
                  <Link
                    href="https://zoikostream-git-454227754507.europe-west1.run.app"
                    className="flex items-center justify-between text-[10px] font-bold text-white transition-colors hover:text-blue-300 sm:text-[11px]"
                  >
                    <span>Explore the platform</span>
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

        <div className="w-full min-h-[64px] px-4 py-4 border-t border-slate-100 flex flex-wrap items-center gap-3 bg-white sm:px-9 dark:border-gray-800 dark:bg-gray-900">
          <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mr-2 dark:text-gray-500">
            Popular
          </span>

          {POPULAR_TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              className="h-8 px-3.5 bg-white rounded-full border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center gap-2 cursor-pointer text-slate-900 text-xs font-semibold dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-600"
            >
              <Code2 className="w-3.5 h-3.5 text-slate-400 dark:text-gray-500" />
              <span>{tag}</span>
            </button>
          ))}
        </div>

        <div className="w-full min-h-[64px] px-4 py-4 bg-slate-50 border-t border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:px-9 dark:bg-gray-800/60 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm shrink-0 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400">
              <Search className="w-4 h-4 text-slate-500 dark:text-gray-400" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 leading-tight dark:text-white">
                Not sure where to start?
              </h4>
              <p className="text-xs font-medium text-slate-600 leading-normal dark:text-gray-400">
                We&apos;ll help you find the right route through ZoikoStream.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-slate-900 dark:text-white">
            <Link href="/products" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
              <Grid className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              <span>Platform overview</span>
            </Link>

            <Link href="/products" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
              <DollarSign className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              <span>View pricing</span>
            </Link>

            <Link href="/about-us" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
              <Headphones className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              <span>Talk to an expert</span>
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
}: {
  title: string;
  items: MenuItem[];
}) {
  return (
    <section className="space-y-2.5 p-4 sm:p-5">
      <span className="block px-2 text-[9px] font-bold uppercase tracking-[0.22em] text-indigo-600 sm:text-[10px] dark:text-indigo-400">
        {title}
      </span>
      <div className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-start gap-2 rounded-xl p-1.5 transition-colors hover:bg-indigo-50/70 sm:gap-2.5 sm:p-2 dark:hover:bg-indigo-950/30"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-indigo-100 bg-indigo-50 text-indigo-600 transition-colors group-hover:border-indigo-200 group-hover:bg-white dark:border-indigo-900/40 dark:bg-indigo-950/40 dark:text-indigo-400 dark:group-hover:border-indigo-800 dark:group-hover:bg-gray-900">
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-indigo-600 sm:text-[12px] dark:text-white dark:group-hover:text-indigo-400">
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
