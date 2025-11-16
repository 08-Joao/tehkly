import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { Service, UserRole } from 'generated/prisma';
import { AuthGuard } from 'src/auth/infrastructure/guards/auth.guard';
import { SubscriptionService } from 'src/subscription/application/services/subscription.service';
import { CreateSubscriptionDTO } from 'src/subscription/dto/create-subscription.dto';
import { UpdateSubscriptionDto } from 'src/subscription/dto/update-subscription.dto';

@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) { }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createSubscriptionDto: CreateSubscriptionDTO) {
    return this.subscriptionService.create(createSubscriptionDto);
  }

  @Get('public')
  findAllPublic() {
    return this.subscriptionService.findAllPublic();
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
