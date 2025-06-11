import React from 'react';
import Image from 'next/image';

export default function ReturnOnInvestment() {
  return (
    <section className=" py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-futura text-white mb-8">
              What is my return<br />on investment?
            </h2>
            
            <p className="text-white text-xl mb-8">
              This course is designed for a diverse group of learners and professionals eager to explore the future of dispute resolution
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M20 12V8H6C4.89543 8 4 7.10457 4 6V18C4 19.1046 4.89543 20 6 20H20V16" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 16L20 12L15 8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Internships:</h3>
                  <p className="text-white text-lg">We offer a select group of students a unique 6-week incubation program, providing hands-on experience in Online Dispute Resolution (ODR).</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Scholarships:</h3>
                  <p className="text-white text-lg">We offer merit-based concessions by covering a portion of the course fees for deserving students, subject to the terms of our scholarship program.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 10V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V14" strokeLinecap="round"/>
                    <path d="M15 8L17 10L15 12" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 16L7 14L9 12" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 8L13 16" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">University Offering</h3>
                  <p className="text-white text-lg">We provide opportunities for a continuous knowledge-sharing framework, ensuring ongoing learning and growth for students.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9986 17.1771 21.7655 15.5857 20 15.13" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C17.7699 3.58317 19.0078 5.17799 19.0078 7.005C19.0078 8.83201 17.7699 10.4268 16 10.88" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Exclusive community:</h3>
                  <p className="text-white text-lg">Course participants will join an exclusive ODR community, gaining access to periodic AMA sessions, job opportunities, a legal-tech innovation lab, and more.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <Image
                src="/images/dispute-resolution-illustration.svg"
                alt="Dispute Resolution Illustration"
                width={600}
                height={600}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 