import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WedInvVideoModuleBase } from "./base/wedInvVideo.module.base";
import { WedInvVideoService } from "./wedInvVideo.service";
import { WedInvVideoController } from "./wedInvVideo.controller";
import { WedInvVideoGrpcController } from "./wedInvVideo.grpc.controller";

@Module({
  imports: [WedInvVideoModuleBase, forwardRef(() => AuthModule)],
  controllers: [WedInvVideoController, WedInvVideoGrpcController],
  providers: [WedInvVideoService],
  exports: [WedInvVideoService],
})
export class WedInvVideoModule {}
