import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DtPaymentMethodModuleBase } from "./base/dtPaymentMethod.module.base";
import { DtPaymentMethodService } from "./dtPaymentMethod.service";
import { DtPaymentMethodController } from "./dtPaymentMethod.controller";
import { DtPaymentMethodGrpcController } from "./dtPaymentMethod.grpc.controller";

@Module({
  imports: [DtPaymentMethodModuleBase, forwardRef(() => AuthModule)],
  controllers: [DtPaymentMethodController, DtPaymentMethodGrpcController],
  providers: [DtPaymentMethodService],
  exports: [DtPaymentMethodService],
})
export class DtPaymentMethodModule {}
