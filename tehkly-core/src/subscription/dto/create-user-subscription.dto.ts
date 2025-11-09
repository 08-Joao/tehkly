import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNumberString,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

import { PlanType, SubscriptionStatus } from 'generated/prisma';

export class CreateUserSubscriptionDTO {
  @IsString()
  userId: string;

  @IsString()
  planId: string;

  @IsEnum(PlanType)
  planType: PlanType;

  @IsNumberString()
  monthlyPrice: string;

  @IsInt()
  @Min(0)
  discountPercent: number;

  @IsNumberString()
  totalAmount: string;

  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate: Date;

  @IsOptional()
  @IsEnum(SubscriptionStatus)
  status?: SubscriptionStatus = SubscriptionStatus.PENDING;

  @IsOptional()
  @IsBoolean()
  autoRenew?: boolean = true;

  @IsOptional()
  @IsString()
  mpPreferenceId?: string;

  @IsOptional()
  @IsString()
  mpSubscriptionId?: string;
}
