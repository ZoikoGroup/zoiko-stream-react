"use client";
import React, { useState } from 'react';

export default function SecurityImplementationSection() {
  const [activeTab, setActiveTab] = useState('Node.js');
  
  const tabs = ['Node.js', 'Python', 'Go'];

  return (
    <section className="relative w-full border-t border-solid border-[#dde2ea] bg-white px-6 py-16 md:px-12 xl:px-[132px] xl:py-[80px]">
      

      <div className="mx-auto flex w-full max-w-[1176px] flex-col items-start gap-[24px]">
        <div className="flex items-center gap-[8px] mb-2">
          <div className="w-[6px] h-[6px] rounded-full bg-[#5b8def]" />
          <p className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#5b8def]">
          Security-first implementation
        </p>
        </div>

        <h2 className="w-full max-w-[734px] font-sora text-[27px] font-bold leading-[1.62] tracking-[-0.27px] text-[#2b2e35]">
          Verify every delivery before you trust the payload.
        </h2>

        <p className="w-full max-w-[850px] font-inter text-[15px] font-normal leading-[24.3px] text-[#63697a] mb-8">
          Verification happens on a trusted server. Never expose the signing secret in browser or mobile client code.
        </p>

        {/* Tab Header */}
        <div className="flex w-full border-b border-solid border-[#dde2ea] mb-[16px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-[10px] px-4 font-sans text-[13px] font-bold transition-colors border-b-2 ${
                activeTab === tab 
                  ? 'border-[#5b8def] text-[#5b8def]' 
                  : 'border-transparent text-[#9aa1ae] hover:text-[#63697a]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Code Block */}
        <div className="w-full overflow-hidden rounded-[12px] bg-[#282c34] shadow-sm relative">
          <div className="absolute top-3 right-4 flex items-center gap-3">
            <span className="font-inter text-[10.5px] font-bold uppercase tracking-wider text-[#8b92a0]">
              {activeTab}
            </span>
            <button className="flex h-[24px] items-center justify-center rounded-[6px] border border-solid border-[#565a63] bg-[#454a55] px-3 transition-colors hover:bg-[#565a63]">
              <span className="font-sans text-[11px] font-bold text-[#c7cbd3]">Copy</span>
            </button>
          </div>
          
          <div className="p-5 pt-[52px] overflow-x-auto min-h-[201px]">
            {activeTab === 'Node.js' && (
              <pre className="font-mono text-[12.5px] leading-[20.63px] text-[#c9d1d9]">
<span className="text-[#6b7280]">{`// Verify on your server using the raw request body`}</span><br/>
<span className="text-[#e06c75]">const</span> expected = <span className="text-[#61afef]">hmac</span>(<span className="text-[#98c379]">"sha256"</span>, endpointSecret, rawBody);<br/>
<span className="text-[#e06c75]">if</span> (!<span className="text-[#61afef]">constantTimeEqual</span>(expected, signatureHeader)) {'{\n'}
{'  '}<span className="text-[#e06c75]">return</span> res.<span className="text-[#61afef]">status</span>(<span className="text-[#d19a66]">401</span>).<span className="text-[#61afef]">send</span>(<span className="text-[#98c379]">"Invalid signature"</span>);<br/>
{'}'}<br/>
<br/>
<span className="text-[#6b7280]">{`// Verified — enqueue for async processing, then acknowledge`}</span><br/>
<span className="text-[#e06c75]">await</span> queue.<span className="text-[#61afef]">enqueue</span>(event);<br/>
res.<span className="text-[#61afef]">status</span>(<span className="text-[#d19a66]">200</span>).<span className="text-[#61afef]">send</span>(<span className="text-[#98c379]">"ok"</span>);
              </pre>
            )}
            
            {activeTab === 'Python' && (
              <pre className="font-mono text-[12.5px] leading-[20.63px] text-[#c9d1d9]">
<span className="text-[#6b7280]"># Python signature verification example</span><br/>
<span className="text-[#e06c75]">import</span> hmac<br/>
<span className="text-[#e06c75]">import</span> hashlib<br/>
<br/>
expected = hmac.new(endpoint_secret.encode(), raw_body, hashlib.sha256).hexdigest()<br/>
<span className="text-[#e06c75]">if not</span> hmac.compare_digest(expected, signature_header):<br/>
{'    '}<span className="text-[#e06c75]">return</span> <span className="text-[#98c379]">"Invalid signature"</span>, <span className="text-[#d19a66]">401</span><br/>
<br/>
queue.enqueue(event)<br/>
<span className="text-[#e06c75]">return</span> <span className="text-[#98c379]">"ok"</span>, <span className="text-[#d19a66]">200</span>
              </pre>
            )}
            
            {activeTab === 'Go' && (
              <pre className="font-mono text-[12.5px] leading-[20.63px] text-[#c9d1d9]">
<span className="text-[#6b7280]">// Go signature verification example</span><br/>
mac := hmac.<span className="text-[#61afef]">New</span>(sha256.New, []byte(endpointSecret))<br/>
mac.<span className="text-[#61afef]">Write</span>(rawBody)<br/>
expected := hex.<span className="text-[#61afef]">EncodeToString</span>(mac.<span className="text-[#61afef]">Sum</span>(nil))<br/>
<br/>
<span className="text-[#e06c75]">if</span> !hmac.<span className="text-[#61afef]">Equal</span>([]byte(expected), []byte(signatureHeader)) {'{\n'}
{'    '}http.<span className="text-[#61afef]">Error</span>(w, <span className="text-[#98c379]">"Invalid signature"</span>, http.StatusUnauthorized)<br/>
{'    '}<span className="text-[#e06c75]">return</span><br/>
{'}'}<br/>
<br/>
queue.<span className="text-[#61afef]">Enqueue</span>(event)<br/>
w.<span className="text-[#61afef]">WriteHeader</span>(http.StatusOK)
              </pre>
            )}
          </div>
        </div>

        {/* Note */}
        <div className="flex w-full items-center rounded-[10px] border border-solid border-[#dde2ea] bg-[#f1f4f8] px-5 py-4 mt-6">
          <p className="font-inter text-[13.5px] leading-[21.87px] text-[#63697a]">
            Frameworks may parse or modify the request body before your handler runs. Preserve the raw body for verification &mdash; exact header names and the signing algorithm follow the current ZoikoStream signing contract.
          </p>
        </div>
      </div>
    </section>
  );
}
