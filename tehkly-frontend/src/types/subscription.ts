export enum Service {
  CLOUD = 'CLOUD',
  AGENDE = 'AGENDE',
  FREELA = 'FREELA',
  BUSINESS = 'BUSINESS',
}

export enum PlanType {
  MONTHLY = 'MONTHLY',
  QUARTERLY = 'QUARTERLY',
  ANNUAL = 'ANNUAL',
}

export enum SubscriptionStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  CANCELLED = 'CANCELLED',
  EXPIRED = 'EXPIRED',
  SUSPENDED = 'SUSPENDED',
}

export enum UserRole {
  ROOT = 'ROOT',
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface CloudFeatures {
  id: string;
  planId: string;
  storageGB: number;
  createdAt: string;
  updatedAt: string;
}

export interface AgendeFeatures {
  id: string;
  planId: string;
  maxAppointmentsPerMonth: number;
  maxOrganizations: number;
  maxPointsPerOrganization: number;
  createdAt: string;
  updatedAt: string;
}

export interface FreelaFeatures {
  id: string;
  planId: string;
  createdAt: string;
  updatedAt: string;
}

export interface BusinessFeatures {
  id: string;
  planId: string;
  createdAt: string;
  updatedAt: string;
}

export interface SubscriptionPlan {
  id: string;
  service: Service;
  name: string;
  description?: string;
  monthlyPrice: number;
  quarterlyDiscount: number;
  annualDiscount: number;
  isActive: boolean;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
  cloudFeatures?: CloudFeatures;
  agendeFeatures?: AgendeFeatures;
  freelaFeatures?: FreelaFeatures;
  businessFeatures?: BusinessFeatures;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  phoneNumber: string;
  birthDate: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}
