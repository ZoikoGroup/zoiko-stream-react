import React from 'react';
import Link from 'next/link';

export default function DiagnoseFailuresSection() {
  return (
    <section className="relative w-full border-t border-solid border-[#dde2ea] bg-white px-6 py-16 md:px-12 xl:px-[132px] xl:py-[80px]">
      

      <div className="mx-auto flex w-full max-w-[1176px] flex-col items-start gap-[24px]">
        <div className="flex items-center gap-[8px] mb-2">
          <div className="w-[6px] h-[6px] rounded-full bg-[#5b8def]" />
          <p className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#5b8def]">
          Diagnose failures
        </p>
        </div>

        <h2 className="w-full max-w-[734px] font-sora text-[27px] font-bold leading-[1.62] tracking-[-0.27px] text-[#2b2e35]">
          See what ZoikoStream sent, what your endpoint returned, and what happens next.
        </h2>

        {/* Table Container */}
        <div className="w-full overflow-x-auto rounded-[10px] border border-solid border-[#dde2ea]">
          <table className="w-full min-w-[900px] text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b border-[#dde2ea] px-4 py-4 font-inter text-[11px] font-bold uppercase tracking-[0.44px] text-[#9aa1ae]">Delivery ID</th>
                <th className="border-b border-[#dde2ea] px-4 py-4 font-inter text-[11px] font-bold uppercase tracking-[0.44px] text-[#9aa1ae]">Event type</th>
                <th className="border-b border-[#dde2ea] px-4 py-4 font-inter text-[11px] font-bold uppercase tracking-[0.44px] text-[#9aa1ae]">Attempt</th>
                <th className="border-b border-[#dde2ea] px-4 py-4 font-inter text-[11px] font-bold uppercase tracking-[0.44px] text-[#9aa1ae]">Outcome</th>
                <th className="border-b border-[#dde2ea] px-4 py-4 font-inter text-[11px] font-bold uppercase tracking-[0.44px] text-[#9aa1ae]">Duration</th>
                <th className="border-b border-[#dde2ea] px-4 py-4 font-inter text-[11px] font-bold uppercase tracking-[0.44px] text-[#9aa1ae]">Environment</th>
                <th className="border-b border-[#dde2ea] px-4 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr>
                <td className="border-b border-[#dde2ea] px-4 py-[14px] font-mono text-[12.5px] text-[#2b2e35]">dlv_9k2m...</td>
                <td className="border-b border-[#dde2ea] px-4 py-[14px] font-mono text-[12.5px] text-[#2b2e35]">stream.session.started</td>
                <td className="border-b border-[#dde2ea] px-4 py-[14px] font-inter text-[12.5px] text-[#2b2e35]">1 of 1</td>
                <td className="border-b border-[#dde2ea] px-4 py-[14px]">
                  <span className="inline-flex h-[24px] items-center rounded-full bg-[#eafaf3] px-[12px] font-inter text-[11px] font-bold text-[#1f9d6f]">200 OK</span>
                </td>
                <td className="border-b border-[#dde2ea] px-4 py-[14px] font-inter text-[12.5px] text-[#2b2e35]">142ms</td>
                <td className="border-b border-[#dde2ea] px-4 py-[14px]">
                  <span className="inline-flex h-[19px] items-center rounded-[6px] bg-[#eeecfd] px-[8px] font-inter text-[10.5px] font-bold tracking-[0.42px] text-[#6a6df0]">TEST</span>
                </td>
                <td className="border-b border-[#dde2ea] px-4 py-[14px] text-right">
                  <Link href="#" className="font-inter text-[13.5px] font-semibold text-[#5b8def] hover:underline">View &rarr;</Link>
                </td>
              </tr>
              {/* Row 2 */}
              <tr>
                <td className="border-b border-[#dde2ea] px-4 py-[14px] font-mono text-[12.5px] text-[#2b2e35]">dlv_7h1p...</td>
                <td className="border-b border-[#dde2ea] px-4 py-[14px] font-mono text-[12.5px] text-[#2b2e35]">recording.asset.ready</td>
                <td className="border-b border-[#dde2ea] px-4 py-[14px] font-inter text-[12.5px] text-[#2b2e35]">2 of 5</td>
                <td className="border-b border-[#dde2ea] px-4 py-[14px]">
                  <span className="inline-flex h-[24px] items-center rounded-full bg-[#fbeae8] px-[12px] font-inter text-[11px] font-bold text-[#c0392b]">Timeout</span>
                </td>
                <td className="border-b border-[#dde2ea] px-4 py-[14px] font-inter text-[12.5px] text-[#2b2e35]">10.0s</td>
                <td className="border-b border-[#dde2ea] px-4 py-[14px]">
                  <span className="inline-flex h-[19px] items-center rounded-[6px] bg-[#eafaf3] px-[8px] font-inter text-[10.5px] font-bold tracking-[0.42px] text-[#1f9d6f]">PROD</span>
                </td>
                <td className="border-b border-[#dde2ea] px-4 py-[14px] text-right">
                  <Link href="#" className="font-inter text-[13.5px] font-semibold text-[#5b8def] hover:underline">View &rarr;</Link>
                </td>
              </tr>
              {/* Row 3 */}
              <tr>
                <td className="border-b border-[#dde2ea] px-4 py-[14px] font-mono text-[12.5px] text-[#2b2e35]">dlv_3q8z...</td>
                <td className="border-b border-[#dde2ea] px-4 py-[14px] font-mono text-[12.5px] text-[#2b2e35]">stream.session.failed</td>
                <td className="border-b border-[#dde2ea] px-4 py-[14px] font-inter text-[12.5px] text-[#2b2e35]">1 of 1</td>
                <td className="border-b border-[#dde2ea] px-4 py-[14px]">
                  <span className="inline-flex h-[24px] items-center rounded-full bg-[#eafaf3] px-[12px] font-inter text-[11px] font-bold text-[#1f9d6f]">200 OK</span>
                </td>
                <td className="border-b border-[#dde2ea] px-4 py-[14px] font-inter text-[12.5px] text-[#2b2e35]">88ms</td>
                <td className="border-b border-[#dde2ea] px-4 py-[14px]">
                  <span className="inline-flex h-[19px] items-center rounded-[6px] bg-[#eafaf3] px-[8px] font-inter text-[10.5px] font-bold tracking-[0.42px] text-[#1f9d6f]">PROD</span>
                </td>
                <td className="border-b border-[#dde2ea] px-4 py-[14px] text-right">
                  <Link href="#" className="font-inter text-[13.5px] font-semibold text-[#5b8def] hover:underline">View &rarr;</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-inter text-[12px] leading-[19.44px] text-[#9aa1ae] max-w-[700px] mt-2">
          Detail view shows redacted headers, payload preview, and failure classification &mdash; signatures and secrets never appear in exported diagnostic bundles.
        </p>
      </div>
    </section>
  );
}
