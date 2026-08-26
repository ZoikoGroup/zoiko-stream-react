import Image from 'next/image';
import React from 'react';

const MATRIX_ROWS = [
  {
    dimension: 'Workspace Membership',
    available: { status: 'AVAILABLE', bg: 'bg-[rgba(16,185,129,0.1)]', color: 'text-[#10b981]' },
    restricted: { status: 'MUTED', bg: 'bg-[rgba(170,179,196,0.1)]', color: 'text-[#aab3c4]' },
    review: { status: 'MUTED', bg: 'bg-[rgba(170,179,196,0.1)]', color: 'text-[#aab3c4]' },
    unknown: { status: 'MUTED', bg: 'bg-[rgba(170,179,196,0.1)]', color: 'text-[#aab3c4]' },
  },
  {
    dimension: 'Environment Access',
    available: { status: 'AVAILABLE', bg: 'bg-[rgba(16,185,129,0.1)]', color: 'text-[#10b981]' },
    restricted: { status: 'AVAILABLE', bg: 'bg-[rgba(16,185,129,0.1)]', color: 'text-[#10b981]' },
    review: { status: 'MUTED', bg: 'bg-[rgba(170,179,196,0.1)]', color: 'text-[#aab3c4]' },
    unknown: { status: 'MUTED', bg: 'bg-[rgba(170,179,196,0.1)]', color: 'text-[#aab3c4]' },
  },
  {
    dimension: 'API Capability',
    available: { status: 'AVAILABLE', bg: 'bg-[rgba(16,185,129,0.1)]', color: 'text-[#10b981]' },
    restricted: { status: 'MUTED', bg: 'bg-[rgba(170,179,196,0.1)]', color: 'text-[#aab3c4]' },
    review: { status: 'UNDER REVIEW', bg: 'bg-[rgba(245,158,11,0.1)]', color: 'text-[#f59e0b]' },
    unknown: { status: 'MUTED', bg: 'bg-[rgba(170,179,196,0.1)]', color: 'text-[#aab3c4]' },
  },
  {
    dimension: 'Content Operation Scope',
    available: { status: 'MUTED', bg: 'bg-[rgba(170,179,196,0.1)]', color: 'text-[#aab3c4]' },
    restricted: { status: 'RESTRICTED', bg: 'bg-[rgba(239,68,68,0.1)]', color: 'text-[#ef4444]' },
    review: { status: 'MUTED', bg: 'bg-[rgba(170,179,196,0.1)]', color: 'text-[#aab3c4]' },
    unknown: { status: 'MUTED', bg: 'bg-[rgba(170,179,196,0.1)]', color: 'text-[#aab3c4]' },
  },
  {
    dimension: 'Playback Token Authority',
    available: { status: 'MUTED', bg: 'bg-[rgba(170,179,196,0.1)]', color: 'text-[#aab3c4]' },
    restricted: { status: 'MUTED', bg: 'bg-[rgba(170,179,196,0.1)]', color: 'text-[#aab3c4]' },
    review: { status: 'MUTED', bg: 'bg-[rgba(170,179,196,0.1)]', color: 'text-[#aab3c4]' },
    unknown: { status: 'UNDER REVIEW', bg: 'bg-[rgba(245,158,11,0.1)]', color: 'text-[#f59e0b]' },
  },
];

export default function AccessMatrixSection() {
  return (
    <section className="relative w-full border-b border-solid border-[#232b3a] px-6 py-24 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/developer-access-page/access-matrix/section-bg-cube.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.91)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <div className="flex items-start rounded-[100px] border border-solid border-[#33d9c7] px-[12px] py-[6px]">
            <p className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[1px] text-[#33d9c7]">
              ACCESS MATRIX
            </p>
          </div>
          <h2 className="text-[30px] font-bold leading-[1.2] tracking-tight text-white md:text-[38px] md:leading-[48px]">
            Environment and capability access matrix
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Cross-reference your workspace membership against environment and capability access.
          </p>
        </div>

        <div className="flex w-full flex-col items-start rounded-[16px] border-[1.5px] border-solid border-[#232b3a] bg-[#10151e] p-[24px]">
          <div className="flex w-full items-start gap-[12px] border-b-2 border-solid border-[#232b3a] bg-[#161f2e] p-[16px] text-[13px] font-bold text-white">
            <p className="w-[120px] shrink-0 sm:w-[260px]">Dimension</p>
            <p className="flex-1 text-center">Available</p>
            <p className="flex-1 text-center">Restricted</p>
            <p className="flex-1 text-center">Review Required</p>
            <p className="flex-1 text-center">Unknown</p>
          </div>

          <div className="flex w-full flex-col">
            {MATRIX_ROWS.map((row, idx) => (
              <div
                key={row.dimension}
                className={`flex w-full items-center gap-[12px] p-[16px] ${
                  idx !== MATRIX_ROWS.length - 1 ? 'border-b border-solid border-[#232b3a]' : ''
                }`}
              >
                <p className="w-[120px] shrink-0 text-[13px] font-bold text-white sm:w-[260px] sm:text-[15px]">
                  {row.dimension}
                </p>

                {/* Status Columns */}
                {[row.available, row.restricted, row.review, row.unknown].map((col, cIdx) => (
                  <div key={cIdx} className="flex flex-1 items-start justify-center">
                    <div className={`rounded-[4px] px-[10px] py-[4px] ${col.bg}`}>
                      <p className={`whitespace-nowrap text-[9px] font-bold sm:text-[11px] ${col.color}`}>
                        {col.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
