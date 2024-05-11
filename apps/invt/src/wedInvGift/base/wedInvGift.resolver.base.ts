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
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Public } from "../../decorators/public.decorator";
import { WedInvGift } from "./WedInvGift";
import { WedInvGiftCountArgs } from "./WedInvGiftCountArgs";
import { WedInvGiftFindManyArgs } from "./WedInvGiftFindManyArgs";
import { WedInvGiftFindUniqueArgs } from "./WedInvGiftFindUniqueArgs";
import { CreateWedInvGiftArgs } from "./CreateWedInvGiftArgs";
import { UpdateWedInvGiftArgs } from "./UpdateWedInvGiftArgs";
import { DeleteWedInvGiftArgs } from "./DeleteWedInvGiftArgs";
import { DtGift } from "../../dtGift/base/DtGift";
import { WedInv } from "../../wedInv/base/WedInv";
import { WedInvGiftService } from "../wedInvGift.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WedInvGift)
export class WedInvGiftResolverBase {
  constructor(
    protected readonly service: WedInvGiftService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "WedInvGift",
    action: "read",
    possession: "any",
  })
  async _wedInvGiftsMeta(
    @graphql.Args() args: WedInvGiftCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [WedInvGift])
  @nestAccessControl.UseRoles({
    resource: "WedInvGift",
    action: "read",
    possession: "any",
  })
  async wedInvGifts(
    @graphql.Args() args: WedInvGiftFindManyArgs
  ): Promise<WedInvGift[]> {
    return this.service.wedInvGifts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => WedInvGift, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "WedInvGift",
    action: "read",
    possession: "own",
  })
  async wedInvGift(
    @graphql.Args() args: WedInvGiftFindUniqueArgs
  ): Promise<WedInvGift | null> {
    const result = await this.service.wedInvGift(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WedInvGift)
  @nestAccessControl.UseRoles({
    resource: "WedInvGift",
    action: "create",
    possession: "any",
  })
  async createWedInvGift(
    @graphql.Args() args: CreateWedInvGiftArgs
  ): Promise<WedInvGift> {
    return await this.service.createWedInvGift({
      ...args,
      data: {
        ...args.data,

        dtGiftId: args.data.dtGiftId
          ? {
              connect: args.data.dtGiftId,
            }
          : undefined,

        wedInvId: args.data.wedInvId
          ? {
              connect: args.data.wedInvId,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WedInvGift)
  @nestAccessControl.UseRoles({
    resource: "WedInvGift",
    action: "update",
    possession: "any",
  })
  async updateWedInvGift(
    @graphql.Args() args: UpdateWedInvGiftArgs
  ): Promise<WedInvGift | null> {
    try {
      return await this.service.updateWedInvGift({
        ...args,
        data: {
          ...args.data,

          dtGiftId: args.data.dtGiftId
            ? {
                connect: args.data.dtGiftId,
              }
            : undefined,

          wedInvId: args.data.wedInvId
            ? {
                connect: args.data.wedInvId,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => WedInvGift)
  @nestAccessControl.UseRoles({
    resource: "WedInvGift",
    action: "delete",
    possession: "any",
  })
  async deleteWedInvGift(
    @graphql.Args() args: DeleteWedInvGiftArgs
  ): Promise<WedInvGift | null> {
    try {
      return await this.service.deleteWedInvGift(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => DtGift, {
    nullable: true,
    name: "dtGiftId",
  })
  @nestAccessControl.UseRoles({
    resource: "DtGift",
    action: "read",
    possession: "any",
  })
  async getDtGiftId(
    @graphql.Parent() parent: WedInvGift
  ): Promise<DtGift | null> {
    const result = await this.service.getDtGiftId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.ResolveField(() => WedInv, {
    nullable: true,
    name: "wedInvId",
  })
  async getWedInvId(
    @graphql.Parent() parent: WedInvGift
  ): Promise<WedInv | null> {
    const result = await this.service.getWedInvId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
