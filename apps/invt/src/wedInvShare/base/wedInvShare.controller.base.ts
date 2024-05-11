/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { WedInvShareService } from "../wedInvShare.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { WedInvShareCreateInput } from "./WedInvShareCreateInput";
import { WedInvShare } from "./WedInvShare";
import { WedInvShareFindManyArgs } from "./WedInvShareFindManyArgs";
import { WedInvShareWhereUniqueInput } from "./WedInvShareWhereUniqueInput";
import { WedInvShareUpdateInput } from "./WedInvShareUpdateInput";
import { WedInvCommentFindManyArgs } from "../../wedInvComment/base/WedInvCommentFindManyArgs";
import { WedInvComment } from "../../wedInvComment/base/WedInvComment";
import { WedInvCommentWhereUniqueInput } from "../../wedInvComment/base/WedInvCommentWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class WedInvShareControllerBase {
  constructor(
    protected readonly service: WedInvShareService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WedInvShare })
  @nestAccessControl.UseRoles({
    resource: "WedInvShare",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createWedInvShare(
    @common.Body() data: WedInvShareCreateInput
  ): Promise<WedInvShare> {
    return await this.service.createWedInvShare({
      data: {
        ...data,

        wedInvId: data.wedInvId
          ? {
              connect: data.wedInvId,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        frequency: true,
        id: true,
        identity: true,
        link: true,
        name: true,
        open: true,
        updatedAt: true,

        wedInvId: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [WedInvShare] })
  @ApiNestedQuery(WedInvShareFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WedInvShare",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async wedInvShares(@common.Req() request: Request): Promise<WedInvShare[]> {
    const args = plainToClass(WedInvShareFindManyArgs, request.query);
    return this.service.wedInvShares({
      ...args,
      select: {
        createdAt: true,
        frequency: true,
        id: true,
        identity: true,
        link: true,
        name: true,
        open: true,
        updatedAt: true,

        wedInvId: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WedInvShare })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WedInvShare",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async wedInvShare(
    @common.Param() params: WedInvShareWhereUniqueInput
  ): Promise<WedInvShare | null> {
    const result = await this.service.wedInvShare({
      where: params,
      select: {
        createdAt: true,
        frequency: true,
        id: true,
        identity: true,
        link: true,
        name: true,
        open: true,
        updatedAt: true,

        wedInvId: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: WedInvShare })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WedInvShare",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateWedInvShare(
    @common.Param() params: WedInvShareWhereUniqueInput,
    @common.Body() data: WedInvShareUpdateInput
  ): Promise<WedInvShare | null> {
    try {
      return await this.service.updateWedInvShare({
        where: params,
        data: {
          ...data,

          wedInvId: data.wedInvId
            ? {
                connect: data.wedInvId,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          frequency: true,
          id: true,
          identity: true,
          link: true,
          name: true,
          open: true,
          updatedAt: true,

          wedInvId: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: WedInvShare })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WedInvShare",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteWedInvShare(
    @common.Param() params: WedInvShareWhereUniqueInput
  ): Promise<WedInvShare | null> {
    try {
      return await this.service.deleteWedInvShare({
        where: params,
        select: {
          createdAt: true,
          frequency: true,
          id: true,
          identity: true,
          link: true,
          name: true,
          open: true,
          updatedAt: true,

          wedInvId: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/wedInvComments")
  @ApiNestedQuery(WedInvCommentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WedInvComment",
    action: "read",
    possession: "any",
  })
  async findWedInvComments(
    @common.Req() request: Request,
    @common.Param() params: WedInvShareWhereUniqueInput
  ): Promise<WedInvComment[]> {
    const query = plainToClass(WedInvCommentFindManyArgs, request.query);
    const results = await this.service.findWedInvComments(params.id, {
      ...query,
      select: {
        comment: true,
        confirmation: true,
        createdAt: true,
        id: true,
        moment: true,
        name: true,
        updatedAt: true,

        wedInvId: {
          select: {
            id: true,
          },
        },

        wedInvShareId: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/wedInvComments")
  @nestAccessControl.UseRoles({
    resource: "WedInvShare",
    action: "update",
    possession: "any",
  })
  async connectWedInvComments(
    @common.Param() params: WedInvShareWhereUniqueInput,
    @common.Body() body: WedInvCommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvComments: {
        connect: body,
      },
    };
    await this.service.updateWedInvShare({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/wedInvComments")
  @nestAccessControl.UseRoles({
    resource: "WedInvShare",
    action: "update",
    possession: "any",
  })
  async updateWedInvComments(
    @common.Param() params: WedInvShareWhereUniqueInput,
    @common.Body() body: WedInvCommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvComments: {
        set: body,
      },
    };
    await this.service.updateWedInvShare({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/wedInvComments")
  @nestAccessControl.UseRoles({
    resource: "WedInvShare",
    action: "update",
    possession: "any",
  })
  async disconnectWedInvComments(
    @common.Param() params: WedInvShareWhereUniqueInput,
    @common.Body() body: WedInvCommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvComments: {
        disconnect: body,
      },
    };
    await this.service.updateWedInvShare({
      where: params,
      data,
      select: { id: true },
    });
  }
}
