import React from 'react';

const imgSectionBg = "/images/workflow-finder/lifecycle-section-bg.png";
const imgBgBlob1 = "/images/workflow-finder/lifecycle-bg-blob-1.svg";
const imgBgBlob2 = "/images/workflow-finder/lifecycle-bg-blob-2.svg";
const imgUpload = "/images/workflow-finder/lifecycle-icon-upload.svg";
const imgDownload = "/images/workflow-finder/lifecycle-icon-download.svg";
const imgCpu = "/images/workflow-finder/lifecycle-icon-cpu.svg";
const imgShield = "/images/workflow-finder/lifecycle-icon-shield.svg";
const imgGlobe = "/images/workflow-finder/lifecycle-icon-globe.svg";
const imgActivity = "/images/workflow-finder/lifecycle-icon-activity.svg";
const imgDatabase = "/images/workflow-finder/lifecycle-icon-database.svg";

const STAGES = [
  { icon: imgUpload, label: "1. Contribute" },
  { icon: imgDownload, label: "2. Ingest" },
  { icon: imgCpu, label: "3. Produce" },
  { icon: imgShield, label: "4. Secure" },
  { icon: imgGlobe, label: "5. Deliver" },
  { icon: imgActivity, label: "6. Understand" },
  { icon: imgDatabase, label: "7. Preserve" },
];

const TABLE_COLUMNS = ["Contribute", "Ingest", "Produce", "Secure", "Deliver", "Understand", "Preserve"];

const TABLE_ROWS = [
  { name: "Live Product Video", marks: [true, true, true, true, true, true, false] },
  { name: "Enterprise Broadcast", marks: [true, true, true, true, true, true, true] },
  { name: "Private Portal Stream", marks: [false, true, true, true, true, false, true] },
  { name: "Global Event Webcast", marks: [true, true, false, true, true, true, false] },
  { name: "Media Preservation", marks: [true, true, false, false, false, false, true] },
  { name: "Operational Analytics", marks: [false, true, true, false, true, true, false] },
];

export default function SectionLifecycle() {
  return (
    <div className="border-b border-[#e1e6eb] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionBg} />
      <div className="absolute left-[-180px] size-[420px] top-[-54px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[24px] right-[-148px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <h2 className="font-sans font-bold text-[#0f1b2d] text-[28px] lg:text-[38px] leading-[1.26] m-0 w-full">
          See where each workflow touches the media lifecycle
        </h2>

        <div className="flex items-center w-full overflow-x-auto">
          <div className="flex items-center gap-[8px] min-w-[700px] lg:min-w-0 w-full">
            {STAGES.map((stage, index) => (
              <div key={stage.label} className="flex flex-1 items-center min-w-0">
                <div className="flex flex-1 flex-col gap-[8px] items-center min-w-0">
                  <div className="bg-[#e6f4f1] border border-[#4ecdc4] border-solid rounded-[24px] flex items-center justify-center shrink-0 size-[48px]">
                    <img alt="" className="size-[18px]" src={stage.icon} />
                  </div>
                  <p className="font-sans font-bold text-[#0f1b2d] text-[13px] m-0 whitespace-nowrap">{stage.label}</p>
                </div>
                {index < STAGES.length - 1 && (
                  <div className="bg-[#e1e6eb] flex-1 h-[2px] min-w-[16px]" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#f8fafc] border-[1.5px] border-[#e1e6eb] border-solid rounded-[16px] p-[24px] w-full overflow-x-auto">
          <div className="min-w-[820px]">
            <div className="bg-[#e6f4f1] flex gap-[12px] items-start p-[12px] w-full">
              <p className="font-sans font-bold text-[#0a0d14] text-[13px] m-0 w-[220px] shrink-0">Workflow Template</p>
              {TABLE_COLUMNS.map((col) => (
                <p key={col} className="font-sans font-bold text-[#0a0d14] text-[13px] m-0 flex-1 min-w-0 text-center">{col}</p>
              ))}
            </div>
            {TABLE_ROWS.map((row, rowIndex) => (
              <div
                key={row.name}
                className={`flex gap-[12px] items-center p-[16px] w-full ${rowIndex < TABLE_ROWS.length - 1 ? "border-b border-[#e1e6eb] border-solid" : ""}`}
              >
                <p className="font-sans font-normal text-[#0f1b2d] text-[14px] m-0 w-[220px] shrink-0">{row.name}</p>
                {row.marks.map((mark, i) => (
                  <p key={i} className={`text-[16px] m-0 flex-1 min-w-0 text-center ${mark ? "text-[#4ecdc4]" : "text-[#aab3c4]"}`}>
                    {mark ? "✓" : "-"}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
