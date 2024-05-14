import { DtPaymentMethod } from "../dtPaymentMethod/DtPaymentMethod";
import { JsonValue } from "type-fest";
import { User } from "../user/User";
import { WedInv } from "../wedInv/WedInv";

export type WedInvPayment = {
  accountName: string | null;
  accountNo: string | null;
  amount: number | null;
  createdAt: Date;
  dtPaymentMethod?: DtPaymentMethod | null;
  evidence: JsonValue;
  id: string;
  noRef: string | null;
  updatedAt: Date;
  user?: User | null;
  wedInv?: WedInv | null;
};
