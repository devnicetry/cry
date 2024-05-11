import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WedInvGalleryServiceBase } from "./base/wedInvGallery.service.base";

@Injectable()
export class WedInvGalleryService extends WedInvGalleryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
