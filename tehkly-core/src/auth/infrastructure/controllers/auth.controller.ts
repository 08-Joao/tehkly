import { Controller, Get, Logger, UseGuards } from '@nestjs/common';
import { User } from '../decorators/user.decorator';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserMapper } from 'src/user/infrastructure/mappers/user.mapper';
import { AuthGuard } from '../guards/auth.guard';


@Controller('auth')
export class AuthController {

    @UseGuards(AuthGuard)
    @Get('me')
    me(@User() user: UserEntity) {
        return UserMapper.toDTO(user);
    }
}
