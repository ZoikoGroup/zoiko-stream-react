interface ControlChip {
  label: string;
  active?: boolean;
}

interface ControlPrinciple {
  title: string;
  description: string;
}

const chips: ControlChip[] = [
  { label: 'CC: ENGLISH ACTIVE', active: true },
  { label: 'AUDIO: AD DESCRIPTION' },
  { label: 'TEXT: 120%' },
  { label: 'CONTRAST: HIGH' },
];

const principles: ControlPrinciple[] = [
  {
    title: 'Keyboard Reachable',
    description:
      'Every interactive control is fully accessible via standard tab and arrow sequences.',
  },
  {
    title: 'Visible Focus',
    description:
      'High-contrast solid focus rings clearly delineate screen location for keyboard users.',
  },
  {
    title: 'State Announced',
    description: 'Continuous ARIA live updates announce active changes to screen readers instantly.',
  },
  {
    title: 'No Icon-Only Ambiguity',
    description: 'Every visual symbol carries explicit textual and screen labels to prevent doubt.',
  },
];

export default function ViewerControlsSection() {
  return (
    <section
      className="w-full bg-neutral-900 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14"
      style={{
        backgroundImage: `linear-gradient(rgba(3, 7, 18, 0.25), rgba(3, 7, 18, 0.25)), url('/images/accessibility-inclusion/viewer-controls-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight">
          Give viewers control without asking why they need it
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Preferences are entirely user-controlled. No tracking. No disability profiling. No
          automatic changes based on sensitive audience profiles.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl bg-zinc-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 overflow-hidden">
        <div
          className="w-full h-56 sm:h-80 lg:h-96 bg-zinc-950 bg-cover bg-center flex flex-col justify-center items-center"
          style={{ backgroundImage: `url('/images/accessibility-inclusion/video-stream.png')` }}
        >
          <div className="px-3.5 py-2 bg-black/70 rounded-lg flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-400 rounded-full" />
            <span className="text-white text-[10px] sm:text-xs font-bold">
              LIVE BROADCAST CONTROL INTERFACE ACTIVE
            </span>
          </div>
        </div>

        <div className="w-full p-4 sm:p-5 bg-gray-900 border-t border-gray-800 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/accessibility-inclusion/play.svg"
              alt=""
              aria-hidden
              className="w-4 h-4"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/accessibility-inclusion/volume-2.svg"
              alt=""
              aria-hidden
              className="w-4 h-4"
            />
            <span className="text-slate-400 text-xs">02:14 / 45:00</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {chips.map((chip) => (
              <span
                key={chip.label}
                className={`px-3 py-1.5 bg-slate-800 rounded-md outline outline-1 outline-offset-[-1px] text-xs ${
                  chip.active
                    ? 'outline-teal-400 text-teal-400 font-bold'
                    : 'outline-gray-800 text-slate-400'
                }`}
              >
                {chip.label}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/accessibility-inclusion/help-circle.svg"
              alt=""
              aria-hidden
              className="w-4 h-4"
            />
            <span className="text-slate-100 text-xs font-bold">HELP CENTER</span>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {principles.map((item) => (
          <article
            key={item.title}
            className="p-5 bg-gray-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-2.5"
          >
            <h3 className="text-teal-400 text-base font-bold">{item.title}</h3>
            <p className="text-slate-400 text-xs leading-5">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
