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
import { DtPaymentMethodService } from "../dtPaymentMethod.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DtPaymentMethodCreateInput } from "./DtPaymentMethodCreateInput";
import { DtPaymentMethod } from "./DtPaymentMethod";
import { DtPaymentMethodFindManyArgs } from "./DtPaymentMethodFindManyArgs";
import { DtPaymentMethodWhereUniqueInput } from "./DtPaymentMethodWhereUniqueInput";
import { DtPaymentMethodUpdateInput } from "./DtPaymentMethodUpdateInput";
import { WedInvPaymentFindManyArgs } from "../../wedInvPayment/base/WedInvPaymentFindManyArgs";
import { WedInvPayment } from "../../wedInvPayment/base/WedInvPayment";
import { WedInvPaymentWhereUniqueInput } from "../../wedInvPayment/base/WedInvPaymentWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DtPaymentMethodControllerBase {
  constructor(
    protected readonly service: DtPaymentMethodService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DtPaymentMethod })
  @nestAccessControl.UseRoles({
    resource: "DtPaymentMethod",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createDtPaymentMethod(
    @common.Body() data: DtPaymentMethodCreateInput
  ): Promise<DtPaymentMethod> {
    return await this.service.createDtPaymentMethod({
      data: data,
      select: {
        account: true,
        accountName: true,
        accountNo: true,
        accountType: true,
        createdAt: true,
        icon: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [DtPaymentMethod] })
  @ApiNestedQuery(DtPaymentMethodFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DtPaymentMethod",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async dtPaymentMethods(
    @common.Req() request: Request
  ): Promise<DtPaymentMethod[]> {
    const args = plainToClass(DtPaymentMethodFindManyArgs, request.query);
    return this.service.dtPaymentMethods({
      ...args,
      select: {
        account: true,
        accountName: true,
        accountNo: true,
        accountType: true,
        createdAt: true,
        icon: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DtPaymentMethod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DtPaymentMethod",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async dtPaymentMethod(
    @common.Param() params: DtPaymentMethodWhereUniqueInput
  ): Promise<DtPaymentMethod | null> {
    const result = await this.service.dtPaymentMethod({
      where: params,
      select: {
        account: true,
        accountName: true,
        accountNo: true,
        accountType: true,
        createdAt: true,
        icon: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: DtPaymentMethod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DtPaymentMethod",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateDtPaymentMethod(
    @common.Param() params: DtPaymentMethodWhereUniqueInput,
    @common.Body() data: DtPaymentMethodUpdateInput
  ): Promise<DtPaymentMethod | null> {
    try {
      return await this.service.updateDtPaymentMethod({
        where: params,
        data: data,
        select: {
          account: true,
          accountName: true,
          accountNo: true,
          accountType: true,
          createdAt: true,
          icon: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: DtPaymentMethod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DtPaymentMethod",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDtPaymentMethod(
    @common.Param() params: DtPaymentMethodWhereUniqueInput
  ): Promise<DtPaymentMethod | null> {
    try {
      return await this.service.deleteDtPaymentMethod({
        where: params,
        select: {
          account: true,
          accountName: true,
          accountNo: true,
          accountType: true,
          createdAt: true,
          icon: true,
          id: true,
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
  @common.Get("/:id/wedInvPayments")
  @ApiNestedQuery(WedInvPaymentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WedInvPayment",
    action: "read",
    possession: "any",
  })
  async findWedInvPayments(
    @common.Req() request: Request,
    @common.Param() params: DtPaymentMethodWhereUniqueInput
  ): Promise<WedInvPayment[]> {
    const query = plainToClass(WedInvPaymentFindManyArgs, request.query);
    const results = await this.service.findWedInvPayments(params.id, {
      ...query,
      select: {
        accountName: true,
        accountNo: true,
        amount: true,
        createdAt: true,

        dtPaymentMethodId: {
          select: {
            id: true,
          },
        },

        evidence: true,
        id: true,
        noRef: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },

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

  @common.Post("/:id/wedInvPayments")
  @nestAccessControl.UseRoles({
    resource: "DtPaymentMethod",
    action: "update",
    possession: "any",
  })
  async connectWedInvPayments(
    @common.Param() params: DtPaymentMethodWhereUniqueInput,
    @common.Body() body: WedInvPaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvPayments: {
        connect: body,
      },
    };
    await this.service.updateDtPaymentMethod({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/wedInvPayments")
  @nestAccessControl.UseRoles({
    resource: "DtPaymentMethod",
    action: "update",
    possession: "any",
  })
  async updateWedInvPayments(
    @common.Param() params: DtPaymentMethodWhereUniqueInput,
    @common.Body() body: WedInvPaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvPayments: {
        set: body,
      },
    };
    await this.service.updateDtPaymentMethod({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/wedInvPayments")
  @nestAccessControl.UseRoles({
    resource: "DtPaymentMethod",
    action: "update",
    possession: "any",
  })
  async disconnectWedInvPayments(
    @common.Param() params: DtPaymentMethodWhereUniqueInput,
    @common.Body() body: WedInvPaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wedInvPayments: {
        disconnect: body,
      },
    };
    await this.service.updateDtPaymentMethod({
      where: params,
      data,
      select: { id: true },
    });
  }
}