const carriesForward = [
  'Core Accessibility Requirements',
  'Assigned Methods & Pathways',
  'Defined Operational Owners',
  'Standby Alternative Paths',
];

const requiresRevalidation = [
  'Fresh Verification Evidence & Logs',
  'Live Provider & Staff Availability',
  'Active Stage Content & Slides Contrast',
  'Credential & Gateway Access Checks',
];

export default function TemplateReuseSection() {
  return (
    <section className="w-full bg-white px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold leading-tight">
          Reuse the plan. Revalidate the evidence.
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Repeat-event templates preserve accessibility structure while requiring current
          verification for the new event.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        <article className="p-5 sm:p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col gap-4">
          <h3 className="text-zinc-950 text-base font-bold">Template Reuse Model</h3>
          <div
            className="w-full h-52 sm:h-64 rounded-lg bg-slate-200 bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/accessibility-inclusion/card-template-reuse.png')`,
            }}
            role="presentation"
          />
          <p className="text-gray-600 text-sm leading-6">
            Standard corporate and recurring webcast setups can apply existing accessibility plans
            instantly. Structure remains intact while verification counters reset to zero.
          </p>
        </article>

        <div className="flex flex-col gap-6">
          <div className="p-5 sm:p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              <h3 className="text-blue-700 text-xs font-bold uppercase tracking-wider">
                Carries forward from template
              </h3>
            </div>
            <ul className="w-full flex flex-col gap-2.5">
              {carriesForward.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/accessibility-inclusion/check.svg"
                    alt=""
                    aria-hidden
                    className="w-4 h-4 shrink-0"
                  />
                  <span className="text-zinc-950 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 sm:p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              <h3 className="text-amber-700 text-xs font-bold uppercase tracking-wider">
                Requires fresh revalidation
              </h3>
            </div>
            <ul className="w-full flex flex-col gap-2.5">
              {requiresRevalidation.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/accessibility-inclusion/alert-circle.svg"
                    alt=""
                    aria-hidden
                    className="w-4 h-4 shrink-0"
                  />
                  <span className="text-zinc-950 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
