/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { WedInvGalleryWhereUniqueInput } from "../../wedInvGallery/base/WedInvGalleryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class WedInvGalleryUpdateManyWithoutWedInvsInput {
  @Field(() => [WedInvGalleryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WedInvGalleryWhereUniqueInput],
  })
  connect?: Array<WedInvGalleryWhereUniqueInput>;

  @Field(() => [WedInvGalleryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WedInvGalleryWhereUniqueInput],
  })
  disconnect?: Array<WedInvGalleryWhereUniqueInput>;

  @Field(() => [WedInvGalleryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WedInvGalleryWhereUniqueInput],
  })
  set?: Array<WedInvGalleryWhereUniqueInput>;
}

export { WedInvGalleryUpdateManyWithoutWedInvsInput as WedInvGalleryUpdateManyWithoutWedInvsInput };
