import React from 'react';

const IMG = '/images/zoikostream-trust-center';

const timeline = [
  { date: 'AUG 2025', title: 'ISO 27001 Certification Renewed', desc: 'Certification renewed through March 2026. Previous record superseded.', status: 'Current', statusColor: '#00d4aa', statusBg: 'rgba(0,212,170,0.08)' },
  { date: 'JUL 2025', title: 'Penetration Test Report Updated', desc: 'New assessment completed. Previous report moved to superseded state.', status: 'Current', statusColor: '#00d4aa', statusBg: 'rgba(0,212,170,0.08)' },
  { date: 'JUN 2025', title: 'Privacy Policy Updated', desc: 'Minor scope clarification for EU data handling. Material change noted.', status: 'Corrected', statusColor: '#ef4444', statusBg: 'rgba(239,68,68,0.08)' },
  { date: 'MAY 2025', title: 'BCP Summary Reviewed', desc: 'Annual review completed. No material changes to continuity framework.', status: 'Current', statusColor: '#00d4aa', statusBg: 'rgba(0,212,170,0.08)' },
];

export default function UpdatesCorrectionsSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ padding: '100px 112px', backgroundColor: '#0a0f1a' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ width: '1440px', height: '850px' }}>
        <img src={`${IMG}/updates-bg.png`} alt="" className="absolute inset-0 w-full h-full object-cover max-w-none" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,15,26,0.42)' }} />
      </div>

      <div className="relative z-10 flex flex-col items-start w-full" style={{ gap: '56px' }}>
        <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#eef1f6', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>Evidence Updates &amp; Corrections</h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '18px', lineHeight: '28.8px' }}>How evidence records change, and how corrections maintain trust transparency.</p>
        </div>

        <div className="flex flex-col items-start w-full" style={{ gap: '20px' }}>
          {timeline.map((t, i) => (
            <div key={i} className="flex items-center w-full border" style={{ padding: '20px', gap: '24px', backgroundColor: 'rgba(16,21,30,0.8)', borderColor: '#232b3a', borderRadius: '12px' }}>
              <div className="shrink-0" style={{ width: '120px' }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, fontSize: '14px', color: '#4c86ff' }}>{t.date}</span>
              </div>
              <div className="flex flex-col items-start flex-1 min-w-0" style={{ gap: '4px' }}>
                <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#eef1f6', fontSize: '16px' }}>{t.title}</p>
                <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '13px' }}>{t.desc}</p>
              </div>
              <div className="flex items-start justify-end shrink-0" style={{ width: '120px' }}>
                <span style={{ padding: '4px 10px', borderRadius: '99px', backgroundColor: t.statusBg, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, fontSize: '11px', color: t.statusColor }}>{t.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-start w-full">
          <button className="font-space-grotesk font-medium whitespace-nowrap" style={{ padding: '14px 28px', borderRadius: '10px', border: '1px solid #aab3c4', backgroundColor: 'transparent', color: '#eef1f6', fontSize: '15px' }}>
            View Full Evidence History
          </button>
        </div>
      </div>
    </section>
  );
}
