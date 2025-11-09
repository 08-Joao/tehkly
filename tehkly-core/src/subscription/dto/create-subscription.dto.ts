import {
  IsEnum,
  IsInt,
  IsNumberString,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Service } from 'generated/prisma';

export class CreateSubscriptionDTO {
  @IsEnum(Service)
  service: Service;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumberString()
  monthlyPrice: string;

  @IsInt()
  @Min(0)
  quarterlyDiscount: number;

  @IsInt()
  @Min(0)
  annualDiscount: number;

  @IsOptional()
  isActive?: boolean;

  @IsOptional()
  isPublic?: boolean;
}
