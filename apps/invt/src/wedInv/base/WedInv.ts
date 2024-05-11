/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  IsEnum,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumWedInvStatus } from "./EnumWedInvStatus";
import { User } from "../../user/base/User";
import { WedInvComment } from "../../wedInvComment/base/WedInvComment";
import { WedInvEvent } from "../../wedInvEvent/base/WedInvEvent";
import { WedInvGallery } from "../../wedInvGallery/base/WedInvGallery";
import { WedInvGift } from "../../wedInvGift/base/WedInvGift";
import { WedInvPayment } from "../../wedInvPayment/base/WedInvPayment";
import { WedInvPreset } from "../../wedInvPreset/base/WedInvPreset";
import { WedInvShare } from "../../wedInvShare/base/WedInvShare";
import { WedInvStory } from "../../wedInvStory/base/WedInvStory";
import { WedInvWedding } from "../../wedInvWedding/base/WedInvWedding";

@ObjectType()
class WedInv {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    enum: EnumWedInvStatus,
  })
  @IsEnum(EnumWedInvStatus)
  @IsOptional()
  @Field(() => EnumWedInvStatus, {
    nullable: true,
  })
  status?: "Active" | "Nonactive" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  url!: string | null;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;

  @ApiProperty({
    required: false,
    type: () => [WedInvComment],
  })
  @ValidateNested()
  @Type(() => WedInvComment)
  @IsOptional()
  wedInvComments?: Array<WedInvComment>;

  @ApiProperty({
    required: false,
    type: () => [WedInvEvent],
  })
  @ValidateNested()
  @Type(() => WedInvEvent)
  @IsOptional()
  wedInvEvents?: Array<WedInvEvent>;

  @ApiProperty({
    required: false,
    type: () => [WedInvGallery],
  })
  @ValidateNested()
  @Type(() => WedInvGallery)
  @IsOptional()
  wedInvGalleries?: Array<WedInvGallery>;

  @ApiProperty({
    required: false,
    type: () => [WedInvGift],
  })
  @ValidateNested()
  @Type(() => WedInvGift)
  @IsOptional()
  wedInvGifts?: Array<WedInvGift>;

  @ApiProperty({
    required: false,
    type: () => [WedInvPayment],
  })
  @ValidateNested()
  @Type(() => WedInvPayment)
  @IsOptional()
  wedInvPayments?: Array<WedInvPayment>;

  @ApiProperty({
    required: false,
    type: () => [WedInvPreset],
  })
  @ValidateNested()
  @Type(() => WedInvPreset)
  @IsOptional()
  wedInvPresets?: Array<WedInvPreset>;

  @ApiProperty({
    required: false,
    type: () => [WedInvShare],
  })
  @ValidateNested()
  @Type(() => WedInvShare)
  @IsOptional()
  wedInvShares?: Array<WedInvShare>;

  @ApiProperty({
    required: false,
    type: () => [WedInvStory],
  })
  @ValidateNested()
  @Type(() => WedInvStory)
  @IsOptional()
  wedInvStories?: Array<WedInvStory>;

  @ApiProperty({
    required: false,
    type: () => [WedInvWedding],
  })
  @ValidateNested()
  @Type(() => WedInvWedding)
  @IsOptional()
  wedInvWeddings?: Array<WedInvWedding>;
}

export { WedInv as WedInv };
