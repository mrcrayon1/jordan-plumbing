
import React from 'react';
import { TESTIMONIALS, GoogleIcon, FacebookIcon, YelpIcon } from '../constants';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);


const Testimonials: React.FC = () => {
    const renderSourceIcon = (source: 'google' | 'facebook' | 'yelp') => {
        switch (source) {
          case 'google':
            return <GoogleIcon className="h-6 w-6" />;
          case 'facebook':
            return <FacebookIcon className="h-6 w-6" />;
          case 'yelp':
            return <YelpIcon className="h-6 w-6" />;
          default:
            return null;
        }
    };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <p className="text-xl text-gray-600 font-medium">Don't Take Our Word For It</p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue-dark mt-1">
                See What Our Customers Have to Say...
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <blockquote className="text-gray-700 text-lg mb-4 flex-grow">
                “{testimonial.quote}”
              </blockquote>
              <div className="mt-auto">
                <div className="flex justify-center items-center gap-2">
                    {renderSourceIcon(testimonial.source)}
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                        ))}
                    </div>
                </div>
                <p className="font-bold italic text-gray-800 mt-2">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
            <a href="#" className="bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-3 px-8 rounded-md text-lg shadow-md hover:shadow-lg transition-all duration-300">
                Read More Reviews
            </a>
        </div>

        <hr className="my-20 border-gray-200" />

        <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800">Have You Used Our Services?</h3>
              <p className="mt-2 text-lg text-gray-600">Please Leave a Review!</p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-8">
                <a href="#" className="flex items-center gap-3 text-xl font-semibold text-gray-700 hover:text-brand-blue transition-colors group">
                  <GoogleIcon className="h-8 w-8" />
                  <span className="group-hover:underline">Google</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-xl font-semibold text-gray-700 hover:text-brand-blue transition-colors group">
                  <FacebookIcon className="h-8 w-8" />
                  <span className="group-hover:underline">Facebook</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-xl font-semibold text-gray-700 hover:text-brand-blue transition-colors group">
                  <YelpIcon className="h-8 w-8" />
                  <span className="group-hover:underline">Yelp</span>
                </a>
              </div>
            </div>
      </div>
    </section>
  );
};

export default Testimonials;