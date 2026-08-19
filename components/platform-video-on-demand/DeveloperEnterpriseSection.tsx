const developerItems = [
  {
    title: 'VOD API Endpoints',
    description: 'REST endpoints for asset initialization and metadata push.',
  },
  {
    title: 'Multi-Platform SDKs',
    description: 'Native client-side and server-side wrappers built to match core logic.',
  },
  {
    title: 'Authentication Secrets',
    description: 'Deploy cryptographically secure HMAC signed key policies.',
  },
  {
    title: 'Webhook Alerts',
    description: 'Automate downstream actions with realtime event notifications.',
  },
];

const enterpriseItems = [
  {
    title: 'Architecture Review',
    description: 'Get specialized support mapping ZoikoStream into private cloud setups.',
  },
  {
    title: 'Security Assessment',
    description: 'Full penetration reports, active SOC 2 audits, and data path details.',
  },
  {
    title: 'SLA Commitments',
    description: 'Contract-backed uptime, custom failover paths, and direct support lines.',
  },
  {
    title: 'Accessibility Compliance',
    description: 'Section 508 and WCAG-aligned video delivery audits ready.',
  },
];

export default function DeveloperEnterpriseSection() {
  return (
    <section
      className="relative w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 bg-slate-950/25 border-b border-gray-800 flex flex-col gap-14 overflow-hidden"
      style={{
        backgroundImage: `url('/images/platform-video-on-demand/bg (53).png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 flex flex-col gap-14">
        <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
          Developer and enterprise paths
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Developer */}
          <div className="flex-1 p-8  rounded-2xl border border-gray-800 flex flex-col gap-6">
            <p className="text-white text-xl font-bold">Developer Integration</p>
            <div className="border-t border-gray-800" />
            <div className="flex flex-col gap-4">
              {developerItems.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-sm mt-1 shrink-0" />
                  <div className="flex flex-col gap-0.5">
                    <p className="text-white text-sm font-bold">{item.title}</p>
                    <p className="text-slate-500 text-xs font-normal">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise */}
          <div className="flex-1 p-8 bg-slate-900 rounded-2xl border border-gray-800 flex flex-col gap-6">
            <p className="text-white text-xl font-bold">Enterprise Compliance</p>
            <div className="border-t border-gray-800" />
            <div className="flex flex-col gap-4">
              {enterpriseItems.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-sm mt-1 shrink-0" />
                  <div className="flex flex-col gap-0.5">
                    <p className="text-white text-sm font-bold">{item.title}</p>
                    <p className="text-slate-500 text-xs font-normal">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button
            type="button"
            className="px-6 py-3.5 bg-gradient-to-b from-teal-500 to-blue-500 rounded-[10px] text-gray-800 text-base font-bold hover:opacity-90 transition-opacity"
          >
            Start Building
          </button>
        </div>
      </div>
    </section>
  );
}
