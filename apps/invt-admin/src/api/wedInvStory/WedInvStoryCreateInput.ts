import { InputJsonValue } from "../../types";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvStoryCreateInput = {
  date?: Date | null;
  description?: string | null;
  name?: string | null;
  photo?: InputJsonValue;
  wedInv?: WedInvWhereUniqueInput | null;
};
