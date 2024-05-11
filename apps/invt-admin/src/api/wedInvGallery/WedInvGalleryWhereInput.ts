import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvGalleryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  photo?: StringNullableFilter;
  wedInv?: WedInvWhereUniqueInput;
};
