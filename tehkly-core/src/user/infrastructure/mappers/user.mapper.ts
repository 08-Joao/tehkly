import { GetUserDto } from "src/user/dto/get-user.dto";
import { UserEntity } from "src/user/entities/user.entity";

export class UserMapper {
    static toDTO(user: UserEntity): GetUserDto {
        return {
            id: user.id,
            email: user.email,
            name: user.name,
            phoneNumber: user.phoneNumber,
            birthDate: user.birthDate,
            role: user.role,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };
    }
}