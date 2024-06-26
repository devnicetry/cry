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
import { WedInvService } from "../wedInv.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Public } from "../../decorators/public.decorator";
import { WedInvCreateInput } from "./WedInvCreateInput";
import { WedInv } from "./WedInv";
import { WedInvFindManyArgs } from "./WedInvFindManyArgs";
import { WedInvWhereUniqueInput } from "./WedInvWhereUniqueInput";
import { WedInvUpdateInput } from "./WedInvUpdateInput";
import { WedInvCommentFindManyArgs } from "../../wedInvComment/base/WedInvCommentFindManyArgs";
import { WedInvComment } from "../../wedInvComment/base/WedInvComment";
import { WedInvCommentWhereUniqueInput } from "../../wedInvComment/base/WedInvCommentWhereUniqueInput";
import { WedInvEventFindManyArgs } from "../../wedInvEvent/base/WedInvEventFindManyArgs";
import { WedInvEvent } from "../../wedInvEvent/base/WedInvEvent";
import { WedInvEventWhereUniqueInput } from "../../wedInvEvent/base/WedInvEventWhereUniqueInput";
import { WedInvGalleryFindManyArgs } from "../../wedInvGallery/base/WedInvGalleryFindManyArgs";
import { WedInvGallery } from "../../wedInvGallery/base/WedInvGallery";
import { WedInvGalleryWhereUniqueInput } from "../../wedInvGallery/base/WedInvGalleryWhereUniqueInput";
import { WedInvGiftFindManyArgs } from "../../wedInvGift/base/WedInvGiftFindManyArgs";
import { WedInvGift } from "../../wedInvGift/base/WedInvGift";
import { WedInvGiftWhereUniqueInput } from "../../wedInvGift/base/WedInvGiftWhereUniqueInput";
import { WedInvPaymentFindManyArgs } from "../../wedInvPayment/base/WedInvPaymentFindManyArgs";
import { WedInvPayment } from "../../wedInvPayment/base/WedInvPayment";
import { WedInvPaymentWhereUniqueInput } from "../../wedInvPayment/base/WedInvPaymentWhereUniqueInput";
import { WedInvPresetFindManyArgs } from "../../wedInvPreset/base/WedInvPresetFindManyArgs";
import { WedInvPreset } from "../../wedInvPreset/base/WedInvPreset";
import { WedInvPresetWhereUniqueInput } from "../../wedInvPreset/base/WedInvPresetWhereUniqueInput";
import { WedInvShareFindManyArgs } from "../../wedInvShare/base/WedInvShareFindManyArgs";
import { WedInvShare } from "../../wedInvShare/base/WedInvShare";
import { WedInvShareWhereUniqueInput } from "../../wedInvShare/base/WedInvShareWhereUniqueInput";
import { WedInvStoryFindManyArgs } from "../../wedInvStory/base/WedInvStoryFindManyArgs";
import { WedInvStory } from "../../wedInvStory/base/WedInvStory";
import { WedInvStoryWhereUniqueInput } from "../../wedInvStory/base/WedInvStoryWhereUniqueInput";
import { WedInvVideoFindManyArgs } from "../../wedInvVideo/base/WedInvVideoFindManyArgs";
import { WedInvVideo } from "../../wedInvVideo/base/WedInvVideo";
import { WedInvVideoWhereUniqueInput } from "../../wedInvVideo/base/WedInvVideoWhereUniqueInput";
import { WedInvWeddingFindManyArgs } from "../../wedInvWedding/base/WedInvWeddingFindManyArgs";
import { WedInvWedding } from "../../wedInvWedding/base/WedInvWedding";
import { WedInvWeddingWhereUniqueInput } from "../../wedInvWedding/base/WedInvWeddingWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class WedInvControllerBase {
  constructor(
    protected readonly service: WedInvService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WedInv })
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: WedInvCreateInput,
  })
  async createWedInv(@common.Body() data: WedInvCreateInput): Promise<WedInv> {
    return await this.service.createWedInv({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        status: true,
        updatedAt: true,
        url: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [WedInv] })
  @ApiNestedQuery(WedInvFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async wedInvs(@common.Req() request: Request): Promise<WedInv[]> {
    const args = plainToClass(WedInvFindManyArgs, request.query);
    return this.service.wedInvs({
      ...args,
      select: {
        createdAt: true,
        id: true,
        status: true,
        updatedAt: true,
        url: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @Public()
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WedInv })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async wedInv(
    @common.Param() params: WedInvWhereUniqueInput
  ): Promise<WedInv | null> {
    const result = await this.service.wedInv({
      where: params,
      select: {
        createdAt: true,
        id: true,
        status: true,
        updatedAt: true,
        url: true,

        user: {
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
  @swagger.ApiOkResponse({ type: WedInv })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: WedInvUpdateInput,
  })
  async updateWedInv(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() data: WedInvUpdateInput
  ): Promise<WedInv | null> {
    try {
      return await this.service.updateWedInv({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          status: true,
          updatedAt: true,
          url: true,

          user: {
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
  @swagger.ApiOkResponse({ type: WedInv })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteWedInv(
    @common.Param() params: WedInvWhereUniqueInput
  ): Promise<WedInv | null> {
    try {
      return await this.service.deleteWedInv({
        where: params,
        select: {
          createdAt: true,
          id: true,
          status: true,
          updatedAt: true,
          url: true,

          user: {
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
    @common.Param() params: WedInvWhereUniqueInput
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

        wedInv: {
          select: {
            id: true,
          },
        },

        wedInvShare: {
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
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async connectWedInvComments(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvCommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvComments: {
        connect: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/wedInvComments")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async updateWedInvComments(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvCommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvComments: {
        set: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/wedInvComments")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async disconnectWedInvComments(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvCommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvComments: {
        disconnect: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/wedInvEvents")
  @ApiNestedQuery(WedInvEventFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WedInvEvent",
    action: "read",
    possession: "any",
  })
  async findWedInvEvents(
    @common.Req() request: Request,
    @common.Param() params: WedInvWhereUniqueInput
  ): Promise<WedInvEvent[]> {
    const query = plainToClass(WedInvEventFindManyArgs, request.query);
    const results = await this.service.findWedInvEvents(params.id, {
      ...query,
      select: {
        address: true,
        createdAt: true,
        date: true,
        eventEnd: true,
        eventStart: true,
        id: true,
        maps: true,
        name: true,
        place: true,
        updatedAt: true,

        wedInv: {
          select: {
            id: true,
          },
        },

        zone: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/wedInvEvents")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async connectWedInvEvents(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvEvents: {
        connect: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/wedInvEvents")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async updateWedInvEvents(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvEvents: {
        set: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/wedInvEvents")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async disconnectWedInvEvents(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvEvents: {
        disconnect: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/wedInvGalleries")
  @ApiNestedQuery(WedInvGalleryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WedInvGallery",
    action: "read",
    possession: "any",
  })
  async findWedInvGalleries(
    @common.Req() request: Request,
    @common.Param() params: WedInvWhereUniqueInput
  ): Promise<WedInvGallery[]> {
    const query = plainToClass(WedInvGalleryFindManyArgs, request.query);
    const results = await this.service.findWedInvGalleries(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/wedInvGalleries")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async connectWedInvGalleries(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvGalleryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvGalleries: {
        connect: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/wedInvGalleries")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async updateWedInvGalleries(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvGalleryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvGalleries: {
        set: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/wedInvGalleries")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async disconnectWedInvGalleries(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvGalleryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvGalleries: {
        disconnect: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
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
    @common.Param() params: WedInvWhereUniqueInput
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

        dtGift: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,

        wedInv: {
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
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async connectWedInvGifts(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvGiftWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvGifts: {
        connect: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/wedInvGifts")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async updateWedInvGifts(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvGiftWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvGifts: {
        set: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/wedInvGifts")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async disconnectWedInvGifts(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvGiftWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvGifts: {
        disconnect: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/wedInvPayments")
  @ApiNestedQuery(WedInvPaymentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WedInvPayment",
    action: "read",
    possession: "any",
  })
  async findWedInvPayments(
    @common.Req() request: Request,
    @common.Param() params: WedInvWhereUniqueInput
  ): Promise<WedInvPayment[]> {
    const query = plainToClass(WedInvPaymentFindManyArgs, request.query);
    const results = await this.service.findWedInvPayments(params.id, {
      ...query,
      select: {
        accountName: true,
        accountNo: true,
        amount: true,
        createdAt: true,

        dtPaymentMethod: {
          select: {
            id: true,
          },
        },

        evidence: true,
        id: true,
        noRef: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        wedInv: {
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

  @common.Post("/:id/wedInvPayments")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async connectWedInvPayments(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvPaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvPayments: {
        connect: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/wedInvPayments")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async updateWedInvPayments(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvPaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvPayments: {
        set: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/wedInvPayments")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async disconnectWedInvPayments(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvPaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvPayments: {
        disconnect: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/wedInvPresets")
  @ApiNestedQuery(WedInvPresetFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WedInvPreset",
    action: "read",
    possession: "any",
  })
  async findWedInvPresets(
    @common.Req() request: Request,
    @common.Param() params: WedInvWhereUniqueInput
  ): Promise<WedInvPreset[]> {
    const query = plainToClass(WedInvPresetFindManyArgs, request.query);
    const results = await this.service.findWedInvPresets(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,

        wedInv: {
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

  @common.Post("/:id/wedInvPresets")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async connectWedInvPresets(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvPresetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvPresets: {
        connect: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/wedInvPresets")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async updateWedInvPresets(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvPresetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvPresets: {
        set: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/wedInvPresets")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async disconnectWedInvPresets(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvPresetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvPresets: {
        disconnect: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/wedInvShares")
  @ApiNestedQuery(WedInvShareFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WedInvShare",
    action: "read",
    possession: "any",
  })
  async findWedInvShares(
    @common.Req() request: Request,
    @common.Param() params: WedInvWhereUniqueInput
  ): Promise<WedInvShare[]> {
    const query = plainToClass(WedInvShareFindManyArgs, request.query);
    const results = await this.service.findWedInvShares(params.id, {
      ...query,
      select: {
        createdAt: true,
        frequency: true,
        id: true,
        identity: true,
        link: true,
        name: true,
        open: true,
        updatedAt: true,

        wedInv: {
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

  @common.Post("/:id/wedInvShares")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async connectWedInvShares(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvShareWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvShares: {
        connect: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/wedInvShares")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async updateWedInvShares(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvShareWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvShares: {
        set: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/wedInvShares")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async disconnectWedInvShares(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvShareWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvShares: {
        disconnect: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/wedInvStories")
  @ApiNestedQuery(WedInvStoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WedInvStory",
    action: "read",
    possession: "any",
  })
  async findWedInvStories(
    @common.Req() request: Request,
    @common.Param() params: WedInvWhereUniqueInput
  ): Promise<WedInvStory[]> {
    const query = plainToClass(WedInvStoryFindManyArgs, request.query);
    const results = await this.service.findWedInvStories(params.id, {
      ...query,
      select: {
        createdAt: true,
        date: true,
        description: true,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/wedInvStories")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async connectWedInvStories(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvStoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvStories: {
        connect: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/wedInvStories")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async updateWedInvStories(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvStoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvStories: {
        set: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/wedInvStories")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async disconnectWedInvStories(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvStoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvStories: {
        disconnect: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/wedInvVideos")
  @ApiNestedQuery(WedInvVideoFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WedInvVideo",
    action: "read",
    possession: "any",
  })
  async findWedInvVideos(
    @common.Req() request: Request,
    @common.Param() params: WedInvWhereUniqueInput
  ): Promise<WedInvVideo[]> {
    const query = plainToClass(WedInvVideoFindManyArgs, request.query);
    const results = await this.service.findWedInvVideos(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
        video: true,

        wedInv: {
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

  @common.Post("/:id/wedInvVideos")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async connectWedInvVideos(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvVideoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvVideos: {
        connect: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/wedInvVideos")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async updateWedInvVideos(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvVideoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvVideos: {
        set: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/wedInvVideos")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async disconnectWedInvVideos(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvVideoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvVideos: {
        disconnect: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/wedInvWeddings")
  @ApiNestedQuery(WedInvWeddingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WedInvWedding",
    action: "read",
    possession: "any",
  })
  async findWedInvWeddings(
    @common.Req() request: Request,
    @common.Param() params: WedInvWhereUniqueInput
  ): Promise<WedInvWedding[]> {
    const query = plainToClass(WedInvWeddingFindManyArgs, request.query);
    const results = await this.service.findWedInvWeddings(params.id, {
      ...query,
      select: {
        createdAt: true,
        father: true,
        gender: true,
        id: true,
        mother: true,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/wedInvWeddings")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async connectWedInvWeddings(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvWeddingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvWeddings: {
        connect: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/wedInvWeddings")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async updateWedInvWeddings(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvWeddingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvWeddings: {
        set: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/wedInvWeddings")
  @nestAccessControl.UseRoles({
    resource: "WedInv",
    action: "update",
    possession: "any",
  })
  async disconnectWedInvWeddings(
    @common.Param() params: WedInvWhereUniqueInput,
    @common.Body() body: WedInvWeddingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvWeddings: {
        disconnect: body,
      },
    };
    await this.service.updateWedInv({
      where: params,
      data,
      select: { id: true },
    });
  }
}
