import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WedInvCommentListRelationFilter } from "../wedInvComment/WedInvCommentListRelationFilter";
import { WedInvEventListRelationFilter } from "../wedInvEvent/WedInvEventListRelationFilter";
import { WedInvGalleryListRelationFilter } from "../wedInvGallery/WedInvGalleryListRelationFilter";
import { WedInvGiftListRelationFilter } from "../wedInvGift/WedInvGiftListRelationFilter";
import { WedInvPaymentListRelationFilter } from "../wedInvPayment/WedInvPaymentListRelationFilter";
import { WedInvPresetListRelationFilter } from "../wedInvPreset/WedInvPresetListRelationFilter";
import { WedInvShareListRelationFilter } from "../wedInvShare/WedInvShareListRelationFilter";
import { WedInvStoryListRelationFilter } from "../wedInvStory/WedInvStoryListRelationFilter";
import { WedInvWeddingListRelationFilter } from "../wedInvWedding/WedInvWeddingListRelationFilter";

export type WedInvWhereInput = {
  id?: StringFilter;
  status?: "Active" | "Nonactive";
  url?: StringNullableFilter;
  userId?: UserWhereUniqueInput;
  wedInvComments?: WedInvCommentListRelationFilter;
  wedInvEvents?: WedInvEventListRelationFilter;
  wedInvGalleries?: WedInvGalleryListRelationFilter;
  wedInvGifts?: WedInvGiftListRelationFilter;
  wedInvPayments?: WedInvPaymentListRelationFilter;
  wedInvPresets?: WedInvPresetListRelationFilter;
  wedInvShares?: WedInvShareListRelationFilter;
  wedInvStories?: WedInvStoryListRelationFilter;
  wedInvWeddings?: WedInvWeddingListRelationFilter;
};
