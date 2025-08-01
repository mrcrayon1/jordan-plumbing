
import React, { useState } from 'react';
import { PHONE_NUMBER, FinancingIcon, JordanPlumbingLogo } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      {/* Top Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center space-x-4">
              <JordanPlumbingLogo />
              <div>
                <span className="block text-2xl font-bold text-brand-blue-dark tracking-tight leading-tight">Jordan Plumbing Company</span>
                <span className="hidden sm:block text-sm text-gray-500 font-medium">Serving Cookeville & Beyond</span>
              </div>
            </a>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FinancingIcon />
              <div className="text-left">
                <p className="font-semibold text-gray-700">FINANCING</p>
                <p className="font-bold text-brand-blue-dark text-lg">AVAILABLE</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-700">Call Anytime - 24/7</p>
              <a href={`tel:${PHONE_NUMBER}`} className="text-2xl font-bold text-brand-orange hover:text-orange-600 transition-colors">
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="hidden md:flex bg-brand-blue-dark py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="bg-brand-blue text-white font-medium text-lg px-5 py-2 rounded-lg shadow-md hover:bg-opacity-90 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-brand-blue hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 bg-gray-50">
             <div className="px-5 text-center">
                 <p className="font-semibold text-gray-700">Call Anytime - 24/7</p>
                 <a href={`tel:${PHONE_NUMBER}`} className="text-xl font-bold text-brand-orange">
                    {PHONE_NUMBER}
                 </a>
                 <p className="mt-2 text-sm text-gray-600">Financing Available</p>
             </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
