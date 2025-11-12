'use client';

import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types/auth';

export const useAuthCheck = () => {
  const { user, isLoggedIn, isAdmin, isCheckingAuth } = useAuth();

  const hasRole = (role: UserRole): boolean => {
    return user?.role === role;
  };

  const hasAnyRole = (roles: UserRole[]): boolean => {
    return user ? roles.includes(user.role) : false;
  };

  const isReady = !isCheckingAuth;

  return {
    user,
    isLoggedIn,
    isAdmin,
    isCheckingAuth,
    isReady,
    hasRole,
    hasAnyRole,
  };
};
