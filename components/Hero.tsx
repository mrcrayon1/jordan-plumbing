
import React from 'react';
import { PHONE_NUMBER } from '../constants';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative bg-gray-200 text-white pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0">
        <img
          src="https://cdn.prod.website-files.com/63442f9283422f02f84eaac8/657b4f4fda71bf76c48fd23e_electrician%20walking%20to%20home.webp"
          alt="Professional plumber from Jordan Plumbing working on pipes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-blue-dark opacity-30"></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
          style={{ textShadow: '4px 4px 16px rgba(0, 0, 0, 0.95)' }}
        >
          Honest, Professional Plumbing for the Tennessee Area
        </h1>
        <p
          className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200"
          style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 0.9)' }}
        >
          Fast, Reliable & Affordable Plumbing Services for Your Home and Business.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto inline-block bg-brand-yellow text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transform transition-all duration-300 hover:bg-brand-yellow-dark hover:shadow-xl"
          >
            Get a Free Estimate
          </button>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="w-full sm:w-auto inline-block bg-gray-50 text-gray-800 border-2 border-gray-800 font-bold py-3 px-6 rounded-lg text-lg shadow-lg transform transition-all duration-300 hover:bg-gray-100 hover:shadow-xl"
          >
            Call Us - 24/7
          </a>
        </div>
        <div className="mt-12 text-center">
          <span className="inline-block bg-green-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
            ✓ 24/7 Emergency Service Available
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
