'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Calendar,
  ChevronRight,
  ClosedCaption,
  Eye,
  FileText,
  GraduationCap,
  Headphones,
  Heart,
  HelpCircle,
  Layers,
  Lock,
  Radio,
  Search,
  ShieldCheck,
  Sliders,
  Sparkles,
  type LucideIcon,
  Video,
  RotateCcw,
  Zap,
  Briefcase,
} from 'lucide-react';

type MenuItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const EVENT_TYPE_ITEMS: MenuItem[] = [
  { title: 'Live Events overview', description: 'How managed streaming works here', href: '/live-events-overview', icon: Radio },
  { title: 'Memorials', description: 'Handled with care, never exploited', href: '/memorials', icon: Heart },
  { title: 'Worship', description: 'Services streamed reliably', href: '/workship-detailed', icon: Sparkles },
  { title: 'Weddings & celebrations', description: 'Private or shared, your choice', href: '/wedding-celebration', icon: Calendar },
  { title: 'Graduations', description: 'Every name, every family watching', href: '/graduation-detailed', icon: GraduationCap },
  { title: 'Civic events', description: 'Public proceedings, clearly delivered', href: '/civic-events-detailed', icon: Building2 },
  { title: 'Corporate broadcasts', description: 'All-hands and announcements', href: '/corporate-broadcast-detailed', icon: Briefcase },
];

const PLAN_ITEMS: MenuItem[] = [
  { title: 'Workflow overview', description: 'From booking to broadcast', href: '/workflow-overview', icon: Sliders },
  { title: 'Managed live event streaming', description: 'We run it end to end', href: '/managed-live-event-streaming', icon: Radio },
  { title: 'Remote contribution', description: 'Send video in from any location', href: '/live-events', icon: Video },
  { title: 'Production, switching & graphics', description: 'Cameras, switching, graphics', href: '/live-events', icon: Zap },
  { title: 'Secure audience access', description: 'Invite-only or ticketed viewing', href: '/live-events', icon: ShieldCheck },
  { title: 'Captions and languages', description: 'Understood by every guest', href: '/captions-and-languages', icon: ClosedCaption },
  { title: 'Recording, replay & archive', description: 'Keep the moment afterward', href: '/recording-replay-archive', icon: RotateCcw },
];

const RESILIENCE_ITEMS: MenuItem[] = [
  { title: 'Conferences & multi-track', description: 'Multi-session programming', href: '/conference-and-multitrack', icon: Layers },
  { title: 'Event resilience', description: 'Built for the one shot that matters', href: '/live-events', icon: ShieldCheck },
  { title: 'Assured Event', description: 'Our highest-assurance tier', href: '/assured-event', icon: Lock },
  { title: 'Private streaming', description: 'Closed, credentialed rooms', href: '/private-streaming', icon: Eye },
  { title: 'Accessibility & inclusion', description: 'Captioned & screen-reader friendly', href: '/accessibility-inclusion', icon: HelpCircle },
  { title: 'FAQs & support', description: 'Answers before you book', href: '/live-events', icon: FileText },
  { title: 'Planning & briefing', description: 'Start your event brief', href: '/live-events', icon: Headphones },
];

const POPULAR_TAGS = [
  'Plan a live event',
  'Assured Event',
  'Memorials guidance',
  'Remote contribution',
  'Captions',
];

