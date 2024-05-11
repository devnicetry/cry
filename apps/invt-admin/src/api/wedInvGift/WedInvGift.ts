import { DtGift } from "../dtGift/DtGift";
import { WedInv } from "../wedInv/WedInv";

export type WedInvGift = {
  accountName: string | null;
  accountNo: string | null;
  accountPhoto: string | null;
  createdAt: Date;
  details: string | null;
  dtGiftId?: DtGift | null;
  id: string;
  updatedAt: Date;
  wedInvId?: WedInv | null;
};
