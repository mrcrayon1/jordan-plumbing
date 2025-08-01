
import React from 'react';
import { Service, Testimonial, WhyChooseUsItem } from './types';

// Icons
const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const TruckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h2a1 1 0 001-1V7a1 1 0 00-1-1h-2" />
    </svg>
);

const WaterDropIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25c0-3.313 2.687-6 6-6s6 2.687 6 6c0 2.034-1.01 3.834-2.556 4.935A8.958 8.958 0 0113.5 21a8.958 8.958 0 01-3.444-1.815A6.003 6.003 0 017.5 14.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6V3" />
    </svg>
);

const WrenchScrewdriverIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const FireIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6c.393 0 .743-.16 1-.417.257-.257.417-.607.417-1 0-.393-.16-.743-.417-1-.257-.257-.607-.417-1-.417-.393 0-.743.16-1 .417a6.287 6.287 0 01-2.962 2.962 8.25 8.25 0 0110.324-5.348z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a6 6 0 006-6c0-1.02-.263-1.97-.723-2.822" />
    </svg>
);

export const JordanPlumbingLogo = () => (
    <div className="flex items-center justify-center">
      <div className="flex-shrink-0 h-16 w-16 rounded-lg bg-brand-blue flex items-center justify-center shadow-md">
        <span className="text-white font-bold text-4xl -mb-1">J</span>
      </div>
    </div>
);

export const AngiesListLogo = ({ className = "h-12" }: { className?: string }) => (
    <div className={`flex items-center gap-2 p-2 pr-3 border border-gray-300 rounded-md shadow-sm bg-white ${className}`}>
        <svg className="h-full w-auto" viewBox="0 0 24 24" fill="#e60000" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.28 15.25l-3.36-3.36 1.41-1.41 1.95 1.95 4.24-4.24 1.41 1.41-5.65 5.65z"/></svg>
        <div className="text-left">
            <span className="block font-bold text-sm text-gray-800 leading-tight">Super Service</span>
            <span className="block font-semibold text-xs text-red-600 leading-tight">Angie's List</span>
        </div>
    </div>
);

export const BBBLogo = ({ className = "h-12" }: { className?: string }) => (
    <div className={`flex items-center gap-2 p-2 pr-3 border border-gray-300 rounded-md shadow-sm bg-white ${className}`}>
        <svg className="h-full w-auto" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <path fill="#00529c" d="M0 0h50v50H0z"/>
            <path fill="#fff" d="M11 11h28v28H11z"/>
            <path fill="#00529c" d="M13 13h24v24H13z"/>
            <path fill="#fff" d="m20.9 31.6-4.5-4.5 1-1 3.5 3.5 6.1-6.1 1 1-7.1 7.1z"/>
            <path fill="#fff" d="M21.5 20.3h6.8v1.3h-5.5v2.8h5.2v1.3h-5.2v2.9h5.5v1.3h-6.8v-9.6zM30.4 20.3h2.1l3.5 9.6h-1.4l-.8-2.5h-4.3l-.8 2.5h-1.4l3.1-9.6zm-0.2 6h3.4l-1.7-5.1-1.7 5.1z"/>
        </svg>
        <div className="text-left">
            <span className="block font-bold text-sm text-blue-900 leading-tight">Accredited</span>
            <span className="block font-semibold text-xs text-gray-600 leading-tight">Business</span>
        </div>
    </div>
);

export const FinancingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-1m0-4v-1m0-4V7m0 8v1m0 0h.01" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 110-18 9 9 0 010 18z" />
    </svg>
);

