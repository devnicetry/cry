import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";
import { WedInvCommentCreateNestedManyWithoutWedInvSharesInput } from "./WedInvCommentCreateNestedManyWithoutWedInvSharesInput";

export type WedInvShareCreateInput = {
  frequency?: number | null;
  identity?: string | null;
  link?: string | null;
  name?: string | null;
  open?: boolean | null;
  wedInv?: WedInvWhereUniqueInput | null;
  wedInvComments?: WedInvCommentCreateNestedManyWithoutWedInvSharesInput;
};
