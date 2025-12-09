import { Controller, Get, Logger, UseGuards } from '@nestjs/common';
import { User } from '../decorators/user.decorator';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserMapper } from 'src/user/infrastructure/mappers/user.mapper';
import { RoleGuard } from '../guards/role.guard';


@Controller('auth')
export class AuthController {

    @UseGuards(RoleGuard)
    @Get('me')
    me(@User() user: UserEntity) {
        return UserMapper.toDTO(user);
    }
}
