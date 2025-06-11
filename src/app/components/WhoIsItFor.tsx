'use client';

import React, { useState } from 'react';

export default function WhoIsItFor() {
  const [activeTab, setActiveTab] = useState('legal');
  
  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="relative mb-16">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 blur-[157px] rounded-full bg-white"></div>
          
          <div className="bg-gradient-to-b from-[#898989] to-[#232323] bg-opacity-20 backdrop-blur-xl rounded-[45px] p-8 md:p-12 border border-[rgba(79,172,254,0.2)] shadow-[0px_2px_4px_rgba(79,172,254,1)] relative">
            <h2 className="text-4xl md:text-5xl font-futura text-center text-white mb-12">
              Are You a <span className={`${activeTab === 'legal' ? 'text-[#F2A649]' : 'text-white cursor-pointer hover:opacity-80'}`} onClick={() => setActiveTab('legal')}>Legal Professional/Access-to-Justice Advocate?</span>
            </h2>
            
            {activeTab === 'legal' && (
              <div className="space-y-4 text-xl text-white">
                <p className="flex items-center gap-3">
                  <span className="text-[#FBB04C] text-2xl">+</span>
                  ODR Panel Membership - Get empaneled as a dispute resolution specialist.
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-[#FBB04C] text-2xl">+</span>
                  Strategic Industry Networking
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-[#FBB04C] text-2xl">+</span>
                  Legal-Tech Collaboration Hub
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-[#FBB04C] text-2xl">+</span>
                  Global Certification in ODR
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-[#FBB04C] text-2xl">+</span>
                  Thought Leadership Webinars
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-[#FBB04C] text-2xl">+</span>
                  Client & Case Referrals
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-[#FBB04C] text-2xl">+</span>
                  Cross-Border Dispute Resolution
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-[#FBB04C] text-2xl">+</span>
                  Regulatory & Policy Frameworks
                </p>
              </div>
            )}
            
            <div className="flex flex-col md:flex-row gap-6 mt-10">
              <div 
                className={`p-8 rounded-[45px] cursor-pointer transition-all ${activeTab === 'student' ? 'bg-gradient-to-b from-[#898989] to-[#232323] border border-[#FBB04C]' : 'bg-gradient-to-b from-[#898989] to-[#232323] border border-[#333]'}`}
                onClick={() => setActiveTab('student')}
              >
                <h3 className={`text-2xl font-medium ${activeTab === 'student' ? 'text-[#FBB04C]' : 'text-white'}`}>
                  Are You a Learner/Fresher Student?
                </h3>
              </div>
              
              <div 
                className={`p-8 rounded-[45px] cursor-pointer transition-all ${activeTab === 'academic' ? 'bg-gradient-to-b from-[#898989] to-[#232323] border border-[#FBB04C]' : 'bg-gradient-to-b from-[#898989] to-[#232323] border border-[#333]'}`}
                onClick={() => setActiveTab('academic')}
              >
                <h3 className={`text-2xl font-medium ${activeTab === 'academic' ? 'text-[#FBB04C]' : 'text-white'}`}>
                  Are You an Academician/Entrepreneur/Innovator?
                </h3>
              </div>
              
              <div 
                className={`p-8 rounded-[45px] cursor-pointer transition-all ${activeTab === 'legal' ? 'bg-gradient-to-b from-[#898989] to-[#232323] border border-[#FBB04C]' : 'bg-gradient-to-b from-[#898989] to-[#232323] border border-[#333]'}`}
                onClick={() => setActiveTab('legal')}
              >
                <h3 className={`text-2xl font-medium ${activeTab === 'legal' ? 'text-[#FBB04C]' : 'text-white'}`}>
                  Are You a Legal Professional/Access-to-Justice Advocate?
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 