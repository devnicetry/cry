import { WedInvPaymentWhereInput } from "./WedInvPaymentWhereInput";
import { WedInvPaymentOrderByInput } from "./WedInvPaymentOrderByInput";

export type WedInvPaymentFindManyArgs = {
  where?: WedInvPaymentWhereInput;
  orderBy?: Array<WedInvPaymentOrderByInput>;
  skip?: number;
  take?: number;
};
