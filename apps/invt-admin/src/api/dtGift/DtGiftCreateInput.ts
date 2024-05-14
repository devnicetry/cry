import { InputJsonValue } from "../../types";
import { WedInvGiftCreateNestedManyWithoutDtGiftsInput } from "./WedInvGiftCreateNestedManyWithoutDtGiftsInput";

export type DtGiftCreateInput = {
  giftType?: "EWallet" | "BankTransfer" | "Qris" | "Shipping" | null;
  icon?: InputJsonValue;
  name?: string | null;
  wedInvGifts?: WedInvGiftCreateNestedManyWithoutDtGiftsInput;
};
