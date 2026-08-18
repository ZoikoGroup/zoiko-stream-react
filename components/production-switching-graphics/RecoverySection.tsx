export default function RecoverySection() {
  return (
    <section
      className="w-full bg-zinc-950 bg-cover bg-top bg-no-repeat px-6 md:px-12 xl:px-[112px] py-16 lg:py-24"
      style={{
        backgroundImage: `linear-gradient(rgba(9, 9, 11, 0.15), rgba(9, 9, 11, 0.15)), url('/images/production-switching-graphics/recovery-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        <div className="flex-1 w-full flex flex-col gap-4">
          <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight">
            Keep fallback decisions visible and role-authorized.
          </h2>
          <p className="text-slate-400 text-base leading-6">
            When a source fails, a graphic is blocked, or a rundown mismatch occurs, the recovery
            panel shows current impact, primary owner, recommended next step, fallback state, risk
            disclosure, and support path.
          </p>
        </div>

        <div className="w-full lg:w-[540px] shrink-0 p-5 sm:p-6 bg-zinc-950/90 backdrop-blur-md rounded-xl outline outline-1 outline-offset-[-1px] outline-red-500 flex flex-col gap-5">
          <div className="w-full flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              <h3 className="text-red-500 text-xs font-bold font-mono uppercase">
                Recovery decision required
              </h3>
            </div>
            <span className="text-slate-500 text-[10px] font-mono">INCIDENT ID: REC_948F</span>
          </div>

          <div className="w-full flex flex-col gap-1">
            <span className="text-slate-500 text-[10px] font-mono uppercase">Current impact</span>
            <p className="text-slate-100 text-base font-bold">
              Camera 2 — Wide: Signal Lost (WebRTC Feed Offline)
            </p>
          </div>

          <div className="w-full flex flex-col gap-1">
            <span className="text-slate-500 text-[10px] font-mono uppercase">Primary owner</span>
            <p className="text-slate-100 text-base font-bold">Technical Director — M. Chen</p>
          </div>

          <div className="w-full p-4 bg-zinc-900/80 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-2">
            <div className="w-full flex flex-wrap justify-between items-center gap-2">
              <span className="text-slate-500 text-[10px] font-mono uppercase">
                Recommended next step
              </span>
              <span className="px-2 py-0.5 rounded-sm outline outline-1 outline-offset-[-1px] outline-emerald-500 text-emerald-500 text-[10px] font-bold font-mono uppercase">
                Verified fallback
              </span>
            </div>
            <p className="text-slate-100 text-sm">
              Switch to verified fallback: Camera 3 — Backup Wide
            </p>
          </div>

          <p className="text-slate-400 text-xs leading-5">
            * Transitioning to fallback route preserves downstream program integrity immediately.
            Downstream latency remains constant.
          </p>

          <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="button"
              className="px-5 py-3 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 text-slate-950 text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Activate Fallback
            </button>
            <button
              type="button"
              className="px-5 py-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-700 hover:outline-gray-500 text-slate-100 text-sm font-medium transition-colors"
            >
              Escalate to Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
