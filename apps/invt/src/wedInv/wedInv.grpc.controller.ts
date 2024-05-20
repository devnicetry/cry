import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WedInvService } from "./wedInv.service";
import { WedInvGrpcControllerBase } from "./base/wedInv.grpc.controller.base";

@swagger.ApiTags("wedInvs")
@common.Controller("wedInvs")
export class WedInvGrpcController extends WedInvGrpcControllerBase {
  constructor(protected readonly service: WedInvService) {
    super(service);
  }
}
