import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WedInvGalleryModuleBase } from "./base/wedInvGallery.module.base";
import { WedInvGalleryService } from "./wedInvGallery.service";
import { WedInvGalleryController } from "./wedInvGallery.controller";
import { WedInvGalleryGrpcController } from "./wedInvGallery.grpc.controller";

@Module({
  imports: [WedInvGalleryModuleBase, forwardRef(() => AuthModule)],
  controllers: [WedInvGalleryController, WedInvGalleryGrpcController],
  providers: [WedInvGalleryService],
  exports: [WedInvGalleryService],
})
export class WedInvGalleryModule {}
