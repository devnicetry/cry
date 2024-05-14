import { InputJsonValue } from "../../types";
import { WedInvPaymentUpdateManyWithoutDtPaymentMethodsInput } from "./WedInvPaymentUpdateManyWithoutDtPaymentMethodsInput";

export type DtPaymentMethodUpdateInput = {
  account?: string | null;
  accountName?: string | null;
  accountNo?: string | null;
  accountType?: "EWallet" | "BankTransfer" | null;
  icon?: InputJsonValue;
  wedInvPayments?: WedInvPaymentUpdateManyWithoutDtPaymentMethodsInput;
};
