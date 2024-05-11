import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { WedInvGiftListRelationFilter } from "../wedInvGift/WedInvGiftListRelationFilter";

export type DtGiftWhereInput = {
  giftType?: "EWallet" | "BankTransfer" | "Qris" | "Shipping";
  icon?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  wedInvGifts?: WedInvGiftListRelationFilter;
};
