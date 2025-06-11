'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut
} from 'firebase/auth';
import { auth } from './firebase';

// Duration for the session cookie (30 days)
const SESSION_DURATION = 30 * 24 * 60 * 60 * 1000;

export interface AuthResponse {
  success: boolean;
  error: string | null;
}

// Login action 
export async function login(prevState: AuthResponse, formData: FormData): Promise<AuthResponse> {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
      return { 
        error: 'Please provide both email and password',
        success: false
      };
    }

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Get ID token for session management
    const idToken = await user.getIdToken();
    
    // Set session cookie
    const cookieStore = await cookies();
    cookieStore.set('session', idToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: SESSION_DURATION,
      path: '/'
    });

    return { 
      success: true,
      error: null
    };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to login';
    return {
      error: errorMessage,
      success: false
    };
  }
}

// Sign up action
export async function signup(prevState: AuthResponse, formData: FormData): Promise<AuthResponse> {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (!email || !password || !confirmPassword) {
      return { 
        error: 'Please provide all required fields',
        success: false
      };
    }

    if (password !== confirmPassword) {
      return { 
        error: 'Passwords do not match',
        success: false
      };
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Get ID token for session management
    const idToken = await user.getIdToken();
    
    // Set session cookie
    const cookieStore = await cookies();
    cookieStore.set('session', idToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: SESSION_DURATION,
      path: '/'
    });

    return { 
      success: true,
      error: null
    };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to sign up';
    return {
      error: errorMessage,
      success: false
    };
  }
}

// Logout action
export async function logout() {
  await firebaseSignOut(auth);
  const cookieStore = await cookies();
  cookieStore.delete('session');
  redirect('/');
} 