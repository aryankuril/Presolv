import React from 'react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="container py-20 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="container absolute inset-0 bg-gradient-to-br from-[#080816] via-[#1B1B35] to-[#080816] opacity-95 z-0"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Transform Your Dispute Resolution Practice
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who have enhanced their careers with our industry-leading ODR certification programs.
          </p>
          
          <div className="bg-[#12121E]/80 p-8 rounded-2xl border border-gray-800 mb-10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Early Bird Registration Now Open
            </h3>
            
            <p className="text-gray-300 mb-6">
              Get 25% off our next cohort starting in June 2023. Limited seats available.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#1D1D2D] p-4 rounded-lg">
                <div className="text-blue-400 text-2xl font-bold mb-1">₹12,999</div>
                <div className="text-gray-400">ODR Fundamentals</div>
              </div>
              
              <div className="bg-[#1D1D2D] p-4 rounded-lg border-2 border-blue-500/30 transform md:scale-110 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <div className="text-blue-400 text-2xl font-bold mb-1">₹24,999</div>
                <div className="text-gray-400">Advanced Certification</div>
              </div>
              
              <div className="bg-[#1D1D2D] p-4 rounded-lg">
                <div className="text-blue-400 text-2xl font-bold mb-1">₹39,999</div>
                <div className="text-gray-400">Enterprise Package</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/registration"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Reserve Your Seat
              </Link>
              
              <Link 
                href="/course-details"
                className="px-8 py-4 bg-transparent border border-gray-600 hover:border-gray-400 text-white font-bold rounded-lg transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                View Course Details
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Money-back guarantee</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Lifetime access to materials</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Internationally recognized certification</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 