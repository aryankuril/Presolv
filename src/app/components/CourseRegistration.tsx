import React from 'react';
import Link from 'next/link';

export default function CourseRegistration() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Course Registration</h2>
          <p className="text-xl text-gray-300">Secure your place in this transformative learning experience</p>
        </div>
        
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-gray-800 rounded-[30px] p-8 max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white">Advanced ODR Course</h3>
              <p className="text-gray-300">5 modules • 10 weeks • Certificate</p>
            </div>
            <div className="text-right">
              <div className="inline-block bg-blue-600 px-3 py-1 rounded-full text-sm text-white mb-2">25% OFF</div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 line-through">$999</span>
                <span className="text-2xl font-bold text-white">$749</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
                <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-gray-200">Full access to all course modules</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
                <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-gray-200">Exclusive community membership</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
                <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-gray-200">Live Q&A sessions with industry experts</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
                <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-gray-200">Verified digital certificate</span>
            </div>
          </div>
          
          <Link 
            href="/register"
            className="block w-full bg-[#007AFF] text-white text-center py-3 px-6 rounded-full text-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Register Now
          </Link>
          
          <p className="text-center text-gray-400 mt-4">
            Limited seats available. Registration closes in 3 days.
          </p>
        </div>
      </div>
    </section>
  );
} 