import { JsonValue } from "type-fest";
import { WedInvPayment } from "../wedInvPayment/WedInvPayment";

export type DtPaymentMethod = {
  account: string | null;
  accountName: string | null;
  accountNo: string | null;
  accountType?: "EWallet" | "BankTransfer" | null;
  createdAt: Date;
  icon: JsonValue;
  id: string;
  updatedAt: Date;
  wedInvPayments?: Array<WedInvPayment>;
};
