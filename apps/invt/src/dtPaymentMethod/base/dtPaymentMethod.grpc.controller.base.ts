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
import { GrpcMethod } from "@nestjs/microservices";
import { DtPaymentMethodService } from "../dtPaymentMethod.service";
import { DtPaymentMethodCreateInput } from "./DtPaymentMethodCreateInput";
import { DtPaymentMethodWhereInput } from "./DtPaymentMethodWhereInput";
import { DtPaymentMethodWhereUniqueInput } from "./DtPaymentMethodWhereUniqueInput";
import { DtPaymentMethodFindManyArgs } from "./DtPaymentMethodFindManyArgs";
import { DtPaymentMethodUpdateInput } from "./DtPaymentMethodUpdateInput";
import { DtPaymentMethod } from "./DtPaymentMethod";
import { WedInvPaymentFindManyArgs } from "../../wedInvPayment/base/WedInvPaymentFindManyArgs";
import { WedInvPayment } from "../../wedInvPayment/base/WedInvPayment";
import { WedInvPaymentWhereUniqueInput } from "../../wedInvPayment/base/WedInvPaymentWhereUniqueInput";

export class DtPaymentMethodGrpcControllerBase {
  constructor(protected readonly service: DtPaymentMethodService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DtPaymentMethod })
  @GrpcMethod("DtPaymentMethodService", "createDtPaymentMethod")
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

  @common.Get()
  @swagger.ApiOkResponse({ type: [DtPaymentMethod] })
  @ApiNestedQuery(DtPaymentMethodFindManyArgs)
  @GrpcMethod("DtPaymentMethodService", "dtPaymentMethods")
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

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DtPaymentMethod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("DtPaymentMethodService", "dtPaymentMethod")
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

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: DtPaymentMethod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("DtPaymentMethodService", "updateDtPaymentMethod")
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
  @GrpcMethod("DtPaymentMethodService", "deleteDtPaymentMethod")
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

  @common.Get("/:id/wedInvPayments")
  @ApiNestedQuery(WedInvPaymentFindManyArgs)
  @GrpcMethod("DtPaymentMethodService", "findManyWedInvPayments")
  async findManyWedInvPayments(
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
  @GrpcMethod("DtPaymentMethodService", "connectWedInvPayments")
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
  @GrpcMethod("DtPaymentMethodService", "updateWedInvPayments")
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
  @GrpcMethod("DtPaymentMethodService", "disconnectWedInvPayments")
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
