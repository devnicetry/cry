import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";
import { WedInvCommentListRelationFilter } from "../wedInvComment/WedInvCommentListRelationFilter";

export type WedInvShareWhereInput = {
  frequency?: IntNullableFilter;
  id?: StringFilter;
  identity?: StringNullableFilter;
  link?: StringNullableFilter;
  name?: StringNullableFilter;
  open?: BooleanNullableFilter;
  wedInv?: WedInvWhereUniqueInput;
  wedInvComments?: WedInvCommentListRelationFilter;
};
