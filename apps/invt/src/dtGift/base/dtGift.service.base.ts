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
  DtGift as PrismaDtGift,
  WedInvGift as PrismaWedInvGift,
} from "@prisma/client";

export class DtGiftServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.DtGiftCountArgs, "select">): Promise<number> {
    return this.prisma.dtGift.count(args);
  }

  async dtGifts<T extends Prisma.DtGiftFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DtGiftFindManyArgs>
  ): Promise<PrismaDtGift[]> {
    return this.prisma.dtGift.findMany<Prisma.DtGiftFindManyArgs>(args);
  }
  async dtGift<T extends Prisma.DtGiftFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DtGiftFindUniqueArgs>
  ): Promise<PrismaDtGift | null> {
    return this.prisma.dtGift.findUnique(args);
  }
  async createDtGift<T extends Prisma.DtGiftCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DtGiftCreateArgs>
  ): Promise<PrismaDtGift> {
    return this.prisma.dtGift.create<T>(args);
  }
  async updateDtGift<T extends Prisma.DtGiftUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DtGiftUpdateArgs>
  ): Promise<PrismaDtGift> {
    return this.prisma.dtGift.update<T>(args);
  }
  async deleteDtGift<T extends Prisma.DtGiftDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DtGiftDeleteArgs>
  ): Promise<PrismaDtGift> {
    return this.prisma.dtGift.delete(args);
  }

  async findWedInvGifts(
    parentId: string,
    args: Prisma.WedInvGiftFindManyArgs
  ): Promise<PrismaWedInvGift[]> {
    return this.prisma.dtGift
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .wedInvGifts(args);
  }
}
