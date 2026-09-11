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
  { name: 'Live Events', href: '/live-events-overview', dropdown: 'live-events' as const },
  { name: 'Developers', href: '/developers', dropdown: 'developers' as const },
  { name: 'Pricing', href: '/pricing', dropdown: null, active: true },
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

type MobileItem = {
  title: string;
  description: string;
  href: string;
};

type MobileSection = {
  sectionTitle: string;
  items: MobileItem[];
};

const MOBILE_CATEGORIES: Record<DropdownKey, MobileSection[]> = {
  products: [
    {
      sectionTitle: 'BUILD',
      items: [
        { title: 'Platform overview', description: 'How the lifecycle fits together', href: '/platform-overview' },
        { title: 'Video APIs', description: 'Programmable ingest, playback, control', href: '/video-apis' },
        { title: 'SDKs', description: 'Native libraries for every surface', href: '/sdks' },
        { title: 'Media protocols', description: 'RTMPS, SRT, WHIP and more', href: '/platform-media-protocol' },
        { title: 'Live streaming', description: 'Broadcast to any audience size', href: '/live-streaming' },
        { title: 'Real-time contribution', description: 'Get signal in from anywhere', href: '/real-time-contribution' },
        { title: 'Video on demand', description: 'Store, package and serve replays', href: '/platform-video-on-demand' },
      ],
    },
    {
      sectionTitle: 'OPERATE',
      items: [
        { title: 'Media operations overview', description: 'Run streams like infrastructure', href: '/platform-media-operations-overview' },
        { title: 'Enterprise broadcasting', description: 'Multi-destination, managed output', href: '/platform-enterprise-broadcasting' },
        { title: 'Media management', description: 'Organize assets at scale', href: '/platform-media-management' },
        { title: 'Stream monitoring', description: 'Live health and diagnostics', href: '/platform-stream-monitoring' },
        { title: 'Recording and replay', description: 'Automatic, durable capture', href: '/platform-recording-replay' },
        { title: 'Captions and translation', description: 'Reach audiences in-language', href: '/platform-captions-and-translation' },
        { title: 'Analytics', description: 'Viewer, quality and delivery data', href: '/platform-analytics' },
      ],
    },
    {
      sectionTitle: 'SECURE',
      items: [
        { title: 'Delivery and trust overview', description: 'What keeps every stream safe', href: '/platform-delivery-and-trust-overview' },
        { title: 'Access control', description: 'Identity-aware entitlements', href: '/platform-access-control' },
        { title: 'Secure playback', description: 'Signed, tokenized delivery', href: '/platform-secure-playback' },
        { title: 'Adaptive video delivery', description: 'Quality that fits the network', href: '/platform-adaptive-video-delivery' },
        { title: 'Global distribution', description: 'Edge presence worldwide', href: '/platform-global-distribution' },
        { title: 'Resilient delivery', description: 'Built to survive failure', href: '/platform-resilient-delivery' },
        { title: 'Media security', description: 'Encryption end to end', href: '/platform-media-security' },
      ],
    },
  ],

  solutions: [
    {
      sectionTitle: 'BY OBJECTIVE',
      items: [
        { title: 'Solutions overview', description: 'Find your fastest path in', href: '/solutions-overview' },
        { title: 'Build video into a product', description: 'Embed streaming as a feature', href: '/build-video-into-product' },
        { title: 'Broadcast globally', description: 'One-to-many at scale', href: '/Broadcast-globally' },
        { title: 'Secure enterprise video', description: 'Governed internal and external media', href: '/secure-enterprise-video' },
        { title: 'Accessible & multilingual video', description: 'Captioned, translated, inclusive', href: '/accessible-multilingual' },
        { title: 'Record, replay and preserve', description: 'Durable long-term archives', href: '/solutions' },
        { title: 'Run managed Live Events', description: 'Produced, one-time broadcasts', href: '/solutions' },
      ],
    },
    {
      sectionTitle: 'BY ORGANIZATION',
      items: [
        { title: 'Organization overview', description: 'Solutions grouped by who you are', href: '/solutions-organization-overview' },
        { title: 'Developers & product teams', description: 'Ship video features fast', href: '/solutions-developer-product-teams' },
        { title: 'Enterprises', description: 'Operate media at company scale', href: '/solutions-enterprise' },
        { title: 'Media & communications', description: 'Editorial and distribution workflows', href: '/solutions-media-communication' },
        { title: 'Education', description: 'Lectures, cohorts and replay', href: '/solutions-education' },
        { title: 'Faith & community', description: 'Services and gatherings, streamed well', href: '/solutions' },
        { title: 'Public & civic institutions', description: 'Transparent, accessible proceedings', href: '/civic-events-detailed' },
      ],
    },
    {
      sectionTitle: 'FEATURED WORKFLOWS',
      items: [
        { title: 'Workflow finder', description: 'Answer three questions, get a path', href: '/workflow-finder' },
        { title: 'Live product video', description: 'Streaming embedded in your app', href: '/live-product-video' },
        { title: 'Enterprise broadcast', description: 'Company-wide, all-hands scale', href: '/solutions-enterprise-broadcast' },
        { title: 'Private audience delivery', description: 'Restricted, credentialed viewing', href: '/solutions-private-audience-delivery' },
        { title: 'Global event streaming', description: 'One event, every time zone', href: '/global-event-streaming' },
        { title: 'Media preservation', description: 'Keep the record intact', href: '/solutions-media-preservation' },
        { title: 'Operational analytics', description: 'Prove reach and reliability', href: '/operational-analytics' },
      ],
    },
  ],

  'live-events': [
    {
      sectionTitle: 'EVENT TYPES',
      items: [
        { title: 'Live Events overview', description: 'How managed streaming works here', href: '/live-events-overview' },
        { title: 'Memorials', description: 'Handled with care, never exploited', href: '/memorials' },
        { title: 'Worship', description: 'Services streamed reliably', href: '/workship-detailed' },
        { title: 'Weddings & celebrations', description: 'Private or shared, your choice', href: '/wedding-celebration' },
        { title: 'Graduations', description: 'Every name, every family watching', href: '/graduation-detailed' },
        { title: 'Civic events', description: 'Public proceedings, clearly delivered', href: '/civic-events-detailed' },
        { title: 'Corporate broadcasts', description: 'All-hands and announcements', href: '/corporate-broadcast-detailed' },
      ],
    },
    {
      sectionTitle: 'PLANNING & WORKFLOW',
      items: [
        { title: 'Workflow overview', description: 'From booking to broadcast', href: '/workflow-overview' },
        { title: 'Managed live event streaming', description: 'We run it end to end', href: '/managed-live-event-streaming' },
        { title: 'Remote contribution', description: 'Send video in from any location', href: '/remote-contribution-landing' },
        { title: 'Production, switching & graphics', description: 'Cameras, switching, graphics', href: '/production-switching-graphics' },
        { title: 'Secure audience access', description: 'Invite-only or ticketed viewing', href: '/secure-audience-access' },
        { title: 'Captions and languages', description: 'Understood by every guest', href: '/captions-and-languages' },
        { title: 'Recording, replay & archive', description: 'Keep the moment afterward', href: '/recording-replay-archive' },
      ],
    },
    {
      sectionTitle: 'RESILIENCE & ASSURANCE',
      items: [
        { title: 'Conferences & multi-track', description: 'Multi-session programming', href: '/conference-and-multitrack' },
        { title: 'Event resilience', description: 'Built for the one shot that matters', href: '/event-resilience' },
        { title: 'Assured Event', description: 'Our highest-assurance tier', href: '/assured-event' },
        { title: 'Private streaming', description: 'Closed, credentialed rooms', href: '/private-streaming' },
        { title: 'Accessibility & inclusion', description: 'Captioned & screen-reader friendly', href: '/accessibility-inclusion' },
        { title: 'FAQs & support', description: 'Answers before you book', href: '/faqs-and-support' },
        { title: 'Planning & briefing', description: 'Start your event brief', href: '/planning-and-briefing' },
      ],
    },
  ],

  developers: [
    {
      sectionTitle: 'GET STARTED',
      items: [
        { title: 'Developers overview', description: 'Where to begin, and why', href: '/developers-overview' },
        { title: 'Documentation', description: 'Full technical reference', href: '/developer-documentation' },
        { title: 'Quickstart', description: 'Credential to working stream, fast', href: '/quick-start' },
        { title: 'API reference', description: 'Every endpoint, typed and explained', href: '/developer-api-reference' },
        { title: 'Authentication', description: 'Keys, tokens and scopes', href: '/authentication' },
        { title: 'Developer access', description: 'The real access model, stated plainly', href: '/developer-access-page' },
        { title: 'Sample applications', description: 'Working repos you can clone', href: '/sample-application' },
      ],
    },
    {
      sectionTitle: 'BUILD',
      items: [
        { title: 'SDKs', description: 'Maintained libraries, current versions', href: '/developer-sdk' },
        { title: 'Live streaming API', description: 'Publish and manage broadcasts', href: '/live-streaming-api' },
        { title: 'Video-on-demand API', description: 'Upload, encode, deliver', href: '/developer-video-demand-api' },
        { title: 'Media protocols', description: 'RTMPS, SRT, WHIP, qualified', href: '/developer-media-protocol' },
        { title: 'Webhooks and events', description: 'React to stream state changes', href: '/developer-webhooks-events' },
        { title: 'Secure playback', description: 'Signed URLs and DRM options', href: '/developer-secure-playback' },
        { title: 'Player integration', description: 'Embed a production-ready player', href: '/developer-player-integrations' },
      ],
    },
    {
      sectionTitle: 'OPERATE',
      items: [
        { title: 'Analytics API', description: 'Query viewer and QoS data', href: '/developer-analytics-api' },
        { title: 'Stream monitoring', description: 'Health checks and alerts', href: '/developer-stream-monitoring' },
        { title: 'Recording and assets', description: 'Manage stored media', href: '/developer-recording-assest' },
        { title: 'Error handling', description: 'Codes, retries and guidance', href: '/developers' },
        { title: 'Rate limits', description: 'Know your ceilings up front', href: '/developers-rate-limits' },
        { title: 'Changelog', description: 'What shipped, and when', href: '/developers-changelog' },
        { title: 'System status', description: 'Live platform health', href: '/developers-system-status' },
      ],
    },
  ],

  company: [
    {
      sectionTitle: 'ABOUT',
      items: [
        { title: 'Company overview', description: 'Who operates ZoikoStream, and why', href: '/company-overview' },
        { title: 'About ZoikoStream', description: 'Our purpose in plain terms', href: '/about-us' },
        { title: 'Purpose and principles', description: 'What we optimize for', href: '/purpose-principles' },
        { title: 'Leadership', description: 'The people accountable for the platform', href: '/leadership' },
        { title: 'Operating context', description: 'How the group fits together', href: '/operating-context' },
        { title: 'Zoiko Group', description: 'The parent organization', href: '/zoiko-group' },
        { title: 'Zoiko Tech', description: 'Where ZoikoStream is built', href: '/zoiko-tech' },
      ],
    },
    {
      sectionTitle: 'WORK & CONTACT',
      items: [
        { title: 'Careers', description: 'Open roles across the group', href: '/carrers' },
        { title: 'Partners', description: 'Implementation and technology allies', href: '/partners' },
        { title: 'Contact', description: 'General enquiries', href: '/contact-us' },
        { title: 'Enterprise inquiries', description: 'Talk to sales', href: '/enterprise-inquiries' },
        { title: 'Live Events inquiries', description: 'Plan a managed broadcast', href: '/zoikostream-enterprise-inquiries' },
        { title: 'Developer relations', description: 'Talk to the platform team', href: '/zoikostream-developer-relations' },
        { title: 'Accessibility contact', description: 'Report or ask directly', href: '/accessibility' },
      ],
    },
    {
      sectionTitle: 'INFO & TRUST',
      items: [
        { title: 'Newsroom', description: 'Announcements and coverage', href: '/newsroom' },
        { title: 'Press and media', description: 'Assets and media contacts', href: '/press' },
        { title: 'Company updates', description: 'What changed, and when', href: '/zoikostream-company-updates' },
        { title: 'Trust Center', description: 'Security and compliance posture', href: '/company-trust-center' },
        { title: 'System status', description: 'Live platform health', href: '/zoikostream-status' },
        { title: 'Legal', description: 'Terms and agreements', href: '/zoikostream-legal' },
        { title: 'Privacy', description: 'How we handle data', href: '/privacy' },
      ],
    },
  ],

  resources: [
    {
      sectionTitle: 'KNOWLEDGE',
      items: [
        { title: 'Guides', description: 'Deep dives into specific problems', href: '/resources' },
        { title: 'Architecture', description: 'Reference designs and patterns', href: '/resource-architecture' },
        { title: 'Video tutorials', description: 'Watch the workflow, then build it', href: '/resource-video-tutorial' },
        { title: 'Webinars and events', description: 'Live sessions and replays', href: '/resource-webinar-and-events' },
        { title: 'Glossary', description: 'Media and streaming terms, defined', href: '/resource-glossary' },
        { title: 'Blog and insights', description: 'Operations, productivity, growth', href: '/resource-blogs-and-insights' },
      ],
    },
    {
      sectionTitle: 'PROOF & TRUST',
      items: [
        { title: 'Case studies', description: 'How real teams operate ZoikoStream', href: '/resource-case-studies' },
        { title: 'Customer stories', description: 'In their own words', href: '/resource-customer-stories' },
        { title: 'System status', description: 'Live uptime and incident history', href: '/resource-system-status' },
        { title: 'Changelog', description: 'Every shipped change, dated', href: '/resource-change-log' },
        { title: 'Release notes', description: 'What each release means for you', href: '/resource-release-notes' },
        { title: 'Security and Trust Center', description: 'Certifications and practices', href: '/resource-security-trust-center' },
        { title: 'Accessibility', description: 'Our conformance and roadmap', href: '/resource-accessibility' },
      ],
    },
    {
      sectionTitle: 'SUPPORT',
      items: [
        { title: 'Help Center', description: 'Step-by-step help and articles', href: '/resource-help-center' },
        { title: 'Contact support', description: 'Open a ticket or start a chat', href: '/resource-contact-support' },
        { title: 'Developer documentation', description: 'Technical references and guides', href: '/resource-developer-documentation' },
        { title: 'API reference', description: 'Endpoints, params, examples', href: '/resources-api-reference' },
        { title: 'Live Events planning guide', description: 'Book and prepare with confidence', href: '/resources-live-events-planning-guide' },
        { title: 'Service updates', description: 'Maintenance and change notices', href: '/resources-service-updates' },
        { title: 'Community resources', description: 'Connect with other builders', href: '/resources-community-resources' },
      ],
    },
  ],
};

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
          <Link href="/" onClick={closeMobileMenu}>
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

        {/* Desktop Nav */}
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

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-3 lg:flex 2xl:gap-4">
          <Link
            href="https://zoikostream-git-454227754507.europe-west1.run.app/login"
            className="whitespace-nowrap rounded-lg border border-[#d9d6cc] px-3.5 py-2 text-[13px] 2xl:text-[14px] font-semibold text-slate-800 transition-colors hover:bg-slate-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            Sign In
          </Link>
          <Link href="/start-building">
            <button
              type="button"
              className="whitespace-nowrap rounded-xl bg-gradient-to-r from-[#28cfc5] to-[#4f80ff] px-3.5 py-2 text-[13px] 2xl:text-[14px] font-semibold text-slate-950 shadow-sm transition-opacity hover:opacity-95"
            >
              Start building
            </button>
          </Link>
          <Link href="/talk-to-an-expert">
            <button
              type="button"
              className="whitespace-nowrap rounded-xl border border-slate-900 px-3.5 py-2 text-[13px] 2xl:text-[14px] font-semibold text-slate-900 transition-colors hover:bg-slate-900 hover:text-white dark:border-gray-200 dark:text-gray-100 dark:hover:bg-white dark:hover:text-slate-900"
            >
              Talk to an expert
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
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

      {/* Desktop Dropdown Overlay */}
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

      {/* Clean Categorized Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="flex max-h-[calc(100vh-72px)] flex-col gap-4 overflow-y-auto border-b border-slate-200 bg-white px-4 pb-6 pt-4 sm:px-6 lg:hidden dark:border-gray-800 dark:bg-gray-900">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="border-b border-slate-100 dark:border-gray-800 last:border-b-0">
                <div className="flex items-center justify-between py-3 font-medium text-gray-700 dark:text-gray-200">
                  <Link
                    href={link.href}
                    onClick={() => closeMobileMenu()}
                    className={`text-base font-semibold ${
                      link.active ? 'text-teal-600 dark:text-teal-400' : 'text-slate-800 dark:text-gray-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <button
                      type="button"
                      aria-label={`Toggle ${link.name} submenu`}
                      aria-expanded={mobileExpandedDropdown === link.dropdown}
                      onClick={() => toggleMobileDropdown(link.dropdown as DropdownKey)}
                      className="p-2 text-gray-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <span
                        aria-hidden
                        className={`inline-block h-0 w-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-slate-500 transition-transform duration-200 dark:border-t-gray-400 ${
                          mobileExpandedDropdown === link.dropdown ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Sub-sections & Items Mobile Single-Column List */}
                {link.dropdown && mobileExpandedDropdown === link.dropdown && (
                  <div className="flex flex-col gap-4 pl-3 py-2 mb-3 border-l-2 border-teal-500/40">
                    {MOBILE_CATEGORIES[link.dropdown].map((section, sIdx) => (
                      <div key={sIdx} className="flex flex-col gap-2">
                        <span className="text-[11px] font-bold font-mono text-teal-600 dark:text-teal-400 tracking-wider uppercase">
                          {section.sectionTitle}
                        </span>
                        <div className="flex flex-col gap-2">
                          {section.items.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={closeMobileMenu}
                              className="group flex flex-col gap-0.5 rounded-lg p-2 hover:bg-slate-50 dark:hover:bg-gray-800/60 transition-colors"
                            >
                              <span className="text-sm font-semibold text-slate-800 group-hover:text-teal-600 dark:text-gray-200 dark:group-hover:text-teal-400">
                                {item.title}
                              </span>
                              <span className="text-xs font-normal text-slate-500 dark:text-gray-400">
                                {item.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Utility Sections (Company, Resources) */}
          <div className="flex flex-col gap-1 border-t border-slate-200 pt-3 dark:border-gray-800">
            {UTILITY_LINKS.map((link) => (
              <div key={link.name} className="border-b border-slate-100 last:border-b-0 dark:border-gray-800">
                <div className="flex items-center justify-between py-2.5">
                  <Link
                    href={link.href}
                    onClick={() => closeMobileMenu()}
                    className="text-base font-semibold text-slate-800 hover:text-teal-600 dark:text-gray-100 dark:hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <button
                      type="button"
                      aria-label={`Toggle ${link.name} submenu`}
                      aria-expanded={mobileExpandedDropdown === link.dropdown}
                      onClick={() => toggleMobileDropdown(link.dropdown as DropdownKey)}
                      className="p-2 text-gray-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <span
                        aria-hidden
                        className={`inline-block h-0 w-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-slate-500 transition-transform duration-200 dark:border-t-gray-400 ${
                          mobileExpandedDropdown === link.dropdown ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Sub-sections & Items Mobile Single-Column List */}
                {link.dropdown && mobileExpandedDropdown === link.dropdown && (
                  <div className="flex flex-col gap-4 pl-3 py-2 mb-3 border-l-2 border-teal-500/40">
                    {MOBILE_CATEGORIES[link.dropdown].map((section, sIdx) => (
                      <div key={sIdx} className="flex flex-col gap-2">
                        <span className="text-[11px] font-bold font-mono text-teal-600 dark:text-teal-400 tracking-wider uppercase">
                          {section.sectionTitle}
                        </span>
                        <div className="flex flex-col gap-2">
                          {section.items.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={closeMobileMenu}
                              className="group flex flex-col gap-0.5 rounded-lg p-2 hover:bg-slate-50 dark:hover:bg-gray-800/60 transition-colors"
                            >
                              <span className="text-sm font-semibold text-slate-800 group-hover:text-teal-600 dark:text-gray-200 dark:group-hover:text-teal-400">
                                {item.title}
                              </span>
                              <span className="text-xs font-normal text-slate-500 dark:text-gray-400">
                                {item.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile CTAs */}
          <div className="flex flex-col gap-3 pt-3 border-t border-slate-200 dark:border-gray-800">
            <Link
              href="https://zoikostream-git-454227754507.europe-west1.run.app/login"
              onClick={closeMobileMenu}
              className="w-full rounded-lg border border-[#d9d6cc] py-2.5 text-center text-sm font-semibold text-slate-800 hover:bg-slate-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/start-building"
              onClick={closeMobileMenu}
              className="w-full rounded-xl bg-gradient-to-r from-[#28cfc5] to-[#4f80ff] py-2.5 text-center text-sm font-semibold text-slate-950 shadow-sm hover:opacity-95 transition-opacity"
            >
              Start building
            </Link>
            <Link
              href="/talk-to-an-expert"
              onClick={closeMobileMenu}
              className="w-full rounded-xl border border-slate-900 py-2.5 text-center text-sm font-semibold text-zinc-900 hover:bg-slate-900 hover:text-white dark:border-gray-200 dark:text-gray-100 dark:hover:bg-white dark:hover:text-slate-900 transition-colors"
            >
              Talk to an expert
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
