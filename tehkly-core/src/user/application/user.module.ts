import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/application/services/prisma.service';
import { UserController } from '../infrastructure/controllers/user.controller';
import { UserService } from './services/user.service';


@Module({
  imports: [PrismaService],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
