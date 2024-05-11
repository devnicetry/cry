import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvStoryWhereInput = {
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  photo?: StringNullableFilter;
  wedInv?: WedInvWhereUniqueInput;
};
