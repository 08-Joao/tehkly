/*
  Warnings:

  - Added the required column `maxEmployees` to the `BusinessFeatures` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxFileSize` to the `CloudFeatures` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxClients` to the `FreelaFeatures` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxProjects` to the `FreelaFeatures` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CouponType" AS ENUM ('PERCENTAGE', 'FIXED_AMOUNT');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('PAYMENT_REMINDER', 'PAYMENT_DUE', 'PAYMENT_OVERDUE', 'RENEWAL_REMINDER', 'TRIAL_ENDING', 'SUBSCRIPTION_CANCELLED', 'SUBSCRIPTION_ACTIVATED', 'PAYMENT_FAILED');

-- AlterTable
ALTER TABLE "AgendeFeatures" ADD COLUMN     "allowCustomBranding" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "allowWhitelabel" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "supportLevel" TEXT NOT NULL DEFAULT 'BASIC';

-- AlterTable
ALTER TABLE "BusinessFeatures" ADD COLUMN     "allowAdvancedReports" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "allowMultiBranch" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "maxEmployees" INTEGER NOT NULL,
ADD COLUMN     "supportLevel" TEXT NOT NULL DEFAULT 'BASIC';

-- AlterTable
ALTER TABLE "CloudFeatures" ADD COLUMN     "allowCustomDomain" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "allowPublicSharing" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "maxBandwidthGB" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "maxFileSize" INTEGER NOT NULL,
ADD COLUMN     "maxUsers" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "supportLevel" TEXT NOT NULL DEFAULT 'BASIC';

-- AlterTable
ALTER TABLE "FreelaFeatures" ADD COLUMN     "allowInvoicing" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "allowTimeTracking" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "maxClients" INTEGER NOT NULL,
ADD COLUMN     "maxProjects" INTEGER NOT NULL,
ADD COLUMN     "supportLevel" TEXT NOT NULL DEFAULT 'BASIC';

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "attemptNumber" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "billingPeriodEnd" TIMESTAMP(3),
ADD COLUMN     "billingPeriodStart" TIMESTAMP(3),
ADD COLUMN     "currency" TEXT NOT NULL DEFAULT 'BRL',
ADD COLUMN     "installments" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "invoiceNumber" TEXT,
ADD COLUMN     "invoiceUrl" TEXT;

-- AlterTable
ALTER TABLE "SubscriptionPlan" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "trialDays" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "UserSubscription" ADD COLUMN     "cancelReason" TEXT,
ADD COLUMN     "cancellationRequestedBy" TEXT,
ADD COLUMN     "cancelledAt" TIMESTAMP(3),
ADD COLUMN     "couponId" TEXT,
ADD COLUMN     "isTrialUsed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "lastRenewalDate" TIMESTAMP(3),
ADD COLUMN     "nextBillingDate" TIMESTAMP(3),
ADD COLUMN     "pendingPlanId" TEXT,
ADD COLUMN     "pendingPlanStartDate" TIMESTAMP(3),
ADD COLUMN     "trialEndsAt" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "UserCloudUsage" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "usedStorageGB" DECIMAL(10,2) NOT NULL,
    "usedBandwidthGB" DECIMAL(10,2) NOT NULL,
    "fileCount" INTEGER NOT NULL,
    "periodStart" TIMESTAMP(3) NOT NULL,
    "periodEnd" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserCloudUsage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAgendeUsage" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "appointmentsCount" INTEGER NOT NULL,
    "organizationsCount" INTEGER NOT NULL,
    "periodStart" TIMESTAMP(3) NOT NULL,
    "periodEnd" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAgendeUsage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coupon" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "discountType" "CouponType" NOT NULL,
    "discountValue" DECIMAL(10,2) NOT NULL,
    "service" "Service",
    "minPurchase" DECIMAL(10,2),
    "maxDiscount" DECIMAL(10,2),
    "maxUses" INTEGER,
    "maxUsesPerUser" INTEGER NOT NULL DEFAULT 1,
    "validFrom" TIMESTAMP(3) NOT NULL,
    "validUntil" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CouponUsage" (
    "id" TEXT NOT NULL,
    "couponId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userSubscriptionId" TEXT NOT NULL,
    "discountApplied" DECIMAL(10,2) NOT NULL,
    "usedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CouponUsage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubscriptionHistory" (
    "id" TEXT NOT NULL,
    "subscriptionId" TEXT NOT NULL,
    "previousStatus" "SubscriptionStatus" NOT NULL,
    "newStatus" "SubscriptionStatus" NOT NULL,
    "reason" TEXT,
    "changedBy" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SubscriptionHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RenewalConfiguration" (
    "id" TEXT NOT NULL,
    "subscriptionId" TEXT NOT NULL,
    "maxRetries" INTEGER NOT NULL DEFAULT 3,
    "retryIntervalDays" INTEGER NOT NULL DEFAULT 3,
    "sendReminderEmail" BOOLEAN NOT NULL DEFAULT true,
    "gracePeriodDays" INTEGER NOT NULL DEFAULT 7,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RenewalConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubscriptionNotification" (
    "id" TEXT NOT NULL,
    "subscriptionId" TEXT NOT NULL,
    "type" "NotificationType" NOT NULL,
    "sentAt" TIMESTAMP(3),
    "scheduled" TIMESTAMP(3) NOT NULL,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "lastError" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SubscriptionNotification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UserCloudUsage_userId_idx" ON "UserCloudUsage"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserCloudUsage_userId_periodStart_key" ON "UserCloudUsage"("userId", "periodStart");

-- CreateIndex
CREATE INDEX "UserAgendeUsage_userId_idx" ON "UserAgendeUsage"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserAgendeUsage_userId_periodStart_key" ON "UserAgendeUsage"("userId", "periodStart");

-- CreateIndex
CREATE UNIQUE INDEX "Coupon_code_key" ON "Coupon"("code");

-- CreateIndex
CREATE INDEX "Coupon_code_isActive_idx" ON "Coupon"("code", "isActive");

-- CreateIndex
CREATE INDEX "Coupon_validFrom_validUntil_idx" ON "Coupon"("validFrom", "validUntil");

-- CreateIndex
CREATE INDEX "CouponUsage_couponId_idx" ON "CouponUsage"("couponId");

-- CreateIndex
CREATE INDEX "CouponUsage_userId_idx" ON "CouponUsage"("userId");

-- CreateIndex
CREATE INDEX "SubscriptionHistory_subscriptionId_idx" ON "SubscriptionHistory"("subscriptionId");

-- CreateIndex
CREATE INDEX "SubscriptionHistory_subscriptionId_createdAt_idx" ON "SubscriptionHistory"("subscriptionId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "RenewalConfiguration_subscriptionId_key" ON "RenewalConfiguration"("subscriptionId");

-- CreateIndex
CREATE INDEX "SubscriptionNotification_subscriptionId_scheduled_idx" ON "SubscriptionNotification"("subscriptionId", "scheduled");

-- CreateIndex
CREATE INDEX "SubscriptionNotification_scheduled_sentAt_idx" ON "SubscriptionNotification"("scheduled", "sentAt");

-- CreateIndex
CREATE INDEX "Payment_status_createdAt_idx" ON "Payment"("status", "createdAt");

-- CreateIndex
CREATE INDEX "Payment_paidAt_idx" ON "Payment"("paidAt");

-- CreateIndex
CREATE INDEX "SubscriptionPlan_isActive_deletedAt_idx" ON "SubscriptionPlan"("isActive", "deletedAt");

-- CreateIndex
CREATE INDEX "UserSubscription_status_endDate_idx" ON "UserSubscription"("status", "endDate");

-- CreateIndex
CREATE INDEX "UserSubscription_userId_status_planId_idx" ON "UserSubscription"("userId", "status", "planId");

-- CreateIndex
CREATE INDEX "UserSubscription_nextBillingDate_idx" ON "UserSubscription"("nextBillingDate");

-- AddForeignKey
ALTER TABLE "UserCloudUsage" ADD CONSTRAINT "UserCloudUsage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAgendeUsage" ADD CONSTRAINT "UserAgendeUsage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CouponUsage" ADD CONSTRAINT "CouponUsage_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Coupon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CouponUsage" ADD CONSTRAINT "CouponUsage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSubscription" ADD CONSTRAINT "UserSubscription_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Coupon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubscriptionHistory" ADD CONSTRAINT "SubscriptionHistory_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "UserSubscription"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RenewalConfiguration" ADD CONSTRAINT "RenewalConfiguration_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "UserSubscription"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubscriptionNotification" ADD CONSTRAINT "SubscriptionNotification_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "UserSubscription"("id") ON DELETE CASCADE ON UPDATE CASCADE;
