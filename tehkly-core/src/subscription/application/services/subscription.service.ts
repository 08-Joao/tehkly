import { Injectable } from '@nestjs/common';
import { Service } from 'generated/prisma';
import { PrismaService } from 'src/prisma/application/services/prisma.service';
import { CreateSubscriptionDTO } from 'src/subscription/dto/create-subscription.dto';
import { UpdateSubscriptionDto } from 'src/subscription/dto/update-subscription.dto';

@Injectable()
export class SubscriptionService {
  constructor(private prismaService: PrismaService){}

  async create(createSubscriptionDto: CreateSubscriptionDTO) {
    const { cloudFeatures, agendeFeatures, freelaFeatures, businessFeatures, ...planData } = createSubscriptionDto;

    return this.prismaService.subscriptionPlan.create({
      data: {
        ...planData,
        monthlyPrice: parseFloat(planData.monthlyPrice),
        ...(cloudFeatures && {
          cloudFeatures: {
            create: cloudFeatures,
          },
        }),
        ...(agendeFeatures && {
          agendeFeatures: {
            create: agendeFeatures,
          },
        }),
        ...(freelaFeatures && {
          freelaFeatures: {
            create: freelaFeatures,
          },
        }),
        ...(businessFeatures && {
          businessFeatures: {
            create: businessFeatures,
          },
        }),
      },
      include: {
        cloudFeatures: true,
        agendeFeatures: true,
        freelaFeatures: true,
        businessFeatures: true,
      },
    });
  }

  findAll() {
    return this.prismaService.subscriptionPlan.findMany({
      include: {
        cloudFeatures: true,
        agendeFeatures: true,
        freelaFeatures: true,
        businessFeatures: true,
      },
    });
  }

  findAllPublic() {
    return this.prismaService.subscriptionPlan.findMany({
      where: {
        isPublic: true,
        isActive: true,
      },
      include: {
        cloudFeatures: true,
        agendeFeatures: true,
        freelaFeatures: true,
        businessFeatures: true,
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.subscriptionPlan.findUnique({
      where: {
        id,
      },
      include: {
        cloudFeatures: true,
        agendeFeatures: true,
        freelaFeatures: true,
        businessFeatures: true,
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
      include: {
        cloudFeatures: true,
        agendeFeatures: true,
        freelaFeatures: true,
        businessFeatures: true,
      },
    });
  }

  async update(id: string, updateSubscriptionDto: UpdateSubscriptionDto) {
    const { cloudFeatures, agendeFeatures, freelaFeatures, businessFeatures, ...planData } = updateSubscriptionDto;

    const updateData: any = {
      ...planData,
    };

    if (planData.monthlyPrice) {
      updateData.monthlyPrice = parseFloat(planData.monthlyPrice);
    }

    if (cloudFeatures) {
      updateData.cloudFeatures = {
        upsert: {
          create: cloudFeatures,
          update: cloudFeatures,
        },
      };
    }

    if (agendeFeatures) {
      updateData.agendeFeatures = {
        upsert: {
          create: agendeFeatures,
          update: agendeFeatures,
        },
      };
    }

    if (freelaFeatures) {
      updateData.freelaFeatures = {
        upsert: {
          create: freelaFeatures,
          update: freelaFeatures,
        },
      };
    }

    if (businessFeatures) {
      updateData.businessFeatures = {
        upsert: {
          create: businessFeatures,
          update: businessFeatures,
        },
      };
    }

    return this.prismaService.subscriptionPlan.update({
      where: {
        id,
      },
      data: updateData,
      include: {
        cloudFeatures: true,
        agendeFeatures: true,
        freelaFeatures: true,
        businessFeatures: true,
      },
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
