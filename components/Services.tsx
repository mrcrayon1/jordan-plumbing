import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">
            Our Comprehensive Plumbing Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            From minor drips to major emergencies, we have the expertise to handle all your plumbing needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 flex flex-col hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-2xl font-semibold text-brand-blue-dark ml-4">{service.title}</h3>
              </div>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <a href="#contact" className="mt-6 text-brand-blue hover:text-brand-blue-dark font-semibold self-start">
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;