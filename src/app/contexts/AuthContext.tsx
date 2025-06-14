'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  isLoggedIn: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
  isLoggedIn: false,
  logout: async () => {},
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

  const logout = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem('user_data');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider value={{ user, loading, isLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
} 