import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DtGiftModuleBase } from "./base/dtGift.module.base";
import { DtGiftService } from "./dtGift.service";
import { DtGiftController } from "./dtGift.controller";
import { DtGiftGrpcController } from "./dtGift.grpc.controller";

@Module({
  imports: [DtGiftModuleBase, forwardRef(() => AuthModule)],
  controllers: [DtGiftController, DtGiftGrpcController],
  providers: [DtGiftService],
  exports: [DtGiftService],
})
export class DtGiftModule {}
