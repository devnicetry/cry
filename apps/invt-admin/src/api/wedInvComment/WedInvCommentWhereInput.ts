import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";
import { WedInvShareWhereUniqueInput } from "../wedInvShare/WedInvShareWhereUniqueInput";

export type WedInvCommentWhereInput = {
  comment?: StringNullableFilter;
  confirmation?: StringNullableFilter;
  id?: StringFilter;
  moment?: StringNullableFilter;
  name?: StringNullableFilter;
  wedInvId?: WedInvWhereUniqueInput;
  wedInvShareId?: WedInvShareWhereUniqueInput;
};
