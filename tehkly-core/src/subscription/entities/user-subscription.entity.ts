import { PlanType, SubscriptionStatus } from "generated/prisma";

export class UserSubscriptionEntity {
  id: string;
  userId: string;
  planId: string;

  planType: PlanType;

  monthlyPrice: string;
  discountPercent: number;
  totalAmount: string;

  startDate: Date;
  endDate: Date;

  status: SubscriptionStatus;
  autoRenew: boolean;

  mpPreferenceId?: string;
  mpSubscriptionId?: string;

  createdAt: Date;
  updatedAt: Date;
}
