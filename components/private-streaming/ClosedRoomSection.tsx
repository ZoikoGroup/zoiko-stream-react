const isPoints = [
  'Strictly bounded room membership based on verified organization directories.',
  'Explicit gate validation utilizing enterprise-approved credentials.',
  'Time-constrained viewing windows that limit the scope of live access.',
  'Autonomous replay authorization decoupled from live stream permissions.',
];

const isNotPoints = [
  'No absolute secrecy guarantee against unauthorized recording.',
  'Cannot fully prevent high-fidelity client-side screen captures.',
  'Certain authentication methods require pre-planning and are not automatic.',
  'Not a permanent secret URL that can be shared or leaked downstream.',
];

export default function ClosedRoomSection() {
  return (
    <section className="w-full bg-white px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold leading-tight">
          A closed room. Not a public link with a padlock icon.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Private streaming is the Live Events path for a closed, controlled audience where entry
          depends on current room membership and a supported credential or authorization method. The
          exact access method, availability, session behavior, and replay rules are confirmed for the
          event. Private access does not guarantee that content can never be copied or shared.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
        <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col gap-6">
          <h3 className="text-slate-900 text-xl font-bold">What private means</h3>
          <ul className="w-full flex flex-col gap-4">
            {isPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 shrink-0 bg-emerald-500 rounded-full" />
                <span className="flex-1 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col gap-6">
          <h3 className="text-slate-900 text-xl font-bold">What private does NOT mean</h3>
          <ul className="w-full flex flex-col gap-4">
            {isNotPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 shrink-0 bg-red-500 rounded-full" />
                <span className="flex-1 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
