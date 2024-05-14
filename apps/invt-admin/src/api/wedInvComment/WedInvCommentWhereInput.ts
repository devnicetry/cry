import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";
import { WedInvShareWhereUniqueInput } from "../wedInvShare/WedInvShareWhereUniqueInput";

export type WedInvCommentWhereInput = {
  comment?: StringNullableFilter;
  confirmation?: StringNullableFilter;
  id?: StringFilter;
  moment?: JsonFilter;
  name?: StringNullableFilter;
  wedInv?: WedInvWhereUniqueInput;
  wedInvShare?: WedInvShareWhereUniqueInput;
};
