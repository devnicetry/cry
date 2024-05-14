import { InputJsonValue } from "../../types";
import { WedInvGiftUpdateManyWithoutDtGiftsInput } from "./WedInvGiftUpdateManyWithoutDtGiftsInput";

export type DtGiftUpdateInput = {
  giftType?: "EWallet" | "BankTransfer" | "Qris" | "Shipping" | null;
  icon?: InputJsonValue;
  name?: string | null;
  wedInvGifts?: WedInvGiftUpdateManyWithoutDtGiftsInput;
};
