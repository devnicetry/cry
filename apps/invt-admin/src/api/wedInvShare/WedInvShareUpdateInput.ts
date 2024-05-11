import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";
import { WedInvCommentUpdateManyWithoutWedInvSharesInput } from "./WedInvCommentUpdateManyWithoutWedInvSharesInput";

export type WedInvShareUpdateInput = {
  frequency?: number | null;
  identity?: string | null;
  link?: string | null;
  name?: string | null;
  open?: boolean | null;
  wedInv?: WedInvWhereUniqueInput | null;
  wedInvComments?: WedInvCommentUpdateManyWithoutWedInvSharesInput;
};
