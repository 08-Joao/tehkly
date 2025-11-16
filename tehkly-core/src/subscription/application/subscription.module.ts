import { Module, forwardRef } from '@nestjs/common';
import { SubscriptionService } from '../application/services/subscription.service';
import { PrismaModule } from 'src/prisma/application/prisma.module';
import { UserSubscriptionService } from './services/user-subscription.service';
import { AuthModule } from 'src/auth/application/auth.module';
import { SubscriptionController } from '../infrastructure/controllers/subscription.controller';

@Module({
  imports: [PrismaModule, forwardRef(() => AuthModule)],
  controllers: [SubscriptionController],
  providers: [SubscriptionService, UserSubscriptionService],
  exports: [UserSubscriptionService],
})
export class SubscriptionModule {}
