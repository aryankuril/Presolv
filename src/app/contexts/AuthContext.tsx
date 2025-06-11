'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
  isLoggedIn: false,
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider value={{ user, loading, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
} 