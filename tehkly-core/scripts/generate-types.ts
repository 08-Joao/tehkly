import * as fs from 'fs';
import * as path from 'path';

const generatedDir = path.join(__dirname, '../generated');
const prismaDir = path.join(generatedDir, 'prisma');

// Ensure directories exist
if (!fs.existsSync(generatedDir)) {
  fs.mkdirSync(generatedDir, { recursive: true });
}
if (!fs.existsSync(prismaDir)) {
  fs.mkdirSync(prismaDir, { recursive: true });
}

// Generate index.ts with all enums from schema
const indexContent = `// Auto-generated file from prisma schema
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
`;

const indexPath = path.join(prismaDir, 'index.ts');
fs.writeFileSync(indexPath, indexContent);

console.log('✓ Generated types at:', indexPath);
