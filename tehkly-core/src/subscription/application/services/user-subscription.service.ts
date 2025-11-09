import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/application/services/prisma.service";
import { CreateUserSubscriptionDTO } from "src/subscription/dto/create-user-subscription.dto";
import { UpdateUserSubscriptionDTO } from "src/subscription/dto/update-user-subscription.dto";

@Injectable()
export class UserSubscriptionService {
    constructor(private prismaService: PrismaService){}

    create(createUserSubscriptionDto: CreateUserSubscriptionDTO) {
        return this.prismaService.userSubscription.create({
            data: createUserSubscriptionDto,
        });
    }

    findAll() {
        return this.prismaService.userSubscription.findMany();
    }

    findOne(id: string) {
        return this.prismaService.userSubscription.findUnique({
            where: {
                id,
            },
        });
    }

    update(id: string, updateUserSubscriptionDto: UpdateUserSubscriptionDTO) {
        return this.prismaService.userSubscription.update({
            where: {
                id,
            },
            data: updateUserSubscriptionDto,
        });
    }

    remove(id: string) {
        return this.prismaService.userSubscription.delete({
            where: {
                id,
            },
        });
    }
}
