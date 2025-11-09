import { PartialType } from "@nestjs/mapped-types";
import { CreateUserSubscriptionDTO } from "./create-user-subscription.dto";

export class UpdateUserSubscriptionDTO extends PartialType(CreateUserSubscriptionDTO) {}