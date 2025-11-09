import { Service } from "generated/prisma";


export class SubscriptionPlanEntity {
  id: string;
  service: Service;
  name: string;
  description?: string;
  monthlyPrice: string;
  quarterlyDiscount: number;
  annualDiscount: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
