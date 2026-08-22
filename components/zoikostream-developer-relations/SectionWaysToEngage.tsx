import React from 'react';

const imgCommunity = "/images/developer-relations/engage-community.png";
const imgEvents = "/images/developer-relations/engage-events-learning.png";
const imgOpenSource = "/images/developer-relations/engage-open-source.png";
const imgFeedback = "/images/developer-relations/engage-product-feedback.png";

const BLOCKS = [
  {
    image: imgCommunity,
    alt: "Developers collaborating and discussing code together.",
    imageSide: "left",
    label: "Community",
    title: "Ask, answer and share with other developers.",
    description: "Connect with other developers in official ZoikoStream community spaces to ask questions, share patterns and learn from real integration work.",
    note: "Only rendered in active state, with a named moderation owner and published code of conduct.",
    link: "Join the community →",
  },
  {
    image: imgEvents,
    alt: "Developer presenting at a technical workshop session.",
    imageSide: "right",
    label: "Events & learning",
    title: "Attend technical sessions, workshops and office hours.",
    description: "Join live sessions and hands-on workshops, or catch up with on-demand recordings when you can't attend live.",
    note: "Only rendered from the Event Registry; expired events archive automatically.",
    link: "View developer events →",
  },
  {
    image: imgOpenSource,
    alt: "Open source code repository on a laptop screen.",
    imageSide: "left",
    label: "Open source",
    title: "Explore and contribute to official repositories.",
    description: "Use, inspect or contribute to official public ZoikoStream projects — each with clear ownership, licensing and contribution guidance.",
    note: "Only official repositories with ownership, license and security metadata are shown.",
    link: "Explore open source →",
  },
  {
    image: imgFeedback,
    alt: "Team reviewing product feedback and notes on a whiteboard.",
    imageSide: "right",
    label: "Product feedback",
    title: "Help improve the developer experience.",
    description: "Share pain points, API and SDK feedback, and workflow ideas that help shape how ZoikoStream serves developers.",
    note: "Not a support ticket or a roadmap promise — feedback categories and privacy boundaries are explicit.",
    link: "Share product feedback →",
  },
];

export default function SectionWaysToEngage() {
  return (
    <div className="bg-white w-full px-6 lg:px-[100px] py-[60px] lg:py-[100px] flex flex-col items-start">
      <div className="flex items-center gap-[8px] mb-[16px]">
        <div className="h-[6px] w-[6px] bg-[#3fc9bd] rounded-full" />
        <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] uppercase tracking-[1.25px] m-0">
          Ways to engage
        </p>
      </div>
      <h2 className="font-sora font-bold text-[#32353c] text-[26px] lg:text-[29px] tracking-[-0.29px] m-0 leading-[1.2] mb-[40px] lg:mb-[48px]">
        More ways to build, learn and contribute.
      </h2>

      <div className="w-full flex flex-col gap-[32px]">
        {BLOCKS.map((block) => (
          <div key={block.label} className="w-full border border-[#dde2ea] rounded-[18px] overflow-hidden flex flex-col lg:flex-row">
            <div
              className={`w-full lg:w-1/2 aspect-[587/470] bg-[#f1f4f8] ${
                block.imageSide === "right" ? "lg:order-2" : ""
              }`}
            >
              <img alt={block.alt} className="w-full h-full object-cover" src={block.image} />
            </div>
            <div className="w-full lg:w-1/2 p-[32px] lg:p-[38px] flex flex-col gap-[16px] justify-center">
              <p className="font-inter font-bold text-[#6a6df0] text-[11.5px] uppercase tracking-[0.805px] m-0">
                {block.label}
              </p>
              <h3 className="font-sora font-bold text-[#32353c] text-[20px] lg:text-[22px] tracking-[-0.22px] leading-[1.3] m-0">
                {block.title}
              </h3>
              <p className="font-inter font-normal text-[#6b7280] text-[14.5px] lg:text-[15px] leading-[1.6] m-0">
                {block.description}
              </p>
              <p className="font-inter font-normal text-[#9aa1ae] text-[12.5px] leading-[1.5] m-0 pt-[16px] border-t border-[#dde2ea]">
                {block.note}
              </p>
              <span className="font-inter font-semibold text-[#5b8def] text-[14.5px]">{block.link}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
