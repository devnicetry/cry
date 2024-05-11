import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvStoryCreateInput = {
  date?: Date | null;
  description?: string | null;
  name?: string | null;
  photo?: string | null;
  wedInvId?: WedInvWhereUniqueInput | null;
};
