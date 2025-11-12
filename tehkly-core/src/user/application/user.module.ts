import { Module, forwardRef } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/application/prisma.module';
import { AuthModule } from 'src/auth/application/auth.module';
import { UserController } from '../infrastructure/controllers/user.controller';
import { UserService } from './services/user.service';


@Module({
  imports: [PrismaModule, forwardRef(() => AuthModule)],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
