import { IsEmail } from "class-validator";

export class CreateUserDto {
    id: string;
    @IsEmail()
    email: string;
    name: string;
    phoneNumber?: string;
    birthDate?: string;
}
