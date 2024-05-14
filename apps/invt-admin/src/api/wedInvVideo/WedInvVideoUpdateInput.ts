import { InputJsonValue } from "../../types";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvVideoUpdateInput = {
  video?: InputJsonValue;
  wedInv?: WedInvWhereUniqueInput | null;
};
