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
import { WedInvWhereInput } from "./WedInvWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class WedInvCountArgs {
  @ApiProperty({
    required: false,
    type: () => WedInvWhereInput,
  })
  @Field(() => WedInvWhereInput, { nullable: true })
  @Type(() => WedInvWhereInput)
  where?: WedInvWhereInput;
}

export { WedInvCountArgs as WedInvCountArgs };
