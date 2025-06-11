"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";
import Image from "next/image";
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

  if (loading || !user) {
    return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  if (!userData) {
    return <div className="min-h-screen flex items-center justify-center text-white">No user data found.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] text-white">
      <div className="bg-[#232323] rounded-2xl p-8 shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>
        <div className="space-y-4">
          <div><span className="font-semibold">Name:</span> {userData.name}</div>
          <div><span className="font-semibold">Email:</span> {userData.email}</div>
          <div><span className="font-semibold">Phone:</span> {userData.phone}</div>
          <div><span className="font-semibold">Role:</span> {userData.role}</div>
          <div><span className="font-semibold">Status:</span> {userData.status}</div>
          {userData.profilePicture && (
            <div>
              <Image width={100} height={100} src={userData.profilePicture} alt="Profile" className="w-24 h-24 rounded-full mx-auto" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 