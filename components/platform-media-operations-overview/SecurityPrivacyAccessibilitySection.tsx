const cardsRow1 = [
  {
    title: 'Public Data Safety',
    desc: 'No customer media, accounts, or credentials exposed. Zero trace architecture.',
  },
  {
    title: 'Authentication',
    desc: 'Marketing page never requests operational credentials. End-to-end token validation.',
  },
  {
    title: 'Operational Permissions',
    desc: 'Scoped role/authority; exact IAM from authority only. Strictly mapped boundaries.',
  },
];

const cardsRow2 = [
  {
    title: 'Privacy-Safe Analytics',
    desc: 'Navigation/conversion events only; no operation payload. Zero telemetry sniffing.',
  },
  {
    title: 'Abuse Resistance',
    desc: 'Rate/permission/confirmation concepts when authoritative. Defense in depth.',
  },
  {
    title: 'WCAG 2.2 AA',
    desc: 'Release-blocking accessibility across all pages and mockups. Uncompromised compliance.',
  },
];

export default function SecurityPrivacyAccessibilitySection() {
  return (
    <section
      className="relative w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 border-b border-gray-200 flex flex-col gap-14 overflow-hidden"
      style={{
        backgroundImage: `url('/images/platform-media-operations-overview/bg (61).png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold leading-tight font-['Space_Grotesk']">
          Security, privacy, and accessibility
        </h2>
        <p className="text-slate-500 text-lg font-normal leading-7 font-['Space_Grotesk']">
          Trust boundaries for accountable media operations
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsRow1.map((card) => (
            <div
              key={card.title}
              className="p-7 bg-white rounded-xl border border-gray-200 flex flex-col gap-4 shadow-sm"
            >
              <div className="w-11 h-11 p-2.5 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                <span className="w-5 h-5 border-2 border-teal-400 rounded-sm" />
              </div>
              <p className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                {card.title}
              </p>
              <p className="text-slate-500 text-xs font-normal font-['Space_Grotesk'] leading-5">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsRow2.map((card) => (
            <div
              key={card.title}
              className="p-7 bg-white rounded-xl border border-gray-200 flex flex-col gap-4 shadow-sm"
            >
              <div className="w-11 h-11 p-2.5 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                <span className="w-5 h-5 border-2 border-teal-400 rounded-sm" />
              </div>
              <p className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                {card.title}
              </p>
              <p className="text-slate-500 text-xs font-normal font-['Space_Grotesk'] leading-5">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
