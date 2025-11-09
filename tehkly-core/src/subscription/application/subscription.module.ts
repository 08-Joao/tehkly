import { Module } from '@nestjs/common';
import { SubscriptionController } from '../infrastructure/subscription.controller';
import { SubscriptionService } from '../application/services/subscription.service';
import { PrismaService } from 'src/prisma/application/services/prisma.service';
import { UserSubscriptionService } from './services/user-subscription.service';

@Module({
  imports: [PrismaService],
  controllers: [SubscriptionController],
  providers: [SubscriptionService, UserSubscriptionService],
  exports: [UserSubscriptionService],
})
export class SubscriptionModule {}
