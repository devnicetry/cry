import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WedInvStoryModuleBase } from "./base/wedInvStory.module.base";
import { WedInvStoryService } from "./wedInvStory.service";
import { WedInvStoryController } from "./wedInvStory.controller";
import { WedInvStoryGrpcController } from "./wedInvStory.grpc.controller";

@Module({
  imports: [WedInvStoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [WedInvStoryController, WedInvStoryGrpcController],
  providers: [WedInvStoryService],
  exports: [WedInvStoryService],
})
export class WedInvStoryModule {}
