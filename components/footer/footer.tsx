import React from 'react';
import Image from 'next/image';

const FOOTER_SECTIONS = [
  {
    title: 'Platform',
    links: [
      { name: 'Platform overview', href: '#' },
      { name: 'Live streaming', href: '#' },
      { name: 'Real-time contribution', href: '#' },
      { name: 'Video on demand', href: '#' },
      { name: 'Enterprise broadcasting', href: '#' },
      { name: 'Recording and replay', href: '#' },
      { name: 'Captions and translation', href: '#' },
      { name: 'Video analytics', href: '#' },
      { name: 'Security and access', href: '#' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { name: 'Solutions overview', href: '#' },
      { name: 'Build video into a product', href: '#' },
      { name: 'Broadcast globally', href: '#' },
      { name: 'Secure enterprise video', href: '#' },
      { name: 'Accessible multilingual video', href: '#' },
      { name: 'Record, replay, and preserve', href: '#' },
      { name: 'Enterprise media operations', href: '#' },
      { name: 'Managed live events', href: '#' },
    ],
  },
  {
    title: 'Live Events',
    links: [
      { name: 'Live Events overview', href: '#' },
      { name: 'Memorials', href: '#' },
      { name: 'Worship', href: '#' },
      { name: 'Weddings and celebrations', href: '#' },
      { name: 'Graduations', href: '#' },
      { name: 'Civic events', href: '#' },
      { name: 'Corporate broadcasts', href: '#' },
      { name: 'Conferences', href: '#' },
      { name: 'Plan a live event', href: '/plan-a-live-event' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { name: 'Developers overview', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'API reference', href: '#' },
      { name: 'SDKs', href: '#' },
      { name: 'Media protocols', href: '#' },
      { name: 'Webhooks', href: '#' },
      { name: 'Code samples', href: '#' },
      { name: 'Changelog', href: '#' },
      { name: 'GitHub', href: '#', external: true },
    ],
  },
  {
    title: 'Pricing',
    links: [
      { name: 'Pricing overview', href: '#' },
      { name: 'Developer access', href: '#' },
      { name: 'Enterprise plans', href: '#' },
      { name: 'Live Events pricing', href: '#' },
      { name: 'Usage and billing', href: '#' },
      { name: 'Contact sales', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Resources overview', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'Architecture', href: '#' },
      { name: 'Case studies', href: '#' },
      { name: 'Events and webinars', href: '#' },
      { name: 'Insights', href: '#' },
      { name: 'Changelog', href: '#' },
      { name: 'System status', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'Company overview', href: 'company-overview' },
      { name: 'About ZoikoStream', href: '/about-us' },
      { name: 'Leadership', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Partners', href: '#' },
      { name: 'Newsroom', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Zoiko Group', href: '#', external: true },
      { name: 'Zoiko Tech', href: '#', external: true },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact support', href: '#' },
      { name: 'Developer support', href: '#' },
      { name: 'Enterprise support', href: '#' },
      { name: 'Live Events support', href: '#' },
      { name: 'Report an issue', href: '#' },
      { name: 'Accessibility help', href: '#' },
      { name: 'System status', href: '#' },
    ],
  },
  {
    title: 'Trust & Security',
    links: [
      { name: 'Trust Center', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Compliance', href: '#' },
      { name: 'Data protection', href: '#' },
      { name: 'Service reliability', href: '#' },
      { name: 'Subprocessors', href: '#' },
      { name: 'Security advisories', href: '#' },
      { name: 'Responsible disclosure', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Legal overview', href: '#' },
      { name: 'Terms of service', href: '#' },
      { name: 'Privacy notice', href: '#' },
      { name: 'Cookie notice', href: '#' },
      { name: 'Acceptable use', href: '#' },
      { name: 'Data processing addendum', href: '#' },
      { name: 'Service-specific terms', href: '#' },
      { name: 'Accessibility statement', href: '#' },
      { name: 'Trademark guidelines', href: '#' },
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
    <footer className="w-full bg-gray-950 text-slate-400 text-sm leading-normal border-t border-gray-900 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-800">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16 space-y-12 sm:space-y-16">
        
        {/* Top Branding Section */}
        <div className="flex flex-col items-center text-center space-y-6">
<Image 
      src="/images/zoikostream-logo.jpg" 
      alt="ZoikoStream" 
      width={296} 
      height={66} 
      priority 
      className="block dark:hidden h-[60px] w-auto object-contain sm:h-[75px] lg:h-[70px] rounded-xl" 
    />          <Image 
                src="/images/ZoikoStream_Logo_DarkBG_PNG.png" 
                alt="ZoikoStream" 
                width={296} 
                height={66} 
                priority 
                className="hidden dark:block h-[60px] w-auto object-contain sm:h-[75px] lg:h-[70px]" 
              />
          <p className="max-w-[900px] text-xs text-slate-400 leading-relaxed dark:text-gray-400">
            ZoikoStream is Zoiko Group&apos;s secure media infrastructure and streaming platform, operated within Zoiko Tech and powered by Zoiko Cloud. ZoikoStream Live Events is the platform&apos;s scheduled, one-to-many broadcasting capability.
          </p>
        </div>

        {/* Navigation Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-6 sm:gap-y-10 sm:gap-x-8">
          {FOOTER_SECTIONS.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-slate-100 text-base font-semibold dark:text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 text-sm dark:text-gray-400 dark:hover:text-white"
                    >
                      {link.name}
                      {link.external && <span className="text-xs text-slate-600 font-sans dark:text-gray-500">↗</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Corporate Information and Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-gray-800/80 dark:border-gray-800">
          
          {/* US HQ */}
          <div className="space-y-2">
            <h4 className="text-white text-xs   uppercase tracking-wider dark:text-white">Headquarters</h4>
            <address className="not-italic text-slate-400 text-sm leading-relaxed dark:text-gray-400">
              1401 21st Street, Suite R<br />
              Sacramento, CA 95811, USA
            </address>
            <a href="#location-us" className="inline-block text-violet-400 hover:text-violet-300 font-semibold text-xs pt-1 dark:text-violet-400 dark:hover:text-violet-300">
              View location &rarr;
            </a>
          </div>

          {/* EU HQ */}
          <div className="space-y-2">
            <h4 className="text-white text-xs   uppercase tracking-wider dark:text-white">European Headquarters</h4>
            <address className="not-italic text-slate-400 text-sm leading-relaxed dark:text-gray-400">
              167–169 Great Portland Street, 5th Floor<br />
              London W1W 5PF, UK
            </address>
            <a href="#location-uk" className="inline-block text-violet-400 hover:text-violet-300 font-semibold text-xs pt-1 dark:text-violet-400 dark:hover:text-violet-300">
              View location &rarr;
            </a>
          </div>

          {/* Contact Inquiries */}
          <div className="space-y-2">
            <h4 className="text-white text-xs   uppercase tracking-wider dark:text-white">Contact</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#contact" className="hover:text-white transition-colors dark:hover:text-white">General contact</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors dark:hover:text-white">Enterprise inquiries</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors dark:hover:text-white">Live Events inquiries</a></li>
              <li><a href="#support" className="hover:text-white transition-colors dark:hover:text-white">Support</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
          <h4 className="text-white text-xs   uppercase tracking-wider dark:text-white">Follow ZoikoStream</h4>
          <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-11 h-11 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-gray-800 transition-colors dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  aria-label={social.name}
                >
                  <img
                    src={social.icon}
                    alt=""
                    aria-hidden="true"
                    className="w-5 h-5 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Secondary Navigation Row */}
        <div className="pt-6 border-t border-gray-800/80 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400 dark:border-gray-800 dark:text-gray-400">
          <a href="#sitemap" className="hover:text-white transition-colors dark:hover:text-white">Sitemap</a>
          <a href="#cookies" className="hover:text-white transition-colors dark:hover:text-white">Cookie settings</a>
          <a href="#accessibility" className="hover:text-white transition-colors dark:hover:text-white">Accessibility</a>
          <a href="#privacy" className="hover:text-white transition-colors dark:hover:text-white">Privacy choices</a>
          <a href="#status" className="hover:text-white transition-colors dark:hover:text-white">System status</a>
          <a href="#contact" className="hover:text-white transition-colors dark:hover:text-white">Contact</a>
        </div>

      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="w-full bg-zinc-950 border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-12 dark:bg-black dark:border-gray-800">
        <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-xs text-gray-500 dark:text-gray-500">
          
          <div className="space-y-3">
            <nav className="flex flex-wrap gap-x-4 gap-y-1">
              <a href="#privacy" className="hover:text-slate-300 transition-colors dark:hover:text-gray-300">Privacy</a>
              <a href="#terms" className="hover:text-slate-300 transition-colors dark:hover:text-gray-300">Terms</a>
              <a href="#cookies" className="hover:text-slate-300 transition-colors dark:hover:text-gray-300">Cookies</a>
              <a href="#accessibility" className="hover:text-slate-300 transition-colors dark:hover:text-gray-300">Accessibility</a>
              <a href="#use" className="hover:text-slate-300 transition-colors dark:hover:text-gray-300">Acceptable Use</a>
              <a href="#dpa" className="hover:text-slate-300 transition-colors dark:hover:text-gray-300">DPA</a>
              <a href="#disclosure" className="hover:text-slate-300 transition-colors dark:hover:text-gray-300">Responsible Disclosure</a>
              <a href="#status" className="hover:text-slate-300 transition-colors dark:hover:text-gray-300">Status</a>
            </nav>
            <p className="text-slate-600 dark:text-gray-600">
              © {new Date().getFullYear()} ZoikoStream. All rights reserved.
            </p>
          </div>

          <p className="text-slate-600 max-w-[600px] leading-relaxed dark:text-gray-600">
            ZoikoStream is Zoiko Group&apos;s secure media infrastructure and streaming platform, operated within Zoiko Tech and powered by Zoiko Cloud.
          </p>

        </div>
      </div>
    </footer>
  );
}