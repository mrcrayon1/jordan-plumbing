import React, { useState } from 'react';
import { getPlumbingAdvice } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [problem, setProblem] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!problem.trim()) {
      setError('Please describe your plumbing issue.');
      return;
    }
    setError('');
    setIsLoading(true);
    setResponse('');

    try {
      const advice = await getPlumbingAdvice(problem);
      setResponse(advice);
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="py-20 bg-brand-blue-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Plumbing Problem? Get Instant Advice.
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Describe your issue below, and our AI assistant will suggest the likely service you need. For a professional diagnosis, always call our experts.
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="problem-description" className="sr-only">
                Describe your plumbing problem
              </label>
              <textarea
                id="problem-description"
                rows={4}
                className="w-full p-4 text-gray-800 rounded-lg shadow-inner focus:ring-2 focus:ring-brand-yellow focus:outline-none"
                placeholder="e.g., 'My kitchen sink is draining very slowly and making gurgling noises.'"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                disabled={isLoading}
              ></textarea>
              {error && <p className="mt-2 text-sm text-yellow-300">{error}</p>}
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-brand-yellow hover:bg-brand-yellow-dark text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transform transition-transform hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </div>
                ) : (
                  'Get AI-Powered Advice'
                )}
              </button>
            </div>
          </form>

          {response && (
            <div className="mt-8 p-6 bg-brand-blue rounded-lg text-left">
              <h4 className="font-bold text-lg mb-2 text-yellow-300">Our Recommendation:</h4>
              <p className="whitespace-pre-wrap">{response}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;