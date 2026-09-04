import React from 'react';

const IMG = '/images/zoikostream-developer-support';

const topics = [
  {
    title: "Getting started / Quickstart",
    desc: "→ Developer documentation",
    img: "topic-getting-started.png"
  },
  {
    title: "Authentication or developer access",
    desc: "→ Authentication / Developer access",
    img: "topic-auth.png"
  },
  {
    title: "API request or response problem",
    desc: "→ API Reference / Error handling",
    img: "topic-getting-started.png"
  },
  {
    title: "SDK or sample app question",
    desc: "→ SDKs / Sample apps",
    img: "topic-sdk.png"
  },
  {
    title: "Webhook or event delivery problem",
    desc: "→ Webhooks & events",
    img: "topic-webhook.png"
  },
  {
    title: "Live streaming / contribution",
    desc: "→ Relevant technical authority",
    img: "topic-live-streaming.png"
  },
  {
    title: "Video on demand / media assets",
    desc: "→ Relevant technical authority",
    img: "topic-vod.png"
  },
  {
    title: "Playback / player integration",
    desc: "→ Secure playback / Player integration",
    img: "topic-playback.png"
  },
  {
    title: "Analytics / monitoring",
    desc: "→ Analytics API / Stream monitoring",
    img: "topic-analytics.png"
  },
  {
    title: "Recording / assets",
    desc: "→ Recording & assets authority",
    img: "topic-recording.png"
  },
  {
    title: "Rate limits or error handling",
    desc: "→ Rate limits / Error handling",
    img: "topic-rate-limits.png"
  },
  {
    title: "Possible outage or degraded service",
    desc: "→ System status first",
    img: "topic-outage.png"
  },
  {
    title: "Security vulnerability",
    desc: "→ Approved security reporting only",
    img: "topic-webhook.png"
  },
  {
    title: "Other developer issue",
    desc: "→ Developer support intake",
    img: "topic-other.png"
  }
];

export default function TopicSelectorSection() {
  return (
    <section className="relative w-full overflow-hidden flex justify-center bg-white border-b border-[#dde2ea] block md:hidden" style={{ height: '5293.09px' }}>
      <div className="w-full max-w-[390px] relative z-10 h-full">
        <div className="absolute bg-[#3fc9bd] h-[6px] left-[22px] right-[362px] rounded-[3px] top-[45px]" />
        
        <div className="absolute flex items-center left-[36px] top-[48px] h-[20px] -translate-y-1/2">
          <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] tracking-[1.25px] uppercase leading-[20px]">
            Start here
          </p>
        </div>
        
        <div className="absolute flex items-center left-[22px] top-[94.5px] h-[33px] -translate-y-1/2">
          <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[41.6px]">
            Choose a technical topic.
          </h2>
        </div>
        
        <div className="absolute flex flex-col justify-center left-[22px] top-[164.77px] h-[63.37px] -translate-y-1/2">
          <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[23.2px]">
            Topic labels and routing are registry-driven — a<br />
            topic is only shown when a current, approved<br />
            destination exists for it.
          </p>
        </div>

        {topics.map((topic, index) => {
          // Starting at 229.65px, with spacing of 360.03px between each
          const topOffset = 229.65 + (index * 360.03);
          
          return (
            <div key={index} className="absolute bg-white border border-[#dde2ea] rounded-[14px] overflow-clip left-[22px] right-[22px] h-[344.03px]" style={{ top: `${topOffset}px` }}>
              <div className="absolute left-0 right-0 top-0 aspect-[344/258] bg-[#f1f4f8] overflow-clip">
                <img src={`${IMG}/${topic.img}`} alt={topic.title} className="absolute left-0 top-0 w-full h-full object-cover" />
              </div>
              
              <div className="absolute left-[18px] top-[283px] h-[18px] flex items-center -translate-y-1/2">
                <p className="font-sora font-bold text-[#32353c] text-[14.5px] tracking-[-0.145px] leading-[18.85px]">
                  {topic.title}
                </p>
              </div>
              
              <div className="absolute left-[18px] top-[314.35px] h-[15px] flex items-center -translate-y-1/2">
                <p className="font-inter font-normal text-[#9aa1ae] text-[12px] leading-[19.2px]">
                  {topic.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
