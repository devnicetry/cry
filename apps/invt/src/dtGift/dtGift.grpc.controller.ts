import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DtGiftService } from "./dtGift.service";
import { DtGiftGrpcControllerBase } from "./base/dtGift.grpc.controller.base";

@swagger.ApiTags("dtGifts")
@common.Controller("dtGifts")
export class DtGiftGrpcController extends DtGiftGrpcControllerBase {
  constructor(protected readonly service: DtGiftService) {
    super(service);
  }
}
