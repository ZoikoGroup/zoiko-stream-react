const transitionCues = [
  { label: 'FADE CUT', active: false },
  { label: 'CROSS DISSOLVE', active: false },
  { label: 'TAKE (AUTO)', active: true },
];

export default function MixerConsoleSection() {
  return (
    <section
      className="w-full bg-neutral-950 bg-cover bg-top bg-no-repeat px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10"
      style={{
        backgroundImage: `linear-gradient(rgba(9, 9, 11, 0.15), rgba(9, 9, 11, 0.15)), url('/images/production-switching-graphics/switching-control-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="w-full lg:max-w-[720px] flex flex-col gap-4">
          <h2 className="text-gray-50 text-3xl sm:text-4xl font-bold leading-tight">
            Keep preview, program, and recovery states distinct.
          </h2>
          <p className="text-gray-400 text-base leading-6">
            Switching is a controlled operator responsibility with deliberate actions, explicit
            states, and role-aware controls.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl p-4 sm:p-6 bg-slate-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-teal-400 flex flex-col gap-4">
        <div className="w-full pb-3 border-b border-gray-700 flex flex-wrap justify-between items-center gap-3">
          <h3 className="text-gray-50 text-xs font-bold font-mono">LIVE MIXER CONSOLE</h3>
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 bg-orange-300/10 rounded-sm outline outline-1 outline-offset-[-1px] outline-orange-300 text-orange-300 text-[10px] font-bold font-mono uppercase">
              Degraded state ready
            </span>
            <span className="text-gray-400 text-xs font-mono">OP: ALEX_K</span>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <div className="w-full flex justify-between items-center">
              <span className="text-blue-300 text-xs font-mono">PREVIEW MONITOR</span>
              <span className="text-gray-400 text-xs font-mono">CAM 2</span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/production-switching-graphics/mixer-preview.png"
              alt="Preview monitor feed"
              className="w-full h-44 sm:h-56 object-cover rounded-lg border-2 border-blue-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full flex justify-between items-center">
              <span className="text-red-400 text-xs font-mono">ACTIVE PROGRAM BROADCAST</span>
              <span className="text-gray-400 text-xs font-mono">CAM 1</span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/production-switching-graphics/mixer-program.png"
              alt="Active program broadcast feed"
              className="w-full h-44 sm:h-56 object-cover rounded-lg border-2 border-red-400"
            />
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-stretch lg:items-end gap-6">
          <div className="flex-1 flex flex-col gap-2">
            <span className="text-gray-400 text-xs font-bold">TRANSITION CUES</span>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2">
              {transitionCues.map((cue) => (
                <button
                  key={cue.label}
                  type="button"
                  className={`px-4 py-3 bg-neutral-900 rounded-lg flex justify-center text-xs font-bold transition-colors ${
                    cue.active
                      ? 'outline outline-[1.5px] outline-offset-[-1.5px] outline-blue-300 text-blue-500'
                      : 'outline outline-1 outline-offset-[-1px] outline-white/10 text-gray-50 hover:outline-white/30'
                  }`}
                >
                  {cue.label}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-60 shrink-0 flex flex-col gap-2">
            <span className="text-gray-400 text-xs font-bold">RECOVERY ACTUATOR</span>
            <button
              type="button"
              className="w-full px-4 py-3 bg-red-400 hover:bg-red-500 rounded-lg flex justify-center text-white text-xs font-bold transition-colors"
            >
              FORCE RECOVERY SLATE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
