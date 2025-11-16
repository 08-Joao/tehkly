import { Module, forwardRef } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthController } from '../infrastructure/controllers/auth.controller';
import { AuthGuard } from '../infrastructure/guards/auth.guard';
import { UserModule } from 'src/user/application/user.module';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 3,
    }),
    forwardRef(() => UserModule),
  ],
  controllers: [AuthController],
  providers: [AuthGuard],
  exports: [AuthGuard, HttpModule, forwardRef(() => UserModule)],
})
export class AuthModule { }
