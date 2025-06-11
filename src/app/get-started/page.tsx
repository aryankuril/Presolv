

import React from 'react';
import Link from 'next/link';

export default function GetStarted() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#898989] to-[#232323] bg-opacity-20 backdrop-blur-xl rounded-[45px] p-8 md:p-12 border border-[rgba(79,172,254,0.5)] shadow-[0px_2px_4px_rgba(79,172,254,1)]">
          <h1 className="text-4xl md:text-5xl font-futura text-white text-center mb-8">
            Get Started with<br />
            <span className="text-[#FBB04C]">ODR Certification</span>
          </h1>
          
          <p className="text-white text-xl mb-12 text-center">
            Complete the form below to begin your journey in Online Dispute Resolution.
          </p>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="fullname" className="block text-white mb-2">Full Name</label>
              <input 
                type="text" 
                id="fullname" 
                className="w-full bg-[#0A0A0A] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FBB04C]" 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-[#0A0A0A] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FBB04C]" 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full bg-[#0A0A0A] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FBB04C]" 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="profession" className="block text-white mb-2">Profession</label>
              <select 
                id="profession" 
                className="w-full bg-[#0A0A0A] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FBB04C]" 
                required
              >
                <option value="">Select your profession</option>
                <option value="legal">Legal Professional</option>
                <option value="student">Student/Fresher</option>
                <option value="academic">Academic/Researcher</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-gradient-to-b from-[#007AFF] to-[#007AFF] rounded-full py-4 px-6 text-white uppercase flex items-center justify-center gap-2 relative overflow-hidden group"
              >
                <span className="relative z-10">Register Now</span>
                <div className="absolute top-0 left-0 w-full h-full bg-[#007AFF] rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#ADD4FF] rounded-full opacity-30 blur-[60px] group-hover:opacity-50 transition-opacity"></div>
              </button>
            </div>
          </form>
          
          <div className="mt-8 text-center">
            <Link href="/course-insider" className="text-[#FBB04C] hover:underline">
              ← Back to Course Details
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 