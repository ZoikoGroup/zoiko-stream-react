'use client';

import React, { useState } from 'react';
import {
  SupportHelpCenterHeroSection,
  SupportHelpCenterDestinationsSection,
  SupportHelpCenterTasksSection,
  SupportHelpCenterBrowseGridSection,
  SupportHelpCenterContextSection,
  SupportHelpCenterFaqSection,
  SupportHelpCenterCtaSection,
  SupportHelpCenterModals,
  ModalType,
} from '@/components/support-help-center';

export default function SupportHelpCenterPage() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const handleOpenModal = (type: ModalType) => {
    setActiveModal(type);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="w-full min-h-screen bg-slate-100 flex flex-col justify-start items-start overflow-hidden">
      <main className="w-full flex flex-col justify-start items-start">
        <SupportHelpCenterHeroSection onOpenModal={handleOpenModal} />
        <SupportHelpCenterDestinationsSection onOpenModal={handleOpenModal} />
        <SupportHelpCenterTasksSection />
        <SupportHelpCenterBrowseGridSection />
        <SupportHelpCenterContextSection />
        <SupportHelpCenterFaqSection />
        <SupportHelpCenterCtaSection onOpenModal={handleOpenModal} />
      </main>

      {/* Interactive Popup Modals */}
      <SupportHelpCenterModals activeModal={activeModal} onClose={handleCloseModal} />
    </div>
  );
}
