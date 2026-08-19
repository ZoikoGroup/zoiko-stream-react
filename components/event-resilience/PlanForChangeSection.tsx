import React from 'react';

const cards = [
  {
    icon: '/images/event-resilience/icon-git-branch.svg',
    title: 'Source / Contribution',
    description: <>Presenter device, source, or contribution route<br/>changes trigger revalidation of affected<br/>contribution checks.</>
  },
  {
    icon: '/images/event-resilience/icon-wifi.svg',
    title: 'Venue / Connectivity',
    description: <>Room, network, handoff, or venue provider<br/>changes trigger revalidation of venue and<br/>connectivity dependencies.</>
  },
  {
    icon: '/images/event-resilience/icon-activity.svg',
    title: 'Production',
    description: <>Switching configuration, graphics, or control<br/>responsibility changes trigger revalidation of<br/>production path.</>
  },
  {
    icon: '/images/event-resilience/icon-users.svg',
    title: 'Audience Access',
    description: <>Access rules, invitation, entitlement, or entry<br/>changes trigger revalidation of access rules and<br/>viewer recovery.</>
  },
  {
    icon: '/images/event-resilience/icon-layers.svg',
    title: 'Accessibility / Language',
    description: <>Caption source, language, interpreter, or<br/>alternate-access changes trigger revalidation of<br/>accessibility paths.</>
  },
  {
    icon: '/images/event-resilience/icon-clock.svg',
    title: 'Schedule / Run-of-Show',
    description: <>Timing, order, room, or session changes trigger<br/>revalidation of time-sensitive dependencies.</>
  }
];

export default function PlanForChangeSection() {
  return (
    <section 
      className="relative w-full flex flex-col items-start px-6 md:px-0 overflow-hidden bg-[#0a0f1a]"
      style={{ paddingTop: '100px', paddingBottom: '100px', gap: '56px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .plan-section-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
      `}} />

      {/* Background Images */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-60">
        <img 
          src="/images/event-resilience/plan-for-change-bg.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover max-w-none"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[1440px] h-[800px]" style={{ background: 'linear-gradient(to right, rgba(52,212,202,0.05), rgba(74,140,251,0.02))' }} />
        <div className="absolute top-[200px] left-[-150px] w-[400px] h-[400px]">
          <img src="/images/event-resilience/plan-ellipse.svg" alt="" className="absolute inset-0 w-full h-full max-w-none" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-start w-full plan-section-padding" style={{ gap: '16px' }}>
        <h2 className="font-space-grotesk font-bold leading-[60.8px]" style={{ color: '#eef1f6', fontSize: '37.9px', letterSpacing: '-0.38px' }}>
          Plan for what can change
        </h2>
        <p className="font-space-grotesk font-normal leading-[28.8px]" style={{ color: '#aab3c4', fontSize: '18px', maxWidth: '800px' }}>
          Verification belongs to a defined version and scope. Material changes can make prior<br/>evidence stale — targeted revalidation keeps readiness current without erasing unrelated<br/>verified work.
        </p>
      </div>

      <div className="relative z-10 w-full plan-section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-[1216px]" style={{ gap: '20px' }}>
          {cards.map((card, index) => (
            <div 
              key={index}
              className="flex flex-col items-start border w-full"
              style={{ 
                backgroundColor: '#0d1520', 
                borderColor: '#2a3547', 
                padding: '28px', 
                gap: '16px',
                borderRadius: '16px',
                minHeight: '219px'
              }}
            >
              <div 
                className="flex flex-col items-center justify-center shrink-0 border"
                style={{ 
                  backgroundColor: '#131c2e',
                  borderColor: '#1e2f4a',
                  width: '48px',
                  height: '48px',
                  borderRadius: '24px'
                }}
              >
                <img src={card.icon} alt="" style={{ width: '20px', height: '20px' }} />
              </div>

              <div className="flex flex-col items-start w-full" style={{ gap: '8px' }}>
                <p className="font-space-grotesk font-bold leading-[normal]" style={{ color: '#eef1f6', fontSize: '17px' }}>
                  {card.title}
                </p>
                <p className="font-space-grotesk font-normal leading-[22.75px]" style={{ color: '#8c9baf', fontSize: '14px' }}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full plan-section-padding">
        <div 
          className="flex items-center border w-full shrink-0"
          style={{ 
            backgroundColor: '#111827', 
            borderColor: '#2a3547', 
            padding: '20px 24px', 
            gap: '16px',
            borderRadius: '12px'
          }}
        >
          <div className="shrink-0" style={{ width: '4px', height: '24px', background: 'linear-gradient(to bottom, #34d4ca, #4a8cfb)', borderRadius: '2px' }} />
          <p className="font-space-grotesk font-medium text-[#eef1f6] leading-[normal]" style={{ fontSize: '15px' }}>
            <span className="font-bold text-[#34d4ca]">Targeted revalidation: </span>
            A change invalidates only affected evidence — not unrelated verified work.
          </p>
        </div>
      </div>

    </section>
  );
}
