import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WedInvGiftModuleBase } from "./base/wedInvGift.module.base";
import { WedInvGiftService } from "./wedInvGift.service";
import { WedInvGiftController } from "./wedInvGift.controller";
import { WedInvGiftGrpcController } from "./wedInvGift.grpc.controller";

@Module({
  imports: [WedInvGiftModuleBase, forwardRef(() => AuthModule)],
  controllers: [WedInvGiftController, WedInvGiftGrpcController],
  providers: [WedInvGiftService],
  exports: [WedInvGiftService],
})
export class WedInvGiftModule {}
