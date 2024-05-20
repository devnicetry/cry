import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WedInvShareModuleBase } from "./base/wedInvShare.module.base";
import { WedInvShareService } from "./wedInvShare.service";
import { WedInvShareController } from "./wedInvShare.controller";
import { WedInvShareGrpcController } from "./wedInvShare.grpc.controller";

@Module({
  imports: [WedInvShareModuleBase, forwardRef(() => AuthModule)],
  controllers: [WedInvShareController, WedInvShareGrpcController],
  providers: [WedInvShareService],
  exports: [WedInvShareService],
})
export class WedInvShareModule {}
