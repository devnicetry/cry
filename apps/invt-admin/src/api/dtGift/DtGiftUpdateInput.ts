import { WedInvGiftUpdateManyWithoutDtGiftsInput } from "./WedInvGiftUpdateManyWithoutDtGiftsInput";

export type DtGiftUpdateInput = {
  giftType?: "EWallet" | "BankTransfer" | "Qris" | "Shipping" | null;
  icon?: string | null;
  name?: string | null;
  wedInvGifts?: WedInvGiftUpdateManyWithoutDtGiftsInput;
};
