
import React from 'react';
import { AngiesListLogo, BBBLogo } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">
              30+ Years of Experience & 1000s of Happy Customers
            </h2>
            <p className="text-lg text-gray-700">
              We strive to deliver the best plumbing experience you've ever had - fast, friendly, affordable - with old-fashioned, exceptional customer service.
            </p>
            
            <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span><strong>Residential, Commercial, & Property Management</strong></span>
                </li>
                <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span><strong>Fast, Friendly, Same-Day Service</strong></span>
                </li>
                <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span><strong>There When You Need Us Most - 24/7</strong></span>
                </li>
            </ul>

            <p className="text-gray-600">
              We are equipped to handle virtually any plumbing emergency or problem you may face, and are leaders in repairing water lines and solving sewer problems.
            </p>

            <div className="flex items-center flex-wrap gap-6 pt-4">
                <AngiesListLogo />
                <BBBLogo />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <img
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              src="https://res.cloudinary.com/liaison-inc/image/upload/c_fit,f_auto,q_auto,w_1200/services/homeguide/backgrounds/plumbing.jpg"
              alt="Jordan Plumbing Company team of professional plumbers"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
