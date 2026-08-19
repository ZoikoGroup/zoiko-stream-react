const customerCards = [
  { title: 'Sign In', desc: 'Return to your operational context.' },
  { title: 'Documentation', desc: 'Implementation guides and API references.' },
  { title: 'System Status', desc: 'Current public service status.' },
  { title: 'Support', desc: 'Help with an active operation or account.' },
];

export default function CustomerNextSection() {
  return (
    <section
      className="relative w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 border-b border-gray-200 flex flex-col gap-14 overflow-hidden"
      style={{
        backgroundImage: `url('/images/platform-media-operations-overview/bg (1).png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold leading-tight font-['Space_Grotesk']">
          Already a customer?
        </h2>
        <p className="text-slate-500 text-lg font-normal leading-7 font-['Space_Grotesk']">
          Return to your task without a forced sales funnel
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {customerCards.map((card) => (
          <div
            key={card.title}
            className="p-6 bg-white rounded-xl border border-gray-200 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="w-5 h-5 border-2 border-teal-400 rounded-sm" />
            <p className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
              {card.title}
            </p>
            <p className="text-slate-500 text-xs font-normal font-['Space_Grotesk'] leading-5">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
