import { DtPaymentMethod as TDtPaymentMethod } from "../api/dtPaymentMethod/DtPaymentMethod";

export const DTPAYMENTMETHOD_TITLE_FIELD = "accountName";

export const DtPaymentMethodTitle = (record: TDtPaymentMethod): string => {
  return record.accountName?.toString() || String(record.id);
};
