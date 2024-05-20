import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WedInvCommentService } from "./wedInvComment.service";
import { WedInvCommentGrpcControllerBase } from "./base/wedInvComment.grpc.controller.base";

@swagger.ApiTags("wedInvComments")
@common.Controller("wedInvComments")
export class WedInvCommentGrpcController extends WedInvCommentGrpcControllerBase {
  constructor(protected readonly service: WedInvCommentService) {
    super(service);
  }
}
