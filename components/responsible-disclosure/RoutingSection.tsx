import React from 'react';
import Link from 'next/link';

const imgBg = "/images/responsible-disclosure/routing-section.png";
const imgArrow = "/images/responsible-disclosure/arrow-right.svg";

const routes: { icon: string; title: string; body: string; href: string }[] = [
  {
    icon: "/images/responsible-disclosure/shield-alert.svg",
    title: "Potential Vulnerability",
    body: "Found a bug in zoikostream.com or API endpoints? Submit via this official form.",
    href: "#report-intake",
  },
  {
    icon: "/images/responsible-disclosure/user-x.svg",
    title: "Account Compromised",
    body: "Lost access or see unrecognized activity? Protect your credentials and contact Support.",
    href: "/support-help-center",
  },
  {
    icon: "/images/responsible-disclosure/alert-triangle.svg",
    title: "Service Outage",
    body: "Cannot connect or streams are buffering? View real-time infrastructure metrics.",
    href: "/zoikostream-status",
  },
  {
    icon: "/images/responsible-disclosure/bug.svg",
    title: "Non-Security Bug",
    body: "UI glitch, layout alignment issues, or functional problems? Report to Dev Support.",
    href: "/zoikostream-developer-support",
  },
  {
    icon: "/images/responsible-disclosure/mail-warning-blue-24.svg",
    title: "Spam / Fraud / Abuse",
    body: "Receiving malicious messages, phishing links, or hosting-violating streams? Report Abuse.",
    href: "/support-report-issue",
  },
  {
    icon: "/images/responsible-disclosure/eye-off.svg",
    title: "Privacy Request",
    body: "Need to delete your data or submit a GDPR/CCPA request? Reach our Data Protection desk.",
    href: "/zoikostream-data-protection",
  },
];

export default function RoutingSection() {
  return (
    <div className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[100px] relative w-full overflow-hidden" data-name="Routing-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBg} />
        <div className="absolute bg-[rgba(10,13,19,0.32)] inset-0" />
      </div>
      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1247px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section-Header">
          <h2 className="[word-break:break-word] font-sans font-bold leading-[34px] sm:leading-[42px] lg:leading-[48px] relative shrink-0 text-[#eef1f6] text-[26px] sm:text-[32px] lg:text-[37.9px] tracking-[-0.38px] w-full">
            Is This the Right Route?
          </h2>
          <p className="[word-break:break-word] font-sans font-normal leading-[24px] sm:leading-[28px] relative shrink-0 text-[#aab3c4] text-[15px] sm:text-[17px] w-full">
            Not every security concern belongs here. Use this guide to find the right channel.
          </p>
        </div>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative shrink-0 w-full" data-name="Route-Grid">
          {routes.map((route) => {
            const cardClass = "bg-[rgba(16,21,30,0.85)] border border-[#232b3a] border-solid flex flex-col gap-[16px] items-start p-[20px] sm:p-[24px] relative rounded-[16px] shrink-0 transition-colors hover:border-[#4c86ff]";
            const content = (
              <>
                <div className="flex items-center justify-between relative shrink-0 w-full">
                  <img alt="" className="block max-w-none size-[24px]" src={route.icon} />
                  <img alt="" className="block max-w-none size-[16px]" src={imgArrow} />
                </div>
                <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <p className="[word-break:break-word] font-sans font-bold leading-[normal] text-[#eef1f6] text-[17px]">
                    {route.title}
                  </p>
                  <p className="[word-break:break-word] font-sans font-normal leading-[20px] text-[#aab3c4] text-[13px] w-full">
                    {route.body}
                  </p>
                </div>
              </>
            );

            return route.href.startsWith("#") ? (
              <a key={route.title} href={route.href} className={cardClass} data-name="Route-Card">
                {content}
              </a>
            ) : (
              <Link key={route.title} href={route.href} className={cardClass} data-name="Route-Card">
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
