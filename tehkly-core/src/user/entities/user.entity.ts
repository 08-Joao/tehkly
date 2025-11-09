import { UserRole } from "generated/prisma";

export class User {
    id: string;
    email: string;
    name: string;
    phoneNumber?: string;
    birthDate?: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
    userSubscriptions: UserSubscription[];
    payments: Payment[];
}