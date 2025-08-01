import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const GoogleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.543 9.75h-9.98v3.483h5.66a4.855 4.855 0 0 1-2.094 3.22v2.262h2.908c1.702-1.566 2.68-3.895 2.68-6.482 0-.61-.056-1.196-.174-1.763z" fill="#4285F4"/>
        <path d="M11.563 22c2.61 0 4.805-.864 6.407-2.34l-2.908-2.262c-.864.58-1.97.92-3.5.92-2.68 0-4.96-1.808-5.77-4.23H2.943v2.34c1.68 3.328 4.96 5.56 8.62 5.56z" fill="#34A853"/>
        <path d="M5.793 14.088a6.11 6.11 0 0 1 0-3.97V7.857H2.943a10.034 10.034 0 0 0 0 8.572l2.85-2.261z" fill="#FBBC05"/>
        <path d="M11.563 4.818c1.42 0 2.71.49 3.71 1.458l2.58-2.58A9.61 9.61 0 0 0 11.563 2a10.03 10.03 0 0 0-8.62 5.56l2.85 2.298c.81-2.422 3.09-4.23 5.77-4.23z" fill="#EA4335"/>
    </svg>
);


const SocialProofBar: React.FC = () => {
    return (
        <section className="bg-gray-100 py-2 border-y border-gray-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-center text-center gap-y-2 gap-x-8">
                   <p className="text-xl font-semibold text-gray-800">
                       Top-Rated Cookeville Plumber
                   </p>
                   
                   <div className="flex items-center gap-3">
                       <GoogleIcon className="h-8 w-8" />
                       <div className="flex">
                         {[...Array(5)].map((_, i) => (
                           <StarIcon key={i} className="w-7 h-7 text-yellow-400" />
                         ))}
                       </div>
                   </div>

                   <p className="text-xl font-semibold text-gray-800">
                       Trusted by 100+ on Google Reviews
                   </p>
                </div>
            </div>
        </section>
    );
}

export default SocialProofBar;