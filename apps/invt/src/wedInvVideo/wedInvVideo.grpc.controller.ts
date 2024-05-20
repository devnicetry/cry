import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WedInvVideoService } from "./wedInvVideo.service";
import { WedInvVideoGrpcControllerBase } from "./base/wedInvVideo.grpc.controller.base";

@swagger.ApiTags("wedInvVideos")
@common.Controller("wedInvVideos")
export class WedInvVideoGrpcController extends WedInvVideoGrpcControllerBase {
  constructor(protected readonly service: WedInvVideoService) {
    super(service);
  }
}
