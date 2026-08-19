import React from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Prerequisites & Tokens',
    description: 'Retrieve corporate API certificates and configure scope keys in your environmental secrets file before building.',
  },
  {
    number: '02',
    title: 'Install & Configure',
    description: 'Add the package dependencies natively. Use terminal commands to complete binary linking or browser modules.',
  },
  {
    number: '03',
    title: 'Run & Inspect',
    description: 'Start the local ingest listener. Inspect diagnostic packets in real-time within the admin edge console.',
  },
];

export default function QuickstartSection() {
  return (
    <section
      className="relative w-full flex flex-col gap-14 items-start py-16 sm:py-20 lg:py-[100px] px-4 sm:px-8 lg:px-28 bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/sdks/quickstart-bg.png')` }}
    >
      <div className="flex flex-col gap-3 items-start w-full">
        <h2 className="font-bold text-[#0a0d13] text-3xl sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px]">
          Start safely with verified evidence
        </h2>
        <p className="text-[#4f5e74] text-base sm:text-[18px] leading-[1.4] sm:leading-[28.8px]">
          Initialize stream credentials, capture local camera states, and push live telemetry to ZoikoStream Cloud in under 5 minutes.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center w-full">

        <div className="flex flex-col flex-1 gap-6 items-start min-w-0 w-full">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4 items-start w-full">
              <div className="flex items-start p-2.5 rounded-lg bg-[#f3f4f6] shrink-0">
                <p className="font-bold text-[#4a8cfb] text-sm whitespace-nowrap">{step.number}</p>
              </div>
              <div className="flex flex-col gap-1 items-start flex-1 min-w-0">
                <p className="font-bold text-[#0a0d13] text-base">{step.title}</p>
                <p className="text-[#4f5e74] text-[13px] leading-normal">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 items-start w-full lg:w-[580px] shrink-0 overflow-hidden rounded-xl bg-[#0a0d13] p-5">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
            </div>
            <p className="font-mono text-[#4f5e74] text-[11px] whitespace-nowrap">
              bash -- quickstart-ingest.sh
            </p>
          </div>

          <div className="flex flex-col gap-1.5 items-start w-full font-mono text-[12px] leading-normal">
            <p className="text-[#34d4ca] whitespace-pre-wrap break-all">$ npm install @zoikostream/sdk-core</p>
            <p className="text-[#707a8c] whitespace-pre-wrap break-all"># Configuring local credentials in workspace</p>
            <p className="text-[#eef1f6] whitespace-pre-wrap break-all">$ export ZOIKO_API_KEY=&quot;zk_prod_88a3f9b8c&quot;</p>
            <p className="text-[#eef1f6] whitespace-pre-wrap break-all">$ export ZOIKO_SERVER_REGION=&quot;us-east-1&quot;</p>
            <p className="text-[#707a8c] whitespace-pre-wrap break-all"># Launching local pipeline test listener</p>
            <p className="text-[#f59e0b] whitespace-pre-wrap break-all">$ node test-listener.js</p>
            <p className="text-[#10b981] text-[11px] whitespace-pre-wrap break-all">[ZOIKO INFO] Connected to edge: edge-us-east.zoikocloud.net</p>
            <p className="text-[#10b981] text-[11px] whitespace-pre-wrap break-all">[ZOIKO INFO] Audio route: Stereo HD 320kbps</p>
            <p className="text-[#10b981] text-[11px] whitespace-pre-wrap break-all">[ZOIKO INFO] State: ACTIVE / STREAM EXCELLENT</p>
          </div>
        </div>

      </div>

      <div className="flex items-start justify-center w-full">
        <a
          href="#"
          className="flex items-center justify-center px-7 py-3.5 rounded-[10px] border border-[#4f5e74] hover:bg-[rgba(10,13,19,0.05)] transition-colors"
        >
          <span className="font-medium text-[#0a0d13] text-[15px] whitespace-nowrap">
            Open complete quickstart walkthrough
          </span>
        </a>
      </div>

    </section>
  );
}
