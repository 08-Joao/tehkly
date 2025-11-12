'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireAdmin = false,
}) => {
  const router = useRouter();
  const { isLoggedIn, isCheckingAuth, isAdmin } = useAuth();

  useEffect(() => {
    if (!isCheckingAuth) {
      if (!isLoggedIn) {
        router.push('/');
        return;
      }

      if (requireAdmin && !isAdmin) {
        router.push('/');
        return;
      }
    }
  }, [isCheckingAuth, isLoggedIn, isAdmin, requireAdmin, router]);

  if (isCheckingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-muted-foreground">Verificando permissões...</p>
        </div>
      </div>
    );
  }

  if (!isLoggedIn || (requireAdmin && !isAdmin)) {
    return null;
  }

  return <>{children}</>;
};
