import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WedInvCommentCreateNestedManyWithoutWedInvsInput } from "./WedInvCommentCreateNestedManyWithoutWedInvsInput";
import { WedInvEventCreateNestedManyWithoutWedInvsInput } from "./WedInvEventCreateNestedManyWithoutWedInvsInput";
import { WedInvGalleryCreateNestedManyWithoutWedInvsInput } from "./WedInvGalleryCreateNestedManyWithoutWedInvsInput";
import { WedInvGiftCreateNestedManyWithoutWedInvsInput } from "./WedInvGiftCreateNestedManyWithoutWedInvsInput";
import { WedInvPaymentCreateNestedManyWithoutWedInvsInput } from "./WedInvPaymentCreateNestedManyWithoutWedInvsInput";
import { WedInvPresetCreateNestedManyWithoutWedInvsInput } from "./WedInvPresetCreateNestedManyWithoutWedInvsInput";
import { WedInvShareCreateNestedManyWithoutWedInvsInput } from "./WedInvShareCreateNestedManyWithoutWedInvsInput";
import { WedInvStoryCreateNestedManyWithoutWedInvsInput } from "./WedInvStoryCreateNestedManyWithoutWedInvsInput";
import { WedInvVideoCreateNestedManyWithoutWedInvsInput } from "./WedInvVideoCreateNestedManyWithoutWedInvsInput";
import { WedInvWeddingCreateNestedManyWithoutWedInvsInput } from "./WedInvWeddingCreateNestedManyWithoutWedInvsInput";

export type WedInvCreateInput = {
  status?: "Active" | "Nonactive" | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
  wedInvComments?: WedInvCommentCreateNestedManyWithoutWedInvsInput;
  wedInvEvents?: WedInvEventCreateNestedManyWithoutWedInvsInput;
  wedInvGalleries?: WedInvGalleryCreateNestedManyWithoutWedInvsInput;
  wedInvGifts?: WedInvGiftCreateNestedManyWithoutWedInvsInput;
  wedInvPayments?: WedInvPaymentCreateNestedManyWithoutWedInvsInput;
  wedInvPresets?: WedInvPresetCreateNestedManyWithoutWedInvsInput;
  wedInvShares?: WedInvShareCreateNestedManyWithoutWedInvsInput;
  wedInvStories?: WedInvStoryCreateNestedManyWithoutWedInvsInput;
  wedInvVideos?: WedInvVideoCreateNestedManyWithoutWedInvsInput;
  wedInvWeddings?: WedInvWeddingCreateNestedManyWithoutWedInvsInput;
};
