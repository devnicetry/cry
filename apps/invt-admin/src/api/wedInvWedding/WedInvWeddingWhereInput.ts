import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvWeddingWhereInput = {
  father?: StringNullableFilter;
  gender?: "Bride" | "Groom";
  id?: StringFilter;
  mother?: StringNullableFilter;
  name?: StringNullableFilter;
  photo?: StringNullableFilter;
  wedInvId?: WedInvWhereUniqueInput;
};
