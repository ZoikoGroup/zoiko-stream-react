import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg125 from '@/public/images/secure-enterprise/bg (125).png';
import { Shield } from 'lucide-react';

const rolesMatrix = [
  { role: 'Policy Admin', config: true, pub: false, exc: false, rev: true, rvk: false, audit: true },
  { role: 'Security Admin', config: true, pub: false, exc: true, rev: true, rvk: true, audit: true },
  { role: 'Content Publisher', config: false, pub: true, exc: false, rev: false, rvk: false, audit: false },
  { role: 'Viewer / Auditor', config: false, pub: false, exc: false, rev: true, rvk: false, audit: true },
  { role: 'Support Operator', config: false, pub: false, exc: false, rev: false, rvk: true, audit: true },
  { role: 'Organization Owner', config: true, pub: true, exc: true, rev: true, rvk: true, audit: true },
];

export default function AdminRolesMatrixSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg125}
          alt="Admin Roles Background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-white leading-tight">
            Control who can change the controls.
          </h2>
          <p className="text-slate-400 text-lg font-normal   leading-relaxed max-w-3xl">
            Durable security requires separation of duties. Prevent policy tampering and accidental modifications with robust administrative controls.
          </p>
        </div>

        {/* Roles Matrix Table */}
        <div className="p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col overflow-hidden">
          <div className="p-3 bg-slate-900 grid grid-cols-12 gap-3 text-white text-xs font-bold  ">
            <span className="col-span-3">Administrative Role</span>
            <span className="col-span-1.5 text-center">Configure Policy</span>
            <span className="col-span-1.5 text-center">Publish Content</span>
            <span className="col-span-1.5 text-center">Grant Exceptions</span>
            <span className="col-span-1.5 text-center">Review Evidence</span>
            <span className="col-span-1.5 text-center">Revoke Access</span>
            <span className="col-span-1.5 text-center">View Audit</span>
          </div>

          <div className="flex flex-col divide-y divide-gray-800">
            {rolesMatrix.map((row, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 gap-3 items-center text-xs  ">
                <span className="col-span-3 text-white font-bold">{row.role}</span>
                <span className="col-span-1.5 text-center text-teal-400 font-bold">{row.config ? '✓' : '-'}</span>
                <span className="col-span-1.5 text-center text-teal-400 font-bold">{row.pub ? '✓' : '-'}</span>
                <span className="col-span-1.5 text-center text-teal-400 font-bold">{row.exc ? '✓' : '-'}</span>
                <span className="col-span-1.5 text-center text-teal-400 font-bold">{row.rev ? '✓' : '-'}</span>
                <span className="col-span-1.5 text-center text-teal-400 font-bold">{row.rvk ? '✓' : '-'}</span>
                <span className="col-span-1.5 text-center text-teal-400 font-bold">{row.audit ? '✓' : '-'}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Critical Policy Modification Alert Box */}
        <div className="p-5 bg-gray-800 rounded-xl border border-red-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-red-500/10 rounded-md text-red-500 font-bold shrink-0">
              <Shield className='text-red'/>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-white text-base font-bold  ">
                CRITICAL POLICY MODIFICATION REQUESTED
              </h4>
              <p className="text-slate-400 text-xs font-normal   leading-relaxed">
                Modifying &apos;Security boundaries&apos; requires multi-signature admin approval. 2-factor authentication validation has been dispatched to secondary approver.
              </p>
            </div>
          </div>

          <span className="px-3 py-1.5 bg-amber-500/10 text-amber-500 text-xs font-bold   rounded shrink-0">
            PENDING APPROVAL
          </span>
        </div>

        <div className="flex justify-start">
          <Link
            href="/talk-to-an-expert"
            className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold   hover:opacity-90 transition-opacity"
          >
            See administrative controls
          </Link>
        </div>
      </div>
    </section>
  );
}
