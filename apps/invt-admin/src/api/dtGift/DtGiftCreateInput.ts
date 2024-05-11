import { WedInvGiftCreateNestedManyWithoutDtGiftsInput } from "./WedInvGiftCreateNestedManyWithoutDtGiftsInput";

export type DtGiftCreateInput = {
  giftType?: "EWallet" | "BankTransfer" | "Qris" | "Shipping" | null;
  icon?: string | null;
  name?: string | null;
  wedInvGifts?: WedInvGiftCreateNestedManyWithoutDtGiftsInput;
};
