import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WedInvGiftServiceBase } from "./base/wedInvGift.service.base";

@Injectable()
export class WedInvGiftService extends WedInvGiftServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
