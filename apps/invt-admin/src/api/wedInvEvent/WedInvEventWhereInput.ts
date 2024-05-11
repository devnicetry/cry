import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvEventWhereInput = {
  address?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  eventEnd?: StringNullableFilter;
  eventStart?: StringNullableFilter;
  id?: StringFilter;
  maps?: StringNullableFilter;
  name?: StringNullableFilter;
  place?: StringNullableFilter;
  wedInvId?: WedInvWhereUniqueInput;
  zone?: "Wib" | "Wita" | "Wit";
};
