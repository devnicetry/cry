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
import {
  IsInt,
  IsOptional,
  IsString,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { WedInvWhereUniqueInput } from "../../wedInv/base/WedInvWhereUniqueInput";
import { Type } from "class-transformer";
import { WedInvCommentCreateNestedManyWithoutWedInvSharesInput } from "./WedInvCommentCreateNestedManyWithoutWedInvSharesInput";

@InputType()
class WedInvShareCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  frequency?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  identity?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  link?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  open?: boolean | null;

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
  wedInv?: WedInvWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => WedInvCommentCreateNestedManyWithoutWedInvSharesInput,
  })
  @ValidateNested()
  @Type(() => WedInvCommentCreateNestedManyWithoutWedInvSharesInput)
  @IsOptional()
  @Field(() => WedInvCommentCreateNestedManyWithoutWedInvSharesInput, {
    nullable: true,
  })
  wedInvComments?: WedInvCommentCreateNestedManyWithoutWedInvSharesInput;
}

export { WedInvShareCreateInput as WedInvShareCreateInput };
