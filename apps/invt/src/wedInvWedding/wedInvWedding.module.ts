import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WedInvWeddingModuleBase } from "./base/wedInvWedding.module.base";
import { WedInvWeddingService } from "./wedInvWedding.service";
import { WedInvWeddingController } from "./wedInvWedding.controller";

@Module({
  imports: [WedInvWeddingModuleBase, forwardRef(() => AuthModule)],
  controllers: [WedInvWeddingController],
  providers: [WedInvWeddingService],
  exports: [WedInvWeddingService],
})
export class WedInvWeddingModule {}
