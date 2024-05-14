import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { WedInvPaymentListRelationFilter } from "../wedInvPayment/WedInvPaymentListRelationFilter";

export type DtPaymentMethodWhereInput = {
  account?: StringNullableFilter;
  accountName?: StringNullableFilter;
  accountNo?: StringNullableFilter;
  accountType?: "EWallet" | "BankTransfer";
  icon?: JsonFilter;
  id?: StringFilter;
  wedInvPayments?: WedInvPaymentListRelationFilter;
};
