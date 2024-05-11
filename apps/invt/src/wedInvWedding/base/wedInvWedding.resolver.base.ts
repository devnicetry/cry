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
import { WedInvWedding } from "./WedInvWedding";
import { WedInvWeddingCountArgs } from "./WedInvWeddingCountArgs";
import { WedInvWeddingFindManyArgs } from "./WedInvWeddingFindManyArgs";
import { WedInvWeddingFindUniqueArgs } from "./WedInvWeddingFindUniqueArgs";
import { CreateWedInvWeddingArgs } from "./CreateWedInvWeddingArgs";
import { UpdateWedInvWeddingArgs } from "./UpdateWedInvWeddingArgs";
import { DeleteWedInvWeddingArgs } from "./DeleteWedInvWeddingArgs";
import { WedInv } from "../../wedInv/base/WedInv";
import { WedInvWeddingService } from "../wedInvWedding.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WedInvWedding)
export class WedInvWeddingResolverBase {
  constructor(
    protected readonly service: WedInvWeddingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "WedInvWedding",
    action: "read",
    possession: "any",
  })
  async _wedInvWeddingsMeta(
    @graphql.Args() args: WedInvWeddingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [WedInvWedding])
  @nestAccessControl.UseRoles({
    resource: "WedInvWedding",
    action: "read",
    possession: "any",
  })
  async wedInvWeddings(
    @graphql.Args() args: WedInvWeddingFindManyArgs
  ): Promise<WedInvWedding[]> {
    return this.service.wedInvWeddings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => WedInvWedding, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "WedInvWedding",
    action: "read",
    possession: "own",
  })
  async wedInvWedding(
    @graphql.Args() args: WedInvWeddingFindUniqueArgs
  ): Promise<WedInvWedding | null> {
    const result = await this.service.wedInvWedding(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WedInvWedding)
  @nestAccessControl.UseRoles({
    resource: "WedInvWedding",
    action: "create",
    possession: "any",
  })
  async createWedInvWedding(
    @graphql.Args() args: CreateWedInvWeddingArgs
  ): Promise<WedInvWedding> {
    return await this.service.createWedInvWedding({
      ...args,
      data: {
        ...args.data,

        wedInv: args.data.wedInv
          ? {
              connect: args.data.wedInv,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WedInvWedding)
  @nestAccessControl.UseRoles({
    resource: "WedInvWedding",
    action: "update",
    possession: "any",
  })
  async updateWedInvWedding(
    @graphql.Args() args: UpdateWedInvWeddingArgs
  ): Promise<WedInvWedding | null> {
    try {
      return await this.service.updateWedInvWedding({
        ...args,
        data: {
          ...args.data,

          wedInv: args.data.wedInv
            ? {
                connect: args.data.wedInv,
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

  @graphql.Mutation(() => WedInvWedding)
  @nestAccessControl.UseRoles({
    resource: "WedInvWedding",
    action: "delete",
    possession: "any",
  })
  async deleteWedInvWedding(
    @graphql.Args() args: DeleteWedInvWeddingArgs
  ): Promise<WedInvWedding | null> {
    try {
      return await this.service.deleteWedInvWedding(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @graphql.ResolveField(() => WedInv, {
    nullable: true,
    name: "wedInv",
  })
  async getWedInv(
    @graphql.Parent() parent: WedInvWedding
  ): Promise<WedInv | null> {
    const result = await this.service.getWedInv(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
