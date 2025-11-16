import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { User } from 'src/auth/infrastructure/decorators/user.decorator';
import { AuthGuard } from 'src/auth/infrastructure/guards/auth.guard';
import { PaymentService } from 'src/payment/application/services/payment.service';
import { CreatePaymentDto } from 'src/payment/dto/create-payment.dto';
import { UpdatePaymentDto } from 'src/payment/dto/update-payment.dto';
import { UserEntity } from 'src/user/entities/user.entity';

@UseGuards(AuthGuard)
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('subscription/:planId')
  create(@Param('planId') planId: string, @Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @Get()
  findAll(@User() user: UserEntity) {
    return this.paymentService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentService.update(+id, updatePaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentService.remove(+id);
  }
}
