import React from 'react';
import { List, ChevronRight } from 'lucide-react';

const SECTIONS = [
  { id: 'section-1', title: '1. Scope & Acceptance of Terms' },
  { id: 'section-2', title: '2. User Accounts & Security' },
  { id: 'section-3', title: '3. Service Availability & Performance' },
  { id: 'section-4', title: '4. Acceptable Use & Content Restrictions' },
  { id: 'section-5', title: '5. Fees, Billing & Payment Terms' },
  { id: 'section-6', title: '6. Intellectual Property & Ownership' },
  { id: 'section-7', title: '7. Data Protection & Privacy' },
  { id: 'section-8', title: '8. Confidentiality & Proprietary Info' },
  { id: 'section-9', title: '9. Warranties & Disclaimers' },
  { id: 'section-10', title: '10. Limitation of Liability' },
  { id: 'section-11', title: '11. Term, Termination & Suspension' },
  { id: 'section-12', title: '12. Governing Law & Dispute Resolution' },
  { id: 'section-13', title: '13. Modifications to Terms' },
  { id: 'section-14', title: '14. General Provisions & Contact' },
];

export function TableOfContents() {
  return (
    <div className="w-full bg-slate-900 border-b border-slate-800 text-slate-300 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1360px] mx-auto space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          <List className="w-4 h-4 text-violet-400" />
          <span>Quick Section Navigation</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 text-xs sm:text-sm">
          {SECTIONS.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 hover:border-violet-600/50 hover:bg-slate-800/80 hover:text-white transition-all group"
            >
              <span className="truncate">{sec.title}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-violet-400 shrink-0 ml-2" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
