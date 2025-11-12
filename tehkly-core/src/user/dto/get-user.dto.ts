import { UserRole } from "generated/prisma";

export class GetUserDto {
    id: string;
    email: string;
    name: string;
    phoneNumber?: string;
    birthDate?: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
}