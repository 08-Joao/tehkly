import { PartialType } from '@nestjs/mapped-types';
import { CreateSubscriptionDTO } from './create-subscription.dto';

export class UpdateSubscriptionDto extends PartialType(CreateSubscriptionDTO) {}
