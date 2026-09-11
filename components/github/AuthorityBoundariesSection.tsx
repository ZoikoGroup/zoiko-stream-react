import React from 'react';
import { BranchIcon, RefreshIcon, ShieldIcon } from './icons';

const imgBg = "/images/github/authority-background.webp";

type Route = 'Handoff' | 'Repository';

const rows: { area: string; source: string; boundary: string; route: Route }[] = [
  { area: 'Documentation', source: 'Published documentation', boundary: 'GitHub links out; it does not replace product documentation.', route: 'Handoff' },
  { area: 'API Reference', source: 'Published API reference', boundary: 'Repositories may contain examples, never the canonical API contract.', route: 'Handoff' },
  { area: 'SDKs', source: 'Official SDK registry', boundary: 'Only repositories marked Official are presented as maintained SDKs.', route: 'Repository' },
  { area: 'Code samples', source: 'Verified sample repository', boundary: 'Examples inherit the repository trust state and lifecycle.', route: 'Repository' },
  { area: 'Changelog', source: 'Published changelog', boundary: 'Release notes may link outward; repository history is not the changelog.', route: 'Handoff' },
  { area: 'Support', source: 'Support channel', boundary: 'Public Issues are not presented as the default support path.', route: 'Handoff' },
  { area: 'Security', source: 'Security and disclosure policy', boundary: 'Responsible disclosure routes to the designated private channel.', route: 'Handoff' },
  { area: 'System status', source: 'System status service', boundary: 'Availability claims remain on the current status destination.', route: 'Handoff' },
];

function RoutePill({ route }: { route: Route }) {
  const isRepo = route === 'Repository';
  const Icon = isRepo ? BranchIcon : RefreshIcon;
  return (
    <span className={`${isRepo ? 'bg-[#ecfdf5]' : 'bg-[#eef2ff]'} inline-flex gap-[6px] items-center px-[12px] py-[6px] rounded-[999px] shrink-0`}>
      <Icon className={`size-[14px] ${isRepo ? 'text-[#34d399]' : 'text-[#4c86ff]'}`} />
      <span className="font-sans font-bold text-[#0f172a] text-[12px]">{route}</span>
    </span>
  );
}

export default function AuthorityBoundariesSection() {
  return (
    <section className="bg-white border-b border-[#e5e7eb] flex flex-col items-center px-5 sm:px-6 lg:px-12 xl:px-[112px] py-12 sm:py-16 lg:pt-[56px] lg:pb-[112px] relative w-full overflow-hidden" data-name="Authority-Boundaries-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-70px] top-[-133px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-160px] bottom-[-120px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />

      <div className="flex flex-col gap-[32px] lg:gap-[40px] items-start w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between items-start lg:items-end w-full">
          <div className="flex flex-col gap-[16px] items-start w-full lg:max-w-[760px]">
            <h2 className="[word-break:break-word] font-sans font-bold text-[#0f172a] text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.2] lg:leading-[40px]">
              Authority boundaries are explicit.
            </h2>
            <p className="font-inter font-normal text-[#475569] text-[16px] sm:text-[18px] leading-[28px]">
              GitHub is a verified destination for code and samples—not a substitute for documentation, support,
              security, or live service status.
            </p>
          </div>
          <div className="bg-white border border-[#e5e7eb] border-solid flex gap-[24px] items-start p-[16px] rounded-[12px] shrink-0">
            <span className="font-sans font-medium text-[#34d399] text-[14px]">● Repository</span>
            <span className="font-sans font-medium text-[#4c86ff] text-[14px]">↗ Handoff</span>
          </div>
        </div>

        {/* Table — md and up */}
        <div className="hidden md:block bg-white border-[1.5px] border-[#e5e7eb] border-solid rounded-[16px] shadow-[0px_12px_32px_0px_rgba(15,27,45,0.08)] w-full overflow-hidden">
          <table className="w-full border-collapse text-left">
            <thead className="bg-[#0f172a]">
              <tr>
                {['Area', 'Canonical source', 'GitHub boundary', 'Route'].map((heading, i) => (
                  <th
                    key={heading}
                    scope="col"
                    className={`font-sans font-bold text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase py-[16px] ${i === 0 ? 'pl-[24px]' : 'pl-[16px]'} ${i === 3 ? 'pr-[24px] text-right' : ''}`}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.area} className="border-b border-[#e5e7eb] last:border-b-0">
                  <th scope="row" className="font-sans font-bold text-[#0f172a] text-[16px] py-[18px] pl-[24px] lg:w-[190px] align-middle">
                    {row.area}
                  </th>
                  <td className="py-[18px] pl-[16px] lg:w-[260px] align-middle">
                    <span className="flex gap-[8px] items-center">
                      <ShieldIcon className="size-[16px] text-[#2dd4bf] shrink-0" />
                      <span className="font-inter font-normal text-[#0f172a] text-[14px] leading-[20px]">{row.source}</span>
                    </span>
                  </td>
                  <td className="font-inter font-normal text-[#475569] text-[14px] leading-[20px] py-[18px] pl-[16px] align-middle">
                    {row.boundary}
                  </td>
                  <td className="py-[18px] pl-[16px] pr-[24px] text-right align-middle">
                    <RoutePill route={row.route} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stacked cards — below md */}
        <div className="flex md:hidden flex-col gap-[12px] w-full">
          {rows.map((row) => (
            <div key={row.area} className="bg-white border border-[#e5e7eb] border-solid flex flex-col gap-[10px] p-[16px] rounded-[12px] w-full">
              <div className="flex gap-3 justify-between items-center">
                <span className="font-sans font-bold text-[#0f172a] text-[16px]">{row.area}</span>
                <RoutePill route={row.route} />
              </div>
              <span className="flex gap-[8px] items-center">
                <ShieldIcon className="size-[16px] text-[#2dd4bf] shrink-0" />
                <span className="font-inter font-normal text-[#0f172a] text-[14px]">{row.source}</span>
              </span>
              <p className="font-inter font-normal text-[#475569] text-[14px] leading-[20px]">{row.boundary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
