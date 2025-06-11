'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    state: '',
    password: '',
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex bg-[#0A0A0A]">
      {/* Left Section - Video */}
      <div className=" lg:flex lg:w-[55%] relative min-h-[600px]">
        <video
          src="/video/Presolve+Teaser.mp4"
          className="object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          style={{ 
            marginLeft: "40px",
            position: 'absolute',
            top: "50px",

            left : "50px",
            display: 'block',
            width: '741.188px',
            height: '416px',
            aspectRatio: '741.19/416.00'
          }}
        >
          <source src="/video/Presolve+Teaser.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-8 left-8 bg-white/90 p-4 rounded-lg max-w-md">
          <h3 className="text-black text-xl font-semibold">Justice Kannan Krishnamoorthy</h3>
          <p className="text-gray-700">Judge (Retd.) Punjab & Haryana High Court</p>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-[45%] p-8 lg:p-12 flex flex-col">
        <div className="flex justify-between items-center mb-12">
          <div className="flex gap-6">
            <Link href="/login" className="text-white hover:text-gray-300 text-[14px] font-medium">
              Login
            </Link>
            <Link 
              href="/signup"
              className="bg-[#FBB04C] text-black px-8 py-2 rounded-full hover:bg-[#FBB04C]/90 text-[14px] font-medium"
            >
              Signup
            </Link>
          </div>
        </div>

        <div className="flex-grow flex flex-col justify-center max-w-[480px] mx-auto w-full">
          <h1 className="text-[44px]font-bold text-white mb-2">Begin Your ODR Journey</h1>
          <p className="text-[#FFFFFFB2] text-[14px] mb-12">Register Your Account</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="text"
                autoComplete="name"
                placeholder="Name*"
                className="w-full bg-transparent border-b border-[#FFFFFF33] px-0 py-3 text-white placeholder-[#FFFFFF80] focus:outline-none focus:border-[#FBB04C] text-[14px]"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone No.*"
                className="w-full bg-transparent border-b border-[#FFFFFF33] px-0 py-3 text-white placeholder-[#FFFFFF80] focus:outline-none focus:border-[#FBB04C] text-[14px]"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>

            <div>
              <input
                type="email"
                autoComplete="email"
                placeholder="Email*"
                className="w-full bg-transparent border-b border-[#FFFFFF33] px-0 py-3 text-white placeholder-[#FFFFFF80] focus:outline-none focus:border-[#FBB04C] text-[14px]"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="relative">
              <select
                className="w-full bg-transparent border-b border-[#FFFFFF33] px-0 py-3 text-[#FFFFFF80] focus:outline-none focus:border-[#FBB04C] appearance-none text-[14px]"
                value={formData.state}
                onChange={(e) => setFormData({...formData, state: e.target.value})}
                required
              >
                <option value="" className="bg-[#0A0A0A]">State</option>
                <option value="maharashtra" className="bg-[#0A0A0A]">Maharashtra</option>
                <option value="delhi" className="bg-[#0A0A0A]">Delhi</option>
                <option value="karnataka" className="bg-[#0A0A0A]">Karnataka</option>
              </select>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <Image
                  src="/images/india-flag.png"
                  alt="India"
                  width={24}
                  height={16}
                  className="rounded"
                />
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>

            <div>
              <input
                type="password"
                placeholder="Password*"
                className="w-full bg-transparent border-b border-[#FFFFFF33] px-0 py-3 text-white placeholder-[#FFFFFF80] focus:outline-none focus:border-[#FBB04C] text-[14px]"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 rounded border-[#FFFFFF33] bg-transparent checked:bg-[#FBB04C] checked:border-[#FBB04C] focus:ring-0 focus:ring-offset-0"
                checked={formData.agreeToTerms}
                onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
                required
              />
              <label htmlFor="terms" className="text-[12px] text-[#FFFFFFB2]">
                I Agree To <Link href="/privacy-policy" className="text-white hover:underline">Privacy Policy</Link> And <Link href="/terms" className="text-white hover:underline">Terms Of Use</Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4285F4] text-white rounded-full py-4 px-6 flex items-center justify-center gap-2 hover:bg-[#4285F4]/90 text-[14px] font-medium mt-8"
            >
              GET STARTED ✨
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 