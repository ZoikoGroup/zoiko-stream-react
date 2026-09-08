import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function RuleDetailsSection() {
  return (
    <section id="rule-details" className="relative w-full bg-white py-16 lg:py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Rule details
          </h2>
        </div>

        {/* 6 Rule Cards Stack */}
        <div className="space-y-8">
          {/* Rule 1 */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
            <span className="font-mono text-[11px] font-bold tracking-wider text-blue-600 uppercase block mb-2">
              PLATFORM INTEGRITY &amp; SECURITY
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              No unauthorized access or interference
            </h3>

            {/* Operative Rule Callout */}
            <div className="bg-slate-50 border-l-4 border-slate-700/80 rounded-r-xl p-4 sm:p-5 text-slate-800 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
              <strong className="font-semibold text-slate-900">Operative rule:</strong> You may not attempt to gain unauthorized access to ZoikoStream systems, accounts, or data, or interfere with the normal operation of the platform, including through denial-of-service activity, credential misuse, or attempts to bypass access controls.
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600">
              <div>
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  PLAIN-LANGUAGE SUMMARY — NOT LEGAL TEXT, ORIENTATION ONLY
                </span>
                <p>Don&apos;t try to break in, overload, or disrupt ZoikoStream systems.</p>
              </div>

              <div>
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  SCOPE
                </span>
                <p>Applies to all ZoikoStream accounts, APIs, and infrastructure.</p>
              </div>

              <div>
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  EXCEPTION
                </span>
                <p>Good-faith security research conducted under the Vulnerability Disclosure Policy is not treated as a violation of this rule. See the security bounty below.</p>
              </div>

              <div>
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  EXAMPLES — ILLUSTRATIVE ONLY, NON-EXHAUSTIVE
                </span>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Attempting to access another account without authorization</li>
                  <li>Running automated credential stuffing attempts against sign-in</li>
                </ul>
                <p className="text-[11px] text-slate-400 mt-1 italic">
                  These examples do not create an exhaustive list; if conduct isn&apos;t listed, that doesn&apos;t mean it&apos;s permitted.
                </p>
              </div>
            </div>
          </div>

          {/* Rule 2 */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
            <span className="font-mono text-[11px] font-bold tracking-wider text-blue-600 uppercase block mb-2">
              CONTENT &amp; LEGAL COMPLIANCE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              No unlawful or infringing content
            </h3>

            <div className="bg-slate-50 border-l-4 border-slate-700/80 rounded-r-xl p-4 sm:p-5 text-slate-800 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
              <strong className="font-semibold text-slate-900">Operative rule:</strong> You may not use ZoikoStream to stream, store, or distribute content that is unlawful, infringes the intellectual property rights of others, or violates applicable regulatory requirements.
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600">
              <div>
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  PLAIN-LANGUAGE SUMMARY — NOT LEGAL TEXT, ORIENTATION ONLY
                </span>
                <p>Only stream or store content you have the right to use, and follow the law that applies to it.</p>
              </div>

              <div>
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  SCOPE
                </span>
                <p>Applies to all content ingested, stored, or delivered through ZoikoStream on any account.</p>
              </div>

              <div>
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  RELATED AUTHORITY
                </span>
                <p>Copyright-specific claims are handled through ZoikoStream&apos;s separate copyright/DMCA process, not this policy alone.</p>
              </div>
            </div>
          </div>

          {/* Rule 3 */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
            <span className="font-mono text-[11px] font-bold tracking-wider text-blue-600 uppercase block mb-2">
              FAIR USE OF RESOURCES
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              No abusive consumption of shared capacity
            </h3>

            <div className="bg-slate-50 border-l-4 border-slate-700/80 rounded-r-xl p-4 sm:p-5 text-slate-800 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
              <strong className="font-semibold text-slate-900">Operative rule:</strong> You may not use ZoikoStream in a manner designed to consume disproportionate shared platform capacity in a way that degrades service for other customers, outside of usage consistent with your account&apos;s published limits.
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600">
              <div>
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  PLAIN-LANGUAGE SUMMARY — NOT LEGAL TEXT, ORIENTATION ONLY
                </span>
                <p>Use ZoikoStream within your account&apos;s intended usage, not to deliberately strain shared infrastructure.</p>
              </div>

              <div>
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  SCOPE
                </span>
                <p>Applies to streaming, storage, API, and delivery usage across all account tiers.</p>
              </div>
            </div>
          </div>

          {/* Rule 4 */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
            <span className="font-mono text-[11px] font-bold tracking-wider text-blue-600 uppercase block mb-2">
              LIVE EVENTS CONDUCT
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              Respect audience safety during live broadcasts
            </h3>

            <div className="bg-slate-50 border-l-4 border-slate-700/80 rounded-r-xl p-4 sm:p-5 text-slate-800 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
              <strong className="font-semibold text-slate-900">Operative rule:</strong> You may not use ZoikoStream Live Events to broadcast content that threatens audience safety, or to enable harassment of participants or viewers through platform-provided interaction features.
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600">
              <div>
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  PLAIN-LANGUAGE SUMMARY — NOT LEGAL TEXT, ORIENTATION ONLY
                </span>
                <p>Keep live broadcasts and any audience-interaction features safe and respectful.</p>
              </div>

              <div>
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  SCOPE
                </span>
                <p>Applies specifically to ZoikoStream Live Events broadcasts and their interaction features.</p>
              </div>
            </div>
          </div>

          {/* Rule 5 */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
            <span className="font-mono text-[11px] font-bold tracking-wider text-blue-600 uppercase block mb-2">
              DATA &amp; PRIVACY RESPECT
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              Respect the privacy of others
            </h3>

            <div className="bg-slate-50 border-l-4 border-slate-700/80 rounded-r-xl p-4 sm:p-5 text-slate-800 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
              <strong className="font-semibold text-slate-900">Operative rule:</strong> You may not use ZoikoStream to collect, expose, or misuse personal data belonging to viewers, participants, or other users beyond what is necessary for your authorized use of the platform.
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600">
              <div>
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  PLAIN-LANGUAGE SUMMARY — NOT LEGAL TEXT, ORIENTATION ONLY
                </span>
                <p>Don&apos;t use ZoikoStream to gather or expose other people&apos;s personal data without a legitimate reason.</p>
              </div>
            </div>
          </div>

          {/* Rule 6 */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
            <span className="font-mono text-[11px] font-bold tracking-wider text-blue-600 uppercase block mb-2">
              AUTOMATED &amp; TECHNICAL ACCESS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              No unauthorized automated access
            </h3>

            <div className="bg-slate-50 border-l-4 border-slate-700/80 rounded-r-xl p-4 sm:p-5 text-slate-800 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
              <strong className="font-semibold text-slate-900">Operative rule:</strong> Automated access to ZoikoStream outside of published APIs and their documented terms — including scraping, unauthorized bots, or circumvention of rate limits — is not permitted.
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600">
              <div>
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  PLAIN-LANGUAGE SUMMARY — NOT LEGAL TEXT, ORIENTATION ONLY
                </span>
                <p>Use the published APIs as documented; don&apos;t build unauthorized automated workarounds.</p>
              </div>

              <div>
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  RELATED AUTHORITY
                </span>
                <Link
                  href="/developer-documentation"
                  className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Developer documentation and API terms</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
