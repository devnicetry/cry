import { DtPaymentMethodWhereInput } from "./DtPaymentMethodWhereInput";
import { DtPaymentMethodOrderByInput } from "./DtPaymentMethodOrderByInput";

export type DtPaymentMethodFindManyArgs = {
  where?: DtPaymentMethodWhereInput;
  orderBy?: Array<DtPaymentMethodOrderByInput>;
  skip?: number;
  take?: number;
};
