'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import Api from '@/services/Api';

export type UserRole = 'ADMIN' | 'ROOT' | 'USER' | 'SUPER_ADMIN';

export interface User {
  id: string;
  email: string;
  name: string;
  phoneNumber?: string;
  birthDate?: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  isCheckingAuth: boolean;
  isAdmin: boolean;
  userPhoto?: string;
  signOut: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const isAdmin = user?.role === 'ADMIN' || user?.role === "SUPER_ADMIN" || user?.role === 'ROOT';

  const checkAuth = useCallback(async () => {
    try {
      setIsCheckingAuth(true);
      console.log('[AuthContext] Checking authentication...');
      const response = await Api.getMe();
      
      if (response?.data) {
        console.log('[AuthContext] User authenticated:', response.data);
        setUser(response.data);
        setIsLoggedIn(true);
      } else {
        console.log('[AuthContext] No user data received');
        setUser(null);
        setIsLoggedIn(false);
      }
    } catch (error: any) {
      console.error('[AuthContext] Auth check failed:', error?.response?.status, error?.message);
      setUser(null);
      setIsLoggedIn(false);
    } finally {
      setIsCheckingAuth(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      await Api.signout();
      setUser(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error signing out:', error);
      setUser(null);
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const value: AuthContextType = {
    user,
    isLoggedIn,
    isCheckingAuth,
    isAdmin,
    userPhoto: user?.id ? `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}` : undefined,
    signOut,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
