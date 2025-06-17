"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";
import {
  UserData,
  getBackendUser,
  logout as authLogout,
  refreshToken,
  getStoredUserData,
} from "../lib/auth";

interface AuthContextProps {
  user: User | null;
  userData: UserData | null;
  loading: boolean;
  isLoggedIn: boolean;
  logout: () => Promise<void>;
  refreshUserData: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  userData: null,
  loading: true,
  isLoggedIn: false,
  logout: async () => {},
  refreshUserData: async () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUserDataFetch, setLastUserDataFetch] = useState<number>(0);

  const refreshUserData = async () => {
    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const token = await currentUser.getIdToken();
        const backendUserData = await getBackendUser(token);
        setUserData(backendUserData);
        localStorage.setItem("user_data", JSON.stringify(backendUserData));
        setLastUserDataFetch(Date.now());
      }
    } catch (error) {
      console.error("Error refreshing user data:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        setUser(firebaseUser);

        if (firebaseUser) {
          const token = await firebaseUser.getIdToken();
          localStorage.setItem("firebase_token", token);
          localStorage.setItem("firebase_uid", firebaseUser.uid);

          const storedUserData = getStoredUserData();
          if (storedUserData) {
            setUserData(storedUserData);

            const now = Date.now();
            const userDataTimestamp = localStorage.getItem(
              "user_data_timestamp"
            );
            const isRecentData =
              userDataTimestamp && now - parseInt(userDataTimestamp) < 30000;

            if (!isRecentData) {
              try {
                const backendUserData = await getBackendUser(token);
                setUserData(backendUserData);
                localStorage.setItem(
                  "user_data",
                  JSON.stringify(backendUserData)
                );
                localStorage.setItem("user_data_timestamp", now.toString());
                setLastUserDataFetch(now);
              } catch (error) {
                console.error("Error getting user from backend:", error);
                if (storedUserData) {
                  console.log("Using stored user data due to backend error");
                } else {
                  await authLogout();
                  setUserData(null);
                }
              }
            }
          } else {
            try {
              const backendUserData = await getBackendUser(token);
              setUserData(backendUserData);
              localStorage.setItem(
                "user_data",
                JSON.stringify(backendUserData)
              );
              localStorage.setItem(
                "user_data_timestamp",
                Date.now().toString()
              );
              setLastUserDataFetch(Date.now());
            } catch (error) {
              console.error("Error getting user from backend:", error);
              await authLogout();
              setUserData(null);
            }
          }
        } else {
          setUserData(null);
          localStorage.removeItem("firebase_token");
          localStorage.removeItem("firebase_uid");
          localStorage.removeItem("user_data");
          localStorage.removeItem("user_data_timestamp");
          localStorage.removeItem("remember_me");
        }
      } catch (error) {
        console.error("Auth state change error:", error);
        setUserData(null);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Token refresh logic
  useEffect(() => {
    if (user) {
      const interval = setInterval(async () => {
        try {
          await refreshToken();
        } catch (error) {
          console.error("Token refresh failed:", error);
        }
      }, 45 * 60 * 1000);

      return () => clearInterval(interval);
    }
  }, [user]);

  const logout = async () => {
    try {
      await authLogout();
      setUser(null);
      setUserData(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const isLoggedIn = !!(user && userData);

  return (
    <AuthContext.Provider
      value={{
        user,
        userData,
        loading,
        isLoggedIn,
        logout,
        refreshUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
