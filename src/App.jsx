import React, { useState } from 'react';
import TopAnnouncementBar from './components/TopAnnouncementBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DreamCRMSpotlight from './components/DreamCRMSpotlight';
import SolutionsAndPluginsExplorer from './components/SolutionsAndPluginsExplorer';
import WhyDreamerBentoGrid from './components/WhyDreamerBentoGrid';
import ScopeEstimator from './components/ScopeEstimator';
import ConsultationModal from './components/ConsultationModal';
import WhatsAppFloatingWidget from './components/WhatsAppFloatingWidget';
import Footer from './components/Footer';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('Free Architecture Consultation');
  const [modalNotes, setModalNotes] = useState('');

  const handleOpenConsultation = (subject) => {
    setModalSubject(subject);
    setModalNotes('');
    setModalOpen(true);
  };

  const handleOpenWithScope = ({ teamSize, modules, timeline }) => {
    setModalSubject('Custom Architecture & Quote Request');
    setModalNotes(
      `Estimated Team Size: ${teamSize} Users\nTarget Timeline: ${timeline}\nSelected Modules: ${
        modules.join(', ') || 'Custom Scope'
      }`
    );
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      <TopAnnouncementBar />
      <Navbar onOpenConsultation={handleOpenConsultation} />
      <main>
        <HeroSection onOpenConsultation={handleOpenConsultation} />
        <DreamCRMSpotlight onOpenConsultation={handleOpenConsultation} />
        <SolutionsAndPluginsExplorer onOpenConsultation={handleOpenConsultation} />
        <WhyDreamerBentoGrid onOpenConsultation={handleOpenConsultation} />
        <ScopeEstimator onOpenConsultationWithScope={handleOpenWithScope} />
      </main>
      <Footer onOpenConsultation={handleOpenConsultation} />
      <WhatsAppFloatingWidget />

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialSubject={modalSubject}
        prefilledNotes={modalNotes}
      />
    </div>
  );
}