import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SubscriptionModule } from './subscription/application/subscription.module';
import { PrismaModule } from './prisma/application/prisma.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [UserModule, SubscriptionModule, PrismaModule, PaymentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