export default function LiveEventsDropdown() {
  return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.16)] dark:border-gray-700 dark:bg-gray-900 dark:shadow-[0_22px_70px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col gap-3 border-b border-slate-100 px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-8 sm:py-5 dark:border-gray-800">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-100 bg-violet-50 text-violet-600 shadow-sm sm:h-10 sm:w-10 dark:border-violet-900/40 dark:bg-violet-950/40 dark:text-violet-400">
            <Radio className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0">
            <h2 className="text-[15px] font-extrabold leading-tight text-slate-900 sm:text-[17px] dark:text-white">Live Events</h2>
            <p className="max-w-2xl text-[10px] leading-4.5 text-slate-500 sm:text-[11px] sm:leading-5 dark:text-gray-400">
              A ZoikoStream capability for moments that cannot be repeated.
            </p>
          </div>
        </div>

        <Link
          href="/live-events-overview"
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-slate-200 px-3 py-2 text-[10px] font-bold text-violet-600 transition-colors hover:bg-slate-50 sm:px-4 sm:text-[11px] dark:border-gray-700 dark:text-violet-400 dark:hover:bg-gray-800"
        >
          Overview
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="max-h-[calc(100vh-165px)] overflow-y-auto overscroll-contain scrollbar-none">
        <div className="grid grid-cols-1 divide-y divide-slate-100 md:grid-cols-4 md:divide-x md:divide-y-0 dark:divide-gray-800">
          <MenuColumn title="Event types" items={EVENT_TYPE_ITEMS} accentClassName="text-violet-600 dark:text-violet-400" hoverClassName="hover:bg-violet-50/70 dark:hover:bg-violet-950/30" iconClassName="border-violet-100 bg-violet-50 text-violet-600 group-hover:border-violet-200 group-hover:bg-white dark:border-violet-900/40 dark:bg-violet-950/40 dark:text-violet-400 dark:group-hover:border-violet-800 dark:group-hover:bg-gray-900" />
          <MenuColumn title="Plan & operate" items={PLAN_ITEMS} accentClassName="text-violet-600 dark:text-violet-400" hoverClassName="hover:bg-violet-50/70 dark:hover:bg-violet-950/30" iconClassName="border-violet-100 bg-violet-50 text-violet-600 group-hover:border-violet-200 group-hover:bg-white dark:border-violet-900/40 dark:bg-violet-950/40 dark:text-violet-400 dark:group-hover:border-violet-800 dark:group-hover:bg-gray-900" />
          <MenuColumn title="Resilience & help" items={RESILIENCE_ITEMS} accentClassName="text-violet-600 dark:text-violet-400" hoverClassName="hover:bg-violet-50/70 dark:hover:bg-violet-950/30" iconClassName="border-violet-100 bg-violet-50 text-violet-600 group-hover:border-violet-200 group-hover:bg-white dark:border-violet-900/40 dark:bg-violet-950/40 dark:text-violet-400 dark:group-hover:border-violet-800 dark:group-hover:bg-gray-900" />

          <aside className="bg-slate-900 p-4 md:col-span-1 dark:bg-black">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-4 text-white shadow-lg sm:p-5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-500/20 blur-3xl sm:h-36 sm:w-36"
              />
              <div className="relative z-10 space-y-4">
                <div className="flex h-24 items-center justify-center rounded-xl  p-3 sm:h-28">
                 <img className='' src="/images/header/SVG.png"></img>
                </div>

                <div className="space-y-2">
                  <div className='flex flex-row space-x-2'>
                  <p className="text-[10px] font-bold uppercase text-[#C9AEFF] sm:text-[9px] ">
                    Featured path
                  </p>
                  <p className="text-[10px] font-bold uppercase  text-white/50 sm:text-[9px]">
                    Real interface crop
                  </p>
                  </div>
                  <h3 className="max-w-[11rem] text-[12px] font-extrabold leading-snug sm:text-[14px]">
                    Professional streaming for moments that cannot be repeated.
                  </h3>
                  <p className="text-[10px] leading-relaxed text-slate-300 sm:text-[11px]">
                    Respectful production paired with enterprise broadcast infrastructure.
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-4 border-t border-white/10 pt-4 sm:mt-5 sm:pt-5">
                <div className="space-y-2.5">
                  <Link
                    href="/plan-a-live-event"
                    className="flex items-center justify-between text-[10px] font-bold text-white transition-colors hover:text-violet-300 sm:text-[11px]"
                  >
                    <span>Plan a live event</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                  <Link
                    href="/about-us"
                    className="flex items-center justify-between text-[10px] font-semibold text-slate-300 transition-colors hover:text-white sm:text-[11px]"
                  >
                    <span>Talk to an expert</span>
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
              <Search className="h-3.5 w-3.5 text-slate-400 dark:text-gray-500" />
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
            <Link href="/live-events-overview" className="inline-flex items-center gap-1.5 transition-colors hover:text-violet-600 dark:hover:text-violet-400">
              <Radio className="h-3 w-3 text-violet-600 dark:text-violet-400" />
              Live Events overview
            </Link>
            <Link href="/products" className="inline-flex items-center gap-1.5 transition-colors hover:text-violet-600 dark:hover:text-violet-400">
              <ShieldCheck className="h-3 w-3 text-violet-600 dark:text-violet-400" />
              Security
            </Link>
            <Link href="/about-us" className="inline-flex items-center gap-1.5 transition-colors hover:text-violet-600 dark:hover:text-violet-400">
              <Headphones className="h-3 w-3 text-violet-600 dark:text-violet-400" />
              Expert support
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
  hoverClassName,
  iconClassName,
}: {
  title: string;
  items: MenuItem[];
  accentClassName: string;
  hoverClassName: string;
  iconClassName: string;
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
              className={`group flex items-start gap-2 rounded-xl p-1.5 transition-colors sm:gap-2.5 sm:p-2 ${hoverClassName}`}
            >
              <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-current transition-colors ${iconClassName}`}>
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-violet-600 sm:text-[12px] dark:text-white dark:group-hover:text-violet-400">
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
