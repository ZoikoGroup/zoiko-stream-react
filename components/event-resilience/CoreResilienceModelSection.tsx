import React from 'react';

const models = [
  {
    id: '01',
    title: 'Identify Dependencies',
    description: <>Map every service, API,<br/>and infrastructure<br/>component your system<br/>relies on to understand<br/>failure blast radius.</>,
    icon: '/images/event-resilience/icon-git-branch.svg'
  },
  {
    id: '02',
    title: 'Verify Readiness',
    description: <>Continuously validate<br/>that runbooks, backups,<br/>and failover mechanisms<br/>are tested and ready to<br/>activate.</>,
    icon: '/images/event-resilience/icon-check-circle.svg'
  },
  {
    id: '03',
    title: 'Watch for Changes',
    description: <>Monitor deployments,<br/>config drifts, and<br/>topology shifts in real<br/>time so nothing catches<br/>your team off guard.</>,
    icon: '/images/event-resilience/icon-activity.svg'
  },
  {
    id: '04',
    title: 'Define Recovery',
    description: <>Establish clear RTO and<br/>RPO targets with<br/>automated playbooks<br/>that trigger the right<br/>response every time.</>,
    icon: '/images/event-resilience/icon-refresh-cw.svg'
  },
  {
    id: '05',
    title: 'Preserve Evidence',
    description: <>Capture immutable audit<br/>logs and incident<br/>artifacts so post-<br/>mortems are thorough<br/>and compliance is<br/>assured.</>,
    icon: '/images/event-resilience/icon-shield.svg'
  }
];

export default function CoreResilienceModelSection() {
  return (
    <section className="relative w-full py-[80px] px-6 md:px-[112px] flex flex-col items-start gap-[48px] overflow-hidden bg-[#fafafa]">
      
      {/* Background Image */}
      <img 
        src="/images/event-resilience/model-strip-bg.png" 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none z-0"
      />

      <div className="relative z-10 flex flex-col gap-[16px] w-full max-w-[640px]">
        <h2 className="font-space-grotesk font-bold text-3xl md:text-[37.9px] leading-[1.2] md:leading-[60.8px] tracking-[-0.38px]" style={{ color: '#0d1117' }}>
          Our Core Resilience Model
        </h2>
        <p className="font-space-grotesk font-normal text-[16px] md:text-[18px] leading-[1.6] md:leading-[28.8px]" style={{ color: '#5a6478' }}>
          Resilience means removing barriers to failure. Our platform keeps your systems identified, verified, and completely in your control.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[16px] w-full">
        {models.map((model) => (
          <div 
            key={model.id}
            className="flex flex-col items-start border h-full"
            style={{ 
              backgroundColor: '#f0f6ff', 
              borderColor: '#d6e8ff', 
              padding: '28px', 
              gap: '16px',
              borderRadius: '16px',
              minHeight: '308px'
            }}
          >
            <div 
              className="flex items-center justify-center shrink-0"
              style={{ 
                backgroundColor: '#dbeafe',
                width: '48px',
                height: '48px',
                borderRadius: '24px'
              }}
            >
              <img src={model.icon} alt="" style={{ width: '22px', height: '22px' }} />
            </div>

            <div className="flex flex-col items-start w-full" style={{ gap: '8px' }}>
              <span className="font-space-grotesk font-bold text-blue-600 uppercase tracking-wider" style={{ fontSize: '11px' }}>
                MODEL {model.id}
              </span>
              <h3 className="font-space-grotesk font-bold leading-[normal]" style={{ color: '#0d1117', fontSize: '17px' }}>
                {model.title}
              </h3>
              <p className="font-space-grotesk font-normal" style={{ color: '#5a6478', fontSize: '14px', lineHeight: '22.75px' }}>
                {model.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
