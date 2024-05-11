import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";
import { WedInvShareWhereUniqueInput } from "../wedInvShare/WedInvShareWhereUniqueInput";

export type WedInvCommentUpdateInput = {
  comment?: string | null;
  confirmation?: string | null;
  moment?: string | null;
  name?: string | null;
  wedInv?: WedInvWhereUniqueInput | null;
  wedInvShare?: WedInvShareWhereUniqueInput | null;
};
