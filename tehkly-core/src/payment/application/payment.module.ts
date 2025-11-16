import { Module } from '@nestjs/common';
import { PaymentController } from '../infrastructure/controllers/payment.controller';
import { PaymentService } from './services/payment.service';
import { AuthModule } from 'src/auth/application/auth.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [AuthModule, HttpModule],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
