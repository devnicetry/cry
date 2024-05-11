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
  IsString,
  IsOptional,
  IsEnum,
  IsDate,
  ValidateNested,
} from "class-validator";
import { EnumDtPaymentMethodAccountType } from "./EnumDtPaymentMethodAccountType";
import { Type } from "class-transformer";
import { WedInvPayment } from "../../wedInvPayment/base/WedInvPayment";

@ObjectType()
class DtPaymentMethod {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  account!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  accountName!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  accountNo!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumDtPaymentMethodAccountType,
  })
  @IsEnum(EnumDtPaymentMethodAccountType)
  @IsOptional()
  @Field(() => EnumDtPaymentMethodAccountType, {
    nullable: true,
  })
  accountType?: "EWallet" | "BankTransfer" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  icon!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [WedInvPayment],
  })
  @ValidateNested()
  @Type(() => WedInvPayment)
  @IsOptional()
  wedInvPayments?: Array<WedInvPayment>;
}

export { DtPaymentMethod as DtPaymentMethod };