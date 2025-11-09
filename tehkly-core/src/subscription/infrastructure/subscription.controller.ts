import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CreateSubscriptionDTO } from '../dto/create-subscription.dto';
import { SubscriptionService } from '../application/services/subscription.service';
import { UpdateSubscriptionDto } from '../dto/update-subscription.dto';
import { RolesGuard } from 'src/auth/infrastructure/guards/roles.guard';
import { Service, UserRole } from 'generated/prisma';
import { Roles } from 'src/auth/infrastructure/decorators/roles.decorator';

@UseGuards(RolesGuard)
@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) { }

  @Post()
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.ROOT)
  create(@Body() createSubscriptionDto: CreateSubscriptionDTO) {
    return this.subscriptionService.create(createSubscriptionDto);
  }

  @Get()
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.ROOT)
  findAll() {
    return this.subscriptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriptionService.findOne(id);
  }

  @Get('service/:service')
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.ROOT)
  findAllByService(@Param('service') service: Service) {
    return this.subscriptionService.findAllByService(service);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.ROOT)
  update(@Param('id') id: string, @Body() updateSubscriptionDto: UpdateSubscriptionDto) {
    return this.subscriptionService.update(id, updateSubscriptionDto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.ROOT)
  remove(@Param('id') id: string) {
    return this.subscriptionService.remove(id);
  }
}
