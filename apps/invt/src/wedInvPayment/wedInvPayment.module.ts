import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WedInvPaymentModuleBase } from "./base/wedInvPayment.module.base";
import { WedInvPaymentService } from "./wedInvPayment.service";
import { WedInvPaymentController } from "./wedInvPayment.controller";
import { WedInvPaymentGrpcController } from "./wedInvPayment.grpc.controller";

@Module({
  imports: [WedInvPaymentModuleBase, forwardRef(() => AuthModule)],
  controllers: [WedInvPaymentController, WedInvPaymentGrpcController],
  providers: [WedInvPaymentService],
  exports: [WedInvPaymentService],
})
export class WedInvPaymentModule {}
