'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    questions: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your interest! We will contact you shortly.');
    setFormData({
      name: '',
      phone: '',
      questions: ''
    });
  };

  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-b from-[#898989] to-[#232323] bg-opacity-20 backdrop-blur-xl rounded-[45px] p-8 md:p-12 border border-[rgba(79,172,254,0.5)] shadow-[0px_2px_4px_rgba(79,172,254,1)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-67 blur-[157px] border border-[rgba(251,176,76,0.6)]"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-futura text-white text-center mb-6">
              Have Questions? We&apos;re Here to Help!
            </h2>
            
            <p className="text-gray-600 mb-8">
              Have questions about our ODR certification program? We&apos;re here to help.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you&apos;re interested in our courses, have questions about pricing, or need help with your account, our team is ready to assist you.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-gray-400 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FBB04C]"
                  required
                />
              </div>
              
              <div className="mb-6">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone No."
                  className="w-full bg-transparent border-b border-gray-400 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FBB04C]"
                  required
                />
              </div>
              
              <div className="mb-12">
                <textarea
                  name="questions"
                  value={formData.questions}
                  onChange={handleChange}
                  placeholder="Any Questions?"
                  className="w-full bg-transparent border-b border-gray-400 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FBB04C] resize-none"
                  rows={4}
                ></textarea>
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-b from-[#007AFF] to-[#007AFF] rounded-full py-3 px-6 text-white uppercase flex items-center gap-2 relative overflow-hidden group"
                >
                  <span className="relative z-10">Submit</span>
                  <div className="absolute top-0 left-0 w-full h-full bg-[#007AFF] rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#ADD4FF] rounded-full opacity-30 blur-[60px] group-hover:opacity-50 transition-opacity"></div>
                  <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 