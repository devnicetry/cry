/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { EnumUserStatus } from "./EnumUserStatus";
import { WedInvPaymentListRelationFilter } from "../../wedInvPayment/base/WedInvPaymentListRelationFilter";
import { WedInvListRelationFilter } from "../../wedInv/base/WedInvListRelationFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  fullName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumUserStatus,
  })
  @IsEnum(EnumUserStatus)
  @IsOptional()
  @Field(() => EnumUserStatus, {
    nullable: true,
  })
  status?: "Active" | "Nonactive";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => WedInvPaymentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WedInvPaymentListRelationFilter)
  @IsOptional()
  @Field(() => WedInvPaymentListRelationFilter, {
    nullable: true,
  })
  wedInvPayments?: WedInvPaymentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => WedInvListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WedInvListRelationFilter)
  @IsOptional()
  @Field(() => WedInvListRelationFilter, {
    nullable: true,
  })
  wedInvs?: WedInvListRelationFilter;
}

export { UserWhereInput as UserWhereInput };
