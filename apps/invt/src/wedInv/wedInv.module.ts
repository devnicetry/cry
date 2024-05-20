import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WedInvModuleBase } from "./base/wedInv.module.base";
import { WedInvService } from "./wedInv.service";
import { WedInvController } from "./wedInv.controller";
import { WedInvGrpcController } from "./wedInv.grpc.controller";

@Module({
  imports: [WedInvModuleBase, forwardRef(() => AuthModule)],
  controllers: [WedInvController, WedInvGrpcController],
  providers: [WedInvService],
  exports: [WedInvService],
})
export class WedInvModule {}
