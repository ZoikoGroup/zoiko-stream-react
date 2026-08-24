import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const steps = [
  { num: '01', title: 'Declared Audience Intent', desc: 'Defines target cohort: Public / Institution / Cohort / External / Undecided.' },
  { num: '02', title: 'Identity Verification Layer', desc: 'Mandatory SAML SSO verification matches, strictly logged on success.' },
  { num: '03', title: 'Entitlement & Policy Engine', desc: 'Cross-checks enrollment lists and compliance rules.' },
  { num: '04', title: 'Playback & Stream Protection', desc: 'Enforces single-token browser play paths and prevents session sharing.' },
  { num: '05', title: 'External / Guest Approvals', desc: 'Admin authorization required for guest speakers and visitors.' },
  { num: '06', title: 'Privacy Perimeter Verification', desc: 'Logs end-to-end data residency constraints and GDPR geofences.' },
];

export function AudienceBoundariesSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
       <div className="absolute inset-0 pointer-events-none z-0">
              <Image
                src={bg147}
                alt="Media Lifecycle Background"
                fill
                className="object-cover opacity-30"
                priority
              />
              <div className="absolute inset-0 " />
            </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Audience access and participation boundaries
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Separate who someone is from whether policy permits access — with clear evidence at every layer.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column Stepper */}
          <div className="lg:col-span-7 flex flex-col justify-start items-start gap-3 w-full">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="w-full p-5 bg-white rounded-lg border border-gray-200 flex items-center gap-4 hover:shadow-sm transition-shadow"
              >
                <div className="w-8 h-8 bg-indigo-50 rounded-2xl flex justify-center items-center flex-shrink-0">
                  <span className="text-blue-500 text-xs font-bold font-['Space_Grotesk']">{st.num}</span>
                </div>
                <div className="flex flex-col justify-start items-start gap-0.5">
                  <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">{st.title}</h3>
                  <p className="text-slate-600 text-xs font-normal font-['Inter']">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column Telemetry */}
          <div className="lg:col-span-5 w-full flex flex-col justify-start items-start gap-4">
            <div className="w-full p-6 bg-white rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-3 shadow-sm">
              <span className="text-slate-600 text-xs font-bold font-['Space_Grotesk']">GATEKEEPER TELEMETRY</span>
              <div className="w-full flex justify-between items-center">
                <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">Active Directory Status</span>
                <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-600 text-[10px] font-bold font-['Space_Grotesk'] rounded">STABLE</span>
              </div>
              <p className="text-slate-600 text-xs font-normal font-['Inter']">All systems operating nominally. Connection response: 14ms.</p>
            </div>

            <div className="w-full p-6 bg-white rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-4 shadow-sm">
              <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">Real-Time Token Gate</span>
              <div className="w-full flex flex-col justify-start items-start gap-2 text-xs">
                <div className="w-full flex justify-between items-center">
                  <span className="text-slate-600 font-normal font-['Inter']">Allowed Passes:</span>
                  <span className="text-emerald-500 font-bold font-['Space_Grotesk']">420</span>
                </div>
                <div className="w-full flex justify-between items-center">
                  <span className="text-slate-600 font-normal font-['Inter']">Verification Denied:</span>
                  <span className="text-red-500 font-bold font-['Space_Grotesk']">3</span>
                </div>
              </div>
            </div>

            <div className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer">
              <span className="text-gray-950 text-base font-bold font-['Space_Grotesk']">
                Review access
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
