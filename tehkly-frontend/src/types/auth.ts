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

export const ADMIN_ROLES: UserRole[] = ['ADMIN', 'ROOT'];

export const isAdminRole = (role?: UserRole): boolean => {
  return role ? ADMIN_ROLES.includes(role) : false;
};
