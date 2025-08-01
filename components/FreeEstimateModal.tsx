import React, { useState, useEffect } from 'react';

interface FreeEstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FreeEstimateModal: React.FC<FreeEstimateModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Reset form when modal is reopened
    if (isOpen) {
      setIsSubmitted(false);
      setName('');
      setPhone('');
      setEmail('');
      setDetails('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // In a real app, you'd send this data to a server.
    // We'll simulate a network request with a timeout.
    setTimeout(() => {
      console.log({ name, phone, email, details });
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full relative transform transition-all duration-300 scale-95 animate-scale-in"
        onClick={handleModalContentClick}
        style={{ animation: 'scale-in 0.3s forwards' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
             <div className="mx-auto bg-green-100 rounded-full h-20 w-20 flex items-center justify-center">
                <svg className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
             </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-6">Thank You!</h2>
            <p className="text-gray-600 mt-2">Your request has been sent. We will contact you shortly.</p>
            <button
                onClick={onClose}
                className="mt-6 w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-3 px-6 rounded-lg text-lg"
            >
                Done
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-brand-blue-dark mb-2">Get Your Free Estimate</h2>
            <p className="text-gray-600 mb-6">Fill out the form below and our team will get back to you shortly.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="font-semibold text-gray-700">Full Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:outline-none" required />
              </div>
              <div>
                <label htmlFor="phone" className="font-semibold text-gray-700">Phone Number</label>
                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:outline-none" required />
              </div>
              <div>
                <label htmlFor="email" className="font-semibold text-gray-700">Email Address</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:outline-none" required />
              </div>
              <div>
                <label htmlFor="details" className="font-semibold text-gray-700">How can we help?</label>
                <textarea id="details" rows={3} value={details} onChange={(e) => setDetails(e.target.value)} placeholder="e.g., Leaky faucet in kitchen..." className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:outline-none" required></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-yellow hover:bg-brand-yellow-dark text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md transform transition-transform hover:scale-105 disabled:bg-gray-400"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Submit Request'}
              </button>
            </form>
          </>
        )}
      </div>
       <style>{`
        @keyframes scale-in {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
            animation: scale-in 0.2s ease-out forwards;
        }
    `}</style>
    </div>
  );
};

export default FreeEstimateModal;
