import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WedInvEventService } from "./wedInvEvent.service";
import { WedInvEventGrpcControllerBase } from "./base/wedInvEvent.grpc.controller.base";

@swagger.ApiTags("wedInvEvents")
@common.Controller("wedInvEvents")
export class WedInvEventGrpcController extends WedInvEventGrpcControllerBase {
  constructor(protected readonly service: WedInvEventService) {
    super(service);
  }
}
