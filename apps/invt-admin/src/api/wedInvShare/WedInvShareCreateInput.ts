import { WedInvCommentCreateNestedManyWithoutWedInvSharesInput } from "./WedInvCommentCreateNestedManyWithoutWedInvSharesInput";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvShareCreateInput = {
  frequency?: number | null;
  identity?: string | null;
  link?: string | null;
  name?: string | null;
  open?: boolean | null;
  wedInvComments?: WedInvCommentCreateNestedManyWithoutWedInvSharesInput;
  wedInvId?: WedInvWhereUniqueInput | null;
};
