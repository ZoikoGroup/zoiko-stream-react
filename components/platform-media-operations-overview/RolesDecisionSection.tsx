const rolesRow1 = [
  {
    title: 'Operations owner',
    desc: 'Ensures overall SLA targets are achieved',
    boundary: 'BOUNDARY: Final authorization decision',
  },
  {
    title: 'Operator',
    desc: 'Performs task executions & checklists',
    boundary: 'BOUNDARY: Must escalate critical blocking issues',
  },
  {
    title: 'Broadcast lead',
    desc: 'Manages live transmission health',
    boundary: 'BOUNDARY: Owns on-air failover actioning',
  },
  {
    title: 'Media manager',
    desc: 'Coordinates approved asset states',
    boundary: 'BOUNDARY: Enforces copyright/policy checks',
  },
];

const rolesRow2 = [
  {
    title: 'Technical operator',
    desc: 'Performs code audits & SDK setups',
    boundary: 'BOUNDARY: Owns operational sandbox rules',
  },
  {
    title: 'Security owner',
    desc: 'Maintains HMAC keys & gate policy',
    boundary: 'BOUNDARY: Authorized for immediate revocation',
  },
  {
    title: 'Incident lead',
    desc: 'Executes recovery playbooks live',
    boundary: 'BOUNDARY: Owns system-wide alert dispatch',
  },
  {
    title: 'Auditor',
    desc: 'Verifies evidence logs post-event',
    boundary: 'BOUNDARY: Has immutable ledger read authority',
  },
];

export default function RolesDecisionSection() {
  return (
    <section
      className="relative w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 border-b border-gray-200 flex flex-col gap-14 overflow-hidden"
      style={{
        backgroundImage: `url('/images/platform-media-operations-overview/bg (58).png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold leading-tight font-['Space_Grotesk']">
          Roles and decision rights
        </h2>
        <p className="text-slate-500 text-lg font-normal leading-7 font-['Space_Grotesk']">
          Clear responsibility and separation of duties.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rolesRow1.map((role) => (
            <div
              key={role.title}
              className="p-6 bg-white rounded-2xl border border-gray-200 flex flex-col gap-4 shadow-sm"
            >
              <p className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                {role.title}
              </p>
              <div className="border-t border-gray-200" />
              <div className="flex flex-col gap-1.5">
                <p className="text-slate-500 text-xs font-normal font-['Space_Grotesk']">
                  {role.desc}
                </p>
                <p className="text-slate-500 text-xs font-bold font-['Space_Grotesk']">
                  {role.boundary}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rolesRow2.map((role) => (
            <div
              key={role.title}
              className="p-6 bg-white rounded-2xl border border-gray-200 flex flex-col gap-4 shadow-sm"
            >
              <p className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                {role.title}
              </p>
              <div className="border-t border-gray-200" />
              <div className="flex flex-col gap-1.5">
                <p className="text-slate-500 text-xs font-normal font-['Space_Grotesk']">
                  {role.desc}
                </p>
                <p className="text-slate-500 text-xs font-bold font-['Space_Grotesk']">
                  {role.boundary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
