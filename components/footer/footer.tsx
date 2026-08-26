import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type FooterLink = {
  name: string;
  href: string;
  external?: boolean;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const ROW_1_SECTIONS: FooterSection[] = [
  {
    title: 'Platform',
    links: [
      { name: 'Platform overview', href: '/platform-overview' },
      { name: 'Live streaming', href: '/live-streaming' },
      { name: 'Real-time contribution', href: '/real-time-contribution' },
      { name: 'Video on demand', href: '/platform-video-on-demand' },
      { name: 'Enterprise broadcasting', href: '/platform-enterprise-broadcasting' },
      { name: 'Recording and replay', href: '/platform-recording-replay' },
      { name: 'Captions and translation', href: '/platform-captions-and-translation' },
      { name: 'Video analytics', href: '/platform-analytics' },
      { name: 'Security and access', href: '/platform-media-security' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { name: 'Solutions overview', href: '/solutions-overview' },
      { name: 'Build video into a product', href: '/build-video-into-product' },
      { name: 'Broadcast globally', href: '/Broadcast-globally' },
      { name: 'Secure enterprise video', href: '/secure-enterprise-video' },
      { name: 'Accessible multilingual video', href: '/accessible-multilingual' },
      { name: 'Record, replay, and preserve', href: '/solutions' },
      { name: 'Enterprise media operations', href: '/solutions' },
      { name: 'Managed live events', href: '/managed-live-event-streaming' },
    ],
  },
  {
    title: 'Live Events',
    links: [
      { name: 'Live Events overview', href: '/live-events-overview' },
      { name: 'Memorials', href: '/memorials' },
      { name: 'Worship', href: '/workship-detailed' },
      { name: 'Weddings and celebrations', href: '/wedding-celebration' },
      { name: 'Graduations', href: '/graduation-detailed' },
      { name: 'Civic events', href: '/civic-events-detailed' },
      { name: 'Corporate broadcasts', href: '/corporate-broadcast-detailed' },
      { name: 'Conferences', href: '/conference-and-multitrack' },
      { name: 'Plan a live event', href: '/plan-a-live-event' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { name: 'Developers overview', href: '/developers-overview' },
      { name: 'Documentation', href: '/documentation-page' },
      { name: 'API reference', href: '/video-apis' },
      { name: 'SDKs', href: '/sdks' },
      { name: 'Media protocols', href: '/platform-media-protocol' },
      { name: 'Webhooks', href: '#' },
      { name: 'Code samples', href: '/start-building' },
      { name: 'Changelog', href: '#' },
      { name: 'GitHub', href: 'https://github.com', external: true },
    ],
  },
  {
    title: 'Pricing',
    links: [
      { name: 'Pricing overview', href: '#' },
      { name: 'Developer access', href: '/developer-access-page' },
      { name: 'Enterprise plans', href: '/solutions-enterprise' },
      { name: 'Live Events pricing', href: '#' },
      { name: 'Usage and billing', href: '#' },
      { name: 'Contact sales', href: '/talk-to-an-expert' },
    ],
  },
];

const ROW_2_SECTIONS: FooterSection[] = [
  {
    title: 'Resources',
    links: [
      { name: 'Resources overview', href: '/resources' },
      { name: 'Guides', href: '/resources' },
      { name: 'Architecture', href: '/resources' },
      { name: 'Case studies', href: '/resources' },
      { name: 'Events and webinars', href: '/resources' },
      { name: 'Insights', href: '/resources' },
      { name: 'Changelog', href: '/resources' },
      { name: 'System status', href: '/zoikostream-status' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'Company overview', href: '/company-overview' },
      { name: 'About ZoikoStream', href: '/about-us' },
      { name: 'Leadership', href: '/leadership' },
      { name: 'Careers', href: '/carrers' },
      { name: 'Partners', href: '/partners' },
      { name: 'Newsroom', href: '/newsroom' },
      { name: 'Contact', href: '/contact-us' },
      { name: 'Zoiko Group', href: '/zoiko-group', external: true },
      { name: 'Zoiko Tech', href: '/zoiko-tech', external: true },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', href: '/faqs-and-support' },
      { name: 'Contact support', href: '/contact-us' },
      { name: 'Developer support', href: '/zoikostream-developer-relations' },
      { name: 'Enterprise support', href: '/zoikostream-enterprise-inquiries' },
      { name: 'Live Events support', href: '/live-event-inquiries' },
      { name: 'Report an issue', href: '/contact-us' },
      { name: 'Accessibility help', href: '/accessibility' },
      { name: 'System status', href: '/zoikostream-status' },
    ],
  },
  {
    title: 'Trust & Security',
    links: [
      { name: 'Trust Center', href: '/zoikostream-trust-center' },
      { name: 'Security', href: '/platform-media-security' },
      { name: 'Compliance', href: '/zoikostream-trust-center' },
      { name: 'Data protection', href: '/platform-media-security' },
      { name: 'Service reliability', href: '/platform-resilient-delivery' },
      { name: 'Subprocessors', href: '/zoikostream-trust-center' },
      { name: 'Security advisories', href: '/zoikostream-trust-center' },
      { name: 'Responsible disclosure', href: '/zoikostream-trust-center' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Legal overview', href: '/zoikostream-legal' },
      { name: 'Terms of service', href: '/zoikostream-legal' },
      { name: 'Privacy notice', href: '/privacy' },
      { name: 'Cookie notice', href: '/privacy' },
      { name: 'Acceptable use', href: '/zoikostream-legal' },
      { name: 'Data processing addendum', href: '/zoikostream-legal' },
      { name: 'Service-specific terms', href: '/zoikostream-legal' },
      { name: 'Accessibility statement', href: '/accessibility-inclusion' },
      { name: 'Trademark guidelines', href: '/zoikostream-legal' },
    ],
  },
];

const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: '#social-1', icon: '/images/footer/SVG (5).png' },
  { name: 'YouTube', href: '#social-2', icon: '/images/footer/SVG.png' },
  { name: 'GitHub', href: '#social-3', icon: '/images/footer/SVG (1).png' },
  { name: 'X', href: '#social-4', icon: '/images/footer/SVG (2).png' },
  { name: 'Instagram', href: '#social-5', icon: '/images/footer/SVG (3).png' },
  { name: 'Facebook', href: '#social-6', icon: '/images/footer/SVG (4).png' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0D13] text-slate-300 text-xs leading-normal border-t border-[#373b49]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 space-y-12 sm:space-y-16">
        
        {/* Top Branding Section */}
        <div className="flex flex-col items-center text-center space-y-5">
          <Link href="/" className="inline-block bg-white px-8 py-3.5 rounded-2xl shadow-md transition-opacity hover:opacity-95">
            <Image 
              src="/images/zoikostream-logo-preview.png" 
              alt="ZoikoStream" 
              width={260} 
              height={58} 
              priority 
              className="h-[48px] w-auto object-contain sm:h-[54px]" 
            />
          </Link>
          <p className="max-w-[820px] text-[11px] sm:text-xs text-slate-300/80 leading-relaxed font-normal">
            ZoikoStream is Zoiko Group&apos;s secure media infrastructure and streaming platform, operated within Zoiko Tech and powered by Zoiko Cloud. ZoikoStream Live Events is the platform&apos;s scheduled, one-to-many broadcasting capability.
          </p>
        </div>

        {/* Navigation Links Grid - Row 1 & Row 2 (10 Columns total) */}
        <div className="space-y-12">
          {/* Row 1: Platform, Solutions, Live Events, Developers, Pricing */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 lg:gap-x-8">
            {ROW_1_SECTIONS.map((section, idx) => (
              <div key={idx} className="space-y-3.5">
                <h3 className="text-white text-[13px] sm:text-sm font-semibold tracking-tight">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        href={link.href}
                        className="text-slate-300/70 hover:text-white transition-colors inline-flex items-center gap-1 text-[11px] sm:text-xs"
                      >
                        {link.name}
                        {link.external && <span className="text-[10px] text-slate-400 font-sans">↗</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Row 2: Resources, Company, Support, Trust & Security, Legal */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 lg:gap-x-8">
            {ROW_2_SECTIONS.map((section, idx) => (
              <div key={idx} className="space-y-3.5">
                <h3 className="text-white text-[13px] sm:text-sm font-semibold tracking-tight">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        href={link.href}
                        className="text-slate-300/70 hover:text-white transition-colors inline-flex items-center gap-1 text-[11px] sm:text-xs"
                      >
                        {link.name}
                        {link.external && <span className="text-[10px] text-slate-400 font-sans">↗</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Information and Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-[#3d4252]">
          
          {/* US HQ */}
          <div className="space-y-2">
            <h4 className="text-slate-200 text-[10px] font-bold uppercase tracking-widest">HEADQUARTERS</h4>
            <address className="not-italic text-slate-300/80 text-[11px] sm:text-xs leading-relaxed">
              1401 21st Street, Suite R<br />
              Sacramento, CA 95811, USA
            </address>
            <a href="#location-us" className="inline-block text-[#9d85ff] hover:text-[#b4a2ff] font-medium text-xs pt-1 transition-colors">
              View location &rarr;
            </a>
          </div>

          {/* EU HQ */}
          <div className="space-y-2">
            <h4 className="text-slate-200 text-[10px] font-bold uppercase tracking-widest">EUROPEAN HEADQUARTERS</h4>
            <address className="not-italic text-slate-300/80 text-[11px] sm:text-xs leading-relaxed">
              167–169 Great Portland Street, 5th Floor<br />
              London W1W 5PF, UK
            </address>
            <a href="#location-uk" className="inline-block text-[#9d85ff] hover:text-[#b4a2ff] font-medium text-xs pt-1 transition-colors">
              View location &rarr;
            </a>
          </div>

          {/* Contact Inquiries */}
          <div className="space-y-2">
            <h4 className="text-slate-200 text-[10px] font-bold uppercase tracking-widest">CONTACT</h4>
            <ul className="space-y-1.5 text-[11px] sm:text-xs text-slate-300/80">
              <li><Link href="/about-us" className="hover:text-white transition-colors">General contact</Link></li>
              <li><Link href="/talk-to-an-expert" className="hover:text-white transition-colors">Enterprise inquiries</Link></li>
              <li><Link href="/plan-a-live-event" className="hover:text-white transition-colors">Live Events inquiries</Link></li>
              <li><Link href="/faqs-and-support" className="hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="text-slate-200 text-[10px] font-bold uppercase tracking-widest">FOLLOW ZOIKOSTREAM</h4>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 bg-[#353947] border border-[#404555] rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#424757] transition-colors"
                  aria-label={social.name}
                >
                  <img
                    src={social.icon}
                    alt=""
                    aria-hidden="true"
                    className="w-4 h-4 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Secondary Navigation Row */}
        <div className="pt-6 border-t border-[#3d4252] flex flex-wrap gap-x-6 gap-y-2 text-[11px] sm:text-xs text-slate-300/70">
          <Link href="/solutions" className="hover:text-white transition-colors">Sitemap</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Cookie settings</Link>
          <Link href="/accessibility-inclusion" className="hover:text-white transition-colors">Accessibility</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy choices</Link>
          <Link href="/zoikostream-status" className="hover:text-white transition-colors">System status</Link>
          <Link href="/contact-us" className="hover:text-white transition-colors">Contact</Link>
        </div>

      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="w-full bg-[#242731] border-t border-[#323644] py-6 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1360px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-[11px] text-slate-400">
          
          <div className="space-y-2">
            <nav className="flex flex-wrap gap-x-3.5 gap-y-1">
              <Link href="/privacy" className="hover:text-slate-200 transition-colors">Privacy</Link>
              <Link href="/zoikostream-legal" className="hover:text-slate-200 transition-colors">Terms</Link>
              <Link href="/privacy" className="hover:text-slate-200 transition-colors">Cookies</Link>
              <Link href="/accessibility-inclusion" className="hover:text-slate-200 transition-colors">Accessibility</Link>
              <Link href="/zoikostream-legal" className="hover:text-slate-200 transition-colors">Acceptable Use</Link>
              <Link href="/zoikostream-legal" className="hover:text-slate-200 transition-colors">DPA</Link>
              <Link href="/zoikostream-trust-center" className="hover:text-slate-200 transition-colors">Responsible Disclosure</Link>
              <Link href="/zoikostream-status" className="hover:text-slate-200 transition-colors">Status</Link>
            </nav>
            <p className="text-slate-500">
              © 2026 ZoikoStream. All rights reserved.
            </p>
          </div>

          <p className="text-slate-400/80 max-w-[540px] leading-relaxed text-[11px]">
            ZoikoStream is Zoiko Group&apos;s secure media infrastructure and streaming platform, operated within Zoiko Tech and powered by Zoiko Cloud.
          </p>

        </div>
      </div>
    </footer>
  );
}