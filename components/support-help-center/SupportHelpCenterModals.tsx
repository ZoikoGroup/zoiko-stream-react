'use client';

import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export type ModalType = 'accessibility' | 'contact' | 'report' | 'status' | null;

interface ModalsProps {
  activeModal: ModalType;
  onClose: () => void;
}

export default function SupportHelpCenterModals({ activeModal, onClose }: ModalsProps) {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl outline outline-1 outline-gray-200 flex flex-col gap-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="size-5" />
        </button>

        {/* Modal 1: Accessibility Help */}
        {activeModal === 'accessibility' && (
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-blue-500 rounded-full" />
              <span className="text-blue-500 text-xs font-bold font-['IBM_Plex_Mono'] uppercase tracking-wider">
                PRIORITY ROUTE
              </span>
            </div>

            <h2 className="text-slate-900 text-2xl font-bold font-['Space_Grotesk']">
              Accessibility help
            </h2>

            <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
              Tell us what&apos;s blocking you. No disability disclosure is required — describe the barrier in your own words.
            </p>

            <div className="flex flex-col gap-4 pt-1">
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-900 text-xs font-bold font-['Inter']">
                  Email (optional)
                </label>
                <input
                  type="email"
                  placeholder="your.email@organization.com"
                  className="w-full px-4 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-300 text-slate-900 text-sm font-normal font-['Inter'] focus:outline-none focus:outline-blue-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-slate-900 text-xs font-bold font-['Inter']">
                  What&apos;s not working for you?
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe the accessibility barrier..."
                  className="w-full p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-300 text-slate-900 text-sm font-normal font-['Inter'] focus:outline-none focus:outline-blue-500 resize-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-slate-900 text-xs font-bold font-['Inter']">
                  Preferred contact method
                </label>
                <select className="w-full px-4 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-300 text-slate-900 text-sm font-normal font-['Inter'] focus:outline-none cursor-pointer">
                  <option>Email</option>
                  <option>Do not contact (feedback only)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-lg border border-gray-300 text-slate-800 text-sm font-bold font-['Inter'] hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-sm font-bold font-['Inter'] hover:opacity-90 transition-opacity"
              >
                Send request
              </button>
            </div>
          </div>
        )}

        {/* Modal 2: Contact Support */}
        {activeModal === 'contact' && (
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-blue-500 rounded-full" />
              <span className="text-blue-500 text-xs font-bold font-['IBM_Plex_Mono'] uppercase tracking-wider">
                CONTACT SUPPORT
              </span>
            </div>

            <h2 className="text-slate-900 text-2xl font-bold font-['Space_Grotesk']">
              Send us a message
            </h2>

            <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
              No account sign-in is required to send this message.
            </p>

            <div className="flex flex-col gap-4 pt-1">
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-900 text-xs font-bold font-['Inter']">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-300 text-slate-900 text-sm font-normal font-['Inter'] focus:outline-none focus:outline-blue-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-slate-900 text-xs font-bold font-['Inter']">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-300 text-slate-900 text-sm font-normal font-['Inter'] focus:outline-none focus:outline-blue-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-slate-900 text-xs font-bold font-['Inter']">
                  Category
                </label>
                <select className="w-full px-4 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-300 text-slate-900 text-sm font-normal font-['Inter'] focus:outline-none cursor-pointer">
                  <option>General</option>
                  <option>Account & Billing</option>
                  <option>Technical Issue</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-slate-900 text-xs font-bold font-['Inter']">
                  How can we help?
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your issue. Do not include passwords, access tokens, API secrets, or payment details."
                  className="w-full p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-300 text-slate-900 text-sm font-normal font-['Inter'] focus:outline-none focus:outline-blue-500 resize-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-lg border border-gray-300 text-slate-800 text-sm font-bold font-['Inter'] hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-sm font-bold font-['Inter'] hover:opacity-90 transition-opacity"
              >
                Send message
              </button>
            </div>
          </div>
        )}

        {/* Modal 3: Report an Issue */}
        {activeModal === 'report' && (
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-blue-500 rounded-full" />
              <span className="text-blue-500 text-xs font-bold font-['IBM_Plex_Mono'] uppercase tracking-wider">
                STRUCTURED REPORT
              </span>
            </div>

            <h2 className="text-slate-900 text-2xl font-bold font-['Space_Grotesk']">
              Report an issue
            </h2>

            <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
              Not for security vulnerabilities — see Developer support for that route. Describe the problem; no passwords, tokens, or payment details.
            </p>

            <div className="flex flex-col gap-4 pt-1">
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-900 text-xs font-bold font-['Inter']">
                  What area is affected?
                </label>
                <select className="w-full px-4 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-300 text-slate-900 text-sm font-normal font-['Inter'] focus:outline-none cursor-pointer">
                  <option>Playback / delivery</option>
                  <option>Ingest / encoding</option>
                  <option>Dashboard / Portal</option>
                  <option>API / Webhooks</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-slate-900 text-xs font-bold font-['Inter']">
                  What happened?
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe what happened..."
                  className="w-full p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-300 text-slate-900 text-sm font-normal font-['Inter'] focus:outline-none focus:outline-blue-500 resize-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-lg border border-gray-300 text-slate-800 text-sm font-bold font-['Inter'] hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-sm font-bold font-['Inter'] hover:opacity-90 transition-opacity"
              >
                Submit report
              </button>
            </div>
          </div>
        )}

        {/* Modal 4: System Status */}
        {activeModal === 'status' && (
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-blue-500 rounded-full" />
              <span className="text-blue-500 text-xs font-bold font-['IBM_Plex_Mono'] uppercase tracking-wider">
                OPERATIONS
              </span>
            </div>

            <h2 className="text-slate-900 text-2xl font-bold font-['Space_Grotesk']">
              System status
            </h2>

            <div className="flex items-center gap-2 text-emerald-600 text-base font-bold font-['Space_Grotesk']">
              <CheckCircle2 className="size-5 text-emerald-500" />
              <span>All systems operational</span>
            </div>

            <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Mono'] leading-relaxed pt-2">
              Illustrative status widget — the live status page is the source of truth. This Help Center does not preserve a status claim once it is stale.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
