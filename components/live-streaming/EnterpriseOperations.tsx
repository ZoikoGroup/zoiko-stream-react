import Link from "next/link";

const EnterpriseOperations = () => {
  const enterpriseFeatures = [
    "Role & permission governance model",
    "Dedicated custom telemetry & status routes",
    "Advanced SAML SSO / security boundaries",
    "L1/L2 critical escalation infrastructure support",
    "Change control scheduling safeguards",
  ];

  const complianceItems = [
    "Multi-Region Architecture Diagram",
    "SAML / OIDC Security Handshake Docs",
    "System Health SLA Commitments",
    "VPAT / Section 508 Accessibility Statement",
    "GDPR & CCPA Privacy Compliance Blueprint",
  ];

  return (
    <section className="relative w-full overflow-hidden border-b border-gray-200 bg-white px-6 py-16 sm:px-10 lg:px-28 lg:py-24">
      
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#4C86FF_1px,transparent_1px)] bg-[length:24px_24px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-12">

        {/* Heading */}
        <div className="flex w-full flex-col items-start gap-4">
          <h2 className="  text-4xl font-bold leading-[60.80px] text-slate-900">
            Enterprise operations and managed events
          </h2>

          <p className="  text-lg font-normal leading-7 text-slate-600">
            Rigorous governance, structured operational support, dedicated
            support continuity, and change control.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Enterprise Operations */}
          <div className="flex w-full flex-col rounded-2xl border border-gray-200 bg-slate-50 p-8">

            {/* Image */}
            <div className="h-44 w-full overflow-hidden rounded-lg">
              <img
                src="/images/live-streaming/enterprise-operations.png"
                alt="Enterprise operations"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="mt-6 flex w-full flex-col items-start gap-3">
              <h3 className="  text-xl font-bold text-slate-900">
                Enterprise operations
              </h3>

              <p className="  text-sm font-normal leading-5 text-slate-600">
                Complete governance, robust security integration, system
                observability, and pre-scheduled automatic retry failovers for
                repeatable enterprise broadcasting.
              </p>
            </div>

            {/* Feature List */}
            <div className="mt-6 flex w-full flex-col items-start gap-2.5">
              {enterpriseFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                  <span className="  text-xs font-normal text-slate-600">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <Link
              href="/talk-to-an-expert"
              className="mt-6 rounded-[10px] border border-slate-600 px-7 py-3.5   text-base font-medium text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
            >
              Talk to an expert →
            </Link>
          </div>

          {/* Managed Live Events */}
          <div className="flex w-full flex-col rounded-2xl border border-gray-200 bg-slate-50 p-8">

            {/* Image */}
            <div className="h-44 w-full overflow-hidden rounded-lg">
              <img
                src="/images/live-streaming/managed-live-events.png"
                alt="Managed Live Events"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="mt-6 flex w-full flex-col items-start gap-3">
              <h3 className="  text-xl font-bold text-slate-900">
                Managed Live Events
              </h3>

              <p className="  text-sm font-normal leading-5 text-slate-600">
                Hands-on professional planning support and active on-site
                stream coordination monitors for high-stakes scheduled
                broadcasts. Technical mapping, verified failovers, and direct
                operator backup channels are mapped transparently beforehand.
              </p>
            </div>

            {/* Button */}
            <Link
              href="/plan-a-live-event"
              className="mt-6 rounded-[10px] border border-slate-600 px-7 py-3.5   text-base font-medium text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
            >
              Plan a live event →
            </Link>
          </div>
        </div>

        {/* Compliance */}
        <div className="flex w-full flex-col items-start gap-4 rounded-xl bg-slate-100 p-5">

          <h3 className="  text-xs font-bold tracking-wide text-slate-600">
            COMPLIANCE &amp; PROCUREMENT EVIDENCE VERIFICATION
          </h3>

          <div className="flex w-full flex-wrap items-start gap-x-6 gap-y-4">
            {complianceItems.map((item, idx) => {
              const hrefs = [
                "/platform-overview",
                "/platform-secure-playback",
                "/platform-delivery-and-trust-overview",
                "/accessibility-inclusion",
                "/platform-delivery-and-trust-overview",
              ];
              return (
                <a
                  key={item}
                  href={hrefs[idx]}
                  className="flex items-center gap-1.5   text-xs font-normal text-slate-900 underline"
                >
                  {/* Document SVG icon */}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <path
                      d="M3.5 1.5H8L10.5 4V12.5H3.5V1.5Z"
                      stroke="#4F5E74"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M8 1.5V4H10.5"
                      stroke="#4F5E74"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {item}
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EnterpriseOperations;