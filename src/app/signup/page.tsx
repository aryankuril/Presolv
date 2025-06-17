"use client";

import React, { useState } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { signup, SignupData } from "../lib/auth";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const [formData, setFormData] = useState<SignupData>({
    name: "",
    phone: "",
    email: "",
    state: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  // Redirect if already logged in
  React.useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.password
    ) {
      setError("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    const phoneRegex = /^[\+]?[1-9][\d]{3,14}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      setError("Please enter a valid phone number");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      setIsLoading(false);
      return;
    }

    try {
      const result = await signup(formData);

      if (result.success) {
        setSuccess("Account created successfully! Redirecting...");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setError(result.error || "Failed to create account");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
            position: "absolute",
            top: "50px",

            left: "50px",
            display: "block",
            width: "741.188px",
            height: "416px",
            aspectRatio: "741.19/416.00",
          }}
        >
          <source src="/video/Presolve+Teaser.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-8 left-8 bg-white/90 p-4 rounded-lg max-w-md">
          <h3 className="text-black text-xl font-semibold">
            Justice Kannan Krishnamoorthy
          </h3>
          <p className="text-gray-700">
            Judge (Retd.) Punjab & Haryana High Court
          </p>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-[45%] p-8 lg:p-12 flex flex-col">
        <div className="flex justify-between items-center mb-12">
          <div className="flex gap-6">
            <Link
              href="/auth"
              className="text-white hover:text-gray-300 text-[14px] font-medium"
            >
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
          <h1 className="text-[44px] font-bold text-white mb-2">
            Begin Your ODR Journey
          </h1>
          <p className="text-[#FFFFFFB2] text-[14px] mb-12">
            Register Your Account
          </p>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-green-400 text-sm">{success}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="text"
                autoComplete="name"
                placeholder="Name*"
                className="w-full bg-transparent border-b border-[#FFFFFF33] px-0 py-3 text-white placeholder-[#FFFFFF80] focus:outline-none focus:border-[#FBB04C] text-[14px]"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone No.*"
                className="w-full bg-transparent border-b border-[#FFFFFF33] px-0 py-3 text-white placeholder-[#FFFFFF80] focus:outline-none focus:border-[#FBB04C] text-[14px]"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <input
                type="email"
                autoComplete="email"
                placeholder="Email*"
                className="w-full bg-transparent border-b border-[#FFFFFF33] px-0 py-3 text-white placeholder-[#FFFFFF80] focus:outline-none focus:border-[#FBB04C] text-[14px]"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                disabled={isLoading}
              />
            </div>

            <div className="relative">
              <select
                className="w-full bg-transparent border-b border-[#FFFFFF33] px-0 py-3 text-[#FFFFFF80] focus:outline-none focus:border-[#FBB04C] appearance-none text-[14px]"
                value={formData.state}
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
                disabled={isLoading}
              >
                <option value="" className="bg-[#0A0A0A]">
                  State (Optional)
                </option>
                <option value="andhra-pradesh" className="bg-[#0A0A0A]">
                  Andhra Pradesh
                </option>
                <option value="arunachal-pradesh" className="bg-[#0A0A0A]">
                  Arunachal Pradesh
                </option>
                <option value="assam" className="bg-[#0A0A0A]">
                  Assam
                </option>
                <option value="bihar" className="bg-[#0A0A0A]">
                  Bihar
                </option>
                <option value="chhattisgarh" className="bg-[#0A0A0A]">
                  Chhattisgarh
                </option>
                <option value="goa" className="bg-[#0A0A0A]">
                  Goa
                </option>
                <option value="gujarat" className="bg-[#0A0A0A]">
                  Gujarat
                </option>
                <option value="haryana" className="bg-[#0A0A0A]">
                  Haryana
                </option>
                <option value="himachal-pradesh" className="bg-[#0A0A0A]">
                  Himachal Pradesh
                </option>
                <option value="jharkhand" className="bg-[#0A0A0A]">
                  Jharkhand
                </option>
                <option value="karnataka" className="bg-[#0A0A0A]">
                  Karnataka
                </option>
                <option value="kerala" className="bg-[#0A0A0A]">
                  Kerala
                </option>
                <option value="madhya-pradesh" className="bg-[#0A0A0A]">
                  Madhya Pradesh
                </option>
                <option value="maharashtra" className="bg-[#0A0A0A]">
                  Maharashtra
                </option>
                <option value="manipur" className="bg-[#0A0A0A]">
                  Manipur
                </option>
                <option value="meghalaya" className="bg-[#0A0A0A]">
                  Meghalaya
                </option>
                <option value="mizoram" className="bg-[#0A0A0A]">
                  Mizoram
                </option>
                <option value="nagaland" className="bg-[#0A0A0A]">
                  Nagaland
                </option>
                <option value="odisha" className="bg-[#0A0A0A]">
                  Odisha
                </option>
                <option value="punjab" className="bg-[#0A0A0A]">
                  Punjab
                </option>
                <option value="rajasthan" className="bg-[#0A0A0A]">
                  Rajasthan
                </option>
                <option value="sikkim" className="bg-[#0A0A0A]">
                  Sikkim
                </option>
                <option value="tamil-nadu" className="bg-[#0A0A0A]">
                  Tamil Nadu
                </option>
                <option value="telangana" className="bg-[#0A0A0A]">
                  Telangana
                </option>
                <option value="tripura" className="bg-[#0A0A0A]">
                  Tripura
                </option>
                <option value="uttar-pradesh" className="bg-[#0A0A0A]">
                  Uttar Pradesh
                </option>
                <option value="uttarakhand" className="bg-[#0A0A0A]">
                  Uttarakhand
                </option>
                <option value="west-bengal" className="bg-[#0A0A0A]">
                  West Bengal
                </option>
                <option value="delhi" className="bg-[#0A0A0A]">
                  Delhi
                </option>
              </select>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>

            <div>
              <input
                type="password"
                placeholder="Password*"
                className="w-full bg-transparent border-b border-[#FFFFFF33] px-0 py-3 text-white placeholder-[#FFFFFF80] focus:outline-none focus:border-[#FBB04C] text-[14px]"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                disabled={isLoading}
                minLength={6}
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 rounded border-[#FFFFFF33] bg-transparent checked:bg-[#FBB04C] checked:border-[#FBB04C] focus:ring-0 focus:ring-offset-0"
                required
                disabled={isLoading}
              />
              <label htmlFor="terms" className="text-[12px] text-[#FFFFFFB2]">
                I Agree To{" "}
                <Link
                  href="/privacy-policy"
                  className="text-white hover:underline"
                >
                  Privacy Policy
                </Link>{" "}
                And{" "}
                <Link href="/terms" className="text-white hover:underline">
                  Terms Of Use
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#4285F4] text-white rounded-full py-4 px-6 flex items-center justify-center gap-2 hover:bg-[#4285F4]/90 text-[14px] font-medium mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "CREATING ACCOUNT..." : "GET STARTED ✨"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-[#FFFFFFB2] text-[12px]">
              Already have an account?{" "}
              <Link href="/auth" className="text-[#FBB04C] hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
