import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DtPaymentMethodWhereUniqueInput } from "../dtPaymentMethod/DtPaymentMethodWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvPaymentWhereInput = {
  accountName?: StringNullableFilter;
  accountNo?: StringNullableFilter;
  amount?: IntNullableFilter;
  dtPaymentMethod?: DtPaymentMethodWhereUniqueInput;
  evidence?: JsonFilter;
  id?: StringFilter;
  noRef?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  wedInv?: WedInvWhereUniqueInput;
};
