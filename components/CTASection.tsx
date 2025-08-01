import React from 'react';
import { PHONE_NUMBER } from '../constants';

interface CTASectionProps {
  onOpenModal: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onOpenModal }) => {
  return (
    <section id="contact" className="bg-brand-blue text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Ready to Solve Your Plumbing Problems?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            Don't let a small leak turn into a big headache. Contact our expert team today for fast, reliable service.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto inline-block bg-brand-yellow hover:bg-brand-yellow-dark text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition-transform hover:scale-105"
            >
              Request Service Online
            </button>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-full sm:w-auto inline-block bg-white text-brand-blue font-bold py-4 px-8 rounded-full text-lg transition-colors hover:bg-gray-200"
            >
              Call Now: {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;