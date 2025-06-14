'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getAuth, sendPasswordResetEmail, AuthError } from 'firebase/auth';
import Button from '@/app/components/Button';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
    } catch (err) {
      const error = err as AuthError;
      if (error.code === 'auth/user-not-found') {
        setError('No account found with this email address.');
      } else if (error.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else if (error.code === 'auth/too-many-requests') {
        setError('Too many attempts. Please try again later.');
      } else {
        setError('Failed to send reset email. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-start justify-center bg-[#0A0A0A] py-8 px-2 gap-1">
      {/* Left Section - Image */}
      <div className="hidden md:flex w-full mt-20  max-w-3xl flex-col items-center justify-center">
        <video
          src="/video/Presolve+Teaser.mp4"
          className="object-cover w-full h-[240px] md:h-[350px] lg:h-[416px] rounded-lg shadow-lg"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        >
          <source src="/video/Presolve+Teaser.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <div className="absolute bottom-4 left-4 bg-white/90 p-4 rounded-lg max-w-md shadow-md">
          <h3 className="text-black text-xl font-semibold">Justice Kannan Krishnamoorthy</h3>
          <p className="text-gray-700">Judge (Retd.) Punjab & Haryana High Court</p>
        </div> */}
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-[45%] p-8 lg:p-12 flex flex-col items-center justify-center">
        <div className="w-full max-w-[480px] mx-auto">
          <div className="flex justify-between items-center">
            <Button>
              <Link 
                href="/auth"
                className="text-white hover:text-gray-300 text-[14px] font-medium"
              >
                Back to Login
              </Link>
            </Button>
          </div>

          <div className="flex-grow flex flex-col justify-center w-full mt-8">
            <h3 className="text-[40px] font-bold text-white mb-2">Reset Password</h3>
            <p className="text-[#FFFFFFB2] text-[14px] mb-10">
              Enter your email address and we&apos;ll send you a link to reset your password.
            </p>

            {error && (
              <div className="bg-red-900/30 border border-red-500 text-red-300 px-4 py-3 rounded-lg mb-8">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-900/30 border border-green-500 text-green-300 px-4 py-3 rounded-lg mb-8">
                Password reset email sent! Please check your inbox.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8 mb-40">
              <div>
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full bg-transparent border-b border-[#FFFFFF33] px-0 py-3 text-white placeholder-[#FFFFFF80] focus:outline-none focus:border-[#FBB04C] text-[14px]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  name="email"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full min-w-[480px] bg-[#4285F4] text-white rounded-full py-4 px-6 flex items-center justify-center gap-2 hover:bg-[#4285F4]/90 text-[14px] font-medium mt-8"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "SEND RESET LINK "
                )}
              </Button>

              <p className="text-center text-[#FFFFFFB2] text-[14px]">
                Remember your password?{' '}
                <Link 
                  href="/auth" 
                  className="text-[#FBB04C] hover:underline"
                >
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 