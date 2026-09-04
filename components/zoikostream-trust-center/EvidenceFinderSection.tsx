import React from 'react';

const IMG = '/images/zoikostream-trust-center';

const evidenceRows = [
  { title: 'SOC 2 Type II Report', scope: 'Scope: Cloud infrastructure security controls', badge: 'ATTESTATION', domain: 'Security', state: 'Current', access: 'Controlled', accessColor: '#f59e0b', date: 'Jan 2025 – Dec 2025', action: 'Request' },
  { title: 'ISO 27001 Certification', scope: 'Scope: Information security management system', badge: 'CERTIFICATION', domain: 'Security', state: 'Current', access: 'Public', accessColor: '#10b981', date: 'Certified: Mar 2026', action: 'View' },
  { title: 'GDPR Data Processing Practices', scope: 'Scope: EU personal data handling', badge: 'POLICY', domain: 'Data Protection', state: 'Current', access: 'Public', accessColor: '#10b981', date: 'Effective: Jun 2024', action: 'View' },
  { title: 'Infrastructure Penetration Test', scope: 'Scope: External network and application security', badge: 'ASSESSMENT', domain: 'Security', state: 'Current', access: 'Controlled', accessColor: '#f59e0b', date: 'Completed: Jul 2025', action: 'Request' },
  { title: 'CSA STAR Self-Assessment', scope: 'Scope: Cloud security alliance framework alignment', badge: 'MAPPING', domain: 'Compliance', state: 'Current', access: 'Public', accessColor: '#10b981', date: 'Updated: Aug 2025', action: 'View' },
  { title: 'Business Continuity Plan Summary', scope: 'Scope: Disaster recovery and continuity framework', badge: 'RELIABILITY', domain: 'Service Reliability', state: 'Current', access: 'Controlled', accessColor: '#f59e0b', date: 'Reviewed: May 2025', action: 'Request' },
];

export default function EvidenceFinderSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ padding: '100px 112px', backgroundColor: '#0a0f1a' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ width: '1440px', height: '1100px' }}>
        <img src={`${IMG}/finder-bg.png`} alt="" className="absolute inset-0 w-full h-full object-cover max-w-none" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,15,26,0.79)' }} />
      </div>

      <div className="relative z-10 flex flex-col items-start w-full" style={{ gap: '48px' }}>
        {/* Header */}
        <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#ffffff', fontSize: '38px', lineHeight: '48px' }}>
            Current Trust Evidence Inventory
          </h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '18px', lineHeight: '28px' }}>
            Search and filter approved evidence records with exact metadata.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center w-full border" style={{ padding: '16px', gap: '16px', backgroundColor: 'rgba(16,21,30,0.8)', borderColor: '#232b3a', borderRadius: '12px' }}>
          <div className="flex items-center flex-1 min-w-0 border" style={{ height: '42px', padding: '0 14px', gap: '10px', backgroundColor: 'rgba(10,15,26,0.5)', borderColor: '#232b3a', borderRadius: '8px' }}>
            <img src={`${IMG}/search.svg`} alt="" style={{ width: '16px', height: '16px', flexShrink: 0 }} />
            <span className="font-space-grotesk font-normal flex-1" style={{ color: '#707a8c', fontSize: '13.5px' }}>Search evidence, scope or standard...</span>
          </div>
          {[{ label: 'All Domains', w: '180px' }, { label: 'Evidence Type', w: '180px' }, { label: 'Access Status', w: '160px' }, { label: 'All States', w: '150px' }].map((f, i) => (
            <div key={i} className="flex items-center justify-between whitespace-nowrap border shrink-0" style={{ width: f.w, height: '42px', padding: '0 14px', backgroundColor: 'rgba(10,15,26,0.5)', borderColor: '#232b3a', borderRadius: '8px' }}>
              <span className="font-space-grotesk font-normal" style={{ color: '#eef1f6', fontSize: '13.5px' }}>{f.label}</span>
              <span style={{ color: '#eef1f6', fontSize: '11px' }}>▼</span>
            </div>
          ))}
        </div>

        {/* Evidence Table */}
        <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
          {evidenceRows.map((row, i) => (
            <div key={i} className="flex items-center w-full border" style={{ padding: '20px', gap: '24px', backgroundColor: 'rgba(16,21,30,0.8)', borderColor: '#232b3a', borderRadius: '12px' }}>
              {/* Meta main */}
              <div className="flex flex-col items-start flex-1 min-w-0" style={{ gap: '6px' }}>
                <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#eef1f6', fontSize: '16px' }}>{row.title}</p>
                <p className="font-space-grotesk font-normal whitespace-nowrap" style={{ color: '#aab3c4', fontSize: '13px' }}>{row.scope}</p>
              </div>
              {/* Meta details */}
              <div className="flex items-center shrink-0" style={{ width: '560px', gap: '16px' }}>
                <span style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: 'rgba(76,134,255,0.08)', fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, fontSize: '11px', color: '#4c86ff' }}>{row.badge}</span>
                <span style={{ width: '110px', fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#aab3c4' }}>{row.domain}</span>
                <span style={{ padding: '4px 10px', borderRadius: '99px', backgroundColor: 'rgba(0,212,170,0.08)', fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, fontSize: '11px', color: '#34d4ca' }}>{row.state}</span>
                <span style={{ width: '100px', fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: row.accessColor }}>{row.access}</span>
                <span className="font-space-grotesk font-normal" style={{ width: '140px', fontSize: '12.5px', color: '#707a8c' }}>{row.date}</span>
              </div>
              {/* Action */}
              <div className="flex items-start justify-end shrink-0" style={{ width: '120px' }}>
                <button className="font-space-grotesk font-bold whitespace-nowrap" style={{
                  padding: '8px 14px', borderRadius: '6px', fontSize: '12.5px',
                  ...(row.action === 'View' ? { backgroundColor: '#4c86ff', color: '#ffffff', border: 'none' } : { backgroundColor: 'transparent', color: '#eef1f6', border: '1px solid #aab3c4' })
                }}>{row.action}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
