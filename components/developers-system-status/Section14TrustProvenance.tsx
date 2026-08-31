import React from 'react';

export default function Section14TrustProvenance() {
  const policies = [
    {
      title: "Source Authority",
      desc: "Status metrics are pulled directly from our distributed automated node monitors, validated independently by external monitoring agents.",
      owner: "Reliability Ops Team"
    },
    {
      title: "Freshness Policy",
      desc: "Infrastructure health summary indexes are refreshed automatically every 60 seconds. Diagnostic timelines update immediately upon triage.",
      owner: "Automated cron service"
    },
    {
      title: "Correction Policy",
      desc: "If initial incident diagnostic assessments require correction post-mortem, revisions are logged transparently on our public timeline log.",
      owner: "Compliance Office"
    },
    {
      title: "Scope Statement",
      desc: "Public status monitors general aggregate platform capacity. Dedicated private cluster SLAs are tracked inside customer admin panels.",
      owner: "Platform Architecture"
    },
    {
      title: "Data Privacy",
      desc: "All incident data and public logs are strictly redacted of secrets, keys, and customer PII parameters before publishing.",
      owner: "Security Compliance"
    },
    {
      title: "Governance Owner",
      desc: "Our globally distributed Site Reliability Engineering (SRE) team holds ultimate ownership over public status reporting accuracy.",
      owner: "VP Platform Engineering"
    }
  ];

  return (
    <section className="border-[#e1e6eb] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[120px] relative w-full bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-system-status/sec4-bg.png" />
      </div>

      <div className="flex flex-col gap-[56px] relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[16px] items-start relative w-full text-center md:text-left">
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-[#0f1b2d] text-3xl md:text-[38px] tracking-[-0.8px] w-full">
            Trust & provenance.
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#4f5e74] text-base md:text-[18px] w-full max-w-[800px] mx-auto md:mx-0">
            Clear accountability policies governing platform health monitoring, telemetry updates, and transparent outage reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] items-start relative w-full">
          {policies.map((policy, idx) => (
            <div key={idx} className="bg-white border border-[#e1e6eb] border-solid flex flex-col gap-[20px] items-start p-[32px] relative rounded-[12px] w-full shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#0f1b2d] text-[20px] w-full">
                {policy.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] font-normal leading-[22px] not-italic relative text-[#4f5e74] text-[14px] w-full min-h-[66px]">
                {policy.desc}
              </p>
              
              <p className="font-[family-name:var(--font-inter)] font-normal leading-[normal] not-italic relative text-[#707a8c] text-[13px] w-full">
                <span className="font-bold text-[#0f1b2d]">Policy Owner: </span>
                <span>{policy.owner}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
