import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WedInvStoryServiceBase } from "./base/wedInvStory.service.base";

@Injectable()
export class WedInvStoryService extends WedInvStoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
