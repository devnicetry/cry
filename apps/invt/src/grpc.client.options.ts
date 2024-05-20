import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      "user",
      "wedinv",
      "wedinvevent",
      "wedinvstory",
      "wedinvgallery",
      "wedinvwedding",
      "dtgift",
      "wedinvgift",
      "wedinvshare",
      "wedinvcomment",
      "dtpaymentmethod",
      "wedinvpayment",
      "wedinvpreset",
      "wedinvvideo"
    ],
    protoPath: [
      "src/user/user.proto",
      "src/wedinv/wedinv.proto",
      "src/wedinvevent/wedinvevent.proto",
      "src/wedinvstory/wedinvstory.proto",
      "src/wedinvgallery/wedinvgallery.proto",
      "src/wedinvwedding/wedinvwedding.proto",
      "src/dtgift/dtgift.proto",
      "src/wedinvgift/wedinvgift.proto",
      "src/wedinvshare/wedinvshare.proto",
      "src/wedinvcomment/wedinvcomment.proto",
      "src/dtpaymentmethod/dtpaymentmethod.proto",
      "src/wedinvpayment/wedinvpayment.proto",
      "src/wedinvpreset/wedinvpreset.proto",
      "src/wedinvvideo/wedinvvideo.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
