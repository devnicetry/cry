import { DtPaymentMethodWhereUniqueInput } from "../dtPaymentMethod/DtPaymentMethodWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvPaymentUpdateInput = {
  accountName?: string | null;
  accountNo?: string | null;
  amount?: number | null;
  dtPaymentMethod?: DtPaymentMethodWhereUniqueInput | null;
  evidence?: InputJsonValue;
  noRef?: string | null;
  user?: UserWhereUniqueInput | null;
  wedInv?: WedInvWhereUniqueInput | null;
};
