import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DtPaymentMethodService } from "./dtPaymentMethod.service";
import { DtPaymentMethodGrpcControllerBase } from "./base/dtPaymentMethod.grpc.controller.base";

@swagger.ApiTags("dtPaymentMethods")
@common.Controller("dtPaymentMethods")
export class DtPaymentMethodGrpcController extends DtPaymentMethodGrpcControllerBase {
  constructor(protected readonly service: DtPaymentMethodService) {
    super(service);
  }
}
