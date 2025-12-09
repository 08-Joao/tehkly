import { Module, forwardRef } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthController } from '../infrastructure/controllers/auth.controller';
import { UserModule } from 'src/user/application/user.module';
import { RoleGuard } from '../infrastructure/guards/role.guard';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 3,
    }),
    forwardRef(() => UserModule),
  ],
  controllers: [AuthController],
  providers: [RoleGuard],
  exports: [RoleGuard, HttpModule, forwardRef(() => UserModule)],
})
export class AuthModule { }
