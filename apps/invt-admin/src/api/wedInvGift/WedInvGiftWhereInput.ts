import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DtGiftWhereUniqueInput } from "../dtGift/DtGiftWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvGiftWhereInput = {
  accountName?: StringNullableFilter;
  accountNo?: StringNullableFilter;
  accountPhoto?: StringNullableFilter;
  details?: StringNullableFilter;
  dtGift?: DtGiftWhereUniqueInput;
  id?: StringFilter;
  wedInv?: WedInvWhereUniqueInput;
};
