import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";
import { WedInvShareWhereUniqueInput } from "../wedInvShare/WedInvShareWhereUniqueInput";

export type WedInvCommentCreateInput = {
  comment?: string | null;
  confirmation?: string | null;
  moment?: string | null;
  name?: string | null;
  wedInvId?: WedInvWhereUniqueInput | null;
  wedInvShareId?: WedInvShareWhereUniqueInput | null;
};
