import { InputJsonValue } from "../../types";
import { WedInvPaymentUpdateManyWithoutUsersInput } from "./WedInvPaymentUpdateManyWithoutUsersInput";
import { WedInvUpdateManyWithoutUsersInput } from "./WedInvUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  fullName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  status?: "Active" | "Nonactive" | null;
  username?: string;
  wedInvPayments?: WedInvPaymentUpdateManyWithoutUsersInput;
  wedInvs?: WedInvUpdateManyWithoutUsersInput;
};
