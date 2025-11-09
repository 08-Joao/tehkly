import { Injectable } from '@nestjs/common';
import { Service } from 'generated/prisma';
import { PrismaService } from 'src/prisma/application/services/prisma.service';
import { CreateSubscriptionDTO } from 'src/subscription/dto/create-subscription.dto';
import { UpdateSubscriptionDto } from 'src/subscription/dto/update-subscription.dto';

@Injectable()
export class SubscriptionService {
  constructor(private prismaService: PrismaService){}

  create(createSubscriptionDto: CreateSubscriptionDTO) {
    return this.prismaService.subscriptionPlan.create({
      data: createSubscriptionDto,
    });
  }

  findAll() {
    return this.prismaService.subscriptionPlan.findMany();
  }

  findOne(id: string) {
    return this.prismaService.subscriptionPlan.findUnique({
      where: {
        id,
      },
    });
  }

  findAllByService(service: Service) {
    return this.prismaService.subscriptionPlan.findMany({
      where: {
        service,
        isPublic: true,
        isActive: true,
      },
    });
  }

  update(id: string, updateSubscriptionDto: UpdateSubscriptionDto) {
    return this.prismaService.subscriptionPlan.update({
      where: {
        id,
      },
      data: updateSubscriptionDto,
    });
  }

  remove(id: string) {
    return this.prismaService.subscriptionPlan.delete({
      where: {
        id,
      },
    });
  }
}
