import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WedInvCommentServiceBase } from "./base/wedInvComment.service.base";

@Injectable()
export class WedInvCommentService extends WedInvCommentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
