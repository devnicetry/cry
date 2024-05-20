import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WedInvShareModuleBase } from "./base/wedInvShare.module.base";
import { WedInvShareService } from "./wedInvShare.service";
import { WedInvShareController } from "./wedInvShare.controller";

@Module({
  imports: [WedInvShareModuleBase, forwardRef(() => AuthModule)],
  controllers: [WedInvShareController],
  providers: [WedInvShareService],
  exports: [WedInvShareService],
})
export class WedInvShareModule {}
