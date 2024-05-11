import { JsonValue } from "type-fest";
import { WedInvPayment } from "../wedInvPayment/WedInvPayment";
import { WedInv } from "../wedInv/WedInv";

export type User = {
  createdAt: Date;
  email: string | null;
  fullName: string | null;
  id: string;
  roles: JsonValue;
  status?: "Active" | "Nonactive" | null;
  updatedAt: Date;
  username: string;
  wedInvPayments?: Array<WedInvPayment>;
  wedInvs?: Array<WedInv>;
};
