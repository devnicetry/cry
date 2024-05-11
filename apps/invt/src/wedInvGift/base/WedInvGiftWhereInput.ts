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
import { DtGiftWhereUniqueInput } from "../../dtGift/base/DtGiftWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { WedInvWhereUniqueInput } from "../../wedInv/base/WedInvWhereUniqueInput";

@InputType()
class WedInvGiftWhereInput {
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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  accountPhoto?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  details?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => DtGiftWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DtGiftWhereUniqueInput)
  @IsOptional()
  @Field(() => DtGiftWhereUniqueInput, {
    nullable: true,
  })
  dtGiftId?: DtGiftWhereUniqueInput;

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

export { WedInvGiftWhereInput as WedInvGiftWhereInput };
