import { InputJsonValue } from "../../types";
import { WedInvPaymentCreateNestedManyWithoutUsersInput } from "./WedInvPaymentCreateNestedManyWithoutUsersInput";
import { WedInvCreateNestedManyWithoutUsersInput } from "./WedInvCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  fullName?: string | null;
  password: string;
  roles: InputJsonValue;
  status?: "Active" | "Nonactive" | null;
  username: string;
  wedInvPayments?: WedInvPaymentCreateNestedManyWithoutUsersInput;
  wedInvs?: WedInvCreateNestedManyWithoutUsersInput;
};
