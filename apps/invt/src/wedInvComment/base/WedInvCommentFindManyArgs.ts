/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WedInvCommentWhereInput } from "./WedInvCommentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WedInvCommentOrderByInput } from "./WedInvCommentOrderByInput";

@ArgsType()
class WedInvCommentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WedInvCommentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WedInvCommentWhereInput, { nullable: true })
  @Type(() => WedInvCommentWhereInput)
  where?: WedInvCommentWhereInput;

  @ApiProperty({
    required: false,
    type: [WedInvCommentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WedInvCommentOrderByInput], { nullable: true })
  @Type(() => WedInvCommentOrderByInput)
  orderBy?: Array<WedInvCommentOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { WedInvCommentFindManyArgs as WedInvCommentFindManyArgs };