export const GoogleIcon = ({ className = 'h-6 w-6' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.543 9.75h-9.98v3.483h5.66a4.855 4.855 0 0 1-2.094 3.22v2.262h2.908c1.702-1.566 2.68-3.895 2.68-6.482 0-.61-.056-1.196-.174-1.763z" fill="#4285F4"/>
        <path d="M11.563 22c2.61 0 4.805-.864 6.407-2.34l-2.908-2.262c-.864.58-1.97.92-3.5.92-2.68 0-4.96-1.808-5.77-4.23H2.943v2.34c1.68 3.328 4.96 5.56 8.62 5.56z" fill="#34A853"/>
        <path d="M5.793 14.088a6.11 6.11 0 0 1 0-3.97V7.857H2.943a10.034 10.034 0 0 0 0 8.572l2.85-2.261z" fill="#FBBC05"/>
        <path d="M11.563 4.818c1.42 0 2.71.49 3.71 1.458l2.58-2.58A9.61 9.61 0 0 0 11.563 2a10.03 10.03 0 0 0-8.62 5.56l2.85 2.298c.81-2.422 3.09-4.23 5.77-4.23z" fill="#EA4335"/>
    </svg>
);

export const FacebookIcon = ({ className = 'h-6 w-6' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
);

export const YelpIcon = ({ className = 'h-6 w-6' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#d32323" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.67 19.46l-4.32-2.45-4.32 2.45c-0.53 0.3-1.18-0.080-1.25-0.69l1.22-5.11-3.95-3.32c-0.45-0.38-0.24-1.13 0.38-1.16l5.12-0.2L9.2 3.61c0.23-0.57 0.99-0.57 1.22 0l2.36 4.36 5.12 0.2c0.62 0.03 0.83 0.78 0.38 1.16l-3.95 3.32 1.22 5.11c0.070 0.61-0.72 0.99-1.25 0.69z"/>
    </svg>
);


// Data
export const PHONE_NUMBER = '(931) 526-9318';
export const EMAIL_ADDRESS = 'contact@jordanplumbingtn.com';

export const WHY_CHOOSE_US_ITEMS: WhyChooseUsItem[] = [
    {
        icon: <WrenchIcon />,
        title: 'Expert Technicians',
        description: 'Our team is licensed, insured, and highly trained to handle any plumbing challenge with precision and care.',
    },
    {
        icon: <ShieldCheckIcon />,
        title: 'Upfront & Honest Pricing',
        description: 'No surprises. We provide clear, detailed estimates before any work begins so you can make informed decisions.',
    },
    {
        icon: <ClockIcon />,
        title: '24/7 Emergency Service',
        description: 'Plumbing disasters don\'t wait for business hours, and neither do we. We\'re here for you day and night.',
    },
    {
        icon: <TruckIcon />,
        title: 'Fast & Reliable',
        description: 'We pride ourselves on prompt arrivals, efficient work, and leaving your space cleaner than we found it.',
    }
];

export const SERVICES: Service[] = [
  {
    icon: <WaterDropIcon />,
    title: 'Drain Cleaning',
    description: 'Slow or clogged drains? We use advanced techniques to clear blockages and restore flow quickly.'
  },
  {
    icon: <WrenchScrewdriverIcon />,
    title: 'Water Heater Repair & Install',
    description: 'From no hot water to new energy-efficient installations, we handle all your water heater needs.'
  },
  {
    icon: <WaterDropIcon />,
    title: 'Leak Detection & Repair',
    description: 'Hidden leaks can cause major damage. Our experts pinpoint and repair leaks with minimal disruption.'
  },
  {
    icon: <WrenchScrewdriverIcon />,
    title: 'Sewer Line Services',
    description: 'We offer comprehensive sewer line inspection, repair, and replacement services for your peace of mind.'
  },
  {
    icon: <WrenchScrewdriverIcon />,
    title: 'Fixture Installation',
    description: 'Upgrade your kitchen or bathroom with professionally installed faucets, sinks, toilets, and more.'
  },
  {
    icon: <FireIcon />,
    title: 'Gas Piping & Lines',
    description: 'Safe and reliable installation and repair of gas lines for appliances, fireplaces, and outdoor grills.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Jordan Plumbing was the best customer service experience I've had in a long time. They were recommended to me by a couple of neighbors...",
    name: "Regina W.",
    source: "google"
  },
  {
    quote: "I'm a realtor and the Jordan Plumbing team did a great job on the home I'm selling to my clients. Thorough sewer scope inspection...",
    name: "Keith P.",
    source: "facebook"
  },
  {
    quote: "The team did a great job fixing a leaky waterline... installed a completed water line from the meter to the water tank...",
    name: "Paxton F.",
    source: "yelp"
  }
];