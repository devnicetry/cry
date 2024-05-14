import { InputJsonValue } from "../../types";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvStoryUpdateInput = {
  date?: Date | null;
  description?: string | null;
  name?: string | null;
  photo?: InputJsonValue;
  wedInv?: WedInvWhereUniqueInput | null;
};
