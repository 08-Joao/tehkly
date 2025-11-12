import { UserRole } from "generated/prisma";
import { Payment } from "src/payment/entities/payment.entity";
import { UserSubscriptionEntity } from "src/subscription/entities/user-subscription.entity";

export class UserEntity {
    id: string;
    email: string;
    name: string;
    phoneNumber?: string;
    birthDate?: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
    userSubscriptions: UserSubscriptionEntity[];
    payments: Payment[];
}