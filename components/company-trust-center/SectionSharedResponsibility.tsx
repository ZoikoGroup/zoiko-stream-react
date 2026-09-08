import React from 'react';

const ROWS = [
  {
    title: "Platform infrastructure",
    zoiko: "Operate and secure ZoikoStream-controlled infrastructure per approved architecture and controls.",
    zoikoLines: ["Operate and secure ZoikoStream-controlled infrastructure", "per approved architecture and controls."],
    customer: "Configure permitted product settings and integrations; protect customer-managed endpoints and credentials.",
    customerLines: ["Configure permitted product settings and integrations;", "protect customer-managed endpoints and credentials."],
  },
  {
    title: "Identity & access",
    zoiko: "Provide supported identity, authentication and authorization controls in the product scope.",
    zoikoLines: ["Provide supported identity, authentication and", "authorization controls in the product scope."],
    customer: "Manage users, roles, SSO/IdP configuration, account lifecycle and access reviews.",
    customerLines: ["Manage users, roles, SSO/IdP configuration, account", "lifecycle and access reviews."],
  },
  {
    title: "Privacy",
    zoiko: "Meet controller/processor obligations as defined by product/legal role.",
    zoikoLines: ["Meet controller/processor obligations as defined by", "product/legal role."],
    customer: "Provide notices/consents and lawful instructions for customer/end-user processing where responsible.",
    customerLines: ["Provide notices/consents and lawful instructions for", "customer/end-user processing where responsible."],
  },
];

export default function SectionSharedResponsibility() {
  return (
    <div className="border-b border-[#dde2ea] border-solid w-full px-6 lg:px-0 py-[48px] lg:py-[64px]">
      <div className="flex flex-col gap-[24px] items-start w-full">
        <div className="flex gap-[12px] items-center">
          <div className="bg-[#5b8def] rounded-full h-[6px] w-[6px] shrink-0" />
          <p className="font-inter font-bold text-[#5b8def] text-[12.5px] tracking-[1.25px] uppercase m-0 whitespace-nowrap">Scope clarity</p>
        </div>
        <h2 className="font-sora font-bold text-[#32353c] text-[24px] lg:text-[26px] leading-[1.6] tracking-[-0.26px] m-0 w-full">
          Shared responsibility model.
        </h2>

        <div className="border-t border-[#dde2ea] border-solid w-full">
          {ROWS.map((row, index) => (
            <div
              key={row.title}
              className={`flex flex-col lg:flex-row lg:items-start gap-[16px] py-[24px] w-full ${
                index < ROWS.length - 1 ? "border-b border-[#dde2ea] border-solid" : ""
              }`}
            >
              <p className="font-sora font-bold text-[#32353c] text-[14px] leading-[1.6] m-0 lg:w-[176px] shrink-0">{row.title}</p>
              <div className="flex flex-col gap-[6px] items-start flex-1 min-w-0">
                <p className="font-inter font-bold text-[#9aa1ae] text-[11px] tracking-[0.55px] uppercase m-0 whitespace-nowrap">ZoikoStream</p>
                <p className="font-inter font-normal text-[#6b7280] text-[13.5px] leading-[1.6] m-0 w-full">
                  <span className="hidden lg:inline">
                    {row.zoikoLines.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < row.zoikoLines.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </span>
                  <span className="lg:hidden">{row.zoiko}</span>
                </p>
              </div>
              <div className="flex flex-col gap-[6px] items-start flex-1 min-w-0">
                <p className="font-inter font-bold text-[#9aa1ae] text-[11px] tracking-[0.55px] uppercase m-0 whitespace-nowrap">Customer</p>
                <p className="font-inter font-normal text-[#6b7280] text-[13.5px] leading-[1.6] m-0 w-full">
                  <span className="hidden lg:inline">
                    {row.customerLines.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < row.customerLines.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </span>
                  <span className="lg:hidden">{row.customer}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
