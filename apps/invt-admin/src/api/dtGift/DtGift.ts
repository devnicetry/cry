import { WedInvGift } from "../wedInvGift/WedInvGift";

export type DtGift = {
  createdAt: Date;
  giftType?: "EWallet" | "BankTransfer" | "Qris" | "Shipping" | null;
  icon: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  wedInvGifts?: Array<WedInvGift>;
};
