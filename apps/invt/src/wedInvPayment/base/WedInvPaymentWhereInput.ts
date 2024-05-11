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
import { IsOptional, ValidateNested } from "class-validator";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DtPaymentMethodWhereUniqueInput } from "../../dtPaymentMethod/base/DtPaymentMethodWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { WedInvWhereUniqueInput } from "../../wedInv/base/WedInvWhereUniqueInput";

@InputType()
class WedInvPaymentWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  accountName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  accountNo?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  amount?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => DtPaymentMethodWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DtPaymentMethodWhereUniqueInput)
  @IsOptional()
  @Field(() => DtPaymentMethodWhereUniqueInput, {
    nullable: true,
  })
  dtPaymentMethodId?: DtPaymentMethodWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  evidence?: StringNullableFilter;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  noRef?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  userId?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => WedInvWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WedInvWhereUniqueInput)
  @IsOptional()
  @Field(() => WedInvWhereUniqueInput, {
    nullable: true,
  })
  wedInvId?: WedInvWhereUniqueInput;
}

export { WedInvPaymentWhereInput as WedInvPaymentWhereInput };
