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
import { WedInvGalleryService } from "../wedInvGallery.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { WedInvGalleryCreateInput } from "./WedInvGalleryCreateInput";
import { WedInvGallery } from "./WedInvGallery";
import { WedInvGalleryFindManyArgs } from "./WedInvGalleryFindManyArgs";
import { WedInvGalleryWhereUniqueInput } from "./WedInvGalleryWhereUniqueInput";
import { WedInvGalleryUpdateInput } from "./WedInvGalleryUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class WedInvGalleryControllerBase {
  constructor(
    protected readonly service: WedInvGalleryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WedInvGallery })
  @nestAccessControl.UseRoles({
    resource: "WedInvGallery",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createWedInvGallery(
    @common.Body() data: WedInvGalleryCreateInput
  ): Promise<WedInvGallery> {
    return await this.service.createWedInvGallery({
      data: {
        ...data,

        wedInv: data.wedInv
          ? {
              connect: data.wedInv,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        name: true,
        photo: true,
        updatedAt: true,

        wedInv: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [WedInvGallery] })
  @ApiNestedQuery(WedInvGalleryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WedInvGallery",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async wedInvGalleries(
    @common.Req() request: Request
  ): Promise<WedInvGallery[]> {
    const args = plainToClass(WedInvGalleryFindManyArgs, request.query);
    return this.service.wedInvGalleries({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        photo: true,
        updatedAt: true,

        wedInv: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WedInvGallery })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WedInvGallery",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async wedInvGallery(
    @common.Param() params: WedInvGalleryWhereUniqueInput
  ): Promise<WedInvGallery | null> {
    const result = await this.service.wedInvGallery({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        photo: true,
        updatedAt: true,

        wedInv: {
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
  @swagger.ApiOkResponse({ type: WedInvGallery })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WedInvGallery",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateWedInvGallery(
    @common.Param() params: WedInvGalleryWhereUniqueInput,
    @common.Body() data: WedInvGalleryUpdateInput
  ): Promise<WedInvGallery | null> {
    try {
      return await this.service.updateWedInvGallery({
        where: params,
        data: {
          ...data,

          wedInv: data.wedInv
            ? {
                connect: data.wedInv,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          name: true,
          photo: true,
          updatedAt: true,

          wedInv: {
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
  @swagger.ApiOkResponse({ type: WedInvGallery })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WedInvGallery",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteWedInvGallery(
    @common.Param() params: WedInvGalleryWhereUniqueInput
  ): Promise<WedInvGallery | null> {
    try {
      return await this.service.deleteWedInvGallery({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          photo: true,
          updatedAt: true,

          wedInv: {
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
}
