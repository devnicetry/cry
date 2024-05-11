import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WedInvWeddingServiceBase } from "./base/wedInvWedding.service.base";

@Injectable()
export class WedInvWeddingService extends WedInvWeddingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
