import { DtPaymentMethod } from "../dtPaymentMethod/DtPaymentMethod";
import { User } from "../user/User";
import { WedInv } from "../wedInv/WedInv";

export type WedInvPayment = {
  accountName: string | null;
  accountNo: string | null;
  amount: number | null;
  createdAt: Date;
  dtPaymentMethod?: DtPaymentMethod | null;
  evidence: string | null;
  id: string;
  noRef: string | null;
  updatedAt: Date;
  user?: User | null;
  wedInv?: WedInv | null;
};
