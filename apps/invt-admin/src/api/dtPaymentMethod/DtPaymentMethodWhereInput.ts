import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { WedInvPaymentListRelationFilter } from "../wedInvPayment/WedInvPaymentListRelationFilter";

export type DtPaymentMethodWhereInput = {
  account?: StringNullableFilter;
  accountName?: StringNullableFilter;
  accountNo?: StringNullableFilter;
  accountType?: "EWallet" | "BankTransfer";
  icon?: StringNullableFilter;
  id?: StringFilter;
  wedInvPayments?: WedInvPaymentListRelationFilter;
};
