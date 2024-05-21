import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WedInvCommentModuleBase } from "./base/wedInvComment.module.base";
import { WedInvCommentService } from "./wedInvComment.service";
import { WedInvCommentController } from "./wedInvComment.controller";

@Module({
  imports: [WedInvCommentModuleBase, forwardRef(() => AuthModule)],
  controllers: [WedInvCommentController],
  providers: [WedInvCommentService],
  exports: [WedInvCommentService],
})
export class WedInvCommentModule {}
