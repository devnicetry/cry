import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WedInvGiftService } from "./wedInvGift.service";
import { WedInvGiftGrpcControllerBase } from "./base/wedInvGift.grpc.controller.base";

@swagger.ApiTags("wedInvGifts")
@common.Controller("wedInvGifts")
export class WedInvGiftGrpcController extends WedInvGiftGrpcControllerBase {
  constructor(protected readonly service: WedInvGiftService) {
    super(service);
  }
}
