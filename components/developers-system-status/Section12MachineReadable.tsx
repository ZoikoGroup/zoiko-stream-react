import React from 'react';

export default function Section12MachineReadable() {
  const endpoints = [
    {
      title: "Status API",
      badge: "JSON REST",
      badgeColor: "#34d4ca",
      badgeBg: "rgba(52,212,202,0.12)",
      badgeBorder: "transparent",
      desc: "Query current aggregate health indexes, regional latency parameters, and open incident logs via standard REST payloads.",
      link: "#"
    },
    {
      title: "Webhook Events",
      badge: "PUSH EVENT",
      badgeColor: "#34d4ca",
      badgeBg: "rgba(52,212,202,0.12)",
      badgeBorder: "transparent",
      desc: "Register a server callback endpoint to consume instant push payloads immediately upon status changes.",
      link: "#"
    },
    {
      title: "RSS/Atom Feed",
      badge: "XML ATOM",
      badgeColor: "#34d4ca",
      badgeBg: "rgba(52,212,202,0.12)",
      badgeBorder: "transparent",
      desc: "Structured XML feed representing past resolutions, incidents, and scheduled maintenance timelines.",
      link: "#"
    }
  ];

  return (
    <section className="border-[#e1e6eb] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[120px] relative w-full bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-system-status/sec4-bg.png" />
      </div>

      <div className="flex flex-col lg:flex-row gap-[48px] items-start relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[24px] items-start relative flex-[1_0_0] w-full">
          <div className="flex flex-col gap-[16px] items-start relative w-full text-center md:text-left">
            <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-[#0f1b2d] text-3xl md:text-[38px] tracking-[-0.8px] w-full">
              Machine-readable status.
            </h2>
            <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#4f5e74] text-base md:text-[18px] w-full max-w-[900px] mx-auto md:mx-0">
              Natively integrate live platform operational parameters directly into your internal orchestration and automated failover scripts.
            </p>
          </div>

          <div className="flex flex-col gap-[16px] w-full">
            {endpoints.map((ep, idx) => (
              <div key={idx} className="bg-white border border-[#e1e6eb] border-solid flex flex-col gap-[16px] items-start p-[32px] relative rounded-[12px] w-full shadow-sm">
                <div className="flex items-center justify-between relative w-full">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#0f1b2d] text-[18px] whitespace-nowrap">
                    {ep.title}
                  </h3>
                  <div 
                    className="flex items-start px-[10px] py-[4px] relative rounded-[100px] border border-solid"
                    style={{ backgroundColor: ep.badgeBg, borderColor: ep.badgeBorder }}
                  >
                    <p 
                      className="font-[family-name:var(--font-inter)] font-semibold leading-[normal] not-italic relative text-[11px] uppercase whitespace-nowrap"
                      style={{ color: ep.badgeColor }}
                    >
                      {ep.badge}
                    </p>
                  </div>
                </div>
                <p className="font-[family-name:var(--font-inter)] font-normal leading-[22px] not-italic relative text-[#4f5e74] text-[14px] w-full">
                  {ep.desc}
                </p>
                <div className="w-full h-px bg-[#e1e6eb]" />
                <a href={ep.link} className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#4a8cfb] text-[14px] hover:text-[#3a7ceb] transition-colors">
                  View documentation &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0f1b2d] flex flex-col gap-[24px] items-start overflow-clip p-[32px] relative rounded-[16px] w-full lg:w-[500px] shrink-0 mt-8 lg:mt-0 shadow-lg">
          <div className="flex items-center justify-between leading-[normal] relative w-full whitespace-nowrap">
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#34d4ca] text-[14px]">
              SAMPLE STATUS RESPONSE
            </p>
            <p className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#707a8c] text-[12px]">
              GET /v1/status
            </p>
          </div>
          
          <pre className="font-[family-name:var(--font-inter)] font-normal leading-[20px] not-italic relative text-[#a8ff60] text-[13px] w-full overflow-x-auto whitespace-pre-wrap pt-6 pb-4">
{`{
  "status": "operational",
  "updated_at": "2026-03-20T17:41:00Z",
  "regions": {
    "us-east-1": "operational",
    "eu-west-1": "operational"
  },
  "active_incidents": [],
  "sla_score_90d": 99.98
}`}
          </pre>
          
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[18px] not-italic relative text-[#aab3c4] text-[13px] w-full">
            Rate limit: 120 requests / min per IP. Authenticated keys bypass standard limit boundaries.
          </p>
        </div>
      </div>
    </section>
  );
}
