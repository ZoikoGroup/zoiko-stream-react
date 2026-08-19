interface ViewerStep {
  number: string;
  title: string;
  description: string;
}

const viewerSteps: ViewerStep[] = [
  {
    number: "01",
    title: "Viewer opens link",
    description: "No complex redirects, pure client-side routing.",
  },
  {
    number: "02",
    title: "Identity verification",
    description: "SSO handshake or ticket query triggers.",
  },
  {
    number: "03",
    title: "Standby standby",
    description: "Countdown screen shows authoritative local schedule.",
  },
  {
    number: "04",
    title: "Dynamic recovery",
    description: "Help is always one click away, directly on-page.",
  },
];

export default function ViewerAccessPath() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white px-6 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-[112px] lg:py-24"
      style={{
        backgroundImage:
          "url('/images/secure-audience-access/contour-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="mb-12 flex flex-col gap-4">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[38px]">
            A clear path for every viewer.
          </h2>

          <p className="text-base leading-7 text-slate-500 sm:text-lg">
            Provide a self-explanatory, clean interface that handles complex
            enterprise logins or code entry respectfully.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          {/* Left Steps */}
          <div className="flex flex-col gap-4">
            {viewerSteps.map((step) => (
              <div
                key={step.number}
                className="flex min-h-[68px] items-center gap-4 rounded-[12px] border border-slate-700 bg-slate-50/90 px-4 py-3 shadow-[0px_3px_8px_rgba(15,23,42,0.08)]"
              >
                {/* Number */}
                <span className="w-7 shrink-0 font-mono text-[20px] font-bold text-teal-400">
                  {step.number}
                </span>

                {/* Text */}
                <div className="flex min-w-0 flex-col gap-0.5">
                  <h3 className="text-sm font-bold leading-5 text-slate-800">
                    {step.title}
                  </h3>

                  <p className="text-xs leading-5 text-slate-500">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Access Code Panel */}
          <div className="rounded-[16px] border border-slate-700 bg-slate-50/95 px-7 py-7 shadow-[0px_8px_25px_rgba(15,23,42,0.10)] sm:px-8 sm:py-8">
            {/* Panel Header */}
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-wide text-teal-400">
                LIVE SECURITY HANDSHAKE
              </span>

              <span className="h-2 w-2 rounded-full bg-teal-400" />
            </div>

            <h3 className="text-2xl font-bold leading-8 text-slate-900">
              Enter Event Access Code
            </h3>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              To join the live broadcast, please enter the access code sent to
              your registered email address.
            </p>

            {/* Access Code Input */}
            <div className="mt-5">
              <input
                type="text"
                placeholder="e.g. ZKS-8839-X9"
                className="h-[42px] w-full rounded-[8px] border border-slate-700 bg-slate-50 px-3 font-mono text-sm text-slate-700 outline-none placeholder:text-slate-500 focus:border-blue-500"
              />
            </div>

            {/* Verify Button */}
            <button
              type="button"
              className="mt-5 h-[46px] w-full rounded-[9px] bg-gradient-to-r from-teal-400 to-blue-500 text-sm font-bold text-slate-950 shadow-[0px_5px_15px_rgba(45,212,191,0.20)] transition-opacity hover:opacity-90"
            >
              Verify &amp; Join Stream
            </button>

            {/* Support */}
            <p className="mt-5 text-center text-xs text-slate-400">
              Having trouble?{" "}
              <a
                href="#"
                className="text-teal-400 transition-colors hover:text-teal-300"
              >
                Contact Event Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}