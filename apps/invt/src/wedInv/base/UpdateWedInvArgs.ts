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
import { WedInvWhereUniqueInput } from "./WedInvWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { WedInvUpdateInput } from "./WedInvUpdateInput";

@ArgsType()
class UpdateWedInvArgs {
  @ApiProperty({
    required: true,
    type: () => WedInvWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WedInvWhereUniqueInput)
  @Field(() => WedInvWhereUniqueInput, { nullable: false })
  where!: WedInvWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => WedInvUpdateInput,
  })
  @ValidateNested()
  @Type(() => WedInvUpdateInput)
  @Field(() => WedInvUpdateInput, { nullable: false })
  data!: WedInvUpdateInput;
}

export { UpdateWedInvArgs as UpdateWedInvArgs };
