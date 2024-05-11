import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DtPaymentMethodServiceBase } from "./base/dtPaymentMethod.service.base";

@Injectable()
export class DtPaymentMethodService extends DtPaymentMethodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
