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
  WedInvPayment as PrismaWedInvPayment,
  DtPaymentMethod as PrismaDtPaymentMethod,
  User as PrismaUser,
  WedInv as PrismaWedInv,
} from "@prisma/client";

export class WedInvPaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.WedInvPaymentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.wedInvPayment.count(args);
  }

  async wedInvPayments<T extends Prisma.WedInvPaymentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WedInvPaymentFindManyArgs>
  ): Promise<PrismaWedInvPayment[]> {
    return this.prisma.wedInvPayment.findMany<Prisma.WedInvPaymentFindManyArgs>(
      args
    );
  }
  async wedInvPayment<T extends Prisma.WedInvPaymentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WedInvPaymentFindUniqueArgs>
  ): Promise<PrismaWedInvPayment | null> {
    return this.prisma.wedInvPayment.findUnique(args);
  }
  async createWedInvPayment<T extends Prisma.WedInvPaymentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WedInvPaymentCreateArgs>
  ): Promise<PrismaWedInvPayment> {
    return this.prisma.wedInvPayment.create<T>(args);
  }
  async updateWedInvPayment<T extends Prisma.WedInvPaymentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WedInvPaymentUpdateArgs>
  ): Promise<PrismaWedInvPayment> {
    return this.prisma.wedInvPayment.update<T>(args);
  }
  async deleteWedInvPayment<T extends Prisma.WedInvPaymentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WedInvPaymentDeleteArgs>
  ): Promise<PrismaWedInvPayment> {
    return this.prisma.wedInvPayment.delete(args);
  }

  async getDtPaymentMethodId(
    parentId: string
  ): Promise<PrismaDtPaymentMethod | null> {
    return this.prisma.wedInvPayment
      .findUnique({
        where: { id: parentId },
      })
      .dtPaymentMethodId();
  }

  async getUserId(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.wedInvPayment
      .findUnique({
        where: { id: parentId },
      })
      .userId();
  }

  async getWedInvId(parentId: string): Promise<PrismaWedInv | null> {
    return this.prisma.wedInvPayment
      .findUnique({
        where: { id: parentId },
      })
      .wedInvId();
  }
}