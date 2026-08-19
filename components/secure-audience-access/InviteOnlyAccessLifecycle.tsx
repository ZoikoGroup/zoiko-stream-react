interface InvitationState {
  recipient: string;
  delivery: string;
  eligibility: "VALIDATED" | "PENDING" | "REVOKED";
}

const invitationStates: InvitationState[] = [
  {
    recipient: "sarah.c@cloud.com",
    delivery: "DELIVERED",
    eligibility: "VALIDATED",
  },
  {
    recipient: "alex_m@studio.net",
    delivery: "DELIVERED",
    eligibility: "VALIDATED",
  },
  {
    recipient: "director@live.org",
    delivery: "SENT",
    eligibility: "PENDING",
  },
  {
    recipient: "tech-lead@web.ca",
    delivery: "BOUNCED",
    eligibility: "REVOKED",
  },
];

const eligibilityStyles: Record<
  InvitationState["eligibility"],
  string
> = {
  VALIDATED:
    "border-emerald-400 bg-emerald-400/10 text-emerald-500",
  PENDING:
    "border-orange-400 bg-orange-400/10 text-orange-400",
  REVOKED:
    "border-red-400 bg-red-400/10 text-red-500",
};

export default function InviteOnlyAccessLifecycle() {
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
        <div className="mb-14 flex flex-col gap-4">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[38px]">
            Plan invite-only access with full lifecycle control.
          </h2>

          <p className="text-base leading-7 text-slate-500 sm:text-lg">
            Operational participation and commercial lead generation are
            separate purposes. Set explicit paths for authorized individuals.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.08fr] lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col">
            <h3 className="mb-7 text-2xl font-bold leading-tight text-slate-900">
              Track individual invitation states in real-time
            </h3>

            <div className="flex flex-col gap-5">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-xs font-bold text-white">
                  1
                </span>

                <div className="flex flex-col gap-0.5">
                  <h4 className="text-sm font-bold text-slate-800">
                    Direct Source Auth
                  </h4>

                  <p className="text-xs leading-5 text-slate-500">
                    No intermediaries or third party identity relays.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-xs font-bold text-white">
                  2
                </span>

                <div className="flex flex-col gap-0.5">
                  <h4 className="text-sm font-bold text-slate-800">
                    Deterministic Windows
                  </h4>

                  <p className="text-xs leading-5 text-slate-500">
                    Access bounds strictly verified on the edge.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-xs font-bold text-white">
                  3
                </span>

                <div className="flex flex-col gap-0.5">
                  <h4 className="text-sm font-bold text-slate-800">
                    Secure Audit Logs
                  </h4>

                  <p className="text-xs leading-5 text-slate-500">
                    Every credential presentation recorded.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Invitation Panel */}
          <div className="w-full overflow-hidden rounded-2xl border border-blue-500 bg-slate-50 p-5 shadow-[0px_8px_25px_rgba(15,23,42,0.10)] sm:p-6">
            {/* Panel Header */}
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="font-mono text-xs font-bold tracking-wide text-slate-800">
                ACTIVE INVITATION STATES
              </h3>

              <span className="font-mono text-[10px] font-medium text-teal-400">
                UP-TO-DATE
              </span>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-[1.5fr_0.7fr_0.8fr] items-center bg-[#192033] px-3 py-2.5 text-[9px] font-bold tracking-wide text-slate-300 sm:grid-cols-[1.5fr_0.6fr_0.7fr]">
              <span>RECIPIENT</span>
              <span>DELIVERY</span>
              <span>ELIGIBILITY</span>
            </div>

            {/* Table Rows */}
            <div className="flex flex-col">
              {invitationStates.map((row) => (
                <div
                  key={row.recipient}
                  className="grid min-h-[38px] grid-cols-[1.5fr_0.7fr_0.8fr] items-center border-b border-slate-300 bg-slate-100/80 px-3 py-2 text-[11px] last:border-b-0 sm:grid-cols-[1.5fr_0.6fr_0.7fr]"
                >
                  <span className="truncate pr-2 text-slate-700">
                    {row.recipient}
                  </span>

                  <span className="font-mono text-[9px] text-slate-500">
                    {row.delivery}
                  </span>

                  <span
                    className={`w-fit rounded-[4px] border px-2 py-0.5 font-mono text-[9px] font-bold ${eligibilityStyles[row.eligibility]}`}
                  >
                    {row.eligibility}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}