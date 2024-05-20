import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WedInvPresetService } from "./wedInvPreset.service";
import { WedInvPresetGrpcControllerBase } from "./base/wedInvPreset.grpc.controller.base";

@swagger.ApiTags("wedInvPresets")
@common.Controller("wedInvPresets")
export class WedInvPresetGrpcController extends WedInvPresetGrpcControllerBase {
  constructor(protected readonly service: WedInvPresetService) {
    super(service);
  }
}
