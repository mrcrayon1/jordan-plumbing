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
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
  <h1 className="text-4xl font-bold text-blue-900">Tailwind is Working 🎉</h1>
  <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
    Click Me
  </button>
</div>

  );
};

export default App;