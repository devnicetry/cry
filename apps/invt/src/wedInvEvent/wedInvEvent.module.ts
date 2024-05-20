import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WedInvEventModuleBase } from "./base/wedInvEvent.module.base";
import { WedInvEventService } from "./wedInvEvent.service";
import { WedInvEventController } from "./wedInvEvent.controller";
import { WedInvEventGrpcController } from "./wedInvEvent.grpc.controller";

@Module({
  imports: [WedInvEventModuleBase, forwardRef(() => AuthModule)],
  controllers: [WedInvEventController, WedInvEventGrpcController],
  providers: [WedInvEventService],
  exports: [WedInvEventService],
})
export class WedInvEventModule {}
