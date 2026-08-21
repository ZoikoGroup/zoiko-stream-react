import React from 'react';
import { UploadCloud, LogIn, Cpu, Shield, Globe, BarChart2, Database } from 'lucide-react';

const imgSectionLifecycleMap = "/images/solutions-overview/lifecycle-map-section-bg.png";

export default function SectionLifecycleMap() {
  return (
    <div className="border-[#232b3a] border-b border-solid content-stretch flex flex-col gap-[56px] items-start px-6 lg:px-[112px] py-[60px] lg:py-[120px] relative w-full overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgSectionLifecycleMap} />
        <div className="absolute bg-[rgba(15,27,45,0.77)] inset-0" />
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-sans font-bold leading-[48px] relative shrink-0 text-[32px] lg:text-[38px] text-white tracking-[-0.8px] w-full m-0">
          See where each workflow touches the media lifecycle
        </h2>
        <p className="font-sans font-normal leading-[28px] relative shrink-0 text-[#aab3c4] text-[18px] w-full m-0">
          Security is cross-cutting across the complete media lifecycle.
        </p>
      </div>
      <div className="w-full overflow-x-auto pb-4 relative z-10 custom-scrollbar">
        <div className="content-stretch flex items-center relative shrink-0 min-w-[800px] w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px relative">
              <div className="bg-gradient-to-b border border-[#606a7c] border-solid content-stretch flex flex-col from-[#34d4ca] items-center justify-center relative rounded-[24px] shrink-0 size-[48px] to-[#4a8cfb]">
                <div className="relative shrink-0 size-[18px] flex items-center justify-center text-white">
                  <UploadCloud className="size-full" />
                </div>
              </div>
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap m-0">
                1. Contribute
              </p>
            </div>
            <div className="bg-[#606a7c] flex-[1_0_0] h-[2px] min-w-px relative" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px relative">
              <div className="bg-gradient-to-b border border-[#606a7c] border-solid content-stretch flex flex-col from-[#34d4ca] items-center justify-center relative rounded-[24px] shrink-0 size-[48px] to-[#4a8cfb]">
                <div className="relative shrink-0 size-[18px] flex items-center justify-center text-white">
                  <LogIn className="size-full" />
                </div>
              </div>
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap m-0">
                2. Ingest
              </p>
            </div>
            <div className="bg-[#606a7c] flex-[1_0_0] h-[2px] min-w-px relative" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px relative">
              <div className="bg-gradient-to-b border border-[#606a7c] border-solid content-stretch flex flex-col from-[#34d4ca] items-center justify-center relative rounded-[24px] shrink-0 size-[48px] to-[#4a8cfb]">
                <div className="relative shrink-0 size-[18px] flex items-center justify-center text-white">
                  <Cpu className="size-full" />
                </div>
              </div>
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap m-0">
                3. Produce
              </p>
            </div>
            <div className="bg-[#606a7c] flex-[1_0_0] h-[2px] min-w-px relative" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px relative">
              <div className="bg-gradient-to-b border border-[#606a7c] border-solid content-stretch flex flex-col from-[#34d4ca] items-center justify-center relative rounded-[24px] shrink-0 size-[48px] to-[#4a8cfb]">
                <div className="relative shrink-0 size-[18px] flex items-center justify-center text-white">
                  <Shield className="size-full" />
                </div>
              </div>
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap m-0">
                4. Secure
              </p>
            </div>
            <div className="bg-[#606a7c] flex-[1_0_0] h-[2px] min-w-px relative" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px relative">
              <div className="bg-gradient-to-b border border-[#606a7c] border-solid content-stretch flex flex-col from-[#34d4ca] items-center justify-center relative rounded-[24px] shrink-0 size-[48px] to-[#4a8cfb]">
                <div className="relative shrink-0 size-[18px] flex items-center justify-center text-white">
                  <Globe className="size-full" />
                </div>
              </div>
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap m-0">
                5. Deliver
              </p>
            </div>
            <div className="bg-[#606a7c] flex-[1_0_0] h-[2px] min-w-px relative" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px relative">
              <div className="bg-gradient-to-b border border-[#606a7c] border-solid content-stretch flex flex-col from-[#34d4ca] items-center justify-center relative rounded-[24px] shrink-0 size-[48px] to-[#4a8cfb]">
                <div className="relative shrink-0 size-[18px] flex items-center justify-center text-white">
                  <BarChart2 className="size-full" />
                </div>
              </div>
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap m-0">
                6. Understand
              </p>
            </div>
            <div className="bg-[#606a7c] flex-[1_0_0] h-[2px] min-w-px relative" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px relative">
              <div className="bg-gradient-to-b border border-[#606a7c] border-solid content-stretch flex flex-col from-[#34d4ca] items-center justify-center relative rounded-[24px] shrink-0 size-[48px] to-[#4a8cfb]">
                <div className="relative shrink-0 size-[18px] flex items-center justify-center text-white">
                  <Database className="size-full" />
                </div>
              </div>
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap m-0">
                7. Preserve
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto relative z-10 custom-scrollbar pb-4">
        <div className="[word-break:break-word] bg-[rgba(16,21,30,0.8)] border-[#232b3a] border-[1.5px] border-solid content-stretch flex flex-col items-start leading-[normal] p-[24px] relative rounded-[16px] shrink-0 w-full min-w-[800px]">
          <div className="bg-[#141e33] content-stretch flex font-sans font-bold gap-[12px] items-start p-[12px] relative shrink-0 text-[13px] text-white w-full rounded-t-[8px]">
            <p className="relative shrink-0 w-[220px] m-0">
              Workflow Template
            </p>
            <p className="flex-[1_0_0] min-w-px relative text-center m-0">
              Contribute
            </p>
            <p className="flex-[1_0_0] min-w-px relative text-center m-0">
              Ingest
            </p>
            <p className="flex-[1_0_0] min-w-px relative text-center m-0">
              Produce
            </p>
            <p className="flex-[1_0_0] min-w-px relative text-center m-0">
              Secure
            </p>
            <p className="flex-[1_0_0] min-w-px relative text-center m-0">
              Deliver
            </p>
            <p className="flex-[1_0_0] min-w-px relative text-center m-0">
              Understand
            </p>
            <p className="flex-[1_0_0] min-w-px relative text-center m-0">
              Preserve
            </p>
          </div>
          <div className="border-[#232b3a] border-b border-solid content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0 w-full">
            <p className="font-inter font-bold not-italic relative shrink-0 text-[14px] text-white w-[220px] m-0">
              Live Product Video
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#aab3c4] text-[16px] text-center m-0">
              -
            </p>
          </div>
          <div className="border-[#232b3a] border-b border-solid content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0 w-full">
            <p className="font-inter font-bold not-italic relative shrink-0 text-[14px] text-white w-[220px] m-0">
              Enterprise Broadcast
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
          </div>
          <div className="border-[#232b3a] border-b border-solid content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0 w-full">
            <p className="font-inter font-bold not-italic relative shrink-0 text-[14px] text-white w-[220px] m-0">
              Private Portal Stream
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#aab3c4] text-[16px] text-center m-0">
              -
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#aab3c4] text-[16px] text-center m-0">
              -
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
          </div>
          <div className="border-[#232b3a] border-b border-solid content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0 w-full">
            <p className="font-inter font-bold not-italic relative shrink-0 text-[14px] text-white w-[220px] m-0">
              Global Event Webcast
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#aab3c4] text-[16px] text-center m-0">
              -
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#34d4ca] text-[16px] text-center m-0">
              ✓
            </p>
            <p className="flex-[1_0_0] font-sans font-bold min-w-px relative text-[#aab3c4] text-[16px] text-center m-0">
              -
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 z-10">
        <button className="bg-gradient-to-b border-none cursor-pointer content-stretch flex from-[#34d4ca] items-center justify-center px-[28px] py-[14px] relative rounded-[8px] shrink-0 to-[#4a8cfb] hover:opacity-90 transition-opacity">
          <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0a0f1a] text-[15px] whitespace-nowrap m-0">
            Explore the platform
          </p>
        </button>
      </div>
    </div>
  );
}
