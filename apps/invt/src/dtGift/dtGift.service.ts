import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DtGiftServiceBase } from "./base/dtGift.service.base";

@Injectable()
export class DtGiftService extends DtGiftServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
