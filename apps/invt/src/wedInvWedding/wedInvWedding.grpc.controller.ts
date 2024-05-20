import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WedInvWeddingService } from "./wedInvWedding.service";
import { WedInvWeddingGrpcControllerBase } from "./base/wedInvWedding.grpc.controller.base";

@swagger.ApiTags("wedInvWeddings")
@common.Controller("wedInvWeddings")
export class WedInvWeddingGrpcController extends WedInvWeddingGrpcControllerBase {
  constructor(protected readonly service: WedInvWeddingService) {
    super(service);
  }
}
