import Link from 'next/link';
import {
  ChevronRight,
  Activity,
  ArrowRight,
  BarChart3,
  BookOpen,
  Code,
  Compass,
  ExternalLink,
  FileText,
  FolderGit2,
  Gauge,
  HardDrive,
  HelpCircle,
  History,
  Key,
  Layers,
  Lock,
  MessageSquare,
  Network,
  PlaySquare,
  Radio,
  Search,
  ShieldCheck,
  Sparkles,
  Tag,
  Video,
  Webhook,
  Zap,
  type LucideIcon,
} from 'lucide-react';

type MenuItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const GET_STARTED_ITEMS: MenuItem[] = [
  { title: 'Developers overview', description: 'Where to begin, and why', href: '/developers-overview', icon: Compass },
  { title: 'Documentation', description: 'Full technical reference', href: '/developer-documentation', icon: FileText },
  { title: 'Quickstart', description: 'Credential to working stream, fast', href: '/quick-start', icon: Zap },
  { title: 'API reference', description: 'Every endpoint, typed and explained', href: '/developer-api-reference', icon: BookOpen },
  { title: 'Authentication', description: 'Keys, tokens and scopes', href: '/authentication', icon: Key },
  { title: 'Developer access', description: 'The real access model, stated plainly', href: '/developer-access-page', icon: ShieldCheck },
  { title: 'Sample applications', description: 'Working repos you can clone', href: '/sample-application', icon: FolderGit2 },
];

const BUILD_ITEMS: MenuItem[] = [
  { title: 'SDKs', description: 'Maintained libraries, current versions', href: '/developer-sdk', icon: Layers },
  { title: 'Live streaming API', description: 'Publish and manage broadcasts', href: '/live-streaming-api', icon: Radio },
  { title: 'Video-on-demand API', description: 'Upload, encode, deliver', href: '/developer-video-demand-api', icon: Video },
  { title: 'Media protocols', description: 'RTMPS, SRT, WHIP, qualified', href: '/developer-media-protocol', icon: Network },
  { title: 'Webhooks and events', description: 'React to stream state changes', href: '/webhooks', icon: Webhook },
  { title: 'Secure playback', description: 'Signed URLs and DRM options', href: '/developer-secure-playback', icon: Lock },
  { title: 'Player integration', description: 'Embed a production-ready player', href: '/developer-player-integrations', icon: PlaySquare },
];

const OPERATE_ITEMS: MenuItem[] = [
  { title: 'Analytics API', description: 'Query viewer and QoS data', href: '/developer-analytics-api', icon: BarChart3 },
  { title: 'Stream monitoring', description: 'Health checks and alerts', href: '/developer-stream-monitoring', icon: Activity },
  { title: 'Recording and assets', description: 'Manage stored media', href: '/developer-recording-assest', icon: HardDrive },
  { title: 'Error handling', description: 'Codes, retries and guidance', href: '/developers', icon: HelpCircle },
  { title: 'Rate limits', description: 'Know your ceilings up front', href: '/developers-rate-limits', icon: Gauge },
  { title: 'Changelog', description: 'What shipped, and when', href: '/developers-changelog', icon: History },
  { title: 'System status', description: 'Live platform health', href: '/developers-system-status', icon: Activity },
];

const POPULAR_TAGS = ['Quickstart', 'API reference', 'Webhooks', 'Rate limits', 'System status'];

