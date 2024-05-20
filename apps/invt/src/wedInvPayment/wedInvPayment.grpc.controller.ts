import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WedInvPaymentService } from "./wedInvPayment.service";
import { WedInvPaymentGrpcControllerBase } from "./base/wedInvPayment.grpc.controller.base";

@swagger.ApiTags("wedInvPayments")
@common.Controller("wedInvPayments")
export class WedInvPaymentGrpcController extends WedInvPaymentGrpcControllerBase {
  constructor(protected readonly service: WedInvPaymentService) {
    super(service);
  }
}
