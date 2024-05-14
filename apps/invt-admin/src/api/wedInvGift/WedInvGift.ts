import { JsonValue } from "type-fest";
import { DtGift } from "../dtGift/DtGift";
import { WedInv } from "../wedInv/WedInv";

export type WedInvGift = {
  accountName: string | null;
  accountNo: string | null;
  accountPhoto: JsonValue;
  createdAt: Date;
  details: string | null;
  dtGift?: DtGift | null;
  id: string;
  updatedAt: Date;
  wedInv?: WedInv | null;
};
