"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { login, signup, SignupData } from "../lib/auth";
import { useAuth } from "../contexts/AuthContext";
import Button from "@/app/components/Button";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [signupData, setSignupData] = useState<SignupData>({
    name: "",
    phone: "",
    email: "",
    password: "",
    state: "",
  });

  // Redirect if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const result = await login(loginData.email, loginData.password);

      if (result.success) {
        if (loginData.rememberMe) {
          localStorage.setItem("remember_me", "true");
        }
        setSuccess("Login successful! Redirecting...");
        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else {
        setError(result.error || "Failed to login");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    // Validate required fields
    if (
      !signupData.name ||
      !signupData.phone ||
      !signupData.email ||
      !signupData.password
    ) {
      setError("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signupData.email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    // Validate password length
    if (signupData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      setIsLoading(false);
      return;
    }

    try {
      const result = await signup(signupData);

      if (result.success) {
        setSuccess("Account created successfully! Please login to continue.");
        setTimeout(() => {
          router.push("/");
        }, 1500);
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
    <div className="min-h-screen flex flex-col md:flex-row items-start justify-center bg-[#0A0A0A] py-8 px-2 gap-8">
      {/* Video Section - hidden on mobile */}
      <div className="hidden md:flex w-full max-w-3xl flex-col items-center relative min-h-[300px] mt-15">
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
      </div>

      {/* Form Section */}
      <div className="w-full max-w-[480px] p-8 flex flex-col items-center justify-center bg-transparent">
        <div className="flex justify-between items-center mb-12 w-full">

          <div className="flex gap-6">
            <button
              onClick={() => {
                setActiveTab("login");
                setError(null);
                setSuccess(null);
              }}
              className={`px-8 py-2 rounded-full text-[14px] font-bold transition-colors ${
                activeTab === "login"
                  ? "bg-[#FBB04C] text-black"
                  : "text-white hover:text-gray-300"

              }`}
            >
              Login
            </button>

            <button
              onClick={() => {
                setActiveTab("signup");
                setError(null);
                setSuccess(null);
              }}
              className={`px-8 py-2 rounded-full text-[14px] font-bold transition-colors ${
                activeTab === "signup"
                  ? "bg-[#FBB04C] text-black"
                  : "text-white hover:text-gray-300"

              }`}
            >
              Signup
            </button>
          </div>
        </div>

        <div className="flex-grow flex flex-col justify-center w-full">
          {activeTab === "login" ? (
            <>
              <h2 className="text-[40px] font-bold text-white mb-2">
                Welcome Back!
              </h2>
              <p className="text-[#FFFFFFB2] text-[14px] mb-12">
                Login to your account
              </p>

              {error && (
                <div className="bg-red-900/30 border border-red-500 text-red-300 px-4 py-3 rounded-lg mb-8">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-green-900/30 border border-green-500 text-green-300 px-4 py-3 rounded-lg mb-8">
                  {success}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-8">
                <div>
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full bg-transparent border-b border-[#FFFFFF33] px-0 py-3 text-white placeholder-[#FFFFFF80] focus:outline-none focus:border-[#FBB04C] text-[14px]"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                    required
                    autoComplete="email"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password*"
                    className="w-full bg-transparent border-b border-[#FFFFFF33] px-0 py-3 text-white placeholder-[#FFFFFF80] focus:outline-none focus:border-[#FBB04C] text-[14px]"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    required
                    autoComplete="current-password"
                    disabled={isLoading}
                  />
                </div>

                <div className="flex justify-between items-center pt-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 rounded border-[#FFFFFF33] bg-transparent checked:bg-[#FBB04C] checked:border-[#FBB04C] focus:ring-0 focus:ring-offset-0"
                      checked={loginData.rememberMe}
                      onChange={(e) =>
                        setLoginData({
                          ...loginData,
                          rememberMe: e.target.checked,
                        })
                      }
                      disabled={isLoading}
                    />
                    <label
                      htmlFor="remember"
                      className="text-[12px] text-[#FFFFFFB2]"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    href="/auth/forgot-password"
                    className="text-[12px] text-[#FBB04C] hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#4285F4] text-white rounded-full py-8 px-20 flex items-center justify-center gap-2 hover:bg-[#4285F4]/90 text-[18px] font-medium mt-8 h-[60px]"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      Logging in...
                    </span>
                  ) : (

                    <span className="flex items-center gap-2 font-bold">
                      <strong>LOGIN</strong>

                    </span>
                  )}
                </Button>

                <p className="text-center text-[#FFFFFFB2] text-[14px]">
                  Don&apos;t have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setActiveTab("signup")}
                    className="text-[#FBB04C] hover:underline"
                  >
                    Sign up
                  </button>
                </p>
              </form>
            </>
          ) : (
            <>
              <h3 className="text-[40px] font-bold text-white mb-2">
                Begin Your ODR Journey
              </h3>
              <p className="text-[#FFFFFFB2] text-[14px] mb-12">
                Register Your Account
              </p>

              {error && (
                <div className="bg-red-900/30 border border-red-500 text-red-300 px-4 py-3 rounded-lg mb-8">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-green-900/30 border border-green-500 text-green-300 px-4 py-3 rounded-lg mb-8">
                  {success}
                </div>
              )}

              <form onSubmit={handleSignup} className="space-y-8">
                <div>
                  <input
                    type="text"
                    placeholder="Name*"
                    className="w-full bg-transparent border-b border-[#FFFFFF33] px-0 py-3 text-white placeholder-[#FFFFFF80] focus:outline-none focus:border-[#FBB04C] text-[14px]"
                    value={signupData.name}
                    onChange={(e) =>
                      setSignupData({ ...signupData, name: e.target.value })
                    }
                    required
                    autoComplete="name"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone No.*"
                    className="w-full bg-transparent border-b border-[#FFFFFF33] px-0 py-3 text-white placeholder-[#FFFFFF80] focus:outline-none focus:border-[#FBB04C] text-[14px]"
                    value={signupData.phone}
                    onChange={(e) =>
                      setSignupData({ ...signupData, phone: e.target.value })
                    }
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full bg-transparent border-b border-[#FFFFFF33] px-0 py-3 text-white placeholder-[#FFFFFF80] focus:outline-none focus:border-[#FBB04C] text-[14px]"
                    value={signupData.email}
                    onChange={(e) =>
                      setSignupData({ ...signupData, email: e.target.value })
                    }
                    required
                    autoComplete="email"
                    disabled={isLoading}
                  />
                </div>

                <div className="relative">
                  <select
                    className="w-full bg-transparent border-b border-[#FFFFFF33] px-0 py-3 text-[#FFFFFF80] focus:outline-none focus:border-[#FBB04C] appearance-none text-[14px]"
                    value={signupData.state}
                    onChange={(e) =>
                      setSignupData({ ...signupData, state: e.target.value })
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
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        width="35"
                        height="35"
                        fill="url(#pattern0_902_4)"
                      />
                      <defs>
                        <pattern
                          id="pattern0_902_4"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use href="#image0_902_4" transform="scale(0.01)" />
                        </pattern>
                        <image
                          id="image0_902_4"
                          width="100"
                          height="100"
                          preserveAspectRatio="none"
                          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEO0lEQVR4nO2Zy08TURTGZ6MuffwD6tbHkiihGheoC8S/wkRNjPja+Ni4I0ELK8XoympbyspH8IHSuNIoEilWQB0U0IgtGC1zF7r5zDkFlMSkG8sZpt8vOclkGJLh+829596L5xFCCCGEEEIIIYQQQgghhBBCyAK44tXhsreL5VU/gyteXcVPD51eHp0eWN5SZJCnkM5QfWwUAnsJFAL74CkE9mFTCOwDphDYh0ohsA+SQmAfHoXAPjAKgX1IFBKCYEAh9mEgBMWjE9hLoBDYB08hsA+bQmAfMIXAPlQKgX2QFIJaFfLr+fmun/2tT1itVc9Asq4oxDmXd86B5ZYig3zkhJRKAXy/oCXX1u9Tk0KCwCGReIXGxiRWrGjDunUdWitXtum9GzcG9Rnr96wJIb5fQH39dWzdeg2HD/dgaOgzRkamMDo6pdeHDvVgy5ZriMUSGBsrmr9vpIX4fgHr11/C/v3dGB+fxvT0D7x4MaHBf/hQRH//JL59K+nP9u3LYMOGS3rf+r0jKSQInI4MkfHmzRfMzgbo6RnFrVvDePlyEgMDk7h7dwT37r3VZ4eHp9Dc3K0jJcTT1/IVkki80mlqYmJGA06lcshmfaRSQ4jHn+Lixafo7s7rvXR6SIXJs5s3X8XNm4Pm7x85IY2NSe0ZMzM/dCTcv/8WZ89mcfJkL44ff4gTJ3r1Wu49fuzrM8Xid+0pe/akzN8/UkJKpQCrVl3Qpi194vbtYaTTORVw7lwWLS0PtM6cyeLUqV4dITKVybODg5/1d0O6JF6eQt6/L2Dt2g5dSUmTln7R3v4Mx4491PK8Vi25FjHys4GBT/qsrMDWrGnXBYH13xEZIb5f0FAl3LKQTxq6hH/06GIhUmUhk3NCvmL16nhYl8DLecpqQy5XnrJkOkomcws9Q3qIiDh9uk97iTR8mdb+TFltnLL+t5Tdu1P/bOoiQEqkSP+Qe319i5v63r1p848qUiPEOafHIbID/3vZ++jROx0psuyNx58hk3m9aNk7Pj6DTZuu6rPW7x85IUHgdJPX3JxZ2BjKKClvDCe0Z9y5Ux458xvDpqYu7NzJjWHVpIyNFfU4RI5F5HhEpi/pE/NHJ3KMIkcnHz9Oo6kpg40bL+u19ccUyRHi5kqC37EjoTtw6SnS6GU5LCUNXHqGTFMyMkIuIxpC3Nz0JcchsgOXI3fZo8iyWK7lXoh7RjSFuL9Kesn8P6jk2vp9al6Isw+1ukKOZFq6DiQPPmEdrHoGknVFIdvjDfnt8RhYsSXIoKHyCKGQ2BJ+jBSCcI18CoG9BAqBffAUAvuwKQT2AVMI7EOlENgHSSGwD49CYB8YhcA+JAoJQTAxCrEPIxaC4tEJ7CVQCOyDpxDYh00hsA+YQmAfKoWgpoTUd9TXbWtv2MVqqHoGknVFIYQQQgghhBBCCCGEEEIIIYQQr3b4DYcy3yzgaA4GAAAAAElFTkSuQmCC"
                        />
                      </defs>
                    </svg>

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
                    value={signupData.password}
                    onChange={(e) =>
                      setSignupData({ ...signupData, password: e.target.value })
                    }
                    required
                    autoComplete="new-password"
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
                  <label
                    htmlFor="terms"
                    className="text-[12px] text-[#FFFFFFB2]"
                  >
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

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#4285F4] text-white rounded-full py-8 px-20 flex items-center justify-center gap-2 hover:bg-[#4285F4]/90 text-[18px] font-medium mt-8 h-[60px]"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Creating Account...
                    </span>
                  ) : (

                    <span className="flex items-center gap-2 font-bold">
                      <strong>GET STARTED</strong>

                    </span>
                  )}
                </Button>

                <p className="text-center text-[#FFFFFFB2] text-[14px]">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setActiveTab("login")}
                    className="text-[#FBB04C] hover:underline"
                  >
                    Log in
                  </button>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
