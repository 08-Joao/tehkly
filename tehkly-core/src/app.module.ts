import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/application/prisma.module';
import { UserModule } from './user/application/user.module';
import { SubscriptionModule } from './subscription/application/subscription.module';
import { PaymentModule } from './payment/application/payment.module';
import { AuthModule } from './auth/application/auth.module';

@Module({
  imports: [PrismaModule, UserModule, SubscriptionModule, PaymentModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
