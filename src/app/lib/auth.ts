import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  User,
  AuthError,
} from "firebase/auth";
import { auth } from "./firebase";

export interface UserData {
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

export interface AuthResponse {
  success: boolean;
  error: string | null;
  user?: UserData;
}

export interface SignupData {
  name: string;
  phone: string;
  email: string;
  password: string;
  state?: string;
}

const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export async function createBackendUser(
  firebaseUser: User,
  token: string,
  signupData: SignupData
): Promise<UserData> {
  const response = await fetch(`${BACKEND_API_URL}/user`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: firebaseUser.uid,
      email: firebaseUser.email,
      name: signupData.name,
      phone: signupData.phone,
      password: signupData.password, // Note: Don't hash on frontend, let backend handle it
      role: "USER",
      status: "ACTIVE",
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Failed to create user in backend");
  }

  return await response.json();
}

export async function getBackendUser(token: string): Promise<UserData> {
  const response = await fetch(`${BACKEND_API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("USER_NOT_FOUND");
    }
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Failed to get user from backend");
  }

  return await response.json();
}

// Login function
export async function login(
  email: string,
  password: string
): Promise<AuthResponse> {
  try {
    if (!email || !password) {
      return {
        error: "Please provide both email and password",
        success: false,
      };
    }

    // Step 1: Authenticate with Firebase
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Step 2: Get Firebase ID token
    const idToken = await user.getIdToken();

    // Step 3: Store Firebase token and UID
    localStorage.setItem("firebase_token", idToken);
    localStorage.setItem("firebase_uid", user.uid);

    // Step 4: Get user from backend
    const userData = await getBackendUser(idToken);

    // Step 5: Store user data
    localStorage.setItem("user_data", JSON.stringify(userData));
    localStorage.setItem("user_data_timestamp", Date.now().toString());

    return {
      success: true,
      error: null,
      user: userData,
    };
  } catch (error: unknown) {
    console.error("Login error:", error);

    // Handle Firebase auth errors
    if (error instanceof Error && "code" in error) {
      const authError = error as AuthError;
      if (authError.code === "auth/wrong-password") {
        return {
          error: "Incorrect password. Please try again or reset your password.",
          success: false,
        };
      } else if (authError.code === "auth/user-not-found") {
        return {
          error: "No account found with this email. Please sign up first.",
          success: false,
        };
      } else if (authError.code === "auth/invalid-email") {
        return { error: "Please enter a valid email address.", success: false };
      } else if (authError.code === "auth/too-many-requests") {
        return {
          error: "Too many failed attempts. Please try again later.",
          success: false,
        };
      }
    }

    // Handle backend user not found
    if (error instanceof Error && error.message === "USER_NOT_FOUND") {
      return {
        error: "User not found in our system. Please contact support.",
        success: false,
      };
    }

    return {
      error:
        error instanceof Error
          ? error.message
          : "Failed to login. Please try again.",
      success: false,
    };
  }
}

// Signup function
export async function signup(signupData: SignupData): Promise<AuthResponse> {
  try {
    const { email, password, name, phone } = signupData;

    if (!email || !password || !name || !phone) {
      return {
        error: "Please provide all required fields",
        success: false,
      };
    }

    // Step 1: Create user with Firebase
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Step 2: Get Firebase ID token
    const idToken = await user.getIdToken();

    // Step 3: Store Firebase token and UID
    localStorage.setItem("firebase_token", idToken);
    localStorage.setItem("firebase_uid", user.uid);

    // Step 4: Create user in backend
    const userData = await createBackendUser(user, idToken, signupData);

    // Step 5: Store user data
    localStorage.setItem("user_data", JSON.stringify(userData));
    localStorage.setItem("user_data_timestamp", Date.now().toString());

    return {
      success: true,
      error: null,
      user: userData,
    };
  } catch (error: unknown) {
    console.error("Signup error:", error);

    // Handle Firebase auth errors
    if (error instanceof Error && "code" in error) {
      const authError = error as AuthError;
      if (authError.code === "auth/email-already-in-use") {
        return {
          error: "This email is already registered. Please try logging in.",
          success: false,
        };
      } else if (authError.code === "auth/weak-password") {
        return {
          error: "Password should be at least 6 characters long.",
          success: false,
        };
      } else if (authError.code === "auth/invalid-email") {
        return { error: "Please enter a valid email address.", success: false };
      }
    }

    return {
      error:
        error instanceof Error
          ? error.message
          : "Failed to create account. Please try again.",
      success: false,
    };
  }
}

// Logout function
export async function logout(): Promise<void> {
  try {
    await firebaseSignOut(auth);

    // Clear all stored data
    localStorage.removeItem("firebase_token");
    localStorage.removeItem("firebase_uid");
    localStorage.removeItem("user_data");
    localStorage.removeItem("user_data_timestamp");
    localStorage.removeItem("remember_me");
  } catch (error) {
    console.error("Logout error:", error);
    // Even if Firebase logout fails, clear local storage
    localStorage.removeItem("firebase_token");
    localStorage.removeItem("firebase_uid");
    localStorage.removeItem("user_data");
    localStorage.removeItem("user_data_timestamp");
    localStorage.removeItem("remember_me");
  }
}

export async function refreshToken(): Promise<string | null> {
  try {
    const user = auth.currentUser;
    if (user) {
      const token = await user.getIdToken(true);
      localStorage.setItem("firebase_token", token);
      return token;
    }
    return null;
  } catch (error) {
    console.error("Token refresh error:", error);
    return null;
  }
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  const token = localStorage.getItem("firebase_token");
  const userData = localStorage.getItem("user_data");
  return !!(token && userData);
}

// Get stored user data
export function getStoredUserData(): UserData | null {
  try {
    const userData = localStorage.getItem("user_data");
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Error parsing stored user data:", error);
    return null;
  }
}
