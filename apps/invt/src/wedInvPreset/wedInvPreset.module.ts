import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WedInvPresetModuleBase } from "./base/wedInvPreset.module.base";
import { WedInvPresetService } from "./wedInvPreset.service";
import { WedInvPresetController } from "./wedInvPreset.controller";
import { WedInvPresetGrpcController } from "./wedInvPreset.grpc.controller";

@Module({
  imports: [WedInvPresetModuleBase, forwardRef(() => AuthModule)],
  controllers: [WedInvPresetController, WedInvPresetGrpcController],
  providers: [WedInvPresetService],
  exports: [WedInvPresetService],
})
export class WedInvPresetModule {}
