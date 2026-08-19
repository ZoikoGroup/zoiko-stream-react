import React from 'react';

export default function ShowcaseSection() {
  return (
    <section 
      className="relative w-full flex flex-col items-start px-6 md:px-0 overflow-hidden bg-white"
      style={{ paddingTop: '100px', paddingBottom: '100px', gap: '48px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .showcase-section-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
        @media (min-width: 1024px) {
          .right-sidebar {
            width: 340px !important;
          }
        }
      `}} />

      <img 
        src="/images/event-resilience/showcase-bg.png" 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-start w-full showcase-section-padding" style={{ gap: '16px' }}>
        <h2 className="font-space-grotesk font-bold leading-[normal]" style={{ color: '#111827', fontSize: '37.9px', letterSpacing: '-0.38px' }}>
          Resilience Readiness Board
        </h2>
        <p className="font-space-grotesk font-normal leading-[28.8px]" style={{ color: '#6b7280', fontSize: '18px', maxWidth: '800px' }}>
          Monitor target connections, encoder statuses, and failover states inside a single unified<br/>cockpit.
        </p>
      </div>

      <div className="w-full showcase-section-padding overflow-x-auto pb-4">
        <div 
          className="relative z-10 w-full flex flex-col lg:flex-row items-stretch bg-white" 
          style={{ 
            padding: '24px', 
            gap: '24px', 
            borderRadius: '16px', 
            border: '1px solid #e5e7eb',
            boxShadow: '0px 8px 12px rgba(0,0,0,0.05)',
            minWidth: 'fit-content'
          }}
        >
          <div className="flex flex-col flex-1 w-full min-w-[500px]" style={{ gap: '16px' }}>
            {/* Table Header */}
            <div className="flex items-start justify-between w-full border-b" style={{ backgroundColor: '#f9fafb', borderColor: '#e5e7eb', padding: '12px' }}>
              <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#6b7280', fontSize: '12px', width: '200px', minWidth: '200px' }}>DEPENDENCY</p>
              <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#6b7280', fontSize: '12px', width: '120px', minWidth: '120px' }}>OWNER</p>
              <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#6b7280', fontSize: '12px', width: '120px', minWidth: '120px' }}>STATE</p>
            </div>

            {/* Table Rows */}
            <div className="flex items-center justify-between w-full bg-white border" style={{ borderColor: '#e5e7eb', padding: '12px', borderRadius: '8px' }}>
              <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#111827', fontSize: '14px', width: '200px', minWidth: '200px' }}>Primary SRT Ingest</p>
              <p className="font-space-grotesk font-normal shrink-0" style={{ color: '#6b7280', fontSize: '14px', width: '120px', minWidth: '120px' }}>Lead Operator</p>
              <div className="flex items-center justify-center border shrink-0" style={{ width: '120px', minWidth: '120px', backgroundColor: '#d1fae5', borderColor: '#a7f3d0', borderRadius: '4px', padding: '4px 8px' }}>
                <p className="font-space-grotesk font-bold" style={{ color: '#065f46', fontSize: '12px' }}>READY</p>
              </div>
            </div>

            <div className="flex items-center justify-between w-full bg-white border" style={{ borderColor: '#e5e7eb', padding: '12px', borderRadius: '8px' }}>
              <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#111827', fontSize: '14px', width: '200px', minWidth: '200px' }}>Dual-WAN Failover</p>
              <p className="font-space-grotesk font-normal shrink-0" style={{ color: '#6b7280', fontSize: '14px', width: '120px', minWidth: '120px' }}>Net Engineer</p>
              <div className="flex items-center justify-center border shrink-0" style={{ width: '120px', minWidth: '120px', backgroundColor: '#dbeafe', borderColor: '#93c5fd', borderRadius: '4px', padding: '4px 8px' }}>
                <p className="font-space-grotesk font-bold" style={{ color: '#1e40af', fontSize: '12px' }}>ACTIVE</p>
              </div>
            </div>

            <div className="flex items-center justify-between w-full bg-white border" style={{ borderColor: '#e5e7eb', padding: '12px', borderRadius: '8px' }}>
              <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#111827', fontSize: '14px', width: '200px', minWidth: '200px' }}>Caption Transcoder</p>
              <p className="font-space-grotesk font-normal shrink-0" style={{ color: '#6b7280', fontSize: '14px', width: '120px', minWidth: '120px' }}>AI Pipeline</p>
              <div className="flex items-center justify-center border shrink-0" style={{ width: '120px', minWidth: '120px', backgroundColor: '#fef3c7', borderColor: '#fde68a', borderRadius: '4px', padding: '4px 8px' }}>
                <p className="font-space-grotesk font-bold" style={{ color: '#92400e', fontSize: '12px' }}>PENDING</p>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="flex flex-col border w-full right-sidebar shrink-0" style={{ backgroundColor: '#f9fafb', borderColor: '#e5e7eb', borderRadius: '12px', padding: '20px', gap: '16px' }}>
            <p className="font-space-grotesk font-bold" style={{ color: '#111827', fontSize: '16px' }}>Active Blockers</p>
            <p className="font-space-grotesk font-normal" style={{ color: '#6b7280', fontSize: '13px', lineHeight: 'normal' }}>
              No severe path blockers detected. Waiting on<br/>caption pipeline validation before pre-show<br/>preflight sign-off.
            </p>
            <div 
              className="flex items-center justify-center w-full"
              style={{ 
                background: 'linear-gradient(to right, #00d4aa, #4c86ff)',
                borderRadius: '8px',
                padding: '12px 16px',
                boxShadow: '0px 4px 8px rgba(0, 212, 170, 0.2)'
              }}
            >
              <p className="font-space-grotesk font-bold" style={{ color: '#04141a', fontSize: '14px' }}>
                Trigger Preflight Probe
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
