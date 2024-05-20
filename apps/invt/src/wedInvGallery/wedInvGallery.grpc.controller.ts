import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WedInvGalleryService } from "./wedInvGallery.service";
import { WedInvGalleryGrpcControllerBase } from "./base/wedInvGallery.grpc.controller.base";

@swagger.ApiTags("wedInvGalleries")
@common.Controller("wedInvGalleries")
export class WedInvGalleryGrpcController extends WedInvGalleryGrpcControllerBase {
  constructor(protected readonly service: WedInvGalleryService) {
    super(service);
  }
}
