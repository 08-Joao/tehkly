import { Module, forwardRef } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthController } from '../infrastructure/controllers/auth.controller';
import { AuthGuard } from '../infrastructure/guards/auth.guard';
import { UserModule } from 'src/user/application/user.module';

@Module({
  imports: [HttpModule, forwardRef(() => UserModule)],
  controllers: [AuthController],
  providers: [AuthGuard],
  exports: [AuthGuard],
})
export class AuthModule {}
