import React from 'react';

const DOCUMENTS = [
  {
    title: "Terms of Service",
    description: "Governs use of the ZoikoStream website and self-service platform.",
    effective: "Aug 1, 2026",
    version: "4.2",
    appliesTo: "Website visitors, account users",
    region: "Global",
  },
  {
    title: "Privacy Notice",
    description: "Explains how ZoikoStream collects, uses and protects personal data.",
    effective: "Jul 15, 2026",
    version: "3.1",
    appliesTo: "All visitors and customers",
    region: "Global",
  },
  {
    title: "Cookie Notice",
    description: "Describes cookies and similar technologies used on ZoikoStream sites.",
    effective: "Jul 15, 2026",
    version: "2.0",
    appliesTo: "Website visitors",
    region: "Global",
  },
  {
    title: "Data Processing Addendum",
    description: "Sets out data-processing terms for eligible business customers.",
    effective: "Jun 1, 2026",
    version: "2.3",
    appliesTo: "Enterprise customers",
    region: "Global",
  },
  {
    title: "Acceptable Use Policy",
    description: "Defines prohibited content and conduct across ZoikoStream services.",
    effective: "May 10, 2026",
    version: "1.6",
    appliesTo: "All account users",
    region: "Global",
  },
  {
    title: "Live Events Terms",
    description: "Supplemental terms governing Live Events and managed production services.",
    effective: "Apr 20, 2026",
    version: "1.3",
    appliesTo: "Live Events customers",
    region: "Global",
  },
  {
    title: "Developer & API Terms",
    description: "Contractual conditions for using ZoikoStream APIs and SDKs.",
    effective: "Mar 3, 2026",
    version: "2.1",
    appliesTo: "Developers",
    region: "Global",
  },
];

export default function SectionFindADocument() {
  return (
    <div className="bg-white border-b border-[#dde2ea] w-full px-6 lg:px-[132px] py-[48px] lg:py-[64px] flex flex-col items-start">
      <div className="flex items-center gap-[8px] mb-[16px]">
        <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
        <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0">
          Document finder
        </p>
      </div>
      <h2 className="font-sora font-bold text-[#32353c] text-[22px] lg:text-[25px] tracking-[-0.25px] m-0 mb-[24px]">
        Find a legal document.
      </h2>

      <div className="flex flex-col lg:flex-row gap-[12px] w-full mb-[16px]">
        <div className="w-full lg:flex-1 lg:max-w-[236px] h-[43px] bg-white border border-[#dde2ea] rounded-[10px] px-[16px] flex items-center">
          <span className="font-inter font-normal text-[#757575] text-[14px]">Search legal documents</span>
        </div>
        <div className="h-[45px] px-[18px] bg-white border border-[#dde2ea] rounded-[10px] flex items-center">
          <span className="font-inter font-normal text-[#32353c] text-[14px]">Category</span>
        </div>
        <div className="flex gap-[12px]">
          <div className="h-[45px] px-[18px] bg-white border border-[#dde2ea] rounded-[10px] flex items-center">
            <span className="font-inter font-normal text-[#32353c] text-[14px]">Audience</span>
          </div>
          <div className="h-[45px] px-[18px] bg-white border border-[#dde2ea] rounded-[10px] flex items-center">
            <span className="font-inter font-normal text-[#32353c] text-[14px]">Product</span>
          </div>
        </div>
        <div className="h-[45px] px-[18px] bg-white border border-[#dde2ea] rounded-[10px] flex items-center">
          <span className="font-inter font-normal text-[#32353c] text-[14px]">Region</span>
        </div>
        <div className="h-[45px] px-[18px] bg-white border border-[#dde2ea] rounded-[10px] flex items-center">
          <span className="font-inter font-normal text-[#32353c] text-[14px]">Status: Current</span>
        </div>
      </div>

      <p className="font-inter font-normal text-[#9aa1ae] text-[13.5px] m-0 mb-[16px]">7 current documents</p>

      <div className="w-full border-t border-[#dde2ea]">
        {DOCUMENTS.map((doc) => (
          <div key={doc.title} className="w-full py-[28px] border-b border-[#dde2ea] flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
              <h3 className="font-sora font-bold text-[#32353c] text-[17px] tracking-[-0.17px] m-0">{doc.title}</h3>
              <span className="bg-[#e9f9f7] text-[#3fbf7f] font-inter font-bold text-[11px] uppercase tracking-[0.44px] rounded-full px-[10px] py-[5px]">
                Current
              </span>
            </div>
            <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[1.6] m-0">{doc.description}</p>
            <div className="flex flex-wrap gap-x-[40px] gap-y-[4px]">
              <span className="font-inter text-[12.5px]"><b className="text-[#32353c] font-semibold">Effective:</b> <span className="text-[#9aa1ae]">{doc.effective}</span></span>
              <span className="font-inter text-[12.5px]"><b className="text-[#32353c] font-semibold">Version:</b> <span className="text-[#9aa1ae]">{doc.version}</span></span>
              <span className="font-inter text-[12.5px]"><b className="text-[#32353c] font-semibold">Applies to:</b> <span className="text-[#9aa1ae]">{doc.appliesTo}</span></span>
              <span className="font-inter text-[12.5px]"><b className="text-[#32353c] font-semibold">Region:</b> <span className="text-[#9aa1ae]">{doc.region}</span></span>
            </div>
            <div className="flex items-center gap-[24px]">
              <span className="font-inter font-bold text-[#5b8def] text-[13.5px]">View document →</span>
              {/* Mobile frame shows this second link on every row; the desktop frame does not. */}
              <span className="lg:hidden font-inter font-bold text-[#5b8def] text-[13.5px]">Previous versions →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
