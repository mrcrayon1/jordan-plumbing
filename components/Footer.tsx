import React from 'react';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue-dark text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">Jordan Plumbing</h3>
            <p className="text-gray-400">
              Your local, family-owned plumbing experts serving Cookeville and the surrounding areas. We are committed to quality workmanship and outstanding customer service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 mt-1">📞</span>
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">✉️</span>
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white">{EMAIL_ADDRESS}</a>
              </li>
               <li className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span>Cookeville, TN & Surrounding Areas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jordan Plumbing. All Rights Reserved.</p>
          <p className="mt-1">Website designed to generate leads and phone calls.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;