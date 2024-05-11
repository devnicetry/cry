import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WedInvCommentUpdateManyWithoutWedInvsInput } from "./WedInvCommentUpdateManyWithoutWedInvsInput";
import { WedInvEventUpdateManyWithoutWedInvsInput } from "./WedInvEventUpdateManyWithoutWedInvsInput";
import { WedInvGalleryUpdateManyWithoutWedInvsInput } from "./WedInvGalleryUpdateManyWithoutWedInvsInput";
import { WedInvGiftUpdateManyWithoutWedInvsInput } from "./WedInvGiftUpdateManyWithoutWedInvsInput";
import { WedInvPaymentUpdateManyWithoutWedInvsInput } from "./WedInvPaymentUpdateManyWithoutWedInvsInput";
import { WedInvPresetUpdateManyWithoutWedInvsInput } from "./WedInvPresetUpdateManyWithoutWedInvsInput";
import { WedInvShareUpdateManyWithoutWedInvsInput } from "./WedInvShareUpdateManyWithoutWedInvsInput";
import { WedInvStoryUpdateManyWithoutWedInvsInput } from "./WedInvStoryUpdateManyWithoutWedInvsInput";
import { WedInvWeddingUpdateManyWithoutWedInvsInput } from "./WedInvWeddingUpdateManyWithoutWedInvsInput";

export type WedInvUpdateInput = {
  status?: "Active" | "Nonactive" | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
  wedInvComments?: WedInvCommentUpdateManyWithoutWedInvsInput;
  wedInvEvents?: WedInvEventUpdateManyWithoutWedInvsInput;
  wedInvGalleries?: WedInvGalleryUpdateManyWithoutWedInvsInput;
  wedInvGifts?: WedInvGiftUpdateManyWithoutWedInvsInput;
  wedInvPayments?: WedInvPaymentUpdateManyWithoutWedInvsInput;
  wedInvPresets?: WedInvPresetUpdateManyWithoutWedInvsInput;
  wedInvShares?: WedInvShareUpdateManyWithoutWedInvsInput;
  wedInvStories?: WedInvStoryUpdateManyWithoutWedInvsInput;
  wedInvWeddings?: WedInvWeddingUpdateManyWithoutWedInvsInput;
};
