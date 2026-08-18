interface ValidationState {
  title: string;
  description: string;
  status: "SUCCESS" | "ERROR" | "WARNING";
}

const validationStates: ValidationState[] = [
  {
    title: "Valid Entitlement",
    description: "Token validated, access permitted.",
    status: "SUCCESS",
  },
  {
    title: "Not Found",
    description: "Handed over to standard lookup rules.",
    status: "ERROR",
  },
  {
    title: "Expired or Revoked",
    description: "Clear message and fallback path displayed.",
    status: "ERROR",
  },
  {
    title: "Source Unavailable",
    description: "Local offline state checks apply.",
    status: "WARNING",
  },
];

const statusStyles: Record<ValidationState["status"], string> = {
  SUCCESS:
    "border-emerald-400 text-emerald-400 bg-emerald-400/5",
  ERROR:
    "border-red-500 text-red-500 bg-red-500/5",
  WARNING:
    "border-amber-400 text-amber-400 bg-amber-400/5",
};

export default function TicketCommerceAuthorization() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#071A38] bg-cover bg-center bg-no-repeat px-6 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-[112px] lg:py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(5, 23, 51, 0.35), rgba(5, 23, 51, 0.35)), url('/images/secure-audience-access/ticket-commerce-bg.png')",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="mb-12 flex flex-col gap-4">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[38px]">
            Separate ticket commerce from event authorization.
          </h2>

          <p className="text-base leading-7 text-slate-400 sm:text-lg">
            Entitlement processing should not directly block platform scaling.
            Map ticketing decisions cleanly into scoped tokens.
          </p>
        </div>

        {/* Content */}
        <div className="grid items-start gap-5 lg:grid-cols-[1fr_1fr]">
          {/* Direct API Mappings */}
          <div className="min-h-[255px] rounded-[18px] border border-slate-400 bg-[#111522]/95 px-8 py-8 shadow-[0px_10px_30px_rgba(0,0,0,0.2)]">
            <h3 className="mb-6 text-xl font-bold text-white">
              Direct API Mappings
            </h3>

            <p className="max-w-[560px] text-sm leading-6 text-slate-400">
              Connect seamlessly with major ticketing processors (Ticketmaster,
              Eventbrite, or custom Webhook services). Changes are validated
              instantly and mapped into temporary, revocable spectator tokens.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-teal-400" />
                <span className="text-sm text-slate-400">
                  Multi-tier ticketing mappings
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-teal-400" />
                <span className="text-sm text-slate-400">
                  Automatic session-limit mitigation
                </span>
              </div>
            </div>
          </div>

          {/* Validation States Flow */}
          <div className="min-h-[355px] rounded-[18px] border border-slate-400 bg-[#111522]/95 px-8 py-8 shadow-[0px_10px_30px_rgba(0,0,0,0.2)]">
            <h3 className="mb-7 text-xl font-bold text-white">
              Validation States Flow
            </h3>

            <div className="flex flex-col gap-6">
              {validationStates.map((state) => (
                <div
                  key={state.title}
                  className="flex items-center justify-between gap-5"
                >
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <h4 className="text-sm font-bold text-white">
                      {state.title}
                    </h4>

                    <p className="text-xs leading-5 text-slate-400">
                      {state.description}
                    </p>
                  </div>

                  <span
                    className={`shrink-0 rounded-[4px] border px-2 py-1 font-mono text-[9px] font-bold ${statusStyles[state.status]}`}
                  >
                    {state.status}
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