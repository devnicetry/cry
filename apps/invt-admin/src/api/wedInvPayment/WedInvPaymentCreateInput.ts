import { DtPaymentMethodWhereUniqueInput } from "../dtPaymentMethod/DtPaymentMethodWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvPaymentCreateInput = {
  accountName?: string | null;
  accountNo?: string | null;
  amount?: number | null;
  dtPaymentMethodId?: DtPaymentMethodWhereUniqueInput | null;
  evidence?: string | null;
  noRef?: string | null;
  userId?: UserWhereUniqueInput | null;
  wedInvId?: WedInvWhereUniqueInput | null;
};
