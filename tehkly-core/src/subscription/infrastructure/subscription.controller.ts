import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CreateSubscriptionDTO } from '../dto/create-subscription.dto';
import { SubscriptionService } from '../application/services/subscription.service';
import { UpdateSubscriptionDto } from '../dto/update-subscription.dto';
import { Service, UserRole } from 'generated/prisma';


@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) { }

  @Post()
  create(@Body() createSubscriptionDto: CreateSubscriptionDTO) {
    return this.subscriptionService.create(createSubscriptionDto);
  }

  @Get()
  findAll() {
    return this.subscriptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriptionService.findOne(id);
  }

  @Get('service/:service')
  findAllByService(@Param('service') service: Service) {
    return this.subscriptionService.findAllByService(service);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubscriptionDto: UpdateSubscriptionDto) {
    return this.subscriptionService.update(id, updateSubscriptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriptionService.remove(id);
  }
}
