import { User } from "../user/User";
import { WedInvComment } from "../wedInvComment/WedInvComment";
import { WedInvEvent } from "../wedInvEvent/WedInvEvent";
import { WedInvGallery } from "../wedInvGallery/WedInvGallery";
import { WedInvGift } from "../wedInvGift/WedInvGift";
import { WedInvPayment } from "../wedInvPayment/WedInvPayment";
import { WedInvPreset } from "../wedInvPreset/WedInvPreset";
import { WedInvShare } from "../wedInvShare/WedInvShare";
import { WedInvStory } from "../wedInvStory/WedInvStory";
import { WedInvWedding } from "../wedInvWedding/WedInvWedding";

export type WedInv = {
  createdAt: Date;
  id: string;
  status?: "Active" | "Nonactive" | null;
  updatedAt: Date;
  url: string | null;
  userId?: User | null;
  wedInvComments?: Array<WedInvComment>;
  wedInvEvents?: Array<WedInvEvent>;
  wedInvGalleries?: Array<WedInvGallery>;
  wedInvGifts?: Array<WedInvGift>;
  wedInvPayments?: Array<WedInvPayment>;
  wedInvPresets?: Array<WedInvPreset>;
  wedInvShares?: Array<WedInvShare>;
  wedInvStories?: Array<WedInvStory>;
  wedInvWeddings?: Array<WedInvWedding>;
};
