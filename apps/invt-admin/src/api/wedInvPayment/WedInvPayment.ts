import { DtPaymentMethod } from "../dtPaymentMethod/DtPaymentMethod";
import { User } from "../user/User";
import { WedInv } from "../wedInv/WedInv";

export type WedInvPayment = {
  accountName: string | null;
  accountNo: string | null;
  amount: number | null;
  createdAt: Date;
  dtPaymentMethodId?: DtPaymentMethod | null;
  evidence: string | null;
  id: string;
  noRef: string | null;
  updatedAt: Date;
  userId?: User | null;
  wedInvId?: WedInv | null;
};
