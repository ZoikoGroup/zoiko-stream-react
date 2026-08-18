interface Step {
  number: string;
  icon: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 'STEP 01',
    icon: '/images/production-switching-graphics/settings.svg',
    title: 'Define the Show',
    description: 'Event segments, owners, audience intent, production scope',
  },
  {
    number: 'STEP 02',
    icon: '/images/production-switching-graphics/list.svg',
    title: 'Build the Source Plan',
    description: 'Expected sources, responsibility, timing, fallback intent',
  },
  {
    number: 'STEP 03',
    icon: '/images/production-switching-graphics/video.svg',
    title: 'Prepare the Run-of-Show',
    description: 'Versioned cues, scene/layout intent, graphics, playback',
  },
  {
    number: 'STEP 04',
    icon: '/images/production-switching-graphics/play.svg',
    title: 'Rehearse and Verify',
    description: 'Check sources, cues, assets, responsibilities',
  },
  {
    number: 'STEP 05',
    icon: '/images/production-switching-graphics/sliders.svg',
    title: 'Operate with Clear States',
    description: 'Preview/program separation, cue ownership, controlled transitions',
  },
  {
    number: 'STEP 06',
    icon: '/images/production-switching-graphics/shield.svg',
    title: 'Recover and Preserve',
    description: 'Fallback decisions, incident notes, final rundown, reusable templates',
  },
];

export default function HowItWorksSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-zinc-950 bg-cover bg-top bg-no-repeat px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14"
      style={{
        backgroundImage: `linear-gradient(rgba(9, 9, 11, 0.12), rgba(9, 9, 11, 0.12)), url('/images/production-switching-graphics/how-it-works-bg.png')`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[180px] -top-[120px] w-[600px] h-[500px] rounded-full blur-2xl bg-gradient-to-b from-blue-600/20 to-teal-500/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[1050px] top-[200px] w-[500px] h-96 rounded-full blur-2xl bg-gradient-to-b from-blue-600/20 to-teal-500/20"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col items-center gap-4">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold text-center leading-tight">
          How Production, Switching &amp; Graphics Works
        </h2>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step) => (
          <article
            key={step.number}
            className="p-6 bg-zinc-900/90 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-4"
          >
            <div className="w-full flex justify-between items-center">
              <span className="w-10 h-10 bg-zinc-950 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex justify-center items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={step.icon} alt="" aria-hidden className="w-5 h-5" />
              </span>
              <span className="text-slate-500 text-base font-bold font-mono">{step.number}</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-100 text-lg font-bold">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-5">{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