export default function DevelopersDropdown() {
  return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.16)] dark:border-gray-700 dark:bg-gray-900 dark:shadow-[0_22px_70px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col gap-3 border-b border-slate-100 px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-8 sm:py-5 dark:border-gray-800">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-100 bg-sky-50 text-cyan-600 shadow-sm sm:h-10 sm:w-10 dark:border-cyan-900/40 dark:bg-cyan-950/40 dark:text-cyan-400">
            <Code className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0">
            <h2 className="text-[15px] font-extrabold leading-tight text-slate-900 sm:text-[17px] dark:text-white">Developers</h2>
            <p className="max-w-2xl text-[10px] leading-4.5 text-slate-500 sm:text-[11px] sm:leading-5 dark:text-gray-400">
              The shortest credible path from discovery to a working stream.
            </p>
          </div>
        </div>

        <Link
          href="/developers"
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-slate-200 px-3 py-2 text-[10px] font-bold text-cyan-600 transition-colors hover:bg-slate-50 sm:px-4 sm:text-[11px] dark:border-gray-700 dark:text-cyan-400 dark:hover:bg-gray-800"
        >
          Overview
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="max-h-[calc(100vh-165px)] overflow-y-auto overscroll-contain scrollbar-none">
        <div className="grid grid-cols-1 divide-y divide-slate-100 md:grid-cols-4 md:divide-x md:divide-y-0 dark:divide-gray-800">
          <MenuColumn title="Get started" items={GET_STARTED_ITEMS} accentClassName="text-cyan-600 dark:text-cyan-400" />
          <MenuColumn title="Build" items={BUILD_ITEMS} accentClassName="text-cyan-600 dark:text-cyan-400" />
          <MenuColumn title="Operate" items={OPERATE_ITEMS} accentClassName="text-cyan-600 dark:text-cyan-400" />

          <aside className="bg-slate-900 p-4 md:col-span-1 dark:bg-black">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-4 text-white shadow-lg sm:p-5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/20 blur-3xl sm:h-36 sm:w-36"
              />

              <div className="relative z-10 space-y-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 font-mono text-[10px] sm:text-xs">
                  <div className="mb-3 flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="font-semibold text-sky-300">POST /v1/streams</div>
                    <div className="text-white/40">{'{ "title": "keynote" }'}</div>
                    <div className="font-semibold text-emerald-400">200 OK stream_live</div>
                    <div className="text-white/40">→ playback_url ready</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider">
                    <span className="text-sky-300">Featured</span>
                    <span className="text-white/30">•</span>
                    <span className="text-white/50">Real request</span>
                  </div>
                  <h3 className="text-[12px] font-extrabold leading-snug sm:text-[14px]">
                    Create your first stream.
                  </h3>
                  <p className="text-[10px] leading-relaxed text-slate-300 sm:text-[11px]">
                    A real API request and response, copy it, run it, see a stream come online.
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-4 border-t border-white/10 pt-4 sm:mt-5 sm:pt-5">
                <div className="space-y-2.5">
                  <Link
                    href="/developers"
                    className="flex items-center justify-between text-[10px] font-bold text-white transition-colors hover:text-sky-300 sm:text-[11px]"
                  >
                    <span>Start building</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                  <Link
                    href="/developers"
                    className="flex items-center justify-between text-[10px] font-bold text-white/70 transition-colors hover:text-white sm:text-[11px]"
                  >
                    <span>Read documentation</span>
                    <ExternalLink className="h-3 w-3" />
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
              <Tag className="h-3.5 w-3.5 text-slate-400 dark:text-gray-500" />
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
              <h4 className="text-[12px] font-bold text-slate-900 sm:text-[13px] dark:text-white">Not sure where to start?</h4>
              <p className="text-[10px] text-slate-600 sm:text-[11px] dark:text-gray-400">
                We&apos;ll help you find the right route through ZoikoStream.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold text-slate-900 sm:gap-6 sm:text-[11px] dark:text-white">
            <Link href="/developers" className="inline-flex items-center gap-1.5 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400">
              <Compass className="h-3 w-3 text-cyan-600 dark:text-cyan-400" />
              Developers overview
            </Link>
            <Link href="/products" className="inline-flex items-center gap-1.5 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400">
              <Search className="h-3 w-3 text-cyan-600 dark:text-cyan-400" />
              View pricing
            </Link>
            <Link href="/about-us" className="inline-flex items-center gap-1.5 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400">
              <MessageSquare className="h-3 w-3 text-cyan-600 dark:text-cyan-400" />
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
              className="group flex items-start gap-2 rounded-xl p-1.5 transition-colors hover:bg-cyan-50/70 sm:gap-2.5 sm:p-2 dark:hover:bg-cyan-950/30"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-cyan-100 bg-sky-50 text-cyan-600 transition-colors group-hover:border-cyan-200 group-hover:bg-white dark:border-cyan-900/40 dark:bg-cyan-950/40 dark:text-cyan-400 dark:group-hover:border-cyan-800 dark:group-hover:bg-gray-900">
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-cyan-600 sm:text-[12px] dark:text-white dark:group-hover:text-cyan-400">
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
