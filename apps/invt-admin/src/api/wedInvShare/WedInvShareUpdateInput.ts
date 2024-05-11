import { WedInvCommentUpdateManyWithoutWedInvSharesInput } from "./WedInvCommentUpdateManyWithoutWedInvSharesInput";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvShareUpdateInput = {
  frequency?: number | null;
  identity?: string | null;
  link?: string | null;
  name?: string | null;
  open?: boolean | null;
  wedInvComments?: WedInvCommentUpdateManyWithoutWedInvSharesInput;
  wedInvId?: WedInvWhereUniqueInput | null;
};
