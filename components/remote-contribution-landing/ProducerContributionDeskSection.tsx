import React from 'react';

type TableRow = {
  source: string;
  type: string;
  owner: string;
  preflight: { text: string; color: string; bg: string };
  checkin: { text: string; color: string; bg: string };
  connection: { text: string; color: string; bg: string };
  program: { text: string; color: string; bg: string };
  fallback: { text: string; color: string; plain?: boolean; bold?: boolean; bg?: string };
  action: { text: string; color: string };
};

export default function ProducerContributionDeskSection() {
  const tableData: TableRow[] = [
    {
      source: 'CEO Keynote', type: 'Presenter', owner: 'Production',
      preflight: { text: 'Passed', color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
      checkin: { text: 'Checked in', color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
      connection: { text: 'Connected', color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
      program: { text: 'In program', color: '#4c86ff', bg: 'rgba(59,130,246,0.1)' },
      fallback: { text: 'Not defined', color: '#4f5e74', plain: true },
      action: { text: 'View', color: '#33d9c7' }
    },
    {
      source: 'London Office', type: 'Venue feed', owner: 'Venue ops',
      preflight: { text: 'Passed', color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
      checkin: { text: 'Checked in', color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
      connection: { text: 'Connected', color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
      program: { text: 'Standby', color: '#aab3c4', bg: 'rgba(30,41,59,0.2)' },
      fallback: { text: 'Ready', color: '#10b981', plain: true, bold: true },
      action: { text: 'View', color: '#33d9c7' }
    },
    {
      source: 'Guest Speaker', type: 'Presenter', owner: 'Contributor',
      preflight: { text: 'Changed', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
      checkin: { text: 'Late', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
      connection: { text: 'Disconnected', color: '#ef4444', bg: 'rgba(239,68,68,0.1)' },
      program: { text: 'Out of program', color: '#aab3c4', bg: 'rgba(30,41,59,0.2)' },
      fallback: { text: 'Needs review', color: '#ef4444', plain: true, bold: true },
      action: { text: 'Reconnect', color: '#ef4444' }
    },
    {
      source: 'Interpreter ES', type: 'Interpreter', owner: 'Accessibility',
      preflight: { text: 'Passed', color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
      checkin: { text: 'Checked in', color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
      connection: { text: 'Connected', color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
      program: { text: 'Standby', color: '#aab3c4', bg: 'rgba(30,41,59,0.2)' },
      fallback: { text: 'Not required', color: '#4f5e74', plain: true },
      action: { text: 'View', color: '#33d9c7' }
    },
    {
      source: 'Backup Feed', type: 'Backup', owner: 'Production',
      preflight: { text: 'Not run', color: '#aab3c4', bg: 'rgba(30,41,59,0.2)' },
      checkin: { text: 'Not required', color: '#aab3c4', bg: 'rgba(30,41,59,0.2)' },
      connection: { text: 'Disconnected', color: '#aab3c4', bg: 'rgba(30,41,59,0.2)' },
      program: { text: 'Out of program', color: '#aab3c4', bg: 'rgba(30,41,59,0.2)' },
      fallback: { text: 'Available', color: '#4c86ff', plain: true, bold: true },
      action: { text: 'Activate', color: '#33d9c7' }
    }
  ];

  return (
    <section 
      className="relative w-full flex flex-col items-center justify-center px-6 md:px-0 overflow-hidden"
      style={{ backgroundColor: '#ffffff', paddingTop: '100px', paddingBottom: '100px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .desk-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
        @media (max-width: 1023px) {
          .desk-table-wrapper {
            overflow-x: auto !important;
          }
          .desk-table-content {
            min-width: 1000px !important;
          }
        }
      `}} />

      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="/images/remote-contribution-landing/desk-bg.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover max-w-none opacity-50"
        />
      </div>

      <div className="desk-padding relative z-10 flex flex-col items-start w-full" style={{ gap: '56px', maxWidth: '1440px' }}>
        
        {/* Header */}
        <div className="flex flex-col items-start w-full" style={{ gap: '16px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#0f1b2d', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            Producer contribution desk
          </h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#4f5e74', fontSize: '18px', lineHeight: '28.8px' }}>
            A dense but calm operator interface. Event title, authoritative time, source roster, filters, selected-source detail, active alerts, recovery actions, and help escalation — without imitating a consumer video grid.
          </p>
        </div>

        {/* Desk Mockup container */}
        <div 
          className="flex flex-col items-start w-full bg-white border"
          style={{ 
            padding: '24px', 
            gap: '24px', 
            borderRadius: '16px', 
            borderColor: '#e1e6eb',
            boxShadow: '0px 4px 8px rgba(0,0,0,0.04)' 
          }}
        >
          {/* Mockup Header Bar */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center shrink-0" style={{ gap: '16px' }}>
              <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#0f1b2d', fontSize: '16px' }}>
                Annual Corporate All-Hands
              </p>
              <div style={{ width: '1px', height: '16px', backgroundColor: '#e1e6eb' }} />
              <p className="font-space-grotesk font-medium whitespace-nowrap" style={{ color: '#33d9c7', fontSize: '14px' }}>
                14:32:18 UTC
              </p>
            </div>
            
            <div className="flex items-center justify-center shrink-0" style={{ gap: '6px', padding: '4px 12px', borderRadius: '100px', backgroundColor: 'rgba(239,68,68,0.1)' }}>
              <img src="/images/remote-contribution-landing/desk-ellipse.svg" alt="" style={{ width: '6px', height: '6px' }} />
              <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#ef4444', fontSize: '11px' }}>LIVE BROADCAST</span>
            </div>
          </div>

          {/* Roster Table */}
          <div className="desk-table-wrapper w-full flex flex-col items-start border-t" style={{ borderColor: '#e1e6eb' }}>
            <div className="desk-table-content w-full flex flex-col">
              
              {/* Table Header */}
              <div className="flex items-start w-full bg-[#f8fafc] border-b" style={{ borderColor: '#e1e6eb', padding: '12px 16px', gap: '16px' }}>
                <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#4f5e74', fontSize: '13px', width: '160px' }}>Source</p>
                <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#4f5e74', fontSize: '13px', width: '100px' }}>Type</p>
                <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#4f5e74', fontSize: '13px', width: '110px' }}>Owner</p>
                <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#4f5e74', fontSize: '13px', width: '110px' }}>Preflight</p>
                <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#4f5e74', fontSize: '13px', width: '110px' }}>Check-in</p>
                <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#4f5e74', fontSize: '13px', width: '120px' }}>Connection</p>
                <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#4f5e74', fontSize: '13px', width: '110px' }}>Program</p>
                <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#4f5e74', fontSize: '13px', width: '110px' }}>Fallback</p>
                <p className="font-space-grotesk font-bold flex-1 text-right" style={{ color: '#4f5e74', fontSize: '13px' }}>Actions</p>
              </div>

              {/* Table Rows */}
              {tableData.map((row, index) => (
                <div key={index} className="flex items-center w-full border-b" style={{ borderColor: '#e1e6eb', padding: '16px', gap: '16px' }}>
                  <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#0f1b2d', fontSize: '14px', width: '160px' }}>{row.source}</p>
                  <p className="font-space-grotesk font-normal shrink-0" style={{ color: '#4f5e74', fontSize: '13px', width: '100px' }}>{row.type}</p>
                  <p className="font-space-grotesk font-normal shrink-0" style={{ color: '#4f5e74', fontSize: '13px', width: '110px' }}>{row.owner}</p>
                  
                  {/* Preflight */}
                  <div className="flex items-start shrink-0" style={{ width: '110px' }}>
                    <div style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: row.preflight.bg }}>
                      <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: row.preflight.color, fontSize: '12px' }}>{row.preflight.text}</span>
                    </div>
                  </div>
                  
                  {/* Checkin */}
                  <div className="flex items-start shrink-0" style={{ width: '110px' }}>
                    <div style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: row.checkin.bg }}>
                      <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: row.checkin.color, fontSize: '12px' }}>{row.checkin.text}</span>
                    </div>
                  </div>

                  {/* Connection */}
                  <div className="flex items-start shrink-0" style={{ width: '120px' }}>
                    <div style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: row.connection.bg }}>
                      <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: row.connection.color, fontSize: '12px' }}>{row.connection.text}</span>
                    </div>
                  </div>

                  {/* Program */}
                  <div className="flex items-start shrink-0" style={{ width: '110px' }}>
                    <div style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: row.program.bg }}>
                      <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: row.program.color, fontSize: '12px' }}>{row.program.text}</span>
                    </div>
                  </div>

                  {/* Fallback */}
                  {row.fallback.plain ? (
                    <p className={`font-space-grotesk ${row.fallback.bold ? 'font-bold' : 'font-normal'} shrink-0`} style={{ color: row.fallback.color, fontSize: '13px', width: '110px' }}>
                      {row.fallback.text}
                    </p>
                  ) : (
                    <div className="flex items-start shrink-0" style={{ width: '110px' }}>
                      <div style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: row.fallback.bg }}>
                        <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: row.fallback.color, fontSize: '12px' }}>{row.fallback.text}</span>
                      </div>
                    </div>
                  )}

                  {/* Action */}
                  <div className="flex items-start justify-end flex-1">
                    <button className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: row.action.color, fontSize: '13px' }}>
                      {row.action.text}
                    </button>
                  </div>

                </div>
              ))}
              
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
