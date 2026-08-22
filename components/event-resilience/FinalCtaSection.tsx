import React from 'react';

export default function FinalCtaSection() {
  return (
    <section 
      className="relative w-full flex flex-col items-center justify-center px-6 md:px-0 overflow-hidden"
      style={{ padding: '140px 112px', gap: '40px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 767px) {
          .final-cta-section {
            padding: 80px 24px !important;
          }
        }
      `}} />

      {/* Background with Image and Dark Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img 
          src="/images/event-resilience/final-cta-bg.png" 
          alt="" 
          className="absolute max-w-none object-cover"
          style={{ width: '142.92%', height: '374.18%', left: '-21.46%', top: '-144%' }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,13,19,0.73)' }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center w-full" style={{ gap: '20px', maxWidth: '800px' }}>
        <h2 className="font-space-grotesk font-bold" style={{ color: '#eef1f6', fontSize: '42px', lineHeight: '1.2' }}>
          Ready to plan your event resilience?
        </h2>
        <p className="font-space-grotesk font-normal" style={{ color: '#c8cbd0', fontSize: '18px', lineHeight: '28.8px', maxWidth: '640px' }}>
          Turn your event into a structured, reviewable resilience plan. Start with what you know — we will help identify dependencies, verification needs, and recovery paths.
        </p>
      </div>

      {/* Buttons */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full" style={{ gap: '16px' }}>
        <a 
          href="#"
          className="flex items-center justify-center cursor-pointer transition-transform hover:scale-[1.02]"
          style={{ 
            background: 'linear-gradient(to right, #00d4aa, #4c86ff)',
            boxShadow: '0px 4px 8px rgba(0, 212, 170, 0.2)',
            padding: '14px 28px',
            borderRadius: '10px'
          }}
        >
          <span className="font-space-grotesk font-bold" style={{ color: '#04141a', fontSize: '15px' }}>Start your event brief</span>
        </a>

        <a 
          href="/talk-to-an-expert"
          className="flex items-center justify-center cursor-pointer transition-transform hover:scale-[1.02]"
          style={{ 
            border: '1px solid #aab3c4',
            backgroundColor: 'transparent',
            padding: '14px 28px',
            borderRadius: '10px'
          }}
        >
          <span className="font-space-grotesk font-medium" style={{ color: '#eef1f6', fontSize: '15px' }}>Talk to an expert</span>
        </a>
      </div>

      {/* Small Disclaimer */}
      <p className="relative z-10 font-space-grotesk font-normal text-center" style={{ color: '#eef1f6', fontSize: '13px' }}>
        No booking, staffing, pricing, or technical commitment is created by submitting a brief.
      </p>

    </section>
  );
}
