import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WedInvStoryService } from "./wedInvStory.service";
import { WedInvStoryGrpcControllerBase } from "./base/wedInvStory.grpc.controller.base";

@swagger.ApiTags("wedInvStories")
@common.Controller("wedInvStories")
export class WedInvStoryGrpcController extends WedInvStoryGrpcControllerBase {
  constructor(protected readonly service: WedInvStoryService) {
    super(service);
  }
}
