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
  maxUsers: number;
  maxFileSize: number;
  maxBandwidthGB: number;
  allowPublicSharing: boolean;
  allowCustomDomain: boolean;
  supportLevel: string;
  createdAt: string;
  updatedAt: string;
}

export interface AgendeFeatures {
  id: string;
  planId: string;
  maxAppointmentsPerMonth: number;
  maxOrganizations: number;
  maxPointsPerOrganization: number;
  allowCustomBranding: boolean;
  allowWhitelabel: boolean;
  supportLevel: string;
  createdAt: string;
  updatedAt: string;
}

export interface FreelaFeatures {
  id: string;
  planId: string;
  maxProjects: number;
  maxClients: number;
  allowInvoicing: boolean;
  allowTimeTracking: boolean;
  supportLevel: string;
  createdAt: string;
  updatedAt: string;
}

export interface BusinessFeatures {
  id: string;
  planId: string;
  supportLevel: string;
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
  trialDays: number;
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
