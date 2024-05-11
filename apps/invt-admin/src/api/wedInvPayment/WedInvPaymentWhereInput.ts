import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DtPaymentMethodWhereUniqueInput } from "../dtPaymentMethod/DtPaymentMethodWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvPaymentWhereInput = {
  accountName?: StringNullableFilter;
  accountNo?: StringNullableFilter;
  amount?: IntNullableFilter;
  dtPaymentMethodId?: DtPaymentMethodWhereUniqueInput;
  evidence?: StringNullableFilter;
  id?: StringFilter;
  noRef?: StringNullableFilter;
  userId?: UserWhereUniqueInput;
  wedInvId?: WedInvWhereUniqueInput;
};
