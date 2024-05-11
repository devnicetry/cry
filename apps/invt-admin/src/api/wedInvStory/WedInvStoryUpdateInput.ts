import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvStoryUpdateInput = {
  date?: Date | null;
  description?: string | null;
  name?: string | null;
  photo?: string | null;
  wedInv?: WedInvWhereUniqueInput | null;
};
