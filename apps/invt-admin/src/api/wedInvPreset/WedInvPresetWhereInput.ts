import { StringFilter } from "../../util/StringFilter";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvPresetWhereInput = {
  id?: StringFilter;
  wedInv?: WedInvWhereUniqueInput;
};
