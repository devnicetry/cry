import { WedInvPayment as TWedInvPayment } from "../api/wedInvPayment/WedInvPayment";

export const WEDINVPAYMENT_TITLE_FIELD = "accountName";

export const WedInvPaymentTitle = (record: TWedInvPayment): string => {
  return record.accountName?.toString() || String(record.id);
};
