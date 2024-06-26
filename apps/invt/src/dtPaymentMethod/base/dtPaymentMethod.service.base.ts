/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  DtPaymentMethod as PrismaDtPaymentMethod,
  WedInvPayment as PrismaWedInvPayment,
} from "@prisma/client";

import { LocalStorageService } from "src/storage/providers/local/local.storage.service";
import { InputJsonValue } from "src/types";
import { FileDownload, FileUpload } from "src/storage/base/storage.types";
import { LocalStorageFile } from "src/storage/providers/local/local.storage.types";

export class DtPaymentMethodServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly localStorageService: LocalStorageService
  ) {}

  async count(
    args: Omit<Prisma.DtPaymentMethodCountArgs, "select">
  ): Promise<number> {
    return this.prisma.dtPaymentMethod.count(args);
  }

  async dtPaymentMethods<T extends Prisma.DtPaymentMethodFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DtPaymentMethodFindManyArgs>
  ): Promise<PrismaDtPaymentMethod[]> {
    return this.prisma.dtPaymentMethod.findMany<Prisma.DtPaymentMethodFindManyArgs>(
      args
    );
  }
  async dtPaymentMethod<T extends Prisma.DtPaymentMethodFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DtPaymentMethodFindUniqueArgs>
  ): Promise<PrismaDtPaymentMethod | null> {
    return this.prisma.dtPaymentMethod.findUnique(args);
  }
  async createDtPaymentMethod<T extends Prisma.DtPaymentMethodCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DtPaymentMethodCreateArgs>
  ): Promise<PrismaDtPaymentMethod> {
    return this.prisma.dtPaymentMethod.create<T>(args);
  }
  async updateDtPaymentMethod<T extends Prisma.DtPaymentMethodUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DtPaymentMethodUpdateArgs>
  ): Promise<PrismaDtPaymentMethod> {
    return this.prisma.dtPaymentMethod.update<T>(args);
  }
  async deleteDtPaymentMethod<T extends Prisma.DtPaymentMethodDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DtPaymentMethodDeleteArgs>
  ): Promise<PrismaDtPaymentMethod> {
    return this.prisma.dtPaymentMethod.delete(args);
  }

  async uploadIcon<T extends Prisma.DtPaymentMethodFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DtPaymentMethodFindUniqueArgs>,
    file: FileUpload
  ): Promise<PrismaDtPaymentMethod> {
    file.filename = `profilePicture-${args.where.id}.${file.filename
      .split(".")
      .pop()}`;
    const containerPath = "/DT/Payment Methods/";
    const icon = await this.localStorageService.uploadFile(
      file,
      [],
      10000000,
      containerPath
    );

    return await this.prisma.dtPaymentMethod.update({
      where: args.where,

      data: {
        icon: icon as InputJsonValue,
      },
    });
  }

  async downloadIcon<T extends Prisma.DtPaymentMethodFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DtPaymentMethodFindUniqueArgs>
  ): Promise<FileDownload> {
    const { icon } = await this.prisma.dtPaymentMethod.findUniqueOrThrow({
      where: args.where,
    });

    return await this.localStorageService.downloadFile(
      icon as unknown as LocalStorageFile
    );
  }

  async deleteIcon<T extends Prisma.DtPaymentMethodFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DtPaymentMethodFindUniqueArgs>
  ): Promise<PrismaDtPaymentMethod> {
    const { icon } = await this.prisma.dtPaymentMethod.findUniqueOrThrow({
      where: args.where,
    });

    await this.localStorageService.deleteFile(
      icon as unknown as LocalStorageFile
    );

    return await this.prisma.dtPaymentMethod.update({
      where: args.where,

      data: {
        icon: Prisma.DbNull,
      },
    });
  }

  async findWedInvPayments(
    parentId: string,
    args: Prisma.WedInvPaymentFindManyArgs
  ): Promise<PrismaWedInvPayment[]> {
    return this.prisma.dtPaymentMethod
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .wedInvPayments(args);
  }
}
