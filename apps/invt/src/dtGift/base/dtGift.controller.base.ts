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
import { DtGiftService } from "../dtGift.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DtGiftCreateInput } from "./DtGiftCreateInput";
import { DtGift } from "./DtGift";
import { DtGiftFindManyArgs } from "./DtGiftFindManyArgs";
import { DtGiftWhereUniqueInput } from "./DtGiftWhereUniqueInput";
import { DtGiftUpdateInput } from "./DtGiftUpdateInput";
import { WedInvGiftFindManyArgs } from "../../wedInvGift/base/WedInvGiftFindManyArgs";
import { WedInvGift } from "../../wedInvGift/base/WedInvGift";
import { WedInvGiftWhereUniqueInput } from "../../wedInvGift/base/WedInvGiftWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DtGiftControllerBase {
  constructor(
    protected readonly service: DtGiftService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DtGift })
  @nestAccessControl.UseRoles({
    resource: "DtGift",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createDtGift(@common.Body() data: DtGiftCreateInput): Promise<DtGift> {
    return await this.service.createDtGift({
      data: data,
      select: {
        createdAt: true,
        giftType: true,
        icon: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [DtGift] })
  @ApiNestedQuery(DtGiftFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DtGift",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async dtGifts(@common.Req() request: Request): Promise<DtGift[]> {
    const args = plainToClass(DtGiftFindManyArgs, request.query);
    return this.service.dtGifts({
      ...args,
      select: {
        createdAt: true,
        giftType: true,
        icon: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DtGift })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DtGift",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async dtGift(
    @common.Param() params: DtGiftWhereUniqueInput
  ): Promise<DtGift | null> {
    const result = await this.service.dtGift({
      where: params,
      select: {
        createdAt: true,
        giftType: true,
        icon: true,
        id: true,
        name: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: DtGift })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DtGift",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateDtGift(
    @common.Param() params: DtGiftWhereUniqueInput,
    @common.Body() data: DtGiftUpdateInput
  ): Promise<DtGift | null> {
    try {
      return await this.service.updateDtGift({
        where: params,
        data: data,
        select: {
          createdAt: true,
          giftType: true,
          icon: true,
          id: true,
          name: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: DtGift })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DtGift",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDtGift(
    @common.Param() params: DtGiftWhereUniqueInput
  ): Promise<DtGift | null> {
    try {
      return await this.service.deleteDtGift({
        where: params,
        select: {
          createdAt: true,
          giftType: true,
          icon: true,
          id: true,
          name: true,
          updatedAt: true,
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
  @common.Get("/:id/wedInvGifts")
  @ApiNestedQuery(WedInvGiftFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WedInvGift",
    action: "read",
    possession: "any",
  })
  async findWedInvGifts(
    @common.Req() request: Request,
    @common.Param() params: DtGiftWhereUniqueInput
  ): Promise<WedInvGift[]> {
    const query = plainToClass(WedInvGiftFindManyArgs, request.query);
    const results = await this.service.findWedInvGifts(params.id, {
      ...query,
      select: {
        accountName: true,
        accountNo: true,
        accountPhoto: true,
        createdAt: true,
        details: true,

        dtGiftId: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,

        wedInvId: {
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

  @common.Post("/:id/wedInvGifts")
  @nestAccessControl.UseRoles({
    resource: "DtGift",
    action: "update",
    possession: "any",
  })
  async connectWedInvGifts(
    @common.Param() params: DtGiftWhereUniqueInput,
    @common.Body() body: WedInvGiftWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvGifts: {
        connect: body,
      },
    };
    await this.service.updateDtGift({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/wedInvGifts")
  @nestAccessControl.UseRoles({
    resource: "DtGift",
    action: "update",
    possession: "any",
  })
  async updateWedInvGifts(
    @common.Param() params: DtGiftWhereUniqueInput,
    @common.Body() body: WedInvGiftWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvGifts: {
        set: body,
      },
    };
    await this.service.updateDtGift({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/wedInvGifts")
  @nestAccessControl.UseRoles({
    resource: "DtGift",
    action: "update",
    possession: "any",
  })
  async disconnectWedInvGifts(
    @common.Param() params: DtGiftWhereUniqueInput,
    @common.Body() body: WedInvGiftWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvGifts: {
        disconnect: body,
      },
    };
    await this.service.updateDtGift({
      where: params,
      data,
      select: { id: true },
    });
  }
}
