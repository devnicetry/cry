import { WedInvPaymentCreateNestedManyWithoutDtPaymentMethodsInput } from "./WedInvPaymentCreateNestedManyWithoutDtPaymentMethodsInput";

export type DtPaymentMethodCreateInput = {
  account?: string | null;
  accountName?: string | null;
  accountNo?: string | null;
  accountType?: "EWallet" | "BankTransfer" | null;
  icon?: string | null;
  wedInvPayments?: WedInvPaymentCreateNestedManyWithoutDtPaymentMethodsInput;
};
