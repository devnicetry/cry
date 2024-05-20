import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WedInvShareService } from "./wedInvShare.service";
import { WedInvShareGrpcControllerBase } from "./base/wedInvShare.grpc.controller.base";

@swagger.ApiTags("wedInvShares")
@common.Controller("wedInvShares")
export class WedInvShareGrpcController extends WedInvShareGrpcControllerBase {
  constructor(protected readonly service: WedInvShareService) {
    super(service);
  }
}
