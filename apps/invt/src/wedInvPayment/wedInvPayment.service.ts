import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WedInvPaymentServiceBase } from "./base/wedInvPayment.service.base";

@Injectable()
export class WedInvPaymentService extends WedInvPaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
