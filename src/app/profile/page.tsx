"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";
import { logout } from "../lib/auth";
import Image from "next/image";
import Button from "@/app/components/Button";

// Duplicate UserData interface for type safety
interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: string;
  profilePicture?: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    // If not loading and no user, redirect to login
    if (!loading && !user) {
      router.replace("/auth");
    }
    // Load user data from localStorage
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("user_data");
      if (stored) setUserData(JSON.parse(stored));
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      router.push("/auth");
    } catch (error) {
      console.error("Logout error:", error);

      router.push("/auth");
    } finally {
      setIsLoggingOut(false);
    }
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        No user data found.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] text-white">
      <div className="bg-[#232323] rounded-2xl p-8 shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>
        <div className="space-y-4 mb-8">
          <div>
            <span className="font-semibold">Name:</span> {userData.name}
          </div>
          <div>
            <span className="font-semibold">Email:</span> {userData.email}
          </div>
          <div>
            <span className="font-semibold">Phone:</span> {userData.phone}
          </div>
          <div>
            <span className="font-semibold">Role:</span> {userData.role}
          </div>
          <div>
            <span className="font-semibold">Status:</span> {userData.status}
          </div>
          {userData.profilePicture && (
            <div>
              <Image
                width={100}
                height={100}
                src={userData.profilePicture}
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <Button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg py-3 px-6 flex items-center justify-center gap-2 transition-colors"
          >
            {isLoggingOut ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4"
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
                Logging out...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 17L21 12L16 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12H9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Logout
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
