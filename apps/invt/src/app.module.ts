import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { WedInvModule } from "./wedInv/wedInv.module";
import { WedInvEventModule } from "./wedInvEvent/wedInvEvent.module";
import { WedInvStoryModule } from "./wedInvStory/wedInvStory.module";
import { WedInvGalleryModule } from "./wedInvGallery/wedInvGallery.module";
import { WedInvWeddingModule } from "./wedInvWedding/wedInvWedding.module";
import { DtGiftModule } from "./dtGift/dtGift.module";
import { WedInvGiftModule } from "./wedInvGift/wedInvGift.module";
import { WedInvShareModule } from "./wedInvShare/wedInvShare.module";
import { WedInvCommentModule } from "./wedInvComment/wedInvComment.module";
import { DtPaymentMethodModule } from "./dtPaymentMethod/dtPaymentMethod.module";
import { WedInvPaymentModule } from "./wedInvPayment/wedInvPayment.module";
import { WedInvPresetModule } from "./wedInvPreset/wedInvPreset.module";
import { WedInvVideoModule } from "./wedInvVideo/wedInvVideo.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { StorageModule } from "./storage/storage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    StorageModule,
    ACLModule,
    AuthModule,
    UserModule,
    WedInvModule,
    WedInvEventModule,
    WedInvStoryModule,
    WedInvGalleryModule,
    WedInvWeddingModule,
    DtGiftModule,
    WedInvGiftModule,
    WedInvShareModule,
    WedInvCommentModule,
    DtPaymentMethodModule,
    WedInvPaymentModule,
    WedInvPresetModule,
    WedInvVideoModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}
