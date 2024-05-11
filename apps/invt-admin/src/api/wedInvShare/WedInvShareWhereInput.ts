import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { WedInvCommentListRelationFilter } from "../wedInvComment/WedInvCommentListRelationFilter";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvShareWhereInput = {
  frequency?: IntNullableFilter;
  id?: StringFilter;
  identity?: StringNullableFilter;
  link?: StringNullableFilter;
  name?: StringNullableFilter;
  open?: BooleanNullableFilter;
  wedInvComments?: WedInvCommentListRelationFilter;
  wedInvId?: WedInvWhereUniqueInput;
};
