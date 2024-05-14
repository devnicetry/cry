import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WedInvGiftListRelationFilter } from "../wedInvGift/WedInvGiftListRelationFilter";

export type DtGiftWhereInput = {
  giftType?: "EWallet" | "BankTransfer" | "Qris" | "Shipping";
  icon?: JsonFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  wedInvGifts?: WedInvGiftListRelationFilter;
};
