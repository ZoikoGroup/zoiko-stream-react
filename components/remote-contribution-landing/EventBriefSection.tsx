import React from 'react';

export default function EventBriefSection() {
  const row1Fields = [
    {
      label: 'Organization name',
      placeholder: 'Acme Enterprise Group',
      type: 'text',
      hasDropdown: false
    },
    {
      label: 'Event type',
      placeholder: 'Corporate Town Hall / Webcast',
      type: 'select',
      hasDropdown: true
    }
  ];

  const row2Fields = [
    {
      label: 'Expected remote sources',
      placeholder: '3-5 remote presenters',
      type: 'text',
      hasDropdown: false
    },
    {
      label: 'Contribution method preference',
      placeholder: 'Browser-based preferred',
      type: 'select',
      hasDropdown: true
    }
  ];

  const row3Fields = [
    {
      label: 'Accessibility requirements',
      placeholder: 'E.g. interpreter source, closed captions',
      type: 'text',
      hasDropdown: false
    },
    {
      label: 'Preferred test window',
      placeholder: 'YYYY-MM-DD',
      type: 'text',
      hasDropdown: false
    }
  ];

  const FormRow = ({ fields }: { fields: typeof row1Fields }) => (
    <div className="flex items-start w-full" style={{ gap: '24px' }}>
      {fields.map((field, i) => (
        <div key={i} className="flex flex-col items-start flex-1 min-w-[0px]" style={{ gap: '8px' }}>
          <label className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#ffffff', fontSize: '14px' }}>
            {field.label}
          </label>
          <div
            className="flex items-center justify-between w-full"
            style={{
              height: '48px',
              padding: '0 16px',
              backgroundColor: '#0a0d13',
              border: '1px solid #1e293b',
              borderRadius: '8px'
            }}
          >
            <span className="font-space-grotesk font-normal overflow-hidden text-ellipsis whitespace-nowrap" style={{ color: '#aab3c4', fontSize: '14px', lineHeight: '22.75px' }}>
              {field.placeholder}
            </span>
            {field.hasDropdown && (
              <img
                src="/images/remote-contribution-landing/chevron-down.svg"
                alt=""
                style={{ width: '16px', height: '16px', flexShrink: 0 }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center px-6 md:px-0 overflow-hidden"
      style={{ backgroundColor: '#0a0d13', paddingTop: '120px', paddingBottom: '120px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .eventbrief-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
        @media (max-width: 767px) {
          .eventbrief-form-row {
            flex-direction: column !important;
          }
          .eventbrief-footer {
            flex-direction: column !important;
            gap: 16px !important;
          }
        }
      `}} />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/remote-contribution-landing/event-brief-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover max-w-none"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,13,19,0.85)' }} />
      </div>

      <div className="eventbrief-padding relative z-10 flex flex-col items-start w-full" style={{ gap: '56px', maxWidth: '1440px' }}>

        {/* Header */}
        <div className="flex flex-col items-start" style={{ gap: '16px', maxWidth: '800px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#ffffff', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            Start your contribution-aware event brief
          </h2>
          <p className="font-space-grotesk font-normal" style={{ color: '#aab3c4', fontSize: '18px', lineHeight: '28.8px' }}>
            Capture minimum planning data and route appropriately. Your brief will reserve contribution capacity and begin compatibility verification.
          </p>
        </div>

        {/* Form Card */}
        <div
          className="flex flex-col items-start w-full"
          style={{
            padding: '40px',
            gap: '28px',
            backgroundColor: 'rgba(18,22,37,0.8)',
            border: '1px solid #1e293b',
            borderRadius: '24px',
            backdropFilter: 'blur(10px)'
          }}
        >
          {/* Row 1 */}
          <div className="eventbrief-form-row flex items-start w-full" style={{ gap: '24px' }}>
            {row1Fields.map((field, i) => (
              <div key={i} className="flex flex-col items-start flex-1 min-w-[0px]" style={{ gap: '8px' }}>
                <label className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#ffffff', fontSize: '14px' }}>
                  {field.label}
                </label>
                <div className="flex items-center justify-between w-full" style={{ height: '48px', padding: '0 16px', backgroundColor: '#0a0d13', border: '1px solid #1e293b', borderRadius: '8px' }}>
                  <span className="font-space-grotesk font-normal overflow-hidden text-ellipsis whitespace-nowrap" style={{ color: '#aab3c4', fontSize: '14px', lineHeight: '22.75px' }}>{field.placeholder}</span>
                  {field.hasDropdown && <img src="/images/remote-contribution-landing/chevron-down.svg" alt="" style={{ width: '16px', height: '16px', flexShrink: 0 }} />}
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="eventbrief-form-row flex items-start w-full" style={{ gap: '24px' }}>
            {row2Fields.map((field, i) => (
              <div key={i} className="flex flex-col items-start flex-1 min-w-[0px]" style={{ gap: '8px' }}>
                <label className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#ffffff', fontSize: '14px' }}>
                  {field.label}
                </label>
                <div className="flex items-center justify-between w-full" style={{ height: '48px', padding: '0 16px', backgroundColor: '#0a0d13', border: '1px solid #1e293b', borderRadius: '8px' }}>
                  <span className="font-space-grotesk font-normal overflow-hidden text-ellipsis whitespace-nowrap" style={{ color: '#aab3c4', fontSize: '14px', lineHeight: '22.75px' }}>{field.placeholder}</span>
                  {field.hasDropdown && <img src="/images/remote-contribution-landing/chevron-down.svg" alt="" style={{ width: '16px', height: '16px', flexShrink: 0 }} />}
                </div>
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="eventbrief-form-row flex items-start w-full" style={{ gap: '24px' }}>
            {row3Fields.map((field, i) => (
              <div key={i} className="flex flex-col items-start flex-1 min-w-[0px]" style={{ gap: '8px' }}>
                <label className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#ffffff', fontSize: '14px' }}>
                  {field.label}
                </label>
                <div className="flex items-center justify-between w-full" style={{ height: '48px', padding: '0 16px', backgroundColor: '#0a0d13', border: '1px solid #1e293b', borderRadius: '8px' }}>
                  <span className="font-space-grotesk font-normal overflow-hidden text-ellipsis whitespace-nowrap" style={{ color: '#aab3c4', fontSize: '14px', lineHeight: '22.75px' }}>{field.placeholder}</span>
                  {field.hasDropdown && <img src="/images/remote-contribution-landing/chevron-down.svg" alt="" style={{ width: '16px', height: '16px', flexShrink: 0 }} />}
                </div>
              </div>
            ))}
          </div>

          {/* Form Footer */}
          <div className="eventbrief-footer flex items-center justify-between w-full" style={{ paddingTop: '16px' }}>
            <p className="font-space-grotesk font-normal" style={{ color: '#aab3c4', fontSize: '14px', lineHeight: '22.75px', maxWidth: '500px' }}>
              Your brief will begin compatibility verification. No payment details required.
            </p>
            <div className="flex items-center shrink-0" style={{ gap: '16px' }}>
              {/* Submit Button */}
              <button
                className="flex items-center justify-center shrink-0"
                style={{
                  padding: '14px 26px',
                  background: 'linear-gradient(90deg, #33d9c7 0%, #4c86ff 100%)',
                  borderRadius: '10px',
                  boxShadow: '0px 4px 8px rgba(51,217,199,0.2)'
                }}
              >
                <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#04141a', fontSize: '15px' }}>
                  Submit event brief
                </span>
              </button>
              {/* Outline Button */}
              <a href="/talk-to-an-expert">
              <button
                className="flex items-center justify-center shrink-0 border"
                style={{
                  padding: '14px 28px',
                  borderRadius: '10px',
                  borderColor: '#6f7787',
                  backgroundColor: 'transparent'
                }}
              >
                <span className="font-space-grotesk font-medium whitespace-nowrap" style={{ color: '#eef1f6', fontSize: '14px' }}>
                  Talk to an expert
                </span>
              </button></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
