import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import SocialProofBar from './components/SocialProofBar';
import FreeEstimateModal from './components/FreeEstimateModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <CTASection />
      <SocialProofBar />
      <Footer />
      <FreeEstimateModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default App;