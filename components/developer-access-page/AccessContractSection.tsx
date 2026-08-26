import Image from 'next/image';
import React from 'react';

const CONTRACT_ROWS = [
  {
    dimension: 'Account',
    summary: 'SSO profile identity verified with active auth tokens',
    state: 'VERIFIED',
    stateColor: 'text-[#10b981]',
    stateBg: 'bg-[rgba(16,185,129,0.1)]',
  },
  {
    dimension: 'Workspace',
    summary: 'Approved target organization and secure client scope',
    state: 'VERIFIED',
    stateColor: 'text-[#10b981]',
    stateBg: 'bg-[rgba(16,185,129,0.1)]',
  },
  {
    dimension: 'Membership Role',
    summary: 'Assigned role mapped from centralized policy engine',
    state: 'VERIFIED',
    stateColor: 'text-[#10b981]',
    stateBg: 'bg-[rgba(16,185,129,0.1)]',
  },
  {
    dimension: 'Environment',
    summary: 'Sandbox vs Production environment definitions active',
    state: 'VERIFIED',
    stateColor: 'text-[#10b981]',
    stateBg: 'bg-[rgba(16,185,129,0.1)]',
  },
  {
    dimension: 'Capability',
    summary: 'Verified active platform action authorizations',
    state: 'PENDING',
    stateColor: 'text-[#f59e0b]',
    stateBg: 'bg-[rgba(245,158,11,0.1)]',
  },
  {
    dimension: 'Review & Approval',
    summary: 'Workspace admin manual credentials validation state',
    state: 'PENDING',
    stateColor: 'text-[#f59e0b]',
    stateBg: 'bg-[rgba(245,158,11,0.1)]',
  },
  {
    dimension: 'Credential Readiness',
    summary: 'Final ready state check for API key deployment',
    state: 'NOT READY',
    stateColor: 'text-[#ef4444]',
    stateBg: 'bg-[rgba(239,68,68,0.1)]',
  },
];

export default function AccessContractSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-24 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Background image + overlay */}
      <Image
        src="/images/developer-access-page/access-contract/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover mix-blend-multiply opacity-[0.8]"
      />
      
      {/* Background Blobs */}
      <div className="pointer-events-none absolute left-[-180px] top-[-54px] size-[420px]">
        <Image src="/images/developer-access-page/access-contract/bg-blob-1.svg" alt="" fill className="object-contain" />
      </div>
      <div className="pointer-events-none absolute bottom-[-289px] right-[-124px] size-[520px]">
        <Image src="/images/developer-access-page/access-contract/bg-blob-2.svg" alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="w-full text-[30px] font-bold leading-[1.2] text-[#0f1b2d] md:text-[38px] md:leading-[48px]">
            The Developer Access Contract
          </h2>
          <p className="w-full font-inter text-[16px] font-normal leading-[28px] text-[#4f5e74] md:text-[18px]">
            The canonical public model. Each dimension has an owner, source, public visibility, state mapping, and currentness rule.
          </p>
        </div>

        <div className="flex w-full flex-col items-start rounded-[16px] border-[1.5px] border-solid border-[#e1e6eb] bg-white p-[24px]">
          <div className="flex w-full items-start gap-[12px] border-b-2 border-solid border-[#e1e6eb] bg-[#f8fafc] p-[16px] text-[13px] font-bold text-[#0f1b2d]">
            <p className="w-[120px] shrink-0 sm:w-[220px]">Contract Dimension</p>
            <p className="flex-1">Required Fields & Verification Summary</p>
            <p className="w-[100px] shrink-0 text-right sm:w-[160px]">Current State</p>
          </div>

          <div className="flex w-full flex-col">
            {CONTRACT_ROWS.map((row, idx) => (
              <div
                key={row.dimension}
                className={`flex w-full items-center gap-[12px] p-[16px] ${
                  idx !== CONTRACT_ROWS.length - 1 ? 'border-b border-solid border-[#e1e6eb]' : ''
                }`}
              >
                <p className="w-[120px] shrink-0 text-[13px] font-bold text-[#0f1b2d] sm:w-[220px] sm:text-[14px]">
                  {row.dimension}
                </p>
                <p className="flex-1 font-inter text-[12px] font-normal leading-[20px] text-[#4f5e74] sm:text-[13px]">
                  {row.summary}
                </p>
                <div className="flex w-[100px] shrink-0 items-start justify-end sm:w-[160px]">
                  <div className={`rounded-[4px] px-[10px] py-[4px] ${row.stateBg}`}>
                    <p className={`text-[10px] font-bold whitespace-nowrap sm:text-[11px] ${row.stateColor}`}>
                      {row.state}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
