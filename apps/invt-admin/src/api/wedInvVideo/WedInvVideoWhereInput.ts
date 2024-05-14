import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvVideoWhereInput = {
  id?: StringFilter;
  video?: JsonFilter;
  wedInv?: WedInvWhereUniqueInput;
};
