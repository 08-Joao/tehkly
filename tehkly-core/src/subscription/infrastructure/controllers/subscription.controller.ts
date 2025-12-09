import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { Service, UserRole } from 'generated/prisma';
import { Role } from 'src/auth/infrastructure/decorators';
import { RoleGuard } from 'src/auth/infrastructure/guards/role.guard';
import { SubscriptionService } from 'src/subscription/application/services/subscription.service';
import { CreateSubscriptionDTO } from 'src/subscription/dto/create-subscription.dto';
import { UpdateSubscriptionDto } from 'src/subscription/dto/update-subscription.dto';

@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) { }

  @UseGuards(RoleGuard)
  @Role(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.ROOT)
  @Post()
  create(@Body() createSubscriptionDto: CreateSubscriptionDTO) {
    return this.subscriptionService.create(createSubscriptionDto);
  }

  @Get('public')
  findAllPublic() {
    return this.subscriptionService.findAllPublic();
  }

  @UseGuards(RoleGuard)
  @Role(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.ROOT)
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

  @UseGuards(RoleGuard)
  @Role(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.ROOT)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubscriptionDto: UpdateSubscriptionDto) {
    return this.subscriptionService.update(id, updateSubscriptionDto);
  }

  @UseGuards(RoleGuard)
  @Role(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.ROOT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriptionService.remove(id);
  }
}
