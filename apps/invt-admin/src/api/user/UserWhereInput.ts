import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { WedInvPaymentListRelationFilter } from "../wedInvPayment/WedInvPaymentListRelationFilter";
import { WedInvListRelationFilter } from "../wedInv/WedInvListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  status?: "Active" | "Nonactive";
  username?: StringFilter;
  wedInvPayments?: WedInvPaymentListRelationFilter;
  wedInvs?: WedInvListRelationFilter;
};
