// Auto-generated file from prisma schema
export enum UserRole {
  ROOT = 'ROOT',
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  USER = 'USER',
}

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

export enum PaymentStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  IN_PROCESS = 'IN_PROCESS',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
  REFUNDED = 'REFUNDED',
}

export enum MercadoPagoPaymentMethod {
  CREDIT_CARD = 'CREDIT_CARD',
  ACCOUNT_MONEY = 'ACCOUNT_MONEY',
  PIX = 'PIX',
}
