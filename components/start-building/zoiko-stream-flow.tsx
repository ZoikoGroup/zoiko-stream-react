'use client'
import React, { useState } from 'react';

type FlowStep =
  | 'HOME'
  | 'CREATE_WORKSPACE'
  | 'WORKSPACE_CREATED'
  | 'SANDBOX_SETUP'
  | 'SANDBOX_ACTIVATED'
  | 'ACCESS_REQUEST'
  | 'REQUEST_RECEIVED';

export default function ZoikoStreamFlow() {
  const [step, setStep] = useState<FlowStep>('HOME');
  const [isLoading, setIsLoading] = useState(false);

  // Form states
  const [workspaceEmail, setWorkspaceEmail] = useState('');
  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaceUseCase, setWorkspaceUseCase] = useState('');
  const [workspaceAgreed, setWorkspaceAgreed] = useState(false);

  const [sandboxEmail, setSandboxEmail] = useState('');
  const [sandboxTest, setSandboxTest] = useState('');

  const [requestEmail, setRequestEmail] = useState('');
  const [requestOrg, setRequestOrg] = useState('');
  const [requestBuildIntent, setRequestBuildIntent] = useState('');
  const [requestTier, setRequestTier] = useState('');

  // Future API Integration Placeholders
  const handleCreateWorkspace = async () => {
    setIsLoading(true);
    try {
      // TODO: Attach API call here in the future
      // const response = await fetch('/api/workspaces', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email: workspaceEmail, name: workspaceName, useCase: workspaceUseCase }),
      // });
      // const data = await response.json();
      
      setStep('WORKSPACE_CREATED');
    } catch (error) {
      console.error('Failed to create workspace:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleActivateSandbox = async () => {
    setIsLoading(true);
    try {
      // TODO: Attach API call here in the future
      // const response = await fetch('/api/sandboxes', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email: sandboxEmail, intendedTest: sandboxTest }),
      // });
      
      setStep('SANDBOX_ACTIVATED');
    } catch (error) {
      console.error('Failed to activate sandbox:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRequestAccess = async () => {
    setIsLoading(true);
    try {
      // TODO: Attach API call here in the future
      // const response = await fetch('/api/access-requests', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     email: requestEmail,
      //     organization: requestOrg,
      //     intent: requestBuildIntent,
      //     tier: requestTier,
      //   }),
      // });
      
      setStep('REQUEST_RECEIVED');
    } catch (error) {
      console.error('Failed to submit access request:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900   text-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
        
        {/* Breadcrumb Navigation */}
        <div className="inline-flex items-center gap-2 text-sm">
          <span onClick={() => setStep('HOME')} className="text-gray-400 cursor-pointer hover:underline">
            Home
          </span>
          <span className="text-gray-500   ">/</span>
          <span className="text-gray-400">Developers</span>
          <span className="text-gray-500   ">/</span>
          <span className="text-[#5e6ad2]">Start building</span>
        </div>

        {/* Dynamic Content Views */}
        {step === 'HOME' && (
          <div className="flex flex-col gap-8">
            {/* Header Banner */}
            <div className="flex flex-col items-start gap-4 py-4">
              <div className="px-2.5 py-1 bg-gray-900 rounded-sm border border-slate-800">
                <span className="text-[#5e6ad2] text-sm font-bold">SELF-SERVICE AVAILABLE</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Start building with ZoikoStream
              </h1>
              <p className="text-gray-400 text-base sm:text-lg">
                Create a workspace, activate a sandbox, or request access — choose the path available for your organization.
              </p>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div
                onClick={() => setStep('CREATE_WORKSPACE')}
                className="p-8 bg-gray-900 rounded-2xl border border-slate-800 flex flex-col gap-5 cursor-pointer hover:border-[#5e6ad2] transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 bg-teal-300/10 rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 relative">
                      <img src="/images/start-building/layout-grid.png" />
                    </div>
                  </div>
                  <span className="text-gray-500 text-xs">REQ-AUTO</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold">Create a workspace</h3>
                  <p className="text-gray-400 text-sm">Available when self-service access is approved.</p>
                </div>
                <span className="text-[#5e6ad2] text-base font-bold mt-auto">Create workspace →</span>
              </div>

              {/* Card 2 */}
              <div
                onClick={() => setStep('SANDBOX_SETUP')}
                className="p-8 bg-gray-900 rounded-2xl border border-slate-800 flex flex-col gap-5 cursor-pointer hover:border-[#5e6ad2] transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 bg-teal-300/10 rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 relative">
                      <img src="/images/start-building/box-select.png" />
                    </div>
                  </div>
                  <span className="text-gray-500 text-xs font-['IBM_Plex_Mono']">REQ-SANDBOX</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold">Open a sandbox</h3>
                  <p className="text-gray-400 text-sm">Use an approved test environment with stated limits.</p>
                </div>
                <span className="text-[#5e6ad2] text-base font-bold mt-auto">Open sandbox →</span>
              </div>

              {/* Card 3 */}
              <div
                onClick={() => setStep('ACCESS_REQUEST')}
                className="p-8 bg-gray-900 rounded-2xl border border-slate-800 flex flex-col gap-5 cursor-pointer hover:border-[#5e6ad2] transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 bg-teal-300/10 rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 relative">
                   <img src="/images/start-building/user-plus.png" />

                    </div>
                  </div>
                  <span className="text-gray-500 text-xs font-['IBM_Plex_Mono']">REQ-REVIEW</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold">Request developer access</h3>
                  <p className="text-gray-400 text-sm">Submit a request when immediate creation is unavailable.</p>
                </div>
                <span className="text-[#5e6ad2] text-base font-bold mt-auto">Request access →</span>
              </div>
            </div>

            {/* Before You Begin Info Section */}
            <div className="p-8 bg-gray-900 rounded-2xl border border-slate-800 flex flex-col gap-5 mt-4">
              <h3 className="text-xl font-bold">Before you begin</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex gap-3">
                  <span className="text-[#5e6ad2] text-sm font-semibold font-['IBM_Plex_Mono']">01</span>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold   ">Identity verification</span>
                    <p className="text-gray-400 text-sm">You will need an active work email matching a registered enterprise domain.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#5e6ad2] text-sm font-semibold font-['IBM_Plex_Mono']">02</span>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold   ">Environment prep</span>
                    <p className="text-gray-400 text-sm">Ensure you have RTMP/WebRTC ingress details ready for streaming configurations.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#5e6ad2] text-sm font-semibold font-['IBM_Plex_Mono']">03</span>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold   ">Terms & Limits</span>
                    <p className="text-gray-400 text-sm">By creating a workspace, you agree to comply with our platform usage thresholds.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CREATE WORKSPACE STEP */}
        {step === 'CREATE_WORKSPACE' && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="self-start px-2.5 py-1 bg-gray-900 rounded-sm border border-slate-800">
                <span className="text-[#5e6ad2] text-sm font-bold">SELF-SERVICE AVAILABLE</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">Start building with ZoikoStream</h1>
              <p className="text-gray-400 text-lg">Create a workspace now. Provide your work email, name the workspace, and choose your use case.</p>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-slate-800 flex flex-col gap-6 max-w-3xl">
              <h2 className="text-xl font-bold">Workspace Details</h2>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold">Work email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    value={workspaceEmail}
                    onChange={(e) => setWorkspaceEmail(e.target.value)}
                    placeholder="name@organization.com"
                    className="w-full px-3 py-2.5 bg-neutral-900 rounded-lg border border-slate-800 text-gray-200 text-sm focus:outline-none focus:border-[#5e6ad2]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold">Workspace name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    value={workspaceName}
                    onChange={(e) => setWorkspaceName(e.target.value)}
                    placeholder="Organization or project name"
                    className="w-full px-3 py-2.5 bg-neutral-900 rounded-lg border border-slate-800 text-gray-200 text-sm focus:outline-none focus:border-[#5e6ad2]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold">Primary use case <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    value={workspaceUseCase}
                    onChange={(e) => setWorkspaceUseCase(e.target.value)}
                    placeholder="Select one"
                    className="w-full px-3 py-2.5 bg-neutral-900 rounded-lg border border-slate-800 text-gray-200 text-sm focus:outline-none focus:border-[#5e6ad2]"
                  />
                </div>
                <div className="flex items-start gap-3 cursor-pointer" onClick={() => setWorkspaceAgreed(!workspaceAgreed)}>
                  <input
                    type="checkbox"
                    checked={workspaceAgreed}
                    onChange={(e) => setWorkspaceAgreed(e.target.checked)}
                    className="w-5 h-5 mt-0.5 rounded bg-neutral-900 border-slate-800 accent-teal-400 cursor-pointer"
                  />
                  <span className="text-gray-400 text-sm">I agree to the applicable terms and understand published usage limits.</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleCreateWorkspace}
                  disabled={isLoading}
                  className="w-full py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg text-zinc-950 font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isLoading ? 'Creating...' : 'Create workspace'}
                </button>
                <div className="text-center text-gray-500 text-xs">Do not include secrets or production data.</div>
              </div>
            </div>
          </div>
        )}

        {/* WORKSPACE CREATED STEP */}
        {step === 'WORKSPACE_CREATED' && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="self-start px-2.5 py-1 bg-gray-900 rounded-sm border border-slate-800">
                <span className="text-[#5e6ad2] text-sm font-bold">WORKSPACE CREATED</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">Start building with ZoikoStream</h1>
              <p className="text-gray-400 text-lg">Your team sandbox and infrastructure slice has been provisioned. Review details below.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 flex flex-col gap-6">
                <div className="p-5 bg-green-400/5 rounded-xl border border-green-400 flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center font-bold text-neutral-900">✓</div>
                  <div>
                    <h4 className="text-green-400 font-bold">WORKSPACE CREATED SUCCESSFULLY</h4>
                    <p className="text-gray-400 text-sm">System cluster resources assigned.</p>
                  </div>
                </div>

                <div className="p-6 bg-gray-900 rounded-2xl border border-slate-800 flex flex-col gap-4">
                  <h3 className="font-bold text-base">Provisioned Workspace</h3>
                  <div className="flex flex-col gap-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-slate-800">
                      <span className="text-gray-400">Workspace</span>
                      <span>{workspaceName || 'acme-streaming'}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-800">
                      <span className="text-gray-400">Region</span>
                      <span>US-East-1</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-400">Owner</span>
                      <span>{workspaceEmail || 'dev@acme.co'}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-900 rounded-2xl border border-orange-400 flex flex-col gap-3">
                  <div className="text-orange-400 text-sm font-bold">Your API key is shown once. Copy it now.</div>
                  <div className="p-3 bg-neutral-900 rounded-lg border border-slate-800 flex justify-between items-center text-sm">
                    <span>zs_live_a8f3...k9d2</span>
                    <button className="px-3 py-1 bg-slate-800 rounded text-xs hover:bg-slate-700">Copy</button>
                  </div>
                  <span className="text-gray-500 text-xs">Store securely. Do not commit to source control.</span>
                </div>
              </div>

              {/* Checklist Panel */}
              <div className="p-6 bg-gray-900 rounded-2xl border border-slate-800 flex flex-col gap-6">
                <h3 className="text-xl font-bold">Quickstart Checklist</h3>
                <div className="flex flex-col gap-4 text-sm">
                  <div className="flex gap-3">
                    <span className="text-[#5e6ad2] font-bold">1</span>
                    <div>
                      <h4 className="font-bold">Install SDK</h4>
                      <p className="text-gray-400">Add @zoikostream/sdk to your system.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#5e6ad2] font-bold">2</span>
                    <div>
                      <h4 className="font-bold font-bold">Configure stream</h4>
                      <p className="text-gray-400">Assign active live endpoints.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#5e6ad2] font-bold">3</span>
                    <div>
                      <h4 className="font-bold">Start broadcast</h4>
                      <p className="text-gray-400">Inject WebRTC payload stream.</p>
                    </div>
                  </div>
                </div>
                <button className="w-full py-3 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg text-zinc-950 font-bold">
                  Open workspace
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SANDBOX SETUP STEP */}
        {step === 'SANDBOX_SETUP' && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="self-start px-2.5 py-1 bg-gray-900 rounded-sm border border-slate-800">
                <span className="text-[#5e6ad2] text-sm font-bold">SANDBOX AVAILABLE</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">Start building with ZoikoStream</h1>
              <p className="text-gray-400 text-lg">Activate a bounded test environment.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 p-8 bg-gray-900 rounded-2xl border border-slate-800 flex flex-col gap-6">
                <h2 className="text-xl font-bold">Sandbox Setup</h2>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold">Work email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      value={sandboxEmail}
                      onChange={(e) => setSandboxEmail(e.target.value)}
                      placeholder="name@organization.com"
                      className="w-full px-3 py-2.5 bg-neutral-900 rounded-lg border border-slate-800 text-gray-200 text-sm focus:outline-none focus:border-[#5e6ad2]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold">Intended test <span className="text-red-500">*</span></label>
                    <textarea
                      value={sandboxTest}
                      onChange={(e) => setSandboxTest(e.target.value)}
                      placeholder="Describe the first integration or workflow"
                      className="w-full h-24 p-3 bg-neutral-900 rounded-lg border border-slate-800 text-gray-200 text-sm focus:outline-none focus:border-[#5e6ad2] resize-none"
                    />
                  </div>
                </div>
                <button
                  onClick={handleActivateSandbox}
                  disabled={isLoading}
                  className="w-full py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg text-zinc-950 font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isLoading ? 'Activating...' : 'Activate sandbox'}
                </button>
              </div>

              <div className="flex flex-col gap-6">
                <div className="p-5 bg-teal-300/5 rounded-xl border border-[#5e6ad2] flex flex-col gap-2 text-sm">
                  <span className="text-[#5e6ad2] font-bold">Sandbox environment</span>
                  <p className="text-gray-400">Test-only access with clear threshold caps.</p>
                </div>
                <div className="p-6 bg-gray-900 rounded-2xl border border-slate-800 flex flex-col gap-3 text-sm">
                  <h3 className="font-bold text-base mb-2">Test Environment Limits</h3>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-gray-400">Duration</span>
                    <span>14 days</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-gray-400">Rate limit</span>
                    <span>100 req/min</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-gray-400">Storage</span>
                    <span>5 GB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SANDBOX ACTIVATED STEP */}
        {step === 'SANDBOX_ACTIVATED' && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="self-start px-2.5 py-1 bg-gray-900 rounded-sm border border-slate-800">
                <span className="text-[#5e6ad2] text-sm font-bold">SANDBOX ACTIVATED</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">Start building with ZoikoStream</h1>
              <p className="text-gray-400 text-lg">A bounded sandbox cluster environment is ready.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 flex flex-col gap-6">
                <div className="p-5 bg-green-400/5 rounded-xl border border-green-400 flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center font-bold text-neutral-900">✓</div>
                  <div>
                    <h4 className="text-green-400 font-bold">SANDBOX ACTIVATED SUCCESSFULLY</h4>
                    <p className="text-gray-400 text-sm">Bounded testing environment alive.</p>
                  </div>
                </div>

                <div className="p-6 bg-gray-900 rounded-2xl border border-slate-800 flex flex-col gap-4">
                  <h3 className="text-xl font-bold">Sandbox Metadata</h3>
                  <div className="flex flex-col gap-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-slate-800">
                      <span className="text-gray-400">Environment</span>
                      <span>sandbox-us-east-1</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-800">
                      <span className="text-gray-400">Status</span>
                      <span className="text-[#5e6ad2] font-bold">Active</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-900 rounded-2xl border border-slate-800 flex flex-col gap-4">
                <h3 className="text-xl font-bold">Actions</h3>
                <button className="w-full py-3 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg text-zinc-950 font-bold">
                  Create first test stream
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ACCESS REQUEST STEP */}
        {step === 'ACCESS_REQUEST' && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="self-start px-2.5 py-1 bg-gray-900 rounded-sm border border-slate-800">
                <span className="text-[#5e6ad2] text-sm font-bold">ACCESS BY REQUEST</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">Start building with ZoikoStream</h1>
              <p className="text-gray-400 text-lg">Submit your work email, organization, and intended use so the team can review.</p>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-slate-800 flex flex-col gap-6 max-w-3xl">
              <h2 className="text-xl font-bold">Developer Access Request</h2>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold">Work email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    value={requestEmail}
                    onChange={(e) => setRequestEmail(e.target.value)}
                    placeholder="name@organization.com"
                    className="w-full px-3 py-2.5 bg-neutral-900 rounded-lg border border-slate-800 text-gray-200 text-sm focus:outline-none focus:border-[#5e6ad2]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold">Organization <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    value={requestOrg}
                    onChange={(e) => setRequestOrg(e.target.value)}
                    placeholder="Company or institution name"
                    className="w-full px-3 py-2.5 bg-neutral-900 rounded-lg border border-slate-800 text-gray-200 text-sm focus:outline-none focus:border-[#5e6ad2]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold">What do you want to build? <span className="text-red-500">*</span></label>
                  <textarea
                    value={requestBuildIntent}
                    onChange={(e) => setRequestBuildIntent(e.target.value)}
                    placeholder="Describe your stream orchestration intent"
                    className="w-full h-24 p-3 bg-neutral-900 rounded-lg border border-slate-800 text-gray-200 text-sm focus:outline-none focus:border-[#5e6ad2] resize-none"
                  />
                </div>
              </div>
              <button
                onClick={handleRequestAccess}
                disabled={isLoading}
                className="w-full py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg text-zinc-950 font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isLoading ? 'Submitting...' : 'Request developer access'}
              </button>
            </div>
          </div>
        )}

        {/* REQUEST RECEIVED STEP */}
        {step === 'REQUEST_RECEIVED' && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="self-start px-2.5 py-1 bg-gray-900 rounded-sm border border-slate-800">
                <span className="text-[#5e6ad2] text-sm font-bold">REQUEST RECEIVED</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">Access review initiated</h1>
              <p className="text-gray-400 text-lg">Your request has been placed in the review queue.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 p-6 bg-gray-900 rounded-2xl border border-[#5e6ad2] flex flex-col gap-4">
                <div className="text-[#5e6ad2] font-bold">REFERENCE ID: ZS-DEV-8841</div>
                <p className="text-gray-400 text-sm">Keep this safe for inquiries regarding domain review progress.</p>
              </div>
              <div className="p-6 bg-gray-900 rounded-2xl border border-slate-800 flex flex-col gap-4">
                <h3 className="text-xl font-bold">Next Steps</h3>
                <p className="text-gray-400 text-sm">Await an authorization email from zoikostream.com domain.</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}