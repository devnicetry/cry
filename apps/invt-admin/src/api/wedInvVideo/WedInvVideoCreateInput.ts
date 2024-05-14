import { InputJsonValue } from "../../types";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvVideoCreateInput = {
  video?: InputJsonValue;
  wedInv?: WedInvWhereUniqueInput | null;
};
