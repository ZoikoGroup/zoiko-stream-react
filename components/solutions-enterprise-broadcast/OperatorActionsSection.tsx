import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const liveProgramStates = [
  { label: 'Planned', color: 'bg-slate-400', active: false },
  { label: 'Standby', color: 'bg-amber-500', active: true },
  { label: 'Live', color: 'bg-red-500', active: false },
  { label: 'Degraded', color: 'bg-red-500', active: false },
  { label: 'Interrupted', color: 'bg-red-600', active: false },
  { label: 'Recovering', color: 'bg-blue-500', active: false },
  { label: 'Ended', color: 'bg-emerald-500', active: false },
  { label: 'Unknown', color: 'bg-slate-500', active: false },
];

const runOfShow = [
  { time: '11:45 - 12:00', title: 'Pre-Show Slate & Music', status: 'Completed', statusCls: 'text-slate-900', dotCls: 'bg-emerald-500', active: false },
  { time: '12:00 - 12:15', title: 'Keynote Address: H1 Strategy', status: 'Active Segment', statusCls: 'text-slate-900', dotCls: 'bg-red-500', active: true },
  { time: '12:15 - 12:35', title: 'Q&A with Executive Panel', status: 'Next Up', statusCls: 'text-slate-900', dotCls: 'bg-amber-500', active: false },
];

const operatorActions = [
  { title: 'Start / End Broadcast', owner: 'Owner, Admin' },
  { title: 'Change Active Source', owner: 'Operator, Admin' },
  { title: 'Alter Audience / Access Policy', owner: 'Security, Owner' },
  { title: 'Disable Captions / Subtitles', owner: 'Accessibility' },
  { title: 'Stop Archival Recording', owner: 'Admin' },
  { title: 'Publish Instant Replay', owner: 'Admin, Operator' },
  { title: 'Revoke Viewer Access', owner: 'Security, Admin' },
];

const auditLogs = [
  {
    actor: 'm_webb (Admin)',
    action: 'Force Reconnect',
    object: 'NYC Encoder A',
    prev: 'Degraded',
    prevCls: 'text-red-600',
    newSt: 'Recovering',
    newCls: 'text-emerald-500',
    ts: '12:04:12 PM',
    reason: 'Bandwidth dip below operational SLA threshold',
  },
  {
    actor: 'j_holloway (Sec)',
    action: 'Restrict Audience',
    object: 'Viewer Directory',
    prev: 'Controlled',
    prevCls: 'text-red-600',
    newSt: 'Restricted',
    newCls: 'text-emerald-500',
    ts: '11:58:30 AM',
    reason: 'Mandatory compliance review window',
  },
];

const roleMatrix = [
  { role: 'Operator', desc: 'Live signal switches, slate insertion, incident alerts, basic reconnects.' },
  { role: 'Broadcast Admin', desc: 'Full lifecycle configuration, source pathways, recording & distribution.' },
  { role: 'Security Admin', desc: 'SAML directory bounds, revocation, active audience gating.' },
  { role: 'Accessibility Owner', desc: 'Real-time subtitle feeds, multilanguage routing bypass approval.' },
  { role: 'Auditor', desc: 'Read-only access logs, verification signatures, compliance exports.' },
];

export function OperatorActionsSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
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
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold  leading-tight lg:leading-[52px]">
            Separate operator actions from platform state
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal  leading-7">
            Make high-impact changes deliberate and auditable.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Live Program States Box */}
            <div className="p-7 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col gap-5 shadow-sm backdrop-blur-sm">
              <h3 className="text-slate-900 text-lg font-bold ">Live Program States</h3>
              <div className="flex flex-wrap gap-2.5">
                {liveProgramStates.map((st, idx) => (
                  <div
                    key={idx}
                    className={`px-3.5 py-3 rounded-lg flex items-center gap-2 ${
                      st.active
                        ? 'bg-white border-[1.5px] border-teal-400 shadow-xs'
                        : 'bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${st.color}`} />
                    <span className="text-slate-900 text-xs font-bold ">{st.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Run of Show sequence Box */}
            <div className="p-7 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col gap-4 shadow-sm backdrop-blur-sm">
              <div className="w-full flex justify-between items-center">
                <h3 className="text-slate-900 text-lg font-bold ">Run of Show sequence</h3>
                <span className="text-blue-500 text-xs font-bold ">VERSION 4.2 ACTIVE</span>
              </div>
              <div className="w-full flex flex-col gap-3">
                {runOfShow.map((ros, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg flex justify-between items-center ${
                      ros.active
                        ? 'bg-white border border-teal-400 shadow-xs'
                        : 'bg-white border border-gray-200'
                    }`}
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-slate-400 text-xs font-semibold ">{ros.time}</span>
                      <span className="text-slate-900 text-base font-bold ">{ros.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${ros.dotCls}`} />
                      <span className={`text-xs font-bold  ${ros.statusCls}`}>{ros.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): High-Impact Operator Actions */}
          <div className="lg:col-span-5 p-7 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col gap-5 shadow-sm backdrop-blur-sm">
            <h3 className="text-slate-900 text-lg font-bold ">High-Impact Operator Actions</h3>
            <div className="w-full flex flex-col gap-2.5">
              {operatorActions.map((act, idx) => (
                <div key={idx} className="p-4 bg-white rounded-lg border border-gray-200 flex justify-between items-center">
                  <span className="text-slate-900 text-base font-bold ">{act.title}</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 flex items-center justify-center">
                      <div className="w-2.5 h-3 border-2 border-teal-400 rounded-xs" />
                    </div>
                    <span className="text-slate-500 text-xs font-semibold ">{act.owner}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Audit Log Table */}
        <div className="w-full rounded-xl border border-gray-200 overflow-hidden shadow-sm backdrop-blur-sm bg-white/90">
          <div className="p-4 bg-slate-50 border-b border-gray-200 hidden sm:flex justify-start items-center gap-3 text-slate-900 text-xs font-bold  uppercase">
            <span className="w-28">ACTOR</span>
            <span className="w-44">ACTION</span>
            <span className="w-36">OBJECT</span>
            <span className="w-28">PREV STATE</span>
            <span className="w-28">NEW STATE</span>
            <span className="w-28">TIMESTAMP</span>
            <span className="flex-1">REASON</span>
          </div>

          <div className="divide-y divide-gray-200">
            {auditLogs.map((log, idx) => (
              <div key={idx} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs ">
                <span className="w-28 text-slate-900 font-semibold">{log.actor}</span>
                <span className="w-44 text-slate-600 font-normal">{log.action}</span>
                <span className="w-36 text-slate-600 font-normal">{log.object}</span>
                <span className={`w-28 font-normal ${log.prevCls}`}>{log.prev}</span>
                <span className={`w-28 font-normal ${log.newCls}`}>{log.newSt}</span>
                <span className="w-28 text-slate-500 font-normal">{log.ts}</span>
                <span className="flex-1 text-slate-600 font-normal truncate">{log.reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Permissions Matrix */}
        <div className="w-full p-7 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col gap-4 shadow-sm backdrop-blur-sm">
          <h3 className="text-slate-900 text-lg font-bold ">Operational Role Permissions Matrix</h3>
          <div className="w-full flex flex-col gap-3">
            {roleMatrix.map((mat, idx) => (
              <div key={idx} className="p-5 bg-white rounded-lg border border-slate-200 flex flex-col gap-2">
                <h4 className="text-slate-900 text-base font-bold ">{mat.role}</h4>
                <p className="text-slate-600 text-xs font-normal  leading-4">{mat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
