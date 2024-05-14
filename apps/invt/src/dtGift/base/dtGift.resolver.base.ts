/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GraphQLUpload } from "graphql-upload";
import { FileUpload } from "src/storage/base/storage.types";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { DtGift } from "./DtGift";
import { DtGiftCountArgs } from "./DtGiftCountArgs";
import { DtGiftFindManyArgs } from "./DtGiftFindManyArgs";
import { DtGiftFindUniqueArgs } from "./DtGiftFindUniqueArgs";
import { CreateDtGiftArgs } from "./CreateDtGiftArgs";
import { UpdateDtGiftArgs } from "./UpdateDtGiftArgs";
import { DeleteDtGiftArgs } from "./DeleteDtGiftArgs";
import { WedInvGiftFindManyArgs } from "../../wedInvGift/base/WedInvGiftFindManyArgs";
import { WedInvGift } from "../../wedInvGift/base/WedInvGift";
import { DtGiftService } from "../dtGift.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DtGift)
export class DtGiftResolverBase {
  constructor(
    protected readonly service: DtGiftService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DtGift",
    action: "read",
    possession: "any",
  })
  async _dtGiftsMeta(
    @graphql.Args() args: DtGiftCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DtGift])
  @nestAccessControl.UseRoles({
    resource: "DtGift",
    action: "read",
    possession: "any",
  })
  async dtGifts(@graphql.Args() args: DtGiftFindManyArgs): Promise<DtGift[]> {
    return this.service.dtGifts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DtGift, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DtGift",
    action: "read",
    possession: "own",
  })
  async dtGift(
    @graphql.Args() args: DtGiftFindUniqueArgs
  ): Promise<DtGift | null> {
    const result = await this.service.dtGift(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DtGift)
  @nestAccessControl.UseRoles({
    resource: "DtGift",
    action: "create",
    possession: "any",
  })
  async createDtGift(@graphql.Args() args: CreateDtGiftArgs): Promise<DtGift> {
    return await this.service.createDtGift({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DtGift)
  @nestAccessControl.UseRoles({
    resource: "DtGift",
    action: "update",
    possession: "any",
  })
  async updateDtGift(
    @graphql.Args() args: UpdateDtGiftArgs
  ): Promise<DtGift | null> {
    try {
      return await this.service.updateDtGift({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DtGift)
  @nestAccessControl.UseRoles({
    resource: "DtGift",
    action: "delete",
    possession: "any",
  })
  async deleteDtGift(
    @graphql.Args() args: DeleteDtGiftArgs
  ): Promise<DtGift | null> {
    try {
      return await this.service.deleteDtGift(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DtGift)
  async uploadIcon(
    @graphql.Args({
      name: "file",
      type: () => GraphQLUpload,
    })
    file: FileUpload,
    @graphql.Args()
    args: DtGiftFindUniqueArgs
  ): Promise<DtGift> {
    return await this.service.uploadIcon(args, file);
  }

  @graphql.Mutation(() => DtGift)
  async deleteIcon(
    @graphql.Args()
    args: DtGiftFindUniqueArgs
  ): Promise<DtGift> {
    return await this.service.deleteIcon(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [WedInvGift], { name: "wedInvGifts" })
  @nestAccessControl.UseRoles({
    resource: "WedInvGift",
    action: "read",
    possession: "any",
  })
  async findWedInvGifts(
    @graphql.Parent() parent: DtGift,
    @graphql.Args() args: WedInvGiftFindManyArgs
  ): Promise<WedInvGift[]> {
    const results = await this.service.findWedInvGifts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
