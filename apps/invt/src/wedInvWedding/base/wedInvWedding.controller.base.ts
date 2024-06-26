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
import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { WedInvWeddingService } from "../wedInvWedding.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { WedInvWeddingCreateInput } from "./WedInvWeddingCreateInput";
import { WedInvWedding } from "./WedInvWedding";
import { WedInvWeddingFindManyArgs } from "./WedInvWeddingFindManyArgs";
import { WedInvWeddingWhereUniqueInput } from "./WedInvWeddingWhereUniqueInput";
import { WedInvWeddingUpdateInput } from "./WedInvWeddingUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class WedInvWeddingControllerBase {
  constructor(
    protected readonly service: WedInvWeddingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WedInvWedding })
  @nestAccessControl.UseRoles({
    resource: "WedInvWedding",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: WedInvWeddingCreateInput,
  })
  async createWedInvWedding(
    @common.Body() data: WedInvWeddingCreateInput
  ): Promise<WedInvWedding> {
    return await this.service.createWedInvWedding({
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [WedInvWedding] })
  @ApiNestedQuery(WedInvWeddingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WedInvWedding",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async wedInvWeddings(
    @common.Req() request: Request
  ): Promise<WedInvWedding[]> {
    const args = plainToClass(WedInvWeddingFindManyArgs, request.query);
    return this.service.wedInvWeddings({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WedInvWedding })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WedInvWedding",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async wedInvWedding(
    @common.Param() params: WedInvWeddingWhereUniqueInput
  ): Promise<WedInvWedding | null> {
    const result = await this.service.wedInvWedding({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: WedInvWedding })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WedInvWedding",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: WedInvWeddingUpdateInput,
  })
  async updateWedInvWedding(
    @common.Param() params: WedInvWeddingWhereUniqueInput,
    @common.Body() data: WedInvWeddingUpdateInput
  ): Promise<WedInvWedding | null> {
    try {
      return await this.service.updateWedInvWedding({
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
  @swagger.ApiOkResponse({ type: WedInvWedding })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WedInvWedding",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteWedInvWedding(
    @common.Param() params: WedInvWeddingWhereUniqueInput
  ): Promise<WedInvWedding | null> {
    try {
      return await this.service.deleteWedInvWedding({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Put(":id/photo")
  @common.UseInterceptors(FileInterceptor("file"))
  @swagger.ApiConsumes("multipart/form-data")
  @swagger.ApiBody({
    schema: {
      type: "object",

      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiCreatedResponse({
    type: WedInvWedding,
    status: "2XX",
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async uploadPhoto(
    @common.Param()
    params: WedInvWeddingWhereUniqueInput,
    @common.UploadedFile()
    file: Express.Multer.File
  ): Promise<WedInvWedding> {
    return this.service.uploadPhoto(
      {
        where: params,
      },
      Object.assign(file, {
        filename: file.originalname,
      })
    );
  }

  @common.Get(":id/photo")
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiOkResponse({
    type: common.StreamableFile,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async downloadPhoto(
    @common.Param()
    params: WedInvWeddingWhereUniqueInput,
    @common.Res({
      passthrough: true,
    })
    res: Response
  ): Promise<common.StreamableFile> {
    const result = await this.service.downloadPhoto({
      where: params,
    });

    if (result === null) {
      throw new errors.NotFoundException(
        "No resource was found for ",
        JSON.stringify(params)
      );
    }

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${result.filename}`
    );
    res.setHeader("Content-Type", result.mimetype);
    return result.stream;
  }

  @common.Delete(":id/photo")
  @swagger.ApiOkResponse({
    type: WedInvWedding,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async deletePhoto(
    @common.Param()
    params: WedInvWeddingWhereUniqueInput
  ): Promise<WedInvWedding> {
    return this.service.deletePhoto({
      where: params,
    });
  }
}
