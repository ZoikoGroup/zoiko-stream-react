import React from 'react';

const rules = [
  'Use current assets only — check version/effective date before publishing.',
  "Preserve proportions and clear space; don't recolor or distort marks.",
  "Don't imply endorsement, sponsorship or partnership that doesn't exist.",
  'Use product screenshots in accurate, unedited editorial context.',
  'Co-branding requires explicit approval from Legal/Brand.',
  'Follow the linked trademark/brand terms for anything not covered here.',
];

export function BrandGovernanceSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-10">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-blue-400 text-xs font-bold    uppercase tracking-wider">
            BRAND GOVERNANCE
          </span>
        </div>
        <h2 className="text-gray-800 text-3xl font-bold   ">
          Use ZoikoStream assets accurately.
        </h2>
      </div>

      <div className="w-full max-w-[1216px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rules.map((rule, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-2xl border border-zinc-200 flex flex-col justify-center min-h-[96px] shadow-xs"
          >
            <p className="text-gray-800 text-sm font-medium    leading-6">
              {rule}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full max-w-[1216px] mx-auto flex justify-center pt-2">
        <span className="text-blue-400 text-base font-semibold    cursor-pointer">
          Read usage guidance →
        </span>
      </div>
    </section>
  );
}
