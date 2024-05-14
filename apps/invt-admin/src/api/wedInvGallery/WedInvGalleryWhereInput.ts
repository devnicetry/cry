import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvGalleryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  photo?: JsonFilter;
  wedInv?: WedInvWhereUniqueInput;
};
