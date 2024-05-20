import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WedInvCommentModuleBase } from "./base/wedInvComment.module.base";
import { WedInvCommentService } from "./wedInvComment.service";
import { WedInvCommentController } from "./wedInvComment.controller";
import { WedInvCommentGrpcController } from "./wedInvComment.grpc.controller";

@Module({
  imports: [WedInvCommentModuleBase, forwardRef(() => AuthModule)],
  controllers: [WedInvCommentController, WedInvCommentGrpcController],
  providers: [WedInvCommentService],
  exports: [WedInvCommentService],
})
export class WedInvCommentModule {}
