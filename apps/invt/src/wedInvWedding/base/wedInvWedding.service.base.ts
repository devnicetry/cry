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
  WedInvWedding as PrismaWedInvWedding,
  WedInv as PrismaWedInv,
} from "@prisma/client";

export class WedInvWeddingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.WedInvWeddingCountArgs, "select">
  ): Promise<number> {
    return this.prisma.wedInvWedding.count(args);
  }

  async wedInvWeddings<T extends Prisma.WedInvWeddingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WedInvWeddingFindManyArgs>
  ): Promise<PrismaWedInvWedding[]> {
    return this.prisma.wedInvWedding.findMany<Prisma.WedInvWeddingFindManyArgs>(
      args
    );
  }
  async wedInvWedding<T extends Prisma.WedInvWeddingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WedInvWeddingFindUniqueArgs>
  ): Promise<PrismaWedInvWedding | null> {
    return this.prisma.wedInvWedding.findUnique(args);
  }
  async createWedInvWedding<T extends Prisma.WedInvWeddingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WedInvWeddingCreateArgs>
  ): Promise<PrismaWedInvWedding> {
    return this.prisma.wedInvWedding.create<T>(args);
  }
  async updateWedInvWedding<T extends Prisma.WedInvWeddingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WedInvWeddingUpdateArgs>
  ): Promise<PrismaWedInvWedding> {
    return this.prisma.wedInvWedding.update<T>(args);
  }
  async deleteWedInvWedding<T extends Prisma.WedInvWeddingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WedInvWeddingDeleteArgs>
  ): Promise<PrismaWedInvWedding> {
    return this.prisma.wedInvWedding.delete(args);
  }

  async getWedInvId(parentId: string): Promise<PrismaWedInv | null> {
    return this.prisma.wedInvWedding
      .findUnique({
        where: { id: parentId },
      })
      .wedInvId();
  }
}
