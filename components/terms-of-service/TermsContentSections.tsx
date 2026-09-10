import React from 'react';
import Link from 'next/link';

export function TermsContentSections() {
  return (
    <div className="w-full flex flex-col justify-start items-stretch">
      
      {/* SECTION 1 */}
      <section id="section-1" className="w-full px-6 sm:px-12 lg:px-20 py-12 sm:py-16 bg-[#f8fafc]">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col justify-start items-start gap-6">
          <div className="max-w-[740px] space-y-1">
            <span className="text-[#4483f9] text-xs font-mono uppercase tracking-wide">SECTION 1</span>
            <h2 className="text-[#0f172a] text-2xl sm:text-3xl font-semibold font-sans">Agreement &amp; acceptance.</h2>
          </div>

          <div className="max-w-[760px] space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            <p>
              These Terms of Service (&quot;Terms&quot;) form a binding agreement between you (either an individual or the entity you represent, &quot;you&quot; or &quot;Customer&quot;) and Zoiko Tech, operating ZoikoStream on behalf of Zoiko Group (&quot;ZoikoStream,&quot; &quot;we,&quot; &quot;us&quot;). By creating an account, accessing, or using any part of the services, you accept these Terms.
            </p>
            <p>
              If you are entering into these Terms on behalf of an organization, you represent that you have the authority to bind that organization, and &quot;you&quot; refers to that organization.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-[#0f172a] text-base font-semibold font-sans">Eligibility</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                You must be at least the age of majority in your jurisdiction, and not barred from using the services under applicable law, to create an account.
              </p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-[#0f172a] text-base font-semibold font-sans">Authority to bind</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                If acting for an organization, you confirm you&apos;re authorized to accept these Terms on its behalf.
              </p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-[#0f172a] text-base font-semibold font-sans">Additional terms</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Specific features (like Live Events) may have their own supplemental terms, which apply alongside these Terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section id="section-2" className="w-full px-6 sm:px-12 lg:px-20 py-12 sm:py-16 bg-[#f1f5f9]">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col justify-start items-start gap-6">
          <div className="max-w-[740px] space-y-1">
            <span className="text-[#4483f9] text-xs font-mono uppercase tracking-wide">SECTION 2</span>
            <h2 className="text-[#0f172a] text-2xl sm:text-3xl font-semibold font-sans">Accounts.</h2>
          </div>

          <div className="max-w-[760px] space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            <p>To use most features, you&apos;ll need to create an account. You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Provide accurate, current, and complete information when registering</li>
              <li>Keep your account credentials confidential and secure</li>
              <li>Notify us promptly of any unauthorized use of your account</li>
              <li>Take responsibility for all activity that occurs under your account</li>
            </ul>
            <p className="pt-2">
              We may suspend or terminate your account if information you provide is inaccurate, or if we reasonably believe your account has been compromised — see Termination below.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section id="section-3" className="w-full px-6 sm:px-12 lg:px-20 py-12 sm:py-16 bg-[#f8fafc]">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col justify-start items-start gap-6">
          <div className="max-w-[740px] space-y-1">
            <span className="text-[#4483f9] text-xs font-mono uppercase tracking-wide">SECTION 3</span>
            <h2 className="text-[#0f172a] text-2xl sm:text-3xl font-semibold font-sans">Using the services.</h2>
          </div>

          <div className="max-w-[760px] space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            <p>
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the services for your internal business or personal purposes.
            </p>
            <p className="font-medium text-[#0f172a]">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Use the services for any unlawful purpose or in violation of any applicable law</li>
              <li>Attempt to gain unauthorized access to any part of the services or related systems</li>
              <li>Reverse-engineer, decompile, or attempt to extract the source code of the services, except as permitted by law</li>
              <li>Interfere with or disrupt the integrity or performance of the services</li>
              <li>Use the services to transmit content that infringes the rights of others, is unlawful, or violates our Acceptable use policy</li>
            </ul>
            <p className="pt-2">
              Full detail on permitted and prohibited use lives in our{' '}
              <Link href="/acceptable-use" className="text-[#4483f9] font-semibold hover:underline">
                Acceptable use policy
              </Link>
              , which supplements these Terms.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section id="section-4" className="w-full px-6 sm:px-12 lg:px-20 py-12 sm:py-16 bg-[#f1f5f9]">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col justify-start items-start gap-6">
          <div className="max-w-[740px] space-y-1">
            <span className="text-[#4483f9] text-xs font-mono uppercase tracking-wide">SECTION 4</span>
            <h2 className="text-[#0f172a] text-2xl sm:text-3xl font-semibold font-sans">Service-specific terms.</h2>
          </div>

          <div className="max-w-[760px] text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            Certain services have additional terms that apply alongside these Terms of Service. Where a conflict exists, the service-specific terms control for that specific service only.
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-[#0f172a] text-base font-semibold font-sans">Live Events</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  ZoikoStream Live Events is subject to additional event-specific terms covering scheduling, cancellation, and content responsibility.
                </p>
              </div>
              <Link href="/live-events-overview" className="text-[#4483f9] text-xs sm:text-sm font-semibold hover:underline">
                Review Live Events terms &rarr;
              </Link>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-[#0f172a] text-base font-semibold font-sans">Developer &amp; API access</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Use of the API, SDKs, and developer tools is also subject to rate limits, credential handling, and acceptable-use rules described in Developer documentation.
                </p>
              </div>
              <Link href="/documentation-page" className="text-[#4483f9] text-xs sm:text-sm font-semibold hover:underline">
                Read Documentation &rarr;
              </Link>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-[#0f172a] text-base font-semibold font-sans">Enterprise agreements</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Customers with a separately negotiated enterprise agreement are governed by that agreement where it conflicts with these Terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section id="section-5" className="w-full px-6 sm:px-12 lg:px-20 py-12 sm:py-16 bg-[#f8fafc]">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col justify-start items-start gap-6">
          <div className="max-w-[740px] space-y-1">
            <span className="text-[#4483f9] text-xs font-mono uppercase tracking-wide">SECTION 5</span>
            <h2 className="text-[#0f172a] text-2xl sm:text-3xl font-semibold font-sans">Subscriptions, fees &amp; billing.</h2>
          </div>

          <div className="max-w-[760px] text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            Paid plans are billed in advance on a recurring basis according to the billing cycle you select. Fees are non-refundable except as required by law or as expressly stated in these Terms.
          </div>

          <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#f1f5f9] border-b border-slate-200">
                  <th className="p-3.5 font-semibold text-[#0f172a] uppercase font-mono text-xs w-48">Topic</th>
                  <th className="p-3.5 font-semibold text-[#0f172a] uppercase font-mono text-xs">Illustrative example term</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-semibold text-[#0f172a]">Billing cycle</td>
                  <td className="p-3.5 text-slate-600">Monthly or annual, as selected at signup</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-semibold text-[#0f172a]">Auto-renewal</td>
                  <td className="p-3.5 text-slate-600">Plans renew automatically unless cancelled before the renewal date</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-semibold text-[#0f172a]">Price changes</td>
                  <td className="p-3.5 text-slate-600">Advance notice provided before a price change takes effect on renewal</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-semibold text-[#0f172a]">Failed payment</td>
                  <td className="p-3.5 text-slate-600">Service may be suspended if payment fails and isn&apos;t resolved within a stated grace period</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-semibold text-[#0f172a]">Taxes</td>
                  <td className="p-3.5 text-slate-600">Fees are exclusive of applicable taxes, which you&apos;re responsible for unless we&apos;re required to collect them</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 6 */}
      <section id="section-6" className="w-full px-6 sm:px-12 lg:px-20 py-12 sm:py-16 bg-[#0b1329] text-white">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col justify-start items-start gap-6">
          <div className="max-w-[740px] space-y-1">
            <span className="text-[#4483f9] text-xs font-mono uppercase tracking-wide">SECTION 6</span>
            <h2 className="text-white text-2xl sm:text-3xl font-semibold font-sans">Content &amp; intellectual property.</h2>
          </div>

          <div className="w-full grid grid-cols-2 space-x-4 space-y-5">
            <div className="p-5 bg-[#16203a] rounded-2xl border border-slate-800 space-y-2">
              <h3 className="text-white text-base font-semibold font-sans">Your content</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                You retain ownership of the video, data, and other content you upload or stream through the services (&quot;Your Content&quot;). You grant us a limited license to host, process, and transmit Your Content solely as needed to provide the services to you.
              </p>
            </div>

            <div className="p-5 bg-[#16203a] rounded-2xl border border-slate-800 space-y-2">
              <h3 className="text-white text-base font-semibold font-sans">Our intellectual property</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                The services, including our software, branding, and documentation, are owned by ZoikoStream or our licensors and protected by intellectual property law. These Terms don&apos;t grant you any rights to our trademarks except as described in our Trademark guidelines.
              </p>
            </div>

            <div className="p-5 bg-[#16203a] rounded-2xl border border-slate-800 space-y-2">
              <h3 className="text-white text-base font-semibold font-sans">Feedback</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                If you provide suggestions or feedback about the services, you grant us the right to use that feedback without restriction or obligation to you.
              </p>
            </div>

            <div className="p-5 bg-[#16203a] rounded-2xl border border-slate-800 space-y-2">
              <h3 className="text-white text-base font-semibold font-sans">Copyright complaints</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                If you believe content on the services infringes your copyright, contact Legal with the details of your claim so we can investigate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 */}
      <section id="section-7" className="w-full px-6 sm:px-12 lg:px-20 py-12 sm:py-16 bg-[#f8fafc]">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col justify-start items-start gap-6">
          <div className="max-w-[740px] space-y-1">
            <span className="text-[#4483f9] text-xs font-mono uppercase tracking-wide">SECTION 7</span>
            <h2 className="text-[#0f172a] text-2xl sm:text-3xl font-semibold font-sans">Third-party services.</h2>
          </div>

          <div className="max-w-[760px] text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            The services may integrate with or link to third-party services (such as payment processors or analytics providers). We don&apos;t control third-party services and aren&apos;t responsible for their content, accuracy, or practices. Your use of any third-party service is subject to that provider&apos;s own terms.
          </div>
        </div>
      </section>

      {/* SECTION 8 */}
      <section id="section-8" className="w-full px-6 sm:px-12 lg:px-20 py-12 sm:py-16 bg-[#f1f5f9]">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col justify-start items-start gap-6">
          <div className="max-w-[740px] space-y-1">
            <span className="text-[#4483f9] text-xs font-mono uppercase tracking-wide">SECTION 8</span>
            <h2 className="text-[#0f172a] text-2xl sm:text-3xl font-semibold font-sans">Disclaimers.</h2>
          </div>

          <div className="max-w-[760px] space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            <p>
              The services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. We don&apos;t warrant that the services will be uninterrupted, error-free, or completely secure.
            </p>
            <div className="p-5 bg-white rounded-xl border border-slate-300 text-slate-600 text-xs sm:text-sm font-sans uppercase tracking-tight leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. (ILLUSTRATIVE EXAMPLE CLAUSE LANGUAGE.)
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 */}
      <section id="section-9" className="w-full px-6 sm:px-12 lg:px-20 py-12 sm:py-16 bg-[#f8fafc]">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col justify-start items-start gap-6">
          <div className="max-w-[740px] space-y-1">
            <span className="text-[#4483f9] text-xs font-mono uppercase tracking-wide">SECTION 9</span>
            <h2 className="text-[#0f172a] text-2xl sm:text-3xl font-semibold font-sans">Limitation of liability.</h2>
          </div>

          <div className="max-w-[760px] space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            <p>
              To the maximum extent permitted by law, ZoikoStream will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill, arising from your use of the services.
            </p>
            <div className="p-5 bg-white rounded-xl border border-slate-300 text-slate-600 text-xs sm:text-sm font-sans uppercase tracking-tight leading-relaxed">
              OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS OR THE SERVICES IS LIMITED TO THE AMOUNT YOU PAID US IN THE TWELVE MONTHS PRECEDING THE CLAIM, OR A STATED MINIMUM AMOUNT, WHICHEVER IS GREATER. (ILLUSTRATIVE EXAMPLE CLAUSE LANGUAGE — EXACT FIGURES REQUIRE LEGAL APPROVAL.)
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 */}
      <section id="section-10" className="w-full px-6 sm:px-12 lg:px-20 py-12 sm:py-16 bg-[#f1f5f9]">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col justify-start items-start gap-6">
          <div className="max-w-[740px] space-y-1">
            <span className="text-[#4483f9] text-xs font-mono uppercase tracking-wide">SECTION 10</span>
            <h2 className="text-[#0f172a] text-2xl sm:text-3xl font-semibold font-sans">Indemnification.</h2>
          </div>

          <div className="max-w-[760px] text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            You agree to defend, indemnify, and hold ZoikoStream harmless from any claims, damages, or expenses arising from: (a) Your Content, (b) your use of the services in violation of these Terms, or (c) your violation of any law or third-party right.
          </div>
        </div>
      </section>

      {/* SECTION 11 */}
      <section id="section-11" className="w-full px-6 sm:px-12 lg:px-20 py-12 sm:py-16 bg-[#f8fafc]">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col justify-start items-start gap-6">
          <div className="max-w-[740px] space-y-1">
            <span className="text-[#4483f9] text-xs font-mono uppercase tracking-wide">SECTION 11</span>
            <h2 className="text-[#0f172a] text-2xl sm:text-3xl font-semibold font-sans">Term, suspension &amp; termination.</h2>
          </div>

          <div className="max-w-[760px] text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            These Terms remain in effect while you use the services. You may stop using the services and close your account at any time.
          </div>

          <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#f1f5f9] border-b border-slate-200">
                  <th className="p-3.5 font-semibold text-[#0f172a] uppercase font-mono text-xs w-72">Reason</th>
                  <th className="p-3.5 font-semibold text-[#0f172a] uppercase font-mono text-xs">Possible consequence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-semibold text-[#0f172a]">Material breach of these Terms</td>
                  <td className="p-3.5 text-slate-600">Suspension or termination, with notice where reasonably practicable</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-semibold text-[#0f172a]">Non-payment</td>
                  <td className="p-3.5 text-slate-600">Suspension after a grace period; termination if unresolved</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-semibold text-[#0f172a]">Security or legal risk to the services or others</td>
                  <td className="p-3.5 text-slate-600">Immediate suspension may occur without prior notice</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-semibold text-[#0f172a]">Voluntary cancellation by you</td>
                  <td className="p-3.5 text-slate-600">Access ends at the close of your current billing period, unless stated otherwise</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="max-w-[760px] text-slate-600 text-sm sm:text-base leading-relaxed font-sans pt-2">
            Upon termination, your right to use the services ends, but provisions that by their nature should survive (including intellectual property, disclaimers, liability limits, and dispute resolution) will continue to apply.
          </div>
        </div>
      </section>

      {/* SECTION 12 */}
      <section id="section-12" className="w-full px-6 sm:px-12 lg:px-20 py-12 sm:py-16 bg-[#f1f5f9]">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col justify-start items-start gap-6">
          <div className="max-w-[740px] space-y-1">
            <span className="text-[#4483f9] text-xs font-mono uppercase tracking-wide">SECTION 12</span>
            <h2 className="text-[#0f172a] text-2xl sm:text-3xl font-semibold font-sans">Governing law &amp; dispute resolution.</h2>
          </div>

          <div className="max-w-[760px] space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            <p>
              These Terms are governed by the laws of the jurisdiction stated in the current approved agreement, without regard to conflict-of-law principles.
            </p>
            <div className="p-5 bg-white rounded-xl border border-slate-300 text-slate-600 text-xs sm:text-sm font-sans uppercase tracking-tight leading-relaxed">
              ANY DISPUTE ARISING FROM THESE TERMS WILL BE RESOLVED THROUGH THE DISPUTE-RESOLUTION PROCESS (WHICH MAY INCLUDE BINDING ARBITRATION AND/OR A DESIGNATED VENUE) SET OUT IN THE CURRENT APPROVED AGREEMENT. (ILLUSTRATIVE EXAMPLE — EXACT MECHANISM AND JURISDICTION REQUIRE LEGAL APPROVAL.)
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13 */}
      <section id="section-13" className="w-full px-6 sm:px-12 lg:px-20 py-12 sm:py-16 bg-[#f8fafc]">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col justify-start items-start gap-6">
          <div className="max-w-[740px] space-y-1">
            <span className="text-[#4483f9] text-xs font-mono uppercase tracking-wide">SECTION 13</span>
            <h2 className="text-[#0f172a] text-2xl sm:text-3xl font-semibold font-sans">General provisions.</h2>
          </div>

          <div className="max-w-[740px] pl-2 sm:pl-4 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            <p>
              <strong className="text-[#0f172a]">Assignment.</strong> You may not assign these Terms without our consent; we may assign these Terms in connection with a merger, acquisition, or sale of assets.
            </p>
            <p>
              <strong className="text-[#0f172a]">Severability.</strong> If any provision is found unenforceable, the remaining provisions remain in full effect.
            </p>
            <p>
              <strong className="text-[#0f172a]">Waiver.</strong> Our failure to enforce a provision isn&apos;t a waiver of our right to do so later.
            </p>
            <p>
              <strong className="text-[#0f172a]">Entire agreement.</strong> These Terms, together with any service-specific terms and policies referenced here, constitute the entire agreement between you and ZoikoStream regarding the services.
            </p>
            <p>
              <strong className="text-[#0f172a]">Notices.</strong> We may provide notices to you via the email associated with your account or by posting on the services.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 14 */}
      <section id="section-14" className="w-full px-6 sm:px-12 lg:px-20 py-12 sm:py-16 bg-[#f1f5f9]">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col justify-start items-start gap-6">
          <div className="max-w-[740px] space-y-2">
            <span className="text-[#4483f9] text-xs font-mono uppercase tracking-wide">SECTION 14</span>
            <h2 className="text-[#0f172a] text-2xl sm:text-3xl font-semibold font-sans">Changes to these terms.</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans pt-1">
              We may update these Terms from time to time. Material changes will be notified with reasonable advance notice before they take effect.
            </p>
          </div>

          <div className="w-full max-w-[820px] p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 text-xs sm:text-sm font-sans">
            <span className="font-mono text-slate-500 font-semibold text-xs shrink-0">2026-08-01</span>
            <span className="text-slate-700">Version 1.0 published — initial Terms of Service with illustrative example clause language.</span>
          </div>
        </div>
      </section>

    </div>
  );
}
