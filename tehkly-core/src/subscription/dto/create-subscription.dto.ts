import {
  IsEnum,
  IsInt,
  IsNumberString,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Service } from 'generated/prisma';

export class CloudFeaturesDTO {
  @IsInt()
  storageGB: number;

  @IsInt()
  @IsOptional()
  maxUsers?: number = 1;

  @IsInt()
  maxFileSize: number;

  @IsInt()
  @IsOptional()
  maxBandwidthGB?: number = 0;

  @IsOptional()
  allowPublicSharing?: boolean = false;

  @IsOptional()
  allowCustomDomain?: boolean = false;

  @IsOptional()
  @IsString()
  supportLevel?: string = 'BASIC';
}

export class AgendeFeaturesDTO {
  @IsInt()
  maxAppointmentsPerMonth: number;

  @IsInt()
  maxOrganizations: number;

  @IsInt()
  maxPointsPerOrganization: number;

  @IsOptional()
  allowCustomBranding?: boolean = false;

  @IsOptional()
  allowWhitelabel?: boolean = false;

  @IsOptional()
  @IsString()
  supportLevel?: string = 'BASIC';
}

export class FreelafeaturesDTO {
  @IsInt()
  maxProjects: number;

  @IsInt()
  maxClients: number;

  @IsOptional()
  allowInvoicing?: boolean = false;

  @IsOptional()
  allowTimeTracking?: boolean = true;

  @IsOptional()
  @IsString()
  supportLevel?: string = 'BASIC';
}

export class BusinessFeaturesDTO {
  @IsOptional()
  @IsString()
  supportLevel?: string = 'BASIC';
}

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

  @IsInt()
  @Min(0)
  @IsOptional()
  trialDays?: number = 0;

  @IsOptional()
  isActive?: boolean;

  @IsOptional()
  isPublic?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => CloudFeaturesDTO)
  cloudFeatures?: CloudFeaturesDTO;

  @IsOptional()
  @ValidateNested()
  @Type(() => AgendeFeaturesDTO)
  agendeFeatures?: AgendeFeaturesDTO;

  @IsOptional()
  @ValidateNested()
  @Type(() => FreelafeaturesDTO)
  freelaFeatures?: FreelafeaturesDTO;

  @IsOptional()
  @ValidateNested()
  @Type(() => BusinessFeaturesDTO)
  businessFeatures?: BusinessFeaturesDTO;
}
