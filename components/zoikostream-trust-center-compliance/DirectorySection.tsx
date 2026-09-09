import React from 'react';

const IMG = '/images/zoikostream-trust-center-compliance';

const STATUS_STYLES: Record<string, { bg: string; color: string }> = {
  Current: { bg: '#d1fae5', color: '#10b981' },
  'In Progress': { bg: '#fef3c7', color: '#f59e0b' },
  Planned: { bg: '#e2e8f0', color: '#4f5e74' },
};

const rows = [
  { name: 'SOC 2 Type II', type: 'Attestation', status: 'Current', scope: 'Platform infrastructure', updated: 'Jan 2026' },
  { name: 'ISO 27001:2022', type: 'Certification', status: 'Current', scope: 'All production services', updated: 'Mar 2026' },
  { name: 'GDPR', type: 'Assessment', status: 'Current', scope: 'EEA data processing', updated: 'Feb 2026' },
  { name: 'HIPAA', type: 'Assessment', status: 'In Progress', scope: 'Healthcare data module', updated: 'Pending' },
  { name: 'PCI DSS', type: 'Mapping', status: 'Planned', scope: 'Payment processing', updated: 'Q3 2026' },
  { name: 'CSA STAR', type: 'Self-Assessment', status: 'Current', scope: 'Cloud security', updated: 'Dec 2025' },
];

export default function DirectorySection() {
  return (
    <section
      className="relative w-full flex flex-col items-start overflow-hidden directory-section"
      style={{ padding: '100px 112px 120px', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1023px) {
          .directory-section { padding-left: 48px !important; padding-right: 48px !important; }
        }
        @media (max-width: 640px) {
          .directory-section { padding: 64px 24px 80px !important; }
          .directory-table { overflow-x: auto !important; }
          .directory-table table { min-width: 640px; }
        }
      `}} />

      <img src="/images/zoikostream-data-protection/faq-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <img src={`${IMG}/bg-blob-1.svg`} alt="" className="absolute pointer-events-none" style={{ left: '-230px', top: '-178px', width: '600px', height: '600px' }} />
      <img src={`${IMG}/bg-blob-2.svg`} alt="" className="absolute pointer-events-none" style={{ right: '-263px', bottom: '-181px', width: '740px', height: '740px' }} />

      <div className="relative z-10 flex flex-col items-start w-full" style={{ gap: '56px' }}>
        <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#0a0d13', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            Framework &amp; Requirement Directory
          </h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#4f5e74', fontSize: '18px', lineHeight: '28.8px' }}>
            A complete directory of every compliance framework and regulatory requirement we track — with transparent status for each.
          </p>
        </div>

        <div className="directory-table w-full" style={{ borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#ffffff', overflow: 'hidden' }}>
          <table className="w-full" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                <th className="font-space-grotesk font-bold text-left" style={{ padding: '20px', fontSize: '14px', color: '#4f5e74' }}>Framework Name</th>
                <th className="font-space-grotesk font-bold text-left" style={{ padding: '20px', fontSize: '14px', color: '#4f5e74' }}>Evidence Type</th>
                <th className="font-space-grotesk font-bold text-left" style={{ padding: '20px', fontSize: '14px', color: '#4f5e74' }}>Status</th>
                <th className="font-space-grotesk font-bold text-left" style={{ padding: '20px', fontSize: '14px', color: '#4f5e74' }}>Scope</th>
                <th className="font-space-grotesk font-bold text-right" style={{ padding: '20px', fontSize: '14px', color: '#4f5e74' }}>Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => {
                const s = STATUS_STYLES[r.status];
                return (
                  <tr key={r.name} style={{ borderBottom: i === rows.length - 1 ? 'none' : '1px solid #e2e8f0' }}>
                    <td className="font-space-grotesk font-bold" style={{ padding: '20px', fontSize: '15px', color: '#0a0d13' }}>{r.name}</td>
                    <td className="font-space-grotesk font-normal" style={{ padding: '20px', fontSize: '14px', color: '#4f5e74' }}>{r.type}</td>
                    <td style={{ padding: '20px' }}>
                      <span className="font-space-grotesk font-bold inline-flex whitespace-nowrap" style={{ padding: '4px 10px', borderRadius: '999px', fontSize: '11px', backgroundColor: s.bg, color: s.color }}>
                        {r.status}
                      </span>
                    </td>
                    <td className="font-space-grotesk font-normal" style={{ padding: '20px', fontSize: '14px', color: '#4f5e74' }}>{r.scope}</td>
                    <td className="font-space-grotesk font-normal text-right" style={{ padding: '20px', fontSize: '14px', color: '#4f5e74' }}>{r.updated}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
